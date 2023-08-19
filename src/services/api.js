const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = {
    fetchUsers: async (page) => {
        const response = await fetch(`${API_BASE_URL}/users`);
        return response;
      },
      // Add more API functions here
    };

export default api;