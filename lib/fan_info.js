var urllib = require("urllib");

exports.getFanInfo = getFanInfo;
exports.getFans = getFans;
exports.getFansInfo = getFansInfo;

// callback(err, info)
function getFanInfo(access_token, fan_open_id, callback){

    var url = "https://api.weixin.qq.com/cgi-bin/user/info?access_token=" + access_token + "&openid=" + fan_open_id;

    var options = {
        method: "GET",
        dataType: "json"
    };

    urllib.request(url, options, function(err, body, resp){

        if(err){
            callback(err);
            return;
        }

        if(body.errcode){
            callback(body);
            return;
        }

        callback(null, body);
    });
}


//let user_list = {
//     "user_list": [
//     {
//         "openid": "otvxTs4dckWG7imySrJd6jSi0CWE", 
//         "lang": "zh_CN"
//     }, 
//     {
//         "openid": "otvxTs_JZ6SEiP0imdhpi50fuSZg", 
//         "lang": "zh_CN"
//     } 
//  ]
// };
function getFansInfo(access_token, user_list, callback){

    var url = "https://api.weixin.qq.com/cgi-bin/user/info/batchget?access_token=" + access_token;

    var options = {
        method: "POST",
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        },
        data: user_list
    };


    urllib.request(url, options, function(err, body, resp){

        if(err){
            callback(err);
            return;
        }

        if(body.errcode){
            callback(body);
            return;
        }

        callback(null, body);
    });
}

// next_open_id empty means query from beginning
// callback(err, result)
function getFans(access_token, next_open_id, callback){

    var url = "https://api.weixin.qq.com/cgi-bin/user/get?access_token=" + access_token;

    if(next_open_id){
        url = url + "&next_openid=" + next_open_id;
    }

    var options = {
        method: "GET",
        dataType: "json"
    };

    urllib.request(url, options, function(err, body, resp){

        if(err){
            callback(err);
            return;
        }

        if(body.errcode){
            callback(body);
            return;
        }

        callback(null, body);
    });
}