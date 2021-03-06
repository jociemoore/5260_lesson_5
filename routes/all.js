var express = require('express');
var router = express.Router();
var path = require('path');
var routeFiles = ['index', 'albums'];

for (var i = 0; i < routeFiles.length; i++) {
  require(path.resolve(path.dirname(__dirname), 'routes/' + routeFiles[i]))(router);
}

module.exports = router;