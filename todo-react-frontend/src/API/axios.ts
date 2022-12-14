import axios from "axios";

export async function getTasksRequest() {
    try {
        const response = await axios.get('http://localhost:4000/api/');
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function addTaskRequest (value: string, isCompleted: boolean) {
    try {
        const response = await axios.post(`http://localhost:4000/api/task`, {
            value,
            isCompleted
        })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function completeTaskRequest (id: string, isCompleted: boolean) {
    try {
        const response = await axios.put(`http://localhost:4000/api/task`, {
            id,
            isCompleted
        })
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function deleteTaskRequest (id: string) {
    try {
        const response = await axios.delete(`http://localhost:4000/api/task?id=${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
