/**
 * Parses cookies and assigns the values to the request body
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const parseCookie = (req, res, next) => {
  let cookies = req.headers.cookie;
  let parsedCookies = {};

  if (cookies && cookies.length) {
    cookies.split(';').forEach(cookie => {
      let parts = cookie.split('=');
      parsedCookies[parts.shift().trim()] = decodeURI(parts.join('='));
    });
  }

  req.parsedCookies = parsedCookies;
  next();
};

export default parseCookie;
