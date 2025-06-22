import { createNote } from '../api.js';

export const renderNoteForm = () => {
    const form = document.getElementById('note-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const title = form.querySelector('input[name="title"]').value;
        const body = form.querySelector('textarea[name="body"]').value;
        try {
            await createNote(title, body);
            form.reset();
            await renderNoteList();
        } catch (error) {
            console.error('Error creating note:', error);
        }
    });
};
