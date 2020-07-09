'use strict';

let urllib = require("urllib");

const BIND_MEMBER_URL = 'https://api.weixin.qq.com/wxa/bind_tester';
const UNBIND_MEMBER_URL = 'https://api.weixin.qq.com/wxa/unbind_tester';
const GET_BOUND_MEMBERS_URL = 'https://api.weixin.qq.com/wxa/memberauth';

async function bindMember(accessToken, wechatId) {
  let url = `${BIND_MEMBER_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: { wechatid: wechatId }
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function unbindMember(accessToken, wechatId, userStr) {
  let url = `${UNBIND_MEMBER_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      wechatid: wechatId,
      userstr: userStr
    }
  };
  let result=await urllib.request(url, opts);
  return result.data;
}
async function getBoundMembers(accessToken) {
  let url = `${GET_BOUND_MEMBERS_URL}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      action: 'get_experiencer'
    }
  };
  let result=await urllib.request(url, opts);
  return result.data;
}

module.exports = {
  bindMember,
  unbindMember,
  getBoundMembers
};