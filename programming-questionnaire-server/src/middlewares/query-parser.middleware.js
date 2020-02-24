import * as URL from 'url';

/**
 * Parses the request parameters and assigns to the request body
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const parseQueryParams = (req, res, next) => {
  req.parsedQuery = URL.parse(req._parsedUrl);
  next();
};

export default parseQueryParams;
