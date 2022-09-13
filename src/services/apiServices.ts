import { api } from "./api"
export const apiServices = {
    get: async (url: string) => {
        return await api.get(url)
    },
}