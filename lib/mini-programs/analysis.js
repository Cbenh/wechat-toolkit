'use strict';

let urllib = require("urllib");

// doc: https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/data-analysis/visit-retain/analysis.getDailyRetain.html

// retain
const DAILY_RETAIN_URL = 'https://api.weixin.qq.com/datacube/getweanalysisappiddailyretaininfo';
const WEEKLY_RETAIN_URL = 'https://api.weixin.qq.com/datacube/getweanalysisappidweeklyretaininfo';
const MONTHLY_RETAIN_URL = 'https://api.weixin.qq.com/datacube/getweanalysisappidmonthlyretaininfo';
// visit trend
const DAILY_VISIT_SUMMARY_URL = 'https://api.weixin.qq.com/datacube/getweanalysisappiddailysummarytrend';
const DAILY_VISIT_TREND_URL = 'https://api.weixin.qq.com/datacube/getweanalysisappiddailyvisittrend';
const WEEKLY_VISIT_TREND_URL = 'https://api.weixin.qq.com/datacube/getweanalysisappidweeklyvisittrend';
const MONTHLY_VISIT_TREND_URL = 'https://api.weixin.qq.com/datacube/getweanalysisappidmonthlyvisittrend';
const VISIT_DISTRIBUTION_URL = 'https://api.weixin.qq.com/datacube/getweanalysisappidvisitdistribution';
const VISIT_PAGE_URL = 'https://api.weixin.qq.com/datacube/getweanalysisappidvisitpage';
// user portrait
const USER_PORTRAIT_URL = 'https://api.weixin.qq.com/datacube/getweanalysisappiduserportrait';

async function makeRequest(accessToken, baseUrl, beginDate, endDate) {
  let url = `${baseUrl}?access_token=${accessToken}`;
  let opts = {
    dataType: 'json',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      begin_date: beginDate,
      end_date: endDate
    }
  };
  return await urllib.request(url, opts);
}
async function getDailyRetain(accessToken, beginDate, endDate) {
  return makeRequest(accessToken, DAILY_RETAIN_URL, beginDate, endDate);
}
async function getWeeklyRetain(accessToken, beginDate, endDate) {
  return makeRequest(accessToken, WEEKLY_RETAIN_URL, beginDate, endDate);
}
async function getMonthlyRetain(accessToken, beginDate, endDate) {
  return makeRequest(accessToken, MONTHLY_RETAIN_URL, beginDate, endDate);
}
async function getDailyVisitSummary(accessToken, beginDate, endDate) {
  return makeRequest(accessToken, DAILY_VISIT_SUMMARY_URL, beginDate, endDate);
}
async function getDailyVisitTrend(accessToken, beginDate, endDate) {
  return makeRequest(accessToken, DAILY_VISIT_TREND_URL, beginDate, endDate);
}
async function getWeeklyVisitTrend(accessToken, beginDate, endDate) {
  return makeRequest(accessToken, WEEKLY_VISIT_TREND_URL, beginDate, endDate);
}
async function getMonthlyVisitTrend(accessToken, beginDate, endDate) {
  return makeRequest(accessToken, MONTHLY_VISIT_TREND_URL, beginDate, endDate);
}
async function getVisitDistribution(accessToken, beginDate, endDate) {
  return makeRequest(accessToken, VISIT_DISTRIBUTION_URL, beginDate, endDate);
}
async function getVisitPage(accessToken, beginDate, endDate) {
  return makeRequest(accessToken, VISIT_PAGE_URL, beginDate, endDate);
}
async function getUserPortrait(accessToken, beginDate, endDate) {
  return makeRequest(accessToken, USER_PORTRAIT_URL, beginDate, endDate);
}
module.exports = {
  getDailyRetain,
  getWeeklyRetain,
  getMonthlyRetain,
  getDailyVisitSummary,
  getDailyVisitTrend,
  getWeeklyVisitTrend,
  getMonthlyVisitTrend,
  getVisitDistribution,
  getVisitPage,
  getUserPortrait
};