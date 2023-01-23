import { addItemInfo, deleteItem, setItems, updateItem, uptdatePage } from "./inventarySlice";

export const startLoadItems = (page, size) => {
    return async (dispatch) => {
        const urlAPI = `https://ops.enerbit.dev/learning/api/v1/meters?page=${page}&size=${size}`;
        const response = await fetch(urlAPI);
        const data = await response.json();
        console.log(data);
        if (data.detail === "Not results.") {
            console.log("No se encontraton resultados");
        } else {
            dispatch(setItems(data.items))
        }

        dispatch(uptdatePage({ ...data }))
    }
}

export const startDeleteItem = (item) => {
    return async (dispatch) => {
        const urlAPI = `https://ops.enerbit.dev/learning/api/v1/meters/${item.id}`;
        const data = await fetch(urlAPI, { method: 'DELETE' });
        dispatch(deleteItem(item.id));
    }
}

export const startUpdateItem = (item, id) => {
    return async (dispatch) => {
        const urlAPI = `https://ops.enerbit.dev/learning/api/v1/meters/${id}`;
        const body = JSON.stringify({
            ...item
        });
        const resp = await fetch(urlAPI, {
            method: 'PATCH',
            body: body,
            headers: {
                'Content-type': 'application/json',
                'accept': 'application/json',
            }
        });
        dispatch(updateItem({ ...item, id }));
    }
}

export const startAddItem = (item) => {
    return async (dispatch) => {
        const urlAPI = 'https://ops.enerbit.dev/learning/api/v1/meters';
        const body = JSON.stringify({ ...item });
        // for (const i in item) {
        //     console.log(typeof (item[i]));
        // }
        const resp = await fetch(urlAPI, {
            method: 'POST',
            body: body,
            headers: {
                'accept': 'application/json',
                'Content-type': 'application/json',
            }
        });
        dispatch(addItemInfo(item));
        // dispatch(addItemInfo());
    }
}