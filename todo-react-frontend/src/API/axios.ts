import axios from 'axios';

export async function getTasksRequest() {
  const response = await axios.get(`${process.env.REACT_APP_LOCALHOST_URL}/api/`);
  return response.data;
}

export async function addTaskRequest(value: string, isCompleted: boolean) {
  const response = await axios.post(`${process.env.REACT_APP_LOCALHOST_URL}/api/task`, {
    value,
    isCompleted,
  });
  return response.data;
}

export async function completeTaskRequest(id: string, isCompleted: boolean) {
  const response = await axios.put(`${process.env.REACT_APP_LOCALHOST_URL}/api/task`, {
    id,
    isCompleted,
  });
  console.log(response.data);
  return response.data;
}

export async function deleteTaskRequest(id: string) {
  const response = await axios.delete(`${process.env.REACT_APP_LOCALHOST_URL}/api/task?id=${id}`);
  return response.data;
}
