'use strict';

let helper = require('./helper');

const GET_TEMPLATES_URL = 'https://api.weixin.qq.com/wxaapi/newtmpl/gettemplate';
const ADD_TEMPLATE_URL = 'https://api.weixin.qq.com/wxaapi/newtmpl/addtemplate';
const SEND_MESSAGE_URL = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send';
const url= 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/uniform_send';

async function getTemplates(accessToken) {
  return await helper.makeGetRequest(GET_TEMPLATES_URL, accessToken);
}

async function addTemplate(accessToken, data) {
  return await helper.makePostRequest(ADD_TEMPLATE_URL, accessToken, data);
}

async function sendMessage(accessToken, data) {
  return await helper.makePostRequest(SEND_MESSAGE_URL, accessToken, data);
}

async function sendMessage(accessToken, data) {
  return await helper.makePostRequest(SEND_MESSAGE_URL, accessToken, data);
}


module.exports = {
  getTemplates,
  addTemplate,
  sendMessage
};