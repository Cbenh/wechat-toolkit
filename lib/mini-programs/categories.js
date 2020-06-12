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
  let result=await urllib.request(url, opts);
  return result.data;
}

async function getAllCategories(accessToken) {
  let url = `${GET_ALL_CATEGORIES_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  let result=await urllib.request(url, opts);
  return result.data;
}

module.exports = {
  getAllAvailableCategories,
  getAllCategories
};