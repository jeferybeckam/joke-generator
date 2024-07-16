document.getElementById('get-joke-btn').addEventListener('click', getJoke);

function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            if (data.type === 'single') {
                document.getElementById('joke-text').textContent = data.joke;
            } else if (data.type === 'twopart') {
                document.getElementById('joke-text').textContent = `${data.setup} ${data.delivery}`;
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('joke-text').textContent = 'Failed to fetch joke. Please try again later.';
        });
}
