import { Grid, List } from "@mui/material"
import { useSelector } from "react-redux";
import { InventaryListItem } from "./InventaryListItem";


export const InventaryList = () => {

    const { items } = useSelector(state => state.inventary);

    return (
        <>
            <Grid item xs={6} md={6} >
                <List>
                    {items?.map((item) => (
                        <InventaryListItem key={item.id} item={item} />
                    ))}

                </List>
            </Grid>
        </>
    )
}
