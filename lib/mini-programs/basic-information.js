'use strict';

let urllib = require("urllib");

// doc: https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/Mini_Program_Information_Settings.html

const DOMAIN_URL = 'https://api.weixin.qq.com/wxa/modify_domain';

async function updateServerDomain(accessToken, body = {}) {
  let url = `${DOMAIN_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: body
  };
  let result=await urllib.request(url, opts);
  return result.data;
}

module.exports = {
  updateServerDomain
};