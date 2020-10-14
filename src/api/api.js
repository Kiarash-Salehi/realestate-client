import axios from 'axios';

export default axios.create({
	baseURL: 'http://localhost:3001/api' //'https://realestate-server-amin.herokuapp.com/api'
});
