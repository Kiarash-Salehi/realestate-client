import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://realestate-server-amin.herokuapp.com/api' : 'http://localhost:3001/api';

export default axios.create({
	baseURL
});
