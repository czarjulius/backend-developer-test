class Validate {
  static admin(req, res, next) {
    const { isAdmin } = req.authUser;  
    if (!isAdmin) {
      return res.status(403).json({
        status: 403,
        error: 'Access denied! You are not an Admin',
      });
    }
    next();
  }
}

export default Validate;
