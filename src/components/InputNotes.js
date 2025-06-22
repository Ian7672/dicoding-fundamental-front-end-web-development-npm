import { createNote } from './api.js';
import Swal from 'sweetalert2';

class InputNotes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('../style.css');
        
        .note-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative;
          animation: fadeInUp 0.6s ease-out;
        }

        /* Rest of your component-specific styles */
      </style>
      <div class="note-form">
        <input type="text" id="noteTitle" placeholder="Title" required>
        <textarea id="noteBody" placeholder="Write your note here..." required></textarea>
        <button id="addNoteBtn">Add Note</button>
      </div>
    `;
  }

  addEventListeners() {
    const addNoteBtn = this.shadowRoot.querySelector('#addNoteBtn');
    addNoteBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.handleAddNote();
    });
  }

  async handleAddNote() {
    const title = this.shadowRoot.querySelector('#noteTitle').value;
    const body = this.shadowRoot.querySelector('#noteBody').value;

    if (!title || !body) {
      alert('Title and body are required');
      return;
    }

    try {
      this.showLoading();

      const newNote = await createNote(title, body);

      Swal.fire({
        title: 'Note added successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        preConfirm: () => {
          this.showLoading();
        }
      }).then(() => {
        this.clearForm();
        this.hideLoading();
        window.location.reload();
      });

    } catch (error) {
      console.error('Error adding note:', error);
      this.hideLoading();
      alert('Failed to add note! Please try again.');
    }
  }

  clearForm() {
    this.shadowRoot.querySelector('#noteTitle').value = '';
    this.shadowRoot.querySelector('#noteBody').value = '';
  }

  showLoading() {
    const loadingIndicator = document.querySelector('#loadingIndicator');
    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }
  }

  hideLoading() {
    const loadingIndicator = document.querySelector('#loadingIndicator');
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
  }
}

if (!customElements.get('input-notes')) {
  customElements.define('input-notes', InputNotes);
}
