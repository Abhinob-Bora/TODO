// src/api.js (create a separate file for Axios configuration)
import axios from 'axios';

// Set the base URL for your API
axios.defaults.baseURL = 'http://localhost:8000';

export default axios;
