'use strict';

let urllib = require("urllib");

// doc: https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html

// number of qr codes: limited to 45029
// style of qr code: round
const QR_CODE_A_URL = 'https://api.weixin.qq.com/wxa/getwxacode';
// number of qr codes: unlimited
// style of qr code: round
const QR_CODE_B_URL = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit';
// number of qr codes: limited to 45029
// style of qr code: square
const QR_CODE_C_URL = 'https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode';

async function getTypeAQrCode(accessToken, body = {}) {
  let url = `${QR_CODE_A_URL}?access_token=${accessToken}`;
  let opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: body
  };
  return await urllib.request(url, opts);
}
async function getTypeBQrCode(accessToken, body = {}) {
  let url = `${QR_CODE_B_URL}?access_token=${accessToken}`;
  let opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: body
  };
  return await urllib.request(url, opts);
}

async function getTypeCQrCode(accessToken, body = {}) {
  let url = `${QR_CODE_C_URL}?access_token=${accessToken}`;
  let opts = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: body
  };
  return await urllib.request(url, opts);
}
module.exports = {
  getTypeAQrCode,
  getTypeBQrCode,
  getTypeCQrCode
};