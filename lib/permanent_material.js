var fs = require("fs");
var path = require("path");
var formstream = require("formstream");
var urllib = require("urllib");

exports.uploadPermanentNewsMaterial = uploadPermanentNewsMaterial;
exports.uploadPermanentNewsImageMaterial = uploadPermanentNewsImageMaterial;
exports.uploadPermanentMaterial = uploadPermanentMaterial;
exports.deletePermanentMaterial = deletePermanentMaterial;
exports.getPermanentMaterials = getPermanentMaterials;
exports.getCountPermanentMaterials = getCountPermanentMaterials;
exports.getPermanentMaterial = getPermanentMaterial;

// callback(err, media_id)
function uploadPermanentNewsMaterial(access_token, articles, callback) {

  var url = "https://api.weixin.qq.com/cgi-bin/material/add_news?access_token=" + access_token;

  var options = {
    method: "POST",
    dataType: "json",
    headers: {
      'Content-Type': 'application/json'
    },
    data: articles
  };

  urllib.request(url, options, function (err, body, resp) {

    if (err) {
      callback(err);
      return;
    }

    if (resp.statusCode !== 200) {
      callback("statusCode not 200");
      return;
    }

    if (!body) {
      callback("response body is null");
      return;
    }

    if (body.errcode) {
      callback(body);
      return;
    }

    if (body.media_id) {
      body.mediaId = body.media_id;
      delete body.media_id;
    }

    return callback(null, body);
  });
}

// callback(err, url)
function uploadPermanentNewsImageMaterial(access_token, image_path, callback) {

  var url = "https://api.weixin.qq.com/cgi-bin/media/uploadimg?access_token=" + access_token;

  fs.stat(image_path, function (err, stat) {

    if (err) {
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

    urllib.request(url, opts, function (err, body, resp) {

      if (err) {
        callback(err);
        return;
      }

      if (resp.statusCode !== 200) {
        callback("statusCode not 200");
        return;
      }

      if (!body) {
        callback("response body is null");
        return;
      }

      if (body.errcode) {
        callback(body);
        return;
      }

      callback(null, body);
    });
  });
}

// for video and voice
// the video should be smaller than 20M
// callback(err, media_id)
function uploadPermanentMaterial(access_token, filepath, title, introduction, type, callback) {
  var options = ["thumb", "image", "video", "voice"];

  if (options.indexOf(type) === -1)
    callback("wrong type");
  else {
    var url = "https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=" + access_token + "&type=" + type;

    fs.stat(filepath, function (err, stat) {

      if (err) {
        callback(err);
        return;
      }

      var form = formstream();
      form.file('media', filepath, path.basename(filepath), stat.size);

      if (type === "video") {
        form.field('title', JSON.stringify(title));
        form.field('introduction', JSON.stringify(introduction));
      }

      var opts = {
        dataType: 'json',
        type: 'POST',
        timeout: 5 * 60 * 1000,
        headers: form.headers(),
        stream: form
      };

      urllib.request(url, opts, function (err, body, resp) {

        if (err) {
          callback(err);
          return;
        }

        if (resp.statusCode !== 200) {
          callback("statusCode not 200");
          return;
        }

        if (!body) {
          callback("response body is null");
          return;
        }

        if (body.errcode) {
          callback(body);
          return;
        }

        if (body.media_id) {
          body.mediaId = body.media_id;
          delete body.media_id;
        }
        return callback(null, body);
      });
    });
  }
}

function deletePermanentMaterial(access_token, mediaId, callback) {

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

  urllib.request(url, options, function (err, body, resp) {

    if (err) {
      callback(err);
      return;
    }

    if (resp.statusCode !== 200) {
      callback("statusCode not 200");
      return;
    }

    if (!body) {
      callback("response body is null");
      return;
    }

    if (body.errcode) {
      callback(body);
      return;
    }

    callback(null, body);
  });
}

function getPermanentMaterial(access_token, mediaId, callback) {

  var url = "https://api.weixin.qq.com/cgi-bin/material/get_material?access_token=" + access_token;

  var options = {
    method: "POST",
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      media_id: mediaId
    }
  };

  urllib.request(url, options, function (err, body, resp) {
    // if (err)
    //   return callback(err);
    // else
    return callback(null, body);
  });
}

function getPermanentMaterials(access_token, type, offset, count, callback) {

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

  urllib.request(url, options, function (err, body, resp) {

    if (err) {
      callback(err);
      return;
    }

    if (resp.statusCode !== 200) {
      callback("statusCode not 200");
      return;
    }

    if (!body) {
      callback("response body is null");
      return;
    }

    if (body.errcode) {
      callback(body);
      return;
    }

    var response = [];
    for (var obj of body.item) {
      if (obj.media_id) {
        obj.mediaId = obj.media_id;
        delete obj.media_id;
      }
      response.push(obj);
    }

    callback(null, response);
  });
}

function getCountPermanentMaterials(access_token, callback) {

  var url = "https://api.weixin.qq.com/cgi-bin/material/get_materialcount?access_token=" + access_token;

  var options = {
    method: "GET",
    dataType: "json"
  };

  urllib.request(url, options, function (err, body, resp) {

    if (err) {
      callback(err);
      return;
    } else
    return callback(null, body);
  });
}
