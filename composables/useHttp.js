// composables/useHttp.js
export const useHttp = () => {
    const baseURL = 'https://api-stores.storeino.world/api';
  


    const getToken = () => {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('CUSTOMER='))
        ?.split('=')[1];
      return token || null;
    };
  
    // Generic fetch function with token handling
    const fetchData = async (url, options = {}) => {
      const token = '' ; // getToken();

  
      try {
        const response = await fetch(`${baseURL}${url}`, {
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }), // Attach token if it exists
          },
          ...options,
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        return await response.json();
      } catch (error) {
        console.error('HTTP request failed:', error);
        throw error;
      }
    };
  
    // POST request
    const post = async (url, data, options = {}) => {
      return fetchData(url, {
        method: 'POST',
        body: JSON.stringify(data),
        ...options,
      });
    };
  
    // GET request
    const get = async (url, options = {}) => {
      return fetchData(url, {
        method: 'GET',
        ...options,
      });
    };
  
    // Add other methods (PUT, DELETE, etc.) as needed
  
    return {
      post,
      get,
      // Add other methods here
    };
  };