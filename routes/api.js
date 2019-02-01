var express = require('express');
const url   = require('url');
var router 	= express.Router();

/* GET home page. */
router.get('*', (req, res) => {

	let purl = url.parse(req.url, true);
	console.log(purl);
	res.send("Matches /api/* path pattern : " + purl.pathname);
});

module.exports = router;
