import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Utility function to make authenticated requests
export const getAuthenticatedCustomers = async () => {
  try {
    const token = localStorage.getItem('@token'); 

    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.get(`${API_URL}/customers`, {
      headers: {
        Authorization: token, 
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error;
  }
};
