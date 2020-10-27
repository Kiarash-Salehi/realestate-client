import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001/api'
  // baseURL: 'https://realestate-server-amin.herokuapp.com/api'
});
