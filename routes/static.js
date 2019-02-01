const express   = require('express');
const url       = require('url');
const router    = express.Router();

/* GET users listing. */
router.get(/^(?!\/api\/)/, (req, res) => {

  let purl = url.parse(req.url, true);
  let pathname = 'pages' + purl.pathname;

  if ((pathname)[pathname.length - 1] === '/') {
      pathname += 'index';
  }
  res.render(pathname, purl.query);
});

module.exports = router;
