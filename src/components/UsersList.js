import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

function UsersList() {
    const dispatch = useDispatch();

    useEffect(() => {
        //first render after page loading (fetch out users list)
        dispatch(fetchUsers());
    }, []);

    return "userslist";
}

export default UsersList;