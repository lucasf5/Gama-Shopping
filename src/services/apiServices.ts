import { api } from "./api"

export const getSearch = (query: string) => {
    return api.get(`sites/MLB/search?q=${query}`)
}

export const getCategories = () => {
    return api.get(`sites/MLB/categories`)
}

export const getProducts = (id: string) => {
    return api.get(`items/${id}`)
}