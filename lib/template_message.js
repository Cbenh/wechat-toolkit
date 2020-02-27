var urllib = require("urllib");

exports.sendTemplateMessage = sendTemplateMessage;
exports.getTemplateId = getTemplateId;

/**
{
    access_token: "xxx",
    fan_open_id: "xxx",
    template_id: "xxx",
    url: "http://www.baidu.com",
    top_color: "#ffffff",
    data: {}
}
*/
function sendTemplateMessage(obj, callback){

    var message = {
        touser: obj.fan_open_id,
        template_id: obj.template_id,
        url: obj.url,
        topcolor: obj.top_color,
        data: obj.data
    };

    var url = "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=" + obj.access_token;

    var options = {
        method: "POST",
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        },
        data: message
    };

    urllib.request(url, options, function(err, body, resp){

        if(err){
            callback(err);
            return;
        }

        if(resp.statusCode !== 200){
            callback("statusCode not 200");
            return;
        }

        if(!body){
            callback("response body is null");
            return;
        }

        var code = body.errcode;
        var message = body.errmsg;
        callback(null, code, message);
    });
}

function getTemplateId(obj, callback){

    var message = {
        template_id_short: obj.template_id_short,
    };

    var url = "https://api.weixin.qq.com/cgi-bin/template/api_add_template?access_token=" + obj.access_token;

    var options = {
        method: "POST",
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        },
        data: message
    };

    urllib.request(url, options, function(err, body, resp){

        if(err){
            callback(err);
            return;
        }

        if(resp.statusCode !== 200){
            callback("statusCode not 200");
            return;
        }

        if(!body){
            callback("response body is null");
            return;
        }

        var code = body.errcode;
        var message = body.errmsg;
        var template_id = body.template_id;
        callback(null, body);
    });
}