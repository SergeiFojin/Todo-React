import axios, { AxiosError } from 'axios';

export async function getTasksRequest() {
  try {
    const response = await axios.get(`${process.env.REACT_APP_LOCALHOST_URL}/api/`);
    return response.data;
  } catch (e) {
    const err = e as AxiosError;
    return (err.message);
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
    const err = e as AxiosError;
    return (err.message);
  }
}

export async function completeTaskRequest(id: string, isCompleted: boolean) {
  try {
    const response = await axios.put(`${process.env.REACT_APP_LOCALHOST_URL}/api/task`, {
      id,
      isCompleted,
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    const err = e as AxiosError;
    return (err.message);
  }
}

export async function deleteTaskRequest(id: string) {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_LOCALHOST_URL}/api/task?id=${id}`);
    return response.data;
  } catch (e) {
    const err = e as AxiosError;
    return (err.message);
  }
}
