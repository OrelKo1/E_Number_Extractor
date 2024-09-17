function extractor() {
    const inputString = document.getElementById('input').value;
    const regex = /E\d{7}/g;
    const matches = inputString.match(regex);
    const result = matches ? matches.join('\n') : 'No matches found';
    document.getElementById('output').value = result;
}

function copyToClipboard() {
    const outputText = document.getElementById('output').value;
    if (outputText) {
        navigator.clipboard.writeText(outputText)
            .then(() => {
                alert('Copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    } else {
        alert('No text to copy!');
    }
}
