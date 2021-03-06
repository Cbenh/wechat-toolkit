'use strict';

let analysis = require('./analysis');
let basicInformation = require('./basic-information');
let categories = require('./categories');
let codeTempaltes = require('./code-templates');
let codes = require('./codes');
let members = require('./members');
let qrCodes = require('./qr-codes');
let plugins = require('./plugins');
let subscribeMessages= require('./subscribe-messages');

module.exports = {
  analysis,
  basicInformation,
  categories,
  codeTempaltes,
  codes,
  members,
  qrCodes,
  plugins,
  subscribeMessages
}