import * as URL from 'url';

/**
 * Parses the request parameters and assigns them to the request body
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
const parseQueryParams = (req, res, next) => {
  req.parsedQuery = URL.parse(req._parsedUrl);
  next();
};

export default parseQueryParams;
