import * as URL from 'url';

const parseQueryParams = (req, res, next) => {
  req.parsedQuery = URL.parse(req._parsedUrl);
  next();
};

export default parseQueryParams;
