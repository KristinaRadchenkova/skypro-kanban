const KANBAN_API_URL = "https://wedev-api.sky.pro/api/kanban";
const AUTH_API_URL = "https://wedev-api.sky.pro/api/user";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

const handleResponse = async (response) => {
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      if (
        typeof window !== "undefined" &&
        !window.location.pathname.includes("/login")
      ) {
        window.location.href = "/login";
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

export const tasksAPI = {
  getAll: async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Нет токена авторизации");
    }

    const response = await fetch(KANBAN_API_URL, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    const data = await handleResponse(response);
    return data.tasks || [];
  },

  getById: async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Нет токена авторизации");
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
    return data.tasks || [];
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
    return data.tasks || [];
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
    return data.tasks || [];
  },

  updateStatus: async (id, status) => {
    const task = await tasksAPI.getById(id);
    return tasksAPI.update(id, {
      ...task,
      status,
      theme: task.topic,
    });
  },
};

export const authAPI = {
  login: async (login, password) => {
    // Убираем заголовок Content-Type, API не умеет с ним работать
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
    }

    return data;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
