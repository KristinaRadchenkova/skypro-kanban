import { createContext, useContext, useState, useCallback } from 'react';
import { tasksAPI } from '../services/api';

const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async (forceRefresh = false) => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedTasks = await tasksAPI.getAll(forceRefresh);
      setTasks(fetchedTasks);
      return fetchedTasks;
    } catch (err) {
      setError(err.message || 'Не удалось загрузить задачи');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createTask = useCallback(async (taskData) => {
    const updatedTasks = await tasksAPI.create(taskData);
    setTasks(updatedTasks);
    return updatedTasks;
  }, []);

  const updateTask = useCallback(async (id, taskData) => {
    const updatedTasks = await tasksAPI.update(id, taskData);
    setTasks(updatedTasks);
    return updatedTasks;
  }, []);

  const deleteTask = useCallback(async (id) => {
    const updatedTasks = await tasksAPI.delete(id);
    setTasks(updatedTasks);
    return updatedTasks;
  }, []);

  const updateTaskStatus = useCallback(async (id, status) => {
    const updatedTasks = await tasksAPI.updateStatus(id, status);
    setTasks(updatedTasks);
    return updatedTasks;
  }, []);

  const value = {
    tasks,
    isLoading,
    error,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    setTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks должен использоваться внутри TaskProvider');
  }
  return context;
};

export default TaskContext;