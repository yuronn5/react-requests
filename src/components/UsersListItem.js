import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";

function UsersListItem({user}) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    }

    const header = <>
        <Button loading={isLoading} onClick={handleClick}>
            <GoTrash />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
    </>

    return (
        <ExpandablePanel header={header}>
            Content!!!
        </ExpandablePanel>
    );
}

export default UsersListItem;