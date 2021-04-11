import { types } from "../types/types";


export const setError = (error) => ({
    type: types.uiSetError,
    payload: error
})

export const removeError = () =>({
    type: types.uiRemoveError
})

export const startLoading = () => ({
    type: types.uiStartLoading
})

export const endLoading = () => ({
    type: types.uiEndLoading
})

export const setContact = () =>({
  type: types.uiSetContact 
})

export const showCart = () =>({
    type: types.uiShowCart
})

export const breadcrumbUpdate = (current) =>({
    type: types.uiBreadcrumbUpdate,
    payload: current
})





