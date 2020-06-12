'use strict';

let urllib = require("urllib");

const GET_ALL_AVAILABLE_CATEGORIES_URL = 'https://api.weixin.qq.com/cgi-bin/wxopen/getallcategories';
const GET_ALL_CATEGORIES_URL = 'https://api.weixin.qq.com/cgi-bin/wxopen/getcategory';

async function getAllAvailableCategories(accessToken) {
  let url = `${GET_ALL_AVAILABLE_CATEGORIES_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  return await urllib.request(url, opts);
}

async function getAllCategories(accessToken) {
  let url = `${GET_ALL_CATEGORIES_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  return await urllib.request(url, opts);
}

module.exports = {
  getAllAvailableCategories,
  getAllCategories
};