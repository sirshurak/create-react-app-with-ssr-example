export const setServerProperties = (req, next, props) => {
    Object.assign(req, props);
    return next();
  };
  