import axios from 'axios';

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


const request = axios.create({
    baseURL: 'https://api.github.com',
    validateStatus: false,
    headers: {
        "Authorization": `token ${TOKEN}`,
    },
});

export default request;


