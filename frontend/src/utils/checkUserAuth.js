const checkUserAuth = () => {
  const token = localStorage.getItem('token')
  return Boolean(token)
}

export default checkUserAuth