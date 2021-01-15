export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('Token'));
    
    if (user) {
      // for Node.js Express back-end
      return { 'x-access-token': user };
    } else {
      return {};
    }
  }