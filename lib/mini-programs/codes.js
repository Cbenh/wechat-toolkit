'use strict';

let urllib = require("urllib");

const UPLOAD_CODES_URL = 'https://api.weixin.qq.com/wxa/commit';
const GET_PAGES_OF_UPLOADED_CODES_URL = 'https://api.weixin.qq.com/wxa/get_page';
const GET_QR_CODE_OF_TESTING_VERSION_URL = 'https://api.weixin.qq.com/wxa/get_qrcode';
const SUBMIT_AUDIT_URL = 'https://api.weixin.qq.com/wxa/submit_audit';
const GET_AUDIT_STATUS_URL = 'https://api.weixin.qq.com/wxa/get_auditstatus';
const GET_LATEST_AUDIT_STATUS_URL = 'https://api.weixin.qq.com/wxa/get_latest_auditstatus';
const PULL_BACK_AUDIT_URL = 'https://api.weixin.qq.com/wxa/undocodeaudit';
const RELEASE_URL = 'https://api.weixin.qq.com/wxa/release';
const ROLLBACK_URL = 'https://api.weixin.qq.com/wxa/revertcoderelease';
const UPDATE_ONLINE_STATUS_URL = 'https://api.weixin.qq.com/wxa/change_visitstatus';

async function uploadCodes(accessToken, templateId, extJson, userVersion, userDesc) {
  let url = `${UPLOAD_CODES_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      template_id: templateId,
      ext_json: extJson,
      user_version: userVersion,
      user_desc: userDesc
    }
  };
  return await urllib.request(url, opts);
}
async function getPagesOfUploadedCodes(accessToken) {
  let url = `${GET_PAGES_OF_UPLOADED_CODES_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return await urllib.request(url, opts);
}
async function getQrCodeOfTestingVersion(accessToken, path) {
  let url = `${GET_QR_CODE_OF_TESTING_VERSION_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    data: { path }
  };
  return await urllib.request(url, opts);
}
async function submitToAudit(accessToken, itemList, previewInfo, versionDesc, feedbackInfo, feedbackStuff) {
  let url = `${SUBMIT_AUDIT_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      item_list: itemList,
      preview_info: previewInfo,
      version_desc: versionDesc,
      feedback_info: feedbackInfo,
      feedback_stuff: feedbackStuff
    }
  };
  return await urllib.request(url, opts);
}
async function getAuditStatus(accessToken, auditId) {
  let url = `${GET_AUDIT_STATUS_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      auditid: auditId,
    }
  };
  return await urllib.request(url, opts);
}
async function getLatestAuditStatus(accessToken) {
  let url = `${GET_LATEST_AUDIT_STATUS_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return await urllib.request(url, opts);
}
async function pullBackAudit(accessToken) {
  let url = `${PULL_BACK_AUDIT_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return await urllib.request(url, opts);
}
async function releaseMiniProgram(accessToken) {
  let url = `${RELEASE_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  };
  return await urllib.request(url, opts);
}
async function rollbackMiniProgram(accessToken) {
  let url = `${ROLLBACK_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return await urllib.request(url, opts);
}
async function updateOnlineStatus(accessToken, action = 'open') {
  let url = `${UPDATE_ONLINE_STATUS_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { action }
  };
  return await urllib.request(url, opts);
}
module.exports = {
  uploadCodes,
  getPagesOfUploadedCodes,
  getQrCodeOfTestingVersion,
  submitToAudit,
  getAuditStatus,
  getLatestAuditStatus,
  pullBackAudit,
  releaseMiniProgram,
  rollbackMiniProgram,
  updateOnlineStatus,
};