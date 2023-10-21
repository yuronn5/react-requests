import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');
    //response.data === [{id: 1, name: 'Myra'}] get all of names list;

    //dev only
    await pause(1000);

    return response.data;
});

//dev only!!!
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

export { fetchUsers };