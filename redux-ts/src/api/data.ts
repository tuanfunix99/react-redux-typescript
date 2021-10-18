import axios from 'axios';


export const fetchNpm = (search: String) => 
axios.get('https://registry.npmjs.com/-/v1/search', {
    params: {
        text: search
    }
});