import axios from 'axios';

export default axios.create({
	baseURL: 'https://realestate-server-amin.herokuapp.com/api'
});
