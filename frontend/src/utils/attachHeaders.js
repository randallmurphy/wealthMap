const attachHeaders = (headers = {}) => {
  const token = localStorage.getItem('token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

export default attachHeaders;