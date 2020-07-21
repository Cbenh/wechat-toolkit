'use strict';

let urllib = require("urllib");

async function makeGetRequest(url, token, data = null, dataType = 'json') {
  url = `${url}?access_token=${token}`;
  let opts = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    dataType,
    data
  };
  let result = await urllib.request(url, opts);
  return result.data;
}
async function makePostRequest(url, token, data = {}, dataType = 'json') {
  url = `${url}?access_token=${token}`;
  let opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    dataType,
    data
  };
  let result = await urllib.request(url, opts);
  return result.data;
}

module.exports = {
  makeGetRequest,
  makePostRequest
};