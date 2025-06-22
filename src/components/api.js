export const apiBaseUrl = 'https://notes-api.dicoding.dev/v2';

const API_URL = `${apiBaseUrl}/notes`;

export const getNotes = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.status === 'success') {
            return data.data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw error;
    }
};

export const createNote = async (title, body) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body })
        });
        const data = await response.json();
        if (data.status === 'success') {
            return data.data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw error;
    }
};

export const deleteNote = async (noteId) => {
    try {
        const response = await fetch(`${API_URL}/${noteId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        if (data.status === 'success') {
            return data.message;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw error;
    }
};

export const archiveNote = async (noteId) => {
    try {
        const response = await fetch(`${API_URL}/${noteId}/archive`, {
            method: 'POST'
        });
        const data = await response.json();
        if (data.status === 'success') {
            return data.message;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw error;
    }
};

export const unarchiveNote = async (noteId) => {
    try {
        const response = await fetch(`${API_URL}/${noteId}/unarchive`, {
            method: 'POST'
        });
        const data = await response.json();
        if (data.status === 'success') {
            return data.message;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        throw error;
    }
};
