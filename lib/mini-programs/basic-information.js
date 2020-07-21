'use strict';

let helper = require('./helper');
// doc: https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/Mini_Program_Information_Settings.html

const DOMAIN_URL = 'https://api.weixin.qq.com/wxa/modify_domain';
const GET_PRIVACY_SETTING_URL = 'https://api.weixin.qq.com/wxa/getwxasearchstatus';
const CHANGE_PRIVACY_SETTING_URL = 'https://api.weixin.qq.com/wxa/changewxasearchstatus';

async function updateServerDomain(accessToken, body = {}) {
  return await helper.makePostRequest(DOMAIN_URL, accessToken, body);
}

async function getPrivacySetting(accessToken) {
  return await helper.makeGetRequest(GET_PRIVACY_SETTING_URL, accessToken);
}

async function updatePrivacySetting(accessToken, status = 0) {
  let data = { status };
  return await helper.makePostRequest(CHANGE_PRIVACY_SETTING_URL, accessToken, data);
}


module.exports = {
  updateServerDomain,
  getPrivacySetting,
  updatePrivacySetting
};