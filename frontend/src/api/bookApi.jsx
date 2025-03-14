import api from "./api";

// All books
export const getAllBooks = async () => {
    try {
        const response = await api.get("/books");
        return response.data;
    } catch (error) {
        console.error("Errore nel recupero libri: ", error);
        throw error;
    }
};

export const getBookById = async (id) => {
    try {
        const response = await api.get("/books/" + id);
        return response.data;
    } catch (error) {
        console.error("Errore nel recupero del libro:", error);
        throw error;
    }
};