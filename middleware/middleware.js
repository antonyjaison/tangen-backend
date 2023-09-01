const verifyAccessToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
    if (!authHeader) {
      return res.status(401).json({ message: 'Access token is missing' });
    }
  
    const token = authHeader.split(' ')[1]; // Assuming the header format is "Bearer <token>"
  
    if (!token) {
      return res.status(401).json({ message: 'Access token is missing' });
    }
    console.log(token)

    next();
};
  
module.exports = {
    verifyAccessToken
}