'use strict';

let urllib = require("urllib");

// doc: https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/Plug-ins_Management.html

const PLUGIN_MANAGEMENT_URL = 'https://api.weixin.qq.com/wxa/plugin';

async function managePlugins(accessToken, body = {}) {
  let url = `${PLUGIN_MANAGEMENT_URL}?access_token=${accessToken}`;
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
  managePlugins
};