import { createSlice } from '@reduxjs/toolkit';

export const inventarySlice = createSlice({
    name: 'inventary',
    initialState: {
        isActiveItem: false,
        items: [],
        activeItem: null,
        confirmDelete: false,
        isEdit: false,
        isAddItem: false,
        page: 0,
        pages: 1,
    },
    reducers: {
        setItems: (state, action) => {
            state.isActiveItem = false;
            state.items = action.payload;
            state.confirmDelete = false;
        },
        setActiveItem: (state, action) => {
            state.isActiveItem = true;
            state.activeItem = action.payload;
            state.confirmDelete = false;
        },
        setDeactivateItem: (state) => {
            state.isActiveItem = false;
            state.confirmDelete = false;
        },
        confirmDeleteItem: (state, action) => {
            state.isActiveItem = false;
            state.activeItem = action.payload;
            state.confirmDelete = true;
        },
        deleteItem: (state, action) => {
            state.isActiveItem = false;
            state.items = state.items.filter(item => item.id !== action.payload);
            state.confirmDelete = false;
        },
        setEditItem: (state, action) => {
            state.isEdit = true;
            state.activeItem = action.payload;
        },
        cancelEdititem: (state) => {
            state.isEdit = false;
        },
        updateItem: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        },
        addItem: (state) => {
            state.isAddItem = true;
        },
        cancelAddItem: (state) => {
            state.isAddItem = false;
        },
        addItemInfo: (state, action) => {
            state.items.push(action.payload);
        },
        uptdatePage: (state, action) => {
            state.page = action.payload.page;
            state.pages = action.payload.pages;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setItems, setActiveItem, deleteItem, confirmDeleteItem, setDeactivateItem, setEditItem, cancelEdititem, updateItem, addItem, cancelAddItem, addItemInfo, uptdatePage } = inventarySlice.actions;