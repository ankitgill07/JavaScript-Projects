
document.getElementById('searchButton').addEventListener('click', function() {
    let word = document.getElementById('wordInput').value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
            if (data.title === "No Definitions Found") {
                document.getElementById('word').innerText = word;
                document.getElementById('definition').innerText = "No definitions found.";
            } else {
                let definition = data[0].meanings[0].definitions[0].definition;
                document.getElementById('word').innerText = data[0].word;
                document.getElementById('definition').innerText = definition;
            }
        })
        .catch(() => {
            document.getElementById('word').innerText = "word";
            document.getElementById('definition').innerText = "Error fetching definition.";
        });
});
