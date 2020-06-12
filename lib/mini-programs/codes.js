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

async function uploadCodes(accessToken, body = {}) {
  let url = `${UPLOAD_CODES_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: body
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function getPagesOfUploadedCodes(accessToken) {
  let url = `${GET_PAGES_OF_UPLOADED_CODES_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function getQrCodeOfTestingVersion(accessToken, path) {
  let url = `${GET_QR_CODE_OF_TESTING_VERSION_URL}?access_token=${accessToken}`;
  let opts = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    data: { path }
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function submitToAudit(accessToken, body = {}) {
  let url = `${SUBMIT_AUDIT_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: body
  };
  let result=await urllib.request(url, opts);
  return result.data;
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
  let result=await urllib.request(url, opts);
  return result.data;
}
async function getLatestAuditStatus(accessToken) {
  let url = `${GET_LATEST_AUDIT_STATUS_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function pullBackAudit(accessToken) {
  let url = `${PULL_BACK_AUDIT_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function releaseMiniProgram(accessToken) {
  let url = `${RELEASE_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function rollbackMiniProgram(accessToken) {
  let url = `${ROLLBACK_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function updateOnlineStatus(accessToken, action = 'open') {
  let url = `${UPDATE_ONLINE_STATUS_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { action }
  };
  let result=await urllib.request(url, opts);
  return result.data;
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