var fs = require("fs");
var path = require("path");
var formstream = require("formstream");
var urllib = require("urllib");

exports.uploadPermanentNewsMaterial = uploadPermanentNewsMaterial;
exports.uploadImageForNewsContent = uploadImageForNewsContent;
exports.uploadPermanentVideoMaterial = uploadPermanentVideoMaterial;
exports.uploadPermanentImageMaterial = uploadPermanentImageMaterial;
exports.uploadPermanentVoiceMaterial = uploadPermanentVoiceMaterial;
exports.uploadPermanentThumbMaterial = uploadPermanentThumbMaterial;
exports.deletePermanentMaterial = deletePermanentMaterial;
exports.getPermanentMaterials = getPermanentMaterials;

// callback(err, media_id)
function uploadPermanentNewsMaterial(access_token, articles, callback){

    var url = "https://api.weixin.qq.com/cgi-bin/material/add_news?access_token=" + access_token;

    var options = {
        method: "POST",
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        },
        data: articles
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

        if(body.errcode){
            callback(body);
            return;
        }

        callback(null, body.media_id);
    });
}

// callback(err, url)
function uploadPermanentImageMaterial(access_token, image_path, callback){

    var url = "https://api.weixin.qq.com/cgi-bin/media/uploadimg?access_token=" + access_token;

    fs.stat(image_path, function(err, stat) {

        if(err){
            callback(err);
            return;
        }

        var form = formstream();
        form.file('media', image_path, path.basename(image_path), stat.size);

        var opts = {
            dataType: 'json',
            type: 'POST',
            headers: form.headers(),
            stream: form
        };

        urllib.request(url, opts, function(err, body, resp){

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

            if(body.errcode){
                callback(body);
                return;
            }

            callback(null, body.url);
        });
    });
}

// for video and voice
// the video should be smaller than 20M
// callback(err, media_id)
function uploadPermanentMaterial(access_token, filepath, description, callback){

    var url = "https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=" + access_token;

    fs.stat(filepath, function(err, stat) {

        if(err){
            callback(err);
            return;
        }

        var form = formstream();
        form.file('media', filepath, path.basename(filepath), stat.size);
        form.field('description', JSON.stringify(description));

        var opts = {
            dataType: 'json',
            type: 'POST',
            timeout: 5 * 60 * 1000,
            headers: form.headers(),
            stream: form
        };

        urllib.request(url, opts, function(err, body, resp){

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

            if(body.errcode){
                callback(body);
                return;
            }

            callback(null, body.media_id);
        });
    });
}

function deletePermanentMaterial(access_token, mediaId, callback){

    var url = "https://api.weixin.qq.com/cgi-bin/material/del_material?access_token=" + access_token;

    var options = {
        method: "POST",
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            media_id: mediaId
        }
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

        if(body.errcode){
            callback(body);
            return;
        }

        callback(null, body);
    });
}

function getPermanentMaterials(access_token, type, offset, count, callback){

    var url = "https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=" + access_token;

    var options = {
        method: "POST",
        dataType: "json",
        headers: {
            'Content-Type': 'application/json'
        },
        data: { 
         type: type, 
         offset: offset, 
         count: count 
     }
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

    if(body.errcode){
        callback(body);
        return;
    }

    callback(null, body);
});
}