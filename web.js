/*
 * web.js
 * Copyright (C) 2017 gtrujillo <gtrujillo@vaio-home>
 *
 * Distributed under terms of the MIT license.
 */
var gzippo = require('gzippo');
var express = require('express');
var app = express();
app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
