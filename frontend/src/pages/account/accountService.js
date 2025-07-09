// src/services/userService.js
    const API_BASE_URL = 'http://localhost:8080/accounts';

    const accountService = {
      getAccounts: async () => {
        const response = await fetch(`${API_BASE_URL}/accounts`);
        return response.json();
      },
      getAccountByEmail: async (id) => {
        const response = await fetch(`${API_BASE_URL}/users/${id}`);
        return response.json();
      },
    };

    export default accountService;