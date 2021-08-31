
const username = 'nicholasjg97'

function lastPush(username) {
    const ghURL = `https://api.github.com/users/${username}/events`;

    fetch(ghURL, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `token ${GITHUB_API_TOKEN}`
        }
    }).then(response => response.json())
        .then(data => console.log(data[0].created_at))
        .catch(console.error)
}

lastPush('nicholasjg97');