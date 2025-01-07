// composables/useUtils.js
export const useUtils = () => {
    // Set a cookie with a token
    const setToken = (token, days = 7) => {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `CUSTOMER=${token};${expires};path=/`;
    };
  
    // Get the token from cookies
    const getToken = () => {
      const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('CUSTOMER='))
        ?.split('=')[1];
      return cookie || null;
    };
  
    // Remove the token (logout)
    const removeToken = () => {
      document.cookie = 'CUSTOMER=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    };
  
    // Post a message (example: to a parent window or external service)
    const postMessage = (message) => {
      console.log('Message posted:', message);
      // Example: window.parent.postMessage(message, '*');
    };
  
    // Validate email format
    const validateEmail = (email) => {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(email);
    };
  
    return {
      setToken,
      getToken,
      removeToken,
      postMessage,
      validateEmail,
      // Add other utility functions here
    };
  };