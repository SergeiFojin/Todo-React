import axios from 'axios';
import { ErrorLogsEnum } from '../types/errorLogs';

export async function getTasksRequest() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_LOCALHOST_URL}/api/`);
    return response.data;
  } catch (e) {
    console.log(ErrorLogsEnum.GET_TODOS_ERROR, e);
  }
}

export async function addTaskRequest(value: string, isCompleted: boolean) {
  try {
    const response = await axios.post(`${process.env.REACT_APP_LOCALHOST_URL}/api/task`, {
      value,
      isCompleted,
    });
    return response.data;
  } catch (e) {
    console.log(ErrorLogsEnum.ADD_TODO_ERROR, e);
  }
}

export async function completeTaskRequest(id: string, isCompleted: boolean) {
  try {
    const response = await axios.put(`${process.env.REACT_APP_LOCALHOST_URL}/api/task`, {
      id,
      isCompleted,
    });
    return response.data;
  } catch (e) {
    console.log(ErrorLogsEnum.COMPLETE_TODO_ERROR, e);
  }
}

export async function deleteTaskRequest(id: string) {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_LOCALHOST_URL}/api/task?id=${id}`);
    return response.data;
  } catch (e) {
    console.log(ErrorLogsEnum.DELETE_TODO_ERROR, e);
  }
}
