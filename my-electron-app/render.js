const fs = require('fs');
const path = require('path');

function saveNote() {
    const content = document.getElementById('note').value;
    const filePath = path.join(__dirname, 'nota.txt');
    fs.writeFileSync(filePath, content);
    alert('Nota guardada!');
}

window.saveNote = saveNote;
