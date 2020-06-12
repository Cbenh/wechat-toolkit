'use strict';

let urllib = require("urllib");

const GET_DRAFTS_URL = 'https://api.weixin.qq.com/wxa/gettemplatedraftlist';
const ADD_DRAFT_TO_TEMPLATE_URL = 'https://api.weixin.qq.com/wxa/addtotemplate';
const GET_TEMPLATES_URL = 'https://api.weixin.qq.com/wxa/gettemplatelist';
const DELETE_TEMPLATE_URL = 'https://api.weixin.qq.com/wxa/deletetemplate';

async function getDrafts(accessToken) {
  let url = `${GET_DRAFTS_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function addDraftToTemplate(accessToken, draftId) {
  let url = `${ADD_DRAFT_TO_TEMPLATE_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      draft_id: draftId
    }
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function getTemplates(accessToken) {
  let url = `${GET_TEMPLATES_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  let result=await urllib.request(url, opts);
  return result.data;
}

async function deleteTemplate(accessToken, templateId) {
  let url = `${DELETE_TEMPLATE_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      template_id: templateId
    }
  };
  let result=await urllib.request(url, opts);
  return result.data;
}


module.exports = {
  getDrafts,
  addDraftToTemplate,
  getTemplates,
  deleteTemplate
};