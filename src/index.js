import { getNotes, createNote, deleteNote, archiveNote, unarchiveNote } from './components/api';
import { showLoading, hideLoading } from './components/LoadingIndicator';
import { apiBaseUrl } from './components/api';
import Swal from 'sweetalert2';
import './components/InputNotes.js';



function displayNotes(notes, container) {
    container.innerHTML = '';
    notes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');
        noteCard.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.body}</p>
            <button class="archive-btn">${note.archived ? 'Unarchive' : 'Archive'}</button>
            <button class="delete-btn">Delete</button>
        `;

        const archiveBtn = noteCard.querySelector('.archive-btn');
        archiveBtn.addEventListener('click', () => {
            if (note.archived) {
                unarchiveNote(note.id)
                    .then(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Note unarchived successfully!',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            fetchNotes();
                        });
                    })
                    .catch(error => Swal.fire('Failed to unarchive note!', 'Error: ' + error.message, 'error'));
            } else {
                archiveNote(note.id)
                    .then(() => {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Note archived successfully!',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            fetchNotes();
                        });
                    })
                    .catch(error => Swal.fire('Failed to archive note!', 'Error: ' + error.message, 'error'));
            }
        });

        const deleteBtn = noteCard.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteNote(note.id)
                        .then(() => {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your note has been deleted.',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            }).then(() => {
                                fetchNotes();
                            });
                        })
                        .catch(error => Swal.fire('Failed to delete note!', 'Error: ' + error.message, 'error'));
                }
            });
        });

        container.appendChild(noteCard);
    });
}

function fetchNotes() {
    showLoading();
    Promise.all([
        fetch(`${apiBaseUrl}/notes`).then(response => response.json()),
        fetch(`${apiBaseUrl}/notes/archived`).then(response => response.json())
    ])
    .then(([activeData, archivedData]) => {
        if (activeData.status === 'success' && archivedData.status === 'success') {
            displayNotes(activeData.data, document.getElementById('activeNotes'));
            displayNotes(archivedData.data, document.getElementById('archivedNotes'));
            setTimeout(() => {
                hideLoading();
            }, 100);
        } else {
            throw new Error('Failed to fetch notes');
        }
    })
    .catch(error => {
        setTimeout(() => {
            hideLoading();
        }, 100);
        console.error('Error:', error);
        Swal.fire('Failed to fetch notes!', 'Error: ' + error.message, 'error');
    });
}

function addNote() {
    showLoading();
    const title = document.querySelector('#noteTitle').value;
    const body = document.querySelector('#noteBody').value;

    createNote(title, body)
        .then(() => {
            setTimeout(() => {
                hideLoading();
            }, 100);
            Swal.fire({
                title: 'Note added!',
                text: 'Your note has been added successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                fetchNotes();
            });
        })
        .catch(error => {
            setTimeout(() => {
                hideLoading();
            }, 100);
            Swal.fire('Failed to add note!', 'Error: ' + error.message, 'error');
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const addNoteBtn = document.getElementById('addNoteBtn');
    if (addNoteBtn) {
        addNoteBtn.addEventListener('click', addNote);
    }

    fetchNotes();
});