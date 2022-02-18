const axios = require('axios')

async function getAndPost() {

    const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
    for (var i in response.data) {
        console.log(response.data[i])
        await axios.post('http://localhost:5000/post/articles', response.data[i])
    }
}
getAndPost()