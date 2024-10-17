<template>
    <div id="guestbook">
        <header>
            <h1>Gästebuch</h1>
            <p>Wir würden uns freuen, über einen schönen Eintrag zu bekommen</p>
        </header>

        <section id="guestbook-form">
            <h2>Eintrag hinzufügen</h2>
            <form @submit.prevent="addEntry">
                <label for="name">Ihr Name:</label>
                <input type="text" id="name" v-model="newEntry.name" required />

                <label for="message">Ihre Nachricht:</label>
                <textarea id="message" v-model="newEntry.message" required></textarea>

                <button type="submit">Gästebuch-Eintrag hinzufügen</button>
            </form>
        </section>

        <section id="guestbook-entries">
            <h2>Einträge</h2>
            <div class="entry" v-for="entry in paginatedEntries" :key="entry.id">
                <p><strong>Name:</strong> {{ entry.name }}</p>
                <p><strong>Datum:</strong> {{ entry.date }}</p>
                <p><strong>Nachricht:</strong> {{ entry.message }}</p>
            </div>

            <div class="pagination">
                <button @click="prevPage" :disabled="currentPage === 1">« Vorherige</button>
                <span>Seite {{ currentPage }} von {{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages">Nächste »</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Guestbook',
    data() {
        return {
            newEntry: {
                name: '',
                message: '',
            },
            entries: [], // Holds all guestbook entries
            currentPage: 1,
            entriesPerPage: 3, // Number of entries to display per page
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.entries.length / this.entriesPerPage);
        },
        paginatedEntries() {
            const start = (this.currentPage - 1) * this.entriesPerPage;
            const end = start + this.entriesPerPage;
            return this.entries.slice(start, end);
        },
    },
    methods: {
        addEntry() {
            const newEntry = {
                id: this.entries.length + 1,
                name: this.newEntry.name,
                message: this.newEntry.message,
                date: new Date().toLocaleString(),
            };

            this.entries.push(newEntry);
            this.newEntry.name = '';
            this.newEntry.message = '';
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
    },
};
</script>

<style scoped>
#guestbook {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header {
    text-align: center;
    margin-bottom: 20px;
}

h1 {
    color: #FF7F50;
}

h2 {
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    margin: 10px 0 5px;
}

input,
textarea {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px;
    background-color: #FF7F50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #e76a38;
}

#guestbook-entries {
    margin-top: 20px;
}

.entry {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
}

.pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}
</style>
