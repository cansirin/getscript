module.exports = function (uri, cb) {
  if (!uri) throw 'missing uri';
  var head = document.head ||
    document.head.getElementsByTagName('head')[0];
  var el = document.createElement('script');
  el.type = 'text\/javascript';
  if ('function' === typeof cb) {
    el.onerror = onerror.bind(null, uri, cb);
    el.onload = onload.bind(null, uri, cb);
  }
  head.appendChild(el);
  el.src = uri;
};

function onerror (uri, cb, e) {
  cb(new URIError(e.target.src + ' could not be loaded'), e);
}

function onload (uri, cb, e) {
  cb(null, {uri: uri, event: e});
}

