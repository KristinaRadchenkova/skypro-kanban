const KANBAN_API_URL = "https://wedev-api.sky.pro/api/kanban";
const AUTH_API_URL = "https://wedev-api.sky.pro/api/user";

let tasksCache = null;
let tasksCacheTime = null;
const CACHE_DURATION = 5 * 60 * 1000;

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

let navigateFunction = null;

export const setNavigate = (navigate) => {
  navigateFunction = navigate;
};

const handleResponse = async (response) => {
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      clearTasksCache();

      if (navigateFunction) {
        navigateFunction("/login");
      }

      throw new Error("Сессия истекла. Пожалуйста, войдите снова.");
    }

    const error = await response.json().catch(() => ({}));
    throw new Error(
      error.message || error.error || `Ошибка HTTP! статус: ${response.status}`,
    );
  }
  return response.json();
};

export const clearTasksCache = () => {
  tasksCache = null;
  tasksCacheTime = null;
};

const isCacheValid = () => {
  return (
    tasksCache && tasksCacheTime && Date.now() - tasksCacheTime < CACHE_DURATION
  );
};

const setTasksCache = (tasks) => {
  tasksCache = tasks;
  tasksCacheTime = Date.now();
};

const getTasksFromCache = () => {
  return isCacheValid() ? tasksCache : null;
};

export const tasksAPI = {
  getAll: async (forceRefresh = false) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Нет токена авторизации");
    }

    if (!forceRefresh) {
      const cachedTasks = getTasksFromCache();
      if (cachedTasks) {
        return cachedTasks;
      }
    }

    const response = await fetch(KANBAN_API_URL, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    const data = await handleResponse(response);
    const tasks = data.tasks || [];
    setTasksCache(tasks);
    return tasks;
  },

  getTasksFromCache: () => {
    return getTasksFromCache();
  },

  getById: async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Нет токена авторизации");
    }

    const cachedTasks = getTasksFromCache();
    if (cachedTasks) {
      const cachedTask = cachedTasks.find((task) => task._id === id);
      if (cachedTask) {
        return cachedTask;
      }
    }

    const response = await fetch(`${KANBAN_API_URL}/${id}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    const data = await handleResponse(response);
    return data.task;
  },

  create: async (taskData) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Нет токена авторизации");
    }

    const taskToSend = {
      title: taskData.title || "Новая задача",
      topic: taskData.theme || taskData.topic || "Research",
      status: taskData.status || "Без статуса",
      description: taskData.description || "",
      date: taskData.date
        ? new Date(taskData.date).toISOString()
        : new Date().toISOString(),
    };

    const response = await fetch(KANBAN_API_URL, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(taskToSend),
    });
    const data = await handleResponse(response);
    const tasks = data.tasks || [];
    setTasksCache(tasks);
    return tasks;
  },

  update: async (id, taskData) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Нет токена авторизации");
    }

    const response = await fetch(`${KANBAN_API_URL}/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        title: taskData.title,
        topic: taskData.theme || taskData.topic,
        status: taskData.status,
        description: taskData.description,
        date: taskData.date
          ? new Date(taskData.date).toISOString()
          : new Date().toISOString(),
      }),
    });
    const data = await handleResponse(response);
    const tasks = data.tasks || [];
    setTasksCache(tasks);
    return tasks;
  },

  delete: async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Нет токена авторизации");
    }

    const response = await fetch(`${KANBAN_API_URL}/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    const data = await handleResponse(response);
    const tasks = data.tasks || [];
    setTasksCache(tasks);
    return tasks;
  },

  updateStatus: async (id, status) => {
    const task = await tasksAPI.getById(id);

    const cachedTasks = getTasksFromCache();
    if (cachedTasks) {
      const updatedTasks = cachedTasks.map((task) =>
        task._id === id ? { ...task, status } : task,
      );
      setTasksCache(updatedTasks);
    }

    const result = await tasksAPI.update(id, {
      ...task,
      status,
      theme: task.topic,
    });

    return result;
  },
};

export const authAPI = {
  login: async (login, password) => {
    const response = await fetch(`${AUTH_API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ login, password }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        error.message || error.error || "Неверный логин или пароль",
      );
    }

    const data = await response.json();

    if (data.user && data.user.token) {
      localStorage.setItem("token", data.user.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.user.id,
          name: data.user.name,
          login: data.user.login,
        }),
      );
      clearTasksCache();
    }

    return data;
  },

  register: async (login, name, password) => {
    const response = await fetch(`${AUTH_API_URL}`, {
      method: "POST",
      body: JSON.stringify({ login, name, password }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        error.message ||
          error.error ||
          "Ошибка при регистрации. Возможно, такой логин уже существует.",
      );
    }

    const data = await response.json();

    if (data.user && data.user.token) {
      localStorage.setItem("token", data.user.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.user.id,
          name: data.user.name,
          login: data.user.login,
        }),
      );
      clearTasksCache();
    }

    return data;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    clearTasksCache();
  },

  getCurrentUser: () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch (e) {
        return null;
      }
    }
    return null;
  },
};
