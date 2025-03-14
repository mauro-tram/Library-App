import api from "./api";

// All users
export const getAllUsers = async () => {
    try {
        const response = await api.get("/users");
        return response.data;
    } catch (error) {
        console.error("Errore nel recupero utenti:", error);
        throw error;
    }
};

export const getUserById = async (id) => {
    try {
        const response = await api.get("/users/" + id);
        return response.data;
    } catch (error) {
        console.error("Errore nel recupero dell'utente:", error);
        throw error;
    }
};
