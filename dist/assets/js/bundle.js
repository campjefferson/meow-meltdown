!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.registerDynamic('2', ['3', '4'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;

  /**
   * Module dependencies.
   */

  var parseuri = $__require('3');
  var debug = $__require('4')('socket.io-client:url');

  /**
   * Module exports.
   */

  module.exports = url;

  /**
   * URL parser.
   *
   * @param {String} url
   * @param {Object} An object meant to mimic window.location.
   *                 Defaults to window.location.
   * @api public
   */

  function url(uri, loc) {
    var obj = uri;

    // default to window.location
    var loc = loc || global.location;
    if (null == uri) uri = loc.protocol + '//' + loc.host;

    // relative path support
    if ('string' == typeof uri) {
      if ('/' == uri.charAt(0)) {
        if ('/' == uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }

      if (!/^(https?|wss?):\/\//.test(uri)) {
        debug('protocol-less url %s', uri);
        if ('undefined' != typeof loc) {
          uri = loc.protocol + '//' + uri;
        } else {
          uri = 'https://' + uri;
        }
      }

      // parse
      debug('parse %s', uri);
      obj = parseuri(uri);
    }

    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = '80';
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = '443';
      }
    }

    obj.path = obj.path || '/';

    var ipv6 = obj.host.indexOf(':') !== -1;
    var host = ipv6 ? '[' + obj.host + ']' : obj.host;

    // define unique id
    obj.id = obj.protocol + '://' + host + ':' + obj.port;
    // define href
    obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : ':' + obj.port);

    return obj;
  }
  return module.exports;
});
$__System.registerDynamic('5', ['6', '7', '8', '9', '4'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var XMLHttpRequest = $__require('6');
  var Polling = $__require('7');
  var Emitter = $__require('8');
  var inherit = $__require('9');
  var debug = $__require('4')('engine.io-client:polling-xhr');
  module.exports = XHR;
  module.exports.Request = Request;
  function empty() {}
  function XHR(opts) {
    Polling.call(this, opts);
    if (global.location) {
      var isSSL = 'https:' == location.protocol;
      var port = location.port;
      if (!port) {
        port = isSSL ? 443 : 80;
      }
      this.xd = opts.hostname != global.location.hostname || port != opts.port;
      this.xs = opts.secure != isSSL;
    } else {
      this.extraHeaders = opts.extraHeaders;
    }
  }
  inherit(XHR, Polling);
  XHR.prototype.supportsBinary = true;
  XHR.prototype.request = function (opts) {
    opts = opts || {};
    opts.uri = this.uri();
    opts.xd = this.xd;
    opts.xs = this.xs;
    opts.agent = this.agent || false;
    opts.supportsBinary = this.supportsBinary;
    opts.enablesXDR = this.enablesXDR;
    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;
    opts.extraHeaders = this.extraHeaders;
    return new Request(opts);
  };
  XHR.prototype.doWrite = function (data, fn) {
    var isBinary = typeof data !== 'string' && data !== undefined;
    var req = this.request({
      method: 'POST',
      data: data,
      isBinary: isBinary
    });
    var self = this;
    req.on('success', fn);
    req.on('error', function (err) {
      self.onError('xhr post error', err);
    });
    this.sendXhr = req;
  };
  XHR.prototype.doPoll = function () {
    debug('xhr poll');
    var req = this.request();
    var self = this;
    req.on('data', function (data) {
      self.onData(data);
    });
    req.on('error', function (err) {
      self.onError('xhr poll error', err);
    });
    this.pollXhr = req;
  };
  function Request(opts) {
    this.method = opts.method || 'GET';
    this.uri = opts.uri;
    this.xd = !!opts.xd;
    this.xs = !!opts.xs;
    this.async = false !== opts.async;
    this.data = undefined != opts.data ? opts.data : null;
    this.agent = opts.agent;
    this.isBinary = opts.isBinary;
    this.supportsBinary = opts.supportsBinary;
    this.enablesXDR = opts.enablesXDR;
    this.pfx = opts.pfx;
    this.key = opts.key;
    this.passphrase = opts.passphrase;
    this.cert = opts.cert;
    this.ca = opts.ca;
    this.ciphers = opts.ciphers;
    this.rejectUnauthorized = opts.rejectUnauthorized;
    this.extraHeaders = opts.extraHeaders;
    this.create();
  }
  Emitter(Request.prototype);
  Request.prototype.create = function () {
    var opts = {
      agent: this.agent,
      xdomain: this.xd,
      xscheme: this.xs,
      enablesXDR: this.enablesXDR
    };
    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;
    var xhr = this.xhr = new XMLHttpRequest(opts);
    var self = this;
    try {
      debug('xhr open %s: %s', this.method, this.uri);
      xhr.open(this.method, this.uri, this.async);
      try {
        if (this.extraHeaders) {
          xhr.setDisableHeaderCheck(true);
          for (var i in this.extraHeaders) {
            if (this.extraHeaders.hasOwnProperty(i)) {
              xhr.setRequestHeader(i, this.extraHeaders[i]);
            }
          }
        }
      } catch (e) {}
      if (this.supportsBinary) {
        xhr.responseType = 'arraybuffer';
      }
      if ('POST' == this.method) {
        try {
          if (this.isBinary) {
            xhr.setRequestHeader('Content-type', 'application/octet-stream');
          } else {
            xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
          }
        } catch (e) {}
      }
      if ('withCredentials' in xhr) {
        xhr.withCredentials = true;
      }
      if (this.hasXDR()) {
        xhr.onload = function () {
          self.onLoad();
        };
        xhr.onerror = function () {
          self.onError(xhr.responseText);
        };
      } else {
        xhr.onreadystatechange = function () {
          if (4 != xhr.readyState) return;
          if (200 == xhr.status || 1223 == xhr.status) {
            self.onLoad();
          } else {
            setTimeout(function () {
              self.onError(xhr.status);
            }, 0);
          }
        };
      }
      debug('xhr data %s', this.data);
      xhr.send(this.data);
    } catch (e) {
      setTimeout(function () {
        self.onError(e);
      }, 0);
      return;
    }
    if (global.document) {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  };
  Request.prototype.onSuccess = function () {
    this.emit('success');
    this.cleanup();
  };
  Request.prototype.onData = function (data) {
    this.emit('data', data);
    this.onSuccess();
  };
  Request.prototype.onError = function (err) {
    this.emit('error', err);
    this.cleanup(true);
  };
  Request.prototype.cleanup = function (fromError) {
    if ('undefined' == typeof this.xhr || null === this.xhr) {
      return;
    }
    if (this.hasXDR()) {
      this.xhr.onload = this.xhr.onerror = empty;
    } else {
      this.xhr.onreadystatechange = empty;
    }
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
    if (global.document) {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  };
  Request.prototype.onLoad = function () {
    var data;
    try {
      var contentType;
      try {
        contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
      } catch (e) {}
      if (contentType === 'application/octet-stream') {
        data = this.xhr.response;
      } else {
        if (!this.supportsBinary) {
          data = this.xhr.responseText;
        } else {
          try {
            data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
          } catch (e) {
            var ui8Arr = new Uint8Array(this.xhr.response);
            var dataArray = [];
            for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
              dataArray.push(ui8Arr[idx]);
            }
            data = String.fromCharCode.apply(null, dataArray);
          }
        }
      }
    } catch (e) {
      this.onError(e);
    }
    if (null != data) {
      this.onData(data);
    }
  };
  Request.prototype.hasXDR = function () {
    return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
  };
  Request.prototype.abort = function () {
    this.cleanup();
  };
  if (global.document) {
    Request.requestsCount = 0;
    Request.requests = {};
    if (global.attachEvent) {
      global.attachEvent('onunload', unloadHandler);
    } else if (global.addEventListener) {
      global.addEventListener('beforeunload', unloadHandler, false);
    }
  }
  function unloadHandler() {
    for (var i in Request.requests) {
      if (Request.requests.hasOwnProperty(i)) {
        Request.requests[i].abort();
      }
    }
  }
  return module.exports;
});
$__System.registerDynamic('a', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;

  /**
   * Module exports.
   *
   * Logic borrowed from Modernizr:
   *
   *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
   */

  try {
    module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
  } catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
    module.exports = false;
  }
  return module.exports;
});
$__System.registerDynamic("b", ["a"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("a");
  return module.exports;
});
$__System.registerDynamic('6', ['b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // browser shim for xmlhttprequest module
  var hasCORS = $__require('b');

  module.exports = function (opts) {
    var xdomain = opts.xdomain;

    // scheme must be same when usign XDomainRequest
    // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
    var xscheme = opts.xscheme;

    // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
    // https://github.com/Automattic/engine.io-client/pull/217
    var enablesXDR = opts.enablesXDR;

    // XMLHttpRequest can be disabled on IE
    try {
      if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) {}

    // Use XDomainRequest for IE8 if enablesXDR is true
    // because loading bar keeps flashing when using jsonp-polling
    // https://github.com/yujiosaka/socke.io-ie8-loading-example
    try {
      if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
        return new XDomainRequest();
      }
    } catch (e) {}

    if (!xdomain) {
      try {
        return new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {}
    }
  };
  return module.exports;
});
$__System.registerDynamic('7', ['c', 'e', 'f', '9', 'd', '4', '6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var Transport = $__require('c');
  var parseqs = $__require('e');
  var parser = $__require('f');
  var inherit = $__require('9');
  var yeast = $__require('d');
  var debug = $__require('4')('engine.io-client:polling');
  module.exports = Polling;
  var hasXHR2 = function () {
    var XMLHttpRequest = $__require('6');
    var xhr = new XMLHttpRequest({ xdomain: false });
    return null != xhr.responseType;
  }();
  function Polling(opts) {
    var forceBase64 = opts && opts.forceBase64;
    if (!hasXHR2 || forceBase64) {
      this.supportsBinary = false;
    }
    Transport.call(this, opts);
  }
  inherit(Polling, Transport);
  Polling.prototype.name = 'polling';
  Polling.prototype.doOpen = function () {
    this.poll();
  };
  Polling.prototype.pause = function (onPause) {
    var pending = 0;
    var self = this;
    this.readyState = 'pausing';
    function pause() {
      debug('paused');
      self.readyState = 'paused';
      onPause();
    }
    if (this.polling || !this.writable) {
      var total = 0;
      if (this.polling) {
        debug('we are currently polling - waiting to pause');
        total++;
        this.once('pollComplete', function () {
          debug('pre-pause polling complete');
          --total || pause();
        });
      }
      if (!this.writable) {
        debug('we are currently writing - waiting to pause');
        total++;
        this.once('drain', function () {
          debug('pre-pause writing complete');
          --total || pause();
        });
      }
    } else {
      pause();
    }
  };
  Polling.prototype.poll = function () {
    debug('polling');
    this.polling = true;
    this.doPoll();
    this.emit('poll');
  };
  Polling.prototype.onData = function (data) {
    var self = this;
    debug('polling got data %s', data);
    var callback = function (packet, index, total) {
      if ('opening' == self.readyState) {
        self.onOpen();
      }
      if ('close' == packet.type) {
        self.onClose();
        return false;
      }
      self.onPacket(packet);
    };
    parser.decodePayload(data, this.socket.binaryType, callback);
    if ('closed' != this.readyState) {
      this.polling = false;
      this.emit('pollComplete');
      if ('open' == this.readyState) {
        this.poll();
      } else {
        debug('ignoring poll - transport state "%s"', this.readyState);
      }
    }
  };
  Polling.prototype.doClose = function () {
    var self = this;
    function close() {
      debug('writing close packet');
      self.write([{ type: 'close' }]);
    }
    if ('open' == this.readyState) {
      debug('transport open - closing');
      close();
    } else {
      debug('transport not open - deferring close');
      this.once('open', close);
    }
  };
  Polling.prototype.write = function (packets) {
    var self = this;
    this.writable = false;
    var callbackfn = function () {
      self.writable = true;
      self.emit('drain');
    };
    var self = this;
    parser.encodePayload(packets, this.supportsBinary, function (data) {
      self.doWrite(data, callbackfn);
    });
  };
  Polling.prototype.uri = function () {
    var query = this.query || {};
    var schema = this.secure ? 'https' : 'http';
    var port = '';
    if (false !== this.timestampRequests) {
      query[this.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    query = parseqs.encode(query);
    if (this.port && ('https' == schema && this.port != 443 || 'http' == schema && this.port != 80)) {
      port = ':' + this.port;
    }
    if (query.length) {
      query = '?' + query;
    }
    var ipv6 = this.hostname.indexOf(':') !== -1;
    return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
  };
  return module.exports;
});
$__System.registerDynamic('10', ['7', '9'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var Polling = $__require('7');
  var inherit = $__require('9');
  module.exports = JSONPPolling;
  var rNewline = /\n/g;
  var rEscapedNewline = /\\n/g;
  var callbacks;
  var index = 0;
  function empty() {}
  function JSONPPolling(opts) {
    Polling.call(this, opts);
    this.query = this.query || {};
    if (!callbacks) {
      if (!global.___eio) global.___eio = [];
      callbacks = global.___eio;
    }
    this.index = callbacks.length;
    var self = this;
    callbacks.push(function (msg) {
      self.onData(msg);
    });
    this.query.j = this.index;
    if (global.document && global.addEventListener) {
      global.addEventListener('beforeunload', function () {
        if (self.script) self.script.onerror = empty;
      }, false);
    }
  }
  inherit(JSONPPolling, Polling);
  JSONPPolling.prototype.supportsBinary = false;
  JSONPPolling.prototype.doClose = function () {
    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }
    if (this.form) {
      this.form.parentNode.removeChild(this.form);
      this.form = null;
      this.iframe = null;
    }
    Polling.prototype.doClose.call(this);
  };
  JSONPPolling.prototype.doPoll = function () {
    var self = this;
    var script = document.createElement('script');
    if (this.script) {
      this.script.parentNode.removeChild(this.script);
      this.script = null;
    }
    script.async = true;
    script.src = this.uri();
    script.onerror = function (e) {
      self.onError('jsonp poll error', e);
    };
    var insertAt = document.getElementsByTagName('script')[0];
    if (insertAt) {
      insertAt.parentNode.insertBefore(script, insertAt);
    } else {
      (document.head || document.body).appendChild(script);
    }
    this.script = script;
    var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
    if (isUAgecko) {
      setTimeout(function () {
        var iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        document.body.removeChild(iframe);
      }, 100);
    }
  };
  JSONPPolling.prototype.doWrite = function (data, fn) {
    var self = this;
    if (!this.form) {
      var form = document.createElement('form');
      var area = document.createElement('textarea');
      var id = this.iframeId = 'eio_iframe_' + this.index;
      var iframe;
      form.className = 'socketio';
      form.style.position = 'absolute';
      form.style.top = '-1000px';
      form.style.left = '-1000px';
      form.target = id;
      form.method = 'POST';
      form.setAttribute('accept-charset', 'utf-8');
      area.name = 'd';
      form.appendChild(area);
      document.body.appendChild(form);
      this.form = form;
      this.area = area;
    }
    this.form.action = this.uri();
    function complete() {
      initIframe();
      fn();
    }
    function initIframe() {
      if (self.iframe) {
        try {
          self.form.removeChild(self.iframe);
        } catch (e) {
          self.onError('jsonp polling iframe removal error', e);
        }
      }
      try {
        var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
        iframe = document.createElement(html);
      } catch (e) {
        iframe = document.createElement('iframe');
        iframe.name = self.iframeId;
        iframe.src = 'javascript:0';
      }
      iframe.id = self.iframeId;
      self.form.appendChild(iframe);
      self.iframe = iframe;
    }
    initIframe();
    data = data.replace(rEscapedNewline, '\\\n');
    this.area.value = data.replace(rNewline, '\\n');
    try {
      this.form.submit();
    } catch (e) {}
    if (this.iframe.attachEvent) {
      this.iframe.onreadystatechange = function () {
        if (self.iframe.readyState == 'complete') {
          complete();
        }
      };
    } else {
      this.iframe.onload = complete;
    }
  };
  return module.exports;
});
$__System.registerDynamic("11", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */

  module.exports = function (a, b) {
    var fn = function () {};
    fn.prototype = b.prototype;
    a.prototype = new fn();
    a.prototype.constructor = a;
  };
  return module.exports;
});
$__System.registerDynamic("9", ["11"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("11");
  return module.exports;
});
$__System.registerDynamic('12', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
      length = 64,
      map = {},
      seed = 0,
      i = 0,
      prev;

  /**
   * Return a string representing the specified number.
   *
   * @param {Number} num The number to convert.
   * @returns {String} The string representation of the number.
   * @api public
   */
  function encode(num) {
    var encoded = '';

    do {
      encoded = alphabet[num % length] + encoded;
      num = Math.floor(num / length);
    } while (num > 0);

    return encoded;
  }

  /**
   * Return the integer value specified by the given string.
   *
   * @param {String} str The string to convert.
   * @returns {Number} The integer value represented by the string.
   * @api public
   */
  function decode(str) {
    var decoded = 0;

    for (i = 0; i < str.length; i++) {
      decoded = decoded * length + map[str.charAt(i)];
    }

    return decoded;
  }

  /**
   * Yeast: A tiny growing id generator.
   *
   * @returns {String} A unique id.
   * @api public
   */
  function yeast() {
    var now = encode(+new Date());

    if (now !== prev) return seed = 0, prev = now;
    return now + '.' + encode(seed++);
  }

  //
  // Map each character to its index.
  //
  for (; i < length; i++) map[alphabet[i]] = i;

  //
  // Expose the `yeast`, `encode` and `decode` functions.
  //
  yeast.encode = encode;
  yeast.decode = decode;
  module.exports = yeast;
  return module.exports;
});
$__System.registerDynamic("d", ["12"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("12");
  return module.exports;
});
$__System.registerDynamic('13', ['c', 'f', 'e', '9', 'd', '4', '@empty'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var Transport = $__require('c');
  var parser = $__require('f');
  var parseqs = $__require('e');
  var inherit = $__require('9');
  var yeast = $__require('d');
  var debug = $__require('4')('engine.io-client:websocket');
  var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
  var WebSocket = BrowserWebSocket;
  if (!WebSocket && typeof window === 'undefined') {
    try {
      WebSocket = $__require('@empty');
    } catch (e) {}
  }
  module.exports = WS;
  function WS(opts) {
    var forceBase64 = opts && opts.forceBase64;
    if (forceBase64) {
      this.supportsBinary = false;
    }
    this.perMessageDeflate = opts.perMessageDeflate;
    Transport.call(this, opts);
  }
  inherit(WS, Transport);
  WS.prototype.name = 'websocket';
  WS.prototype.supportsBinary = true;
  WS.prototype.doOpen = function () {
    if (!this.check()) {
      return;
    }
    var self = this;
    var uri = this.uri();
    var protocols = void 0;
    var opts = {
      agent: this.agent,
      perMessageDeflate: this.perMessageDeflate
    };
    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;
    if (this.extraHeaders) {
      opts.headers = this.extraHeaders;
    }
    this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    if (this.ws.binaryType === undefined) {
      this.supportsBinary = false;
    }
    if (this.ws.supports && this.ws.supports.binary) {
      this.supportsBinary = true;
      this.ws.binaryType = 'buffer';
    } else {
      this.ws.binaryType = 'arraybuffer';
    }
    this.addEventListeners();
  };
  WS.prototype.addEventListeners = function () {
    var self = this;
    this.ws.onopen = function () {
      self.onOpen();
    };
    this.ws.onclose = function () {
      self.onClose();
    };
    this.ws.onmessage = function (ev) {
      self.onData(ev.data);
    };
    this.ws.onerror = function (e) {
      self.onError('websocket error', e);
    };
  };
  if ('undefined' != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    WS.prototype.onData = function (data) {
      var self = this;
      setTimeout(function () {
        Transport.prototype.onData.call(self, data);
      }, 0);
    };
  }
  WS.prototype.write = function (packets) {
    var self = this;
    this.writable = false;
    var total = packets.length;
    for (var i = 0, l = total; i < l; i++) {
      (function (packet) {
        parser.encodePacket(packet, self.supportsBinary, function (data) {
          if (!BrowserWebSocket) {
            var opts = {};
            if (packet.options) {
              opts.compress = packet.options.compress;
            }
            if (self.perMessageDeflate) {
              var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
              if (len < self.perMessageDeflate.threshold) {
                opts.compress = false;
              }
            }
          }
          try {
            if (BrowserWebSocket) {
              self.ws.send(data);
            } else {
              self.ws.send(data, opts);
            }
          } catch (e) {
            debug('websocket closed before onclose event');
          }
          --total || done();
        });
      })(packets[i]);
    }
    function done() {
      self.emit('flush');
      setTimeout(function () {
        self.writable = true;
        self.emit('drain');
      }, 0);
    }
  };
  WS.prototype.onClose = function () {
    Transport.prototype.onClose.call(this);
  };
  WS.prototype.doClose = function () {
    if (typeof this.ws !== 'undefined') {
      this.ws.close();
    }
  };
  WS.prototype.uri = function () {
    var query = this.query || {};
    var schema = this.secure ? 'wss' : 'ws';
    var port = '';
    if (this.port && ('wss' == schema && this.port != 443 || 'ws' == schema && this.port != 80)) {
      port = ':' + this.port;
    }
    if (this.timestampRequests) {
      query[this.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    query = parseqs.encode(query);
    if (query.length) {
      query = '?' + query;
    }
    var ipv6 = this.hostname.indexOf(':') !== -1;
    return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
  };
  WS.prototype.check = function () {
    return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
  };
  return module.exports;
});
$__System.registerDynamic('14', ['6', '5', '10', '13'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var XMLHttpRequest = $__require('6');
  var XHR = $__require('5');
  var JSONP = $__require('10');
  var websocket = $__require('13');
  exports.polling = polling;
  exports.websocket = websocket;
  function polling(opts) {
    var xhr;
    var xd = false;
    var xs = false;
    var jsonp = false !== opts.jsonp;
    if (global.location) {
      var isSSL = 'https:' == location.protocol;
      var port = location.port;
      if (!port) {
        port = isSSL ? 443 : 80;
      }
      xd = opts.hostname != location.hostname || port != opts.port;
      xs = opts.secure != isSSL;
    }
    opts.xdomain = xd;
    opts.xscheme = xs;
    xhr = new XMLHttpRequest(opts);
    if ('open' in xhr && !opts.forceJSONP) {
      return new XHR(opts);
    } else {
      if (!jsonp) throw new Error('JSONP disabled');
      return new JSONP(opts);
    }
  }
  return module.exports;
});
$__System.registerDynamic('15', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /**
     * Parses an URI
     *
     * @author Steven Levithan <stevenlevithan.com> (MIT license)
     * @api private
     */

    var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

    var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

    module.exports = function parseuri(str) {
        var src = str,
            b = str.indexOf('['),
            e = str.indexOf(']');

        if (b != -1 && e != -1) {
            str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
        }

        var m = re.exec(str || ''),
            uri = {},
            i = 14;

        while (i--) {
            uri[parts[i]] = m[i] || '';
        }

        if (b != -1 && e != -1) {
            uri.source = src;
            uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
            uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
            uri.ipv6uri = true;
        }

        return uri;
    };
    return module.exports;
});
$__System.registerDynamic("3", ["15"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("15");
  return module.exports;
});
$__System.registerDynamic('16', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * JSON parse.
   *
   * @see Based on jQuery#parseJSON (MIT) and JSON2
   * @api private
   */

  var rvalidchars = /^[\],:{}\s]*$/;
  var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
  var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
  var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
  var rtrimLeft = /^\s+/;
  var rtrimRight = /\s+$/;

  module.exports = function parsejson(data) {
    if ('string' != typeof data || !data) {
      return null;
    }

    data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

    // Attempt to parse using the native JSON parser first
    if (global.JSON && JSON.parse) {
      return JSON.parse(data);
    }

    if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
      return new Function('return ' + data)();
    }
  };
  return module.exports;
});
$__System.registerDynamic("17", ["16"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("16");
  return module.exports;
});
$__System.registerDynamic('18', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Compiles a querystring
   * Returns string representation of the object
   *
   * @param {Object}
   * @api private
   */

  exports.encode = function (obj) {
    var str = '';

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (str.length) str += '&';
        str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
      }
    }

    return str;
  };

  /**
   * Parses a simple querystring into an object
   *
   * @param {String} qs
   * @api private
   */

  exports.decode = function (qs) {
    var qry = {};
    var pairs = qs.split('&');
    for (var i = 0, l = pairs.length; i < l; i++) {
      var pair = pairs[i].split('=');
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  };
  return module.exports;
});
$__System.registerDynamic("e", ["18"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("18");
  return module.exports;
});
$__System.registerDynamic('c', ['f', '8'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Module dependencies.
   */

  var parser = $__require('f');
  var Emitter = $__require('8');

  /**
   * Module exports.
   */

  module.exports = Transport;

  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */

  function Transport(opts) {
    this.path = opts.path;
    this.hostname = opts.hostname;
    this.port = opts.port;
    this.secure = opts.secure;
    this.query = opts.query;
    this.timestampParam = opts.timestampParam;
    this.timestampRequests = opts.timestampRequests;
    this.readyState = '';
    this.agent = opts.agent || false;
    this.socket = opts.socket;
    this.enablesXDR = opts.enablesXDR;

    // SSL options for Node.js client
    this.pfx = opts.pfx;
    this.key = opts.key;
    this.passphrase = opts.passphrase;
    this.cert = opts.cert;
    this.ca = opts.ca;
    this.ciphers = opts.ciphers;
    this.rejectUnauthorized = opts.rejectUnauthorized;

    // other options for Node.js client
    this.extraHeaders = opts.extraHeaders;
  }

  /**
   * Mix in `Emitter`.
   */

  Emitter(Transport.prototype);

  /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */

  Transport.prototype.onError = function (msg, desc) {
    var err = new Error(msg);
    err.type = 'TransportError';
    err.description = desc;
    this.emit('error', err);
    return this;
  };

  /**
   * Opens the transport.
   *
   * @api public
   */

  Transport.prototype.open = function () {
    if ('closed' == this.readyState || '' == this.readyState) {
      this.readyState = 'opening';
      this.doOpen();
    }

    return this;
  };

  /**
   * Closes the transport.
   *
   * @api private
   */

  Transport.prototype.close = function () {
    if ('opening' == this.readyState || 'open' == this.readyState) {
      this.doClose();
      this.onClose();
    }

    return this;
  };

  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   * @api private
   */

  Transport.prototype.send = function (packets) {
    if ('open' == this.readyState) {
      this.write(packets);
    } else {
      throw new Error('Transport not open');
    }
  };

  /**
   * Called upon open
   *
   * @api private
   */

  Transport.prototype.onOpen = function () {
    this.readyState = 'open';
    this.writable = true;
    this.emit('open');
  };

  /**
   * Called with data.
   *
   * @param {String} data
   * @api private
   */

  Transport.prototype.onData = function (data) {
    var packet = parser.decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  };

  /**
   * Called with a decoded packet.
   */

  Transport.prototype.onPacket = function (packet) {
    this.emit('packet', packet);
  };

  /**
   * Called upon close.
   *
   * @api private
   */

  Transport.prototype.onClose = function () {
    this.readyState = 'closed';
    this.emit('close');
  };
  return module.exports;
});
$__System.registerDynamic('19', ['14', '8', '4', '1a', 'f', '3', '17', 'e', 'c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var transports = $__require('14');
  var Emitter = $__require('8');
  var debug = $__require('4')('engine.io-client:socket');
  var index = $__require('1a');
  var parser = $__require('f');
  var parseuri = $__require('3');
  var parsejson = $__require('17');
  var parseqs = $__require('e');
  module.exports = Socket;
  function noop() {}
  function Socket(uri, opts) {
    if (!(this instanceof Socket)) return new Socket(uri, opts);
    opts = opts || {};
    if (uri && 'object' == typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parseuri(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parseuri(opts.host).host;
    }
    this.secure = null != opts.secure ? opts.secure : global.location && 'https:' == location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? '443' : '80';
    }
    this.agent = opts.agent || false;
    this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
    this.port = opts.port || (global.location && location.port ? location.port : this.secure ? 443 : 80);
    this.query = opts.query || {};
    if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
    this.upgrade = false !== opts.upgrade;
    this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
    this.forceJSONP = !!opts.forceJSONP;
    this.jsonp = false !== opts.jsonp;
    this.forceBase64 = !!opts.forceBase64;
    this.enablesXDR = !!opts.enablesXDR;
    this.timestampParam = opts.timestampParam || 't';
    this.timestampRequests = opts.timestampRequests;
    this.transports = opts.transports || ['polling', 'websocket'];
    this.readyState = '';
    this.writeBuffer = [];
    this.policyPort = opts.policyPort || 843;
    this.rememberUpgrade = opts.rememberUpgrade || false;
    this.binaryType = null;
    this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
    this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
    if (true === this.perMessageDeflate) this.perMessageDeflate = {};
    if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
      this.perMessageDeflate.threshold = 1024;
    }
    this.pfx = opts.pfx || null;
    this.key = opts.key || null;
    this.passphrase = opts.passphrase || null;
    this.cert = opts.cert || null;
    this.ca = opts.ca || null;
    this.ciphers = opts.ciphers || null;
    this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
    var freeGlobal = typeof global == 'object' && global;
    if (freeGlobal.global === freeGlobal) {
      if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
        this.extraHeaders = opts.extraHeaders;
      }
    }
    this.open();
  }
  Socket.priorWebsocketSuccess = false;
  Emitter(Socket.prototype);
  Socket.protocol = parser.protocol;
  Socket.Socket = Socket;
  Socket.Transport = $__require('c');
  Socket.transports = $__require('14');
  Socket.parser = $__require('f');
  Socket.prototype.createTransport = function (name) {
    debug('creating transport "%s"', name);
    var query = clone(this.query);
    query.EIO = parser.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    var transport = new transports[name]({
      agent: this.agent,
      hostname: this.hostname,
      port: this.port,
      secure: this.secure,
      path: this.path,
      query: query,
      forceJSONP: this.forceJSONP,
      jsonp: this.jsonp,
      forceBase64: this.forceBase64,
      enablesXDR: this.enablesXDR,
      timestampRequests: this.timestampRequests,
      timestampParam: this.timestampParam,
      policyPort: this.policyPort,
      socket: this,
      pfx: this.pfx,
      key: this.key,
      passphrase: this.passphrase,
      cert: this.cert,
      ca: this.ca,
      ciphers: this.ciphers,
      rejectUnauthorized: this.rejectUnauthorized,
      perMessageDeflate: this.perMessageDeflate,
      extraHeaders: this.extraHeaders
    });
    return transport;
  };
  function clone(obj) {
    var o = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = obj[i];
      }
    }
    return o;
  }
  Socket.prototype.open = function () {
    var transport;
    if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
      transport = 'websocket';
    } else if (0 === this.transports.length) {
      var self = this;
      setTimeout(function () {
        self.emit('error', 'No transports available');
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = 'opening';
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  };
  Socket.prototype.setTransport = function (transport) {
    debug('setting transport %s', transport.name);
    var self = this;
    if (this.transport) {
      debug('clearing existing transport %s', this.transport.name);
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on('drain', function () {
      self.onDrain();
    }).on('packet', function (packet) {
      self.onPacket(packet);
    }).on('error', function (e) {
      self.onError(e);
    }).on('close', function () {
      self.onClose('transport close');
    });
  };
  Socket.prototype.probe = function (name) {
    debug('probing transport "%s"', name);
    var transport = this.createTransport(name, { probe: 1 }),
        failed = false,
        self = this;
    Socket.priorWebsocketSuccess = false;
    function onTransportOpen() {
      if (self.onlyBinaryUpgrades) {
        var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
        failed = failed || upgradeLosesBinary;
      }
      if (failed) return;
      debug('probe transport "%s" opened', name);
      transport.send([{
        type: 'ping',
        data: 'probe'
      }]);
      transport.once('packet', function (msg) {
        if (failed) return;
        if ('pong' == msg.type && 'probe' == msg.data) {
          debug('probe transport "%s" pong', name);
          self.upgrading = true;
          self.emit('upgrading', transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = 'websocket' == transport.name;
          debug('pausing current transport "%s"', self.transport.name);
          self.transport.pause(function () {
            if (failed) return;
            if ('closed' == self.readyState) return;
            debug('changing transport and sending upgrade packet');
            cleanup();
            self.setTransport(transport);
            transport.send([{ type: 'upgrade' }]);
            self.emit('upgrade', transport);
            transport = null;
            self.upgrading = false;
            self.flush();
          });
        } else {
          debug('probe transport "%s" failed', name);
          var err = new Error('probe error');
          err.transport = transport.name;
          self.emit('upgradeError', err);
        }
      });
    }
    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    function onerror(err) {
      var error = new Error('probe error: ' + err);
      error.transport = transport.name;
      freezeTransport();
      debug('probe transport "%s" failed because of error: %s', name, err);
      self.emit('upgradeError', error);
    }
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name != transport.name) {
        debug('"%s" works - aborting "%s"', to.name, transport.name);
        freezeTransport();
      }
    }
    function cleanup() {
      transport.removeListener('open', onTransportOpen);
      transport.removeListener('error', onerror);
      transport.removeListener('close', onTransportClose);
      self.removeListener('close', onclose);
      self.removeListener('upgrading', onupgrade);
    }
    transport.once('open', onTransportOpen);
    transport.once('error', onerror);
    transport.once('close', onTransportClose);
    this.once('close', onclose);
    this.once('upgrading', onupgrade);
    transport.open();
  };
  Socket.prototype.onOpen = function () {
    debug('socket open');
    this.readyState = 'open';
    Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
    this.emit('open');
    this.flush();
    if ('open' == this.readyState && this.upgrade && this.transport.pause) {
      debug('starting upgrade probes');
      for (var i = 0, l = this.upgrades.length; i < l; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  };
  Socket.prototype.onPacket = function (packet) {
    if ('opening' == this.readyState || 'open' == this.readyState) {
      debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
      this.emit('packet', packet);
      this.emit('heartbeat');
      switch (packet.type) {
        case 'open':
          this.onHandshake(parsejson(packet.data));
          break;
        case 'pong':
          this.setPing();
          this.emit('pong');
          break;
        case 'error':
          var err = new Error('server error');
          err.code = packet.data;
          this.onError(err);
          break;
        case 'message':
          this.emit('data', packet.data);
          this.emit('message', packet.data);
          break;
      }
    } else {
      debug('packet received with socket readyState "%s"', this.readyState);
    }
  };
  Socket.prototype.onHandshake = function (data) {
    this.emit('handshake', data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.onOpen();
    if ('closed' == this.readyState) return;
    this.setPing();
    this.removeListener('heartbeat', this.onHeartbeat);
    this.on('heartbeat', this.onHeartbeat);
  };
  Socket.prototype.onHeartbeat = function (timeout) {
    clearTimeout(this.pingTimeoutTimer);
    var self = this;
    self.pingTimeoutTimer = setTimeout(function () {
      if ('closed' == self.readyState) return;
      self.onClose('ping timeout');
    }, timeout || self.pingInterval + self.pingTimeout);
  };
  Socket.prototype.setPing = function () {
    var self = this;
    clearTimeout(self.pingIntervalTimer);
    self.pingIntervalTimer = setTimeout(function () {
      debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
      self.ping();
      self.onHeartbeat(self.pingTimeout);
    }, self.pingInterval);
  };
  Socket.prototype.ping = function () {
    var self = this;
    this.sendPacket('ping', function () {
      self.emit('ping');
    });
  };
  Socket.prototype.onDrain = function () {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emit('drain');
    } else {
      this.flush();
    }
  };
  Socket.prototype.flush = function () {
    if ('closed' != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      debug('flushing %d packets in socket', this.writeBuffer.length);
      this.transport.send(this.writeBuffer);
      this.prevBufferLen = this.writeBuffer.length;
      this.emit('flush');
    }
  };
  Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
    this.sendPacket('message', msg, options, fn);
    return this;
  };
  Socket.prototype.sendPacket = function (type, data, options, fn) {
    if ('function' == typeof data) {
      fn = data;
      data = undefined;
    }
    if ('function' == typeof options) {
      fn = options;
      options = null;
    }
    if ('closing' == this.readyState || 'closed' == this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    var packet = {
      type: type,
      data: data,
      options: options
    };
    this.emit('packetCreate', packet);
    this.writeBuffer.push(packet);
    if (fn) this.once('flush', fn);
    this.flush();
  };
  Socket.prototype.close = function () {
    if ('opening' == this.readyState || 'open' == this.readyState) {
      this.readyState = 'closing';
      var self = this;
      if (this.writeBuffer.length) {
        this.once('drain', function () {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    function close() {
      self.onClose('forced close');
      debug('socket closing - telling transport to close');
      self.transport.close();
    }
    function cleanupAndClose() {
      self.removeListener('upgrade', cleanupAndClose);
      self.removeListener('upgradeError', cleanupAndClose);
      close();
    }
    function waitForUpgrade() {
      self.once('upgrade', cleanupAndClose);
      self.once('upgradeError', cleanupAndClose);
    }
    return this;
  };
  Socket.prototype.onError = function (err) {
    debug('socket error %j', err);
    Socket.priorWebsocketSuccess = false;
    this.emit('error', err);
    this.onClose('transport error', err);
  };
  Socket.prototype.onClose = function (reason, desc) {
    if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
      debug('socket close with reason: "%s"', reason);
      var self = this;
      clearTimeout(this.pingIntervalTimer);
      clearTimeout(this.pingTimeoutTimer);
      this.transport.removeAllListeners('close');
      this.transport.close();
      this.transport.removeAllListeners();
      this.readyState = 'closed';
      this.id = null;
      this.emit('close', reason, desc);
      self.writeBuffer = [];
      self.prevBufferLen = 0;
    }
  };
  Socket.prototype.filterUpgrades = function (upgrades) {
    var filteredUpgrades = [];
    for (var i = 0, j = upgrades.length; i < j; i++) {
      if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  };
  return module.exports;
});
$__System.registerDynamic("1b", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;

  /**
   * Gets the keys for an object.
   *
   * @return {Array} keys
   * @api private
   */

  module.exports = Object.keys || function keys(obj) {
    var arr = [];
    var has = Object.prototype.hasOwnProperty;

    for (var i in obj) {
      if (has.call(obj, i)) {
        arr.push(i);
      }
    }
    return arr;
  };
  return module.exports;
});
$__System.registerDynamic('1c', ['1d', '1e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (Buffer) {
    var isArray = $__require('1d');
    module.exports = hasBinary;
    function hasBinary(data) {
      function _hasBinary(obj) {
        if (!obj) return false;
        if (global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
          return true;
        }
        if (isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            if (_hasBinary(obj[i])) {
              return true;
            }
          }
        } else if (obj && 'object' == typeof obj) {
          if (obj.toJSON) {
            obj = obj.toJSON();
          }
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
              return true;
            }
          }
        }
        return false;
      }
      return _hasBinary(data);
    }
  })($__require('1e').Buffer);
  return module.exports;
});
$__System.registerDynamic("1f", ["1c"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("1c");
  return module.exports;
});
$__System.registerDynamic("20", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * An abstraction for slicing an arraybuffer even when
   * ArrayBuffer.prototype.slice is not supported
   *
   * @api public
   */

  module.exports = function (arraybuffer, start, end) {
    var bytes = arraybuffer.byteLength;
    start = start || 0;
    end = end || bytes;

    if (arraybuffer.slice) {
      return arraybuffer.slice(start, end);
    }

    if (start < 0) {
      start += bytes;
    }
    if (end < 0) {
      end += bytes;
    }
    if (end > bytes) {
      end = bytes;
    }

    if (start >= bytes || start >= end || bytes === 0) {
      return new ArrayBuffer(0);
    }

    var abv = new Uint8Array(arraybuffer);
    var result = new Uint8Array(end - start);
    for (var i = start, ii = 0; i < end; i++, ii++) {
      result[ii] = abv[i];
    }
    return result.buffer;
  };
  return module.exports;
});
$__System.registerDynamic("21", ["20"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("20");
  return module.exports;
});
$__System.registerDynamic("22", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /*
   * base64-arraybuffer
   * https://github.com/niklasvh/base64-arraybuffer
   *
   * Copyright (c) 2012 Niklas von Hertzen
   * Licensed under the MIT license.
   */
  (function (chars) {
    "use strict";

    exports.encode = function (arraybuffer) {
      var bytes = new Uint8Array(arraybuffer),
          i,
          len = bytes.length,
          base64 = "";

      for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
      }

      if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + "=";
      } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + "==";
      }

      return base64;
    };

    exports.decode = function (base64) {
      var bufferLength = base64.length * 0.75,
          len = base64.length,
          i,
          p = 0,
          encoded1,
          encoded2,
          encoded3,
          encoded4;

      if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
          bufferLength--;
        }
      }

      var arraybuffer = new ArrayBuffer(bufferLength),
          bytes = new Uint8Array(arraybuffer);

      for (i = 0; i < len; i += 4) {
        encoded1 = chars.indexOf(base64[i]);
        encoded2 = chars.indexOf(base64[i + 1]);
        encoded3 = chars.indexOf(base64[i + 2]);
        encoded4 = chars.indexOf(base64[i + 3]);

        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
      }

      return arraybuffer;
    };
  })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
  return module.exports;
});
$__System.registerDynamic("23", ["22"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("22");
  return module.exports;
});
$__System.registerDynamic('24', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    module.exports = after;

    function after(count, callback, err_cb) {
        var bail = false;
        err_cb = err_cb || noop;
        proxy.count = count;

        return count === 0 ? callback() : proxy;

        function proxy(err, result) {
            if (proxy.count <= 0) {
                throw new Error('after called too many times');
            }
            --proxy.count;

            // after first error, rest are passed to err_cb
            if (err) {
                bail = true;
                callback(err);
                // future error callbacks will go to error handler
                callback = err_cb;
            } else if (proxy.count === 0 && !bail) {
                callback(null, result);
            }
        }
    }

    function noop() {}
    return module.exports;
});
$__System.registerDynamic("25", ["24"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("24");
  return module.exports;
});
$__System.registerDynamic('26', [], true, function ($__require, exports, module) {
	/* */
	"format cjs";
	/*! https://mths.be/utf8js v2.0.0 by @mathias */

	var define,
	    global = this || self,
	    GLOBAL = global;
	;(function (root) {

		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) {
						// low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}

		function checkScalarValue(codePoint) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
			}
		}
		/*--------------------------------------------------------------------------*/

		function createByte(codePoint, shift) {
			return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
		}

		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) {
				// 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) {
				// 2-byte sequence
				symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
			} else if ((codePoint & 0xFFFF0000) == 0) {
				// 3-byte sequence
				checkScalarValue(codePoint);
				symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
				symbol += createByte(codePoint, 6);
			} else if ((codePoint & 0xFFE00000) == 0) {
				// 4-byte sequence
				symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
			return symbol;
		}

		function utf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}

		/*--------------------------------------------------------------------------*/

		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}

			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}

			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}

		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;

			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}

			if (byteIndex == byteCount) {
				return false;
			}

			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}

			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = (byte1 & 0x1F) << 6 | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;
				if (codePoint >= 0x0800) {
					checkScalarValue(codePoint);
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = (byte1 & 0x0F) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}

			throw Error('Invalid UTF-8 detected');
		}

		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}

		/*--------------------------------------------------------------------------*/

		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
			define(function () {
				return utf8;
			});
		} else if (freeExports && !freeExports.nodeType) {
			if (freeModule) {
				// in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.utf8 = utf8;
		}
	})(this);
	return module.exports;
});
$__System.registerDynamic("27", ["26"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("26");
  return module.exports;
});
$__System.registerDynamic('28', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Create a blob builder even when vendor prefixes exist
   */

  var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;

  /**
   * Check if Blob constructor is supported
   */

  var blobSupported = function () {
    try {
      var a = new Blob(['hi']);
      return a.size === 2;
    } catch (e) {
      return false;
    }
  }();

  /**
   * Check if Blob constructor supports ArrayBufferViews
   * Fails in Safari 6, so we need to map to ArrayBuffers there.
   */

  var blobSupportsArrayBufferView = blobSupported && function () {
    try {
      var b = new Blob([new Uint8Array([1, 2])]);
      return b.size === 2;
    } catch (e) {
      return false;
    }
  }();

  /**
   * Check if BlobBuilder is supported
   */

  var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;

  /**
   * Helper function that maps ArrayBufferViews to ArrayBuffers
   * Used by BlobBuilder constructor and old browsers that didn't
   * support it in the Blob constructor.
   */

  function mapArrayBufferViews(ary) {
    for (var i = 0; i < ary.length; i++) {
      var chunk = ary[i];
      if (chunk.buffer instanceof ArrayBuffer) {
        var buf = chunk.buffer;

        // if this is a subarray, make a copy so we only
        // include the subarray region from the underlying buffer
        if (chunk.byteLength !== buf.byteLength) {
          var copy = new Uint8Array(chunk.byteLength);
          copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
          buf = copy.buffer;
        }

        ary[i] = buf;
      }
    }
  }

  function BlobBuilderConstructor(ary, options) {
    options = options || {};

    var bb = new BlobBuilder();
    mapArrayBufferViews(ary);

    for (var i = 0; i < ary.length; i++) {
      bb.append(ary[i]);
    }

    return options.type ? bb.getBlob(options.type) : bb.getBlob();
  };

  function BlobConstructor(ary, options) {
    mapArrayBufferViews(ary);
    return new Blob(ary, options || {});
  };

  module.exports = function () {
    if (blobSupported) {
      return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
    } else if (blobBuilderSupported) {
      return BlobBuilderConstructor;
    } else {
      return undefined;
    }
  }();
  return module.exports;
});
$__System.registerDynamic("29", ["28"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("28");
  return module.exports;
});
$__System.registerDynamic('2a', ['1b', '1f', '21', '23', '25', '27', '29'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var keys = $__require('1b');
  var hasBinary = $__require('1f');
  var sliceBuffer = $__require('21');
  var base64encoder = $__require('23');
  var after = $__require('25');
  var utf8 = $__require('27');
  var isAndroid = navigator.userAgent.match(/Android/i);
  var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);
  var dontSendBlobs = isAndroid || isPhantomJS;
  exports.protocol = 3;
  var packets = exports.packets = {
    open: 0,
    close: 1,
    ping: 2,
    pong: 3,
    message: 4,
    upgrade: 5,
    noop: 6
  };
  var packetslist = keys(packets);
  var err = {
    type: 'error',
    data: 'parser error'
  };
  var Blob = $__require('29');
  exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
    if ('function' == typeof supportsBinary) {
      callback = supportsBinary;
      supportsBinary = false;
    }
    if ('function' == typeof utf8encode) {
      callback = utf8encode;
      utf8encode = null;
    }
    var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;
    if (global.ArrayBuffer && data instanceof ArrayBuffer) {
      return encodeArrayBuffer(packet, supportsBinary, callback);
    } else if (Blob && data instanceof global.Blob) {
      return encodeBlob(packet, supportsBinary, callback);
    }
    if (data && data.base64) {
      return encodeBase64Object(packet, callback);
    }
    var encoded = packets[packet.type];
    if (undefined !== packet.data) {
      encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
    }
    return callback('' + encoded);
  };
  function encodeBase64Object(packet, callback) {
    var message = 'b' + exports.packets[packet.type] + packet.data.data;
    return callback(message);
  }
  function encodeArrayBuffer(packet, supportsBinary, callback) {
    if (!supportsBinary) {
      return exports.encodeBase64Packet(packet, callback);
    }
    var data = packet.data;
    var contentArray = new Uint8Array(data);
    var resultBuffer = new Uint8Array(1 + data.byteLength);
    resultBuffer[0] = packets[packet.type];
    for (var i = 0; i < contentArray.length; i++) {
      resultBuffer[i + 1] = contentArray[i];
    }
    return callback(resultBuffer.buffer);
  }
  function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
    if (!supportsBinary) {
      return exports.encodeBase64Packet(packet, callback);
    }
    var fr = new FileReader();
    fr.onload = function () {
      packet.data = fr.result;
      exports.encodePacket(packet, supportsBinary, true, callback);
    };
    return fr.readAsArrayBuffer(packet.data);
  }
  function encodeBlob(packet, supportsBinary, callback) {
    if (!supportsBinary) {
      return exports.encodeBase64Packet(packet, callback);
    }
    if (dontSendBlobs) {
      return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
    }
    var length = new Uint8Array(1);
    length[0] = packets[packet.type];
    var blob = new Blob([length.buffer, packet.data]);
    return callback(blob);
  }
  exports.encodeBase64Packet = function (packet, callback) {
    var message = 'b' + exports.packets[packet.type];
    if (Blob && packet.data instanceof global.Blob) {
      var fr = new FileReader();
      fr.onload = function () {
        var b64 = fr.result.split(',')[1];
        callback(message + b64);
      };
      return fr.readAsDataURL(packet.data);
    }
    var b64data;
    try {
      b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
    } catch (e) {
      var typed = new Uint8Array(packet.data);
      var basic = new Array(typed.length);
      for (var i = 0; i < typed.length; i++) {
        basic[i] = typed[i];
      }
      b64data = String.fromCharCode.apply(null, basic);
    }
    message += global.btoa(b64data);
    return callback(message);
  };
  exports.decodePacket = function (data, binaryType, utf8decode) {
    if (typeof data == 'string' || data === undefined) {
      if (data.charAt(0) == 'b') {
        return exports.decodeBase64Packet(data.substr(1), binaryType);
      }
      if (utf8decode) {
        try {
          data = utf8.decode(data);
        } catch (e) {
          return err;
        }
      }
      var type = data.charAt(0);
      if (Number(type) != type || !packetslist[type]) {
        return err;
      }
      if (data.length > 1) {
        return {
          type: packetslist[type],
          data: data.substring(1)
        };
      } else {
        return { type: packetslist[type] };
      }
    }
    var asArray = new Uint8Array(data);
    var type = asArray[0];
    var rest = sliceBuffer(data, 1);
    if (Blob && binaryType === 'blob') {
      rest = new Blob([rest]);
    }
    return {
      type: packetslist[type],
      data: rest
    };
  };
  exports.decodeBase64Packet = function (msg, binaryType) {
    var type = packetslist[msg.charAt(0)];
    if (!global.ArrayBuffer) {
      return {
        type: type,
        data: {
          base64: true,
          data: msg.substr(1)
        }
      };
    }
    var data = base64encoder.decode(msg.substr(1));
    if (binaryType === 'blob' && Blob) {
      data = new Blob([data]);
    }
    return {
      type: type,
      data: data
    };
  };
  exports.encodePayload = function (packets, supportsBinary, callback) {
    if (typeof supportsBinary == 'function') {
      callback = supportsBinary;
      supportsBinary = null;
    }
    var isBinary = hasBinary(packets);
    if (supportsBinary && isBinary) {
      if (Blob && !dontSendBlobs) {
        return exports.encodePayloadAsBlob(packets, callback);
      }
      return exports.encodePayloadAsArrayBuffer(packets, callback);
    }
    if (!packets.length) {
      return callback('0:');
    }
    function setLengthHeader(message) {
      return message.length + ':' + message;
    }
    function encodeOne(packet, doneCallback) {
      exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function (message) {
        doneCallback(null, setLengthHeader(message));
      });
    }
    map(packets, encodeOne, function (err, results) {
      return callback(results.join(''));
    });
  };
  function map(ary, each, done) {
    var result = new Array(ary.length);
    var next = after(ary.length, done);
    var eachWithIndex = function (i, el, cb) {
      each(el, function (error, msg) {
        result[i] = msg;
        cb(error, result);
      });
    };
    for (var i = 0; i < ary.length; i++) {
      eachWithIndex(i, ary[i], next);
    }
  }
  exports.decodePayload = function (data, binaryType, callback) {
    if (typeof data != 'string') {
      return exports.decodePayloadAsBinary(data, binaryType, callback);
    }
    if (typeof binaryType === 'function') {
      callback = binaryType;
      binaryType = null;
    }
    var packet;
    if (data == '') {
      return callback(err, 0, 1);
    }
    var length = '',
        n,
        msg;
    for (var i = 0, l = data.length; i < l; i++) {
      var chr = data.charAt(i);
      if (':' != chr) {
        length += chr;
      } else {
        if ('' == length || length != (n = Number(length))) {
          return callback(err, 0, 1);
        }
        msg = data.substr(i + 1, n);
        if (length != msg.length) {
          return callback(err, 0, 1);
        }
        if (msg.length) {
          packet = exports.decodePacket(msg, binaryType, true);
          if (err.type == packet.type && err.data == packet.data) {
            return callback(err, 0, 1);
          }
          var ret = callback(packet, i + n, l);
          if (false === ret) return;
        }
        i += n;
        length = '';
      }
    }
    if (length != '') {
      return callback(err, 0, 1);
    }
  };
  exports.encodePayloadAsArrayBuffer = function (packets, callback) {
    if (!packets.length) {
      return callback(new ArrayBuffer(0));
    }
    function encodeOne(packet, doneCallback) {
      exports.encodePacket(packet, true, true, function (data) {
        return doneCallback(null, data);
      });
    }
    map(packets, encodeOne, function (err, encodedPackets) {
      var totalLength = encodedPackets.reduce(function (acc, p) {
        var len;
        if (typeof p === 'string') {
          len = p.length;
        } else {
          len = p.byteLength;
        }
        return acc + len.toString().length + len + 2;
      }, 0);
      var resultArray = new Uint8Array(totalLength);
      var bufferIndex = 0;
      encodedPackets.forEach(function (p) {
        var isString = typeof p === 'string';
        var ab = p;
        if (isString) {
          var view = new Uint8Array(p.length);
          for (var i = 0; i < p.length; i++) {
            view[i] = p.charCodeAt(i);
          }
          ab = view.buffer;
        }
        if (isString) {
          resultArray[bufferIndex++] = 0;
        } else {
          resultArray[bufferIndex++] = 1;
        }
        var lenStr = ab.byteLength.toString();
        for (var i = 0; i < lenStr.length; i++) {
          resultArray[bufferIndex++] = parseInt(lenStr[i]);
        }
        resultArray[bufferIndex++] = 255;
        var view = new Uint8Array(ab);
        for (var i = 0; i < view.length; i++) {
          resultArray[bufferIndex++] = view[i];
        }
      });
      return callback(resultArray.buffer);
    });
  };
  exports.encodePayloadAsBlob = function (packets, callback) {
    function encodeOne(packet, doneCallback) {
      exports.encodePacket(packet, true, true, function (encoded) {
        var binaryIdentifier = new Uint8Array(1);
        binaryIdentifier[0] = 1;
        if (typeof encoded === 'string') {
          var view = new Uint8Array(encoded.length);
          for (var i = 0; i < encoded.length; i++) {
            view[i] = encoded.charCodeAt(i);
          }
          encoded = view.buffer;
          binaryIdentifier[0] = 0;
        }
        var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
        var lenStr = len.toString();
        var lengthAry = new Uint8Array(lenStr.length + 1);
        for (var i = 0; i < lenStr.length; i++) {
          lengthAry[i] = parseInt(lenStr[i]);
        }
        lengthAry[lenStr.length] = 255;
        if (Blob) {
          var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
          doneCallback(null, blob);
        }
      });
    }
    map(packets, encodeOne, function (err, results) {
      return callback(new Blob(results));
    });
  };
  exports.decodePayloadAsBinary = function (data, binaryType, callback) {
    if (typeof binaryType === 'function') {
      callback = binaryType;
      binaryType = null;
    }
    var bufferTail = data;
    var buffers = [];
    var numberTooLong = false;
    while (bufferTail.byteLength > 0) {
      var tailArray = new Uint8Array(bufferTail);
      var isString = tailArray[0] === 0;
      var msgLength = '';
      for (var i = 1;; i++) {
        if (tailArray[i] == 255) break;
        if (msgLength.length > 310) {
          numberTooLong = true;
          break;
        }
        msgLength += tailArray[i];
      }
      if (numberTooLong) return callback(err, 0, 1);
      bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
      msgLength = parseInt(msgLength);
      var msg = sliceBuffer(bufferTail, 0, msgLength);
      if (isString) {
        try {
          msg = String.fromCharCode.apply(null, new Uint8Array(msg));
        } catch (e) {
          var typed = new Uint8Array(msg);
          msg = '';
          for (var i = 0; i < typed.length; i++) {
            msg += String.fromCharCode(typed[i]);
          }
        }
      }
      buffers.push(msg);
      bufferTail = sliceBuffer(bufferTail, msgLength);
    }
    var total = buffers.length;
    buffers.forEach(function (buffer, i) {
      callback(exports.decodePacket(buffer, binaryType, true), i, total);
    });
  };
  return module.exports;
});
$__System.registerDynamic("f", ["2a"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("2a");
  return module.exports;
});
$__System.registerDynamic('2b', ['19', 'f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('19');
  module.exports.parser = $__require('f');
  return module.exports;
});
$__System.registerDynamic('2c', ['2b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('2b');
  return module.exports;
});
$__System.registerDynamic("2d", ["2c"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("2c");
  return module.exports;
});
$__System.registerDynamic("2e", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */

  var indexOf = [].indexOf;

  module.exports = function (arr, obj) {
    if (indexOf) return arr.indexOf(obj);
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] === obj) return i;
    }
    return -1;
  };
  return module.exports;
});
$__System.registerDynamic("1a", ["2e"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("2e");
  return module.exports;
});
$__System.registerDynamic("2f", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;

  /**
   * Expose `Backoff`.
   */

  module.exports = Backoff;

  /**
   * Initialize backoff timer with `opts`.
   *
   * - `min` initial timeout in milliseconds [100]
   * - `max` max timeout [10000]
   * - `jitter` [0]
   * - `factor` [2]
   *
   * @param {Object} opts
   * @api public
   */

  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }

  /**
   * Return the backoff duration.
   *
   * @return {Number}
   * @api public
   */

  Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms);
      ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
  };

  /**
   * Reset the number of attempts.
   *
   * @api public
   */

  Backoff.prototype.reset = function () {
    this.attempts = 0;
  };

  /**
   * Set the minimum duration
   *
   * @api public
   */

  Backoff.prototype.setMin = function (min) {
    this.ms = min;
  };

  /**
   * Set the maximum duration
   *
   * @api public
   */

  Backoff.prototype.setMax = function (max) {
    this.max = max;
  };

  /**
   * Set the jitter
   *
   * @api public
   */

  Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
  };
  return module.exports;
});
$__System.registerDynamic("30", ["2f"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("2f");
  return module.exports;
});
$__System.registerDynamic('31', ['2d', '32', '34', '36', '33', '35', '4', '1a', '30'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var eio = $__require('2d');
  var Socket = $__require('32');
  var Emitter = $__require('34');
  var parser = $__require('36');
  var on = $__require('33');
  var bind = $__require('35');
  var debug = $__require('4')('socket.io-client:manager');
  var indexOf = $__require('1a');
  var Backoff = $__require('30');
  var has = Object.prototype.hasOwnProperty;
  module.exports = Manager;
  function Manager(uri, opts) {
    if (!(this instanceof Manager)) return new Manager(uri, opts);
    if (uri && 'object' == typeof uri) {
      opts = uri;
      uri = undefined;
    }
    opts = opts || {};
    opts.path = opts.path || '/socket.io';
    this.nsps = {};
    this.subs = [];
    this.opts = opts;
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1000);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
    this.randomizationFactor(opts.randomizationFactor || 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 20000 : opts.timeout);
    this.readyState = 'closed';
    this.uri = uri;
    this.connecting = [];
    this.lastPing = null;
    this.encoding = false;
    this.packetBuffer = [];
    this.encoder = new parser.Encoder();
    this.decoder = new parser.Decoder();
    this.autoConnect = opts.autoConnect !== false;
    if (this.autoConnect) this.open();
  }
  Manager.prototype.emitAll = function () {
    this.emit.apply(this, arguments);
    for (var nsp in this.nsps) {
      if (has.call(this.nsps, nsp)) {
        this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
      }
    }
  };
  Manager.prototype.updateSocketIds = function () {
    for (var nsp in this.nsps) {
      if (has.call(this.nsps, nsp)) {
        this.nsps[nsp].id = this.engine.id;
      }
    }
  };
  Emitter(Manager.prototype);
  Manager.prototype.reconnection = function (v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  };
  Manager.prototype.reconnectionAttempts = function (v) {
    if (!arguments.length) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  };
  Manager.prototype.reconnectionDelay = function (v) {
    if (!arguments.length) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    this.backoff && this.backoff.setMin(v);
    return this;
  };
  Manager.prototype.randomizationFactor = function (v) {
    if (!arguments.length) return this._randomizationFactor;
    this._randomizationFactor = v;
    this.backoff && this.backoff.setJitter(v);
    return this;
  };
  Manager.prototype.reconnectionDelayMax = function (v) {
    if (!arguments.length) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    this.backoff && this.backoff.setMax(v);
    return this;
  };
  Manager.prototype.timeout = function (v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  };
  Manager.prototype.maybeReconnectOnOpen = function () {
    if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  };
  Manager.prototype.open = Manager.prototype.connect = function (fn) {
    debug('readyState %s', this.readyState);
    if (~this.readyState.indexOf('open')) return this;
    debug('opening %s', this.uri);
    this.engine = eio(this.uri, this.opts);
    var socket = this.engine;
    var self = this;
    this.readyState = 'opening';
    this.skipReconnect = false;
    var openSub = on(socket, 'open', function () {
      self.onopen();
      fn && fn();
    });
    var errorSub = on(socket, 'error', function (data) {
      debug('connect_error');
      self.cleanup();
      self.readyState = 'closed';
      self.emitAll('connect_error', data);
      if (fn) {
        var err = new Error('Connection error');
        err.data = data;
        fn(err);
      } else {
        self.maybeReconnectOnOpen();
      }
    });
    if (false !== this._timeout) {
      var timeout = this._timeout;
      debug('connect attempt will timeout after %d', timeout);
      var timer = setTimeout(function () {
        debug('connect attempt timed out after %d', timeout);
        openSub.destroy();
        socket.close();
        socket.emit('error', 'timeout');
        self.emitAll('connect_timeout', timeout);
      }, timeout);
      this.subs.push({ destroy: function () {
          clearTimeout(timer);
        } });
    }
    this.subs.push(openSub);
    this.subs.push(errorSub);
    return this;
  };
  Manager.prototype.onopen = function () {
    debug('open');
    this.cleanup();
    this.readyState = 'open';
    this.emit('open');
    var socket = this.engine;
    this.subs.push(on(socket, 'data', bind(this, 'ondata')));
    this.subs.push(on(socket, 'ping', bind(this, 'onping')));
    this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
    this.subs.push(on(socket, 'error', bind(this, 'onerror')));
    this.subs.push(on(socket, 'close', bind(this, 'onclose')));
    this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
  };
  Manager.prototype.onping = function () {
    this.lastPing = new Date();
    this.emitAll('ping');
  };
  Manager.prototype.onpong = function () {
    this.emitAll('pong', new Date() - this.lastPing);
  };
  Manager.prototype.ondata = function (data) {
    this.decoder.add(data);
  };
  Manager.prototype.ondecoded = function (packet) {
    this.emit('packet', packet);
  };
  Manager.prototype.onerror = function (err) {
    debug('error', err);
    this.emitAll('error', err);
  };
  Manager.prototype.socket = function (nsp) {
    var socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp);
      this.nsps[nsp] = socket;
      var self = this;
      socket.on('connecting', onConnecting);
      socket.on('connect', function () {
        socket.id = self.engine.id;
      });
      if (this.autoConnect) {
        onConnecting();
      }
    }
    function onConnecting() {
      if (!~indexOf(self.connecting, socket)) {
        self.connecting.push(socket);
      }
    }
    return socket;
  };
  Manager.prototype.destroy = function (socket) {
    var index = indexOf(this.connecting, socket);
    if (~index) this.connecting.splice(index, 1);
    if (this.connecting.length) return;
    this.close();
  };
  Manager.prototype.packet = function (packet) {
    debug('writing packet %j', packet);
    var self = this;
    if (!self.encoding) {
      self.encoding = true;
      this.encoder.encode(packet, function (encodedPackets) {
        for (var i = 0; i < encodedPackets.length; i++) {
          self.engine.write(encodedPackets[i], packet.options);
        }
        self.encoding = false;
        self.processPacketQueue();
      });
    } else {
      self.packetBuffer.push(packet);
    }
  };
  Manager.prototype.processPacketQueue = function () {
    if (this.packetBuffer.length > 0 && !this.encoding) {
      var pack = this.packetBuffer.shift();
      this.packet(pack);
    }
  };
  Manager.prototype.cleanup = function () {
    debug('cleanup');
    var sub;
    while (sub = this.subs.shift()) sub.destroy();
    this.packetBuffer = [];
    this.encoding = false;
    this.lastPing = null;
    this.decoder.destroy();
  };
  Manager.prototype.close = Manager.prototype.disconnect = function () {
    debug('disconnect');
    this.skipReconnect = true;
    this.reconnecting = false;
    if ('opening' == this.readyState) {
      this.cleanup();
    }
    this.backoff.reset();
    this.readyState = 'closed';
    if (this.engine) this.engine.close();
  };
  Manager.prototype.onclose = function (reason) {
    debug('onclose');
    this.cleanup();
    this.backoff.reset();
    this.readyState = 'closed';
    this.emit('close', reason);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  };
  Manager.prototype.reconnect = function () {
    if (this.reconnecting || this.skipReconnect) return this;
    var self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      debug('reconnect failed');
      this.backoff.reset();
      this.emitAll('reconnect_failed');
      this.reconnecting = false;
    } else {
      var delay = this.backoff.duration();
      debug('will wait %dms before reconnect attempt', delay);
      this.reconnecting = true;
      var timer = setTimeout(function () {
        if (self.skipReconnect) return;
        debug('attempting reconnect');
        self.emitAll('reconnect_attempt', self.backoff.attempts);
        self.emitAll('reconnecting', self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(function (err) {
          if (err) {
            debug('reconnect attempt error');
            self.reconnecting = false;
            self.reconnect();
            self.emitAll('reconnect_error', err.data);
          } else {
            debug('reconnect success');
            self.onreconnect();
          }
        });
      }, delay);
      this.subs.push({ destroy: function () {
          clearTimeout(timer);
        } });
    }
  };
  Manager.prototype.onreconnect = function () {
    var attempt = this.backoff.attempts;
    this.reconnecting = false;
    this.backoff.reset();
    this.updateSocketIds();
    this.emitAll('reconnect', attempt);
  };
  return module.exports;
});
$__System.registerDynamic("37", [], true, function ($__require, exports, module) {
  /* */
  "format cjs";
  /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */

  var define,
      global = this || self,
      GLOBAL = global;
  ;(function () {
    // Detect the `define` function exposed by asynchronous module loaders. The
    // strict `define` check is necessary for compatibility with `r.js`.
    var isLoader = typeof define === "function" && define.amd;

    // A set of types used to distinguish objects from primitives.
    var objectTypes = {
      "function": true,
      "object": true
    };

    // Detect the `exports` object exposed by CommonJS implementations.
    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

    // Use the `global` object exposed by Node (including Browserify via
    // `insert-module-globals`), Narwhal, and Ringo as the default context,
    // and the `window` object in browsers. Rhino exports a `global` function
    // instead.
    var root = objectTypes[typeof window] && window || this,
        freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

    if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
      root = freeGlobal;
    }

    // Public: Initializes JSON 3 using the given `context` object, attaching the
    // `stringify` and `parse` functions to the specified `exports` object.
    function runInContext(context, exports) {
      context || (context = root["Object"]());
      exports || (exports = root["Object"]());

      // Native constructor aliases.
      var Number = context["Number"] || root["Number"],
          String = context["String"] || root["String"],
          Object = context["Object"] || root["Object"],
          Date = context["Date"] || root["Date"],
          SyntaxError = context["SyntaxError"] || root["SyntaxError"],
          TypeError = context["TypeError"] || root["TypeError"],
          Math = context["Math"] || root["Math"],
          nativeJSON = context["JSON"] || root["JSON"];

      // Delegate to the native `stringify` and `parse` implementations.
      if (typeof nativeJSON == "object" && nativeJSON) {
        exports.stringify = nativeJSON.stringify;
        exports.parse = nativeJSON.parse;
      }

      // Convenience aliases.
      var objectProto = Object.prototype,
          getClass = objectProto.toString,
          isProperty,
          forEach,
          undef;

      // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
      var isExtended = new Date(-3509827334573292);
      try {
        // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
        // results for certain dates in Opera >= 10.53.
        isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        // Safari < 2.0.2 stores the internal millisecond time value correctly,
        // but clips the values returned by the date methods to the range of
        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
      } catch (exception) {}

      // Internal: Determines whether the native `JSON.stringify` and `parse`
      // implementations are spec-compliant. Based on work by Ken Snyder.
      function has(name) {
        if (has[name] !== undef) {
          // Return cached feature test result.
          return has[name];
        }
        var isSupported;
        if (name == "bug-string-char-index") {
          // IE <= 7 doesn't support accessing string characters using square
          // bracket notation. IE 8 only supports this for primitives.
          isSupported = "a"[0] != "a";
        } else if (name == "json") {
          // Indicates whether both `JSON.stringify` and `JSON.parse` are
          // supported.
          isSupported = has("json-stringify") && has("json-parse");
        } else {
          var value,
              serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
          // Test `JSON.stringify`.
          if (name == "json-stringify") {
            var stringify = exports.stringify,
                stringifySupported = typeof stringify == "function" && isExtended;
            if (stringifySupported) {
              // A test function object with a custom `toJSON` method.
              (value = function () {
                return 1;
              }).toJSON = value;
              try {
                stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" && stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undef &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undef) === undef &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undef &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" && stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undef]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undef, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
              } catch (exception) {
                stringifySupported = false;
              }
            }
            isSupported = stringifySupported;
          }
          // Test `JSON.parse`.
          if (name == "json-parse") {
            var parse = exports.parse;
            if (typeof parse == "function") {
              try {
                // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
                // Conforming implementations should also coerce the initial argument to
                // a string prior to parsing.
                if (parse("0") === 0 && !parse(false)) {
                  // Simple parsing test.
                  value = parse(serialized);
                  var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                  if (parseSupported) {
                    try {
                      // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                      parseSupported = !parse('"\t"');
                    } catch (exception) {}
                    if (parseSupported) {
                      try {
                        // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                        // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                        // certain octal literals.
                        parseSupported = parse("01") !== 1;
                      } catch (exception) {}
                    }
                    if (parseSupported) {
                      try {
                        // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                        // points. These environments, along with FF 3.1b1 and 2,
                        // also allow trailing commas in JSON objects and arrays.
                        parseSupported = parse("1.") !== 1;
                      } catch (exception) {}
                    }
                  }
                }
              } catch (exception) {
                parseSupported = false;
              }
            }
            isSupported = parseSupported;
          }
        }
        return has[name] = !!isSupported;
      }

      if (!has("json")) {
        // Common `[[Class]]` name aliases.
        var functionClass = "[object Function]",
            dateClass = "[object Date]",
            numberClass = "[object Number]",
            stringClass = "[object String]",
            arrayClass = "[object Array]",
            booleanClass = "[object Boolean]";

        // Detect incomplete support for accessing string characters by index.
        var charIndexBuggy = has("bug-string-char-index");

        // Define additional utility methods if the `Date` methods are buggy.
        if (!isExtended) {
          var floor = Math.floor;
          // A mapping between the months of the year and the number of days between
          // January 1st and the first of the respective month.
          var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
          // Internal: Calculates the number of days between the Unix epoch and the
          // first day of the given month.
          var getDay = function (year, month) {
            return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
          };
        }

        // Internal: Determines if a property is a direct property of the given
        // object. Delegates to the native `Object#hasOwnProperty` method.
        if (!(isProperty = objectProto.hasOwnProperty)) {
          isProperty = function (property) {
            var members = {},
                constructor;
            if ((members.__proto__ = null, members.__proto__ = {
              // The *proto* property cannot be set multiple times in recent
              // versions of Firefox and SeaMonkey.
              "toString": 1
            }, members).toString != getClass) {
              // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
              // supports the mutable *proto* property.
              isProperty = function (property) {
                // Capture and break the object's prototype chain (see section 8.6.2
                // of the ES 5.1 spec). The parenthesized expression prevents an
                // unsafe transformation by the Closure Compiler.
                var original = this.__proto__,
                    result = property in (this.__proto__ = null, this);
                // Restore the original prototype chain.
                this.__proto__ = original;
                return result;
              };
            } else {
              // Capture a reference to the top-level `Object` constructor.
              constructor = members.constructor;
              // Use the `constructor` property to simulate `Object#hasOwnProperty` in
              // other environments.
              isProperty = function (property) {
                var parent = (this.constructor || constructor).prototype;
                return property in this && !(property in parent && this[property] === parent[property]);
              };
            }
            members = null;
            return isProperty.call(this, property);
          };
        }

        // Internal: Normalizes the `for...in` iteration algorithm across
        // environments. Each enumerated key is yielded to a `callback` function.
        forEach = function (object, callback) {
          var size = 0,
              Properties,
              members,
              property;

          // Tests for bugs in the current environment's `for...in` algorithm. The
          // `valueOf` property inherits the non-enumerable flag from
          // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
          (Properties = function () {
            this.valueOf = 0;
          }).prototype.valueOf = 0;

          // Iterate over a new instance of the `Properties` class.
          members = new Properties();
          for (property in members) {
            // Ignore all properties inherited from `Object.prototype`.
            if (isProperty.call(members, property)) {
              size++;
            }
          }
          Properties = members = null;

          // Normalize the iteration algorithm.
          if (!size) {
            // A list of non-enumerable properties inherited from `Object.prototype`.
            members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
            // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
            // properties.
            forEach = function (object, callback) {
              var isFunction = getClass.call(object) == functionClass,
                  property,
                  length;
              var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
              for (property in object) {
                // Gecko <= 1.0 enumerates the `prototype` property of functions under
                // certain conditions; IE does not.
                if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                  callback(property);
                }
              }
              // Manually invoke the callback for each non-enumerable property.
              for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
            };
          } else if (size == 2) {
            // Safari <= 2.0.4 enumerates shadowed properties twice.
            forEach = function (object, callback) {
              // Create a set of iterated properties.
              var members = {},
                  isFunction = getClass.call(object) == functionClass,
                  property;
              for (property in object) {
                // Store each property name to prevent double enumeration. The
                // `prototype` property of functions is not enumerated due to cross-
                // environment inconsistencies.
                if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                  callback(property);
                }
              }
            };
          } else {
            // No bugs detected; use the standard `for...in` algorithm.
            forEach = function (object, callback) {
              var isFunction = getClass.call(object) == functionClass,
                  property,
                  isConstructor;
              for (property in object) {
                if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                  callback(property);
                }
              }
              // Manually invoke the callback for the `constructor` property due to
              // cross-environment inconsistencies.
              if (isConstructor || isProperty.call(object, property = "constructor")) {
                callback(property);
              }
            };
          }
          return forEach(object, callback);
        };

        // Public: Serializes a JavaScript `value` as a JSON string. The optional
        // `filter` argument may specify either a function that alters how object and
        // array members are serialized, or an array of strings and numbers that
        // indicates which properties should be serialized. The optional `width`
        // argument may be either a string or number that specifies the indentation
        // level of the output.
        if (!has("json-stringify")) {
          // Internal: A map of control characters and their escaped equivalents.
          var Escapes = {
            92: "\\\\",
            34: '\\"',
            8: "\\b",
            12: "\\f",
            10: "\\n",
            13: "\\r",
            9: "\\t"
          };

          // Internal: Converts `value` into a zero-padded string such that its
          // length is at least equal to `width`. The `width` must be <= 6.
          var leadingZeroes = "000000";
          var toPaddedString = function (width, value) {
            // The `|| 0` expression is necessary to work around a bug in
            // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
            return (leadingZeroes + (value || 0)).slice(-width);
          };

          // Internal: Double-quotes a string `value`, replacing all ASCII control
          // characters (characters with code unit values between 0 and 31) with
          // their escaped equivalents. This is an implementation of the
          // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
          var unicodePrefix = "\\u00";
          var quote = function (value) {
            var result = '"',
                index = 0,
                length = value.length,
                useCharIndex = !charIndexBuggy || length > 10;
            var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
            for (; index < length; index++) {
              var charCode = value.charCodeAt(index);
              // If the character is a control character, append its Unicode or
              // shorthand escape sequence; otherwise, append the character as-is.
              switch (charCode) {
                case 8:case 9:case 10:case 12:case 13:case 34:case 92:
                  result += Escapes[charCode];
                  break;
                default:
                  if (charCode < 32) {
                    result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                    break;
                  }
                  result += useCharIndex ? symbols[index] : value.charAt(index);
              }
            }
            return result + '"';
          };

          // Internal: Recursively serializes an object. Implements the
          // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
          var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
            var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
            try {
              // Necessary for host object support.
              value = object[property];
            } catch (exception) {}
            if (typeof value == "object" && value) {
              className = getClass.call(value);
              if (className == dateClass && !isProperty.call(value, "toJSON")) {
                if (value > -1 / 0 && value < 1 / 0) {
                  // Dates are serialized according to the `Date#toJSON` method
                  // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
                  // for the ISO 8601 date time string format.
                  if (getDay) {
                    // Manually compute the year, month, date, hours, minutes,
                    // seconds, and milliseconds if the `getUTC*` methods are
                    // buggy. Adapted from @Yaffle's `date-shim` project.
                    date = floor(value / 864e5);
                    for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                    for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                    date = 1 + date - getDay(year, month);
                    // The `time` value specifies the time within the day (see ES
                    // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
                    // to compute `A modulo B`, as the `%` operator does not
                    // correspond to the `modulo` operation for negative numbers.
                    time = (value % 864e5 + 864e5) % 864e5;
                    // The hours, minutes, seconds, and milliseconds are obtained by
                    // decomposing the time within the day. See section 15.9.1.10.
                    hours = floor(time / 36e5) % 24;
                    minutes = floor(time / 6e4) % 60;
                    seconds = floor(time / 1e3) % 60;
                    milliseconds = time % 1e3;
                  } else {
                    year = value.getUTCFullYear();
                    month = value.getUTCMonth();
                    date = value.getUTCDate();
                    hours = value.getUTCHours();
                    minutes = value.getUTCMinutes();
                    seconds = value.getUTCSeconds();
                    milliseconds = value.getUTCMilliseconds();
                  }
                  // Serialize extended years correctly.
                  value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                  // Months, dates, hours, minutes, and seconds should have two
                  // digits; milliseconds should have three.
                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                  // Milliseconds are optional in ES 5.0, but required in 5.1.
                  "." + toPaddedString(3, milliseconds) + "Z";
                } else {
                  value = null;
                }
              } else if (typeof value.toJSON == "function" && (className != numberClass && className != stringClass && className != arrayClass || isProperty.call(value, "toJSON"))) {
                // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
                // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
                // ignores all `toJSON` methods on these objects unless they are
                // defined directly on an instance.
                value = value.toJSON(property);
              }
            }
            if (callback) {
              // If a replacement function was provided, call it to obtain the value
              // for serialization.
              value = callback.call(object, property, value);
            }
            if (value === null) {
              return "null";
            }
            className = getClass.call(value);
            if (className == booleanClass) {
              // Booleans are represented literally.
              return "" + value;
            } else if (className == numberClass) {
              // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
              // `"null"`.
              return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
            } else if (className == stringClass) {
              // Strings are double-quoted and escaped.
              return quote("" + value);
            }
            // Recursively serialize objects and arrays.
            if (typeof value == "object") {
              // Check for cyclic structures. This is a linear search; performance
              // is inversely proportional to the number of unique nested objects.
              for (length = stack.length; length--;) {
                if (stack[length] === value) {
                  // Cyclic structures cannot be serialized by `JSON.stringify`.
                  throw TypeError();
                }
              }
              // Add the object to the stack of traversed objects.
              stack.push(value);
              results = [];
              // Save the current indentation level and indent one additional level.
              prefix = indentation;
              indentation += whitespace;
              if (className == arrayClass) {
                // Recursively serialize array elements.
                for (index = 0, length = value.length; index < length; index++) {
                  element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                  results.push(element === undef ? "null" : element);
                }
                result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
              } else {
                // Recursively serialize object members. Members are selected from
                // either a user-specified list of property names, or the object
                // itself.
                forEach(properties || value, function (property) {
                  var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                  if (element !== undef) {
                    // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                    // is not the empty string, let `member` {quote(property) + ":"}
                    // be the concatenation of `member` and the `space` character."
                    // The "`space` character" refers to the literal space
                    // character, not the `space` {width} argument provided to
                    // `JSON.stringify`.
                    results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                  }
                });
                result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
              }
              // Remove the object from the traversed object stack.
              stack.pop();
              return result;
            }
          };

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          exports.stringify = function (source, filter, width) {
            var whitespace, callback, properties, className;
            if (objectTypes[typeof filter] && filter) {
              if ((className = getClass.call(filter)) == functionClass) {
                callback = filter;
              } else if (className == arrayClass) {
                // Convert the property names array into a makeshift set.
                properties = {};
                for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1));
              }
            }
            if (width) {
              if ((className = getClass.call(width)) == numberClass) {
                // Convert the `width` to an integer and create a string containing
                // `width` number of space characters.
                if ((width -= width % 1) > 0) {
                  for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
                }
              } else if (className == stringClass) {
                whitespace = width.length <= 10 ? width : width.slice(0, 10);
              }
            }
            // Opera <= 7.54u2 discards the values associated with empty string keys
            // (`""`) only if they are used directly within an object member list
            // (e.g., `!("" in { "": 1})`).
            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
          };
        }

        // Public: Parses a JSON source string.
        if (!has("json-parse")) {
          var fromCharCode = String.fromCharCode;

          // Internal: A map of escaped control characters and their unescaped
          // equivalents.
          var Unescapes = {
            92: "\\",
            34: '"',
            47: "/",
            98: "\b",
            116: "\t",
            110: "\n",
            102: "\f",
            114: "\r"
          };

          // Internal: Stores the parser state.
          var Index, Source;

          // Internal: Resets the parser state and throws a `SyntaxError`.
          var abort = function () {
            Index = Source = null;
            throw SyntaxError();
          };

          // Internal: Returns the next token, or `"$"` if the parser has reached
          // the end of the source string. A token may be a string, number, `null`
          // literal, or Boolean literal.
          var lex = function () {
            var source = Source,
                length = source.length,
                value,
                begin,
                position,
                isSigned,
                charCode;
            while (Index < length) {
              charCode = source.charCodeAt(Index);
              switch (charCode) {
                case 9:case 10:case 13:case 32:
                  // Skip whitespace tokens, including tabs, carriage returns, line
                  // feeds, and space characters.
                  Index++;
                  break;
                case 123:case 125:case 91:case 93:case 58:case 44:
                  // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                  // the current position.
                  value = charIndexBuggy ? source.charAt(Index) : source[Index];
                  Index++;
                  return value;
                case 34:
                  // `"` delimits a JSON string; advance to the next character and
                  // begin parsing the string. String tokens are prefixed with the
                  // sentinel `@` character to distinguish them from punctuators and
                  // end-of-string tokens.
                  for (value = "@", Index++; Index < length;) {
                    charCode = source.charCodeAt(Index);
                    if (charCode < 32) {
                      // Unescaped ASCII control characters (those with a code unit
                      // less than the space character) are not permitted.
                      abort();
                    } else if (charCode == 92) {
                      // A reverse solidus (`\`) marks the beginning of an escaped
                      // control character (including `"`, `\`, and `/`) or Unicode
                      // escape sequence.
                      charCode = source.charCodeAt(++Index);
                      switch (charCode) {
                        case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
                          // Revive escaped control characters.
                          value += Unescapes[charCode];
                          Index++;
                          break;
                        case 117:
                          // `\u` marks the beginning of a Unicode escape sequence.
                          // Advance to the first character and validate the
                          // four-digit code point.
                          begin = ++Index;
                          for (position = Index + 4; Index < position; Index++) {
                            charCode = source.charCodeAt(Index);
                            // A valid sequence comprises four hexdigits (case-
                            // insensitive) that form a single hexadecimal value.
                            if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                              // Invalid Unicode escape sequence.
                              abort();
                            }
                          }
                          // Revive the escaped character.
                          value += fromCharCode("0x" + source.slice(begin, Index));
                          break;
                        default:
                          // Invalid escape sequence.
                          abort();
                      }
                    } else {
                      if (charCode == 34) {
                        // An unescaped double-quote character marks the end of the
                        // string.
                        break;
                      }
                      charCode = source.charCodeAt(Index);
                      begin = Index;
                      // Optimize for the common case where a string is valid.
                      while (charCode >= 32 && charCode != 92 && charCode != 34) {
                        charCode = source.charCodeAt(++Index);
                      }
                      // Append the string as-is.
                      value += source.slice(begin, Index);
                    }
                  }
                  if (source.charCodeAt(Index) == 34) {
                    // Advance to the next character and return the revived string.
                    Index++;
                    return value;
                  }
                  // Unterminated string.
                  abort();
                default:
                  // Parse numbers and literals.
                  begin = Index;
                  // Advance past the negative sign, if one is specified.
                  if (charCode == 45) {
                    isSigned = true;
                    charCode = source.charCodeAt(++Index);
                  }
                  // Parse an integer or floating-point value.
                  if (charCode >= 48 && charCode <= 57) {
                    // Leading zeroes are interpreted as octal literals.
                    if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
                      // Illegal octal literal.
                      abort();
                    }
                    isSigned = false;
                    // Parse the integer component.
                    for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++);
                    // Floats cannot contain a leading decimal point; however, this
                    // case is already accounted for by the parser.
                    if (source.charCodeAt(Index) == 46) {
                      position = ++Index;
                      // Parse the decimal component.
                      for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                      if (position == Index) {
                        // Illegal trailing decimal.
                        abort();
                      }
                      Index = position;
                    }
                    // Parse exponents. The `e` denoting the exponent is
                    // case-insensitive.
                    charCode = source.charCodeAt(Index);
                    if (charCode == 101 || charCode == 69) {
                      charCode = source.charCodeAt(++Index);
                      // Skip past the sign following the exponent, if one is
                      // specified.
                      if (charCode == 43 || charCode == 45) {
                        Index++;
                      }
                      // Parse the exponential component.
                      for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                      if (position == Index) {
                        // Illegal empty exponent.
                        abort();
                      }
                      Index = position;
                    }
                    // Coerce the parsed value to a JavaScript number.
                    return +source.slice(begin, Index);
                  }
                  // A negative sign may only precede numbers.
                  if (isSigned) {
                    abort();
                  }
                  // `true`, `false`, and `null` literals.
                  if (source.slice(Index, Index + 4) == "true") {
                    Index += 4;
                    return true;
                  } else if (source.slice(Index, Index + 5) == "false") {
                    Index += 5;
                    return false;
                  } else if (source.slice(Index, Index + 4) == "null") {
                    Index += 4;
                    return null;
                  }
                  // Unrecognized token.
                  abort();
              }
            }
            // Return the sentinel `$` character if the parser has reached the end
            // of the source string.
            return "$";
          };

          // Internal: Parses a JSON `value` token.
          var get = function (value) {
            var results, hasMembers;
            if (value == "$") {
              // Unexpected end of input.
              abort();
            }
            if (typeof value == "string") {
              if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                // Remove the sentinel `@` character.
                return value.slice(1);
              }
              // Parse object and array literals.
              if (value == "[") {
                // Parses a JSON array, returning a new JavaScript array.
                results = [];
                for (;; hasMembers || (hasMembers = true)) {
                  value = lex();
                  // A closing square bracket marks the end of the array literal.
                  if (value == "]") {
                    break;
                  }
                  // If the array literal contains elements, the current token
                  // should be a comma separating the previous element from the
                  // next.
                  if (hasMembers) {
                    if (value == ",") {
                      value = lex();
                      if (value == "]") {
                        // Unexpected trailing `,` in array literal.
                        abort();
                      }
                    } else {
                      // A `,` must separate each array element.
                      abort();
                    }
                  }
                  // Elisions and leading commas are not permitted.
                  if (value == ",") {
                    abort();
                  }
                  results.push(get(value));
                }
                return results;
              } else if (value == "{") {
                // Parses a JSON object, returning a new JavaScript object.
                results = {};
                for (;; hasMembers || (hasMembers = true)) {
                  value = lex();
                  // A closing curly brace marks the end of the object literal.
                  if (value == "}") {
                    break;
                  }
                  // If the object literal contains members, the current token
                  // should be a comma separator.
                  if (hasMembers) {
                    if (value == ",") {
                      value = lex();
                      if (value == "}") {
                        // Unexpected trailing `,` in object literal.
                        abort();
                      }
                    } else {
                      // A `,` must separate each object member.
                      abort();
                    }
                  }
                  // Leading commas are not permitted, object property names must be
                  // double-quoted strings, and a `:` must separate each property
                  // name and value.
                  if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                    abort();
                  }
                  results[value.slice(1)] = get(lex());
                }
                return results;
              }
              // Unexpected token encountered.
              abort();
            }
            return value;
          };

          // Internal: Updates a traversed object member.
          var update = function (source, property, callback) {
            var element = walk(source, property, callback);
            if (element === undef) {
              delete source[property];
            } else {
              source[property] = element;
            }
          };

          // Internal: Recursively traverses a parsed JSON object, invoking the
          // `callback` function for each value. This is an implementation of the
          // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
          var walk = function (source, property, callback) {
            var value = source[property],
                length;
            if (typeof value == "object" && value) {
              // `forEach` can't be used to traverse an array in Opera <= 8.54
              // because its `Object#hasOwnProperty` implementation returns `false`
              // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
              if (getClass.call(value) == arrayClass) {
                for (length = value.length; length--;) {
                  update(value, length, callback);
                }
              } else {
                forEach(value, function (property) {
                  update(value, property, callback);
                });
              }
            }
            return callback.call(source, property, value);
          };

          // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
          exports.parse = function (source, callback) {
            var result, value;
            Index = 0;
            Source = "" + source;
            result = get(lex());
            // If a JSON string contains multiple tokens, it is invalid.
            if (lex() != "$") {
              abort();
            }
            // Reset the parser state.
            Index = Source = null;
            return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
          };
        }
      }

      exports["runInContext"] = runInContext;
      return exports;
    }

    if (freeExports && !isLoader) {
      // Export for CommonJS environments.
      runInContext(root, freeExports);
    } else {
      // Export for web browsers and JavaScript engines.
      var nativeJSON = root.JSON,
          previousJSON = root["JSON3"],
          isRestored = false;

      var JSON3 = runInContext(root, root["JSON3"] = {
        // Public: Restores the original value of the global `JSON` object and
        // returns a reference to the `JSON3` object.
        "noConflict": function () {
          if (!isRestored) {
            isRestored = true;
            root.JSON = nativeJSON;
            root["JSON3"] = previousJSON;
            nativeJSON = previousJSON = null;
          }
          return JSON3;
        }
      });

      root.JSON = {
        "parse": JSON3.parse,
        "stringify": JSON3.stringify
      };
    }

    // Export for asynchronous module loaders.
    if (isLoader) {
      define(function () {
        return JSON3;
      });
    }
  }).call(this);
  return module.exports;
});
$__System.registerDynamic("38", ["37"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("37");
  return module.exports;
});
$__System.registerDynamic("39", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;

  /**
   * Expose `Emitter`.
   */

  module.exports = Emitter;

  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */

  function Emitter(obj) {
    if (obj) return mixin(obj);
  };

  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }

  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks[event] = this._callbacks[event] || []).push(fn);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.once = function (event, fn) {
    var self = this;
    this._callbacks = this._callbacks || {};

    function on() {
      self.off(event, on);
      fn.apply(this, arguments);
    }

    on.fn = fn;
    this.on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};

    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }

    // specific event
    var callbacks = this._callbacks[event];
    if (!callbacks) return this;

    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks[event];
      return this;
    }

    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */

  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1),
        callbacks = this._callbacks[event];

    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }

    return this;
  };

  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */

  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks[event] || [];
  };

  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */

  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };
  return module.exports;
});
$__System.registerDynamic("8", ["39"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("39");
  return module.exports;
});
$__System.registerDynamic('3a', ['1d', '3b', '1e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (Buffer) {
    var isArray = $__require('1d');
    var isBuf = $__require('3b');
    exports.deconstructPacket = function (packet) {
      var buffers = [];
      var packetData = packet.data;
      function _deconstructPacket(data) {
        if (!data) return data;
        if (isBuf(data)) {
          var placeholder = {
            _placeholder: true,
            num: buffers.length
          };
          buffers.push(data);
          return placeholder;
        } else if (isArray(data)) {
          var newData = new Array(data.length);
          for (var i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i]);
          }
          return newData;
        } else if ('object' == typeof data && !(data instanceof Date)) {
          var newData = {};
          for (var key in data) {
            newData[key] = _deconstructPacket(data[key]);
          }
          return newData;
        }
        return data;
      }
      var pack = packet;
      pack.data = _deconstructPacket(packetData);
      pack.attachments = buffers.length;
      return {
        packet: pack,
        buffers: buffers
      };
    };
    exports.reconstructPacket = function (packet, buffers) {
      var curPlaceHolder = 0;
      function _reconstructPacket(data) {
        if (data && data._placeholder) {
          var buf = buffers[data.num];
          return buf;
        } else if (isArray(data)) {
          for (var i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i]);
          }
          return data;
        } else if (data && 'object' == typeof data) {
          for (var key in data) {
            data[key] = _reconstructPacket(data[key]);
          }
          return data;
        }
        return data;
      }
      packet.data = _reconstructPacket(packet.data);
      packet.attachments = undefined;
      return packet;
    };
    exports.removeBlobs = function (data, callback) {
      function _removeBlobs(obj, curKey, containingObject) {
        if (!obj) return obj;
        if (global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
          pendingBlobs++;
          var fileReader = new FileReader();
          fileReader.onload = function () {
            if (containingObject) {
              containingObject[curKey] = this.result;
            } else {
              bloblessData = this.result;
            }
            if (! --pendingBlobs) {
              callback(bloblessData);
            }
          };
          fileReader.readAsArrayBuffer(obj);
        } else if (isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            _removeBlobs(obj[i], i, obj);
          }
        } else if (obj && 'object' == typeof obj && !isBuf(obj)) {
          for (var key in obj) {
            _removeBlobs(obj[key], key, obj);
          }
        }
      }
      var pendingBlobs = 0;
      var bloblessData = data;
      _removeBlobs(bloblessData);
      if (!pendingBlobs) {
        callback(bloblessData);
      }
    };
  })($__require('1e').Buffer);
  return module.exports;
});
$__System.registerDynamic("3b", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */

  module.exports = isBuf;

  /**
   * Returns true if obj is a buffer or an arraybuffer.
   *
   * @api private
   */

  function isBuf(obj) {
    return global.Buffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer;
  }
  return module.exports;
});
$__System.registerDynamic('3c', ['4', '38', '1d', '8', '3a', '3b', '1e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (Buffer) {
    var debug = $__require('4')('socket.io-parser');
    var json = $__require('38');
    var isArray = $__require('1d');
    var Emitter = $__require('8');
    var binary = $__require('3a');
    var isBuf = $__require('3b');
    exports.protocol = 4;
    exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];
    exports.CONNECT = 0;
    exports.DISCONNECT = 1;
    exports.EVENT = 2;
    exports.ACK = 3;
    exports.ERROR = 4;
    exports.BINARY_EVENT = 5;
    exports.BINARY_ACK = 6;
    exports.Encoder = Encoder;
    exports.Decoder = Decoder;
    function Encoder() {}
    Encoder.prototype.encode = function (obj, callback) {
      debug('encoding packet %j', obj);
      if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
        encodeAsBinary(obj, callback);
      } else {
        var encoding = encodeAsString(obj);
        callback([encoding]);
      }
    };
    function encodeAsString(obj) {
      var str = '';
      var nsp = false;
      str += obj.type;
      if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
        str += obj.attachments;
        str += '-';
      }
      if (obj.nsp && '/' != obj.nsp) {
        nsp = true;
        str += obj.nsp;
      }
      if (null != obj.id) {
        if (nsp) {
          str += ',';
          nsp = false;
        }
        str += obj.id;
      }
      if (null != obj.data) {
        if (nsp) str += ',';
        str += json.stringify(obj.data);
      }
      debug('encoded %j as %s', obj, str);
      return str;
    }
    function encodeAsBinary(obj, callback) {
      function writeEncoding(bloblessData) {
        var deconstruction = binary.deconstructPacket(bloblessData);
        var pack = encodeAsString(deconstruction.packet);
        var buffers = deconstruction.buffers;
        buffers.unshift(pack);
        callback(buffers);
      }
      binary.removeBlobs(obj, writeEncoding);
    }
    function Decoder() {
      this.reconstructor = null;
    }
    Emitter(Decoder.prototype);
    Decoder.prototype.add = function (obj) {
      var packet;
      if ('string' == typeof obj) {
        packet = decodeString(obj);
        if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) {
          this.reconstructor = new BinaryReconstructor(packet);
          if (this.reconstructor.reconPack.attachments === 0) {
            this.emit('decoded', packet);
          }
        } else {
          this.emit('decoded', packet);
        }
      } else if (isBuf(obj) || obj.base64) {
        if (!this.reconstructor) {
          throw new Error('got binary data when not reconstructing a packet');
        } else {
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            this.reconstructor = null;
            this.emit('decoded', packet);
          }
        }
      } else {
        throw new Error('Unknown type: ' + obj);
      }
    };
    function decodeString(str) {
      var p = {};
      var i = 0;
      p.type = Number(str.charAt(0));
      if (null == exports.types[p.type]) return error();
      if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
        var buf = '';
        while (str.charAt(++i) != '-') {
          buf += str.charAt(i);
          if (i == str.length) break;
        }
        if (buf != Number(buf) || str.charAt(i) != '-') {
          throw new Error('Illegal attachments');
        }
        p.attachments = Number(buf);
      }
      if ('/' == str.charAt(i + 1)) {
        p.nsp = '';
        while (++i) {
          var c = str.charAt(i);
          if (',' == c) break;
          p.nsp += c;
          if (i == str.length) break;
        }
      } else {
        p.nsp = '/';
      }
      var next = str.charAt(i + 1);
      if ('' !== next && Number(next) == next) {
        p.id = '';
        while (++i) {
          var c = str.charAt(i);
          if (null == c || Number(c) != c) {
            --i;
            break;
          }
          p.id += str.charAt(i);
          if (i == str.length) break;
        }
        p.id = Number(p.id);
      }
      if (str.charAt(++i)) {
        try {
          p.data = json.parse(str.substr(i));
        } catch (e) {
          return error();
        }
      }
      debug('decoded %s as %j', str, p);
      return p;
    }
    Decoder.prototype.destroy = function () {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
      }
    };
    function BinaryReconstructor(packet) {
      this.reconPack = packet;
      this.buffers = [];
    }
    BinaryReconstructor.prototype.takeBinaryData = function (binData) {
      this.buffers.push(binData);
      if (this.buffers.length == this.reconPack.attachments) {
        var packet = binary.reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }
      return null;
    };
    BinaryReconstructor.prototype.finishedReconstruction = function () {
      this.reconPack = null;
      this.buffers = [];
    };
    function error(data) {
      return {
        type: exports.ERROR,
        data: 'parser error'
      };
    }
  })($__require('1e').Buffer);
  return module.exports;
});
$__System.registerDynamic("36", ["3c"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("3c");
  return module.exports;
});
$__System.registerDynamic('3d', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;

  /**
   * Expose `Emitter`.
   */

  module.exports = Emitter;

  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */

  function Emitter(obj) {
    if (obj) return mixin(obj);
  };

  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */

  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }

  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }

    on.fn = fn;
    this.on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};

    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }

    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;

    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    }

    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */

  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1),
        callbacks = this._callbacks['$' + event];

    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }

    return this;
  };

  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */

  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };

  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */

  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };
  return module.exports;
});
$__System.registerDynamic("34", ["3d"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("3d");
  return module.exports;
});
$__System.registerDynamic("3e", [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    module.exports = toArray;

    function toArray(list, index) {
        var array = [];

        index = index || 0;

        for (var i = index || 0; i < list.length; i++) {
            array[i - index] = list[i];
        }

        return array;
    }
    return module.exports;
});
$__System.registerDynamic("3f", ["3e"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("3e");
  return module.exports;
});
$__System.registerDynamic("33", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;

  /**
   * Module exports.
   */

  module.exports = on;

  /**
   * Helper for subscriptions.
   *
   * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
   * @param {String} event name
   * @param {Function} callback
   * @api public
   */

  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return {
      destroy: function () {
        obj.removeListener(ev, fn);
      }
    };
  }
  return module.exports;
});
$__System.registerDynamic('40', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Slice reference.
   */

  var slice = [].slice;

  /**
   * Bind `obj` to `fn`.
   *
   * @param {Object} obj
   * @param {Function|String} fn or string
   * @return {Function}
   * @api public
   */

  module.exports = function (obj, fn) {
    if ('string' == typeof fn) fn = obj[fn];
    if ('function' != typeof fn) throw new Error('bind() requires a function');
    var args = slice.call(arguments, 2);
    return function () {
      return fn.apply(obj, args.concat(slice.call(arguments)));
    };
  };
  return module.exports;
});
$__System.registerDynamic("35", ["40"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("40");
  return module.exports;
});
$__System.registerDynamic('41', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Helpers.
   */

  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;

  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} options
   * @return {String|Number}
   * @api public
   */

  module.exports = function (val, options) {
    options = options || {};
    if ('string' == typeof val) return parse(val);
    return options.long ? long(val) : short(val);
  };

  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */

  function parse(str) {
    str = '' + str;
    if (str.length > 10000) return;
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;
      case 'days':
      case 'day':
      case 'd':
        return n * d;
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;
    }
  }

  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function short(ms) {
    if (ms >= d) return Math.round(ms / d) + 'd';
    if (ms >= h) return Math.round(ms / h) + 'h';
    if (ms >= m) return Math.round(ms / m) + 'm';
    if (ms >= s) return Math.round(ms / s) + 's';
    return ms + 'ms';
  }

  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function long(ms) {
    return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
  }

  /**
   * Pluralization helper.
   */

  function plural(ms, n, name) {
    if (ms < n) return;
    if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
    return Math.ceil(ms / n) + ' ' + name + 's';
  }
  return module.exports;
});
$__System.registerDynamic("42", ["41"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("41");
  return module.exports;
});
$__System.registerDynamic('43', ['42'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;

  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   *
   * Expose `debug()` as the module.
   */

  exports = module.exports = debug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = $__require('42');

  /**
   * The currently active debug mode names, and names to skip.
   */

  exports.names = [];
  exports.skips = [];

  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lowercased letter, i.e. "n".
   */

  exports.formatters = {};

  /**
   * Previously assigned color.
   */

  var prevColor = 0;

  /**
   * Previous log timestamp.
   */

  var prevTime;

  /**
   * Select a color.
   *
   * @return {Number}
   * @api private
   */

  function selectColor() {
    return exports.colors[prevColor++ % exports.colors.length];
  }

  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @return {Function}
   * @api public
   */

  function debug(namespace) {

    // define the `disabled` version
    function disabled() {}
    disabled.enabled = false;

    // define the `enabled` version
    function enabled() {

      var self = enabled;

      // set `diff` timestamp
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;

      // add the `color` if not set
      if (null == self.useColors) self.useColors = exports.useColors();
      if (null == self.color && self.useColors) self.color = selectColor();

      var args = Array.prototype.slice.call(arguments);

      args[0] = exports.coerce(args[0]);

      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %o
        args = ['%o'].concat(args);
      }

      // apply any `formatters` transformations
      var index = 0;
      args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);

          // now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });

      if ('function' === typeof exports.formatArgs) {
        args = exports.formatArgs.apply(self, args);
      }
      var logFn = enabled.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }
    enabled.enabled = true;

    var fn = exports.enabled(namespace) ? enabled : disabled;

    fn.namespace = namespace;

    return fn;
  }

  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */

  function enable(namespaces) {
    exports.save(namespaces);

    var split = (namespaces || '').split(/[\s,]+/);
    var len = split.length;

    for (var i = 0; i < len; i++) {
      if (!split[i]) continue; // ignore empty strings
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }

  /**
   * Disable debug output.
   *
   * @api public
   */

  function disable() {
    exports.enable('');
  }

  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */

  function enabled(name) {
    var i, len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @return {Mixed}
   * @api private
   */

  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
  return module.exports;
});
$__System.registerDynamic('44', ['43'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;

  /**
   * This is the web browser implementation of `debug()`.
   *
   * Expose `debug()` as the module.
   */

  exports = module.exports = $__require('43');
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

  /**
   * Colors.
   */

  exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */

  function useColors() {
    // is webkit? http://stackoverflow.com/a/16459606/376773
    return 'WebkitAppearance' in document.documentElement.style ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    window.console && (console.firebug || console.exception && console.table) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
  }

  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  exports.formatters.j = function (v) {
    return JSON.stringify(v);
  };

  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */

  function formatArgs() {
    var args = arguments;
    var useColors = this.useColors;

    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

    if (!useColors) return args;

    var c = 'color: ' + this.color;
    args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-z%]/g, function (match) {
      if ('%%' === match) return;
      index++;
      if ('%c' === match) {
        // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });

    args.splice(lastC, 0, c);
    return args;
  }

  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */

  function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }

  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */

  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {}
  }

  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */

  function load() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {}
    return r;
  }

  /**
   * Enable namespaces listed in `localStorage.debug` initially.
   */

  exports.enable(load());

  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */

  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }
  return module.exports;
});
$__System.registerDynamic("4", ["44"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("44");
  return module.exports;
});
$__System.registerDynamic('45', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };
  return module.exports;
});
$__System.registerDynamic("1d", ["45"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("45");
  return module.exports;
});
$__System.registerDynamic('46', [], true, function ($__require, exports, module) {
	var define,
	    global = this || self,
	    GLOBAL = global;
	/* */
	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

		var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

		var PLUS = '+'.charCodeAt(0);
		var SLASH = '/'.charCodeAt(0);
		var NUMBER = '0'.charCodeAt(0);
		var LOWER = 'a'.charCodeAt(0);
		var UPPER = 'A'.charCodeAt(0);
		var PLUS_URL_SAFE = '-'.charCodeAt(0);
		var SLASH_URL_SAFE = '_'.charCodeAt(0);

		function decode(elt) {
			var code = elt.charCodeAt(0);
			if (code === PLUS || code === PLUS_URL_SAFE) return 62; // '+'
			if (code === SLASH || code === SLASH_URL_SAFE) return 63; // '/'
			if (code < NUMBER) return -1; //no match
			if (code < NUMBER + 10) return code - NUMBER + 26 + 26;
			if (code < UPPER + 26) return code - UPPER;
			if (code < LOWER + 26) return code - LOWER + 26;
		}

		function b64ToByteArray(b64) {
			var i, j, l, tmp, placeHolders, arr;

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4');
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length;
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders);

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length;

			var L = 0;

			function push(v) {
				arr[L++] = v;
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));
				push((tmp & 0xFF0000) >> 16);
				push((tmp & 0xFF00) >> 8);
				push(tmp & 0xFF);
			}

			if (placeHolders === 2) {
				tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;
				push(tmp & 0xFF);
			} else if (placeHolders === 1) {
				tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;
				push(tmp >> 8 & 0xFF);
				push(tmp & 0xFF);
			}

			return arr;
		}

		function uint8ToBase64(uint8) {
			var i,
			    extraBytes = uint8.length % 3,
			    // if we have 1 byte left, pad 2 bytes
			output = "",
			    temp,
			    length;

			function encode(num) {
				return lookup.charAt(num);
			}

			function tripletToBase64(num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
				output += tripletToBase64(temp);
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1];
					output += encode(temp >> 2);
					output += encode(temp << 4 & 0x3F);
					output += '==';
					break;
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
					output += encode(temp >> 10);
					output += encode(temp >> 4 & 0x3F);
					output += encode(temp << 2 & 0x3F);
					output += '=';
					break;
			}

			return output;
		}

		exports.toByteArray = b64ToByteArray;
		exports.fromByteArray = uint8ToBase64;
	})(typeof exports === 'undefined' ? this.base64js = {} : exports);
	return module.exports;
});
$__System.registerDynamic("47", ["46"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("46");
  return module.exports;
});
$__System.registerDynamic("48", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  exports.read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };

  exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  };
  return module.exports;
});
$__System.registerDynamic("49", ["48"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("48");
  return module.exports;
});
$__System.registerDynamic('4a', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };
  return module.exports;
});
$__System.registerDynamic("4b", ["4a"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("4a");
  return module.exports;
});
$__System.registerDynamic('4c', ['47', '49', '4b'], true, function ($__require, exports, module) {
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
  /* eslint-disable no-proto */

  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var base64 = $__require('47');
  var ieee754 = $__require('49');
  var isArray = $__require('4b');

  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  Buffer.poolSize = 8192; // not used by this implementation

  var rootParent = {};

  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Use Object implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * Due to various browser bugs, sometimes the Object implementation will be used even
   * when the browser supports typed arrays.
   *
   * Note:
   *
   *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
   *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
   *
   *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
   *     on objects.
   *
   *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
   *
   *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
   *     incorrect length in some situations.
  
   * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
   * get the Object implementation, which is slower but behaves correctly.
   */
  Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

  function typedArraySupport() {
    function Bar() {}
    try {
      var arr = new Uint8Array(1);
      arr.foo = function () {
        return 42;
      };
      arr.constructor = Bar;
      return arr.foo() === 42 && // typed array instances can be augmented
      arr.constructor === Bar && // constructor can be set
      typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
      arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
    } catch (e) {
      return false;
    }
  }

  function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }

  /**
   * Class: Buffer
   * =============
   *
   * The Buffer constructor returns instances of `Uint8Array` that are augmented
   * with function properties for all the node `Buffer` API functions. We use
   * `Uint8Array` so that square bracket notation works as expected -- it returns
   * a single octet.
   *
   * By augmenting the instances, we can avoid modifying the `Uint8Array`
   * prototype.
   */
  function Buffer(arg) {
    if (!(this instanceof Buffer)) {
      // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
      if (arguments.length > 1) return new Buffer(arg, arguments[1]);
      return new Buffer(arg);
    }

    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      this.length = 0;
      this.parent = undefined;
    }

    // Common case.
    if (typeof arg === 'number') {
      return fromNumber(this, arg);
    }

    // Slightly less common case.
    if (typeof arg === 'string') {
      return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8');
    }

    // Unusual.
    return fromObject(this, arg);
  }

  function fromNumber(that, length) {
    that = allocate(that, length < 0 ? 0 : checked(length) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < length; i++) {
        that[i] = 0;
      }
    }
    return that;
  }

  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';

    // Assumption: byteLength() return value is always < kMaxLength.
    var length = byteLength(string, encoding) | 0;
    that = allocate(that, length);

    that.write(string, encoding);
    return that;
  }

  function fromObject(that, object) {
    if (Buffer.isBuffer(object)) return fromBuffer(that, object);

    if (isArray(object)) return fromArray(that, object);

    if (object == null) {
      throw new TypeError('must start with number, buffer, array or string');
    }

    if (typeof ArrayBuffer !== 'undefined') {
      if (object.buffer instanceof ArrayBuffer) {
        return fromTypedArray(that, object);
      }
      if (object instanceof ArrayBuffer) {
        return fromArrayBuffer(that, object);
      }
    }

    if (object.length) return fromArrayLike(that, object);

    return fromJsonObject(that, object);
  }

  function fromBuffer(that, buffer) {
    var length = checked(buffer.length) | 0;
    that = allocate(that, length);
    buffer.copy(that, 0, 0, length);
    return that;
  }

  function fromArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  // Duplicate of fromArray() to keep fromArray() monomorphic.
  function fromTypedArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    // Truncating the elements is probably not what people expect from typed
    // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
    // of the old Buffer constructor.
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  function fromArrayBuffer(that, array) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      array.byteLength;
      that = Buffer._augment(new Uint8Array(array));
    } else {
      // Fallback: Return an object instance of the Buffer class
      that = fromTypedArray(that, new Uint8Array(array));
    }
    return that;
  }

  function fromArrayLike(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  // Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
  // Returns a zero-length buffer for inputs that don't conform to the spec.
  function fromJsonObject(that, object) {
    var array;
    var length = 0;

    if (object.type === 'Buffer' && isArray(object.data)) {
      array = object.data;
      length = checked(array.length) | 0;
    }
    that = allocate(that, length);

    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
  } else {
    // pre-set for values that may exist in the future
    Buffer.prototype.length = undefined;
    Buffer.prototype.parent = undefined;
  }

  function allocate(that, length) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = Buffer._augment(new Uint8Array(length));
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      that.length = length;
      that._isBuffer = true;
    }

    var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
    if (fromPool) that.parent = rootParent;

    return that;
  }

  function checked(length) {
    // Note: cannot use `length < kMaxLength` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
  }

  function SlowBuffer(subject, encoding) {
    if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding);

    var buf = new Buffer(subject, encoding);
    delete buf.parent;
    return buf;
  }

  Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
  };

  Buffer.compare = function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }

    if (a === b) return 0;

    var x = a.length;
    var y = b.length;

    var i = 0;
    var len = Math.min(x, y);
    while (i < len) {
      if (a[i] !== b[i]) break;

      ++i;
    }

    if (i !== len) {
      x = a[i];
      y = b[i];
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
  };

  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'binary':
      case 'base64':
      case 'raw':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };

  Buffer.concat = function concat(list, length) {
    if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.');

    if (list.length === 0) {
      return new Buffer(0);
    }

    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; i++) {
        length += list[i].length;
      }
    }

    var buf = new Buffer(length);
    var pos = 0;
    for (i = 0; i < list.length; i++) {
      var item = list[i];
      item.copy(buf, pos);
      pos += item.length;
    }
    return buf;
  };

  function byteLength(string, encoding) {
    if (typeof string !== 'string') string = '' + string;

    var len = string.length;
    if (len === 0) return 0;

    // Use a for loop to avoid recursion
    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'binary':
        // Deprecated
        case 'raw':
        case 'raws':
          return len;
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase) return utf8ToBytes(string).length; // assume utf8
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;

  function slowToString(encoding, start, end) {
    var loweredCase = false;

    start = start | 0;
    end = end === undefined || end === Infinity ? this.length : end | 0;

    if (!encoding) encoding = 'utf8';
    if (start < 0) start = 0;
    if (end > this.length) end = this.length;
    if (end <= start) return '';

    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);

        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);

        case 'ascii':
          return asciiSlice(this, start, end);

        case 'binary':
          return binarySlice(this, start, end);

        case 'base64':
          return base64Slice(this, start, end);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }

  Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };

  Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
  };

  Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  };

  Buffer.prototype.compare = function compare(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return 0;
    return Buffer.compare(this, b);
  };

  Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
    if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;else if (byteOffset < -0x80000000) byteOffset = -0x80000000;
    byteOffset >>= 0;

    if (this.length === 0) return -1;
    if (byteOffset >= this.length) return -1;

    // Negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0);

    if (typeof val === 'string') {
      if (val.length === 0) return -1; // special case: looking for empty string always fails
      return String.prototype.indexOf.call(this, val, byteOffset);
    }
    if (Buffer.isBuffer(val)) {
      return arrayIndexOf(this, val, byteOffset);
    }
    if (typeof val === 'number') {
      if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
        return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
      }
      return arrayIndexOf(this, [val], byteOffset);
    }

    function arrayIndexOf(arr, val, byteOffset) {
      var foundIndex = -1;
      for (var i = 0; byteOffset + i < arr.length; i++) {
        if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex;
        } else {
          foundIndex = -1;
        }
      }
      return -1;
    }

    throw new TypeError('val must be string, number or Buffer');
  };

  // `get` is deprecated
  Buffer.prototype.get = function get(offset) {
    console.log('.get() is deprecated. Access using array indexes instead.');
    return this.readUInt8(offset);
  };

  // `set` is deprecated
  Buffer.prototype.set = function set(v, offset) {
    console.log('.set() is deprecated. Access using array indexes instead.');
    return this.writeUInt8(v, offset);
  };

  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }

    // must be an even number of digits
    var strLen = string.length;
    if (strLen % 2 !== 0) throw new Error('Invalid hex string');

    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; i++) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed)) throw new Error('Invalid hex string');
      buf[offset + i] = parsed;
    }
    return i;
  }

  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }

  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }

  function binaryWrite(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }

  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }

  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }

  Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
      // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
      // legacy write(string, encoding, offset, length) - remove in v0.13
    } else {
      var swap = encoding;
      encoding = offset;
      offset = length | 0;
      length = swap;
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
      throw new RangeError('attempt to write outside buffer bounds');
    }

    if (!encoding) encoding = 'utf8';

    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);

        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);

        case 'ascii':
          return asciiWrite(this, string, offset, length);

        case 'binary':
          return binaryWrite(this, string, offset, length);

        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length);

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };

  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };

  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }

  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];

    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }

      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }

      res.push(codePoint);
      i += bytesPerSequence;
    }

    return decodeCodePointsArray(res);
  }

  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  var MAX_ARGUMENTS_LENGTH = 0x1000;

  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }

  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }

  function binarySlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }

  function hexSlice(buf, start, end) {
    var len = buf.length;

    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;

    var out = '';
    for (var i = start; i < end; i++) {
      out += toHex(buf[i]);
    }
    return out;
  }

  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }

  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }

    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }

    if (end < start) end = start;

    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = Buffer._augment(this.subarray(start, end));
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; i++) {
        newBuf[i] = this[i + start];
      }
    }

    if (newBuf.length) newBuf.parent = this.parent || this;

    return newBuf;
  };

  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
  }

  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val;
  };

  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val;
  };

  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
  };

  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
  };

  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
  };

  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  };

  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  };

  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val;
  };

  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val;
  };

  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
  };

  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
  };

  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  };

  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  };

  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };

  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };

  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };

  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };

  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('index out of range');
  }

  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = value & 0xff;
    return offset + 1;
  };

  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
      buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }

  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };

  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };

  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
      buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
    }
  }

  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };

  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };

  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
  };

  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
  };

  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };

  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 8;
      this[offset + 1] = value & 0xff;
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };

  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value & 0xff;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };

  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 0xff;
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };

  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (value > max || value < min) throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('index out of range');
    if (offset < 0) throw new RangeError('index out of range');
  }

  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }

  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };

  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };

  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }

  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };

  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };

  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;

    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;

    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');

    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; i--) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      // ascending copy from start
      for (i = 0; i < len; i++) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      target._set(this.subarray(start, start + len), targetStart);
    }

    return len;
  };

  // fill(value, start=0, end=buffer.length)
  Buffer.prototype.fill = function fill(value, start, end) {
    if (!value) value = 0;
    if (!start) start = 0;
    if (!end) end = this.length;

    if (end < start) throw new RangeError('end < start');

    // Fill 0 bytes; we're done
    if (end === start) return;
    if (this.length === 0) return;

    if (start < 0 || start >= this.length) throw new RangeError('start out of bounds');
    if (end < 0 || end > this.length) throw new RangeError('end out of bounds');

    var i;
    if (typeof value === 'number') {
      for (i = start; i < end; i++) {
        this[i] = value;
      }
    } else {
      var bytes = utf8ToBytes(value.toString());
      var len = bytes.length;
      for (i = start; i < end; i++) {
        this[i] = bytes[i % len];
      }
    }

    return this;
  };

  /**
   * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
   * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
   */
  Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
    if (typeof Uint8Array !== 'undefined') {
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        return new Buffer(this).buffer;
      } else {
        var buf = new Uint8Array(this.length);
        for (var i = 0, len = buf.length; i < len; i += 1) {
          buf[i] = this[i];
        }
        return buf.buffer;
      }
    } else {
      throw new TypeError('Buffer.toArrayBuffer not supported in this browser');
    }
  };

  // HELPER FUNCTIONS
  // ================

  var BP = Buffer.prototype;

  /**
   * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
   */
  Buffer._augment = function _augment(arr) {
    arr.constructor = Buffer;
    arr._isBuffer = true;

    // save reference to original Uint8Array set method before overwriting
    arr._set = arr.set;

    // deprecated
    arr.get = BP.get;
    arr.set = BP.set;

    arr.write = BP.write;
    arr.toString = BP.toString;
    arr.toLocaleString = BP.toString;
    arr.toJSON = BP.toJSON;
    arr.equals = BP.equals;
    arr.compare = BP.compare;
    arr.indexOf = BP.indexOf;
    arr.copy = BP.copy;
    arr.slice = BP.slice;
    arr.readUIntLE = BP.readUIntLE;
    arr.readUIntBE = BP.readUIntBE;
    arr.readUInt8 = BP.readUInt8;
    arr.readUInt16LE = BP.readUInt16LE;
    arr.readUInt16BE = BP.readUInt16BE;
    arr.readUInt32LE = BP.readUInt32LE;
    arr.readUInt32BE = BP.readUInt32BE;
    arr.readIntLE = BP.readIntLE;
    arr.readIntBE = BP.readIntBE;
    arr.readInt8 = BP.readInt8;
    arr.readInt16LE = BP.readInt16LE;
    arr.readInt16BE = BP.readInt16BE;
    arr.readInt32LE = BP.readInt32LE;
    arr.readInt32BE = BP.readInt32BE;
    arr.readFloatLE = BP.readFloatLE;
    arr.readFloatBE = BP.readFloatBE;
    arr.readDoubleLE = BP.readDoubleLE;
    arr.readDoubleBE = BP.readDoubleBE;
    arr.writeUInt8 = BP.writeUInt8;
    arr.writeUIntLE = BP.writeUIntLE;
    arr.writeUIntBE = BP.writeUIntBE;
    arr.writeUInt16LE = BP.writeUInt16LE;
    arr.writeUInt16BE = BP.writeUInt16BE;
    arr.writeUInt32LE = BP.writeUInt32LE;
    arr.writeUInt32BE = BP.writeUInt32BE;
    arr.writeIntLE = BP.writeIntLE;
    arr.writeIntBE = BP.writeIntBE;
    arr.writeInt8 = BP.writeInt8;
    arr.writeInt16LE = BP.writeInt16LE;
    arr.writeInt16BE = BP.writeInt16BE;
    arr.writeInt32LE = BP.writeInt32LE;
    arr.writeInt32BE = BP.writeInt32BE;
    arr.writeFloatLE = BP.writeFloatLE;
    arr.writeFloatBE = BP.writeFloatBE;
    arr.writeDoubleLE = BP.writeDoubleLE;
    arr.writeDoubleBE = BP.writeDoubleBE;
    arr.fill = BP.fill;
    arr.inspect = BP.inspect;
    arr.toArrayBuffer = BP.toArrayBuffer;

    return arr;
  };

  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

  function base64clean(str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }

  function stringtrim(str) {
    if (str.trim) return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }

  function toHex(n) {
    if (n < 16) return '0' + n.toString(16);
    return n.toString(16);
  }

  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; i++) {
      codePoint = string.charCodeAt(i);

      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }

          // valid lead
          leadSurrogate = codePoint;

          continue;
        }

        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }

        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null;

      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }

    return bytes;
  }

  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }

  function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      if ((units -= 2) < 0) break;

      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }

    return byteArray;
  }

  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }

  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; i++) {
      if (i + offset >= dst.length || i >= src.length) break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  return module.exports;
});
$__System.registerDynamic("4d", ["4c"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("4c");
  return module.exports;
});
$__System.registerDynamic('4e', ['4d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('buffer') : $__require('4d');
  return module.exports;
});
$__System.registerDynamic("1e", ["4e"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("4e");
  return module.exports;
});
$__System.registerDynamic('4f', ['1d', '1e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (Buffer) {
    var isArray = $__require('1d');
    module.exports = hasBinary;
    function hasBinary(data) {
      function _hasBinary(obj) {
        if (!obj) return false;
        if (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj) || global.ArrayBuffer && obj instanceof ArrayBuffer || global.Blob && obj instanceof Blob || global.File && obj instanceof File) {
          return true;
        }
        if (isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            if (_hasBinary(obj[i])) {
              return true;
            }
          }
        } else if (obj && 'object' == typeof obj) {
          if (obj.toJSON && 'function' == typeof obj.toJSON) {
            obj = obj.toJSON();
          }
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
              return true;
            }
          }
        }
        return false;
      }
      return _hasBinary(data);
    }
  })($__require('1e').Buffer);
  return module.exports;
});
$__System.registerDynamic("50", ["4f"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("4f");
  return module.exports;
});
$__System.registerDynamic('32', ['36', '34', '3f', '33', '35', '4', '50'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var parser = $__require('36');
  var Emitter = $__require('34');
  var toArray = $__require('3f');
  var on = $__require('33');
  var bind = $__require('35');
  var debug = $__require('4')('socket.io-client:socket');
  var hasBin = $__require('50');
  module.exports = exports = Socket;
  var events = {
    connect: 1,
    connect_error: 1,
    connect_timeout: 1,
    connecting: 1,
    disconnect: 1,
    error: 1,
    reconnect: 1,
    reconnect_attempt: 1,
    reconnect_failed: 1,
    reconnect_error: 1,
    reconnecting: 1,
    ping: 1,
    pong: 1
  };
  var emit = Emitter.prototype.emit;
  function Socket(io, nsp) {
    this.io = io;
    this.nsp = nsp;
    this.json = this;
    this.ids = 0;
    this.acks = {};
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.connected = false;
    this.disconnected = true;
    if (this.io.autoConnect) this.open();
  }
  Emitter(Socket.prototype);
  Socket.prototype.subEvents = function () {
    if (this.subs) return;
    var io = this.io;
    this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
  };
  Socket.prototype.open = Socket.prototype.connect = function () {
    if (this.connected) return this;
    this.subEvents();
    this.io.open();
    if ('open' == this.io.readyState) this.onopen();
    this.emit('connecting');
    return this;
  };
  Socket.prototype.send = function () {
    var args = toArray(arguments);
    args.unshift('message');
    this.emit.apply(this, args);
    return this;
  };
  Socket.prototype.emit = function (ev) {
    if (events.hasOwnProperty(ev)) {
      emit.apply(this, arguments);
      return this;
    }
    var args = toArray(arguments);
    var parserType = parser.EVENT;
    if (hasBin(args)) {
      parserType = parser.BINARY_EVENT;
    }
    var packet = {
      type: parserType,
      data: args
    };
    packet.options = {};
    packet.options.compress = !this.flags || false !== this.flags.compress;
    if ('function' == typeof args[args.length - 1]) {
      debug('emitting packet with ack id %d', this.ids);
      this.acks[this.ids] = args.pop();
      packet.id = this.ids++;
    }
    if (this.connected) {
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    delete this.flags;
    return this;
  };
  Socket.prototype.packet = function (packet) {
    packet.nsp = this.nsp;
    this.io.packet(packet);
  };
  Socket.prototype.onopen = function () {
    debug('transport is open - connecting');
    if ('/' != this.nsp) {
      this.packet({ type: parser.CONNECT });
    }
  };
  Socket.prototype.onclose = function (reason) {
    debug('close (%s)', reason);
    this.connected = false;
    this.disconnected = true;
    delete this.id;
    this.emit('disconnect', reason);
  };
  Socket.prototype.onpacket = function (packet) {
    if (packet.nsp != this.nsp) return;
    switch (packet.type) {
      case parser.CONNECT:
        this.onconnect();
        break;
      case parser.EVENT:
        this.onevent(packet);
        break;
      case parser.BINARY_EVENT:
        this.onevent(packet);
        break;
      case parser.ACK:
        this.onack(packet);
        break;
      case parser.BINARY_ACK:
        this.onack(packet);
        break;
      case parser.DISCONNECT:
        this.ondisconnect();
        break;
      case parser.ERROR:
        this.emit('error', packet.data);
        break;
    }
  };
  Socket.prototype.onevent = function (packet) {
    var args = packet.data || [];
    debug('emitting event %j', args);
    if (null != packet.id) {
      debug('attaching ack callback to event');
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      emit.apply(this, args);
    } else {
      this.receiveBuffer.push(args);
    }
  };
  Socket.prototype.ack = function (id) {
    var self = this;
    var sent = false;
    return function () {
      if (sent) return;
      sent = true;
      var args = toArray(arguments);
      debug('sending ack %j', args);
      var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
      self.packet({
        type: type,
        id: id,
        data: args
      });
    };
  };
  Socket.prototype.onack = function (packet) {
    var ack = this.acks[packet.id];
    if ('function' == typeof ack) {
      debug('calling ack %s with %j', packet.id, packet.data);
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {
      debug('bad ack %s', packet.id);
    }
  };
  Socket.prototype.onconnect = function () {
    this.connected = true;
    this.disconnected = false;
    this.emit('connect');
    this.emitBuffered();
  };
  Socket.prototype.emitBuffered = function () {
    var i;
    for (i = 0; i < this.receiveBuffer.length; i++) {
      emit.apply(this, this.receiveBuffer[i]);
    }
    this.receiveBuffer = [];
    for (i = 0; i < this.sendBuffer.length; i++) {
      this.packet(this.sendBuffer[i]);
    }
    this.sendBuffer = [];
  };
  Socket.prototype.ondisconnect = function () {
    debug('server disconnect (%s)', this.nsp);
    this.destroy();
    this.onclose('io server disconnect');
  };
  Socket.prototype.destroy = function () {
    if (this.subs) {
      for (var i = 0; i < this.subs.length; i++) {
        this.subs[i].destroy();
      }
      this.subs = null;
    }
    this.io.destroy(this);
  };
  Socket.prototype.close = Socket.prototype.disconnect = function () {
    if (this.connected) {
      debug('performing disconnect (%s)', this.nsp);
      this.packet({ type: parser.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose('io client disconnect');
    }
    return this;
  };
  Socket.prototype.compress = function (compress) {
    this.flags = this.flags || {};
    this.flags.compress = compress;
    return this;
  };
  return module.exports;
});
$__System.registerDynamic('51', ['2', '36', '31', '4', '32'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var url = $__require('2');
  var parser = $__require('36');
  var Manager = $__require('31');
  var debug = $__require('4')('socket.io-client');
  module.exports = exports = lookup;
  var cache = exports.managers = {};
  function lookup(uri, opts) {
    if (typeof uri == 'object') {
      opts = uri;
      uri = undefined;
    }
    opts = opts || {};
    var parsed = url(uri);
    var source = parsed.source;
    var id = parsed.id;
    var path = parsed.path;
    var sameNamespace = cache[id] && path in cache[id].nsps;
    var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
    var io;
    if (newConnection) {
      debug('ignoring socket cache for %s', source);
      io = Manager(source, opts);
    } else {
      if (!cache[id]) {
        debug('new io instance for %s', source);
        cache[id] = Manager(source, opts);
      }
      io = cache[id];
    }
    return io.socket(parsed.path);
  }
  exports.protocol = parser.protocol;
  exports.connect = lookup;
  exports.Manager = $__require('31');
  exports.Socket = $__require('32');
  return module.exports;
});
$__System.registerDynamic("52", ["51"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("51");
  return module.exports;
});
$__System.register('53', ['52', '54', '55'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var socket_io_client_1, BaseMediator_1, utils_1;
    var ApplicationMediator;
    return {
        setters: [function (socket_io_client_1_1) {
            socket_io_client_1 = socket_io_client_1_1;
        }, function (BaseMediator_1_1) {
            BaseMediator_1 = BaseMediator_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }],
        execute: function () {
            ApplicationMediator = function (_super) {
                __extends(ApplicationMediator, _super);
                function ApplicationMediator() {
                    _super.apply(this, arguments);
                }
                ApplicationMediator.prototype.onRegister = function () {
                    var _this = this;
                    this.socket = socket_io_client_1.default.connect('https://meow-meltdown.herokuapp.com');
                    // this.socket = io.connect('http://localost:4000');
                    // events to handle
                    this.socket.on('game_connected', function (event) {
                        _this.handleSocketEvent('game_connected', event);
                    });
                    this.socket.on('player_connected', function (event) {
                        _this.handleSocketEvent('player_connected', event);
                    });
                    this.socket.on('player_start_game', function (event) {
                        _this.handleSocketEvent('player_start_game', event);
                    });
                    this.socket.on('player_swipe', function (event) {
                        _this.handleSocketEvent('player_swipe', event);
                    });
                    this.socket.on('start_game', function (event) {
                        _this.handleSocketEvent('start_game', event);
                    });
                    this.socket.on('restart_game', function (event) {
                        _this.handleSocketEvent('restart_game', event);
                    });
                    this.socket.on('start_countdown', function (event) {
                        _this.handleSocketEvent('start_countdown', event);
                    });
                    // connect game
                    this.socket.emit('game_connect');
                };
                ApplicationMediator.prototype.listNotificationInterests = function () {
                    return [utils_1.Notifications.INIT_COUNTDOWN, utils_1.Notifications.GAME_OVER];
                };
                ApplicationMediator.prototype.handleNotification = function (note) {
                    var name = note.getName();
                    var body = note.getBody();
                    switch (name) {
                        case utils_1.Notifications.INIT_COUNTDOWN:
                            this.socket.emit('init_countdown');
                            break;
                        case utils_1.Notifications.GAME_OVER:
                            this.socket.emit('game_over');
                            break;
                    }
                };
                ApplicationMediator.prototype.handleSocketEvent = function (type, event) {
                    console.log('handleSocketEvent', type, event);
                    switch (type) {
                        case 'game_connected':
                            this.appModel.gameId = event.id;
                            this.sendNotification(utils_1.Notifications.GAME_CONNECTED, event.id);
                            break;
                        case 'player_connected':
                            this.appModel.numPlayers = event.player;
                            this.sendNotification(utils_1.Notifications.PLAYER_CONNECTED, event.player);
                            break;
                        case 'player_start_game':
                            this.sendNotification(utils_1.Notifications.PLAYER_START_GAME);
                            break;
                        case 'player_swipe':
                            this.sendNotification(utils_1.Notifications.PLAYER_SWIPE, { playerNum: event.player, percent: event.percent });
                            break;
                        case 'start_game':
                            this.sendNotification(utils_1.Notifications.START_GAME);
                            break;
                        case 'restart_game':
                            this.sendNotification(utils_1.Notifications.RESTART_GAME);
                            break;
                        case 'start_countdown':
                            this.sendNotification(utils_1.Notifications.START_COUNTDOWN);
                            break;
                    }
                };
                Object.defineProperty(ApplicationMediator.prototype, "name", {
                    get: function () {
                        return ApplicationMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ApplicationMediator.prototype, "kdApplication", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                ApplicationMediator.MEDIATOR_NAME = 'ApplicationMediator';
                return ApplicationMediator;
            }(BaseMediator_1.BaseMediator);
            exports_1("ApplicationMediator", ApplicationMediator);
        }
    };
});
$__System.register('56', ['57', '58'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var display_1, utils_1;
    var TextButton;
    return {
        setters: [function (display_1_1) {
            display_1 = display_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }],
        execute: function () {
            TextButton = function (_super) {
                __extends(TextButton, _super);
                function TextButton(x, y, text, color, autoSetColor, buttonWidth) {
                    if (autoSetColor === void 0) {
                        autoSetColor = false;
                    }
                    if (buttonWidth === void 0) {
                        buttonWidth = 342.5;
                    }
                    _super.call(this, x, y);
                    this.color = color;
                    this.buttonWidth = buttonWidth;
                    this.enabled = true;
                    this._text = text;
                    this.build();
                    if (autoSetColor) {
                        this.setColor(this.color);
                    }
                }
                TextButton.prototype.build = function () {
                    this.bg = this.addChild(new display_1.Sprite(0, 0, utils_1.Resources.UI_SPRITESHEET.id, 'button_background.png'));
                    this.bg.anchor.set(0.5, 0.5);
                    this.bg.width = this.buttonWidth;
                    this.bg.scale.y = this.bg.scale.x;
                    this.bg.x = this.bg.y = 2 * this.bg.scale.x;
                    var gfx = this.addChild(new PIXI.Graphics());
                    gfx.beginFill(0xffffff);
                    gfx.drawRect(0, 0, this.buttonWidth - 6 * this.bg.scale.x, this.bg.height - 5 * this.bg.scale.x);
                    gfx.endFill();
                    this.colorBg = this.addChild(new display_1.Sprite(0, 0, gfx.generateTexture(this.app.renderer, 1)));
                    this.colorBg.anchor.set(0.5, 0.5);
                    this.colorBg.tint = 0x666666;
                    this.label = this.addChild(new display_1.Text(0, 0, this._text.toUpperCase(), utils_1.Fonts.STAG_SANS_BLACK, 24 * this.app.resolution, 0xffffff));
                    this.label.resolution = this.app.resolution;
                    this.label.anchor.set(0.5, 0.5);
                    this.removeChild(gfx);
                    gfx.destroy();
                };
                TextButton.prototype.down = function () {
                    this.colorBg.x = this.colorBg.y = this.label.x = this.label.y = 2 * this.bg.scale.x;
                    this.bg.visible = false;
                };
                TextButton.prototype.up = function (selected) {
                    if (selected === void 0) {
                        selected = false;
                    }
                    if (selected) {
                        this.enabled = false;
                    }
                    this.colorBg.x = this.colorBg.y = this.label.x = this.label.y = 0;
                    this.bg.visible = true;
                };
                TextButton.prototype.setColor = function (color) {
                    this.color = color;
                    this.colorBg.tint = utils_1.Colours.getPrimary(this.color);
                };
                Object.defineProperty(TextButton.prototype, "text", {
                    get: function () {
                        return this._text;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TextButton;
            }(display_1.Container);
            exports_1("TextButton", TextButton);
        }
    };
});
$__System.register('59', ['5a', '58', '57'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var utils_1, utils_2, display_1;
    var Ribbon;
    return {
        setters: [function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }],
        execute: function () {
            Ribbon = function (_super) {
                __extends(Ribbon, _super);
                function Ribbon(x, y, color) {
                    _super.call(this, x, y);
                    this.color = color;
                    this.build();
                }
                Ribbon.prototype.build = function () {
                    var gfx = this.addChild(new PIXI.Graphics());
                    gfx.beginFill(utils_2.Colours.getDark(this.color));
                    gfx.drawCircle(0, 0, 75);
                    gfx.endFill();
                    this.bg = this.addChild(new display_1.Sprite(0, 0, gfx.generateTexture(this.app.renderer, this.app.resolution)));
                    gfx.destroy();
                    this.removeChild(gfx);
                    this.pivot.set(75, 75);
                    this.labelContainer = this.addChild(new display_1.Container(75, 75));
                    this.label = this.labelContainer.addChild(new display_1.Text(0, 0, '1', utils_2.Fonts.STAG_SANS_BLACK, 73, 0xffffff));
                    this.positionLabel = this.labelContainer.addChild(new display_1.Text(0, 0, 'ST', utils_2.Fonts.STAG_SANS_BLACK, 26, 0xffffff));
                    this.scale.set(0, 0);
                };
                Ribbon.prototype.setPosition = function (position) {
                    var posLabel;
                    switch (position) {
                        case 1:
                            posLabel = 'ST';
                            break;
                        case 2:
                            posLabel = 'ND';
                            break;
                        case 3:
                            posLabel = 'RD';
                            break;
                        case 4:
                            posLabel = 'TH';
                            break;
                    }
                    this.label.text = position.toString();
                    this.positionLabel.text = posLabel;
                    this.positionLabel.x = this.label.width + 2;
                    this.positionLabel.y = this.label.y + 10;
                    this.labelContainer.pivot.set(this.label.width, this.label.height * 0.5);
                    this.show();
                };
                Ribbon.prototype.show = function () {
                    utils_1.Animator.to(this.scale, .3, { x: 1, y: 1, ease: Back.easeOut });
                };
                Ribbon.prototype.hide = function () {
                    utils_1.Animator.to(this.scale, .3, { x: 0, y: 0, ease: Back.easeIn });
                };
                return Ribbon;
            }(display_1.Container);
            exports_1("Ribbon", Ribbon);
        }
    };
});
$__System.register('5b', ['5a', '58', '57'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var utils_1, utils_2, display_1;
    var Countdown;
    return {
        setters: [function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }],
        execute: function () {
            Countdown = function (_super) {
                __extends(Countdown, _super);
                function Countdown(x, y, color, countdownTime, zeroDisplay) {
                    if (countdownTime === void 0) {
                        countdownTime = 5;
                    }
                    if (zeroDisplay === void 0) {
                        zeroDisplay = 'GO';
                    }
                    _super.call(this, x, y);
                    this.color = color;
                    this.countdownTime = countdownTime;
                    this.zeroDisplay = zeroDisplay;
                    this.build();
                }
                Countdown.prototype.build = function () {
                    var gfx = this.addChild(new PIXI.Graphics());
                    gfx.beginFill(0, 0.25);
                    gfx.drawRect(0, 0, this.app.width, this.app.height);
                    gfx.endFill();
                    this.bg = this.addChild(new display_1.Sprite(0, 0, gfx.generateTexture(this.app.renderer, this.app.resolution)));
                    gfx.clear();
                    gfx.beginFill(0xffffff);
                    gfx.drawCircle(100, 100, 100);
                    gfx.endFill();
                    this.circle = this.addChild(new display_1.Sprite(this.app.width * 0.5, this.app.height * 0.5, gfx.generateTexture(this.app.renderer, 1)));
                    this.circle.anchor.set(0.5, 0.5);
                    gfx.destroy();
                    this.removeChild(gfx);
                    this.label = this.circle.addChild(new display_1.Text(0, 0, '5', utils_2.Fonts.STAG_SANS_BLACK, 130, utils_2.Colours.getPrimary(this.color)));
                    this.label.anchor.set(0.5, 0.5);
                    this.circle.scale.set(0, 0);
                    this.alpha = 0;
                    this.visible = false;
                };
                Countdown.prototype.show = function (delay) {
                    var _this = this;
                    if (delay === void 0) {
                        delay = 0;
                    }
                    this.visible = true;
                    utils_1.Animator.to(this, 0.3, { delay: delay, alpha: 1, ease: Sine.easeOut }).then(function () {
                        utils_1.Animator.to(_this.circle.scale, 0.3, { x: 1, y: 1, ease: Back.easeOut });
                    });
                };
                Countdown.prototype.countdown = function () {
                    return utils_1.Time.count(this.countdownTime, this.onTimeUpdate, this);
                };
                Countdown.prototype.onTimeUpdate = function (currentTime) {
                    var _this = this;
                    if (currentTime > 0) {
                        utils_1.Animator.to(this.circle.scale, 0.2, { x: 1.15, y: 1.15, ease: Sine.easeOut, yoyo: true, repeat: 1 });
                        utils_1.Time.wait(0.075).then(function () {
                            _this.label.text = currentTime === 0 ? _this.zeroDisplay : currentTime.toString();
                        });
                    } else {
                        utils_1.Animator.to(this.circle.scale, 0.4, { delay: 0.1, x: 0, y: 0, ease: Back.easeIn });
                    }
                };
                Countdown.prototype.hide = function () {
                    var _this = this;
                    if (this.circle.scale.x === 1) {
                        utils_1.Animator.to(this.circle.scale, 0.2, { x: 0, y: 0, ease: Back.easeIn }).then(function () {
                            utils_1.Animator.to(_this, 0.2, { alpha: 0, ease: Sine.easeIn }).then(function () {
                                _this.visible = false;
                            });
                        });
                    } else {
                        utils_1.Animator.to(this, 0.2, { alpha: 0, ease: Sine.easeIn }).then(function () {
                            _this.visible = false;
                        });
                    }
                };
                return Countdown;
            }(display_1.Container);
            exports_1("Countdown", Countdown);
        }
    };
});
$__System.register('5c', ['56', '59', '5b'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (TextButton_1_1) {
            exports_1({
                "TextButton": TextButton_1_1["TextButton"]
            });
        }, function (Ribbon_1_1) {
            exports_1({
                "Ribbon": Ribbon_1_1["Ribbon"]
            });
        }, function (Countdown_1_1) {
            exports_1({
                "Countdown": Countdown_1_1["Countdown"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('5d', [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Animation;
    return {
        setters: [],
        execute: function () {
            Animation = function () {
                function Animation() {}
                Animation.generateFrames = function (framePrefix, startFrame, endFrame) {
                    var frames = [],
                        i,
                        val;
                    for (i = startFrame; i <= endFrame; i++) {
                        val = framePrefix;
                        if (i < 10) {
                            val += '0';
                        }
                        if (i < 100) {
                            val += '0';
                        }
                        if (i < 1000) {
                            val += '0';
                        }
                        val += i;
                        frames.push(PIXI.Texture.fromFrame(val + '.png'));
                    }
                    return frames;
                };
                return Animation;
            }();
            exports_1("Animation", Animation);
        }
    };
});
$__System.register("5e", ["5d"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (Animation_1_1) {
            exports_1({
                "Animation": Animation_1_1["Animation"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('5f', ['57', '5a', '58'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var display_1, utils_1, utils_2;
    var IceCream;
    return {
        setters: [function (display_1_1) {
            display_1 = display_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }],
        execute: function () {
            IceCream = function (_super) {
                __extends(IceCream, _super);
                function IceCream(x, y, color, stackHeight) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    _super.call(this, x, y);
                    this.color = color;
                    this.stackHeight = stackHeight;
                    this.finished = false;
                    this.build();
                }
                // public methods
                IceCream.prototype.drop = function () {
                    var _this = this;
                    if (this.finished) {
                        return;
                    }
                    var piece = this.stack.shift();
                    this.remainingPieces = this.stack.length;
                    utils_1.Animator.to(piece.scale, 0.3, { x: 0, y: 0 }).then(function () {
                        _this.removeChild(piece);
                    });
                    this.animateDrop();
                    if (this.remainingPieces === 0) {
                        this.finished = true;
                    }
                };
                // private methods
                IceCream.prototype.build = function () {
                    this.stack = [];
                    var ypos = 0,
                        piece;
                    while (ypos < this.stackHeight) {
                        piece = this.addChild(new display_1.Sprite(0, -ypos, utils_2.Resources.CAT_SPRITESHEET.id, this.color + '/' + 'ice_cream_stack.png'));
                        piece.anchor.set(0.5, 1);
                        this.stack.push(piece);
                        ypos += 25;
                    }
                    piece = this.addChild(new display_1.Sprite(0, -ypos, utils_2.Resources.CAT_SPRITESHEET.id, this.color + '/' + 'ice_cream_top.png'));
                    piece.anchor.set(0.5, 1);
                    this.stack.push(piece);
                    this.totalPieces = this.stack.length;
                    this.remainingPieces = this.stack.length;
                };
                IceCream.prototype.reset = function () {
                    var _this = this;
                    this.stack.forEach(function (piece) {
                        _this.removeChild(piece);
                    });
                    this.build();
                };
                IceCream.prototype.animateDrop = function () {
                    utils_1.Animator.to(this, 0.2, { y: "+=25", ease: Sine.easeIn });
                };
                return IceCream;
            }(display_1.Container);
            exports_1("IceCream", IceCream);
        }
    };
});
$__System.register('60', ['5e', '5a', '57', '58', '5f'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var utils_1, utils_2, display_1, utils_3, IceCream_1;
    var Cat;
    return {
        setters: [function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }, function (utils_3_1) {
            utils_3 = utils_3_1;
        }, function (IceCream_1_1) {
            IceCream_1 = IceCream_1_1;
        }],
        execute: function () {
            Cat = function (_super) {
                __extends(Cat, _super);
                function Cat(x, y, color) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    _super.call(this, x, y);
                    this.color = color;
                    this.finished = false;
                    this.canWin = true;
                    this.lickEnabled = true;
                    this.amountNeededForDrop = 100;
                    this.debugPercent = 0;
                    this.isDown = false;
                    this.build();
                    this.addInteraction();
                    this.pivot.set(this.base.width * 0.5, this.base.y + this.base.height);
                }
                Cat.prototype.build = function () {
                    var atlasId = utils_3.Resources.CAT_SPRITESHEET.id;
                    this.neckTop = this.addChild(new display_1.Sprite(45, 180, atlasId, this.color + '/' + 'neck_top.png'));
                    this.neck = this.addChild(new display_1.TileSprite(46, 208 + Cat.DEFAULT_NECK_HEIGHT, atlasId, this.color + '/' + 'neck_tile.png', 81.5, Cat.DEFAULT_NECK_HEIGHT));
                    this.neck.anchor.set(0, 1);
                    this.iceCream = this.addChild(new IceCream_1.IceCream(262, 148, this.color, Cat.DEFAULT_NECK_HEIGHT));
                    this.head = this.addChild(new display_1.Sprite(93, 186, atlasId, this.color + '/' + 'head.png'));
                    this.tongue = this.head.addChild(new display_1.MovieClip(143, 54, utils_1.Animation.generateFrames('tongue_', 0, 3)));
                    this.head.pivot.set(92, 186);
                    this.eye = this.head.addChild(new display_1.Sprite(110, 63, atlasId, 'eye.png'));
                    this.eye.visible = false;
                    this.base = this.addChild(new display_1.Sprite(5, this.neckTop.y + this.neckTop.height + Cat.DEFAULT_NECK_HEIGHT - 70, atlasId, this.color + '/' + 'base.png'));
                };
                Cat.prototype.addInteraction = function () {
                    this.head.interactive = true;
                    this.head.on('mousedown', this.onMouseDown, this).on('touchstart', this.onMouseDown, this);
                    this.head.on('mouseup', this.onMouseUp, this).on('touchend', this.onMouseUp, this).on('mouseupoutside', this.onMouseUp, this).on('touchendoutside', this.onMouseUp, this);
                };
                Cat.prototype.onMouseDown = function () {
                    this.isDown = true;
                    this.debugPercent = 0;
                };
                Cat.prototype.onMouseUp = function () {
                    this.isDown = false;
                    this.lick(this.debugPercent);
                };
                Cat.prototype.update = function () {
                    if (this.isDown) {
                        if (this.debugPercent < 100) {
                            this.debugPercent += 2;
                        }
                    }
                    this.head.y = this.neck.y - this.neck.height + 5;
                };
                Cat.prototype.lick = function (lickpercent) {
                    var _this = this;
                    if (!this.lickEnabled || !this.canWin) {
                        return;
                    }
                    this.lickEnabled = false;
                    var dist = Cat.EXTENDED_NECK_HEIGHT * (lickpercent * 0.01);
                    var time = dist / 2000;
                    this.tongue.gotoAndStop(2);
                    utils_2.Animator.to(this.neck, time, { height: dist, ease: Sine.easeOut });
                    utils_2.Time.wait(time - 0.1).then(function () {
                        _this.tongue.gotoAndStop(1);
                        _this.eye.visible = true;
                        utils_2.Animator.to(_this.head, 0.1, { rotation: -10 * (Math.PI / 180), ease: Sine.easeOut, yoyo: true, repeat: 1 });
                        utils_2.Time.wait(0.05).then(function () {
                            _this.tongue.gotoAndStop(3);
                        });
                        utils_2.Time.wait(0.1).then(function () {
                            _this.tongue.gotoAndStop(0);
                            utils_2.Animator.to(_this.neck, time * 0.6, { height: 1, ease: Sine.easeIn }).then(function () {
                                _this.lickEnabled = true;
                                _this.eye.visible = false;
                            });
                        });
                    });
                    this.amountNeededForDrop -= lickpercent;
                    if (this.amountNeededForDrop <= 0) {
                        this.iceCream.drop();
                        this.amountNeededForDrop = Math.round(this.iceCream.remainingPieces / this.iceCream.totalPieces * 100);
                    }
                    if (this.iceCream.finished) {
                        utils_2.Time.wait(0.2).then(function () {
                            _this.finished = true;
                        });
                    }
                };
                Cat.prototype.reset = function () {
                    this.canWin = true;
                    this.lickEnabled = true;
                    this.finished = false;
                    this.iceCream.reset();
                };
                Cat.DEFAULT_NECK_HEIGHT = 1;
                Cat.EXTENDED_NECK_HEIGHT = 800;
                return Cat;
            }(display_1.Container);
            exports_1("Cat", Cat);
        }
    };
});
$__System.register('61', ['54', '55'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var BaseMediator_1, utils_1;
    var PlayMediator;
    return {
        setters: [function (BaseMediator_1_1) {
            BaseMediator_1 = BaseMediator_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }],
        execute: function () {
            PlayMediator = function (_super) {
                __extends(PlayMediator, _super);
                function PlayMediator() {
                    _super.apply(this, arguments);
                }
                PlayMediator.prototype.onRegister = function () {};
                PlayMediator.prototype.listNotificationInterests = function () {
                    return [utils_1.Notifications.GAME_CONNECTED, utils_1.Notifications.START_COUNTDOWN, utils_1.Notifications.PLAYER_SWIPE, utils_1.Notifications.RESTART_GAME];
                };
                PlayMediator.prototype.handleNotification = function (note) {
                    var name = note.getName();
                    var body = note.getBody();
                    switch (name) {
                        case utils_1.Notifications.PLAYER_SWIPE:
                            this.game.inputSwipe(body.playerNum, body.percent);
                            break;
                        case utils_1.Notifications.START_COUNTDOWN:
                            this.game.startCountdown();
                            break;
                        case utils_1.Notifications.RESTART_GAME:
                            this.game.restartGame();
                            break;
                    }
                };
                PlayMediator.prototype.gameOver = function () {
                    this.sendNotification(utils_1.Notifications.GAME_OVER);
                };
                PlayMediator.prototype.sendInitCountdown = function () {
                    this.sendNotification(utils_1.Notifications.INIT_COUNTDOWN);
                };
                Object.defineProperty(PlayMediator.prototype, "numPlayers", {
                    get: function () {
                        return this.appModel.numPlayers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PlayMediator.prototype, "game", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                PlayMediator.MEDIATOR_NAME = 'PlayMediator';
                return PlayMediator;
            }(BaseMediator_1.BaseMediator);
            exports_1("PlayMediator", PlayMediator);
        }
    };
});
$__System.register('62', ['57', '5a', '58', '5c', '60', '61'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var display_1, utils_1, utils_2, ui_1, Cat_1, PlayMediator_1;
    var Play;
    return {
        setters: [function (display_1_1) {
            display_1 = display_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }, function (ui_1_1) {
            ui_1 = ui_1_1;
        }, function (Cat_1_1) {
            Cat_1 = Cat_1_1;
        }, function (PlayMediator_1_1) {
            PlayMediator_1 = PlayMediator_1_1;
        }],
        execute: function () {
            Play = function (_super) {
                __extends(Play, _super);
                function Play() {
                    _super.apply(this, arguments);
                    this.numPlayers = 0;
                    this.winner = 0;
                    this.hasWinner = false;
                }
                Play.prototype.init = function () {
                    console.log('play init!');
                    this.mediator = new PlayMediator_1.PlayMediator(this);
                };
                Play.prototype.preload = function () {
                    console.log('play preload');
                };
                Play.prototype.build = function () {
                    var _this = this;
                    this.numPlayers = this.mediator.numPlayers;
                    this.playerContainerSize = this.app.width * 0.5 / this.numPlayers;
                    this.generateBackgrounds();
                    this.addPlayers();
                    this.countdown = this.app.ui.addChild(new ui_1.Countdown(0, 0, 'blue'));
                    utils_1.Animator.staggerFrom(this.bgs, 0.6, { x: this.app.width, ease: Sine.easeOut, delay: 0.6 }, 0.2);
                    utils_1.Animator.staggerFrom(this.players, 0.6, { y: this.app.height * 2, ease: Sine.easeOut, delay: 1.2 }, 0.2);
                    utils_1.Time.wait(3).then(function () {
                        _this.mediator.sendInitCountdown();
                    });
                    this.app.sound.crossFadeBGTrack(utils_2.Resources.MUSIC_GAME.id);
                };
                Play.prototype.restartGame = function () {
                    var _this = this;
                    this.hasWinner = false;
                    for (var i = 0; i < this.numPlayers; i++) {
                        this.players[i].reset();
                    }
                    utils_1.Time.wait(3).then(function () {
                        _this.mediator.sendInitCountdown();
                    });
                };
                Play.prototype.startCountdown = function () {
                    var _this = this;
                    this.countdown.show();
                    utils_1.Time.wait(1).then(function () {
                        _this.countdown.countdown().then(function () {
                            _this.start();
                        });
                    });
                };
                Play.prototype.start = function () {
                    this.countdown.hide();
                };
                Play.prototype.generateBackgrounds = function () {
                    var size = this.playerContainerSize * 2;
                    var gfx = this.addChild(new PIXI.Graphics());
                    this.bgs = [];
                    for (var i = 1; i < this.numPlayers + 1; i++) {
                        gfx.clear();
                        gfx.beginFill(utils_2.Colours.getBackground(Play.PLAYER_COLORS[i - 1]));
                        gfx.drawRect(0, 0, this.app.width, this.app.height);
                        gfx.endFill();
                        this.bgs.push(this.add.sprite(size * (i - 1), 0, gfx.generateTexture(this.app.renderer, this.app.resolution)));
                    }
                    this.removeChild(gfx);
                    gfx.destroy();
                };
                Play.prototype.addPlayers = function () {
                    this.players = [];
                    var xpos = 0;
                    for (var i = 1; i < this.numPlayers + 1; i++) {
                        xpos += this.app.width * (this.playerContainerSize / this.app.width);
                        this.players.push(this.addChild(new Cat_1.Cat(xpos, this.app.height + 5, Play.PLAYER_COLORS[i - 1])));
                        this.players[this.players.length - 1].ribbon = this.addChild(new ui_1.Ribbon(xpos, 185, Play.PLAYER_COLORS[i - 1]));
                        xpos += this.app.width * (this.playerContainerSize / this.app.width);
                    }
                };
                Play.prototype.inputSwipe = function (playerNum, percent) {
                    this.players[playerNum - 1].lick(percent);
                    //this.app.sound.play('sfx', Play.SLURP_SOUNDS[Math.floor(Math.random() * 3)]);
                };
                Play.prototype.update = function () {
                    this.updatePlayers();
                    this.checkPlayers();
                    if (!this.hasWinner && this.winner === this.numPlayers) {
                        // game over
                        this.hasWinner = true;
                        this.mediator.gameOver();
                    }
                };
                Play.prototype.updatePlayers = function () {
                    for (var i = 0; i < this.numPlayers; i++) {
                        this.players[i].update();
                    }
                };
                Play.prototype.checkPlayers = function () {
                    for (var i = 0; i < this.numPlayers; i++) {
                        if (this.players[i].canWin && this.players[i].finished) {
                            this.winner++;
                            this.players[i].canWin = false;
                            this.players[i].ribbon.setPosition(this.winner);
                            this.app.sound.play('sfx', 'fruit_collected');
                        }
                    }
                };
                Play.prototype.shutdown = function () {
                    this.mediator.destroy();
                };
                Play.PLAYER_COLORS = ['pink', 'blue', 'green', 'orange'];
                Play.SLURP_SOUNDS = ['straw_slurp', 'slurping_2', 'slurp'];
                return Play;
            }(display_1.State);
            exports_1("Play", Play);
        }
    };
});
$__System.register("63", ["64"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var mvc_1;
    var ApplicationModel;
    return {
        setters: [function (mvc_1_1) {
            mvc_1 = mvc_1_1;
        }],
        execute: function () {
            ApplicationModel = function (_super) {
                __extends(ApplicationModel, _super);
                function ApplicationModel() {
                    _super.apply(this, arguments);
                    this.hasCopy = false;
                    this.hasFlightData = false;
                    this.numPlayers = 0;
                }
                Object.defineProperty(ApplicationModel.prototype, "name", {
                    get: function () {
                        return ApplicationModel.MODEL_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                ApplicationModel.MODEL_NAME = 'ApplicationModel';
                return ApplicationModel;
            }(mvc_1.Model);
            exports_1("ApplicationModel", ApplicationModel);
        }
    };
});
$__System.register('54', ['64', '63'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var mvc_1, ApplicationModel_1;
    var BaseMediator;
    return {
        setters: [function (mvc_1_1) {
            mvc_1 = mvc_1_1;
        }, function (ApplicationModel_1_1) {
            ApplicationModel_1 = ApplicationModel_1_1;
        }],
        execute: function () {
            BaseMediator = function (_super) {
                __extends(BaseMediator, _super);
                function BaseMediator() {
                    _super.apply(this, arguments);
                }
                BaseMediator.prototype.getCopy = function (groupId, itemId) {
                    return this.copyModel.getCopy(groupId, itemId);
                };
                BaseMediator.prototype.getCopyGroup = function (groupId) {
                    return this.copyModel.getCopyGroup(groupId);
                };
                Object.defineProperty(BaseMediator.prototype, "name", {
                    get: function () {
                        return this.mediatorName || BaseMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseMediator.prototype, "appModel", {
                    get: function () {
                        return this.app.retrieveModel(ApplicationModel_1.ApplicationModel.MODEL_NAME);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BaseMediator.prototype, "copyModel", {
                    get: function () {
                        return this.app.retrieveModel(mvc_1.CopyModel.MODEL_NAME);
                    },
                    enumerable: true,
                    configurable: true
                });
                BaseMediator.MEDIATOR_NAME = 'BaseMediator';
                return BaseMediator;
            }(mvc_1.Mediator);
            exports_1("BaseMediator", BaseMediator);
        }
    };
});
$__System.register('65', [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Notifications;
    return {
        setters: [],
        execute: function () {
            Notifications = function () {
                function Notifications() {}
                Notifications.GAME_CONNECTED = 'gameConnected';
                Notifications.PLAYER_CONNECTED = 'playerConnected';
                Notifications.PLAYER_START_GAME = 'playerStartGame';
                Notifications.PLAYER_SWIPE = 'playerSwipe';
                Notifications.START_GAME = 'startGame';
                Notifications.RESTART_GAME = 'reStartGame';
                Notifications.GAME_OVER = 'gameOver';
                Notifications.INIT_COUNTDOWN = 'initCountdown';
                Notifications.START_COUNTDOWN = 'startCountdown';
                return Notifications;
            }();
            exports_1("Notifications", Notifications);
        }
    };
});
$__System.register("55", ["65"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (Notifications_1_1) {
            exports_1({
                "Notifications": Notifications_1_1["Notifications"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('66', ['54', '55'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var BaseMediator_1, utils_1;
    var SplashMediator;
    return {
        setters: [function (BaseMediator_1_1) {
            BaseMediator_1 = BaseMediator_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }],
        execute: function () {
            SplashMediator = function (_super) {
                __extends(SplashMediator, _super);
                function SplashMediator() {
                    _super.apply(this, arguments);
                    this.connectionsEnabled = true;
                }
                SplashMediator.prototype.onRegister = function () {};
                SplashMediator.prototype.listNotificationInterests = function () {
                    return [utils_1.Notifications.GAME_CONNECTED, utils_1.Notifications.PLAYER_CONNECTED, utils_1.Notifications.START_GAME];
                };
                SplashMediator.prototype.handleNotification = function (note) {
                    var name = note.getName();
                    var body = note.getBody();
                    switch (name) {
                        case utils_1.Notifications.GAME_CONNECTED:
                            this.updateGameId();
                            break;
                        case utils_1.Notifications.PLAYER_CONNECTED:
                            if (this.connectionsEnabled) {
                                this.playerConnected(body);
                            }
                            break;
                        case utils_1.Notifications.START_GAME:
                            this.connectionsEnabled = false;
                            this.splash.proceedToGame();
                            break;
                    }
                };
                SplashMediator.prototype.updateGameId = function () {
                    this.splash.setGameId(this.appModel.gameId);
                };
                SplashMediator.prototype.playerConnected = function (playerNum, debug) {
                    if (debug === void 0) {
                        debug = false;
                    }
                    if (debug) {
                        this.appModel.numPlayers = playerNum;
                    }
                    this.splash.playerConnected(playerNum);
                };
                Object.defineProperty(SplashMediator.prototype, "numPlayers", {
                    get: function () {
                        return this.appModel.numPlayers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SplashMediator.prototype, "name", {
                    get: function () {
                        return SplashMediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SplashMediator.prototype, "splash", {
                    get: function () {
                        return this._viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                SplashMediator.MEDIATOR_NAME = 'SplashMediator';
                return SplashMediator;
            }(BaseMediator_1.BaseMediator);
            exports_1("SplashMediator", SplashMediator);
        }
    };
});
$__System.register("67", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Device;
    return {
        setters: [],
        execute: function () {
            Device = function () {
                function Device() {}
                Object.defineProperty(Device, "mobile", {
                    get: function () {
                        return Device.mobileOS !== Device.UNKNOWN;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "mobileOS", {
                    get: function () {
                        var userAgent = window.navigator.userAgent || window.navigator.vendor || window['opera'];
                        if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                            return Device.IOS;
                        } else if (userAgent.match(/Android/i)) {
                            return Device.ANDROID;
                        } else {
                            return Device.UNKNOWN;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "browser", {
                    get: function () {
                        var ua = navigator.userAgent.toLowerCase();
                        return {
                            firefox: ua.indexOf('firefox') > -1,
                            ie: ua.indexOf('ie') > -1,
                            safari: ua.indexOf('safari') > -1,
                            chrome: ua.indexOf('chrome') > -1
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "pixelRatio", {
                    get: function () {
                        return typeof window.devicePixelRatio !== undefined ? window.devicePixelRatio : 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Device, "customPixelRatio", {
                    get: function () {
                        return Device.pixelRatio >= 1.5 ? 2 : 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Device.IOS = 'iOS';
                Device.ANDROID = 'android';
                Device.UNKNOWN = 'unknown';
                return Device;
            }();
            exports_1("Device", Device);
        }
    };
});
$__System.register("68", ["69"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var bluebird_1;
    var Animator;
    return {
        setters: [function (bluebird_1_1) {
            bluebird_1 = bluebird_1_1;
        }],
        execute: function () {
            Animator = function () {
                function Animator() {}
                Animator.to = function (target, duration, vars) {
                    return new bluebird_1.default(function (resolve, reject) {
                        vars.onComplete = resolve;
                        TweenMax.to(target, duration, vars);
                    });
                };
                Animator.from = function (target, duration, vars) {
                    return new bluebird_1.default(function (resolve, reject) {
                        vars.onComplete = function () {
                            return resolve(vars.onCompleteParams);
                        };
                        TweenMax.from(target, duration, vars);
                    });
                };
                Animator.fromTo = function (target, duration, fromVars, toVars) {
                    return new bluebird_1.default(function (resolve, reject) {
                        toVars.onComplete = function () {
                            return resolve(toVars.onCompleteParams);
                        };
                        TweenMax.fromTo(target, duration, fromVars, toVars);
                    });
                };
                Animator.staggerTo = function (targets, duration, vars, stagger, onCompleteParams) {
                    if (onCompleteParams === void 0) {
                        onCompleteParams = null;
                    }
                    return new bluebird_1.default(function (resolve, reject) {
                        TweenMax.staggerTo(targets, duration, vars, stagger, function () {
                            resolve(onCompleteParams);
                        });
                    });
                };
                Animator.staggerFrom = function (targets, duration, vars, stagger, onCompleteParams) {
                    if (onCompleteParams === void 0) {
                        onCompleteParams = null;
                    }
                    return new bluebird_1.default(function (resolve, reject) {
                        TweenMax.staggerFrom(targets, duration, vars, stagger, function () {
                            resolve(onCompleteParams);
                        });
                    });
                };
                Animator.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, onCompleteParams) {
                    return new bluebird_1.default(function (resolve, reject) {
                        TweenMax.staggerFromTo(targets, duration, fromVars, toVars, stagger, function () {
                            resolve(onCompleteParams);
                        });
                    });
                };
                return Animator;
            }();
            exports_1("Animator", Animator);
        }
    };
});
$__System.registerDynamic("6a", [], false, function ($__require, $__exports, $__module) {
    var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

    (function ($__global) {
        /* */
        "format global";
        /* @preserve
         * The MIT License (MIT)
         * 
         * Copyright (c) 2013-2015 Petka Antonov
         * 
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         * 
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         * 
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         * 
         */
        /**
         * bluebird build version 3.4.6
         * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
        */

        !function (e) {
            if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
                var f;"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.Promise = e();
            }
        }(function () {
            var define, module, exports;return function e(t, n, r) {
                function s(o, u) {
                    if (!n[o]) {
                        if (!t[o]) {
                            var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                            var n = t[o][1][e];return s(n ? n : e);
                        }, l, l.exports, e, t, n, r);
                    }return n[o].exports;
                }var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) s(r[o]);return s;
            }({ 1: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        var SomePromiseArray = Promise._SomePromiseArray;
                        function any(promises) {
                            var ret = new SomePromiseArray(promises);
                            var promise = ret.promise();
                            ret.setHowMany(1);
                            ret.setUnwrap();
                            ret.init();
                            return promise;
                        }

                        Promise.any = function (promises) {
                            return any(promises);
                        };

                        Promise.prototype.any = function () {
                            return any(this);
                        };
                    };
                }, {}], 2: [function (_dereq_, module, exports) {
                    "use strict";

                    var firstLineError;
                    try {
                        throw new Error();
                    } catch (e) {
                        firstLineError = e;
                    }
                    var schedule = _dereq_("./schedule");
                    var Queue = _dereq_("./queue");
                    var util = _dereq_("./util");

                    function Async() {
                        this._customScheduler = false;
                        this._isTickUsed = false;
                        this._lateQueue = new Queue(16);
                        this._normalQueue = new Queue(16);
                        this._haveDrainedQueues = false;
                        this._trampolineEnabled = true;
                        var self = this;
                        this.drainQueues = function () {
                            self._drainQueues();
                        };
                        this._schedule = schedule;
                    }

                    Async.prototype.setScheduler = function (fn) {
                        var prev = this._schedule;
                        this._schedule = fn;
                        this._customScheduler = true;
                        return prev;
                    };

                    Async.prototype.hasCustomScheduler = function () {
                        return this._customScheduler;
                    };

                    Async.prototype.enableTrampoline = function () {
                        this._trampolineEnabled = true;
                    };

                    Async.prototype.disableTrampolineIfNecessary = function () {
                        if (util.hasDevTools) {
                            this._trampolineEnabled = false;
                        }
                    };

                    Async.prototype.haveItemsQueued = function () {
                        return this._isTickUsed || this._haveDrainedQueues;
                    };

                    Async.prototype.fatalError = function (e, isNode) {
                        if (isNode) {
                            process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n");
                            process.exit(2);
                        } else {
                            this.throwLater(e);
                        }
                    };

                    Async.prototype.throwLater = function (fn, arg) {
                        if (arguments.length === 1) {
                            arg = fn;
                            fn = function () {
                                throw arg;
                            };
                        }
                        if (typeof setTimeout !== "undefined") {
                            setTimeout(function () {
                                fn(arg);
                            }, 0);
                        } else try {
                            this._schedule(function () {
                                fn(arg);
                            });
                        } catch (e) {
                            throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                        }
                    };

                    function AsyncInvokeLater(fn, receiver, arg) {
                        this._lateQueue.push(fn, receiver, arg);
                        this._queueTick();
                    }

                    function AsyncInvoke(fn, receiver, arg) {
                        this._normalQueue.push(fn, receiver, arg);
                        this._queueTick();
                    }

                    function AsyncSettlePromises(promise) {
                        this._normalQueue._pushOne(promise);
                        this._queueTick();
                    }

                    if (!util.hasDevTools) {
                        Async.prototype.invokeLater = AsyncInvokeLater;
                        Async.prototype.invoke = AsyncInvoke;
                        Async.prototype.settlePromises = AsyncSettlePromises;
                    } else {
                        Async.prototype.invokeLater = function (fn, receiver, arg) {
                            if (this._trampolineEnabled) {
                                AsyncInvokeLater.call(this, fn, receiver, arg);
                            } else {
                                this._schedule(function () {
                                    setTimeout(function () {
                                        fn.call(receiver, arg);
                                    }, 100);
                                });
                            }
                        };

                        Async.prototype.invoke = function (fn, receiver, arg) {
                            if (this._trampolineEnabled) {
                                AsyncInvoke.call(this, fn, receiver, arg);
                            } else {
                                this._schedule(function () {
                                    fn.call(receiver, arg);
                                });
                            }
                        };

                        Async.prototype.settlePromises = function (promise) {
                            if (this._trampolineEnabled) {
                                AsyncSettlePromises.call(this, promise);
                            } else {
                                this._schedule(function () {
                                    promise._settlePromises();
                                });
                            }
                        };
                    }

                    Async.prototype.invokeFirst = function (fn, receiver, arg) {
                        this._normalQueue.unshift(fn, receiver, arg);
                        this._queueTick();
                    };

                    Async.prototype._drainQueue = function (queue) {
                        while (queue.length() > 0) {
                            var fn = queue.shift();
                            if (typeof fn !== "function") {
                                fn._settlePromises();
                                continue;
                            }
                            var receiver = queue.shift();
                            var arg = queue.shift();
                            fn.call(receiver, arg);
                        }
                    };

                    Async.prototype._drainQueues = function () {
                        this._drainQueue(this._normalQueue);
                        this._reset();
                        this._haveDrainedQueues = true;
                        this._drainQueue(this._lateQueue);
                    };

                    Async.prototype._queueTick = function () {
                        if (!this._isTickUsed) {
                            this._isTickUsed = true;
                            this._schedule(this.drainQueues);
                        }
                    };

                    Async.prototype._reset = function () {
                        this._isTickUsed = false;
                    };

                    module.exports = Async;
                    module.exports.firstLineError = firstLineError;
                }, { "./queue": 26, "./schedule": 29, "./util": 36 }], 3: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, debug) {
                        var calledBind = false;
                        var rejectThis = function (_, e) {
                            this._reject(e);
                        };

                        var targetRejected = function (e, context) {
                            context.promiseRejectionQueued = true;
                            context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
                        };

                        var bindingResolved = function (thisArg, context) {
                            if ((this._bitField & 50397184) === 0) {
                                this._resolveCallback(context.target);
                            }
                        };

                        var bindingRejected = function (e, context) {
                            if (!context.promiseRejectionQueued) this._reject(e);
                        };

                        Promise.prototype.bind = function (thisArg) {
                            if (!calledBind) {
                                calledBind = true;
                                Promise.prototype._propagateFrom = debug.propagateFromFunction();
                                Promise.prototype._boundValue = debug.boundValueFunction();
                            }
                            var maybePromise = tryConvertToPromise(thisArg);
                            var ret = new Promise(INTERNAL);
                            ret._propagateFrom(this, 1);
                            var target = this._target();
                            ret._setBoundTo(maybePromise);
                            if (maybePromise instanceof Promise) {
                                var context = {
                                    promiseRejectionQueued: false,
                                    promise: ret,
                                    target: target,
                                    bindingPromise: maybePromise
                                };
                                target._then(INTERNAL, targetRejected, undefined, ret, context);
                                maybePromise._then(bindingResolved, bindingRejected, undefined, ret, context);
                                ret._setOnCancel(maybePromise);
                            } else {
                                ret._resolveCallback(target);
                            }
                            return ret;
                        };

                        Promise.prototype._setBoundTo = function (obj) {
                            if (obj !== undefined) {
                                this._bitField = this._bitField | 2097152;
                                this._boundTo = obj;
                            } else {
                                this._bitField = this._bitField & ~2097152;
                            }
                        };

                        Promise.prototype._isBound = function () {
                            return (this._bitField & 2097152) === 2097152;
                        };

                        Promise.bind = function (thisArg, value) {
                            return Promise.resolve(value).bind(thisArg);
                        };
                    };
                }, {}], 4: [function (_dereq_, module, exports) {
                    "use strict";

                    var old;
                    if (typeof Promise !== "undefined") old = Promise;
                    function noConflict() {
                        try {
                            if (Promise === bluebird) Promise = old;
                        } catch (e) {}
                        return bluebird;
                    }
                    var bluebird = _dereq_("./promise")();
                    bluebird.noConflict = noConflict;
                    module.exports = bluebird;
                }, { "./promise": 22 }], 5: [function (_dereq_, module, exports) {
                    "use strict";

                    var cr = Object.create;
                    if (cr) {
                        var callerCache = cr(null);
                        var getterCache = cr(null);
                        callerCache[" size"] = getterCache[" size"] = 0;
                    }

                    module.exports = function (Promise) {
                        var util = _dereq_("./util");
                        var canEvaluate = util.canEvaluate;
                        var isIdentifier = util.isIdentifier;

                        var getMethodCaller;
                        var getGetter;
                        if (!true) {
                            var makeMethodCaller = function (methodName) {
                                return new Function("ensureMethod", "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g, methodName))(ensureMethod);
                            };

                            var makeGetter = function (propertyName) {
                                return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
                            };

                            var getCompiled = function (name, compiler, cache) {
                                var ret = cache[name];
                                if (typeof ret !== "function") {
                                    if (!isIdentifier(name)) {
                                        return null;
                                    }
                                    ret = compiler(name);
                                    cache[name] = ret;
                                    cache[" size"]++;
                                    if (cache[" size"] > 512) {
                                        var keys = Object.keys(cache);
                                        for (var i = 0; i < 256; ++i) delete cache[keys[i]];
                                        cache[" size"] = keys.length - 256;
                                    }
                                }
                                return ret;
                            };

                            getMethodCaller = function (name) {
                                return getCompiled(name, makeMethodCaller, callerCache);
                            };

                            getGetter = function (name) {
                                return getCompiled(name, makeGetter, getterCache);
                            };
                        }

                        function ensureMethod(obj, methodName) {
                            var fn;
                            if (obj != null) fn = obj[methodName];
                            if (typeof fn !== "function") {
                                var message = "Object " + util.classString(obj) + " has no method '" + util.toString(methodName) + "'";
                                throw new Promise.TypeError(message);
                            }
                            return fn;
                        }

                        function caller(obj) {
                            var methodName = this.pop();
                            var fn = ensureMethod(obj, methodName);
                            return fn.apply(obj, this);
                        }
                        Promise.prototype.call = function (methodName) {
                            var args = [].slice.call(arguments, 1);;
                            if (!true) {
                                if (canEvaluate) {
                                    var maybeCaller = getMethodCaller(methodName);
                                    if (maybeCaller !== null) {
                                        return this._then(maybeCaller, undefined, undefined, args, undefined);
                                    }
                                }
                            }
                            args.push(methodName);
                            return this._then(caller, undefined, undefined, args, undefined);
                        };

                        function namedGetter(obj) {
                            return obj[this];
                        }
                        function indexedGetter(obj) {
                            var index = +this;
                            if (index < 0) index = Math.max(0, index + obj.length);
                            return obj[index];
                        }
                        Promise.prototype.get = function (propertyName) {
                            var isIndex = typeof propertyName === "number";
                            var getter;
                            if (!isIndex) {
                                if (canEvaluate) {
                                    var maybeGetter = getGetter(propertyName);
                                    getter = maybeGetter !== null ? maybeGetter : namedGetter;
                                } else {
                                    getter = namedGetter;
                                }
                            } else {
                                getter = indexedGetter;
                            }
                            return this._then(getter, undefined, undefined, propertyName, undefined);
                        };
                    };
                }, { "./util": 36 }], 6: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection, debug) {
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;
                        var async = Promise._async;

                        Promise.prototype["break"] = Promise.prototype.cancel = function () {
                            if (!debug.cancellation()) return this._warn("cancellation is disabled");

                            var promise = this;
                            var child = promise;
                            while (promise._isCancellable()) {
                                if (!promise._cancelBy(child)) {
                                    if (child._isFollowing()) {
                                        child._followee().cancel();
                                    } else {
                                        child._cancelBranched();
                                    }
                                    break;
                                }

                                var parent = promise._cancellationParent;
                                if (parent == null || !parent._isCancellable()) {
                                    if (promise._isFollowing()) {
                                        promise._followee().cancel();
                                    } else {
                                        promise._cancelBranched();
                                    }
                                    break;
                                } else {
                                    if (promise._isFollowing()) promise._followee().cancel();
                                    promise._setWillBeCancelled();
                                    child = promise;
                                    promise = parent;
                                }
                            }
                        };

                        Promise.prototype._branchHasCancelled = function () {
                            this._branchesRemainingToCancel--;
                        };

                        Promise.prototype._enoughBranchesHaveCancelled = function () {
                            return this._branchesRemainingToCancel === undefined || this._branchesRemainingToCancel <= 0;
                        };

                        Promise.prototype._cancelBy = function (canceller) {
                            if (canceller === this) {
                                this._branchesRemainingToCancel = 0;
                                this._invokeOnCancel();
                                return true;
                            } else {
                                this._branchHasCancelled();
                                if (this._enoughBranchesHaveCancelled()) {
                                    this._invokeOnCancel();
                                    return true;
                                }
                            }
                            return false;
                        };

                        Promise.prototype._cancelBranched = function () {
                            if (this._enoughBranchesHaveCancelled()) {
                                this._cancel();
                            }
                        };

                        Promise.prototype._cancel = function () {
                            if (!this._isCancellable()) return;
                            this._setCancelled();
                            async.invoke(this._cancelPromises, this, undefined);
                        };

                        Promise.prototype._cancelPromises = function () {
                            if (this._length() > 0) this._settlePromises();
                        };

                        Promise.prototype._unsetOnCancel = function () {
                            this._onCancelField = undefined;
                        };

                        Promise.prototype._isCancellable = function () {
                            return this.isPending() && !this._isCancelled();
                        };

                        Promise.prototype.isCancellable = function () {
                            return this.isPending() && !this.isCancelled();
                        };

                        Promise.prototype._doInvokeOnCancel = function (onCancelCallback, internalOnly) {
                            if (util.isArray(onCancelCallback)) {
                                for (var i = 0; i < onCancelCallback.length; ++i) {
                                    this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
                                }
                            } else if (onCancelCallback !== undefined) {
                                if (typeof onCancelCallback === "function") {
                                    if (!internalOnly) {
                                        var e = tryCatch(onCancelCallback).call(this._boundValue());
                                        if (e === errorObj) {
                                            this._attachExtraTrace(e.e);
                                            async.throwLater(e.e);
                                        }
                                    }
                                } else {
                                    onCancelCallback._resultCancelled(this);
                                }
                            }
                        };

                        Promise.prototype._invokeOnCancel = function () {
                            var onCancelCallback = this._onCancel();
                            this._unsetOnCancel();
                            async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
                        };

                        Promise.prototype._invokeInternalOnCancel = function () {
                            if (this._isCancellable()) {
                                this._doInvokeOnCancel(this._onCancel(), true);
                                this._unsetOnCancel();
                            }
                        };

                        Promise.prototype._resultCancelled = function () {
                            this.cancel();
                        };
                    };
                }, { "./util": 36 }], 7: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (NEXT_FILTER) {
                        var util = _dereq_("./util");
                        var getKeys = _dereq_("./es5").keys;
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;

                        function catchFilter(instances, cb, promise) {
                            return function (e) {
                                var boundTo = promise._boundValue();
                                predicateLoop: for (var i = 0; i < instances.length; ++i) {
                                    var item = instances[i];

                                    if (item === Error || item != null && item.prototype instanceof Error) {
                                        if (e instanceof item) {
                                            return tryCatch(cb).call(boundTo, e);
                                        }
                                    } else if (typeof item === "function") {
                                        var matchesPredicate = tryCatch(item).call(boundTo, e);
                                        if (matchesPredicate === errorObj) {
                                            return matchesPredicate;
                                        } else if (matchesPredicate) {
                                            return tryCatch(cb).call(boundTo, e);
                                        }
                                    } else if (util.isObject(e)) {
                                        var keys = getKeys(item);
                                        for (var j = 0; j < keys.length; ++j) {
                                            var key = keys[j];
                                            if (item[key] != e[key]) {
                                                continue predicateLoop;
                                            }
                                        }
                                        return tryCatch(cb).call(boundTo, e);
                                    }
                                }
                                return NEXT_FILTER;
                            };
                        }

                        return catchFilter;
                    };
                }, { "./es5": 13, "./util": 36 }], 8: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        var longStackTraces = false;
                        var contextStack = [];

                        Promise.prototype._promiseCreated = function () {};
                        Promise.prototype._pushContext = function () {};
                        Promise.prototype._popContext = function () {
                            return null;
                        };
                        Promise._peekContext = Promise.prototype._peekContext = function () {};

                        function Context() {
                            this._trace = new Context.CapturedTrace(peekContext());
                        }
                        Context.prototype._pushContext = function () {
                            if (this._trace !== undefined) {
                                this._trace._promiseCreated = null;
                                contextStack.push(this._trace);
                            }
                        };

                        Context.prototype._popContext = function () {
                            if (this._trace !== undefined) {
                                var trace = contextStack.pop();
                                var ret = trace._promiseCreated;
                                trace._promiseCreated = null;
                                return ret;
                            }
                            return null;
                        };

                        function createContext() {
                            if (longStackTraces) return new Context();
                        }

                        function peekContext() {
                            var lastIndex = contextStack.length - 1;
                            if (lastIndex >= 0) {
                                return contextStack[lastIndex];
                            }
                            return undefined;
                        }
                        Context.CapturedTrace = null;
                        Context.create = createContext;
                        Context.deactivateLongStackTraces = function () {};
                        Context.activateLongStackTraces = function () {
                            var Promise_pushContext = Promise.prototype._pushContext;
                            var Promise_popContext = Promise.prototype._popContext;
                            var Promise_PeekContext = Promise._peekContext;
                            var Promise_peekContext = Promise.prototype._peekContext;
                            var Promise_promiseCreated = Promise.prototype._promiseCreated;
                            Context.deactivateLongStackTraces = function () {
                                Promise.prototype._pushContext = Promise_pushContext;
                                Promise.prototype._popContext = Promise_popContext;
                                Promise._peekContext = Promise_PeekContext;
                                Promise.prototype._peekContext = Promise_peekContext;
                                Promise.prototype._promiseCreated = Promise_promiseCreated;
                                longStackTraces = false;
                            };
                            longStackTraces = true;
                            Promise.prototype._pushContext = Context.prototype._pushContext;
                            Promise.prototype._popContext = Context.prototype._popContext;
                            Promise._peekContext = Promise.prototype._peekContext = peekContext;
                            Promise.prototype._promiseCreated = function () {
                                var ctx = this._peekContext();
                                if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
                            };
                        };
                        return Context;
                    };
                }, {}], 9: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, Context) {
                        var getDomain = Promise._getDomain;
                        var async = Promise._async;
                        var Warning = _dereq_("./errors").Warning;
                        var util = _dereq_("./util");
                        var canAttachTrace = util.canAttachTrace;
                        var unhandledRejectionHandled;
                        var possiblyUnhandledRejection;
                        var bluebirdFramePattern = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
                        var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
                        var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
                        var stackFramePattern = null;
                        var formatStack = null;
                        var indentStackFrames = false;
                        var printWarning;
                        var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 && (true || util.env("BLUEBIRD_DEBUG") || util.env("NODE_ENV") === "development"));

                        var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 && (debugging || util.env("BLUEBIRD_WARNINGS")));

                        var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

                        var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

                        Promise.prototype.suppressUnhandledRejections = function () {
                            var target = this._target();
                            target._bitField = target._bitField & ~1048576 | 524288;
                        };

                        Promise.prototype._ensurePossibleRejectionHandled = function () {
                            if ((this._bitField & 524288) !== 0) return;
                            this._setRejectionIsUnhandled();
                            async.invokeLater(this._notifyUnhandledRejection, this, undefined);
                        };

                        Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
                            fireRejectionEvent("rejectionHandled", unhandledRejectionHandled, undefined, this);
                        };

                        Promise.prototype._setReturnedNonUndefined = function () {
                            this._bitField = this._bitField | 268435456;
                        };

                        Promise.prototype._returnedNonUndefined = function () {
                            return (this._bitField & 268435456) !== 0;
                        };

                        Promise.prototype._notifyUnhandledRejection = function () {
                            if (this._isRejectionUnhandled()) {
                                var reason = this._settledValue();
                                this._setUnhandledRejectionIsNotified();
                                fireRejectionEvent("unhandledRejection", possiblyUnhandledRejection, reason, this);
                            }
                        };

                        Promise.prototype._setUnhandledRejectionIsNotified = function () {
                            this._bitField = this._bitField | 262144;
                        };

                        Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
                            this._bitField = this._bitField & ~262144;
                        };

                        Promise.prototype._isUnhandledRejectionNotified = function () {
                            return (this._bitField & 262144) > 0;
                        };

                        Promise.prototype._setRejectionIsUnhandled = function () {
                            this._bitField = this._bitField | 1048576;
                        };

                        Promise.prototype._unsetRejectionIsUnhandled = function () {
                            this._bitField = this._bitField & ~1048576;
                            if (this._isUnhandledRejectionNotified()) {
                                this._unsetUnhandledRejectionIsNotified();
                                this._notifyUnhandledRejectionIsHandled();
                            }
                        };

                        Promise.prototype._isRejectionUnhandled = function () {
                            return (this._bitField & 1048576) > 0;
                        };

                        Promise.prototype._warn = function (message, shouldUseOwnTrace, promise) {
                            return warn(message, shouldUseOwnTrace, promise || this);
                        };

                        Promise.onPossiblyUnhandledRejection = function (fn) {
                            var domain = getDomain();
                            possiblyUnhandledRejection = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
                        };

                        Promise.onUnhandledRejectionHandled = function (fn) {
                            var domain = getDomain();
                            unhandledRejectionHandled = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
                        };

                        var disableLongStackTraces = function () {};
                        Promise.longStackTraces = function () {
                            if (async.haveItemsQueued() && !config.longStackTraces) {
                                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            if (!config.longStackTraces && longStackTracesIsSupported()) {
                                var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
                                var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
                                config.longStackTraces = true;
                                disableLongStackTraces = function () {
                                    if (async.haveItemsQueued() && !config.longStackTraces) {
                                        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                                    }
                                    Promise.prototype._captureStackTrace = Promise_captureStackTrace;
                                    Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
                                    Context.deactivateLongStackTraces();
                                    async.enableTrampoline();
                                    config.longStackTraces = false;
                                };
                                Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
                                Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
                                Context.activateLongStackTraces();
                                async.disableTrampolineIfNecessary();
                            }
                        };

                        Promise.hasLongStackTraces = function () {
                            return config.longStackTraces && longStackTracesIsSupported();
                        };

                        var fireDomEvent = function () {
                            try {
                                if (typeof CustomEvent === "function") {
                                    var event = new CustomEvent("CustomEvent");
                                    util.global.dispatchEvent(event);
                                    return function (name, event) {
                                        var domEvent = new CustomEvent(name.toLowerCase(), {
                                            detail: event,
                                            cancelable: true
                                        });
                                        return !util.global.dispatchEvent(domEvent);
                                    };
                                } else if (typeof Event === "function") {
                                    var event = new Event("CustomEvent");
                                    util.global.dispatchEvent(event);
                                    return function (name, event) {
                                        var domEvent = new Event(name.toLowerCase(), {
                                            cancelable: true
                                        });
                                        domEvent.detail = event;
                                        return !util.global.dispatchEvent(domEvent);
                                    };
                                } else {
                                    var event = document.createEvent("CustomEvent");
                                    event.initCustomEvent("testingtheevent", false, true, {});
                                    util.global.dispatchEvent(event);
                                    return function (name, event) {
                                        var domEvent = document.createEvent("CustomEvent");
                                        domEvent.initCustomEvent(name.toLowerCase(), false, true, event);
                                        return !util.global.dispatchEvent(domEvent);
                                    };
                                }
                            } catch (e) {}
                            return function () {
                                return false;
                            };
                        }();

                        var fireGlobalEvent = function () {
                            if (util.isNode) {
                                return function () {
                                    return process.emit.apply(process, arguments);
                                };
                            } else {
                                if (!util.global) {
                                    return function () {
                                        return false;
                                    };
                                }
                                return function (name) {
                                    var methodName = "on" + name.toLowerCase();
                                    var method = util.global[methodName];
                                    if (!method) return false;
                                    method.apply(util.global, [].slice.call(arguments, 1));
                                    return true;
                                };
                            }
                        }();

                        function generatePromiseLifecycleEventObject(name, promise) {
                            return { promise: promise };
                        }

                        var eventToObjectGenerator = {
                            promiseCreated: generatePromiseLifecycleEventObject,
                            promiseFulfilled: generatePromiseLifecycleEventObject,
                            promiseRejected: generatePromiseLifecycleEventObject,
                            promiseResolved: generatePromiseLifecycleEventObject,
                            promiseCancelled: generatePromiseLifecycleEventObject,
                            promiseChained: function (name, promise, child) {
                                return { promise: promise, child: child };
                            },
                            warning: function (name, warning) {
                                return { warning: warning };
                            },
                            unhandledRejection: function (name, reason, promise) {
                                return { reason: reason, promise: promise };
                            },
                            rejectionHandled: generatePromiseLifecycleEventObject
                        };

                        var activeFireEvent = function (name) {
                            var globalEventFired = false;
                            try {
                                globalEventFired = fireGlobalEvent.apply(null, arguments);
                            } catch (e) {
                                async.throwLater(e);
                                globalEventFired = true;
                            }

                            var domEventFired = false;
                            try {
                                domEventFired = fireDomEvent(name, eventToObjectGenerator[name].apply(null, arguments));
                            } catch (e) {
                                async.throwLater(e);
                                domEventFired = true;
                            }

                            return domEventFired || globalEventFired;
                        };

                        Promise.config = function (opts) {
                            opts = Object(opts);
                            if ("longStackTraces" in opts) {
                                if (opts.longStackTraces) {
                                    Promise.longStackTraces();
                                } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
                                    disableLongStackTraces();
                                }
                            }
                            if ("warnings" in opts) {
                                var warningsOption = opts.warnings;
                                config.warnings = !!warningsOption;
                                wForgottenReturn = config.warnings;

                                if (util.isObject(warningsOption)) {
                                    if ("wForgottenReturn" in warningsOption) {
                                        wForgottenReturn = !!warningsOption.wForgottenReturn;
                                    }
                                }
                            }
                            if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
                                if (async.haveItemsQueued()) {
                                    throw new Error("cannot enable cancellation after promises are in use");
                                }
                                Promise.prototype._clearCancellationData = cancellationClearCancellationData;
                                Promise.prototype._propagateFrom = cancellationPropagateFrom;
                                Promise.prototype._onCancel = cancellationOnCancel;
                                Promise.prototype._setOnCancel = cancellationSetOnCancel;
                                Promise.prototype._attachCancellationCallback = cancellationAttachCancellationCallback;
                                Promise.prototype._execute = cancellationExecute;
                                propagateFromFunction = cancellationPropagateFrom;
                                config.cancellation = true;
                            }
                            if ("monitoring" in opts) {
                                if (opts.monitoring && !config.monitoring) {
                                    config.monitoring = true;
                                    Promise.prototype._fireEvent = activeFireEvent;
                                } else if (!opts.monitoring && config.monitoring) {
                                    config.monitoring = false;
                                    Promise.prototype._fireEvent = defaultFireEvent;
                                }
                            }
                        };

                        function defaultFireEvent() {
                            return false;
                        }

                        Promise.prototype._fireEvent = defaultFireEvent;
                        Promise.prototype._execute = function (executor, resolve, reject) {
                            try {
                                executor(resolve, reject);
                            } catch (e) {
                                return e;
                            }
                        };
                        Promise.prototype._onCancel = function () {};
                        Promise.prototype._setOnCancel = function (handler) {
                            ;
                        };
                        Promise.prototype._attachCancellationCallback = function (onCancel) {
                            ;
                        };
                        Promise.prototype._captureStackTrace = function () {};
                        Promise.prototype._attachExtraTrace = function () {};
                        Promise.prototype._clearCancellationData = function () {};
                        Promise.prototype._propagateFrom = function (parent, flags) {
                            ;
                            ;
                        };

                        function cancellationExecute(executor, resolve, reject) {
                            var promise = this;
                            try {
                                executor(resolve, reject, function (onCancel) {
                                    if (typeof onCancel !== "function") {
                                        throw new TypeError("onCancel must be a function, got: " + util.toString(onCancel));
                                    }
                                    promise._attachCancellationCallback(onCancel);
                                });
                            } catch (e) {
                                return e;
                            }
                        }

                        function cancellationAttachCancellationCallback(onCancel) {
                            if (!this._isCancellable()) return this;

                            var previousOnCancel = this._onCancel();
                            if (previousOnCancel !== undefined) {
                                if (util.isArray(previousOnCancel)) {
                                    previousOnCancel.push(onCancel);
                                } else {
                                    this._setOnCancel([previousOnCancel, onCancel]);
                                }
                            } else {
                                this._setOnCancel(onCancel);
                            }
                        }

                        function cancellationOnCancel() {
                            return this._onCancelField;
                        }

                        function cancellationSetOnCancel(onCancel) {
                            this._onCancelField = onCancel;
                        }

                        function cancellationClearCancellationData() {
                            this._cancellationParent = undefined;
                            this._onCancelField = undefined;
                        }

                        function cancellationPropagateFrom(parent, flags) {
                            if ((flags & 1) !== 0) {
                                this._cancellationParent = parent;
                                var branchesRemainingToCancel = parent._branchesRemainingToCancel;
                                if (branchesRemainingToCancel === undefined) {
                                    branchesRemainingToCancel = 0;
                                }
                                parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
                            }
                            if ((flags & 2) !== 0 && parent._isBound()) {
                                this._setBoundTo(parent._boundTo);
                            }
                        }

                        function bindingPropagateFrom(parent, flags) {
                            if ((flags & 2) !== 0 && parent._isBound()) {
                                this._setBoundTo(parent._boundTo);
                            }
                        }
                        var propagateFromFunction = bindingPropagateFrom;

                        function boundValueFunction() {
                            var ret = this._boundTo;
                            if (ret !== undefined) {
                                if (ret instanceof Promise) {
                                    if (ret.isFulfilled()) {
                                        return ret.value();
                                    } else {
                                        return undefined;
                                    }
                                }
                            }
                            return ret;
                        }

                        function longStackTracesCaptureStackTrace() {
                            this._trace = new CapturedTrace(this._peekContext());
                        }

                        function longStackTracesAttachExtraTrace(error, ignoreSelf) {
                            if (canAttachTrace(error)) {
                                var trace = this._trace;
                                if (trace !== undefined) {
                                    if (ignoreSelf) trace = trace._parent;
                                }
                                if (trace !== undefined) {
                                    trace.attachExtraTrace(error);
                                } else if (!error.__stackCleaned__) {
                                    var parsed = parseStackAndMessage(error);
                                    util.notEnumerableProp(error, "stack", parsed.message + "\n" + parsed.stack.join("\n"));
                                    util.notEnumerableProp(error, "__stackCleaned__", true);
                                }
                            }
                        }

                        function checkForgottenReturns(returnValue, promiseCreated, name, promise, parent) {
                            if (returnValue === undefined && promiseCreated !== null && wForgottenReturn) {
                                if (parent !== undefined && parent._returnedNonUndefined()) return;
                                if ((promise._bitField & 65535) === 0) return;

                                if (name) name = name + " ";
                                var handlerLine = "";
                                var creatorLine = "";
                                if (promiseCreated._trace) {
                                    var traceLines = promiseCreated._trace.stack.split("\n");
                                    var stack = cleanStack(traceLines);
                                    for (var i = stack.length - 1; i >= 0; --i) {
                                        var line = stack[i];
                                        if (!nodeFramePattern.test(line)) {
                                            var lineMatches = line.match(parseLinePattern);
                                            if (lineMatches) {
                                                handlerLine = "at " + lineMatches[1] + ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                                            }
                                            break;
                                        }
                                    }

                                    if (stack.length > 0) {
                                        var firstUserLine = stack[0];
                                        for (var i = 0; i < traceLines.length; ++i) {

                                            if (traceLines[i] === firstUserLine) {
                                                if (i > 0) {
                                                    creatorLine = "\n" + traceLines[i - 1];
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                                var msg = "a promise was created in a " + name + "handler " + handlerLine + "but was not returned from it, " + "see http://goo.gl/rRqMUw" + creatorLine;
                                promise._warn(msg, true, promiseCreated);
                            }
                        }

                        function deprecated(name, replacement) {
                            var message = name + " is deprecated and will be removed in a future version.";
                            if (replacement) message += " Use " + replacement + " instead.";
                            return warn(message);
                        }

                        function warn(message, shouldUseOwnTrace, promise) {
                            if (!config.warnings) return;
                            var warning = new Warning(message);
                            var ctx;
                            if (shouldUseOwnTrace) {
                                promise._attachExtraTrace(warning);
                            } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
                                ctx.attachExtraTrace(warning);
                            } else {
                                var parsed = parseStackAndMessage(warning);
                                warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
                            }

                            if (!activeFireEvent("warning", warning)) {
                                formatAndLogError(warning, "", true);
                            }
                        }

                        function reconstructStack(message, stacks) {
                            for (var i = 0; i < stacks.length - 1; ++i) {
                                stacks[i].push("From previous event:");
                                stacks[i] = stacks[i].join("\n");
                            }
                            if (i < stacks.length) {
                                stacks[i] = stacks[i].join("\n");
                            }
                            return message + "\n" + stacks.join("\n");
                        }

                        function removeDuplicateOrEmptyJumps(stacks) {
                            for (var i = 0; i < stacks.length; ++i) {
                                if (stacks[i].length === 0 || i + 1 < stacks.length && stacks[i][0] === stacks[i + 1][0]) {
                                    stacks.splice(i, 1);
                                    i--;
                                }
                            }
                        }

                        function removeCommonRoots(stacks) {
                            var current = stacks[0];
                            for (var i = 1; i < stacks.length; ++i) {
                                var prev = stacks[i];
                                var currentLastIndex = current.length - 1;
                                var currentLastLine = current[currentLastIndex];
                                var commonRootMeetPoint = -1;

                                for (var j = prev.length - 1; j >= 0; --j) {
                                    if (prev[j] === currentLastLine) {
                                        commonRootMeetPoint = j;
                                        break;
                                    }
                                }

                                for (var j = commonRootMeetPoint; j >= 0; --j) {
                                    var line = prev[j];
                                    if (current[currentLastIndex] === line) {
                                        current.pop();
                                        currentLastIndex--;
                                    } else {
                                        break;
                                    }
                                }
                                current = prev;
                            }
                        }

                        function cleanStack(stack) {
                            var ret = [];
                            for (var i = 0; i < stack.length; ++i) {
                                var line = stack[i];
                                var isTraceLine = "    (No stack trace)" === line || stackFramePattern.test(line);
                                var isInternalFrame = isTraceLine && shouldIgnore(line);
                                if (isTraceLine && !isInternalFrame) {
                                    if (indentStackFrames && line.charAt(0) !== " ") {
                                        line = "    " + line;
                                    }
                                    ret.push(line);
                                }
                            }
                            return ret;
                        }

                        function stackFramesAsArray(error) {
                            var stack = error.stack.replace(/\s+$/g, "").split("\n");
                            for (var i = 0; i < stack.length; ++i) {
                                var line = stack[i];
                                if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
                                    break;
                                }
                            }
                            if (i > 0) {
                                stack = stack.slice(i);
                            }
                            return stack;
                        }

                        function parseStackAndMessage(error) {
                            var stack = error.stack;
                            var message = error.toString();
                            stack = typeof stack === "string" && stack.length > 0 ? stackFramesAsArray(error) : ["    (No stack trace)"];
                            return {
                                message: message,
                                stack: cleanStack(stack)
                            };
                        }

                        function formatAndLogError(error, title, isSoft) {
                            if (typeof console !== "undefined") {
                                var message;
                                if (util.isObject(error)) {
                                    var stack = error.stack;
                                    message = title + formatStack(stack, error);
                                } else {
                                    message = title + String(error);
                                }
                                if (typeof printWarning === "function") {
                                    printWarning(message, isSoft);
                                } else if (typeof console.log === "function" || typeof console.log === "object") {
                                    console.log(message);
                                }
                            }
                        }

                        function fireRejectionEvent(name, localHandler, reason, promise) {
                            var localEventFired = false;
                            try {
                                if (typeof localHandler === "function") {
                                    localEventFired = true;
                                    if (name === "rejectionHandled") {
                                        localHandler(promise);
                                    } else {
                                        localHandler(reason, promise);
                                    }
                                }
                            } catch (e) {
                                async.throwLater(e);
                            }

                            if (name === "unhandledRejection") {
                                if (!activeFireEvent(name, reason, promise) && !localEventFired) {
                                    formatAndLogError(reason, "Unhandled rejection ");
                                }
                            } else {
                                activeFireEvent(name, promise);
                            }
                        }

                        function formatNonError(obj) {
                            var str;
                            if (typeof obj === "function") {
                                str = "[function " + (obj.name || "anonymous") + "]";
                            } else {
                                str = obj && typeof obj.toString === "function" ? obj.toString() : util.toString(obj);
                                var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
                                if (ruselessToString.test(str)) {
                                    try {
                                        var newStr = JSON.stringify(obj);
                                        str = newStr;
                                    } catch (e) {}
                                }
                                if (str.length === 0) {
                                    str = "(empty array)";
                                }
                            }
                            return "(<" + snip(str) + ">, no stack trace)";
                        }

                        function snip(str) {
                            var maxChars = 41;
                            if (str.length < maxChars) {
                                return str;
                            }
                            return str.substr(0, maxChars - 3) + "...";
                        }

                        function longStackTracesIsSupported() {
                            return typeof captureStackTrace === "function";
                        }

                        var shouldIgnore = function () {
                            return false;
                        };
                        var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                        function parseLineInfo(line) {
                            var matches = line.match(parseLineInfoRegex);
                            if (matches) {
                                return {
                                    fileName: matches[1],
                                    line: parseInt(matches[2], 10)
                                };
                            }
                        }

                        function setBounds(firstLineError, lastLineError) {
                            if (!longStackTracesIsSupported()) return;
                            var firstStackLines = firstLineError.stack.split("\n");
                            var lastStackLines = lastLineError.stack.split("\n");
                            var firstIndex = -1;
                            var lastIndex = -1;
                            var firstFileName;
                            var lastFileName;
                            for (var i = 0; i < firstStackLines.length; ++i) {
                                var result = parseLineInfo(firstStackLines[i]);
                                if (result) {
                                    firstFileName = result.fileName;
                                    firstIndex = result.line;
                                    break;
                                }
                            }
                            for (var i = 0; i < lastStackLines.length; ++i) {
                                var result = parseLineInfo(lastStackLines[i]);
                                if (result) {
                                    lastFileName = result.fileName;
                                    lastIndex = result.line;
                                    break;
                                }
                            }
                            if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName || firstFileName !== lastFileName || firstIndex >= lastIndex) {
                                return;
                            }

                            shouldIgnore = function (line) {
                                if (bluebirdFramePattern.test(line)) return true;
                                var info = parseLineInfo(line);
                                if (info) {
                                    if (info.fileName === firstFileName && firstIndex <= info.line && info.line <= lastIndex) {
                                        return true;
                                    }
                                }
                                return false;
                            };
                        }

                        function CapturedTrace(parent) {
                            this._parent = parent;
                            this._promisesCreated = 0;
                            var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
                            captureStackTrace(this, CapturedTrace);
                            if (length > 32) this.uncycle();
                        }
                        util.inherits(CapturedTrace, Error);
                        Context.CapturedTrace = CapturedTrace;

                        CapturedTrace.prototype.uncycle = function () {
                            var length = this._length;
                            if (length < 2) return;
                            var nodes = [];
                            var stackToIndex = {};

                            for (var i = 0, node = this; node !== undefined; ++i) {
                                nodes.push(node);
                                node = node._parent;
                            }
                            length = this._length = i;
                            for (var i = length - 1; i >= 0; --i) {
                                var stack = nodes[i].stack;
                                if (stackToIndex[stack] === undefined) {
                                    stackToIndex[stack] = i;
                                }
                            }
                            for (var i = 0; i < length; ++i) {
                                var currentStack = nodes[i].stack;
                                var index = stackToIndex[currentStack];
                                if (index !== undefined && index !== i) {
                                    if (index > 0) {
                                        nodes[index - 1]._parent = undefined;
                                        nodes[index - 1]._length = 1;
                                    }
                                    nodes[i]._parent = undefined;
                                    nodes[i]._length = 1;
                                    var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

                                    if (index < length - 1) {
                                        cycleEdgeNode._parent = nodes[index + 1];
                                        cycleEdgeNode._parent.uncycle();
                                        cycleEdgeNode._length = cycleEdgeNode._parent._length + 1;
                                    } else {
                                        cycleEdgeNode._parent = undefined;
                                        cycleEdgeNode._length = 1;
                                    }
                                    var currentChildLength = cycleEdgeNode._length + 1;
                                    for (var j = i - 2; j >= 0; --j) {
                                        nodes[j]._length = currentChildLength;
                                        currentChildLength++;
                                    }
                                    return;
                                }
                            }
                        };

                        CapturedTrace.prototype.attachExtraTrace = function (error) {
                            if (error.__stackCleaned__) return;
                            this.uncycle();
                            var parsed = parseStackAndMessage(error);
                            var message = parsed.message;
                            var stacks = [parsed.stack];

                            var trace = this;
                            while (trace !== undefined) {
                                stacks.push(cleanStack(trace.stack.split("\n")));
                                trace = trace._parent;
                            }
                            removeCommonRoots(stacks);
                            removeDuplicateOrEmptyJumps(stacks);
                            util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
                            util.notEnumerableProp(error, "__stackCleaned__", true);
                        };

                        var captureStackTrace = function stackDetection() {
                            var v8stackFramePattern = /^\s*at\s*/;
                            var v8stackFormatter = function (stack, error) {
                                if (typeof stack === "string") return stack;

                                if (error.name !== undefined && error.message !== undefined) {
                                    return error.toString();
                                }
                                return formatNonError(error);
                            };

                            if (typeof Error.stackTraceLimit === "number" && typeof Error.captureStackTrace === "function") {
                                Error.stackTraceLimit += 6;
                                stackFramePattern = v8stackFramePattern;
                                formatStack = v8stackFormatter;
                                var captureStackTrace = Error.captureStackTrace;

                                shouldIgnore = function (line) {
                                    return bluebirdFramePattern.test(line);
                                };
                                return function (receiver, ignoreUntil) {
                                    Error.stackTraceLimit += 6;
                                    captureStackTrace(receiver, ignoreUntil);
                                    Error.stackTraceLimit -= 6;
                                };
                            }
                            var err = new Error();

                            if (typeof err.stack === "string" && err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
                                stackFramePattern = /@/;
                                formatStack = v8stackFormatter;
                                indentStackFrames = true;
                                return function captureStackTrace(o) {
                                    o.stack = new Error().stack;
                                };
                            }

                            var hasStackAfterThrow;
                            try {
                                throw new Error();
                            } catch (e) {
                                hasStackAfterThrow = "stack" in e;
                            }
                            if (!("stack" in err) && hasStackAfterThrow && typeof Error.stackTraceLimit === "number") {
                                stackFramePattern = v8stackFramePattern;
                                formatStack = v8stackFormatter;
                                return function captureStackTrace(o) {
                                    Error.stackTraceLimit += 6;
                                    try {
                                        throw new Error();
                                    } catch (e) {
                                        o.stack = e.stack;
                                    }
                                    Error.stackTraceLimit -= 6;
                                };
                            }

                            formatStack = function (stack, error) {
                                if (typeof stack === "string") return stack;

                                if ((typeof error === "object" || typeof error === "function") && error.name !== undefined && error.message !== undefined) {
                                    return error.toString();
                                }
                                return formatNonError(error);
                            };

                            return null;
                        }([]);

                        if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
                            printWarning = function (message) {
                                console.warn(message);
                            };
                            if (util.isNode && process.stderr.isTTY) {
                                printWarning = function (message, isSoft) {
                                    var color = isSoft ? "\u001b[33m" : "\u001b[31m";
                                    console.warn(color + message + "\u001b[0m\n");
                                };
                            } else if (!util.isNode && typeof new Error().stack === "string") {
                                printWarning = function (message, isSoft) {
                                    console.warn("%c" + message, isSoft ? "color: darkorange" : "color: red");
                                };
                            }
                        }

                        var config = {
                            warnings: warnings,
                            longStackTraces: false,
                            cancellation: false,
                            monitoring: false
                        };

                        if (longStackTraces) Promise.longStackTraces();

                        return {
                            longStackTraces: function () {
                                return config.longStackTraces;
                            },
                            warnings: function () {
                                return config.warnings;
                            },
                            cancellation: function () {
                                return config.cancellation;
                            },
                            monitoring: function () {
                                return config.monitoring;
                            },
                            propagateFromFunction: function () {
                                return propagateFromFunction;
                            },
                            boundValueFunction: function () {
                                return boundValueFunction;
                            },
                            checkForgottenReturns: checkForgottenReturns,
                            setBounds: setBounds,
                            warn: warn,
                            deprecated: deprecated,
                            CapturedTrace: CapturedTrace,
                            fireDomEvent: fireDomEvent,
                            fireGlobalEvent: fireGlobalEvent
                        };
                    };
                }, { "./errors": 12, "./util": 36 }], 10: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        function returner() {
                            return this.value;
                        }
                        function thrower() {
                            throw this.reason;
                        }

                        Promise.prototype["return"] = Promise.prototype.thenReturn = function (value) {
                            if (value instanceof Promise) value.suppressUnhandledRejections();
                            return this._then(returner, undefined, undefined, { value: value }, undefined);
                        };

                        Promise.prototype["throw"] = Promise.prototype.thenThrow = function (reason) {
                            return this._then(thrower, undefined, undefined, { reason: reason }, undefined);
                        };

                        Promise.prototype.catchThrow = function (reason) {
                            if (arguments.length <= 1) {
                                return this._then(undefined, thrower, undefined, { reason: reason }, undefined);
                            } else {
                                var _reason = arguments[1];
                                var handler = function () {
                                    throw _reason;
                                };
                                return this.caught(reason, handler);
                            }
                        };

                        Promise.prototype.catchReturn = function (value) {
                            if (arguments.length <= 1) {
                                if (value instanceof Promise) value.suppressUnhandledRejections();
                                return this._then(undefined, returner, undefined, { value: value }, undefined);
                            } else {
                                var _value = arguments[1];
                                if (_value instanceof Promise) _value.suppressUnhandledRejections();
                                var handler = function () {
                                    return _value;
                                };
                                return this.caught(value, handler);
                            }
                        };
                    };
                }, {}], 11: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var PromiseReduce = Promise.reduce;
                        var PromiseAll = Promise.all;

                        function promiseAllThis() {
                            return PromiseAll(this);
                        }

                        function PromiseMapSeries(promises, fn) {
                            return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
                        }

                        Promise.prototype.each = function (fn) {
                            return PromiseReduce(this, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, this, undefined);
                        };

                        Promise.prototype.mapSeries = function (fn) {
                            return PromiseReduce(this, fn, INTERNAL, INTERNAL);
                        };

                        Promise.each = function (promises, fn) {
                            return PromiseReduce(promises, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, promises, undefined);
                        };

                        Promise.mapSeries = PromiseMapSeries;
                    };
                }, {}], 12: [function (_dereq_, module, exports) {
                    "use strict";

                    var es5 = _dereq_("./es5");
                    var Objectfreeze = es5.freeze;
                    var util = _dereq_("./util");
                    var inherits = util.inherits;
                    var notEnumerableProp = util.notEnumerableProp;

                    function subError(nameProperty, defaultMessage) {
                        function SubError(message) {
                            if (!(this instanceof SubError)) return new SubError(message);
                            notEnumerableProp(this, "message", typeof message === "string" ? message : defaultMessage);
                            notEnumerableProp(this, "name", nameProperty);
                            if (Error.captureStackTrace) {
                                Error.captureStackTrace(this, this.constructor);
                            } else {
                                Error.call(this);
                            }
                        }
                        inherits(SubError, Error);
                        return SubError;
                    }

                    var _TypeError, _RangeError;
                    var Warning = subError("Warning", "warning");
                    var CancellationError = subError("CancellationError", "cancellation error");
                    var TimeoutError = subError("TimeoutError", "timeout error");
                    var AggregateError = subError("AggregateError", "aggregate error");
                    try {
                        _TypeError = TypeError;
                        _RangeError = RangeError;
                    } catch (e) {
                        _TypeError = subError("TypeError", "type error");
                        _RangeError = subError("RangeError", "range error");
                    }

                    var methods = ("join pop push shift unshift slice filter forEach some " + "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

                    for (var i = 0; i < methods.length; ++i) {
                        if (typeof Array.prototype[methods[i]] === "function") {
                            AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
                        }
                    }

                    es5.defineProperty(AggregateError.prototype, "length", {
                        value: 0,
                        configurable: false,
                        writable: true,
                        enumerable: true
                    });
                    AggregateError.prototype["isOperational"] = true;
                    var level = 0;
                    AggregateError.prototype.toString = function () {
                        var indent = Array(level * 4 + 1).join(" ");
                        var ret = "\n" + indent + "AggregateError of:" + "\n";
                        level++;
                        indent = Array(level * 4 + 1).join(" ");
                        for (var i = 0; i < this.length; ++i) {
                            var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
                            var lines = str.split("\n");
                            for (var j = 0; j < lines.length; ++j) {
                                lines[j] = indent + lines[j];
                            }
                            str = lines.join("\n");
                            ret += str + "\n";
                        }
                        level--;
                        return ret;
                    };

                    function OperationalError(message) {
                        if (!(this instanceof OperationalError)) return new OperationalError(message);
                        notEnumerableProp(this, "name", "OperationalError");
                        notEnumerableProp(this, "message", message);
                        this.cause = message;
                        this["isOperational"] = true;

                        if (message instanceof Error) {
                            notEnumerableProp(this, "message", message.message);
                            notEnumerableProp(this, "stack", message.stack);
                        } else if (Error.captureStackTrace) {
                            Error.captureStackTrace(this, this.constructor);
                        }
                    }
                    inherits(OperationalError, Error);

                    var errorTypes = Error["__BluebirdErrorTypes__"];
                    if (!errorTypes) {
                        errorTypes = Objectfreeze({
                            CancellationError: CancellationError,
                            TimeoutError: TimeoutError,
                            OperationalError: OperationalError,
                            RejectionError: OperationalError,
                            AggregateError: AggregateError
                        });
                        es5.defineProperty(Error, "__BluebirdErrorTypes__", {
                            value: errorTypes,
                            writable: false,
                            enumerable: false,
                            configurable: false
                        });
                    }

                    module.exports = {
                        Error: Error,
                        TypeError: _TypeError,
                        RangeError: _RangeError,
                        CancellationError: errorTypes.CancellationError,
                        OperationalError: errorTypes.OperationalError,
                        TimeoutError: errorTypes.TimeoutError,
                        AggregateError: errorTypes.AggregateError,
                        Warning: Warning
                    };
                }, { "./es5": 13, "./util": 36 }], 13: [function (_dereq_, module, exports) {
                    var isES5 = function () {
                        "use strict";

                        return this === undefined;
                    }();

                    if (isES5) {
                        module.exports = {
                            freeze: Object.freeze,
                            defineProperty: Object.defineProperty,
                            getDescriptor: Object.getOwnPropertyDescriptor,
                            keys: Object.keys,
                            names: Object.getOwnPropertyNames,
                            getPrototypeOf: Object.getPrototypeOf,
                            isArray: Array.isArray,
                            isES5: isES5,
                            propertyIsWritable: function (obj, prop) {
                                var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
                                return !!(!descriptor || descriptor.writable || descriptor.set);
                            }
                        };
                    } else {
                        var has = {}.hasOwnProperty;
                        var str = {}.toString;
                        var proto = {}.constructor.prototype;

                        var ObjectKeys = function (o) {
                            var ret = [];
                            for (var key in o) {
                                if (has.call(o, key)) {
                                    ret.push(key);
                                }
                            }
                            return ret;
                        };

                        var ObjectGetDescriptor = function (o, key) {
                            return { value: o[key] };
                        };

                        var ObjectDefineProperty = function (o, key, desc) {
                            o[key] = desc.value;
                            return o;
                        };

                        var ObjectFreeze = function (obj) {
                            return obj;
                        };

                        var ObjectGetPrototypeOf = function (obj) {
                            try {
                                return Object(obj).constructor.prototype;
                            } catch (e) {
                                return proto;
                            }
                        };

                        var ArrayIsArray = function (obj) {
                            try {
                                return str.call(obj) === "[object Array]";
                            } catch (e) {
                                return false;
                            }
                        };

                        module.exports = {
                            isArray: ArrayIsArray,
                            keys: ObjectKeys,
                            names: ObjectKeys,
                            defineProperty: ObjectDefineProperty,
                            getDescriptor: ObjectGetDescriptor,
                            freeze: ObjectFreeze,
                            getPrototypeOf: ObjectGetPrototypeOf,
                            isES5: isES5,
                            propertyIsWritable: function () {
                                return true;
                            }
                        };
                    }
                }, {}], 14: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var PromiseMap = Promise.map;

                        Promise.prototype.filter = function (fn, options) {
                            return PromiseMap(this, fn, options, INTERNAL);
                        };

                        Promise.filter = function (promises, fn, options) {
                            return PromiseMap(promises, fn, options, INTERNAL);
                        };
                    };
                }, {}], 15: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, tryConvertToPromise) {
                        var util = _dereq_("./util");
                        var CancellationError = Promise.CancellationError;
                        var errorObj = util.errorObj;

                        function PassThroughHandlerContext(promise, type, handler) {
                            this.promise = promise;
                            this.type = type;
                            this.handler = handler;
                            this.called = false;
                            this.cancelPromise = null;
                        }

                        PassThroughHandlerContext.prototype.isFinallyHandler = function () {
                            return this.type === 0;
                        };

                        function FinallyHandlerCancelReaction(finallyHandler) {
                            this.finallyHandler = finallyHandler;
                        }

                        FinallyHandlerCancelReaction.prototype._resultCancelled = function () {
                            checkCancel(this.finallyHandler);
                        };

                        function checkCancel(ctx, reason) {
                            if (ctx.cancelPromise != null) {
                                if (arguments.length > 1) {
                                    ctx.cancelPromise._reject(reason);
                                } else {
                                    ctx.cancelPromise._cancel();
                                }
                                ctx.cancelPromise = null;
                                return true;
                            }
                            return false;
                        }

                        function succeed() {
                            return finallyHandler.call(this, this.promise._target()._settledValue());
                        }
                        function fail(reason) {
                            if (checkCancel(this, reason)) return;
                            errorObj.e = reason;
                            return errorObj;
                        }
                        function finallyHandler(reasonOrValue) {
                            var promise = this.promise;
                            var handler = this.handler;

                            if (!this.called) {
                                this.called = true;
                                var ret = this.isFinallyHandler() ? handler.call(promise._boundValue()) : handler.call(promise._boundValue(), reasonOrValue);
                                if (ret !== undefined) {
                                    promise._setReturnedNonUndefined();
                                    var maybePromise = tryConvertToPromise(ret, promise);
                                    if (maybePromise instanceof Promise) {
                                        if (this.cancelPromise != null) {
                                            if (maybePromise._isCancelled()) {
                                                var reason = new CancellationError("late cancellation observer");
                                                promise._attachExtraTrace(reason);
                                                errorObj.e = reason;
                                                return errorObj;
                                            } else if (maybePromise.isPending()) {
                                                maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));
                                            }
                                        }
                                        return maybePromise._then(succeed, fail, undefined, this, undefined);
                                    }
                                }
                            }

                            if (promise.isRejected()) {
                                checkCancel(this);
                                errorObj.e = reasonOrValue;
                                return errorObj;
                            } else {
                                checkCancel(this);
                                return reasonOrValue;
                            }
                        }

                        Promise.prototype._passThrough = function (handler, type, success, fail) {
                            if (typeof handler !== "function") return this.then();
                            return this._then(success, fail, undefined, new PassThroughHandlerContext(this, type, handler), undefined);
                        };

                        Promise.prototype.lastly = Promise.prototype["finally"] = function (handler) {
                            return this._passThrough(handler, 0, finallyHandler, finallyHandler);
                        };

                        Promise.prototype.tap = function (handler) {
                            return this._passThrough(handler, 1, finallyHandler);
                        };

                        return PassThroughHandlerContext;
                    };
                }, { "./util": 36 }], 16: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug) {
                        var errors = _dereq_("./errors");
                        var TypeError = errors.TypeError;
                        var util = _dereq_("./util");
                        var errorObj = util.errorObj;
                        var tryCatch = util.tryCatch;
                        var yieldHandlers = [];

                        function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
                            for (var i = 0; i < yieldHandlers.length; ++i) {
                                traceParent._pushContext();
                                var result = tryCatch(yieldHandlers[i])(value);
                                traceParent._popContext();
                                if (result === errorObj) {
                                    traceParent._pushContext();
                                    var ret = Promise.reject(errorObj.e);
                                    traceParent._popContext();
                                    return ret;
                                }
                                var maybePromise = tryConvertToPromise(result, traceParent);
                                if (maybePromise instanceof Promise) return maybePromise;
                            }
                            return null;
                        }

                        function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
                            if (debug.cancellation()) {
                                var internal = new Promise(INTERNAL);
                                var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
                                this._promise = internal.lastly(function () {
                                    return _finallyPromise;
                                });
                                internal._captureStackTrace();
                                internal._setOnCancel(this);
                            } else {
                                var promise = this._promise = new Promise(INTERNAL);
                                promise._captureStackTrace();
                            }
                            this._stack = stack;
                            this._generatorFunction = generatorFunction;
                            this._receiver = receiver;
                            this._generator = undefined;
                            this._yieldHandlers = typeof yieldHandler === "function" ? [yieldHandler].concat(yieldHandlers) : yieldHandlers;
                            this._yieldedPromise = null;
                            this._cancellationPhase = false;
                        }
                        util.inherits(PromiseSpawn, Proxyable);

                        PromiseSpawn.prototype._isResolved = function () {
                            return this._promise === null;
                        };

                        PromiseSpawn.prototype._cleanup = function () {
                            this._promise = this._generator = null;
                            if (debug.cancellation() && this._finallyPromise !== null) {
                                this._finallyPromise._fulfill();
                                this._finallyPromise = null;
                            }
                        };

                        PromiseSpawn.prototype._promiseCancelled = function () {
                            if (this._isResolved()) return;
                            var implementsReturn = typeof this._generator["return"] !== "undefined";

                            var result;
                            if (!implementsReturn) {
                                var reason = new Promise.CancellationError("generator .return() sentinel");
                                Promise.coroutine.returnSentinel = reason;
                                this._promise._attachExtraTrace(reason);
                                this._promise._pushContext();
                                result = tryCatch(this._generator["throw"]).call(this._generator, reason);
                                this._promise._popContext();
                            } else {
                                this._promise._pushContext();
                                result = tryCatch(this._generator["return"]).call(this._generator, undefined);
                                this._promise._popContext();
                            }
                            this._cancellationPhase = true;
                            this._yieldedPromise = null;
                            this._continue(result);
                        };

                        PromiseSpawn.prototype._promiseFulfilled = function (value) {
                            this._yieldedPromise = null;
                            this._promise._pushContext();
                            var result = tryCatch(this._generator.next).call(this._generator, value);
                            this._promise._popContext();
                            this._continue(result);
                        };

                        PromiseSpawn.prototype._promiseRejected = function (reason) {
                            this._yieldedPromise = null;
                            this._promise._attachExtraTrace(reason);
                            this._promise._pushContext();
                            var result = tryCatch(this._generator["throw"]).call(this._generator, reason);
                            this._promise._popContext();
                            this._continue(result);
                        };

                        PromiseSpawn.prototype._resultCancelled = function () {
                            if (this._yieldedPromise instanceof Promise) {
                                var promise = this._yieldedPromise;
                                this._yieldedPromise = null;
                                promise.cancel();
                            }
                        };

                        PromiseSpawn.prototype.promise = function () {
                            return this._promise;
                        };

                        PromiseSpawn.prototype._run = function () {
                            this._generator = this._generatorFunction.call(this._receiver);
                            this._receiver = this._generatorFunction = undefined;
                            this._promiseFulfilled(undefined);
                        };

                        PromiseSpawn.prototype._continue = function (result) {
                            var promise = this._promise;
                            if (result === errorObj) {
                                this._cleanup();
                                if (this._cancellationPhase) {
                                    return promise.cancel();
                                } else {
                                    return promise._rejectCallback(result.e, false);
                                }
                            }

                            var value = result.value;
                            if (result.done === true) {
                                this._cleanup();
                                if (this._cancellationPhase) {
                                    return promise.cancel();
                                } else {
                                    return promise._resolveCallback(value);
                                }
                            } else {
                                var maybePromise = tryConvertToPromise(value, this._promise);
                                if (!(maybePromise instanceof Promise)) {
                                    maybePromise = promiseFromYieldHandler(maybePromise, this._yieldHandlers, this._promise);
                                    if (maybePromise === null) {
                                        this._promiseRejected(new TypeError("A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", value) + "From coroutine:\u000a" + this._stack.split("\n").slice(1, -7).join("\n")));
                                        return;
                                    }
                                }
                                maybePromise = maybePromise._target();
                                var bitField = maybePromise._bitField;
                                ;
                                if ((bitField & 50397184) === 0) {
                                    this._yieldedPromise = maybePromise;
                                    maybePromise._proxy(this, null);
                                } else if ((bitField & 33554432) !== 0) {
                                    Promise._async.invoke(this._promiseFulfilled, this, maybePromise._value());
                                } else if ((bitField & 16777216) !== 0) {
                                    Promise._async.invoke(this._promiseRejected, this, maybePromise._reason());
                                } else {
                                    this._promiseCancelled();
                                }
                            }
                        };

                        Promise.coroutine = function (generatorFunction, options) {
                            if (typeof generatorFunction !== "function") {
                                throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            var yieldHandler = Object(options).yieldHandler;
                            var PromiseSpawn$ = PromiseSpawn;
                            var stack = new Error().stack;
                            return function () {
                                var generator = generatorFunction.apply(this, arguments);
                                var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler, stack);
                                var ret = spawn.promise();
                                spawn._generator = generator;
                                spawn._promiseFulfilled(undefined);
                                return ret;
                            };
                        };

                        Promise.coroutine.addYieldHandler = function (fn) {
                            if (typeof fn !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(fn));
                            }
                            yieldHandlers.push(fn);
                        };

                        Promise.spawn = function (generatorFunction) {
                            debug.deprecated("Promise.spawn()", "Promise.coroutine()");
                            if (typeof generatorFunction !== "function") {
                                return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            var spawn = new PromiseSpawn(generatorFunction, this);
                            var ret = spawn.promise();
                            spawn._run(Promise.spawn);
                            return ret;
                        };
                    };
                }, { "./errors": 12, "./util": 36 }], 17: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain) {
                        var util = _dereq_("./util");
                        var canEvaluate = util.canEvaluate;
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;
                        var reject;

                        if (!true) {
                            if (canEvaluate) {
                                var thenCallback = function (i) {
                                    return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
                                };

                                var promiseSetter = function (i) {
                                    return new Function("promise", "holder", "                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g, i));
                                };

                                var generateHolderClass = function (total) {
                                    var props = new Array(total);
                                    for (var i = 0; i < props.length; ++i) {
                                        props[i] = "this.p" + (i + 1);
                                    }
                                    var assignment = props.join(" = ") + " = null;";
                                    var cancellationCode = "var promise;\n" + props.map(function (prop) {
                                        return "                                                         \n\
                promise = " + prop + ";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";
                                    }).join("\n");
                                    var passedArguments = props.join(", ");
                                    var name = "Holder$" + total;

                                    var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.asyncNeeded = true;                                     \n\
                this.now = 0;                                                \n\
            }                                                                \n\
                                                                             \n\
            [TheName].prototype._callFunction = function(promise) {          \n\
                promise._pushContext();                                      \n\
                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
                promise._popContext();                                       \n\
                if (ret === errorObj) {                                      \n\
                    promise._rejectCallback(ret.e, false);                   \n\
                } else {                                                     \n\
                    promise._resolveCallback(ret);                           \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    if (this.asyncNeeded) {                                  \n\
                        async.invoke(this._callFunction, this, promise);     \n\
                    } else {                                                 \n\
                        this._callFunction(promise);                         \n\
                    }                                                        \n\
                                                                             \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise, async);                               \n\
        ";

                                    code = code.replace(/\[TheName\]/g, name).replace(/\[TheTotal\]/g, total).replace(/\[ThePassedArguments\]/g, passedArguments).replace(/\[TheProperties\]/g, assignment).replace(/\[CancellationCode\]/g, cancellationCode);

                                    return new Function("tryCatch", "errorObj", "Promise", "async", code)(tryCatch, errorObj, Promise, async);
                                };

                                var holderClasses = [];
                                var thenCallbacks = [];
                                var promiseSetters = [];

                                for (var i = 0; i < 8; ++i) {
                                    holderClasses.push(generateHolderClass(i + 1));
                                    thenCallbacks.push(thenCallback(i + 1));
                                    promiseSetters.push(promiseSetter(i + 1));
                                }

                                reject = function (reason) {
                                    this._reject(reason);
                                };
                            }
                        }

                        Promise.join = function () {
                            var last = arguments.length - 1;
                            var fn;
                            if (last > 0 && typeof arguments[last] === "function") {
                                fn = arguments[last];
                                if (!true) {
                                    if (last <= 8 && canEvaluate) {
                                        var ret = new Promise(INTERNAL);
                                        ret._captureStackTrace();
                                        var HolderClass = holderClasses[last - 1];
                                        var holder = new HolderClass(fn);
                                        var callbacks = thenCallbacks;

                                        for (var i = 0; i < last; ++i) {
                                            var maybePromise = tryConvertToPromise(arguments[i], ret);
                                            if (maybePromise instanceof Promise) {
                                                maybePromise = maybePromise._target();
                                                var bitField = maybePromise._bitField;
                                                ;
                                                if ((bitField & 50397184) === 0) {
                                                    maybePromise._then(callbacks[i], reject, undefined, ret, holder);
                                                    promiseSetters[i](maybePromise, holder);
                                                    holder.asyncNeeded = false;
                                                } else if ((bitField & 33554432) !== 0) {
                                                    callbacks[i].call(ret, maybePromise._value(), holder);
                                                } else if ((bitField & 16777216) !== 0) {
                                                    ret._reject(maybePromise._reason());
                                                } else {
                                                    ret._cancel();
                                                }
                                            } else {
                                                callbacks[i].call(ret, maybePromise, holder);
                                            }
                                        }

                                        if (!ret._isFateSealed()) {
                                            if (holder.asyncNeeded) {
                                                var domain = getDomain();
                                                if (domain !== null) {
                                                    holder.fn = util.domainBind(domain, holder.fn);
                                                }
                                            }
                                            ret._setAsyncGuaranteed();
                                            ret._setOnCancel(holder);
                                        }
                                        return ret;
                                    }
                                }
                            }
                            var args = [].slice.call(arguments);;
                            if (fn) args.pop();
                            var ret = new PromiseArray(args).promise();
                            return fn !== undefined ? ret.spread(fn) : ret;
                        };
                    };
                }, { "./util": 36 }], 18: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                        var getDomain = Promise._getDomain;
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;
                        var async = Promise._async;

                        function MappingPromiseArray(promises, fn, limit, _filter) {
                            this.constructor$(promises);
                            this._promise._captureStackTrace();
                            var domain = getDomain();
                            this._callback = domain === null ? fn : util.domainBind(domain, fn);
                            this._preservedValues = _filter === INTERNAL ? new Array(this.length()) : null;
                            this._limit = limit;
                            this._inFlight = 0;
                            this._queue = [];
                            async.invoke(this._asyncInit, this, undefined);
                        }
                        util.inherits(MappingPromiseArray, PromiseArray);

                        MappingPromiseArray.prototype._asyncInit = function () {
                            this._init$(undefined, -2);
                        };

                        MappingPromiseArray.prototype._init = function () {};

                        MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
                            var values = this._values;
                            var length = this.length();
                            var preservedValues = this._preservedValues;
                            var limit = this._limit;

                            if (index < 0) {
                                index = index * -1 - 1;
                                values[index] = value;
                                if (limit >= 1) {
                                    this._inFlight--;
                                    this._drainQueue();
                                    if (this._isResolved()) return true;
                                }
                            } else {
                                if (limit >= 1 && this._inFlight >= limit) {
                                    values[index] = value;
                                    this._queue.push(index);
                                    return false;
                                }
                                if (preservedValues !== null) preservedValues[index] = value;

                                var promise = this._promise;
                                var callback = this._callback;
                                var receiver = promise._boundValue();
                                promise._pushContext();
                                var ret = tryCatch(callback).call(receiver, value, index, length);
                                var promiseCreated = promise._popContext();
                                debug.checkForgottenReturns(ret, promiseCreated, preservedValues !== null ? "Promise.filter" : "Promise.map", promise);
                                if (ret === errorObj) {
                                    this._reject(ret.e);
                                    return true;
                                }

                                var maybePromise = tryConvertToPromise(ret, this._promise);
                                if (maybePromise instanceof Promise) {
                                    maybePromise = maybePromise._target();
                                    var bitField = maybePromise._bitField;
                                    ;
                                    if ((bitField & 50397184) === 0) {
                                        if (limit >= 1) this._inFlight++;
                                        values[index] = maybePromise;
                                        maybePromise._proxy(this, (index + 1) * -1);
                                        return false;
                                    } else if ((bitField & 33554432) !== 0) {
                                        ret = maybePromise._value();
                                    } else if ((bitField & 16777216) !== 0) {
                                        this._reject(maybePromise._reason());
                                        return true;
                                    } else {
                                        this._cancel();
                                        return true;
                                    }
                                }
                                values[index] = ret;
                            }
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= length) {
                                if (preservedValues !== null) {
                                    this._filter(values, preservedValues);
                                } else {
                                    this._resolve(values);
                                }
                                return true;
                            }
                            return false;
                        };

                        MappingPromiseArray.prototype._drainQueue = function () {
                            var queue = this._queue;
                            var limit = this._limit;
                            var values = this._values;
                            while (queue.length > 0 && this._inFlight < limit) {
                                if (this._isResolved()) return;
                                var index = queue.pop();
                                this._promiseFulfilled(values[index], index);
                            }
                        };

                        MappingPromiseArray.prototype._filter = function (booleans, values) {
                            var len = values.length;
                            var ret = new Array(len);
                            var j = 0;
                            for (var i = 0; i < len; ++i) {
                                if (booleans[i]) ret[j++] = values[i];
                            }
                            ret.length = j;
                            this._resolve(ret);
                        };

                        MappingPromiseArray.prototype.preservedValues = function () {
                            return this._preservedValues;
                        };

                        function map(promises, fn, options, _filter) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }

                            var limit = 0;
                            if (options !== undefined) {
                                if (typeof options === "object" && options !== null) {
                                    if (typeof options.concurrency !== "number") {
                                        return Promise.reject(new TypeError("'concurrency' must be a number but it is " + util.classString(options.concurrency)));
                                    }
                                    limit = options.concurrency;
                                } else {
                                    return Promise.reject(new TypeError("options argument must be an object but it is " + util.classString(options)));
                                }
                            }
                            limit = typeof limit === "number" && isFinite(limit) && limit >= 1 ? limit : 0;
                            return new MappingPromiseArray(promises, fn, limit, _filter).promise();
                        }

                        Promise.prototype.map = function (fn, options) {
                            return map(this, fn, options, null);
                        };

                        Promise.map = function (promises, fn, options, _filter) {
                            return map(promises, fn, options, _filter);
                        };
                    };
                }, { "./util": 36 }], 19: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;

                        Promise.method = function (fn) {
                            if (typeof fn !== "function") {
                                throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
                            }
                            return function () {
                                var ret = new Promise(INTERNAL);
                                ret._captureStackTrace();
                                ret._pushContext();
                                var value = tryCatch(fn).apply(this, arguments);
                                var promiseCreated = ret._popContext();
                                debug.checkForgottenReturns(value, promiseCreated, "Promise.method", ret);
                                ret._resolveFromSyncValue(value);
                                return ret;
                            };
                        };

                        Promise.attempt = Promise["try"] = function (fn) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            var ret = new Promise(INTERNAL);
                            ret._captureStackTrace();
                            ret._pushContext();
                            var value;
                            if (arguments.length > 1) {
                                debug.deprecated("calling Promise.try with more than 1 argument");
                                var arg = arguments[1];
                                var ctx = arguments[2];
                                value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg) : tryCatch(fn).call(ctx, arg);
                            } else {
                                value = tryCatch(fn)();
                            }
                            var promiseCreated = ret._popContext();
                            debug.checkForgottenReturns(value, promiseCreated, "Promise.try", ret);
                            ret._resolveFromSyncValue(value);
                            return ret;
                        };

                        Promise.prototype._resolveFromSyncValue = function (value) {
                            if (value === util.errorObj) {
                                this._rejectCallback(value.e, false);
                            } else {
                                this._resolveCallback(value, true);
                            }
                        };
                    };
                }, { "./util": 36 }], 20: [function (_dereq_, module, exports) {
                    "use strict";

                    var util = _dereq_("./util");
                    var maybeWrapAsError = util.maybeWrapAsError;
                    var errors = _dereq_("./errors");
                    var OperationalError = errors.OperationalError;
                    var es5 = _dereq_("./es5");

                    function isUntypedError(obj) {
                        return obj instanceof Error && es5.getPrototypeOf(obj) === Error.prototype;
                    }

                    var rErrorKey = /^(?:name|message|stack|cause)$/;
                    function wrapAsOperationalError(obj) {
                        var ret;
                        if (isUntypedError(obj)) {
                            ret = new OperationalError(obj);
                            ret.name = obj.name;
                            ret.message = obj.message;
                            ret.stack = obj.stack;
                            var keys = es5.keys(obj);
                            for (var i = 0; i < keys.length; ++i) {
                                var key = keys[i];
                                if (!rErrorKey.test(key)) {
                                    ret[key] = obj[key];
                                }
                            }
                            return ret;
                        }
                        util.markAsOriginatingFromRejection(obj);
                        return obj;
                    }

                    function nodebackForPromise(promise, multiArgs) {
                        return function (err, value) {
                            if (promise === null) return;
                            if (err) {
                                var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
                                promise._attachExtraTrace(wrapped);
                                promise._reject(wrapped);
                            } else if (!multiArgs) {
                                promise._fulfill(value);
                            } else {
                                var args = [].slice.call(arguments, 1);;
                                promise._fulfill(args);
                            }
                            promise = null;
                        };
                    }

                    module.exports = nodebackForPromise;
                }, { "./errors": 12, "./es5": 13, "./util": 36 }], 21: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        var util = _dereq_("./util");
                        var async = Promise._async;
                        var tryCatch = util.tryCatch;
                        var errorObj = util.errorObj;

                        function spreadAdapter(val, nodeback) {
                            var promise = this;
                            if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
                            var ret = tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
                            if (ret === errorObj) {
                                async.throwLater(ret.e);
                            }
                        }

                        function successAdapter(val, nodeback) {
                            var promise = this;
                            var receiver = promise._boundValue();
                            var ret = val === undefined ? tryCatch(nodeback).call(receiver, null) : tryCatch(nodeback).call(receiver, null, val);
                            if (ret === errorObj) {
                                async.throwLater(ret.e);
                            }
                        }
                        function errorAdapter(reason, nodeback) {
                            var promise = this;
                            if (!reason) {
                                var newReason = new Error(reason + "");
                                newReason.cause = reason;
                                reason = newReason;
                            }
                            var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
                            if (ret === errorObj) {
                                async.throwLater(ret.e);
                            }
                        }

                        Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback, options) {
                            if (typeof nodeback == "function") {
                                var adapter = successAdapter;
                                if (options !== undefined && Object(options).spread) {
                                    adapter = spreadAdapter;
                                }
                                this._then(adapter, errorAdapter, undefined, this, nodeback);
                            }
                            return this;
                        };
                    };
                }, { "./util": 36 }], 22: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function () {
                        var makeSelfResolutionError = function () {
                            return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                        };
                        var reflectHandler = function () {
                            return new Promise.PromiseInspection(this._target());
                        };
                        var apiRejection = function (msg) {
                            return Promise.reject(new TypeError(msg));
                        };
                        function Proxyable() {}
                        var UNDEFINED_BINDING = {};
                        var util = _dereq_("./util");

                        var getDomain;
                        if (util.isNode) {
                            getDomain = function () {
                                var ret = process.domain;
                                if (ret === undefined) ret = null;
                                return ret;
                            };
                        } else {
                            getDomain = function () {
                                return null;
                            };
                        }
                        util.notEnumerableProp(Promise, "_getDomain", getDomain);

                        var es5 = _dereq_("./es5");
                        var Async = _dereq_("./async");
                        var async = new Async();
                        es5.defineProperty(Promise, "_async", { value: async });
                        var errors = _dereq_("./errors");
                        var TypeError = Promise.TypeError = errors.TypeError;
                        Promise.RangeError = errors.RangeError;
                        var CancellationError = Promise.CancellationError = errors.CancellationError;
                        Promise.TimeoutError = errors.TimeoutError;
                        Promise.OperationalError = errors.OperationalError;
                        Promise.RejectionError = errors.OperationalError;
                        Promise.AggregateError = errors.AggregateError;
                        var INTERNAL = function () {};
                        var APPLY = {};
                        var NEXT_FILTER = {};
                        var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
                        var PromiseArray = _dereq_("./promise_array")(Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable);
                        var Context = _dereq_("./context")(Promise);
                        /*jshint unused:false*/
                        var createContext = Context.create;
                        var debug = _dereq_("./debuggability")(Promise, Context);
                        var CapturedTrace = debug.CapturedTrace;
                        var PassThroughHandlerContext = _dereq_("./finally")(Promise, tryConvertToPromise);
                        var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
                        var nodebackForPromise = _dereq_("./nodeback");
                        var errorObj = util.errorObj;
                        var tryCatch = util.tryCatch;
                        function check(self, executor) {
                            if (typeof executor !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(executor));
                            }
                            if (self.constructor !== Promise) {
                                throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                        }

                        function Promise(executor) {
                            this._bitField = 0;
                            this._fulfillmentHandler0 = undefined;
                            this._rejectionHandler0 = undefined;
                            this._promise0 = undefined;
                            this._receiver0 = undefined;
                            if (executor !== INTERNAL) {
                                check(this, executor);
                                this._resolveFromExecutor(executor);
                            }
                            this._promiseCreated();
                            this._fireEvent("promiseCreated", this);
                        }

                        Promise.prototype.toString = function () {
                            return "[object Promise]";
                        };

                        Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
                            var len = arguments.length;
                            if (len > 1) {
                                var catchInstances = new Array(len - 1),
                                    j = 0,
                                    i;
                                for (i = 0; i < len - 1; ++i) {
                                    var item = arguments[i];
                                    if (util.isObject(item)) {
                                        catchInstances[j++] = item;
                                    } else {
                                        return apiRejection("expecting an object but got " + "A catch statement predicate " + util.classString(item));
                                    }
                                }
                                catchInstances.length = j;
                                fn = arguments[i];
                                return this.then(undefined, catchFilter(catchInstances, fn, this));
                            }
                            return this.then(undefined, fn);
                        };

                        Promise.prototype.reflect = function () {
                            return this._then(reflectHandler, reflectHandler, undefined, this, undefined);
                        };

                        Promise.prototype.then = function (didFulfill, didReject) {
                            if (debug.warnings() && arguments.length > 0 && typeof didFulfill !== "function" && typeof didReject !== "function") {
                                var msg = ".then() only accepts functions but was passed: " + util.classString(didFulfill);
                                if (arguments.length > 1) {
                                    msg += ", " + util.classString(didReject);
                                }
                                this._warn(msg);
                            }
                            return this._then(didFulfill, didReject, undefined, undefined, undefined);
                        };

                        Promise.prototype.done = function (didFulfill, didReject) {
                            var promise = this._then(didFulfill, didReject, undefined, undefined, undefined);
                            promise._setIsFinal();
                        };

                        Promise.prototype.spread = function (fn) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            return this.all()._then(fn, undefined, undefined, APPLY, undefined);
                        };

                        Promise.prototype.toJSON = function () {
                            var ret = {
                                isFulfilled: false,
                                isRejected: false,
                                fulfillmentValue: undefined,
                                rejectionReason: undefined
                            };
                            if (this.isFulfilled()) {
                                ret.fulfillmentValue = this.value();
                                ret.isFulfilled = true;
                            } else if (this.isRejected()) {
                                ret.rejectionReason = this.reason();
                                ret.isRejected = true;
                            }
                            return ret;
                        };

                        Promise.prototype.all = function () {
                            if (arguments.length > 0) {
                                this._warn(".all() was passed arguments but it does not take any");
                            }
                            return new PromiseArray(this).promise();
                        };

                        Promise.prototype.error = function (fn) {
                            return this.caught(util.originatesFromRejection, fn);
                        };

                        Promise.getNewLibraryCopy = module.exports;

                        Promise.is = function (val) {
                            return val instanceof Promise;
                        };

                        Promise.fromNode = Promise.fromCallback = function (fn) {
                            var ret = new Promise(INTERNAL);
                            ret._captureStackTrace();
                            var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : false;
                            var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
                            if (result === errorObj) {
                                ret._rejectCallback(result.e, true);
                            }
                            if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
                            return ret;
                        };

                        Promise.all = function (promises) {
                            return new PromiseArray(promises).promise();
                        };

                        Promise.cast = function (obj) {
                            var ret = tryConvertToPromise(obj);
                            if (!(ret instanceof Promise)) {
                                ret = new Promise(INTERNAL);
                                ret._captureStackTrace();
                                ret._setFulfilled();
                                ret._rejectionHandler0 = obj;
                            }
                            return ret;
                        };

                        Promise.resolve = Promise.fulfilled = Promise.cast;

                        Promise.reject = Promise.rejected = function (reason) {
                            var ret = new Promise(INTERNAL);
                            ret._captureStackTrace();
                            ret._rejectCallback(reason, true);
                            return ret;
                        };

                        Promise.setScheduler = function (fn) {
                            if (typeof fn !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(fn));
                            }
                            return async.setScheduler(fn);
                        };

                        Promise.prototype._then = function (didFulfill, didReject, _, receiver, internalData) {
                            var haveInternalData = internalData !== undefined;
                            var promise = haveInternalData ? internalData : new Promise(INTERNAL);
                            var target = this._target();
                            var bitField = target._bitField;

                            if (!haveInternalData) {
                                promise._propagateFrom(this, 3);
                                promise._captureStackTrace();
                                if (receiver === undefined && (this._bitField & 2097152) !== 0) {
                                    if (!((bitField & 50397184) === 0)) {
                                        receiver = this._boundValue();
                                    } else {
                                        receiver = target === this ? undefined : this._boundTo;
                                    }
                                }
                                this._fireEvent("promiseChained", this, promise);
                            }

                            var domain = getDomain();
                            if (!((bitField & 50397184) === 0)) {
                                var handler,
                                    value,
                                    settler = target._settlePromiseCtx;
                                if ((bitField & 33554432) !== 0) {
                                    value = target._rejectionHandler0;
                                    handler = didFulfill;
                                } else if ((bitField & 16777216) !== 0) {
                                    value = target._fulfillmentHandler0;
                                    handler = didReject;
                                    target._unsetRejectionIsUnhandled();
                                } else {
                                    settler = target._settlePromiseLateCancellationObserver;
                                    value = new CancellationError("late cancellation observer");
                                    target._attachExtraTrace(value);
                                    handler = didReject;
                                }

                                async.invoke(settler, target, {
                                    handler: domain === null ? handler : typeof handler === "function" && util.domainBind(domain, handler),
                                    promise: promise,
                                    receiver: receiver,
                                    value: value
                                });
                            } else {
                                target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
                            }

                            return promise;
                        };

                        Promise.prototype._length = function () {
                            return this._bitField & 65535;
                        };

                        Promise.prototype._isFateSealed = function () {
                            return (this._bitField & 117506048) !== 0;
                        };

                        Promise.prototype._isFollowing = function () {
                            return (this._bitField & 67108864) === 67108864;
                        };

                        Promise.prototype._setLength = function (len) {
                            this._bitField = this._bitField & -65536 | len & 65535;
                        };

                        Promise.prototype._setFulfilled = function () {
                            this._bitField = this._bitField | 33554432;
                            this._fireEvent("promiseFulfilled", this);
                        };

                        Promise.prototype._setRejected = function () {
                            this._bitField = this._bitField | 16777216;
                            this._fireEvent("promiseRejected", this);
                        };

                        Promise.prototype._setFollowing = function () {
                            this._bitField = this._bitField | 67108864;
                            this._fireEvent("promiseResolved", this);
                        };

                        Promise.prototype._setIsFinal = function () {
                            this._bitField = this._bitField | 4194304;
                        };

                        Promise.prototype._isFinal = function () {
                            return (this._bitField & 4194304) > 0;
                        };

                        Promise.prototype._unsetCancelled = function () {
                            this._bitField = this._bitField & ~65536;
                        };

                        Promise.prototype._setCancelled = function () {
                            this._bitField = this._bitField | 65536;
                            this._fireEvent("promiseCancelled", this);
                        };

                        Promise.prototype._setWillBeCancelled = function () {
                            this._bitField = this._bitField | 8388608;
                        };

                        Promise.prototype._setAsyncGuaranteed = function () {
                            if (async.hasCustomScheduler()) return;
                            this._bitField = this._bitField | 134217728;
                        };

                        Promise.prototype._receiverAt = function (index) {
                            var ret = index === 0 ? this._receiver0 : this[index * 4 - 4 + 3];
                            if (ret === UNDEFINED_BINDING) {
                                return undefined;
                            } else if (ret === undefined && this._isBound()) {
                                return this._boundValue();
                            }
                            return ret;
                        };

                        Promise.prototype._promiseAt = function (index) {
                            return this[index * 4 - 4 + 2];
                        };

                        Promise.prototype._fulfillmentHandlerAt = function (index) {
                            return this[index * 4 - 4 + 0];
                        };

                        Promise.prototype._rejectionHandlerAt = function (index) {
                            return this[index * 4 - 4 + 1];
                        };

                        Promise.prototype._boundValue = function () {};

                        Promise.prototype._migrateCallback0 = function (follower) {
                            var bitField = follower._bitField;
                            var fulfill = follower._fulfillmentHandler0;
                            var reject = follower._rejectionHandler0;
                            var promise = follower._promise0;
                            var receiver = follower._receiverAt(0);
                            if (receiver === undefined) receiver = UNDEFINED_BINDING;
                            this._addCallbacks(fulfill, reject, promise, receiver, null);
                        };

                        Promise.prototype._migrateCallbackAt = function (follower, index) {
                            var fulfill = follower._fulfillmentHandlerAt(index);
                            var reject = follower._rejectionHandlerAt(index);
                            var promise = follower._promiseAt(index);
                            var receiver = follower._receiverAt(index);
                            if (receiver === undefined) receiver = UNDEFINED_BINDING;
                            this._addCallbacks(fulfill, reject, promise, receiver, null);
                        };

                        Promise.prototype._addCallbacks = function (fulfill, reject, promise, receiver, domain) {
                            var index = this._length();

                            if (index >= 65535 - 4) {
                                index = 0;
                                this._setLength(0);
                            }

                            if (index === 0) {
                                this._promise0 = promise;
                                this._receiver0 = receiver;
                                if (typeof fulfill === "function") {
                                    this._fulfillmentHandler0 = domain === null ? fulfill : util.domainBind(domain, fulfill);
                                }
                                if (typeof reject === "function") {
                                    this._rejectionHandler0 = domain === null ? reject : util.domainBind(domain, reject);
                                }
                            } else {
                                var base = index * 4 - 4;
                                this[base + 2] = promise;
                                this[base + 3] = receiver;
                                if (typeof fulfill === "function") {
                                    this[base + 0] = domain === null ? fulfill : util.domainBind(domain, fulfill);
                                }
                                if (typeof reject === "function") {
                                    this[base + 1] = domain === null ? reject : util.domainBind(domain, reject);
                                }
                            }
                            this._setLength(index + 1);
                            return index;
                        };

                        Promise.prototype._proxy = function (proxyable, arg) {
                            this._addCallbacks(undefined, undefined, arg, proxyable, null);
                        };

                        Promise.prototype._resolveCallback = function (value, shouldBind) {
                            if ((this._bitField & 117506048) !== 0) return;
                            if (value === this) return this._rejectCallback(makeSelfResolutionError(), false);
                            var maybePromise = tryConvertToPromise(value, this);
                            if (!(maybePromise instanceof Promise)) return this._fulfill(value);

                            if (shouldBind) this._propagateFrom(maybePromise, 2);

                            var promise = maybePromise._target();

                            if (promise === this) {
                                this._reject(makeSelfResolutionError());
                                return;
                            }

                            var bitField = promise._bitField;
                            if ((bitField & 50397184) === 0) {
                                var len = this._length();
                                if (len > 0) promise._migrateCallback0(this);
                                for (var i = 1; i < len; ++i) {
                                    promise._migrateCallbackAt(this, i);
                                }
                                this._setFollowing();
                                this._setLength(0);
                                this._setFollowee(promise);
                            } else if ((bitField & 33554432) !== 0) {
                                this._fulfill(promise._value());
                            } else if ((bitField & 16777216) !== 0) {
                                this._reject(promise._reason());
                            } else {
                                var reason = new CancellationError("late cancellation observer");
                                promise._attachExtraTrace(reason);
                                this._reject(reason);
                            }
                        };

                        Promise.prototype._rejectCallback = function (reason, synchronous, ignoreNonErrorWarnings) {
                            var trace = util.ensureErrorObject(reason);
                            var hasStack = trace === reason;
                            if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
                                var message = "a promise was rejected with a non-error: " + util.classString(reason);
                                this._warn(message, true);
                            }
                            this._attachExtraTrace(trace, synchronous ? hasStack : false);
                            this._reject(reason);
                        };

                        Promise.prototype._resolveFromExecutor = function (executor) {
                            var promise = this;
                            this._captureStackTrace();
                            this._pushContext();
                            var synchronous = true;
                            var r = this._execute(executor, function (value) {
                                promise._resolveCallback(value);
                            }, function (reason) {
                                promise._rejectCallback(reason, synchronous);
                            });
                            synchronous = false;
                            this._popContext();

                            if (r !== undefined) {
                                promise._rejectCallback(r, true);
                            }
                        };

                        Promise.prototype._settlePromiseFromHandler = function (handler, receiver, value, promise) {
                            var bitField = promise._bitField;
                            if ((bitField & 65536) !== 0) return;
                            promise._pushContext();
                            var x;
                            if (receiver === APPLY) {
                                if (!value || typeof value.length !== "number") {
                                    x = errorObj;
                                    x.e = new TypeError("cannot .spread() a non-array: " + util.classString(value));
                                } else {
                                    x = tryCatch(handler).apply(this._boundValue(), value);
                                }
                            } else {
                                x = tryCatch(handler).call(receiver, value);
                            }
                            var promiseCreated = promise._popContext();
                            bitField = promise._bitField;
                            if ((bitField & 65536) !== 0) return;

                            if (x === NEXT_FILTER) {
                                promise._reject(value);
                            } else if (x === errorObj) {
                                promise._rejectCallback(x.e, false);
                            } else {
                                debug.checkForgottenReturns(x, promiseCreated, "", promise, this);
                                promise._resolveCallback(x);
                            }
                        };

                        Promise.prototype._target = function () {
                            var ret = this;
                            while (ret._isFollowing()) ret = ret._followee();
                            return ret;
                        };

                        Promise.prototype._followee = function () {
                            return this._rejectionHandler0;
                        };

                        Promise.prototype._setFollowee = function (promise) {
                            this._rejectionHandler0 = promise;
                        };

                        Promise.prototype._settlePromise = function (promise, handler, receiver, value) {
                            var isPromise = promise instanceof Promise;
                            var bitField = this._bitField;
                            var asyncGuaranteed = (bitField & 134217728) !== 0;
                            if ((bitField & 65536) !== 0) {
                                if (isPromise) promise._invokeInternalOnCancel();

                                if (receiver instanceof PassThroughHandlerContext && receiver.isFinallyHandler()) {
                                    receiver.cancelPromise = promise;
                                    if (tryCatch(handler).call(receiver, value) === errorObj) {
                                        promise._reject(errorObj.e);
                                    }
                                } else if (handler === reflectHandler) {
                                    promise._fulfill(reflectHandler.call(receiver));
                                } else if (receiver instanceof Proxyable) {
                                    receiver._promiseCancelled(promise);
                                } else if (isPromise || promise instanceof PromiseArray) {
                                    promise._cancel();
                                } else {
                                    receiver.cancel();
                                }
                            } else if (typeof handler === "function") {
                                if (!isPromise) {
                                    handler.call(receiver, value, promise);
                                } else {
                                    if (asyncGuaranteed) promise._setAsyncGuaranteed();
                                    this._settlePromiseFromHandler(handler, receiver, value, promise);
                                }
                            } else if (receiver instanceof Proxyable) {
                                if (!receiver._isResolved()) {
                                    if ((bitField & 33554432) !== 0) {
                                        receiver._promiseFulfilled(value, promise);
                                    } else {
                                        receiver._promiseRejected(value, promise);
                                    }
                                }
                            } else if (isPromise) {
                                if (asyncGuaranteed) promise._setAsyncGuaranteed();
                                if ((bitField & 33554432) !== 0) {
                                    promise._fulfill(value);
                                } else {
                                    promise._reject(value);
                                }
                            }
                        };

                        Promise.prototype._settlePromiseLateCancellationObserver = function (ctx) {
                            var handler = ctx.handler;
                            var promise = ctx.promise;
                            var receiver = ctx.receiver;
                            var value = ctx.value;
                            if (typeof handler === "function") {
                                if (!(promise instanceof Promise)) {
                                    handler.call(receiver, value, promise);
                                } else {
                                    this._settlePromiseFromHandler(handler, receiver, value, promise);
                                }
                            } else if (promise instanceof Promise) {
                                promise._reject(value);
                            }
                        };

                        Promise.prototype._settlePromiseCtx = function (ctx) {
                            this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
                        };

                        Promise.prototype._settlePromise0 = function (handler, value, bitField) {
                            var promise = this._promise0;
                            var receiver = this._receiverAt(0);
                            this._promise0 = undefined;
                            this._receiver0 = undefined;
                            this._settlePromise(promise, handler, receiver, value);
                        };

                        Promise.prototype._clearCallbackDataAtIndex = function (index) {
                            var base = index * 4 - 4;
                            this[base + 2] = this[base + 3] = this[base + 0] = this[base + 1] = undefined;
                        };

                        Promise.prototype._fulfill = function (value) {
                            var bitField = this._bitField;
                            if ((bitField & 117506048) >>> 16) return;
                            if (value === this) {
                                var err = makeSelfResolutionError();
                                this._attachExtraTrace(err);
                                return this._reject(err);
                            }
                            this._setFulfilled();
                            this._rejectionHandler0 = value;

                            if ((bitField & 65535) > 0) {
                                if ((bitField & 134217728) !== 0) {
                                    this._settlePromises();
                                } else {
                                    async.settlePromises(this);
                                }
                            }
                        };

                        Promise.prototype._reject = function (reason) {
                            var bitField = this._bitField;
                            if ((bitField & 117506048) >>> 16) return;
                            this._setRejected();
                            this._fulfillmentHandler0 = reason;

                            if (this._isFinal()) {
                                return async.fatalError(reason, util.isNode);
                            }

                            if ((bitField & 65535) > 0) {
                                async.settlePromises(this);
                            } else {
                                this._ensurePossibleRejectionHandled();
                            }
                        };

                        Promise.prototype._fulfillPromises = function (len, value) {
                            for (var i = 1; i < len; i++) {
                                var handler = this._fulfillmentHandlerAt(i);
                                var promise = this._promiseAt(i);
                                var receiver = this._receiverAt(i);
                                this._clearCallbackDataAtIndex(i);
                                this._settlePromise(promise, handler, receiver, value);
                            }
                        };

                        Promise.prototype._rejectPromises = function (len, reason) {
                            for (var i = 1; i < len; i++) {
                                var handler = this._rejectionHandlerAt(i);
                                var promise = this._promiseAt(i);
                                var receiver = this._receiverAt(i);
                                this._clearCallbackDataAtIndex(i);
                                this._settlePromise(promise, handler, receiver, reason);
                            }
                        };

                        Promise.prototype._settlePromises = function () {
                            var bitField = this._bitField;
                            var len = bitField & 65535;

                            if (len > 0) {
                                if ((bitField & 16842752) !== 0) {
                                    var reason = this._fulfillmentHandler0;
                                    this._settlePromise0(this._rejectionHandler0, reason, bitField);
                                    this._rejectPromises(len, reason);
                                } else {
                                    var value = this._rejectionHandler0;
                                    this._settlePromise0(this._fulfillmentHandler0, value, bitField);
                                    this._fulfillPromises(len, value);
                                }
                                this._setLength(0);
                            }
                            this._clearCancellationData();
                        };

                        Promise.prototype._settledValue = function () {
                            var bitField = this._bitField;
                            if ((bitField & 33554432) !== 0) {
                                return this._rejectionHandler0;
                            } else if ((bitField & 16777216) !== 0) {
                                return this._fulfillmentHandler0;
                            }
                        };

                        function deferResolve(v) {
                            this.promise._resolveCallback(v);
                        }
                        function deferReject(v) {
                            this.promise._rejectCallback(v, false);
                        }

                        Promise.defer = Promise.pending = function () {
                            debug.deprecated("Promise.defer", "new Promise");
                            var promise = new Promise(INTERNAL);
                            return {
                                promise: promise,
                                resolve: deferResolve,
                                reject: deferReject
                            };
                        };

                        util.notEnumerableProp(Promise, "_makeSelfResolutionError", makeSelfResolutionError);

                        _dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug);
                        _dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
                        _dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
                        _dereq_("./direct_resolve")(Promise);
                        _dereq_("./synchronous_inspection")(Promise);
                        _dereq_("./join")(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
                        Promise.Promise = Promise;
                        Promise.version = "3.4.6";
                        _dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
                        _dereq_('./call_get.js')(Promise);
                        _dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
                        _dereq_('./timers.js')(Promise, INTERNAL, debug);
                        _dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
                        _dereq_('./nodeify.js')(Promise);
                        _dereq_('./promisify.js')(Promise, INTERNAL);
                        _dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
                        _dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
                        _dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
                        _dereq_('./settle.js')(Promise, PromiseArray, debug);
                        _dereq_('./some.js')(Promise, PromiseArray, apiRejection);
                        _dereq_('./filter.js')(Promise, INTERNAL);
                        _dereq_('./each.js')(Promise, INTERNAL);
                        _dereq_('./any.js')(Promise);

                        util.toFastProperties(Promise);
                        util.toFastProperties(Promise.prototype);
                        function fillTypes(value) {
                            var p = new Promise(INTERNAL);
                            p._fulfillmentHandler0 = value;
                            p._rejectionHandler0 = value;
                            p._promise0 = value;
                            p._receiver0 = value;
                        }
                        // Complete slack tracking, opt out of field-type tracking and           
                        // stabilize map                                                         
                        fillTypes({ a: 1 });
                        fillTypes({ b: 2 });
                        fillTypes({ c: 3 });
                        fillTypes(1);
                        fillTypes(function () {});
                        fillTypes(undefined);
                        fillTypes(false);
                        fillTypes(new Promise(INTERNAL));
                        debug.setBounds(Async.firstLineError, util.lastLineError);
                        return Promise;
                    };
                }, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36 }], 23: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable) {
                        var util = _dereq_("./util");
                        var isArray = util.isArray;

                        function toResolutionValue(val) {
                            switch (val) {
                                case -2:
                                    return [];
                                case -3:
                                    return {};
                            }
                        }

                        function PromiseArray(values) {
                            var promise = this._promise = new Promise(INTERNAL);
                            if (values instanceof Promise) {
                                promise._propagateFrom(values, 3);
                            }
                            promise._setOnCancel(this);
                            this._values = values;
                            this._length = 0;
                            this._totalResolved = 0;
                            this._init(undefined, -2);
                        }
                        util.inherits(PromiseArray, Proxyable);

                        PromiseArray.prototype.length = function () {
                            return this._length;
                        };

                        PromiseArray.prototype.promise = function () {
                            return this._promise;
                        };

                        PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
                            var values = tryConvertToPromise(this._values, this._promise);
                            if (values instanceof Promise) {
                                values = values._target();
                                var bitField = values._bitField;
                                ;
                                this._values = values;

                                if ((bitField & 50397184) === 0) {
                                    this._promise._setAsyncGuaranteed();
                                    return values._then(init, this._reject, undefined, this, resolveValueIfEmpty);
                                } else if ((bitField & 33554432) !== 0) {
                                    values = values._value();
                                } else if ((bitField & 16777216) !== 0) {
                                    return this._reject(values._reason());
                                } else {
                                    return this._cancel();
                                }
                            }
                            values = util.asArray(values);
                            if (values === null) {
                                var err = apiRejection("expecting an array or an iterable object but got " + util.classString(values)).reason();
                                this._promise._rejectCallback(err, false);
                                return;
                            }

                            if (values.length === 0) {
                                if (resolveValueIfEmpty === -5) {
                                    this._resolveEmptyArray();
                                } else {
                                    this._resolve(toResolutionValue(resolveValueIfEmpty));
                                }
                                return;
                            }
                            this._iterate(values);
                        };

                        PromiseArray.prototype._iterate = function (values) {
                            var len = this.getActualLength(values.length);
                            this._length = len;
                            this._values = this.shouldCopyValues() ? new Array(len) : this._values;
                            var result = this._promise;
                            var isResolved = false;
                            var bitField = null;
                            for (var i = 0; i < len; ++i) {
                                var maybePromise = tryConvertToPromise(values[i], result);

                                if (maybePromise instanceof Promise) {
                                    maybePromise = maybePromise._target();
                                    bitField = maybePromise._bitField;
                                } else {
                                    bitField = null;
                                }

                                if (isResolved) {
                                    if (bitField !== null) {
                                        maybePromise.suppressUnhandledRejections();
                                    }
                                } else if (bitField !== null) {
                                    if ((bitField & 50397184) === 0) {
                                        maybePromise._proxy(this, i);
                                        this._values[i] = maybePromise;
                                    } else if ((bitField & 33554432) !== 0) {
                                        isResolved = this._promiseFulfilled(maybePromise._value(), i);
                                    } else if ((bitField & 16777216) !== 0) {
                                        isResolved = this._promiseRejected(maybePromise._reason(), i);
                                    } else {
                                        isResolved = this._promiseCancelled(i);
                                    }
                                } else {
                                    isResolved = this._promiseFulfilled(maybePromise, i);
                                }
                            }
                            if (!isResolved) result._setAsyncGuaranteed();
                        };

                        PromiseArray.prototype._isResolved = function () {
                            return this._values === null;
                        };

                        PromiseArray.prototype._resolve = function (value) {
                            this._values = null;
                            this._promise._fulfill(value);
                        };

                        PromiseArray.prototype._cancel = function () {
                            if (this._isResolved() || !this._promise._isCancellable()) return;
                            this._values = null;
                            this._promise._cancel();
                        };

                        PromiseArray.prototype._reject = function (reason) {
                            this._values = null;
                            this._promise._rejectCallback(reason, false);
                        };

                        PromiseArray.prototype._promiseFulfilled = function (value, index) {
                            this._values[index] = value;
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= this._length) {
                                this._resolve(this._values);
                                return true;
                            }
                            return false;
                        };

                        PromiseArray.prototype._promiseCancelled = function () {
                            this._cancel();
                            return true;
                        };

                        PromiseArray.prototype._promiseRejected = function (reason) {
                            this._totalResolved++;
                            this._reject(reason);
                            return true;
                        };

                        PromiseArray.prototype._resultCancelled = function () {
                            if (this._isResolved()) return;
                            var values = this._values;
                            this._cancel();
                            if (values instanceof Promise) {
                                values.cancel();
                            } else {
                                for (var i = 0; i < values.length; ++i) {
                                    if (values[i] instanceof Promise) {
                                        values[i].cancel();
                                    }
                                }
                            }
                        };

                        PromiseArray.prototype.shouldCopyValues = function () {
                            return true;
                        };

                        PromiseArray.prototype.getActualLength = function (len) {
                            return len;
                        };

                        return PromiseArray;
                    };
                }, { "./util": 36 }], 24: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var THIS = {};
                        var util = _dereq_("./util");
                        var nodebackForPromise = _dereq_("./nodeback");
                        var withAppended = util.withAppended;
                        var maybeWrapAsError = util.maybeWrapAsError;
                        var canEvaluate = util.canEvaluate;
                        var TypeError = _dereq_("./errors").TypeError;
                        var defaultSuffix = "Async";
                        var defaultPromisified = { __isPromisified__: true };
                        var noCopyProps = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"];
                        var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

                        var defaultFilter = function (name) {
                            return util.isIdentifier(name) && name.charAt(0) !== "_" && name !== "constructor";
                        };

                        function propsFilter(key) {
                            return !noCopyPropsPattern.test(key);
                        }

                        function isPromisified(fn) {
                            try {
                                return fn.__isPromisified__ === true;
                            } catch (e) {
                                return false;
                            }
                        }

                        function hasPromisified(obj, key, suffix) {
                            var val = util.getDataPropertyOrDefault(obj, key + suffix, defaultPromisified);
                            return val ? isPromisified(val) : false;
                        }
                        function checkValid(ret, suffix, suffixRegexp) {
                            for (var i = 0; i < ret.length; i += 2) {
                                var key = ret[i];
                                if (suffixRegexp.test(key)) {
                                    var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
                                    for (var j = 0; j < ret.length; j += 2) {
                                        if (ret[j] === keyWithoutAsyncSuffix) {
                                            throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a".replace("%s", suffix));
                                        }
                                    }
                                }
                            }
                        }

                        function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
                            var keys = util.inheritedDataKeys(obj);
                            var ret = [];
                            for (var i = 0; i < keys.length; ++i) {
                                var key = keys[i];
                                var value = obj[key];
                                var passesDefaultFilter = filter === defaultFilter ? true : defaultFilter(key, value, obj);
                                if (typeof value === "function" && !isPromisified(value) && !hasPromisified(obj, key, suffix) && filter(key, value, obj, passesDefaultFilter)) {
                                    ret.push(key, value);
                                }
                            }
                            checkValid(ret, suffix, suffixRegexp);
                            return ret;
                        }

                        var escapeIdentRegex = function (str) {
                            return str.replace(/([$])/, "\\$");
                        };

                        var makeNodePromisifiedEval;
                        if (!true) {
                            var switchCaseArgumentOrder = function (likelyArgumentCount) {
                                var ret = [likelyArgumentCount];
                                var min = Math.max(0, likelyArgumentCount - 1 - 3);
                                for (var i = likelyArgumentCount - 1; i >= min; --i) {
                                    ret.push(i);
                                }
                                for (var i = likelyArgumentCount + 1; i <= 3; ++i) {
                                    ret.push(i);
                                }
                                return ret;
                            };

                            var argumentSequence = function (argumentCount) {
                                return util.filledRange(argumentCount, "_arg", "");
                            };

                            var parameterDeclaration = function (parameterCount) {
                                return util.filledRange(Math.max(parameterCount, 3), "_arg", "");
                            };

                            var parameterCount = function (fn) {
                                if (typeof fn.length === "number") {
                                    return Math.max(Math.min(fn.length, 1023 + 1), 0);
                                }
                                return 0;
                            };

                            makeNodePromisifiedEval = function (callback, receiver, originalName, fn, _, multiArgs) {
                                var newParameterCount = Math.max(0, parameterCount(fn) - 1);
                                var argumentOrder = switchCaseArgumentOrder(newParameterCount);
                                var shouldProxyThis = typeof callback === "string" || receiver === THIS;

                                function generateCallForArgumentCount(count) {
                                    var args = argumentSequence(count).join(", ");
                                    var comma = count > 0 ? ", " : "";
                                    var ret;
                                    if (shouldProxyThis) {
                                        ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
                                    } else {
                                        ret = receiver === undefined ? "ret = callback({{args}}, nodeback); break;\n" : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
                                    }
                                    return ret.replace("{{args}}", args).replace(", ", comma);
                                }

                                function generateArgumentSwitchCase() {
                                    var ret = "";
                                    for (var i = 0; i < argumentOrder.length; ++i) {
                                        ret += "case " + argumentOrder[i] + ":" + generateCallForArgumentCount(argumentOrder[i]);
                                    }

                                    ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", shouldProxyThis ? "ret = callback.apply(this, args);\n" : "ret = callback.apply(receiver, args);\n");
                                    return ret;
                                }

                                var getFunctionCode = typeof callback === "string" ? "this != null ? this['" + callback + "'] : fn" : "fn";
                                var body = "'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase()).replace("[GetFunctionCode]", getFunctionCode);
                                body = body.replace("Parameters", parameterDeclaration(newParameterCount));
                                return new Function("Promise", "fn", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "tryCatch", "errorObj", "notEnumerableProp", "INTERNAL", body)(Promise, fn, receiver, withAppended, maybeWrapAsError, nodebackForPromise, util.tryCatch, util.errorObj, util.notEnumerableProp, INTERNAL);
                            };
                        }

                        function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
                            var defaultThis = function () {
                                return this;
                            }();
                            var method = callback;
                            if (typeof method === "string") {
                                callback = fn;
                            }
                            function promisified() {
                                var _receiver = receiver;
                                if (receiver === THIS) _receiver = this;
                                var promise = new Promise(INTERNAL);
                                promise._captureStackTrace();
                                var cb = typeof method === "string" && this !== defaultThis ? this[method] : callback;
                                var fn = nodebackForPromise(promise, multiArgs);
                                try {
                                    cb.apply(_receiver, withAppended(arguments, fn));
                                } catch (e) {
                                    promise._rejectCallback(maybeWrapAsError(e), true, true);
                                }
                                if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
                                return promise;
                            }
                            util.notEnumerableProp(promisified, "__isPromisified__", true);
                            return promisified;
                        }

                        var makeNodePromisified = canEvaluate ? makeNodePromisifiedEval : makeNodePromisifiedClosure;

                        function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
                            var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
                            var methods = promisifiableMethods(obj, suffix, suffixRegexp, filter);

                            for (var i = 0, len = methods.length; i < len; i += 2) {
                                var key = methods[i];
                                var fn = methods[i + 1];
                                var promisifiedKey = key + suffix;
                                if (promisifier === makeNodePromisified) {
                                    obj[promisifiedKey] = makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                } else {
                                    var promisified = promisifier(fn, function () {
                                        return makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
                                    });
                                    util.notEnumerableProp(promisified, "__isPromisified__", true);
                                    obj[promisifiedKey] = promisified;
                                }
                            }
                            util.toFastProperties(obj);
                            return obj;
                        }

                        function promisify(callback, receiver, multiArgs) {
                            return makeNodePromisified(callback, receiver, undefined, callback, null, multiArgs);
                        }

                        Promise.promisify = function (fn, options) {
                            if (typeof fn !== "function") {
                                throw new TypeError("expecting a function but got " + util.classString(fn));
                            }
                            if (isPromisified(fn)) {
                                return fn;
                            }
                            options = Object(options);
                            var receiver = options.context === undefined ? THIS : options.context;
                            var multiArgs = !!options.multiArgs;
                            var ret = promisify(fn, receiver, multiArgs);
                            util.copyDescriptors(fn, ret, propsFilter);
                            return ret;
                        };

                        Promise.promisifyAll = function (target, options) {
                            if (typeof target !== "function" && typeof target !== "object") {
                                throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            options = Object(options);
                            var multiArgs = !!options.multiArgs;
                            var suffix = options.suffix;
                            if (typeof suffix !== "string") suffix = defaultSuffix;
                            var filter = options.filter;
                            if (typeof filter !== "function") filter = defaultFilter;
                            var promisifier = options.promisifier;
                            if (typeof promisifier !== "function") promisifier = makeNodePromisified;

                            if (!util.isIdentifier(suffix)) {
                                throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }

                            var keys = util.inheritedDataKeys(target);
                            for (var i = 0; i < keys.length; ++i) {
                                var value = target[keys[i]];
                                if (keys[i] !== "constructor" && util.isClass(value)) {
                                    promisifyAll(value.prototype, suffix, filter, promisifier, multiArgs);
                                    promisifyAll(value, suffix, filter, promisifier, multiArgs);
                                }
                            }

                            return promisifyAll(target, suffix, filter, promisifier, multiArgs);
                        };
                    };
                }, { "./errors": 12, "./nodeback": 20, "./util": 36 }], 25: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, tryConvertToPromise, apiRejection) {
                        var util = _dereq_("./util");
                        var isObject = util.isObject;
                        var es5 = _dereq_("./es5");
                        var Es6Map;
                        if (typeof Map === "function") Es6Map = Map;

                        var mapToEntries = function () {
                            var index = 0;
                            var size = 0;

                            function extractEntry(value, key) {
                                this[index] = value;
                                this[index + size] = key;
                                index++;
                            }

                            return function mapToEntries(map) {
                                size = map.size;
                                index = 0;
                                var ret = new Array(map.size * 2);
                                map.forEach(extractEntry, ret);
                                return ret;
                            };
                        }();

                        var entriesToMap = function (entries) {
                            var ret = new Es6Map();
                            var length = entries.length / 2 | 0;
                            for (var i = 0; i < length; ++i) {
                                var key = entries[length + i];
                                var value = entries[i];
                                ret.set(key, value);
                            }
                            return ret;
                        };

                        function PropertiesPromiseArray(obj) {
                            var isMap = false;
                            var entries;
                            if (Es6Map !== undefined && obj instanceof Es6Map) {
                                entries = mapToEntries(obj);
                                isMap = true;
                            } else {
                                var keys = es5.keys(obj);
                                var len = keys.length;
                                entries = new Array(len * 2);
                                for (var i = 0; i < len; ++i) {
                                    var key = keys[i];
                                    entries[i] = obj[key];
                                    entries[i + len] = key;
                                }
                            }
                            this.constructor$(entries);
                            this._isMap = isMap;
                            this._init$(undefined, -3);
                        }
                        util.inherits(PropertiesPromiseArray, PromiseArray);

                        PropertiesPromiseArray.prototype._init = function () {};

                        PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
                            this._values[index] = value;
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= this._length) {
                                var val;
                                if (this._isMap) {
                                    val = entriesToMap(this._values);
                                } else {
                                    val = {};
                                    var keyOffset = this.length();
                                    for (var i = 0, len = this.length(); i < len; ++i) {
                                        val[this._values[i + keyOffset]] = this._values[i];
                                    }
                                }
                                this._resolve(val);
                                return true;
                            }
                            return false;
                        };

                        PropertiesPromiseArray.prototype.shouldCopyValues = function () {
                            return false;
                        };

                        PropertiesPromiseArray.prototype.getActualLength = function (len) {
                            return len >> 1;
                        };

                        function props(promises) {
                            var ret;
                            var castValue = tryConvertToPromise(promises);

                            if (!isObject(castValue)) {
                                return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            } else if (castValue instanceof Promise) {
                                ret = castValue._then(Promise.props, undefined, undefined, undefined, undefined);
                            } else {
                                ret = new PropertiesPromiseArray(castValue).promise();
                            }

                            if (castValue instanceof Promise) {
                                ret._propagateFrom(castValue, 2);
                            }
                            return ret;
                        }

                        Promise.prototype.props = function () {
                            return props(this);
                        };

                        Promise.props = function (promises) {
                            return props(promises);
                        };
                    };
                }, { "./es5": 13, "./util": 36 }], 26: [function (_dereq_, module, exports) {
                    "use strict";

                    function arrayMove(src, srcIndex, dst, dstIndex, len) {
                        for (var j = 0; j < len; ++j) {
                            dst[j + dstIndex] = src[j + srcIndex];
                            src[j + srcIndex] = void 0;
                        }
                    }

                    function Queue(capacity) {
                        this._capacity = capacity;
                        this._length = 0;
                        this._front = 0;
                    }

                    Queue.prototype._willBeOverCapacity = function (size) {
                        return this._capacity < size;
                    };

                    Queue.prototype._pushOne = function (arg) {
                        var length = this.length();
                        this._checkCapacity(length + 1);
                        var i = this._front + length & this._capacity - 1;
                        this[i] = arg;
                        this._length = length + 1;
                    };

                    Queue.prototype._unshiftOne = function (value) {
                        var capacity = this._capacity;
                        this._checkCapacity(this.length() + 1);
                        var front = this._front;
                        var i = (front - 1 & capacity - 1 ^ capacity) - capacity;
                        this[i] = value;
                        this._front = i;
                        this._length = this.length() + 1;
                    };

                    Queue.prototype.unshift = function (fn, receiver, arg) {
                        this._unshiftOne(arg);
                        this._unshiftOne(receiver);
                        this._unshiftOne(fn);
                    };

                    Queue.prototype.push = function (fn, receiver, arg) {
                        var length = this.length() + 3;
                        if (this._willBeOverCapacity(length)) {
                            this._pushOne(fn);
                            this._pushOne(receiver);
                            this._pushOne(arg);
                            return;
                        }
                        var j = this._front + length - 3;
                        this._checkCapacity(length);
                        var wrapMask = this._capacity - 1;
                        this[j + 0 & wrapMask] = fn;
                        this[j + 1 & wrapMask] = receiver;
                        this[j + 2 & wrapMask] = arg;
                        this._length = length;
                    };

                    Queue.prototype.shift = function () {
                        var front = this._front,
                            ret = this[front];

                        this[front] = undefined;
                        this._front = front + 1 & this._capacity - 1;
                        this._length--;
                        return ret;
                    };

                    Queue.prototype.length = function () {
                        return this._length;
                    };

                    Queue.prototype._checkCapacity = function (size) {
                        if (this._capacity < size) {
                            this._resizeTo(this._capacity << 1);
                        }
                    };

                    Queue.prototype._resizeTo = function (capacity) {
                        var oldCapacity = this._capacity;
                        this._capacity = capacity;
                        var front = this._front;
                        var length = this._length;
                        var moveItemsCount = front + length & oldCapacity - 1;
                        arrayMove(this, 0, this, oldCapacity, moveItemsCount);
                    };

                    module.exports = Queue;
                }, {}], 27: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection) {
                        var util = _dereq_("./util");

                        var raceLater = function (promise) {
                            return promise.then(function (array) {
                                return race(array, promise);
                            });
                        };

                        function race(promises, parent) {
                            var maybePromise = tryConvertToPromise(promises);

                            if (maybePromise instanceof Promise) {
                                return raceLater(maybePromise);
                            } else {
                                promises = util.asArray(promises);
                                if (promises === null) return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
                            }

                            var ret = new Promise(INTERNAL);
                            if (parent !== undefined) {
                                ret._propagateFrom(parent, 3);
                            }
                            var fulfill = ret._fulfill;
                            var reject = ret._reject;
                            for (var i = 0, len = promises.length; i < len; ++i) {
                                var val = promises[i];

                                if (val === undefined && !(i in promises)) {
                                    continue;
                                }

                                Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
                            }
                            return ret;
                        }

                        Promise.race = function (promises) {
                            return race(promises, undefined);
                        };

                        Promise.prototype.race = function () {
                            return race(this, undefined);
                        };
                    };
                }, { "./util": 36 }], 28: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
                        var getDomain = Promise._getDomain;
                        var util = _dereq_("./util");
                        var tryCatch = util.tryCatch;

                        function ReductionPromiseArray(promises, fn, initialValue, _each) {
                            this.constructor$(promises);
                            var domain = getDomain();
                            this._fn = domain === null ? fn : util.domainBind(domain, fn);
                            if (initialValue !== undefined) {
                                initialValue = Promise.resolve(initialValue);
                                initialValue._attachCancellationCallback(this);
                            }
                            this._initialValue = initialValue;
                            this._currentCancellable = null;
                            if (_each === INTERNAL) {
                                this._eachValues = Array(this._length);
                            } else if (_each === 0) {
                                this._eachValues = null;
                            } else {
                                this._eachValues = undefined;
                            }
                            this._promise._captureStackTrace();
                            this._init$(undefined, -5);
                        }
                        util.inherits(ReductionPromiseArray, PromiseArray);

                        ReductionPromiseArray.prototype._gotAccum = function (accum) {
                            if (this._eachValues !== undefined && this._eachValues !== null && accum !== INTERNAL) {
                                this._eachValues.push(accum);
                            }
                        };

                        ReductionPromiseArray.prototype._eachComplete = function (value) {
                            if (this._eachValues !== null) {
                                this._eachValues.push(value);
                            }
                            return this._eachValues;
                        };

                        ReductionPromiseArray.prototype._init = function () {};

                        ReductionPromiseArray.prototype._resolveEmptyArray = function () {
                            this._resolve(this._eachValues !== undefined ? this._eachValues : this._initialValue);
                        };

                        ReductionPromiseArray.prototype.shouldCopyValues = function () {
                            return false;
                        };

                        ReductionPromiseArray.prototype._resolve = function (value) {
                            this._promise._resolveCallback(value);
                            this._values = null;
                        };

                        ReductionPromiseArray.prototype._resultCancelled = function (sender) {
                            if (sender === this._initialValue) return this._cancel();
                            if (this._isResolved()) return;
                            this._resultCancelled$();
                            if (this._currentCancellable instanceof Promise) {
                                this._currentCancellable.cancel();
                            }
                            if (this._initialValue instanceof Promise) {
                                this._initialValue.cancel();
                            }
                        };

                        ReductionPromiseArray.prototype._iterate = function (values) {
                            this._values = values;
                            var value;
                            var i;
                            var length = values.length;
                            if (this._initialValue !== undefined) {
                                value = this._initialValue;
                                i = 0;
                            } else {
                                value = Promise.resolve(values[0]);
                                i = 1;
                            }

                            this._currentCancellable = value;

                            if (!value.isRejected()) {
                                for (; i < length; ++i) {
                                    var ctx = {
                                        accum: null,
                                        value: values[i],
                                        index: i,
                                        length: length,
                                        array: this
                                    };
                                    value = value._then(gotAccum, undefined, undefined, ctx, undefined);
                                }
                            }

                            if (this._eachValues !== undefined) {
                                value = value._then(this._eachComplete, undefined, undefined, this, undefined);
                            }
                            value._then(completed, completed, undefined, value, this);
                        };

                        Promise.prototype.reduce = function (fn, initialValue) {
                            return reduce(this, fn, initialValue, null);
                        };

                        Promise.reduce = function (promises, fn, initialValue, _each) {
                            return reduce(promises, fn, initialValue, _each);
                        };

                        function completed(valueOrReason, array) {
                            if (this.isFulfilled()) {
                                array._resolve(valueOrReason);
                            } else {
                                array._reject(valueOrReason);
                            }
                        }

                        function reduce(promises, fn, initialValue, _each) {
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
                            return array.promise();
                        }

                        function gotAccum(accum) {
                            this.accum = accum;
                            this.array._gotAccum(accum);
                            var value = tryConvertToPromise(this.value, this.array._promise);
                            if (value instanceof Promise) {
                                this.array._currentCancellable = value;
                                return value._then(gotValue, undefined, undefined, this, undefined);
                            } else {
                                return gotValue.call(this, value);
                            }
                        }

                        function gotValue(value) {
                            var array = this.array;
                            var promise = array._promise;
                            var fn = tryCatch(array._fn);
                            promise._pushContext();
                            var ret;
                            if (array._eachValues !== undefined) {
                                ret = fn.call(promise._boundValue(), value, this.index, this.length);
                            } else {
                                ret = fn.call(promise._boundValue(), this.accum, value, this.index, this.length);
                            }
                            if (ret instanceof Promise) {
                                array._currentCancellable = ret;
                            }
                            var promiseCreated = promise._popContext();
                            debug.checkForgottenReturns(ret, promiseCreated, array._eachValues !== undefined ? "Promise.each" : "Promise.reduce", promise);
                            return ret;
                        }
                    };
                }, { "./util": 36 }], 29: [function (_dereq_, module, exports) {
                    "use strict";

                    var util = _dereq_("./util");
                    var schedule;
                    var noAsyncScheduler = function () {
                        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                    };
                    var NativePromise = util.getNativePromise();
                    if (util.isNode && typeof MutationObserver === "undefined") {
                        var GlobalSetImmediate = global.setImmediate;
                        var ProcessNextTick = process.nextTick;
                        schedule = util.isRecentNode ? function (fn) {
                            GlobalSetImmediate.call(global, fn);
                        } : function (fn) {
                            ProcessNextTick.call(process, fn);
                        };
                    } else if (typeof NativePromise === "function" && typeof NativePromise.resolve === "function") {
                        var nativePromise = NativePromise.resolve();
                        schedule = function (fn) {
                            nativePromise.then(fn);
                        };
                    } else if (typeof MutationObserver !== "undefined" && !(typeof window !== "undefined" && window.navigator && (window.navigator.standalone || window.cordova))) {
                        schedule = function () {
                            var div = document.createElement("div");
                            var opts = { attributes: true };
                            var toggleScheduled = false;
                            var div2 = document.createElement("div");
                            var o2 = new MutationObserver(function () {
                                div.classList.toggle("foo");
                                toggleScheduled = false;
                            });
                            o2.observe(div2, opts);

                            var scheduleToggle = function () {
                                if (toggleScheduled) return;
                                toggleScheduled = true;
                                div2.classList.toggle("foo");
                            };

                            return function schedule(fn) {
                                var o = new MutationObserver(function () {
                                    o.disconnect();
                                    fn();
                                });
                                o.observe(div, opts);
                                scheduleToggle();
                            };
                        }();
                    } else if (typeof setImmediate !== "undefined") {
                        schedule = function (fn) {
                            setImmediate(fn);
                        };
                    } else if (typeof setTimeout !== "undefined") {
                        schedule = function (fn) {
                            setTimeout(fn, 0);
                        };
                    } else {
                        schedule = noAsyncScheduler;
                    }
                    module.exports = schedule;
                }, { "./util": 36 }], 30: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, debug) {
                        var PromiseInspection = Promise.PromiseInspection;
                        var util = _dereq_("./util");

                        function SettledPromiseArray(values) {
                            this.constructor$(values);
                        }
                        util.inherits(SettledPromiseArray, PromiseArray);

                        SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
                            this._values[index] = inspection;
                            var totalResolved = ++this._totalResolved;
                            if (totalResolved >= this._length) {
                                this._resolve(this._values);
                                return true;
                            }
                            return false;
                        };

                        SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
                            var ret = new PromiseInspection();
                            ret._bitField = 33554432;
                            ret._settledValueField = value;
                            return this._promiseResolved(index, ret);
                        };
                        SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
                            var ret = new PromiseInspection();
                            ret._bitField = 16777216;
                            ret._settledValueField = reason;
                            return this._promiseResolved(index, ret);
                        };

                        Promise.settle = function (promises) {
                            debug.deprecated(".settle()", ".reflect()");
                            return new SettledPromiseArray(promises).promise();
                        };

                        Promise.prototype.settle = function () {
                            return Promise.settle(this);
                        };
                    };
                }, { "./util": 36 }], 31: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, PromiseArray, apiRejection) {
                        var util = _dereq_("./util");
                        var RangeError = _dereq_("./errors").RangeError;
                        var AggregateError = _dereq_("./errors").AggregateError;
                        var isArray = util.isArray;
                        var CANCELLATION = {};

                        function SomePromiseArray(values) {
                            this.constructor$(values);
                            this._howMany = 0;
                            this._unwrap = false;
                            this._initialized = false;
                        }
                        util.inherits(SomePromiseArray, PromiseArray);

                        SomePromiseArray.prototype._init = function () {
                            if (!this._initialized) {
                                return;
                            }
                            if (this._howMany === 0) {
                                this._resolve([]);
                                return;
                            }
                            this._init$(undefined, -5);
                            var isArrayResolved = isArray(this._values);
                            if (!this._isResolved() && isArrayResolved && this._howMany > this._canPossiblyFulfill()) {
                                this._reject(this._getRangeError(this.length()));
                            }
                        };

                        SomePromiseArray.prototype.init = function () {
                            this._initialized = true;
                            this._init();
                        };

                        SomePromiseArray.prototype.setUnwrap = function () {
                            this._unwrap = true;
                        };

                        SomePromiseArray.prototype.howMany = function () {
                            return this._howMany;
                        };

                        SomePromiseArray.prototype.setHowMany = function (count) {
                            this._howMany = count;
                        };

                        SomePromiseArray.prototype._promiseFulfilled = function (value) {
                            this._addFulfilled(value);
                            if (this._fulfilled() === this.howMany()) {
                                this._values.length = this.howMany();
                                if (this.howMany() === 1 && this._unwrap) {
                                    this._resolve(this._values[0]);
                                } else {
                                    this._resolve(this._values);
                                }
                                return true;
                            }
                            return false;
                        };
                        SomePromiseArray.prototype._promiseRejected = function (reason) {
                            this._addRejected(reason);
                            return this._checkOutcome();
                        };

                        SomePromiseArray.prototype._promiseCancelled = function () {
                            if (this._values instanceof Promise || this._values == null) {
                                return this._cancel();
                            }
                            this._addRejected(CANCELLATION);
                            return this._checkOutcome();
                        };

                        SomePromiseArray.prototype._checkOutcome = function () {
                            if (this.howMany() > this._canPossiblyFulfill()) {
                                var e = new AggregateError();
                                for (var i = this.length(); i < this._values.length; ++i) {
                                    if (this._values[i] !== CANCELLATION) {
                                        e.push(this._values[i]);
                                    }
                                }
                                if (e.length > 0) {
                                    this._reject(e);
                                } else {
                                    this._cancel();
                                }
                                return true;
                            }
                            return false;
                        };

                        SomePromiseArray.prototype._fulfilled = function () {
                            return this._totalResolved;
                        };

                        SomePromiseArray.prototype._rejected = function () {
                            return this._values.length - this.length();
                        };

                        SomePromiseArray.prototype._addRejected = function (reason) {
                            this._values.push(reason);
                        };

                        SomePromiseArray.prototype._addFulfilled = function (value) {
                            this._values[this._totalResolved++] = value;
                        };

                        SomePromiseArray.prototype._canPossiblyFulfill = function () {
                            return this.length() - this._rejected();
                        };

                        SomePromiseArray.prototype._getRangeError = function (count) {
                            var message = "Input array must contain at least " + this._howMany + " items but contains only " + count + " items";
                            return new RangeError(message);
                        };

                        SomePromiseArray.prototype._resolveEmptyArray = function () {
                            this._reject(this._getRangeError(0));
                        };

                        function some(promises, howMany) {
                            if ((howMany | 0) !== howMany || howMany < 0) {
                                return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            var ret = new SomePromiseArray(promises);
                            var promise = ret.promise();
                            ret.setHowMany(howMany);
                            ret.init();
                            return promise;
                        }

                        Promise.some = function (promises, howMany) {
                            return some(promises, howMany);
                        };

                        Promise.prototype.some = function (howMany) {
                            return some(this, howMany);
                        };

                        Promise._SomePromiseArray = SomePromiseArray;
                    };
                }, { "./errors": 12, "./util": 36 }], 32: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise) {
                        function PromiseInspection(promise) {
                            if (promise !== undefined) {
                                promise = promise._target();
                                this._bitField = promise._bitField;
                                this._settledValueField = promise._isFateSealed() ? promise._settledValue() : undefined;
                            } else {
                                this._bitField = 0;
                                this._settledValueField = undefined;
                            }
                        }

                        PromiseInspection.prototype._settledValue = function () {
                            return this._settledValueField;
                        };

                        var value = PromiseInspection.prototype.value = function () {
                            if (!this.isFulfilled()) {
                                throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            return this._settledValue();
                        };

                        var reason = PromiseInspection.prototype.error = PromiseInspection.prototype.reason = function () {
                            if (!this.isRejected()) {
                                throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
                            }
                            return this._settledValue();
                        };

                        var isFulfilled = PromiseInspection.prototype.isFulfilled = function () {
                            return (this._bitField & 33554432) !== 0;
                        };

                        var isRejected = PromiseInspection.prototype.isRejected = function () {
                            return (this._bitField & 16777216) !== 0;
                        };

                        var isPending = PromiseInspection.prototype.isPending = function () {
                            return (this._bitField & 50397184) === 0;
                        };

                        var isResolved = PromiseInspection.prototype.isResolved = function () {
                            return (this._bitField & 50331648) !== 0;
                        };

                        PromiseInspection.prototype.isCancelled = function () {
                            return (this._bitField & 8454144) !== 0;
                        };

                        Promise.prototype.__isCancelled = function () {
                            return (this._bitField & 65536) === 65536;
                        };

                        Promise.prototype._isCancelled = function () {
                            return this._target().__isCancelled();
                        };

                        Promise.prototype.isCancelled = function () {
                            return (this._target()._bitField & 8454144) !== 0;
                        };

                        Promise.prototype.isPending = function () {
                            return isPending.call(this._target());
                        };

                        Promise.prototype.isRejected = function () {
                            return isRejected.call(this._target());
                        };

                        Promise.prototype.isFulfilled = function () {
                            return isFulfilled.call(this._target());
                        };

                        Promise.prototype.isResolved = function () {
                            return isResolved.call(this._target());
                        };

                        Promise.prototype.value = function () {
                            return value.call(this._target());
                        };

                        Promise.prototype.reason = function () {
                            var target = this._target();
                            target._unsetRejectionIsUnhandled();
                            return reason.call(target);
                        };

                        Promise.prototype._value = function () {
                            return this._settledValue();
                        };

                        Promise.prototype._reason = function () {
                            this._unsetRejectionIsUnhandled();
                            return this._settledValue();
                        };

                        Promise.PromiseInspection = PromiseInspection;
                    };
                }, {}], 33: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL) {
                        var util = _dereq_("./util");
                        var errorObj = util.errorObj;
                        var isObject = util.isObject;

                        function tryConvertToPromise(obj, context) {
                            if (isObject(obj)) {
                                if (obj instanceof Promise) return obj;
                                var then = getThen(obj);
                                if (then === errorObj) {
                                    if (context) context._pushContext();
                                    var ret = Promise.reject(then.e);
                                    if (context) context._popContext();
                                    return ret;
                                } else if (typeof then === "function") {
                                    if (isAnyBluebirdPromise(obj)) {
                                        var ret = new Promise(INTERNAL);
                                        obj._then(ret._fulfill, ret._reject, undefined, ret, null);
                                        return ret;
                                    }
                                    return doThenable(obj, then, context);
                                }
                            }
                            return obj;
                        }

                        function doGetThen(obj) {
                            return obj.then;
                        }

                        function getThen(obj) {
                            try {
                                return doGetThen(obj);
                            } catch (e) {
                                errorObj.e = e;
                                return errorObj;
                            }
                        }

                        var hasProp = {}.hasOwnProperty;
                        function isAnyBluebirdPromise(obj) {
                            try {
                                return hasProp.call(obj, "_promise0");
                            } catch (e) {
                                return false;
                            }
                        }

                        function doThenable(x, then, context) {
                            var promise = new Promise(INTERNAL);
                            var ret = promise;
                            if (context) context._pushContext();
                            promise._captureStackTrace();
                            if (context) context._popContext();
                            var synchronous = true;
                            var result = util.tryCatch(then).call(x, resolve, reject);
                            synchronous = false;

                            if (promise && result === errorObj) {
                                promise._rejectCallback(result.e, true, true);
                                promise = null;
                            }

                            function resolve(value) {
                                if (!promise) return;
                                promise._resolveCallback(value);
                                promise = null;
                            }

                            function reject(reason) {
                                if (!promise) return;
                                promise._rejectCallback(reason, synchronous, true);
                                promise = null;
                            }
                            return ret;
                        }

                        return tryConvertToPromise;
                    };
                }, { "./util": 36 }], 34: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, INTERNAL, debug) {
                        var util = _dereq_("./util");
                        var TimeoutError = Promise.TimeoutError;

                        function HandleWrapper(handle) {
                            this.handle = handle;
                        }

                        HandleWrapper.prototype._resultCancelled = function () {
                            clearTimeout(this.handle);
                        };

                        var afterValue = function (value) {
                            return delay(+this).thenReturn(value);
                        };
                        var delay = Promise.delay = function (ms, value) {
                            var ret;
                            var handle;
                            if (value !== undefined) {
                                ret = Promise.resolve(value)._then(afterValue, null, null, ms, undefined);
                                if (debug.cancellation() && value instanceof Promise) {
                                    ret._setOnCancel(value);
                                }
                            } else {
                                ret = new Promise(INTERNAL);
                                handle = setTimeout(function () {
                                    ret._fulfill();
                                }, +ms);
                                if (debug.cancellation()) {
                                    ret._setOnCancel(new HandleWrapper(handle));
                                }
                                ret._captureStackTrace();
                            }
                            ret._setAsyncGuaranteed();
                            return ret;
                        };

                        Promise.prototype.delay = function (ms) {
                            return delay(ms, this);
                        };

                        var afterTimeout = function (promise, message, parent) {
                            var err;
                            if (typeof message !== "string") {
                                if (message instanceof Error) {
                                    err = message;
                                } else {
                                    err = new TimeoutError("operation timed out");
                                }
                            } else {
                                err = new TimeoutError(message);
                            }
                            util.markAsOriginatingFromRejection(err);
                            promise._attachExtraTrace(err);
                            promise._reject(err);

                            if (parent != null) {
                                parent.cancel();
                            }
                        };

                        function successClear(value) {
                            clearTimeout(this.handle);
                            return value;
                        }

                        function failureClear(reason) {
                            clearTimeout(this.handle);
                            throw reason;
                        }

                        Promise.prototype.timeout = function (ms, message) {
                            ms = +ms;
                            var ret, parent;

                            var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
                                if (ret.isPending()) {
                                    afterTimeout(ret, message, parent);
                                }
                            }, ms));

                            if (debug.cancellation()) {
                                parent = this.then();
                                ret = parent._then(successClear, failureClear, undefined, handleWrapper, undefined);
                                ret._setOnCancel(handleWrapper);
                            } else {
                                ret = this._then(successClear, failureClear, undefined, handleWrapper, undefined);
                            }

                            return ret;
                        };
                    };
                }, { "./util": 36 }], 35: [function (_dereq_, module, exports) {
                    "use strict";

                    module.exports = function (Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug) {
                        var util = _dereq_("./util");
                        var TypeError = _dereq_("./errors").TypeError;
                        var inherits = _dereq_("./util").inherits;
                        var errorObj = util.errorObj;
                        var tryCatch = util.tryCatch;
                        var NULL = {};

                        function thrower(e) {
                            setTimeout(function () {
                                throw e;
                            }, 0);
                        }

                        function castPreservingDisposable(thenable) {
                            var maybePromise = tryConvertToPromise(thenable);
                            if (maybePromise !== thenable && typeof thenable._isDisposable === "function" && typeof thenable._getDisposer === "function" && thenable._isDisposable()) {
                                maybePromise._setDisposable(thenable._getDisposer());
                            }
                            return maybePromise;
                        }
                        function dispose(resources, inspection) {
                            var i = 0;
                            var len = resources.length;
                            var ret = new Promise(INTERNAL);
                            function iterator() {
                                if (i >= len) return ret._fulfill();
                                var maybePromise = castPreservingDisposable(resources[i++]);
                                if (maybePromise instanceof Promise && maybePromise._isDisposable()) {
                                    try {
                                        maybePromise = tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection), resources.promise);
                                    } catch (e) {
                                        return thrower(e);
                                    }
                                    if (maybePromise instanceof Promise) {
                                        return maybePromise._then(iterator, thrower, null, null, null);
                                    }
                                }
                                iterator();
                            }
                            iterator();
                            return ret;
                        }

                        function Disposer(data, promise, context) {
                            this._data = data;
                            this._promise = promise;
                            this._context = context;
                        }

                        Disposer.prototype.data = function () {
                            return this._data;
                        };

                        Disposer.prototype.promise = function () {
                            return this._promise;
                        };

                        Disposer.prototype.resource = function () {
                            if (this.promise().isFulfilled()) {
                                return this.promise().value();
                            }
                            return NULL;
                        };

                        Disposer.prototype.tryDispose = function (inspection) {
                            var resource = this.resource();
                            var context = this._context;
                            if (context !== undefined) context._pushContext();
                            var ret = resource !== NULL ? this.doDispose(resource, inspection) : null;
                            if (context !== undefined) context._popContext();
                            this._promise._unsetDisposable();
                            this._data = null;
                            return ret;
                        };

                        Disposer.isDisposer = function (d) {
                            return d != null && typeof d.resource === "function" && typeof d.tryDispose === "function";
                        };

                        function FunctionDisposer(fn, promise, context) {
                            this.constructor$(fn, promise, context);
                        }
                        inherits(FunctionDisposer, Disposer);

                        FunctionDisposer.prototype.doDispose = function (resource, inspection) {
                            var fn = this.data();
                            return fn.call(resource, resource, inspection);
                        };

                        function maybeUnwrapDisposer(value) {
                            if (Disposer.isDisposer(value)) {
                                this.resources[this.index]._setDisposable(value);
                                return value.promise();
                            }
                            return value;
                        }

                        function ResourceList(length) {
                            this.length = length;
                            this.promise = null;
                            this[length - 1] = null;
                        }

                        ResourceList.prototype._resultCancelled = function () {
                            var len = this.length;
                            for (var i = 0; i < len; ++i) {
                                var item = this[i];
                                if (item instanceof Promise) {
                                    item.cancel();
                                }
                            }
                        };

                        Promise.using = function () {
                            var len = arguments.length;
                            if (len < 2) return apiRejection("you must pass at least 2 arguments to Promise.using");
                            var fn = arguments[len - 1];
                            if (typeof fn !== "function") {
                                return apiRejection("expecting a function but got " + util.classString(fn));
                            }
                            var input;
                            var spreadArgs = true;
                            if (len === 2 && Array.isArray(arguments[0])) {
                                input = arguments[0];
                                len = input.length;
                                spreadArgs = false;
                            } else {
                                input = arguments;
                                len--;
                            }
                            var resources = new ResourceList(len);
                            for (var i = 0; i < len; ++i) {
                                var resource = input[i];
                                if (Disposer.isDisposer(resource)) {
                                    var disposer = resource;
                                    resource = resource.promise();
                                    resource._setDisposable(disposer);
                                } else {
                                    var maybePromise = tryConvertToPromise(resource);
                                    if (maybePromise instanceof Promise) {
                                        resource = maybePromise._then(maybeUnwrapDisposer, null, null, {
                                            resources: resources,
                                            index: i
                                        }, undefined);
                                    }
                                }
                                resources[i] = resource;
                            }

                            var reflectedResources = new Array(resources.length);
                            for (var i = 0; i < reflectedResources.length; ++i) {
                                reflectedResources[i] = Promise.resolve(resources[i]).reflect();
                            }

                            var resultPromise = Promise.all(reflectedResources).then(function (inspections) {
                                for (var i = 0; i < inspections.length; ++i) {
                                    var inspection = inspections[i];
                                    if (inspection.isRejected()) {
                                        errorObj.e = inspection.error();
                                        return errorObj;
                                    } else if (!inspection.isFulfilled()) {
                                        resultPromise.cancel();
                                        return;
                                    }
                                    inspections[i] = inspection.value();
                                }
                                promise._pushContext();

                                fn = tryCatch(fn);
                                var ret = spreadArgs ? fn.apply(undefined, inspections) : fn(inspections);
                                var promiseCreated = promise._popContext();
                                debug.checkForgottenReturns(ret, promiseCreated, "Promise.using", promise);
                                return ret;
                            });

                            var promise = resultPromise.lastly(function () {
                                var inspection = new Promise.PromiseInspection(resultPromise);
                                return dispose(resources, inspection);
                            });
                            resources.promise = promise;
                            promise._setOnCancel(resources);
                            return promise;
                        };

                        Promise.prototype._setDisposable = function (disposer) {
                            this._bitField = this._bitField | 131072;
                            this._disposer = disposer;
                        };

                        Promise.prototype._isDisposable = function () {
                            return (this._bitField & 131072) > 0;
                        };

                        Promise.prototype._getDisposer = function () {
                            return this._disposer;
                        };

                        Promise.prototype._unsetDisposable = function () {
                            this._bitField = this._bitField & ~131072;
                            this._disposer = undefined;
                        };

                        Promise.prototype.disposer = function (fn) {
                            if (typeof fn === "function") {
                                return new FunctionDisposer(fn, this, createContext());
                            }
                            throw new TypeError();
                        };
                    };
                }, { "./errors": 12, "./util": 36 }], 36: [function (_dereq_, module, exports) {
                    "use strict";

                    var es5 = _dereq_("./es5");
                    var canEvaluate = typeof navigator == "undefined";

                    var errorObj = { e: {} };
                    var tryCatchTarget;
                    var globalObject = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this !== undefined ? this : null;

                    function tryCatcher() {
                        try {
                            var target = tryCatchTarget;
                            tryCatchTarget = null;
                            return target.apply(this, arguments);
                        } catch (e) {
                            errorObj.e = e;
                            return errorObj;
                        }
                    }
                    function tryCatch(fn) {
                        tryCatchTarget = fn;
                        return tryCatcher;
                    }

                    var inherits = function (Child, Parent) {
                        var hasProp = {}.hasOwnProperty;

                        function T() {
                            this.constructor = Child;
                            this.constructor$ = Parent;
                            for (var propertyName in Parent.prototype) {
                                if (hasProp.call(Parent.prototype, propertyName) && propertyName.charAt(propertyName.length - 1) !== "$") {
                                    this[propertyName + "$"] = Parent.prototype[propertyName];
                                }
                            }
                        }
                        T.prototype = Parent.prototype;
                        Child.prototype = new T();
                        return Child.prototype;
                    };

                    function isPrimitive(val) {
                        return val == null || val === true || val === false || typeof val === "string" || typeof val === "number";
                    }

                    function isObject(value) {
                        return typeof value === "function" || typeof value === "object" && value !== null;
                    }

                    function maybeWrapAsError(maybeError) {
                        if (!isPrimitive(maybeError)) return maybeError;

                        return new Error(safeToString(maybeError));
                    }

                    function withAppended(target, appendee) {
                        var len = target.length;
                        var ret = new Array(len + 1);
                        var i;
                        for (i = 0; i < len; ++i) {
                            ret[i] = target[i];
                        }
                        ret[i] = appendee;
                        return ret;
                    }

                    function getDataPropertyOrDefault(obj, key, defaultValue) {
                        if (es5.isES5) {
                            var desc = Object.getOwnPropertyDescriptor(obj, key);

                            if (desc != null) {
                                return desc.get == null && desc.set == null ? desc.value : defaultValue;
                            }
                        } else {
                            return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
                        }
                    }

                    function notEnumerableProp(obj, name, value) {
                        if (isPrimitive(obj)) return obj;
                        var descriptor = {
                            value: value,
                            configurable: true,
                            enumerable: false,
                            writable: true
                        };
                        es5.defineProperty(obj, name, descriptor);
                        return obj;
                    }

                    function thrower(r) {
                        throw r;
                    }

                    var inheritedDataKeys = function () {
                        var excludedPrototypes = [Array.prototype, Object.prototype, Function.prototype];

                        var isExcludedProto = function (val) {
                            for (var i = 0; i < excludedPrototypes.length; ++i) {
                                if (excludedPrototypes[i] === val) {
                                    return true;
                                }
                            }
                            return false;
                        };

                        if (es5.isES5) {
                            var getKeys = Object.getOwnPropertyNames;
                            return function (obj) {
                                var ret = [];
                                var visitedKeys = Object.create(null);
                                while (obj != null && !isExcludedProto(obj)) {
                                    var keys;
                                    try {
                                        keys = getKeys(obj);
                                    } catch (e) {
                                        return ret;
                                    }
                                    for (var i = 0; i < keys.length; ++i) {
                                        var key = keys[i];
                                        if (visitedKeys[key]) continue;
                                        visitedKeys[key] = true;
                                        var desc = Object.getOwnPropertyDescriptor(obj, key);
                                        if (desc != null && desc.get == null && desc.set == null) {
                                            ret.push(key);
                                        }
                                    }
                                    obj = es5.getPrototypeOf(obj);
                                }
                                return ret;
                            };
                        } else {
                            var hasProp = {}.hasOwnProperty;
                            return function (obj) {
                                if (isExcludedProto(obj)) return [];
                                var ret = [];

                                /*jshint forin:false */
                                enumeration: for (var key in obj) {
                                    if (hasProp.call(obj, key)) {
                                        ret.push(key);
                                    } else {
                                        for (var i = 0; i < excludedPrototypes.length; ++i) {
                                            if (hasProp.call(excludedPrototypes[i], key)) {
                                                continue enumeration;
                                            }
                                        }
                                        ret.push(key);
                                    }
                                }
                                return ret;
                            };
                        }
                    }();

                    var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
                    function isClass(fn) {
                        try {
                            if (typeof fn === "function") {
                                var keys = es5.names(fn.prototype);

                                var hasMethods = es5.isES5 && keys.length > 1;
                                var hasMethodsOtherThanConstructor = keys.length > 0 && !(keys.length === 1 && keys[0] === "constructor");
                                var hasThisAssignmentAndStaticMethods = thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

                                if (hasMethods || hasMethodsOtherThanConstructor || hasThisAssignmentAndStaticMethods) {
                                    return true;
                                }
                            }
                            return false;
                        } catch (e) {
                            return false;
                        }
                    }

                    function toFastProperties(obj) {
                        /*jshint -W027,-W055,-W031*/
                        function FakeConstructor() {}
                        FakeConstructor.prototype = obj;
                        var l = 8;
                        while (l--) new FakeConstructor();
                        return obj;
                        eval(obj);
                    }

                    var rident = /^[a-z$_][a-z$_0-9]*$/i;
                    function isIdentifier(str) {
                        return rident.test(str);
                    }

                    function filledRange(count, prefix, suffix) {
                        var ret = new Array(count);
                        for (var i = 0; i < count; ++i) {
                            ret[i] = prefix + i + suffix;
                        }
                        return ret;
                    }

                    function safeToString(obj) {
                        try {
                            return obj + "";
                        } catch (e) {
                            return "[no string representation]";
                        }
                    }

                    function isError(obj) {
                        return obj !== null && typeof obj === "object" && typeof obj.message === "string" && typeof obj.name === "string";
                    }

                    function markAsOriginatingFromRejection(e) {
                        try {
                            notEnumerableProp(e, "isOperational", true);
                        } catch (ignore) {}
                    }

                    function originatesFromRejection(e) {
                        if (e == null) return false;
                        return e instanceof Error["__BluebirdErrorTypes__"].OperationalError || e["isOperational"] === true;
                    }

                    function canAttachTrace(obj) {
                        return isError(obj) && es5.propertyIsWritable(obj, "stack");
                    }

                    var ensureErrorObject = function () {
                        if (!("stack" in new Error())) {
                            return function (value) {
                                if (canAttachTrace(value)) return value;
                                try {
                                    throw new Error(safeToString(value));
                                } catch (err) {
                                    return err;
                                }
                            };
                        } else {
                            return function (value) {
                                if (canAttachTrace(value)) return value;
                                return new Error(safeToString(value));
                            };
                        }
                    }();

                    function classString(obj) {
                        return {}.toString.call(obj);
                    }

                    function copyDescriptors(from, to, filter) {
                        var keys = es5.names(from);
                        for (var i = 0; i < keys.length; ++i) {
                            var key = keys[i];
                            if (filter(key)) {
                                try {
                                    es5.defineProperty(to, key, es5.getDescriptor(from, key));
                                } catch (ignore) {}
                            }
                        }
                    }

                    var asArray = function (v) {
                        if (es5.isArray(v)) {
                            return v;
                        }
                        return null;
                    };

                    if (typeof Symbol !== "undefined" && Symbol.iterator) {
                        var ArrayFrom = typeof Array.from === "function" ? function (v) {
                            return Array.from(v);
                        } : function (v) {
                            var ret = [];
                            var it = v[Symbol.iterator]();
                            var itResult;
                            while (!(itResult = it.next()).done) {
                                ret.push(itResult.value);
                            }
                            return ret;
                        };

                        asArray = function (v) {
                            if (es5.isArray(v)) {
                                return v;
                            } else if (v != null && typeof v[Symbol.iterator] === "function") {
                                return ArrayFrom(v);
                            }
                            return null;
                        };
                    }

                    var isNode = typeof process !== "undefined" && classString(process).toLowerCase() === "[object process]";

                    function env(key, def) {
                        return isNode ? process.env[key] : def;
                    }

                    function getNativePromise() {
                        if (typeof Promise === "function") {
                            try {
                                var promise = new Promise(function () {});
                                if ({}.toString.call(promise) === "[object Promise]") {
                                    return Promise;
                                }
                            } catch (e) {}
                        }
                    }

                    function domainBind(self, cb) {
                        return self.bind(cb);
                    }

                    var ret = {
                        isClass: isClass,
                        isIdentifier: isIdentifier,
                        inheritedDataKeys: inheritedDataKeys,
                        getDataPropertyOrDefault: getDataPropertyOrDefault,
                        thrower: thrower,
                        isArray: es5.isArray,
                        asArray: asArray,
                        notEnumerableProp: notEnumerableProp,
                        isPrimitive: isPrimitive,
                        isObject: isObject,
                        isError: isError,
                        canEvaluate: canEvaluate,
                        errorObj: errorObj,
                        tryCatch: tryCatch,
                        inherits: inherits,
                        withAppended: withAppended,
                        maybeWrapAsError: maybeWrapAsError,
                        toFastProperties: toFastProperties,
                        filledRange: filledRange,
                        toString: safeToString,
                        canAttachTrace: canAttachTrace,
                        ensureErrorObject: ensureErrorObject,
                        originatesFromRejection: originatesFromRejection,
                        markAsOriginatingFromRejection: markAsOriginatingFromRejection,
                        classString: classString,
                        copyDescriptors: copyDescriptors,
                        hasDevTools: typeof chrome !== "undefined" && chrome && typeof chrome.loadTimes === "function",
                        isNode: isNode,
                        env: env,
                        global: globalObject,
                        getNativePromise: getNativePromise,
                        domainBind: domainBind
                    };
                    ret.isRecentNode = ret.isNode && function () {
                        var version = process.versions.node.split(".").map(Number);
                        return version[0] === 0 && version[1] > 10 || version[0] > 0;
                    }();

                    if (ret.isNode) ret.toFastProperties(process);

                    try {
                        throw new Error();
                    } catch (e) {
                        ret.lastLineError = e;
                    }
                    module.exports = ret;
                }, { "./es5": 13 }] }, {}, [4])(4);
        });;if (typeof window !== 'undefined' && window !== null) {
            window.P = window.Promise;
        } else if (typeof self !== 'undefined' && self !== null) {
            self.P = self.Promise;
        }
    })(this);

    return _retrieveGlobal();
});
$__System.registerDynamic("69", ["6a"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("6a");
  return module.exports;
});
$__System.register("6b", ["69"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var bluebird_1;
    var Time;
    return {
        setters: [function (bluebird_1_1) {
            bluebird_1 = bluebird_1_1;
        }],
        execute: function () {
            Time = function () {
                function Time() {}
                Time.wait = function (seconds) {
                    return new bluebird_1.default(function (resolve, reject) {
                        TweenMax.delayedCall(seconds, function () {
                            resolve();
                        });
                    });
                };
                Time.count = function (seconds, updateCallback, updateContext) {
                    var obj = { seconds: seconds },
                        currentSeconds = seconds;
                    return new bluebird_1.default(function (resolve, reject) {
                        TweenMax.to(obj, seconds, {
                            ease: Linear.easeNone,
                            seconds: 0, roundProps: "seconds", onUpdate: function () {
                                if (obj.seconds !== currentSeconds) {
                                    currentSeconds = obj.seconds;
                                    if (updateCallback) {
                                        updateCallback.apply(updateContext, [obj.seconds]);
                                    }
                                }
                            }, onComplete: resolve
                        });
                    });
                };
                return Time;
            }();
            exports_1("Time", Time);
        }
    };
});
$__System.register('5a', ['67', '68', '6b'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (Device_1_1) {
            exports_1({
                "Device": Device_1_1["Device"]
            });
        }, function (Animator_1_1) {
            exports_1({
                "Animator": Animator_1_1["Animator"]
            });
        }, function (Time_1_1) {
            exports_1({
                "Time": Time_1_1["Time"]
            });
        }],
        execute: function () {}
    };
});
$__System.register("6c", ["6d"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var State;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            State = function (_super) {
                __extends(State, _super);
                function State() {
                    _super.call(this);
                    this._updateable = false;
                    this.app = core_1.PIXIApplication.getInstance();
                    this.game = this.app.game;
                    this.camera = this.app.camera;
                }
                State.prototype.init = function () {};
                State.prototype.preload = function () {};
                State.prototype.build = function () {};
                State.prototype.transitionIn = function () {};
                State.prototype.transitionOut = function () {};
                State.prototype.update = function () {};
                State.prototype.shutdown = function () {};
                Object.defineProperty(State.prototype, "add", {
                    // getter / setter
                    get: function () {
                        return this.app.addToGame;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(State.prototype, "addToUI", {
                    get: function () {
                        return this.app.addToUI;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(State.prototype, "updateable", {
                    get: function () {
                        return this._updateable;
                    },
                    set: function (value) {
                        this._updateable = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return State;
            }(PIXI.Container);
            exports_1("State", State);
        }
    };
});
$__System.register('6e', ['6d'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var Text;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            Text = function (_super) {
                __extends(Text, _super);
                function Text(x, y, text, font, fontSize, fontColor) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    if (text === void 0) {
                        text = '';
                    }
                    if (fontSize === void 0) {
                        fontSize = 26;
                    }
                    if (fontColor === void 0) {
                        fontColor = 0x000000;
                    }
                    var style = {
                        fontFamily: font.fontFamily || 'Arial',
                        fontWeight: font.fontWeight || 400,
                        fontSize: fontSize,
                        fill: fontColor
                    };
                    _super.call(this, text, style, core_1.PIXIApplication.getInstance().resolution);
                    this.x = x;
                    this.y = y;
                }
                return Text;
            }(PIXI.Text);
            exports_1("Text", Text);
        }
    };
});
$__System.register('6f', ['6d'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var Sprite;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            Sprite = function (_super) {
                __extends(Sprite, _super);
                function Sprite(x, y, atlasId, textureId) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    if (atlasId === void 0) {
                        atlasId = null;
                    }
                    if (textureId === void 0) {
                        textureId = null;
                    }
                    _super.call(this, !textureId ? typeof atlasId === 'string' ? PIXI.Texture.fromImage(atlasId) : atlasId : core_1.Loader.getTextureById(atlasId, textureId));
                    this.x = x;
                    this.y = y;
                }
                return Sprite;
            }(PIXI.Sprite);
            exports_1("Sprite", Sprite);
        }
    };
});
$__System.register('70', ['6d'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var TileSprite;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            TileSprite = function (_super) {
                __extends(TileSprite, _super);
                function TileSprite(x, y, atlasId, textureId, width, height) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    if (atlasId === void 0) {
                        atlasId = null;
                    }
                    if (textureId === void 0) {
                        textureId = null;
                    }
                    if (width === void 0) {
                        width = 0;
                    }
                    if (height === void 0) {
                        height = 0;
                    }
                    _super.call(this, !textureId ? typeof atlasId === 'string' ? PIXI.Texture.fromImage(atlasId) : atlasId : core_1.Loader.getTextureById(atlasId, textureId), width, height);
                    this.x = x;
                    this.y = y;
                }
                return TileSprite;
            }(PIXI.extras.TilingSprite);
            exports_1("TileSprite", TileSprite);
        }
    };
});
$__System.register("71", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var MovieClip;
    return {
        setters: [],
        execute: function () {
            MovieClip = function (_super) {
                __extends(MovieClip, _super);
                function MovieClip(x, y, frames) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    _super.call(this, frames);
                    this.x = x;
                    this.y = y;
                }
                return MovieClip;
            }(PIXI.extras.MovieClip);
            exports_1("MovieClip", MovieClip);
        }
    };
});
$__System.register("72", ["6d"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var Container;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            Container = function (_super) {
                __extends(Container, _super);
                function Container(x, y) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    _super.call(this);
                    this._updateable = true;
                    this.app = core_1.PIXIApplication.getInstance();
                    this.x = x;
                    this.y = y;
                }
                Container.prototype.update = function () {
                    // override me
                };
                Object.defineProperty(Container.prototype, "updateable", {
                    get: function () {
                        return this._updateable;
                    },
                    set: function (value) {
                        this._updateable = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Container;
            }(PIXI.Container);
            exports_1("Container", Container);
        }
    };
});
$__System.register("73", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {}
    };
});
$__System.register('74', ['6d', '57'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var core_1, display_1;
    var Factory;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }],
        execute: function () {
            Factory = function () {
                function Factory(defaultContainer) {
                    if (defaultContainer === void 0) {
                        defaultContainer = null;
                    }
                    this.defaultContainer = defaultContainer;
                }
                Factory.prototype.text = function (x, y, text, font, fontSize, fontColor, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.Text(x, y, text, font, fontSize, fontColor));
                };
                Factory.prototype.sprite = function (x, y, atlasId, textureId, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.Sprite(x, y, atlasId, textureId));
                };
                Factory.prototype.rope = function (x, y, atlasId, textureId, points, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.Rope(x, y, atlasId, textureId, points));
                };
                Factory.prototype.tileSprite = function (x, y, atlasId, textureId, width, height, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.TileSprite(x, y, atlasId, textureId, width, height));
                };
                Factory.prototype.movieClip = function (x, y, frames, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.MovieClip(x, y, frames));
                };
                Factory.prototype.container = function (x, y, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(new display_1.Container(x, y));
                };
                Factory.prototype.existing = function (existingElement, container) {
                    if (container === void 0) {
                        container = null;
                    }
                    if (!container) {
                        container = this.defaultContainerInternal;
                    }
                    return container.addChild(existingElement);
                };
                Object.defineProperty(Factory.prototype, "defaultContainerInternal", {
                    // private methods
                    get: function () {
                        return this.defaultContainer || core_1.PIXIApplication.getInstance().state.currentState;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Factory;
            }();
            exports_1("Factory", Factory);
        }
    };
});
$__System.register('75', ['76'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var PIXIApplication_1;
    var StateManager;
    return {
        setters: [function (PIXIApplication_1_1) {
            PIXIApplication_1 = PIXIApplication_1_1;
        }],
        execute: function () {
            StateManager = function () {
                function StateManager() {
                    this.lookup = {};
                    this.currentState = null;
                    this.nextState = null;
                    this.app = PIXIApplication_1.PIXIApplication.getInstance();
                }
                StateManager.prototype.add = function (StateClass, id) {
                    if (this.lookup[id] !== undefined) {
                        throw 'already has the state:' + id;
                    }
                    // create state
                    var state = this.lookup[id] = new StateClass();
                    state.visible = false;
                    this.app.game.addChild(state);
                };
                StateManager.prototype.start = function (id) {
                    this.currentState = this.lookup[id];
                    this.bootCurrentState();
                };
                StateManager.prototype.to = function (id) {
                    if (!this.currentState) {
                        throw 'StateManager must be started before "to" can be called';
                    }
                    this.nextState = this.lookup[id];
                    this.currentState.shutdown();
                    this.currentState.visible = false;
                    this.currentState.updateable = false;
                    // set to next state
                    this.currentState = this.nextState;
                    this.bootCurrentState();
                    // nullify nextstate
                    this.nextState = null;
                };
                StateManager.prototype.loadComplete = function () {
                    this.buildCurrentState();
                };
                // private methods
                StateManager.prototype.bootCurrentState = function () {
                    this.currentState.init();
                    this.currentState.preload();
                    this.currentState.visible = true;
                    if (this.app.asset.hasResources) {
                        this.app.asset.start();
                    } else {
                        this.buildCurrentState();
                    }
                };
                StateManager.prototype.buildCurrentState = function () {
                    this.currentState.build();
                    this.currentState.updateable = true;
                };
                return StateManager;
            }();
            exports_1("StateManager", StateManager);
        }
    };
});
$__System.register("77", ["76"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var PIXIApplication_1;
    var Camera;
    return {
        setters: [function (PIXIApplication_1_1) {
            PIXIApplication_1 = PIXIApplication_1_1;
        }],
        execute: function () {
            Camera = function () {
                function Camera() {
                    this._x = 0;
                    this._y = 0;
                    this._position = { x: 0, y: 0 };
                    this.app = PIXIApplication_1.PIXIApplication.getInstance();
                }
                Camera.prototype.setPosition = function () {
                    this._position = { x: this._x, y: this._y };
                    this.app.updateCamera();
                };
                Camera.prototype.shake = function (speed, distance, times) {
                    if (speed === void 0) {
                        speed = 0.02;
                    }
                    if (distance === void 0) {
                        distance = 2;
                    }
                    if (times === void 0) {
                        times = 20;
                    }
                    TweenMax.to(this, speed, { x: "+=" + distance.toString(), y: "+=" + distance.toString(), yoyo: true, repeat: times });
                };
                Object.defineProperty(Camera.prototype, "x", {
                    get: function () {
                        return this._x;
                    },
                    // getter / setter
                    set: function (value) {
                        this._x = value;
                        this.setPosition();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Camera.prototype, "y", {
                    get: function () {
                        return this._x;
                    },
                    set: function (value) {
                        this._y = value;
                        this.setPosition();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Camera.prototype, "position", {
                    get: function () {
                        if (!this._position) {
                            this._position = { x: 0, y: 0 };
                        }
                        return this._position;
                    },
                    set: function (value) {
                        if (value.x !== undefined) {
                            this._x = value.x;
                        }
                        if (value.x !== undefined) {
                            this._y = value.y;
                        }
                        this.setPosition();
                    },
                    enumerable: true,
                    configurable: true
                });
                return Camera;
            }();
            exports_1("Camera", Camera);
        }
    };
});
$__System.register('78', ['76'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var PIXIApplication_1;
    var Loader;
    return {
        setters: [function (PIXIApplication_1_1) {
            PIXIApplication_1 = PIXIApplication_1_1;
        }],
        execute: function () {
            Loader = function () {
                function Loader() {
                    this.percent = 0;
                    this.hasResources = false;
                    this.hasSoundResources = false;
                    this.numSounds = 0;
                    this.loaderProgress = 0;
                    this.app = PIXIApplication_1.PIXIApplication.getInstance();
                    PIXI.loader.on('progress', this.onLoadProgress, this);
                    PIXI.loader.on('complete', this.onLoadComplete, this);
                }
                Loader.prototype.load = function (resource) {
                    PIXI.loader.add(resource.id, this.getResolutionBasedUrl(resource));
                    this.hasResources = true;
                };
                Loader.prototype.loadSound = function (resource) {
                    var _this = this;
                    this.hasResources = true;
                    this.hasSoundResources = true;
                    this.numSounds++;
                    var res = resource;
                    if (resource.extensions != null && resource.extensions !== undefined) {
                        var src_1 = resource.src;
                        if (res.src.indexOf('.') > 0) {
                            var aSrc = res.src.split('.');
                            var ext = aSrc.pop();
                            src_1 = aSrc.join('');
                        }
                        var srclist_1 = [];
                        resource.extensions.forEach(function (extension) {
                            var url = src_1 + '.' + extension;
                            if (srclist_1.indexOf(url) === -1) {
                                srclist_1.push(url);
                            }
                        });
                        res.src = srclist_1;
                    }
                    res.onload = function () {
                        _this.onSoundLoadComplete();
                    };
                    this.app.sound.add(res.id, new Howl(res));
                };
                Loader.prototype.start = function () {
                    PIXI.loader.load();
                };
                Loader.prototype.onLoadProgress = function (loader, resource) {
                    var progress = loader ? loader.progress : this.loaderProgress;
                    this.loaderProgress = progress;
                    this.percent = progress - Loader.DEFAULT_SOUND_PERCENTAGE * this.numSounds;
                };
                Loader.prototype.onLoadComplete = function (complete) {
                    this.hasResources = false;
                    if (this.numSounds === 0) {
                        this.app.state.loadComplete();
                    }
                };
                Loader.prototype.onSoundLoadComplete = function () {
                    this.numSounds--;
                    this.onLoadProgress(null);
                    if (this.numSounds === 0) {
                        this.hasSoundResources = false;
                        this.app.state.loadComplete();
                    }
                };
                Loader.prototype.getResolutionBasedUrl = function (resource) {
                    if (this.app.resolution === 2) {
                        return resource.hdurl || resource.url;
                    }
                    return resource.url;
                };
                Loader.getTextureById = function (atlasId, textureId) {
                    return PIXI.loader.resources[atlasId].textures[textureId];
                };
                Loader.DEFAULT_SOUND_PERCENTAGE = 5;
                Loader.HOWLER_DEFAULT_RESOURCE = { src: null, autoplay: false, loop: false, volume: 1.0 };
                return Loader;
            }();
            exports_1("Loader", Loader);
        }
    };
});
$__System.register('79', ['7a'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Model_1;
    var CopyModel;
    return {
        setters: [function (Model_1_1) {
            Model_1 = Model_1_1;
        }],
        execute: function () {
            CopyModel = function (_super) {
                __extends(CopyModel, _super);
                function CopyModel(data) {
                    if (data === void 0) {
                        data = null;
                    }
                    _super.call(this, data);
                    this._languages = {};
                    this._languages['en'] = this._data;
                }
                CopyModel.prototype.getCopy = function (groupId, itemId) {
                    return this.getCopyGroup(groupId)[itemId];
                };
                CopyModel.prototype.getCopyGroup = function (groupId) {
                    return this._data[groupId];
                };
                CopyModel.prototype.addLanguage = function (languageId, data) {
                    this._languages[languageId] = data;
                };
                CopyModel.prototype.changeLanguage = function (languageId) {
                    if (typeof this._languages[languageId] === 'undefined') throw new Error('there is no language ' + languageId);
                    this._data = this._languages[languageId];
                };
                Object.defineProperty(CopyModel.prototype, "name", {
                    get: function () {
                        return CopyModel.MODEL_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                CopyModel.MODEL_NAME = 'copyModel';
                return CopyModel;
            }(Model_1.Model);
            exports_1("CopyModel", CopyModel);
        }
    };
});
$__System.register("7b", ["7c"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Application_1;
    var Mediator;
    return {
        setters: [function (Application_1_1) {
            Application_1 = Application_1_1;
        }],
        execute: function () {
            Mediator = function () {
                function Mediator(_viewComponent, mediatorName, autoReg) {
                    if (_viewComponent === void 0) {
                        _viewComponent = null;
                    }
                    if (mediatorName === void 0) {
                        mediatorName = null;
                    }
                    if (autoReg === void 0) {
                        autoReg = true;
                    }
                    this._viewComponent = _viewComponent;
                    this.mediatorName = null;
                    this.app = Application_1.Application.getInstance();
                    this.mediatorName = mediatorName;
                    if (autoReg) {
                        this.register();
                    }
                }
                // private methods
                Mediator.prototype.register = function () {
                    this.app.registerMediator(this);
                };
                Mediator.prototype.remove = function () {
                    this.app.removeMediator(this);
                };
                Mediator.prototype.onRegister = function () {
                    // override me freely
                };
                Mediator.prototype.onRemoved = function () {};
                Mediator.prototype.destroy = function () {
                    this.remove();
                };
                Mediator.prototype.listNotificationInterests = function () {
                    return [];
                };
                Mediator.prototype.handleNotification = function (notification) {
                    /**
                     * default immplementation would look something like:
                     * switch( notification: dijon.INotification ){
                     * 		case Notifications.SOMETHING:
                     * 			// do something
                     * 			break;
                     * 		case Notifications.SOMETHING_ELSE:
                     * 			// do something else
                     * 			break;
                     * }
                     */
                };
                Mediator.prototype.sendNotification = function (notificationName, notificationBody) {
                    this.app.sendNotification(notificationName, notificationBody);
                };
                Object.defineProperty(Mediator.prototype, "viewComponent", {
                    get: function () {
                        return this._viewComponent;
                    },
                    // getter / setter
                    set: function (viewComponent) {
                        this._viewComponent = viewComponent;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Mediator.prototype, "name", {
                    get: function () {
                        return this.mediatorName || Mediator.MEDIATOR_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Mediator.MEDIATOR_NAME = 'Mediator';
                return Mediator;
            }();
            exports_1("Mediator", Mediator);
        }
    };
});
$__System.register("7a", ["7c"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Application_1;
    var Model;
    return {
        setters: [function (Application_1_1) {
            Application_1 = Application_1_1;
        }],
        execute: function () {
            Model = function () {
                function Model(dataKey, modelName) {
                    if (dataKey === void 0) {
                        dataKey = null;
                    }
                    if (modelName === void 0) {
                        modelName = null;
                    }
                    this.modelName = modelName;
                    this.app = Application_1.Application.getInstance();
                    if (dataKey) {
                        this.setData(dataKey);
                    }
                    this.app.registerModel(this);
                }
                Model.prototype.onRegister = function () {};
                Model.prototype.onRemoved = function () {};
                Model.prototype.setData = function (data) {
                    this._data = data;
                    return this._data;
                };
                Model.prototype.getData = function () {
                    return this._data;
                };
                Model.prototype.destroy = function () {
                    this.app.removeModel(this);
                };
                Object.defineProperty(Model.prototype, "name", {
                    get: function () {
                        return this.modelName || Model.MODEL_NAME;
                    },
                    enumerable: true,
                    configurable: true
                });
                Model.MODEL_NAME = 'Model';
                return Model;
            }();
            exports_1("Model", Model);
        }
    };
});
$__System.register("7d", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Notification;
    return {
        setters: [],
        execute: function () {
            Notification = function () {
                function Notification(name, body) {
                    if (body === void 0) {
                        body = null;
                    }
                    this.name = name;
                    this.body = body;
                }
                Notification.prototype.getName = function () {
                    return this.name;
                };
                Notification.prototype.setBody = function (body) {
                    this.body = body;
                };
                Notification.prototype.getBody = function () {
                    return this.body;
                };
                Notification.prototype.destroy = function () {
                    this.body = null;
                    this.name = null;
                };
                return Notification;
            }();
            exports_1("Notification", Notification);
        }
    };
});
$__System.register('7c', ['64'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var mvc_1;
    var Application;
    return {
        setters: [function (mvc_1_1) {
            mvc_1 = mvc_1_1;
        }],
        execute: function () {
            Application = function () {
                function Application(autoStart) {
                    if (autoStart === void 0) {
                        autoStart = true;
                    }
                    // public 
                    // protected        
                    this.mediator = null;
                    this.model = null;
                    this.models = {};
                    this.mediators = {};
                    this.observerMap = {};
                    if (Application.instance) {
                        throw Error(Application.SINGLETON_MSG);
                    }
                    Application.instance = this;
                    if (autoStart) {
                        this.startup();
                    }
                }
                Application.prototype.startup = function () {
                    console.log('app startup');
                    /// bootstrap this application
                };
                Application.prototype.registerModel = function (model) {
                    if (this.models[model.name]) {
                        throw new Error('Application:: a model with the name "' + model.name + '" already exists.');
                    }
                    this.models[model.name] = model;
                    model.onRegister();
                    return model;
                };
                Application.prototype.retrieveModel = function (modelName) {
                    return this.models[modelName] || null;
                };
                Application.prototype.removeModel = function (modelToRemove) {
                    var name = modelToRemove.name;
                    var model = this.models[name];
                    if (!model) return;
                    model.onRemoved();
                    delete this.models[name];
                };
                Application.prototype.registerMediator = function (mediator) {
                    if (this.mediators[mediator.name]) {
                        throw new Error('Application:: a mediator with the name "' + mediator.name + '" already exists.');
                    }
                    this.mediators[mediator.name] = mediator;
                    this.registerObserver(mediator);
                    mediator.onRegister();
                };
                Application.prototype.retrieveMediator = function (mediatorName) {
                    return this.mediators[mediatorName] || null;
                };
                Application.prototype.removeMediator = function (mediatorToRemove) {
                    var _this = this;
                    var name = mediatorToRemove.name;
                    var mediator = this.mediators[name];
                    if (!mediator) return;
                    mediator.listNotificationInterests().forEach(function (interest) {
                        _this.removeObserver(interest, mediator);
                    });
                    mediator.onRemoved();
                    delete this.mediators[name];
                };
                Application.prototype.registerObserver = function (observer) {
                    var _this = this;
                    observer.listNotificationInterests().forEach(function (notificationName) {
                        if (_this.observerMap[notificationName] === undefined) {
                            _this.observerMap[notificationName] = [];
                        }
                        _this.observerMap[notificationName].push(observer);
                    });
                };
                /**
                 * stops an observer from being interested in a notification
                 * @param {String} notificationName
                 * @param {IObserver} observerToRemove
                 * @return {void}
                 */
                Application.prototype.removeObserver = function (notificationName, observerToRemove) {
                    //The observer list for the notification under inspection
                    var observers = null,
                        observer = null,
                        i = 0;
                    observers = this.observerMap[notificationName];
                    //Find the observer for the notifyContext.
                    i = observers.length;
                    while (i--) {
                        observer = observers[i];
                        if (observer === observerToRemove) {
                            observers.splice(i, 1);
                            break;
                        }
                    }
                    /*
                     * Also, when a Notification's Observer list length falls to zero, delete the
                     * notification key from the observer map.
                     */
                    if (observers.length == 0) {
                        delete this.observerMap[notificationName];
                    }
                };
                Application.prototype.sendNotification = function (notificationName, notficationBody) {
                    var notification = new mvc_1.Notification(notificationName, notficationBody);
                    this._notifyObservers(notification);
                    notification.destroy();
                    notification = null;
                };
                // private methods
                Application.prototype._notifyObservers = function (notification) {
                    var observers = null;
                    var notificationName = notification.getName();
                    var observersRef = this.observerMap[notificationName];
                    if (observersRef) {
                        // clone the array in case an observer gets removed while the notification is being sent
                        observers = observersRef.slice(0);
                        observers.forEach(function (observer) {
                            observer.handleNotification(notification);
                        });
                    }
                };
                Application._getHashQuery = function () {
                    Application._hashQuery = {};
                    if (!window.location.hash || window.location.hash === undefined) {
                        window.location.hash = '';
                    }
                    var hash = window.location.hash.substr(1, window.location.hash.length);
                    var aHash = hash.split('&');
                    aHash.forEach(function (hashPair) {
                        var aHash = hashPair.split('=');
                        Application._hashQuery[aHash[0]] = /^\d+$/.test(aHash[1]) ? parseInt(aHash[1]) : aHash[1];
                    });
                };
                // static methods
                /**
                 * returns the Application singleton
                 * @return {Application}
                 */
                Application.getInstance = function () {
                    if (!Application.instance) Application.instance = new Application();
                    return Application.instance;
                };
                /**
                 * gets a query variable from the window.location hash
                 * assumes something like http://url/#foo=bar&baz=foo
                 * @param {String} variableId
                 * @return {any}
                 */
                Application.queryVar = function (variableId) {
                    if (Application._hashQuery === undefined) {
                        Application._getHashQuery();
                    }
                    return Application._hashQuery[variableId] || null;
                };
                // static constants
                Application.instance = null;
                Application.SINGLETON_MSG = 'Application singleton already constructed!';
                return Application;
            }();
            exports_1("Application", Application);
        }
    };
});
$__System.register('64', ['79', '7b', '7a', '7d', '7c'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (CopyModel_1_1) {
            exports_1({
                "CopyModel": CopyModel_1_1["CopyModel"]
            });
        }, function (Mediator_1_1) {
            exports_1({
                "Mediator": Mediator_1_1["Mediator"]
            });
        }, function (Model_1_1) {
            exports_1({
                "Model": Model_1_1["Model"]
            });
        }, function (Notification_1_1) {
            exports_1({
                "Notification": Notification_1_1["Notification"]
            });
        }, function (Application_1_1) {
            exports_1({
                "Application": Application_1_1["Application"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('76', ['64', '6d', '57'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var mvc_1, core_1, display_1;
    var PIXIApplication;
    return {
        setters: [function (mvc_1_1) {
            mvc_1 = mvc_1_1;
        }, function (core_1_1) {
            core_1 = core_1_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }],
        execute: function () {
            PIXIApplication = function (_super) {
                __extends(PIXIApplication, _super);
                function PIXIApplication(config) {
                    if (config === void 0) {
                        config = { width: 1024, height: 768, backgroundColor: 0xffffff, resize: false };
                    }
                    _super.call(this, false);
                    this.config = config;
                    // app info
                    this.resolution = 1;
                    this.startup();
                }
                // get singleton instance
                PIXIApplication.getInstance = function () {
                    return mvc_1.Application.getInstance();
                };
                // public methods
                PIXIApplication.prototype.startup = function () {
                    this.createMediator();
                    this.setup();
                };
                PIXIApplication.prototype.updateCamera = function () {
                    this.game.position.set(-this.camera.x, -this.camera.y);
                };
                // private methods
                PIXIApplication.prototype.createMediator = function () {};
                PIXIApplication.prototype.setup = function () {
                    this.setupInternal();
                    this.setupPIXI();
                };
                PIXIApplication.prototype.setupInternal = function () {
                    this.resolution = window.devicePixelRatio ? window.devicePixelRatio >= 1.5 ? 2 : 1 : 1;
                };
                PIXIApplication.prototype.setupPIXI = function () {
                    this.setupRenderer();
                    this.setupStage();
                    this.setupApp();
                    this.addStates();
                    this.setupLoop();
                };
                PIXIApplication.prototype.setupRenderer = function () {
                    var _this = this;
                    var config = this.config;
                    this.renderer = new PIXI.WebGLRenderer(config.width || 1024, config.height || 768, { backgroundColor: config.backgroundColor || 0xffffff, antialias: true, resolution: this.resolution });
                    this.renderer.autoResize = config.resize;
                    if (config.resize) {
                        window.addEventListener('resize', function () {
                            return _this.resize();
                        }, true);
                        this.resize();
                    }
                    document.body.appendChild(this.renderer.view);
                };
                PIXIApplication.prototype.resize = function () {
                    this.renderer.resize(window.innerWidth, window.innerHeight);
                };
                PIXIApplication.prototype.setupStage = function () {
                    this.stage = new PIXI.Container();
                    this.game = this.stage.addChild(new PIXI.Container());
                    this.game.name = '__game';
                    this.ui = this.stage.addChild(new display_1.Container());
                    this.ui.name = '__ui';
                };
                PIXIApplication.prototype.setupApp = function () {
                    this.camera = new core_1.Camera();
                    this.asset = new core_1.Loader();
                    this.sound = new core_1.SoundManager();
                    this.state = new core_1.StateManager();
                    this.addToGame = new core_1.Factory();
                    this.addToUI = new core_1.Factory(this.ui);
                };
                PIXIApplication.prototype.addStates = function () {
                    // add states for your game here
                };
                PIXIApplication.prototype.setupLoop = function () {
                    this.loop = this.gameLoop.bind(this);
                    this.gameLoop();
                };
                PIXIApplication.prototype.update = function () {
                    var containers = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        containers[_i - 0] = arguments[_i];
                    }
                    for (var i = 0; i < containers.length; i++) {
                        this.updateInternal(containers[i]);
                    }
                };
                PIXIApplication.prototype.updateInternal = function (container) {
                    if (container.updateable) {
                        container.update();
                    }
                };
                PIXIApplication.prototype.gameLoop = function () {
                    requestAnimationFrame(this.loop);
                    // update all added stuff
                    this.update(this.ui, this.state.currentState);
                    this.renderer.render(this.stage);
                };
                Object.defineProperty(PIXIApplication.prototype, "width", {
                    // getter / setter
                    get: function () {
                        return this.renderer.width / this.resolution;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PIXIApplication.prototype, "height", {
                    get: function () {
                        return this.renderer.height / this.resolution;
                    },
                    enumerable: true,
                    configurable: true
                });
                return PIXIApplication;
            }(mvc_1.Application);
            exports_1("PIXIApplication", PIXIApplication);
        }
    };
});
$__System.register('7e', ['76'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var PIXIApplication_1;
    var SoundManager;
    return {
        setters: [function (PIXIApplication_1_1) {
            PIXIApplication_1 = PIXIApplication_1_1;
        }],
        execute: function () {
            SoundManager = function () {
                function SoundManager() {
                    this.lookup = {};
                    this._bgTrack = null;
                    this.app = PIXIApplication_1.PIXIApplication.getInstance();
                }
                SoundManager.prototype.add = function (id, howl) {
                    this.lookup[id] = howl;
                    return howl;
                };
                SoundManager.prototype.play = function (id, marker) {
                    if (marker === void 0) {
                        marker = null;
                    }
                    if (marker) {
                        this.lookup[id].play(marker);
                    } else {
                        this.lookup[id].play();
                    }
                    return this.lookup[id];
                };
                SoundManager.prototype.loop = function (id) {
                    this.lookup[id].loop();
                    return this.lookup[id];
                };
                SoundManager.prototype.pause = function (id, marker) {
                    if (marker === void 0) {
                        marker = null;
                    }
                    if (marker) {
                        this.lookup[id].pause(marker);
                    } else {
                        this.lookup[id].pause();
                    }
                    return this.lookup[id];
                };
                SoundManager.prototype.setBgTrack = function (id) {
                    this._bgTrack = this.play(id);
                    return this._bgTrack;
                };
                SoundManager.prototype.crossFadeBGTrack = function (to, time) {
                    if (time === void 0) {
                        time = 300;
                    }
                    var oldBgTrack = this._bgTrack;
                    this._bgTrack.fade(this._bgTrack.volume(), 0, time);
                    this._bgTrack.on('fade', function (id) {
                        oldBgTrack.stop();
                    });
                    var newBgTrack = this.play(to);
                    newBgTrack.fade(0, newBgTrack.volume(), time);
                    this._bgTrack = newBgTrack;
                    return newBgTrack;
                };
                return SoundManager;
            }();
            exports_1("SoundManager", SoundManager);
        }
    };
});
$__System.register('6d', ['76', '73', '74', '75', '77', '78', '7e'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (PIXIApplication_1_1) {
            exports_1({
                "PIXIApplication": PIXIApplication_1_1["PIXIApplication"]
            });
        }, function (IUpdateable_1_1) {
            exports_1({
                "IUpdateable": IUpdateable_1_1["IUpdateable"]
            });
        }, function (Factory_1_1) {
            exports_1({
                "Factory": Factory_1_1["Factory"]
            });
        }, function (StateManager_1_1) {
            exports_1({
                "StateManager": StateManager_1_1["StateManager"]
            });
        }, function (Camera_1_1) {
            exports_1({
                "Camera": Camera_1_1["Camera"]
            });
        }, function (Loader_1_1) {
            exports_1({
                "Loader": Loader_1_1["Loader"],
                "ILoaderResource": Loader_1_1["ILoaderResource"],
                "ISoundResource": Loader_1_1["ISoundResource"]
            });
        }, function (SoundManager_1_1) {
            exports_1({
                "SoundManager": SoundManager_1_1["SoundManager"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('7f', ['6d'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var Rope;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }],
        execute: function () {
            Rope = function (_super) {
                __extends(Rope, _super);
                function Rope(x, y, atlasId, textureId, points) {
                    if (x === void 0) {
                        x = 0;
                    }
                    if (y === void 0) {
                        y = 0;
                    }
                    if (atlasId === void 0) {
                        atlasId = null;
                    }
                    if (textureId === void 0) {
                        textureId = null;
                    }
                    _super.call(this, !textureId ? typeof atlasId === 'string' ? PIXI.Texture.fromImage(atlasId) : atlasId : core_1.Loader.getTextureById(atlasId, textureId), points);
                    this.x = x;
                    this.y = y;
                }
                return Rope;
            }(PIXI.mesh.Rope);
            exports_1("Rope", Rope);
        }
    };
});
$__System.register('57', ['6c', '6e', '6f', '70', '71', '72', '7f'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (State_1_1) {
            exports_1({
                "State": State_1_1["State"]
            });
        }, function (Text_1_1) {
            exports_1({
                "Text": Text_1_1["Text"]
            });
        }, function (Sprite_1_1) {
            exports_1({
                "Sprite": Sprite_1_1["Sprite"]
            });
        }, function (TileSprite_1_1) {
            exports_1({
                "TileSprite": TileSprite_1_1["TileSprite"]
            });
        }, function (MovieClip_1_1) {
            exports_1({
                "MovieClip": MovieClip_1_1["MovieClip"]
            });
        }, function (Container_1_1) {
            exports_1({
                "Container": Container_1_1["Container"]
            });
        }, function (Rope_1_1) {
            exports_1({
                "Rope": Rope_1_1["Rope"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('80', ['5a', '58', '57'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var utils_1, utils_2, display_1;
    var PlayerDisplay;
    return {
        setters: [function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }, function (display_1_1) {
            display_1 = display_1_1;
        }],
        execute: function () {
            PlayerDisplay = function (_super) {
                __extends(PlayerDisplay, _super);
                function PlayerDisplay(x, y, color, playerNum) {
                    _super.call(this, x, y);
                    this.color = color;
                    this.playerNum = playerNum;
                    this.build();
                }
                PlayerDisplay.prototype.build = function () {
                    this.avatar = this.addChild(new display_1.Sprite(0, 0, utils_2.Resources.UI_SPRITESHEET.id, this.color + '_cat.png'));
                    this.avatar.anchor.set(0.5, 0.5);
                    this.labelContainer = this.addChild(new display_1.Container(PlayerDisplay.LABEL_X, PlayerDisplay.LABEL_Y));
                    this.bg = this.labelContainer.addChild(new display_1.Sprite(2, 2, utils_2.Resources.UI_SPRITESHEET.id, 'button_background.png'));
                    this.bg.anchor.set(0.5, 0.5);
                    var gfx = this.labelContainer.addChild(new PIXI.Graphics());
                    gfx.beginFill(0xffffff);
                    gfx.drawRect(0, 0, 336, 75);
                    gfx.endFill();
                    this.colorBg = this.labelContainer.addChild(new display_1.Sprite(0, 0, gfx.generateTexture(this.app.renderer, this.app.resolution)));
                    this.colorBg.anchor.set(0.5, 0.5);
                    this.colorBg.tint = 0x666666;
                    this.labelContainer.removeChild(gfx);
                    gfx.destroy();
                    this.label = this.labelContainer.addChild(new display_1.Text(0, 0, 'PLAYER ' + this.playerNum, utils_2.Fonts.STAG_SANS_BLACK, 24, 0xffffff));
                    this.label.anchor.set(0.5, 0.5);
                    this.avatar.scale.set(0, 0);
                    //this.labelContainer.y += 150;
                };
                PlayerDisplay.prototype.hide = function (delay) {
                    if (delay === void 0) {
                        delay = 0;
                    }
                    utils_1.Animator.to(this.avatar.scale, .2, { x: 0, y: 0, ease: Back.easeIn, delay: delay + 0.1 });
                    utils_1.Animator.to(this.labelContainer, .2, { x: PlayerDisplay.LABEL_X, y: PlayerDisplay.LABEL_Y + 150, ease: Sine.easeIn, delay: delay });
                };
                PlayerDisplay.prototype.setConnected = function () {
                    var _this = this;
                    utils_1.Animator.to(this.avatar.scale, .3, { x: 1, y: 1, ease: Back.easeOut });
                    utils_1.Animator.to(this.labelContainer.scale, .1, { x: 1.2, y: 1.2, ease: Sine.easeOut, yoyo: true, repeat: 1 });
                    utils_1.Time.wait(0.1).then(function () {
                        _this.colorBg.tint = utils_2.Colours.getPrimary(_this.color);
                        _this.label.text = 'PLAYER ' + _this.playerNum + ' CONNECTED';
                    });
                };
                PlayerDisplay.LABEL_X = 0;
                PlayerDisplay.LABEL_Y = 150;
                return PlayerDisplay;
            }(display_1.Container);
            exports_1("PlayerDisplay", PlayerDisplay);
        }
    };
});
$__System.register('81', ['57', '5a', '58', '66', '80'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var display_1, utils_1, utils_2, SplashMediator_1, PlayerDisplay_1;
    var Splash;
    return {
        setters: [function (display_1_1) {
            display_1 = display_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }, function (utils_2_1) {
            utils_2 = utils_2_1;
        }, function (SplashMediator_1_1) {
            SplashMediator_1 = SplashMediator_1_1;
        }, function (PlayerDisplay_1_1) {
            PlayerDisplay_1 = PlayerDisplay_1_1;
        }],
        execute: function () {
            Splash = function (_super) {
                __extends(Splash, _super);
                function Splash() {
                    _super.apply(this, arguments);
                }
                Splash.prototype.init = function () {
                    this.mediator = new SplashMediator_1.SplashMediator(this);
                    console.log('splash init!');
                };
                Splash.prototype.preload = function () {
                    console.log('splash preload');
                    this.app.asset.load(utils_2.Resources.UI_SPRITESHEET);
                    this.app.asset.load(utils_2.Resources.CAT_SPRITESHEET);
                    this.app.asset.loadSound(utils_2.Resources.SFX);
                    this.app.asset.loadSound(utils_2.Resources.MUSIC_SPLASH);
                    this.app.asset.loadSound(utils_2.Resources.MUSIC_GAME);
                };
                Splash.prototype.build = function () {
                    console.log('splash build');
                    this.displays = [];
                    this.title = this.add.sprite(this.app.width * 0.5, 300, utils_2.Resources.UI_SPRITESHEET.id, 'title.png');
                    this.title.anchor.set(0.5);
                    var gfx = new PIXI.Graphics();
                    gfx.beginFill(0xffffff);
                    gfx.drawRect(0, 0, 300, 75);
                    gfx.endFill();
                    this.gameIdBG = this.add.sprite(this.app.width * 0.5, this.app.height * 0.5 + 100, gfx.generateTexture(this.app.renderer, 1));
                    this.gameIdBG.anchor.set(0.5);
                    gfx.destroy();
                    this.gameIdText = this.add.text(this.gameIdBG.x, this.gameIdBG.y, '12345', utils_2.Fonts.STAG_SANS_BLACK, 46, utils_2.Colours.BLUE_PRIMARY);
                    this.gameIdText.anchor.set(0.5, 0.5);
                    this.instructionsText = this.add.text(this.app.width * 0.5, this.gameIdText.y - 100, 'to connect with your phone, select the game code below.'.toUpperCase(), utils_2.Fonts.STAG_SANS_BLACK, 32, 0xffffff);
                    this.instructionsText.anchor.set(0.5, 0.5);
                    this.player1 = this.addChild(new PlayerDisplay_1.PlayerDisplay(243, this.app.height - 230, 'pink', 1));
                    this.player2 = this.addChild(new PlayerDisplay_1.PlayerDisplay(726, this.app.height - 230, 'blue', 2));
                    this.player3 = this.addChild(new PlayerDisplay_1.PlayerDisplay(1206, this.app.height - 230, 'green', 3));
                    this.player4 = this.addChild(new PlayerDisplay_1.PlayerDisplay(1683, this.app.height - 230, 'orange', 4));
                    this.displays = [this.player1, this.player2, this.player3, this.player4];
                    this.mediator.updateGameId();
                    if (Splash.DEBUG) {
                        this.debugConnectPlayers();
                    }
                    this.app.sound.setBgTrack(utils_2.Resources.MUSIC_SPLASH.id);
                };
                Splash.prototype.debugConnectPlayers = function () {
                    var _this = this;
                    var _loop_1 = function (i) {
                        utils_1.Time.wait(i).then(function () {
                            _this.mediator.playerConnected(i, true);
                        });
                    };
                    for (var i = 1; i < Splash.DEBUG_PLAYERS + 1; i++) {
                        _loop_1(i);
                    }
                };
                // called from mediator
                Splash.prototype.setGameId = function (gameId) {
                    if (gameId === undefined || this.gameIdText === undefined) {
                        return;
                    }
                    this.gameIdText.text = gameId.toUpperCase();
                    this.gameIdBG.width = this.gameIdText.width + 100;
                };
                Splash.prototype.playerConnected = function (playerNum) {
                    var _this = this;
                    this.displays[playerNum - 1].setConnected();
                    this.app.sound.play('sfx', Splash.CAT_SOUNDS[Math.floor(Math.random() * 3)]);
                    if (playerNum === Splash.DEBUG_PLAYERS || playerNum === 4) {
                        utils_1.Time.wait(1).then(function () {
                            _this.proceedToGame();
                        });
                    }
                };
                Splash.prototype.proceedToGame = function () {
                    var _this = this;
                    for (var i = 0; i < 4; i++) {
                        this.displays[i].hide(i * 0.1);
                    }
                    utils_1.Time.wait(0.75).then(function () {
                        utils_1.Animator.staggerTo([_this.title, _this.gameIdText, _this.gameIdBG], 0.4, { ease: Sine.easeIn, alpha: 0, y: "+=20" }, 0);
                        utils_1.Animator.to(_this.instructionsText, 0.4, { ease: Sine.easeIn, alpha: 0, y: "+=20", delay: 0.2 }).then(function () {
                            _this.app.state.to('play');
                        });
                    });
                };
                Splash.prototype.shutdown = function () {
                    this.mediator.destroy();
                };
                Splash.DEBUG = false;
                Splash.DEBUG_PLAYERS = 4;
                Splash.CAT_SOUNDS = ['meow_cat', 'meow_kitten', 'tomcat'];
                return Splash;
            }(display_1.State);
            exports_1("Splash", Splash);
        }
    };
});
$__System.register('82', ['62', '81'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (Play_1_1) {
            exports_1({
                "Play": Play_1_1["Play"]
            });
        }, function (Splash_1_1) {
            exports_1({
                "Splash": Splash_1_1["Splash"]
            });
        }],
        execute: function () {}
    };
});
$__System.register('83', ['6d', '63', '53', '82'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1, ApplicationModel_1, ApplicationMediator_1, state_1;
    var KDGame;
    return {
        setters: [function (core_1_1) {
            core_1 = core_1_1;
        }, function (ApplicationModel_1_1) {
            ApplicationModel_1 = ApplicationModel_1_1;
        }, function (ApplicationMediator_1_1) {
            ApplicationMediator_1 = ApplicationMediator_1_1;
        }, function (state_1_1) {
            state_1 = state_1_1;
        }],
        execute: function () {
            KDGame = function (_super) {
                __extends(KDGame, _super);
                function KDGame() {
                    _super.apply(this, arguments);
                }
                KDGame.prototype.createMediator = function () {
                    this.model = new ApplicationModel_1.ApplicationModel();
                    this.mediator = new ApplicationMediator_1.ApplicationMediator(this);
                };
                KDGame.prototype.addStates = function () {
                    this.state.add(state_1.Splash, 'splash');
                    this.state.add(state_1.Play, 'play');
                    this.state.start('splash');
                };
                return KDGame;
            }(core_1.PIXIApplication);
            exports_1("KDGame", KDGame);
        }
    };
});
$__System.register('84', [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Fonts;
    return {
        setters: [],
        execute: function () {
            Fonts = function () {
                function Fonts() {}
                Fonts.STAG_SANS_BOLD = { fontFamily: 'Stag Sans Bold', fontWeight: 700 };
                Fonts.STAG_SANS_BLACK = { fontFamily: 'Stag Sans Black', fontWeight: 900 };
                return Fonts;
            }();
            exports_1("Fonts", Fonts);
        }
    };
});
$__System.register('85', [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Colours;
    return {
        setters: [],
        execute: function () {
            Colours = function () {
                function Colours() {}
                Colours.getPrimary = function (color) {
                    var result = Colours.PINK_PRIMARY;
                    switch (color) {
                        case 'pink':
                            result = Colours.PINK_PRIMARY;
                            break;
                        case 'blue':
                            result = Colours.BLUE_PRIMARY;
                            break;
                        case 'green':
                            result = Colours.GREEN_PRIMARY;
                            break;
                        case 'orange':
                            result = Colours.ORANGE_PRIMARY;
                            break;
                    }
                    return result;
                };
                Colours.getBackground = function (color) {
                    var result = Colours.PINK_BACKGROUND;
                    switch (color) {
                        case 'pink':
                            result = Colours.PINK_BACKGROUND;
                            break;
                        case 'blue':
                            result = Colours.BLUE_BACKGROUND;
                            break;
                        case 'green':
                            result = Colours.GREEN_BACKGROUND;
                            break;
                        case 'orange':
                            result = Colours.ORANGE_BACKGROUND;
                            break;
                    }
                    return result;
                };
                Colours.getDark = function (color) {
                    var result = Colours.PINK_DARK;
                    switch (color) {
                        case 'pink':
                            result = Colours.PINK_DARK;
                            break;
                        case 'blue':
                            result = Colours.BLUE_DARK;
                            break;
                        case 'green':
                            result = Colours.GREEN_DARK;
                            break;
                        case 'orange':
                            result = Colours.ORANGE_DARK;
                            break;
                    }
                    return result;
                };
                Colours.PINK_PRIMARY = 0xee2c74;
                Colours.BLUE_PRIMARY = 0x00aedb;
                Colours.GREEN_PRIMARY = 0xd5e04d;
                Colours.ORANGE_PRIMARY = 0xfbaf34;
                Colours.PINK_BACKGROUND = 0xfabbcb;
                Colours.BLUE_BACKGROUND = 0x6ad1e3;
                Colours.GREEN_BACKGROUND = 0xe9ec6b;
                Colours.ORANGE_BACKGROUND = 0xfdd26e;
                Colours.PINK_DARK = 0x672046;
                Colours.BLUE_DARK = 0x002f86;
                Colours.GREEN_DARK = 0x009539;
                Colours.ORANGE_DARK = 0xcf451f;
                return Colours;
            }();
            exports_1("Colours", Colours);
        }
    };
});
$__System.register('86', [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Resources;
    return {
        setters: [],
        execute: function () {
            Resources = function () {
                function Resources() {}
                Resources.CAT_SPRITESHEET = {
                    id: 'cat',
                    url: 'assets/img/spritesheet/cat.json',
                    hdurl: 'assets/img/spritesheet/cat@2x.json'
                };
                Resources.UI_SPRITESHEET = {
                    id: 'ui',
                    url: 'assets/img/spritesheet/ui.json',
                    hdurl: 'assets/img/spritesheet/ui@2x.json'
                };
                Resources.SFX = {
                    id: 'sfx',
                    src: 'assets/audio/sprite/sfx',
                    extensions: ['ogg', 'webm', 'm4a'],
                    sprite: {
                        "air_horn": [0, 2768.9795918367345],
                        "banana_peel_slip": [5000, 517.8004535147389],
                        "fruit_collected": [8000, 1018.1179138321994],
                        "meow_cat": [12000, 1251.7233560090694],
                        "meow_kitten": [16000, 5000],
                        "ship_bell": [23000, 3745.6689342403633],
                        "slurp": [29000, 2914.195011337867],
                        "slurping_2": [34000, 1212.2902494331101],
                        "straw_slurp": [38000, 10193.560090702946],
                        "tomcat": [51000, 1978.979591836733]
                    }
                };
                Resources.MUSIC_SPLASH = {
                    id: 'music_splash',
                    src: 'assets/audio/sound/music_pinball.ogg',
                    volume: 0.4,
                    loop: true
                };
                Resources.MUSIC_GAME = {
                    id: 'music_game',
                    src: 'assets/audio/sound/music_pinball_2.ogg',
                    volume: 0.3,
                    loop: true
                };
                return Resources;
            }();
            exports_1("Resources", Resources);
        }
    };
});
$__System.register('58', ['84', '85', '86'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (Fonts_1_1) {
            exports_1({
                "Fonts": Fonts_1_1["Fonts"]
            });
        }, function (Colours_1_1) {
            exports_1({
                "Colours": Colours_1_1["Colours"]
            });
        }, function (Resources_1_1) {
            exports_1({
                "Resources": Resources_1_1["Resources"]
            });
        }],
        execute: function () {}
    };
});
/// <reference path="../../typings/index.d.ts" />
$__System.register('1', ['83', '58'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var KDGame_1, utils_1;
    var app;
    return {
        setters: [function (KDGame_1_1) {
            KDGame_1 = KDGame_1_1;
        }, function (utils_1_1) {
            utils_1 = utils_1_1;
        }],
        execute: function () {
            app = new KDGame_1.KDGame({ resize: false, width: 1920, height: 1080, backgroundColor: utils_1.Colours.BLUE_BACKGROUND });
        }
    };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=bundle.js.map
