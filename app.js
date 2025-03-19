document.addEventListener('DOMContentLoaded', () => {
    const bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
    const bucketListElement = document.getElementById('bucket-list');
    bucketList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        bucketListElement.appendChild(li);
    });

    const journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    const journalEntriesElement = document.getElementById('journal-entries');
    journalEntries.forEach(entry => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${entry.subject}</strong>: ${entry.text}`;
        journalEntriesElement.appendChild(div);
    });
});

function addItem() {
    const newItem = document.getElementById('new-item').value;
    if (newItem) {
        const bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
        bucketList.push(newItem);
        localStorage.setItem('bucketList', JSON.stringify(bucketList));
        const li = document.createElement('li');
        li.textContent = newItem;
        document.getElementById('bucket-list').appendChild(li);
        document.getElementById('new-item').value = '';
    }
}

function clearList() {
    localStorage.removeItem('bucketList');
    document.getElementById('bucket-list').innerHTML = '';
}

function saveJournal() {
    const subject = document.getElementById('subject').value;
    const journalEntry = document.getElementById('journal-entry').value;
    if (subject && journalEntry) {
        const entry = {
            subject: subject,
            text: journalEntry
        };
        const journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        journalEntries.push(entry);
        localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
        
        const div = document.createElement('div');
        div.innerHTML = `<strong>${subject}</strong>: ${journalEntry}`;
        document.getElementById('journal-entries').appendChild(div);
        document.getElementById('subject').value = '';
        document.getElementById('journal-entry').value = '';
    }
}
