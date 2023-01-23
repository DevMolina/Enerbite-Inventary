import { Button, ListItem, ListItemButton, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { confirmDeleteItem, setActiveItem, setEditItem } from "../../store/enerbit/inventarySlice";

export const InventaryListItem = ({ item = [] }) => {

    const dispatch = useDispatch();

    const onClickItem = () => {
        dispatch(setActiveItem(item));
    }

    const onDeleteItem = () => {
        dispatch(confirmDeleteItem(item));
    }

    const onEditItem = () => {
        dispatch(setEditItem(item));
    }

    return (
        <ListItem
            secondaryAction={
                <>
                    <Button variant="outlined" color="warning" startIcon={<EditIcon />} onClick={onEditItem}>
                        Edit
                    </Button>
                    <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={onDeleteItem}>
                        Delete
                    </Button>
                </>
            }
        >
            <ListItemButton onClick={onClickItem}>
                <ListItemText
                    primary={`Item: ID: ${item.id}`}
                    secondary={`Serial: ${item.serial}`}
                />
            </ListItemButton>
        </ListItem>
    )
}
