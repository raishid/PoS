(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module, temp) => {
      return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

  // node_modules/vue/dist/vue.js
  var require_vue = __commonJS({
    "node_modules/vue/dist/vue.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = global2 || self, global2.Vue = factory());
      })(exports, function() {
        "use strict";
        var emptyObject = Object.freeze({});
        function isUndef(v) {
          return v === void 0 || v === null;
        }
        function isDef(v) {
          return v !== void 0 && v !== null;
        }
        function isTrue(v) {
          return v === true;
        }
        function isFalse(v) {
          return v === false;
        }
        function isPrimitive(value) {
          return typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "boolean";
        }
        function isObject(obj) {
          return obj !== null && typeof obj === "object";
        }
        var _toString = Object.prototype.toString;
        function toRawType(value) {
          return _toString.call(value).slice(8, -1);
        }
        function isPlainObject(obj) {
          return _toString.call(obj) === "[object Object]";
        }
        function isRegExp(v) {
          return _toString.call(v) === "[object RegExp]";
        }
        function isValidArrayIndex(val) {
          var n = parseFloat(String(val));
          return n >= 0 && Math.floor(n) === n && isFinite(val);
        }
        function isPromise(val) {
          return isDef(val) && typeof val.then === "function" && typeof val.catch === "function";
        }
        function toString(val) {
          return val == null ? "" : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
        }
        function toNumber(val) {
          var n = parseFloat(val);
          return isNaN(n) ? val : n;
        }
        function makeMap(str2, expectsLowerCase) {
          var map = /* @__PURE__ */ Object.create(null);
          var list = str2.split(",");
          for (var i = 0; i < list.length; i++) {
            map[list[i]] = true;
          }
          return expectsLowerCase ? function(val) {
            return map[val.toLowerCase()];
          } : function(val) {
            return map[val];
          };
        }
        var isBuiltInTag = makeMap("slot,component", true);
        var isReservedAttribute = makeMap("key,ref,slot,slot-scope,is");
        function remove(arr, item) {
          if (arr.length) {
            var index2 = arr.indexOf(item);
            if (index2 > -1) {
              return arr.splice(index2, 1);
            }
          }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        function hasOwn(obj, key) {
          return hasOwnProperty.call(obj, key);
        }
        function cached(fn) {
          var cache = /* @__PURE__ */ Object.create(null);
          return function cachedFn(str2) {
            var hit = cache[str2];
            return hit || (cache[str2] = fn(str2));
          };
        }
        var camelizeRE = /-(\w)/g;
        var camelize = cached(function(str2) {
          return str2.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : "";
          });
        });
        var capitalize = cached(function(str2) {
          return str2.charAt(0).toUpperCase() + str2.slice(1);
        });
        var hyphenateRE = /\B([A-Z])/g;
        var hyphenate = cached(function(str2) {
          return str2.replace(hyphenateRE, "-$1").toLowerCase();
        });
        function polyfillBind(fn, ctx) {
          function boundFn(a) {
            var l = arguments.length;
            return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
          }
          boundFn._length = fn.length;
          return boundFn;
        }
        function nativeBind(fn, ctx) {
          return fn.bind(ctx);
        }
        var bind = Function.prototype.bind ? nativeBind : polyfillBind;
        function toArray(list, start) {
          start = start || 0;
          var i = list.length - start;
          var ret = new Array(i);
          while (i--) {
            ret[i] = list[i + start];
          }
          return ret;
        }
        function extend(to, _from) {
          for (var key in _from) {
            to[key] = _from[key];
          }
          return to;
        }
        function toObject(arr) {
          var res = {};
          for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
              extend(res, arr[i]);
            }
          }
          return res;
        }
        function noop(a, b, c) {
        }
        var no = function(a, b, c) {
          return false;
        };
        var identity = function(_) {
          return _;
        };
        function genStaticKeys(modules2) {
          return modules2.reduce(function(keys, m) {
            return keys.concat(m.staticKeys || []);
          }, []).join(",");
        }
        function looseEqual(a, b) {
          if (a === b) {
            return true;
          }
          var isObjectA = isObject(a);
          var isObjectB = isObject(b);
          if (isObjectA && isObjectB) {
            try {
              var isArrayA = Array.isArray(a);
              var isArrayB = Array.isArray(b);
              if (isArrayA && isArrayB) {
                return a.length === b.length && a.every(function(e, i) {
                  return looseEqual(e, b[i]);
                });
              } else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime();
              } else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a);
                var keysB = Object.keys(b);
                return keysA.length === keysB.length && keysA.every(function(key) {
                  return looseEqual(a[key], b[key]);
                });
              } else {
                return false;
              }
            } catch (e) {
              return false;
            }
          } else if (!isObjectA && !isObjectB) {
            return String(a) === String(b);
          } else {
            return false;
          }
        }
        function looseIndexOf(arr, val) {
          for (var i = 0; i < arr.length; i++) {
            if (looseEqual(arr[i], val)) {
              return i;
            }
          }
          return -1;
        }
        function once(fn) {
          var called = false;
          return function() {
            if (!called) {
              called = true;
              fn.apply(this, arguments);
            }
          };
        }
        var SSR_ATTR = "data-server-rendered";
        var ASSET_TYPES = [
          "component",
          "directive",
          "filter"
        ];
        var LIFECYCLE_HOOKS = [
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "beforeDestroy",
          "destroyed",
          "activated",
          "deactivated",
          "errorCaptured",
          "serverPrefetch"
        ];
        var config = {
          optionMergeStrategies: /* @__PURE__ */ Object.create(null),
          silent: false,
          productionTip: true,
          devtools: true,
          performance: false,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: /* @__PURE__ */ Object.create(null),
          isReservedTag: no,
          isReservedAttr: no,
          isUnknownElement: no,
          getTagNamespace: noop,
          parsePlatformTagName: identity,
          mustUseProp: no,
          async: true,
          _lifecycleHooks: LIFECYCLE_HOOKS
        };
        var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        function isReserved(str2) {
          var c = (str2 + "").charCodeAt(0);
          return c === 36 || c === 95;
        }
        function def(obj, key, val, enumerable) {
          Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
          });
        }
        var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");
        function parsePath(path) {
          if (bailRE.test(path)) {
            return;
          }
          var segments = path.split(".");
          return function(obj) {
            for (var i = 0; i < segments.length; i++) {
              if (!obj) {
                return;
              }
              obj = obj[segments[i]];
            }
            return obj;
          };
        }
        var hasProto = "__proto__" in {};
        var inBrowser = typeof window !== "undefined";
        var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
        var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
        var UA = inBrowser && window.navigator.userAgent.toLowerCase();
        var isIE = UA && /msie|trident/.test(UA);
        var isIE9 = UA && UA.indexOf("msie 9.0") > 0;
        var isEdge = UA && UA.indexOf("edge/") > 0;
        var isAndroid = UA && UA.indexOf("android") > 0 || weexPlatform === "android";
        var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === "ios";
        var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
        var isPhantomJS = UA && /phantomjs/.test(UA);
        var isFF = UA && UA.match(/firefox\/(\d+)/);
        var nativeWatch = {}.watch;
        var supportsPassive = false;
        if (inBrowser) {
          try {
            var opts = {};
            Object.defineProperty(opts, "passive", {
              get: function get() {
                supportsPassive = true;
              }
            });
            window.addEventListener("test-passive", null, opts);
          } catch (e) {
          }
        }
        var _isServer;
        var isServerRendering = function() {
          if (_isServer === void 0) {
            if (!inBrowser && !inWeex && typeof global !== "undefined") {
              _isServer = global["process"] && global["process"].env.VUE_ENV === "server";
            } else {
              _isServer = false;
            }
          }
          return _isServer;
        };
        var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function isNative(Ctor) {
          return typeof Ctor === "function" && /native code/.test(Ctor.toString());
        }
        var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
        var _Set;
        if (typeof Set !== "undefined" && isNative(Set)) {
          _Set = Set;
        } else {
          _Set = /* @__PURE__ */ function() {
            function Set2() {
              this.set = /* @__PURE__ */ Object.create(null);
            }
            Set2.prototype.has = function has2(key) {
              return this.set[key] === true;
            };
            Set2.prototype.add = function add2(key) {
              this.set[key] = true;
            };
            Set2.prototype.clear = function clear() {
              this.set = /* @__PURE__ */ Object.create(null);
            };
            return Set2;
          }();
        }
        var warn = noop;
        var tip = noop;
        var generateComponentTrace = noop;
        var formatComponentName = noop;
        {
          var hasConsole = typeof console !== "undefined";
          var classifyRE = /(?:^|[-_])(\w)/g;
          var classify = function(str2) {
            return str2.replace(classifyRE, function(c) {
              return c.toUpperCase();
            }).replace(/[-_]/g, "");
          };
          warn = function(msg, vm) {
            var trace = vm ? generateComponentTrace(vm) : "";
            if (config.warnHandler) {
              config.warnHandler.call(null, msg, vm, trace);
            } else if (hasConsole && !config.silent) {
              console.error("[Vue warn]: " + msg + trace);
            }
          };
          tip = function(msg, vm) {
            if (hasConsole && !config.silent) {
              console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ""));
            }
          };
          formatComponentName = function(vm, includeFile) {
            if (vm.$root === vm) {
              return "<Root>";
            }
            var options = typeof vm === "function" && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
            var name = options.name || options._componentTag;
            var file = options.__file;
            if (!name && file) {
              var match = file.match(/([^/\\]+)\.vue$/);
              name = match && match[1];
            }
            return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : "");
          };
          var repeat = function(str2, n) {
            var res = "";
            while (n) {
              if (n % 2 === 1) {
                res += str2;
              }
              if (n > 1) {
                str2 += str2;
              }
              n >>= 1;
            }
            return res;
          };
          generateComponentTrace = function(vm) {
            if (vm._isVue && vm.$parent) {
              var tree = [];
              var currentRecursiveSequence = 0;
              while (vm) {
                if (tree.length > 0) {
                  var last = tree[tree.length - 1];
                  if (last.constructor === vm.constructor) {
                    currentRecursiveSequence++;
                    vm = vm.$parent;
                    continue;
                  } else if (currentRecursiveSequence > 0) {
                    tree[tree.length - 1] = [last, currentRecursiveSequence];
                    currentRecursiveSequence = 0;
                  }
                }
                tree.push(vm);
                vm = vm.$parent;
              }
              return "\n\nfound in\n\n" + tree.map(function(vm2, i) {
                return "" + (i === 0 ? "---> " : repeat(" ", 5 + i * 2)) + (Array.isArray(vm2) ? formatComponentName(vm2[0]) + "... (" + vm2[1] + " recursive calls)" : formatComponentName(vm2));
              }).join("\n");
            } else {
              return "\n\n(found in " + formatComponentName(vm) + ")";
            }
          };
        }
        var uid = 0;
        var Dep = function Dep2() {
          this.id = uid++;
          this.subs = [];
        };
        Dep.prototype.addSub = function addSub(sub) {
          this.subs.push(sub);
        };
        Dep.prototype.removeSub = function removeSub(sub) {
          remove(this.subs, sub);
        };
        Dep.prototype.depend = function depend() {
          if (Dep.target) {
            Dep.target.addDep(this);
          }
        };
        Dep.prototype.notify = function notify() {
          var subs = this.subs.slice();
          if (!config.async) {
            subs.sort(function(a, b) {
              return a.id - b.id;
            });
          }
          for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update();
          }
        };
        Dep.target = null;
        var targetStack = [];
        function pushTarget(target2) {
          targetStack.push(target2);
          Dep.target = target2;
        }
        function popTarget() {
          targetStack.pop();
          Dep.target = targetStack[targetStack.length - 1];
        }
        var VNode = function VNode2(tag, data, children, text2, elm, context, componentOptions, asyncFactory) {
          this.tag = tag;
          this.data = data;
          this.children = children;
          this.text = text2;
          this.elm = elm;
          this.ns = void 0;
          this.context = context;
          this.fnContext = void 0;
          this.fnOptions = void 0;
          this.fnScopeId = void 0;
          this.key = data && data.key;
          this.componentOptions = componentOptions;
          this.componentInstance = void 0;
          this.parent = void 0;
          this.raw = false;
          this.isStatic = false;
          this.isRootInsert = true;
          this.isComment = false;
          this.isCloned = false;
          this.isOnce = false;
          this.asyncFactory = asyncFactory;
          this.asyncMeta = void 0;
          this.isAsyncPlaceholder = false;
        };
        var prototypeAccessors = { child: { configurable: true } };
        prototypeAccessors.child.get = function() {
          return this.componentInstance;
        };
        Object.defineProperties(VNode.prototype, prototypeAccessors);
        var createEmptyVNode = function(text2) {
          if (text2 === void 0)
            text2 = "";
          var node = new VNode();
          node.text = text2;
          node.isComment = true;
          return node;
        };
        function createTextVNode(val) {
          return new VNode(void 0, void 0, void 0, String(val));
        }
        function cloneVNode(vnode) {
          var cloned = new VNode(vnode.tag, vnode.data, vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
          cloned.ns = vnode.ns;
          cloned.isStatic = vnode.isStatic;
          cloned.key = vnode.key;
          cloned.isComment = vnode.isComment;
          cloned.fnContext = vnode.fnContext;
          cloned.fnOptions = vnode.fnOptions;
          cloned.fnScopeId = vnode.fnScopeId;
          cloned.asyncMeta = vnode.asyncMeta;
          cloned.isCloned = true;
          return cloned;
        }
        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);
        var methodsToPatch = [
          "push",
          "pop",
          "shift",
          "unshift",
          "splice",
          "sort",
          "reverse"
        ];
        methodsToPatch.forEach(function(method) {
          var original = arrayProto[method];
          def(arrayMethods, method, function mutator() {
            var args = [], len2 = arguments.length;
            while (len2--)
              args[len2] = arguments[len2];
            var result = original.apply(this, args);
            var ob = this.__ob__;
            var inserted;
            switch (method) {
              case "push":
              case "unshift":
                inserted = args;
                break;
              case "splice":
                inserted = args.slice(2);
                break;
            }
            if (inserted) {
              ob.observeArray(inserted);
            }
            ob.dep.notify();
            return result;
          });
        });
        var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
        var shouldObserve = true;
        function toggleObserving(value) {
          shouldObserve = value;
        }
        var Observer = function Observer2(value) {
          this.value = value;
          this.dep = new Dep();
          this.vmCount = 0;
          def(value, "__ob__", this);
          if (Array.isArray(value)) {
            if (hasProto) {
              protoAugment(value, arrayMethods);
            } else {
              copyAugment(value, arrayMethods, arrayKeys);
            }
            this.observeArray(value);
          } else {
            this.walk(value);
          }
        };
        Observer.prototype.walk = function walk(obj) {
          var keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) {
            defineReactive$$1(obj, keys[i]);
          }
        };
        Observer.prototype.observeArray = function observeArray(items) {
          for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i]);
          }
        };
        function protoAugment(target2, src) {
          target2.__proto__ = src;
        }
        function copyAugment(target2, src, keys) {
          for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i];
            def(target2, key, src[key]);
          }
        }
        function observe(value, asRootData) {
          if (!isObject(value) || value instanceof VNode) {
            return;
          }
          var ob;
          if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
            ob = value.__ob__;
          } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
            ob = new Observer(value);
          }
          if (asRootData && ob) {
            ob.vmCount++;
          }
          return ob;
        }
        function defineReactive$$1(obj, key, val, customSetter, shallow) {
          var dep = new Dep();
          var property = Object.getOwnPropertyDescriptor(obj, key);
          if (property && property.configurable === false) {
            return;
          }
          var getter = property && property.get;
          var setter = property && property.set;
          if ((!getter || setter) && arguments.length === 2) {
            val = obj[key];
          }
          var childOb = !shallow && observe(val);
          Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
              var value = getter ? getter.call(obj) : val;
              if (Dep.target) {
                dep.depend();
                if (childOb) {
                  childOb.dep.depend();
                  if (Array.isArray(value)) {
                    dependArray(value);
                  }
                }
              }
              return value;
            },
            set: function reactiveSetter(newVal) {
              var value = getter ? getter.call(obj) : val;
              if (newVal === value || newVal !== newVal && value !== value) {
                return;
              }
              if (customSetter) {
                customSetter();
              }
              if (getter && !setter) {
                return;
              }
              if (setter) {
                setter.call(obj, newVal);
              } else {
                val = newVal;
              }
              childOb = !shallow && observe(newVal);
              dep.notify();
            }
          });
        }
        function set(target2, key, val) {
          if (isUndef(target2) || isPrimitive(target2)) {
            warn("Cannot set reactive property on undefined, null, or primitive value: " + target2);
          }
          if (Array.isArray(target2) && isValidArrayIndex(key)) {
            target2.length = Math.max(target2.length, key);
            target2.splice(key, 1, val);
            return val;
          }
          if (key in target2 && !(key in Object.prototype)) {
            target2[key] = val;
            return val;
          }
          var ob = target2.__ob__;
          if (target2._isVue || ob && ob.vmCount) {
            warn("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.");
            return val;
          }
          if (!ob) {
            target2[key] = val;
            return val;
          }
          defineReactive$$1(ob.value, key, val);
          ob.dep.notify();
          return val;
        }
        function del(target2, key) {
          if (isUndef(target2) || isPrimitive(target2)) {
            warn("Cannot delete reactive property on undefined, null, or primitive value: " + target2);
          }
          if (Array.isArray(target2) && isValidArrayIndex(key)) {
            target2.splice(key, 1);
            return;
          }
          var ob = target2.__ob__;
          if (target2._isVue || ob && ob.vmCount) {
            warn("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
            return;
          }
          if (!hasOwn(target2, key)) {
            return;
          }
          delete target2[key];
          if (!ob) {
            return;
          }
          ob.dep.notify();
        }
        function dependArray(value) {
          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
            if (Array.isArray(e)) {
              dependArray(e);
            }
          }
        }
        var strats = config.optionMergeStrategies;
        {
          strats.el = strats.propsData = function(parent, child, vm, key) {
            if (!vm) {
              warn('option "' + key + '" can only be used during instance creation with the `new` keyword.');
            }
            return defaultStrat(parent, child);
          };
        }
        function mergeData(to, from) {
          if (!from) {
            return to;
          }
          var key, toVal, fromVal;
          var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
          for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            if (key === "__ob__") {
              continue;
            }
            toVal = to[key];
            fromVal = from[key];
            if (!hasOwn(to, key)) {
              set(to, key, fromVal);
            } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
              mergeData(toVal, fromVal);
            }
          }
          return to;
        }
        function mergeDataOrFn(parentVal, childVal, vm) {
          if (!vm) {
            if (!childVal) {
              return parentVal;
            }
            if (!parentVal) {
              return childVal;
            }
            return function mergedDataFn() {
              return mergeData(typeof childVal === "function" ? childVal.call(this, this) : childVal, typeof parentVal === "function" ? parentVal.call(this, this) : parentVal);
            };
          } else {
            return function mergedInstanceDataFn() {
              var instanceData = typeof childVal === "function" ? childVal.call(vm, vm) : childVal;
              var defaultData = typeof parentVal === "function" ? parentVal.call(vm, vm) : parentVal;
              if (instanceData) {
                return mergeData(instanceData, defaultData);
              } else {
                return defaultData;
              }
            };
          }
        }
        strats.data = function(parentVal, childVal, vm) {
          if (!vm) {
            if (childVal && typeof childVal !== "function") {
              warn('The "data" option should be a function that returns a per-instance value in component definitions.', vm);
              return parentVal;
            }
            return mergeDataOrFn(parentVal, childVal);
          }
          return mergeDataOrFn(parentVal, childVal, vm);
        };
        function mergeHook(parentVal, childVal) {
          var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
          return res ? dedupeHooks(res) : res;
        }
        function dedupeHooks(hooks2) {
          var res = [];
          for (var i = 0; i < hooks2.length; i++) {
            if (res.indexOf(hooks2[i]) === -1) {
              res.push(hooks2[i]);
            }
          }
          return res;
        }
        LIFECYCLE_HOOKS.forEach(function(hook) {
          strats[hook] = mergeHook;
        });
        function mergeAssets(parentVal, childVal, vm, key) {
          var res = Object.create(parentVal || null);
          if (childVal) {
            assertObjectType(key, childVal, vm);
            return extend(res, childVal);
          } else {
            return res;
          }
        }
        ASSET_TYPES.forEach(function(type) {
          strats[type + "s"] = mergeAssets;
        });
        strats.watch = function(parentVal, childVal, vm, key) {
          if (parentVal === nativeWatch) {
            parentVal = void 0;
          }
          if (childVal === nativeWatch) {
            childVal = void 0;
          }
          if (!childVal) {
            return Object.create(parentVal || null);
          }
          {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal) {
            return childVal;
          }
          var ret = {};
          extend(ret, parentVal);
          for (var key$1 in childVal) {
            var parent = ret[key$1];
            var child = childVal[key$1];
            if (parent && !Array.isArray(parent)) {
              parent = [parent];
            }
            ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
          }
          return ret;
        };
        strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
          if (childVal && true) {
            assertObjectType(key, childVal, vm);
          }
          if (!parentVal) {
            return childVal;
          }
          var ret = /* @__PURE__ */ Object.create(null);
          extend(ret, parentVal);
          if (childVal) {
            extend(ret, childVal);
          }
          return ret;
        };
        strats.provide = mergeDataOrFn;
        var defaultStrat = function(parentVal, childVal) {
          return childVal === void 0 ? parentVal : childVal;
        };
        function checkComponents(options) {
          for (var key in options.components) {
            validateComponentName(key);
          }
        }
        function validateComponentName(name) {
          if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
            warn('Invalid component name: "' + name + '". Component names should conform to valid custom element name in html5 specification.');
          }
          if (isBuiltInTag(name) || config.isReservedTag(name)) {
            warn("Do not use built-in or reserved HTML elements as component id: " + name);
          }
        }
        function normalizeProps(options, vm) {
          var props2 = options.props;
          if (!props2) {
            return;
          }
          var res = {};
          var i, val, name;
          if (Array.isArray(props2)) {
            i = props2.length;
            while (i--) {
              val = props2[i];
              if (typeof val === "string") {
                name = camelize(val);
                res[name] = { type: null };
              } else {
                warn("props must be strings when using array syntax.");
              }
            }
          } else if (isPlainObject(props2)) {
            for (var key in props2) {
              val = props2[key];
              name = camelize(key);
              res[name] = isPlainObject(val) ? val : { type: val };
            }
          } else {
            warn('Invalid value for option "props": expected an Array or an Object, but got ' + toRawType(props2) + ".", vm);
          }
          options.props = res;
        }
        function normalizeInject(options, vm) {
          var inject = options.inject;
          if (!inject) {
            return;
          }
          var normalized = options.inject = {};
          if (Array.isArray(inject)) {
            for (var i = 0; i < inject.length; i++) {
              normalized[inject[i]] = { from: inject[i] };
            }
          } else if (isPlainObject(inject)) {
            for (var key in inject) {
              var val = inject[key];
              normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
            }
          } else {
            warn('Invalid value for option "inject": expected an Array or an Object, but got ' + toRawType(inject) + ".", vm);
          }
        }
        function normalizeDirectives(options) {
          var dirs = options.directives;
          if (dirs) {
            for (var key in dirs) {
              var def$$1 = dirs[key];
              if (typeof def$$1 === "function") {
                dirs[key] = { bind: def$$1, update: def$$1 };
              }
            }
          }
        }
        function assertObjectType(name, value, vm) {
          if (!isPlainObject(value)) {
            warn('Invalid value for option "' + name + '": expected an Object, but got ' + toRawType(value) + ".", vm);
          }
        }
        function mergeOptions(parent, child, vm) {
          {
            checkComponents(child);
          }
          if (typeof child === "function") {
            child = child.options;
          }
          normalizeProps(child, vm);
          normalizeInject(child, vm);
          normalizeDirectives(child);
          if (!child._base) {
            if (child.extends) {
              parent = mergeOptions(parent, child.extends, vm);
            }
            if (child.mixins) {
              for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
              }
            }
          }
          var options = {};
          var key;
          for (key in parent) {
            mergeField(key);
          }
          for (key in child) {
            if (!hasOwn(parent, key)) {
              mergeField(key);
            }
          }
          function mergeField(key2) {
            var strat = strats[key2] || defaultStrat;
            options[key2] = strat(parent[key2], child[key2], vm, key2);
          }
          return options;
        }
        function resolveAsset(options, type, id, warnMissing) {
          if (typeof id !== "string") {
            return;
          }
          var assets = options[type];
          if (hasOwn(assets, id)) {
            return assets[id];
          }
          var camelizedId = camelize(id);
          if (hasOwn(assets, camelizedId)) {
            return assets[camelizedId];
          }
          var PascalCaseId = capitalize(camelizedId);
          if (hasOwn(assets, PascalCaseId)) {
            return assets[PascalCaseId];
          }
          var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
          if (warnMissing && !res) {
            warn("Failed to resolve " + type.slice(0, -1) + ": " + id, options);
          }
          return res;
        }
        function validateProp(key, propOptions, propsData, vm) {
          var prop = propOptions[key];
          var absent = !hasOwn(propsData, key);
          var value = propsData[key];
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          if (booleanIndex > -1) {
            if (absent && !hasOwn(prop, "default")) {
              value = false;
            } else if (value === "" || value === hyphenate(key)) {
              var stringIndex = getTypeIndex(String, prop.type);
              if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true;
              }
            }
          }
          if (value === void 0) {
            value = getPropDefaultValue(vm, prop, key);
            var prevShouldObserve = shouldObserve;
            toggleObserving(true);
            observe(value);
            toggleObserving(prevShouldObserve);
          }
          {
            assertProp(prop, key, value, vm, absent);
          }
          return value;
        }
        function getPropDefaultValue(vm, prop, key) {
          if (!hasOwn(prop, "default")) {
            return void 0;
          }
          var def2 = prop.default;
          if (isObject(def2)) {
            warn('Invalid default value for prop "' + key + '": Props with type Object/Array must use a factory function to return the default value.', vm);
          }
          if (vm && vm.$options.propsData && vm.$options.propsData[key] === void 0 && vm._props[key] !== void 0) {
            return vm._props[key];
          }
          return typeof def2 === "function" && getType(prop.type) !== "Function" ? def2.call(vm) : def2;
        }
        function assertProp(prop, name, value, vm, absent) {
          if (prop.required && absent) {
            warn('Missing required prop: "' + name + '"', vm);
            return;
          }
          if (value == null && !prop.required) {
            return;
          }
          var type = prop.type;
          var valid = !type || type === true;
          var expectedTypes = [];
          if (type) {
            if (!Array.isArray(type)) {
              type = [type];
            }
            for (var i = 0; i < type.length && !valid; i++) {
              var assertedType = assertType(value, type[i], vm);
              expectedTypes.push(assertedType.expectedType || "");
              valid = assertedType.valid;
            }
          }
          var haveExpectedTypes = expectedTypes.some(function(t) {
            return t;
          });
          if (!valid && haveExpectedTypes) {
            warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
            return;
          }
          var validator = prop.validator;
          if (validator) {
            if (!validator(value)) {
              warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
            }
          }
        }
        var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
        function assertType(value, type, vm) {
          var valid;
          var expectedType = getType(type);
          if (simpleCheckRE.test(expectedType)) {
            var t = typeof value;
            valid = t === expectedType.toLowerCase();
            if (!valid && t === "object") {
              valid = value instanceof type;
            }
          } else if (expectedType === "Object") {
            valid = isPlainObject(value);
          } else if (expectedType === "Array") {
            valid = Array.isArray(value);
          } else {
            try {
              valid = value instanceof type;
            } catch (e) {
              warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
              valid = false;
            }
          }
          return {
            valid,
            expectedType
          };
        }
        var functionTypeCheckRE = /^\s*function (\w+)/;
        function getType(fn) {
          var match = fn && fn.toString().match(functionTypeCheckRE);
          return match ? match[1] : "";
        }
        function isSameType(a, b) {
          return getType(a) === getType(b);
        }
        function getTypeIndex(type, expectedTypes) {
          if (!Array.isArray(expectedTypes)) {
            return isSameType(expectedTypes, type) ? 0 : -1;
          }
          for (var i = 0, len2 = expectedTypes.length; i < len2; i++) {
            if (isSameType(expectedTypes[i], type)) {
              return i;
            }
          }
          return -1;
        }
        function getInvalidTypeMessage(name, value, expectedTypes) {
          var message = 'Invalid prop: type check failed for prop "' + name + '". Expected ' + expectedTypes.map(capitalize).join(", ");
          var expectedType = expectedTypes[0];
          var receivedType = toRawType(value);
          if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(typeof value) && !isBoolean(expectedType, receivedType)) {
            message += " with value " + styleValue(value, expectedType);
          }
          message += ", got " + receivedType + " ";
          if (isExplicable(receivedType)) {
            message += "with value " + styleValue(value, receivedType) + ".";
          }
          return message;
        }
        function styleValue(value, type) {
          if (type === "String") {
            return '"' + value + '"';
          } else if (type === "Number") {
            return "" + Number(value);
          } else {
            return "" + value;
          }
        }
        var EXPLICABLE_TYPES = ["string", "number", "boolean"];
        function isExplicable(value) {
          return EXPLICABLE_TYPES.some(function(elem) {
            return value.toLowerCase() === elem;
          });
        }
        function isBoolean() {
          var args = [], len2 = arguments.length;
          while (len2--)
            args[len2] = arguments[len2];
          return args.some(function(elem) {
            return elem.toLowerCase() === "boolean";
          });
        }
        function handleError(err, vm, info) {
          pushTarget();
          try {
            if (vm) {
              var cur = vm;
              while (cur = cur.$parent) {
                var hooks2 = cur.$options.errorCaptured;
                if (hooks2) {
                  for (var i = 0; i < hooks2.length; i++) {
                    try {
                      var capture = hooks2[i].call(cur, err, vm, info) === false;
                      if (capture) {
                        return;
                      }
                    } catch (e) {
                      globalHandleError(e, cur, "errorCaptured hook");
                    }
                  }
                }
              }
            }
            globalHandleError(err, vm, info);
          } finally {
            popTarget();
          }
        }
        function invokeWithErrorHandling(handler, context, args, vm, info) {
          var res;
          try {
            res = args ? handler.apply(context, args) : handler.call(context);
            if (res && !res._isVue && isPromise(res) && !res._handled) {
              res.catch(function(e) {
                return handleError(e, vm, info + " (Promise/async)");
              });
              res._handled = true;
            }
          } catch (e) {
            handleError(e, vm, info);
          }
          return res;
        }
        function globalHandleError(err, vm, info) {
          if (config.errorHandler) {
            try {
              return config.errorHandler.call(null, err, vm, info);
            } catch (e) {
              if (e !== err) {
                logError(e, null, "config.errorHandler");
              }
            }
          }
          logError(err, vm, info);
        }
        function logError(err, vm, info) {
          {
            warn("Error in " + info + ': "' + err.toString() + '"', vm);
          }
          if ((inBrowser || inWeex) && typeof console !== "undefined") {
            console.error(err);
          } else {
            throw err;
          }
        }
        var isUsingMicroTask = false;
        var callbacks = [];
        var pending = false;
        function flushCallbacks() {
          pending = false;
          var copies = callbacks.slice(0);
          callbacks.length = 0;
          for (var i = 0; i < copies.length; i++) {
            copies[i]();
          }
        }
        var timerFunc;
        if (typeof Promise !== "undefined" && isNative(Promise)) {
          var p = Promise.resolve();
          timerFunc = function() {
            p.then(flushCallbacks);
            if (isIOS) {
              setTimeout(noop);
            }
          };
          isUsingMicroTask = true;
        } else if (!isIE && typeof MutationObserver !== "undefined" && (isNative(MutationObserver) || MutationObserver.toString() === "[object MutationObserverConstructor]")) {
          var counter = 1;
          var observer = new MutationObserver(flushCallbacks);
          var textNode = document.createTextNode(String(counter));
          observer.observe(textNode, {
            characterData: true
          });
          timerFunc = function() {
            counter = (counter + 1) % 2;
            textNode.data = String(counter);
          };
          isUsingMicroTask = true;
        } else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
          timerFunc = function() {
            setImmediate(flushCallbacks);
          };
        } else {
          timerFunc = function() {
            setTimeout(flushCallbacks, 0);
          };
        }
        function nextTick(cb, ctx) {
          var _resolve;
          callbacks.push(function() {
            if (cb) {
              try {
                cb.call(ctx);
              } catch (e) {
                handleError(e, ctx, "nextTick");
              }
            } else if (_resolve) {
              _resolve(ctx);
            }
          });
          if (!pending) {
            pending = true;
            timerFunc();
          }
          if (!cb && typeof Promise !== "undefined") {
            return new Promise(function(resolve) {
              _resolve = resolve;
            });
          }
        }
        var mark;
        var measure;
        {
          var perf = inBrowser && window.performance;
          if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
            mark = function(tag) {
              return perf.mark(tag);
            };
            measure = function(name, startTag, endTag2) {
              perf.measure(name, startTag, endTag2);
              perf.clearMarks(startTag);
              perf.clearMarks(endTag2);
            };
          }
        }
        var initProxy;
        {
          var allowedGlobals = makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require");
          var warnNonPresent = function(target2, key) {
            warn('Property or method "' + key + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target2);
          };
          var warnReservedPrefix = function(target2, key) {
            warn('Property "' + key + '" must be accessed with "$data.' + key + '" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data', target2);
          };
          var hasProxy = typeof Proxy !== "undefined" && isNative(Proxy);
          if (hasProxy) {
            var isBuiltInModifier = makeMap("stop,prevent,self,ctrl,shift,alt,meta,exact");
            config.keyCodes = new Proxy(config.keyCodes, {
              set: function set2(target2, key, value) {
                if (isBuiltInModifier(key)) {
                  warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
                  return false;
                } else {
                  target2[key] = value;
                  return true;
                }
              }
            });
          }
          var hasHandler = {
            has: function has2(target2, key) {
              var has3 = key in target2;
              var isAllowed = allowedGlobals(key) || typeof key === "string" && key.charAt(0) === "_" && !(key in target2.$data);
              if (!has3 && !isAllowed) {
                if (key in target2.$data) {
                  warnReservedPrefix(target2, key);
                } else {
                  warnNonPresent(target2, key);
                }
              }
              return has3 || !isAllowed;
            }
          };
          var getHandler = {
            get: function get(target2, key) {
              if (typeof key === "string" && !(key in target2)) {
                if (key in target2.$data) {
                  warnReservedPrefix(target2, key);
                } else {
                  warnNonPresent(target2, key);
                }
              }
              return target2[key];
            }
          };
          initProxy = function initProxy2(vm) {
            if (hasProxy) {
              var options = vm.$options;
              var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
              vm._renderProxy = new Proxy(vm, handlers);
            } else {
              vm._renderProxy = vm;
            }
          };
        }
        var seenObjects = new _Set();
        function traverse(val) {
          _traverse(val, seenObjects);
          seenObjects.clear();
        }
        function _traverse(val, seen) {
          var i, keys;
          var isA = Array.isArray(val);
          if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
            return;
          }
          if (val.__ob__) {
            var depId = val.__ob__.dep.id;
            if (seen.has(depId)) {
              return;
            }
            seen.add(depId);
          }
          if (isA) {
            i = val.length;
            while (i--) {
              _traverse(val[i], seen);
            }
          } else {
            keys = Object.keys(val);
            i = keys.length;
            while (i--) {
              _traverse(val[keys[i]], seen);
            }
          }
        }
        var normalizeEvent = cached(function(name) {
          var passive = name.charAt(0) === "&";
          name = passive ? name.slice(1) : name;
          var once$$1 = name.charAt(0) === "~";
          name = once$$1 ? name.slice(1) : name;
          var capture = name.charAt(0) === "!";
          name = capture ? name.slice(1) : name;
          return {
            name,
            once: once$$1,
            capture,
            passive
          };
        });
        function createFnInvoker(fns, vm) {
          function invoker() {
            var arguments$1 = arguments;
            var fns2 = invoker.fns;
            if (Array.isArray(fns2)) {
              var cloned = fns2.slice();
              for (var i = 0; i < cloned.length; i++) {
                invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
              }
            } else {
              return invokeWithErrorHandling(fns2, null, arguments, vm, "v-on handler");
            }
          }
          invoker.fns = fns;
          return invoker;
        }
        function updateListeners(on2, oldOn, add2, remove$$1, createOnceHandler2, vm) {
          var name, def$$1, cur, old, event;
          for (name in on2) {
            def$$1 = cur = on2[name];
            old = oldOn[name];
            event = normalizeEvent(name);
            if (isUndef(cur)) {
              warn('Invalid handler for event "' + event.name + '": got ' + String(cur), vm);
            } else if (isUndef(old)) {
              if (isUndef(cur.fns)) {
                cur = on2[name] = createFnInvoker(cur, vm);
              }
              if (isTrue(event.once)) {
                cur = on2[name] = createOnceHandler2(event.name, cur, event.capture);
              }
              add2(event.name, cur, event.capture, event.passive, event.params);
            } else if (cur !== old) {
              old.fns = cur;
              on2[name] = old;
            }
          }
          for (name in oldOn) {
            if (isUndef(on2[name])) {
              event = normalizeEvent(name);
              remove$$1(event.name, oldOn[name], event.capture);
            }
          }
        }
        function mergeVNodeHook(def2, hookKey, hook) {
          if (def2 instanceof VNode) {
            def2 = def2.data.hook || (def2.data.hook = {});
          }
          var invoker;
          var oldHook = def2[hookKey];
          function wrappedHook() {
            hook.apply(this, arguments);
            remove(invoker.fns, wrappedHook);
          }
          if (isUndef(oldHook)) {
            invoker = createFnInvoker([wrappedHook]);
          } else {
            if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
              invoker = oldHook;
              invoker.fns.push(wrappedHook);
            } else {
              invoker = createFnInvoker([oldHook, wrappedHook]);
            }
          }
          invoker.merged = true;
          def2[hookKey] = invoker;
        }
        function extractPropsFromVNodeData(data, Ctor, tag) {
          var propOptions = Ctor.options.props;
          if (isUndef(propOptions)) {
            return;
          }
          var res = {};
          var attrs2 = data.attrs;
          var props2 = data.props;
          if (isDef(attrs2) || isDef(props2)) {
            for (var key in propOptions) {
              var altKey = hyphenate(key);
              {
                var keyInLowerCase = key.toLowerCase();
                if (key !== keyInLowerCase && attrs2 && hasOwn(attrs2, keyInLowerCase)) {
                  tip('Prop "' + keyInLowerCase + '" is passed to component ' + formatComponentName(tag || Ctor) + ', but the declared prop name is "' + key + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + altKey + '" instead of "' + key + '".');
                }
              }
              checkProp(res, props2, key, altKey, true) || checkProp(res, attrs2, key, altKey, false);
            }
          }
          return res;
        }
        function checkProp(res, hash2, key, altKey, preserve) {
          if (isDef(hash2)) {
            if (hasOwn(hash2, key)) {
              res[key] = hash2[key];
              if (!preserve) {
                delete hash2[key];
              }
              return true;
            } else if (hasOwn(hash2, altKey)) {
              res[key] = hash2[altKey];
              if (!preserve) {
                delete hash2[altKey];
              }
              return true;
            }
          }
          return false;
        }
        function simpleNormalizeChildren(children) {
          for (var i = 0; i < children.length; i++) {
            if (Array.isArray(children[i])) {
              return Array.prototype.concat.apply([], children);
            }
          }
          return children;
        }
        function normalizeChildren(children) {
          return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : void 0;
        }
        function isTextNode(node) {
          return isDef(node) && isDef(node.text) && isFalse(node.isComment);
        }
        function normalizeArrayChildren(children, nestedIndex) {
          var res = [];
          var i, c, lastIndex, last;
          for (i = 0; i < children.length; i++) {
            c = children[i];
            if (isUndef(c) || typeof c === "boolean") {
              continue;
            }
            lastIndex = res.length - 1;
            last = res[lastIndex];
            if (Array.isArray(c)) {
              if (c.length > 0) {
                c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i);
                if (isTextNode(c[0]) && isTextNode(last)) {
                  res[lastIndex] = createTextVNode(last.text + c[0].text);
                  c.shift();
                }
                res.push.apply(res, c);
              }
            } else if (isPrimitive(c)) {
              if (isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + c);
              } else if (c !== "") {
                res.push(createTextVNode(c));
              }
            } else {
              if (isTextNode(c) && isTextNode(last)) {
                res[lastIndex] = createTextVNode(last.text + c.text);
              } else {
                if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
                  c.key = "__vlist" + nestedIndex + "_" + i + "__";
                }
                res.push(c);
              }
            }
          }
          return res;
        }
        function initProvide(vm) {
          var provide = vm.$options.provide;
          if (provide) {
            vm._provided = typeof provide === "function" ? provide.call(vm) : provide;
          }
        }
        function initInjections(vm) {
          var result = resolveInject(vm.$options.inject, vm);
          if (result) {
            toggleObserving(false);
            Object.keys(result).forEach(function(key) {
              {
                defineReactive$$1(vm, key, result[key], function() {
                  warn('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + key + '"', vm);
                });
              }
            });
            toggleObserving(true);
          }
        }
        function resolveInject(inject, vm) {
          if (inject) {
            var result = /* @__PURE__ */ Object.create(null);
            var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key === "__ob__") {
                continue;
              }
              var provideKey = inject[key].from;
              var source = vm;
              while (source) {
                if (source._provided && hasOwn(source._provided, provideKey)) {
                  result[key] = source._provided[provideKey];
                  break;
                }
                source = source.$parent;
              }
              if (!source) {
                if ("default" in inject[key]) {
                  var provideDefault = inject[key].default;
                  result[key] = typeof provideDefault === "function" ? provideDefault.call(vm) : provideDefault;
                } else {
                  warn('Injection "' + key + '" not found', vm);
                }
              }
            }
            return result;
          }
        }
        function resolveSlots(children, context) {
          if (!children || !children.length) {
            return {};
          }
          var slots = {};
          for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i];
            var data = child.data;
            if (data && data.attrs && data.attrs.slot) {
              delete data.attrs.slot;
            }
            if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
              var name = data.slot;
              var slot = slots[name] || (slots[name] = []);
              if (child.tag === "template") {
                slot.push.apply(slot, child.children || []);
              } else {
                slot.push(child);
              }
            } else {
              (slots.default || (slots.default = [])).push(child);
            }
          }
          for (var name$1 in slots) {
            if (slots[name$1].every(isWhitespace)) {
              delete slots[name$1];
            }
          }
          return slots;
        }
        function isWhitespace(node) {
          return node.isComment && !node.asyncFactory || node.text === " ";
        }
        function isAsyncPlaceholder(node) {
          return node.isComment && node.asyncFactory;
        }
        function normalizeScopedSlots(slots, normalSlots, prevSlots) {
          var res;
          var hasNormalSlots = Object.keys(normalSlots).length > 0;
          var isStable = slots ? !!slots.$stable : !hasNormalSlots;
          var key = slots && slots.$key;
          if (!slots) {
            res = {};
          } else if (slots._normalized) {
            return slots._normalized;
          } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
            return prevSlots;
          } else {
            res = {};
            for (var key$1 in slots) {
              if (slots[key$1] && key$1[0] !== "$") {
                res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
              }
            }
          }
          for (var key$2 in normalSlots) {
            if (!(key$2 in res)) {
              res[key$2] = proxyNormalSlot(normalSlots, key$2);
            }
          }
          if (slots && Object.isExtensible(slots)) {
            slots._normalized = res;
          }
          def(res, "$stable", isStable);
          def(res, "$key", key);
          def(res, "$hasNormal", hasNormalSlots);
          return res;
        }
        function normalizeScopedSlot(normalSlots, key, fn) {
          var normalized = function() {
            var res = arguments.length ? fn.apply(null, arguments) : fn({});
            res = res && typeof res === "object" && !Array.isArray(res) ? [res] : normalizeChildren(res);
            var vnode = res && res[0];
            return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) ? void 0 : res;
          };
          if (fn.proxy) {
            Object.defineProperty(normalSlots, key, {
              get: normalized,
              enumerable: true,
              configurable: true
            });
          }
          return normalized;
        }
        function proxyNormalSlot(slots, key) {
          return function() {
            return slots[key];
          };
        }
        function renderList(val, render) {
          var ret, i, l, keys, key;
          if (Array.isArray(val) || typeof val === "string") {
            ret = new Array(val.length);
            for (i = 0, l = val.length; i < l; i++) {
              ret[i] = render(val[i], i);
            }
          } else if (typeof val === "number") {
            ret = new Array(val);
            for (i = 0; i < val; i++) {
              ret[i] = render(i + 1, i);
            }
          } else if (isObject(val)) {
            if (hasSymbol && val[Symbol.iterator]) {
              ret = [];
              var iterator = val[Symbol.iterator]();
              var result = iterator.next();
              while (!result.done) {
                ret.push(render(result.value, ret.length));
                result = iterator.next();
              }
            } else {
              keys = Object.keys(val);
              ret = new Array(keys.length);
              for (i = 0, l = keys.length; i < l; i++) {
                key = keys[i];
                ret[i] = render(val[key], key, i);
              }
            }
          }
          if (!isDef(ret)) {
            ret = [];
          }
          ret._isVList = true;
          return ret;
        }
        function renderSlot(name, fallbackRender, props2, bindObject) {
          var scopedSlotFn = this.$scopedSlots[name];
          var nodes;
          if (scopedSlotFn) {
            props2 = props2 || {};
            if (bindObject) {
              if (!isObject(bindObject)) {
                warn("slot v-bind without argument expects an Object", this);
              }
              props2 = extend(extend({}, bindObject), props2);
            }
            nodes = scopedSlotFn(props2) || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
          } else {
            nodes = this.$slots[name] || (typeof fallbackRender === "function" ? fallbackRender() : fallbackRender);
          }
          var target2 = props2 && props2.slot;
          if (target2) {
            return this.$createElement("template", { slot: target2 }, nodes);
          } else {
            return nodes;
          }
        }
        function resolveFilter(id) {
          return resolveAsset(this.$options, "filters", id, true) || identity;
        }
        function isKeyNotMatch(expect, actual) {
          if (Array.isArray(expect)) {
            return expect.indexOf(actual) === -1;
          } else {
            return expect !== actual;
          }
        }
        function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
          var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
          if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
            return isKeyNotMatch(builtInKeyName, eventKeyName);
          } else if (mappedKeyCode) {
            return isKeyNotMatch(mappedKeyCode, eventKeyCode);
          } else if (eventKeyName) {
            return hyphenate(eventKeyName) !== key;
          }
          return eventKeyCode === void 0;
        }
        function bindObjectProps(data, tag, value, asProp, isSync) {
          if (value) {
            if (!isObject(value)) {
              warn("v-bind without argument expects an Object or Array value", this);
            } else {
              if (Array.isArray(value)) {
                value = toObject(value);
              }
              var hash2;
              var loop = function(key2) {
                if (key2 === "class" || key2 === "style" || isReservedAttribute(key2)) {
                  hash2 = data;
                } else {
                  var type = data.attrs && data.attrs.type;
                  hash2 = asProp || config.mustUseProp(tag, type, key2) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                }
                var camelizedKey = camelize(key2);
                var hyphenatedKey = hyphenate(key2);
                if (!(camelizedKey in hash2) && !(hyphenatedKey in hash2)) {
                  hash2[key2] = value[key2];
                  if (isSync) {
                    var on2 = data.on || (data.on = {});
                    on2["update:" + key2] = function($event) {
                      value[key2] = $event;
                    };
                  }
                }
              };
              for (var key in value)
                loop(key);
            }
          }
          return data;
        }
        function renderStatic(index2, isInFor) {
          var cached2 = this._staticTrees || (this._staticTrees = []);
          var tree = cached2[index2];
          if (tree && !isInFor) {
            return tree;
          }
          tree = cached2[index2] = this.$options.staticRenderFns[index2].call(this._renderProxy, null, this);
          markStatic(tree, "__static__" + index2, false);
          return tree;
        }
        function markOnce(tree, index2, key) {
          markStatic(tree, "__once__" + index2 + (key ? "_" + key : ""), true);
          return tree;
        }
        function markStatic(tree, key, isOnce) {
          if (Array.isArray(tree)) {
            for (var i = 0; i < tree.length; i++) {
              if (tree[i] && typeof tree[i] !== "string") {
                markStaticNode(tree[i], key + "_" + i, isOnce);
              }
            }
          } else {
            markStaticNode(tree, key, isOnce);
          }
        }
        function markStaticNode(node, key, isOnce) {
          node.isStatic = true;
          node.key = key;
          node.isOnce = isOnce;
        }
        function bindObjectListeners(data, value) {
          if (value) {
            if (!isPlainObject(value)) {
              warn("v-on without argument expects an Object value", this);
            } else {
              var on2 = data.on = data.on ? extend({}, data.on) : {};
              for (var key in value) {
                var existing = on2[key];
                var ours = value[key];
                on2[key] = existing ? [].concat(existing, ours) : ours;
              }
            }
          }
          return data;
        }
        function resolveScopedSlots(fns, res, hasDynamicKeys, contentHashKey) {
          res = res || { $stable: !hasDynamicKeys };
          for (var i = 0; i < fns.length; i++) {
            var slot = fns[i];
            if (Array.isArray(slot)) {
              resolveScopedSlots(slot, res, hasDynamicKeys);
            } else if (slot) {
              if (slot.proxy) {
                slot.fn.proxy = true;
              }
              res[slot.key] = slot.fn;
            }
          }
          if (contentHashKey) {
            res.$key = contentHashKey;
          }
          return res;
        }
        function bindDynamicKeys(baseObj, values) {
          for (var i = 0; i < values.length; i += 2) {
            var key = values[i];
            if (typeof key === "string" && key) {
              baseObj[values[i]] = values[i + 1];
            } else if (key !== "" && key !== null) {
              warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
            }
          }
          return baseObj;
        }
        function prependModifier(value, symbol) {
          return typeof value === "string" ? symbol + value : value;
        }
        function installRenderHelpers(target2) {
          target2._o = markOnce;
          target2._n = toNumber;
          target2._s = toString;
          target2._l = renderList;
          target2._t = renderSlot;
          target2._q = looseEqual;
          target2._i = looseIndexOf;
          target2._m = renderStatic;
          target2._f = resolveFilter;
          target2._k = checkKeyCodes;
          target2._b = bindObjectProps;
          target2._v = createTextVNode;
          target2._e = createEmptyVNode;
          target2._u = resolveScopedSlots;
          target2._g = bindObjectListeners;
          target2._d = bindDynamicKeys;
          target2._p = prependModifier;
        }
        function FunctionalRenderContext(data, props2, children, parent, Ctor) {
          var this$1 = this;
          var options = Ctor.options;
          var contextVm;
          if (hasOwn(parent, "_uid")) {
            contextVm = Object.create(parent);
            contextVm._original = parent;
          } else {
            contextVm = parent;
            parent = parent._original;
          }
          var isCompiled = isTrue(options._compiled);
          var needNormalization = !isCompiled;
          this.data = data;
          this.props = props2;
          this.children = children;
          this.parent = parent;
          this.listeners = data.on || emptyObject;
          this.injections = resolveInject(options.inject, parent);
          this.slots = function() {
            if (!this$1.$slots) {
              normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
            }
            return this$1.$slots;
          };
          Object.defineProperty(this, "scopedSlots", {
            enumerable: true,
            get: function get() {
              return normalizeScopedSlots(data.scopedSlots, this.slots());
            }
          });
          if (isCompiled) {
            this.$options = options;
            this.$slots = this.slots();
            this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
          }
          if (options._scopeId) {
            this._c = function(a, b, c, d) {
              var vnode = createElement(contextVm, a, b, c, d, needNormalization);
              if (vnode && !Array.isArray(vnode)) {
                vnode.fnScopeId = options._scopeId;
                vnode.fnContext = parent;
              }
              return vnode;
            };
          } else {
            this._c = function(a, b, c, d) {
              return createElement(contextVm, a, b, c, d, needNormalization);
            };
          }
        }
        installRenderHelpers(FunctionalRenderContext.prototype);
        function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
          var options = Ctor.options;
          var props2 = {};
          var propOptions = options.props;
          if (isDef(propOptions)) {
            for (var key in propOptions) {
              props2[key] = validateProp(key, propOptions, propsData || emptyObject);
            }
          } else {
            if (isDef(data.attrs)) {
              mergeProps(props2, data.attrs);
            }
            if (isDef(data.props)) {
              mergeProps(props2, data.props);
            }
          }
          var renderContext = new FunctionalRenderContext(data, props2, children, contextVm, Ctor);
          var vnode = options.render.call(null, renderContext._c, renderContext);
          if (vnode instanceof VNode) {
            return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
          } else if (Array.isArray(vnode)) {
            var vnodes = normalizeChildren(vnode) || [];
            var res = new Array(vnodes.length);
            for (var i = 0; i < vnodes.length; i++) {
              res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
            }
            return res;
          }
        }
        function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
          var clone = cloneVNode(vnode);
          clone.fnContext = contextVm;
          clone.fnOptions = options;
          {
            (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
          }
          if (data.slot) {
            (clone.data || (clone.data = {})).slot = data.slot;
          }
          return clone;
        }
        function mergeProps(to, from) {
          for (var key in from) {
            to[camelize(key)] = from[key];
          }
        }
        var componentVNodeHooks = {
          init: function init(vnode, hydrating) {
            if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
              var mountedNode = vnode;
              componentVNodeHooks.prepatch(mountedNode, mountedNode);
            } else {
              var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
              child.$mount(hydrating ? vnode.elm : void 0, hydrating);
            }
          },
          prepatch: function prepatch(oldVnode, vnode) {
            var options = vnode.componentOptions;
            var child = vnode.componentInstance = oldVnode.componentInstance;
            updateChildComponent(child, options.propsData, options.listeners, vnode, options.children);
          },
          insert: function insert(vnode) {
            var context = vnode.context;
            var componentInstance = vnode.componentInstance;
            if (!componentInstance._isMounted) {
              componentInstance._isMounted = true;
              callHook(componentInstance, "mounted");
            }
            if (vnode.data.keepAlive) {
              if (context._isMounted) {
                queueActivatedComponent(componentInstance);
              } else {
                activateChildComponent(componentInstance, true);
              }
            }
          },
          destroy: function destroy(vnode) {
            var componentInstance = vnode.componentInstance;
            if (!componentInstance._isDestroyed) {
              if (!vnode.data.keepAlive) {
                componentInstance.$destroy();
              } else {
                deactivateChildComponent(componentInstance, true);
              }
            }
          }
        };
        var hooksToMerge = Object.keys(componentVNodeHooks);
        function createComponent(Ctor, data, context, children, tag) {
          if (isUndef(Ctor)) {
            return;
          }
          var baseCtor = context.$options._base;
          if (isObject(Ctor)) {
            Ctor = baseCtor.extend(Ctor);
          }
          if (typeof Ctor !== "function") {
            {
              warn("Invalid Component definition: " + String(Ctor), context);
            }
            return;
          }
          var asyncFactory;
          if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor;
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
            if (Ctor === void 0) {
              return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
            }
          }
          data = data || {};
          resolveConstructorOptions(Ctor);
          if (isDef(data.model)) {
            transformModel(Ctor.options, data);
          }
          var propsData = extractPropsFromVNodeData(data, Ctor, tag);
          if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(Ctor, propsData, data, context, children);
          }
          var listeners = data.on;
          data.on = data.nativeOn;
          if (isTrue(Ctor.options.abstract)) {
            var slot = data.slot;
            data = {};
            if (slot) {
              data.slot = slot;
            }
          }
          installComponentHooks(data);
          var name = Ctor.options.name || tag;
          var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, void 0, void 0, void 0, context, { Ctor, propsData, listeners, tag, children }, asyncFactory);
          return vnode;
        }
        function createComponentInstanceForVnode(vnode, parent) {
          var options = {
            _isComponent: true,
            _parentVnode: vnode,
            parent
          };
          var inlineTemplate = vnode.data.inlineTemplate;
          if (isDef(inlineTemplate)) {
            options.render = inlineTemplate.render;
            options.staticRenderFns = inlineTemplate.staticRenderFns;
          }
          return new vnode.componentOptions.Ctor(options);
        }
        function installComponentHooks(data) {
          var hooks2 = data.hook || (data.hook = {});
          for (var i = 0; i < hooksToMerge.length; i++) {
            var key = hooksToMerge[i];
            var existing = hooks2[key];
            var toMerge = componentVNodeHooks[key];
            if (existing !== toMerge && !(existing && existing._merged)) {
              hooks2[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
            }
          }
        }
        function mergeHook$1(f1, f2) {
          var merged = function(a, b) {
            f1(a, b);
            f2(a, b);
          };
          merged._merged = true;
          return merged;
        }
        function transformModel(options, data) {
          var prop = options.model && options.model.prop || "value";
          var event = options.model && options.model.event || "input";
          (data.attrs || (data.attrs = {}))[prop] = data.model.value;
          var on2 = data.on || (data.on = {});
          var existing = on2[event];
          var callback = data.model.callback;
          if (isDef(existing)) {
            if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
              on2[event] = [callback].concat(existing);
            }
          } else {
            on2[event] = callback;
          }
        }
        var SIMPLE_NORMALIZE = 1;
        var ALWAYS_NORMALIZE = 2;
        function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
          if (Array.isArray(data) || isPrimitive(data)) {
            normalizationType = children;
            children = data;
            data = void 0;
          }
          if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE;
          }
          return _createElement(context, tag, data, children, normalizationType);
        }
        function _createElement(context, tag, data, children, normalizationType) {
          if (isDef(data) && isDef(data.__ob__)) {
            warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\nAlways create fresh vnode data objects in each render!", context);
            return createEmptyVNode();
          }
          if (isDef(data) && isDef(data.is)) {
            tag = data.is;
          }
          if (!tag) {
            return createEmptyVNode();
          }
          if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
            {
              warn("Avoid using non-primitive value as key, use string/number value instead.", context);
            }
          }
          if (Array.isArray(children) && typeof children[0] === "function") {
            data = data || {};
            data.scopedSlots = { default: children[0] };
            children.length = 0;
          }
          if (normalizationType === ALWAYS_NORMALIZE) {
            children = normalizeChildren(children);
          } else if (normalizationType === SIMPLE_NORMALIZE) {
            children = simpleNormalizeChildren(children);
          }
          var vnode, ns;
          if (typeof tag === "string") {
            var Ctor;
            ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
            if (config.isReservedTag(tag)) {
              if (isDef(data) && isDef(data.nativeOn) && data.tag !== "component") {
                warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
              }
              vnode = new VNode(config.parsePlatformTagName(tag), data, children, void 0, void 0, context);
            } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, "components", tag))) {
              vnode = createComponent(Ctor, data, context, children, tag);
            } else {
              vnode = new VNode(tag, data, children, void 0, void 0, context);
            }
          } else {
            vnode = createComponent(tag, data, context, children);
          }
          if (Array.isArray(vnode)) {
            return vnode;
          } else if (isDef(vnode)) {
            if (isDef(ns)) {
              applyNS(vnode, ns);
            }
            if (isDef(data)) {
              registerDeepBindings(data);
            }
            return vnode;
          } else {
            return createEmptyVNode();
          }
        }
        function applyNS(vnode, ns, force) {
          vnode.ns = ns;
          if (vnode.tag === "foreignObject") {
            ns = void 0;
            force = true;
          }
          if (isDef(vnode.children)) {
            for (var i = 0, l = vnode.children.length; i < l; i++) {
              var child = vnode.children[i];
              if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== "svg")) {
                applyNS(child, ns, force);
              }
            }
          }
        }
        function registerDeepBindings(data) {
          if (isObject(data.style)) {
            traverse(data.style);
          }
          if (isObject(data.class)) {
            traverse(data.class);
          }
        }
        function initRender(vm) {
          vm._vnode = null;
          vm._staticTrees = null;
          var options = vm.$options;
          var parentVnode = vm.$vnode = options._parentVnode;
          var renderContext = parentVnode && parentVnode.context;
          vm.$slots = resolveSlots(options._renderChildren, renderContext);
          vm.$scopedSlots = emptyObject;
          vm._c = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, false);
          };
          vm.$createElement = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, true);
          };
          var parentData = parentVnode && parentVnode.data;
          {
            defineReactive$$1(vm, "$attrs", parentData && parentData.attrs || emptyObject, function() {
              !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
            }, true);
            defineReactive$$1(vm, "$listeners", options._parentListeners || emptyObject, function() {
              !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
            }, true);
          }
        }
        var currentRenderingInstance = null;
        function renderMixin(Vue3) {
          installRenderHelpers(Vue3.prototype);
          Vue3.prototype.$nextTick = function(fn) {
            return nextTick(fn, this);
          };
          Vue3.prototype._render = function() {
            var vm = this;
            var ref2 = vm.$options;
            var render = ref2.render;
            var _parentVnode = ref2._parentVnode;
            if (_parentVnode) {
              vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
            }
            vm.$vnode = _parentVnode;
            var vnode;
            try {
              currentRenderingInstance = vm;
              vnode = render.call(vm._renderProxy, vm.$createElement);
            } catch (e) {
              handleError(e, vm, "render");
              if (vm.$options.renderError) {
                try {
                  vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                } catch (e2) {
                  handleError(e2, vm, "renderError");
                  vnode = vm._vnode;
                }
              } else {
                vnode = vm._vnode;
              }
            } finally {
              currentRenderingInstance = null;
            }
            if (Array.isArray(vnode) && vnode.length === 1) {
              vnode = vnode[0];
            }
            if (!(vnode instanceof VNode)) {
              if (Array.isArray(vnode)) {
                warn("Multiple root nodes returned from render function. Render function should return a single root node.", vm);
              }
              vnode = createEmptyVNode();
            }
            vnode.parent = _parentVnode;
            return vnode;
          };
        }
        function ensureCtor(comp, base) {
          if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === "Module") {
            comp = comp.default;
          }
          return isObject(comp) ? base.extend(comp) : comp;
        }
        function createAsyncPlaceholder(factory, data, context, children, tag) {
          var node = createEmptyVNode();
          node.asyncFactory = factory;
          node.asyncMeta = { data, context, children, tag };
          return node;
        }
        function resolveAsyncComponent(factory, baseCtor) {
          if (isTrue(factory.error) && isDef(factory.errorComp)) {
            return factory.errorComp;
          }
          if (isDef(factory.resolved)) {
            return factory.resolved;
          }
          var owner = currentRenderingInstance;
          if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
            factory.owners.push(owner);
          }
          if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
            return factory.loadingComp;
          }
          if (owner && !isDef(factory.owners)) {
            var owners = factory.owners = [owner];
            var sync = true;
            var timerLoading = null;
            var timerTimeout = null;
            owner.$on("hook:destroyed", function() {
              return remove(owners, owner);
            });
            var forceRender = function(renderCompleted) {
              for (var i = 0, l = owners.length; i < l; i++) {
                owners[i].$forceUpdate();
              }
              if (renderCompleted) {
                owners.length = 0;
                if (timerLoading !== null) {
                  clearTimeout(timerLoading);
                  timerLoading = null;
                }
                if (timerTimeout !== null) {
                  clearTimeout(timerTimeout);
                  timerTimeout = null;
                }
              }
            };
            var resolve = once(function(res2) {
              factory.resolved = ensureCtor(res2, baseCtor);
              if (!sync) {
                forceRender(true);
              } else {
                owners.length = 0;
              }
            });
            var reject = once(function(reason) {
              warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ""));
              if (isDef(factory.errorComp)) {
                factory.error = true;
                forceRender(true);
              }
            });
            var res = factory(resolve, reject);
            if (isObject(res)) {
              if (isPromise(res)) {
                if (isUndef(factory.resolved)) {
                  res.then(resolve, reject);
                }
              } else if (isPromise(res.component)) {
                res.component.then(resolve, reject);
                if (isDef(res.error)) {
                  factory.errorComp = ensureCtor(res.error, baseCtor);
                }
                if (isDef(res.loading)) {
                  factory.loadingComp = ensureCtor(res.loading, baseCtor);
                  if (res.delay === 0) {
                    factory.loading = true;
                  } else {
                    timerLoading = setTimeout(function() {
                      timerLoading = null;
                      if (isUndef(factory.resolved) && isUndef(factory.error)) {
                        factory.loading = true;
                        forceRender(false);
                      }
                    }, res.delay || 200);
                  }
                }
                if (isDef(res.timeout)) {
                  timerTimeout = setTimeout(function() {
                    timerTimeout = null;
                    if (isUndef(factory.resolved)) {
                      reject("timeout (" + res.timeout + "ms)");
                    }
                  }, res.timeout);
                }
              }
            }
            sync = false;
            return factory.loading ? factory.loadingComp : factory.resolved;
          }
        }
        function getFirstComponentChild(children) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              var c = children[i];
              if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                return c;
              }
            }
          }
        }
        function initEvents(vm) {
          vm._events = /* @__PURE__ */ Object.create(null);
          vm._hasHookEvent = false;
          var listeners = vm.$options._parentListeners;
          if (listeners) {
            updateComponentListeners(vm, listeners);
          }
        }
        var target;
        function add(event, fn) {
          target.$on(event, fn);
        }
        function remove$1(event, fn) {
          target.$off(event, fn);
        }
        function createOnceHandler(event, fn) {
          var _target = target;
          return function onceHandler() {
            var res = fn.apply(null, arguments);
            if (res !== null) {
              _target.$off(event, onceHandler);
            }
          };
        }
        function updateComponentListeners(vm, listeners, oldListeners) {
          target = vm;
          updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
          target = void 0;
        }
        function eventsMixin(Vue3) {
          var hookRE = /^hook:/;
          Vue3.prototype.$on = function(event, fn) {
            var vm = this;
            if (Array.isArray(event)) {
              for (var i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn);
              }
            } else {
              (vm._events[event] || (vm._events[event] = [])).push(fn);
              if (hookRE.test(event)) {
                vm._hasHookEvent = true;
              }
            }
            return vm;
          };
          Vue3.prototype.$once = function(event, fn) {
            var vm = this;
            function on2() {
              vm.$off(event, on2);
              fn.apply(vm, arguments);
            }
            on2.fn = fn;
            vm.$on(event, on2);
            return vm;
          };
          Vue3.prototype.$off = function(event, fn) {
            var vm = this;
            if (!arguments.length) {
              vm._events = /* @__PURE__ */ Object.create(null);
              return vm;
            }
            if (Array.isArray(event)) {
              for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
                vm.$off(event[i$1], fn);
              }
              return vm;
            }
            var cbs = vm._events[event];
            if (!cbs) {
              return vm;
            }
            if (!fn) {
              vm._events[event] = null;
              return vm;
            }
            var cb;
            var i = cbs.length;
            while (i--) {
              cb = cbs[i];
              if (cb === fn || cb.fn === fn) {
                cbs.splice(i, 1);
                break;
              }
            }
            return vm;
          };
          Vue3.prototype.$emit = function(event) {
            var vm = this;
            {
              var lowerCaseEvent = event.toLowerCase();
              if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                tip('Event "' + lowerCaseEvent + '" is emitted in component ' + formatComponentName(vm) + ' but the handler is registered for "' + event + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + hyphenate(event) + '" instead of "' + event + '".');
              }
            }
            var cbs = vm._events[event];
            if (cbs) {
              cbs = cbs.length > 1 ? toArray(cbs) : cbs;
              var args = toArray(arguments, 1);
              var info = 'event handler for "' + event + '"';
              for (var i = 0, l = cbs.length; i < l; i++) {
                invokeWithErrorHandling(cbs[i], vm, args, vm, info);
              }
            }
            return vm;
          };
        }
        var activeInstance = null;
        var isUpdatingChildComponent = false;
        function setActiveInstance(vm) {
          var prevActiveInstance = activeInstance;
          activeInstance = vm;
          return function() {
            activeInstance = prevActiveInstance;
          };
        }
        function initLifecycle(vm) {
          var options = vm.$options;
          var parent = options.parent;
          if (parent && !options.abstract) {
            while (parent.$options.abstract && parent.$parent) {
              parent = parent.$parent;
            }
            parent.$children.push(vm);
          }
          vm.$parent = parent;
          vm.$root = parent ? parent.$root : vm;
          vm.$children = [];
          vm.$refs = {};
          vm._watcher = null;
          vm._inactive = null;
          vm._directInactive = false;
          vm._isMounted = false;
          vm._isDestroyed = false;
          vm._isBeingDestroyed = false;
        }
        function lifecycleMixin(Vue3) {
          Vue3.prototype._update = function(vnode, hydrating) {
            var vm = this;
            var prevEl = vm.$el;
            var prevVnode = vm._vnode;
            var restoreActiveInstance = setActiveInstance(vm);
            vm._vnode = vnode;
            if (!prevVnode) {
              vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false);
            } else {
              vm.$el = vm.__patch__(prevVnode, vnode);
            }
            restoreActiveInstance();
            if (prevEl) {
              prevEl.__vue__ = null;
            }
            if (vm.$el) {
              vm.$el.__vue__ = vm;
            }
            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
              vm.$parent.$el = vm.$el;
            }
          };
          Vue3.prototype.$forceUpdate = function() {
            var vm = this;
            if (vm._watcher) {
              vm._watcher.update();
            }
          };
          Vue3.prototype.$destroy = function() {
            var vm = this;
            if (vm._isBeingDestroyed) {
              return;
            }
            callHook(vm, "beforeDestroy");
            vm._isBeingDestroyed = true;
            var parent = vm.$parent;
            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
              remove(parent.$children, vm);
            }
            if (vm._watcher) {
              vm._watcher.teardown();
            }
            var i = vm._watchers.length;
            while (i--) {
              vm._watchers[i].teardown();
            }
            if (vm._data.__ob__) {
              vm._data.__ob__.vmCount--;
            }
            vm._isDestroyed = true;
            vm.__patch__(vm._vnode, null);
            callHook(vm, "destroyed");
            vm.$off();
            if (vm.$el) {
              vm.$el.__vue__ = null;
            }
            if (vm.$vnode) {
              vm.$vnode.parent = null;
            }
          };
        }
        function mountComponent(vm, el, hydrating) {
          vm.$el = el;
          if (!vm.$options.render) {
            vm.$options.render = createEmptyVNode;
            {
              if (vm.$options.template && vm.$options.template.charAt(0) !== "#" || vm.$options.el || el) {
                warn("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", vm);
              } else {
                warn("Failed to mount component: template or render function not defined.", vm);
              }
            }
          }
          callHook(vm, "beforeMount");
          var updateComponent;
          if (config.performance && mark) {
            updateComponent = function() {
              var name = vm._name;
              var id = vm._uid;
              var startTag = "vue-perf-start:" + id;
              var endTag2 = "vue-perf-end:" + id;
              mark(startTag);
              var vnode = vm._render();
              mark(endTag2);
              measure("vue " + name + " render", startTag, endTag2);
              mark(startTag);
              vm._update(vnode, hydrating);
              mark(endTag2);
              measure("vue " + name + " patch", startTag, endTag2);
            };
          } else {
            updateComponent = function() {
              vm._update(vm._render(), hydrating);
            };
          }
          new Watcher(vm, updateComponent, noop, {
            before: function before() {
              if (vm._isMounted && !vm._isDestroyed) {
                callHook(vm, "beforeUpdate");
              }
            }
          }, true);
          hydrating = false;
          if (vm.$vnode == null) {
            vm._isMounted = true;
            callHook(vm, "mounted");
          }
          return vm;
        }
        function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
          {
            isUpdatingChildComponent = true;
          }
          var newScopedSlots = parentVnode.data.scopedSlots;
          var oldScopedSlots = vm.$scopedSlots;
          var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key);
          var needsForceUpdate = !!(renderChildren || vm.$options._renderChildren || hasDynamicScopedSlot);
          vm.$options._parentVnode = parentVnode;
          vm.$vnode = parentVnode;
          if (vm._vnode) {
            vm._vnode.parent = parentVnode;
          }
          vm.$options._renderChildren = renderChildren;
          vm.$attrs = parentVnode.data.attrs || emptyObject;
          vm.$listeners = listeners || emptyObject;
          if (propsData && vm.$options.props) {
            toggleObserving(false);
            var props2 = vm._props;
            var propKeys = vm.$options._propKeys || [];
            for (var i = 0; i < propKeys.length; i++) {
              var key = propKeys[i];
              var propOptions = vm.$options.props;
              props2[key] = validateProp(key, propOptions, propsData, vm);
            }
            toggleObserving(true);
            vm.$options.propsData = propsData;
          }
          listeners = listeners || emptyObject;
          var oldListeners = vm.$options._parentListeners;
          vm.$options._parentListeners = listeners;
          updateComponentListeners(vm, listeners, oldListeners);
          if (needsForceUpdate) {
            vm.$slots = resolveSlots(renderChildren, parentVnode.context);
            vm.$forceUpdate();
          }
          {
            isUpdatingChildComponent = false;
          }
        }
        function isInInactiveTree(vm) {
          while (vm && (vm = vm.$parent)) {
            if (vm._inactive) {
              return true;
            }
          }
          return false;
        }
        function activateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = false;
            if (isInInactiveTree(vm)) {
              return;
            }
          } else if (vm._directInactive) {
            return;
          }
          if (vm._inactive || vm._inactive === null) {
            vm._inactive = false;
            for (var i = 0; i < vm.$children.length; i++) {
              activateChildComponent(vm.$children[i]);
            }
            callHook(vm, "activated");
          }
        }
        function deactivateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = true;
            if (isInInactiveTree(vm)) {
              return;
            }
          }
          if (!vm._inactive) {
            vm._inactive = true;
            for (var i = 0; i < vm.$children.length; i++) {
              deactivateChildComponent(vm.$children[i]);
            }
            callHook(vm, "deactivated");
          }
        }
        function callHook(vm, hook) {
          pushTarget();
          var handlers = vm.$options[hook];
          var info = hook + " hook";
          if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
              invokeWithErrorHandling(handlers[i], vm, null, vm, info);
            }
          }
          if (vm._hasHookEvent) {
            vm.$emit("hook:" + hook);
          }
          popTarget();
        }
        var MAX_UPDATE_COUNT = 100;
        var queue = [];
        var activatedChildren = [];
        var has = {};
        var circular = {};
        var waiting = false;
        var flushing = false;
        var index = 0;
        function resetSchedulerState() {
          index = queue.length = activatedChildren.length = 0;
          has = {};
          {
            circular = {};
          }
          waiting = flushing = false;
        }
        var currentFlushTimestamp = 0;
        var getNow = Date.now;
        if (inBrowser && !isIE) {
          var performance = window.performance;
          if (performance && typeof performance.now === "function" && getNow() > document.createEvent("Event").timeStamp) {
            getNow = function() {
              return performance.now();
            };
          }
        }
        function flushSchedulerQueue() {
          currentFlushTimestamp = getNow();
          flushing = true;
          var watcher, id;
          queue.sort(function(a, b) {
            return a.id - b.id;
          });
          for (index = 0; index < queue.length; index++) {
            watcher = queue[index];
            if (watcher.before) {
              watcher.before();
            }
            id = watcher.id;
            has[id] = null;
            watcher.run();
            if (has[id] != null) {
              circular[id] = (circular[id] || 0) + 1;
              if (circular[id] > MAX_UPDATE_COUNT) {
                warn("You may have an infinite update loop " + (watcher.user ? 'in watcher with expression "' + watcher.expression + '"' : "in a component render function."), watcher.vm);
                break;
              }
            }
          }
          var activatedQueue = activatedChildren.slice();
          var updatedQueue = queue.slice();
          resetSchedulerState();
          callActivatedHooks(activatedQueue);
          callUpdatedHooks(updatedQueue);
          if (devtools && config.devtools) {
            devtools.emit("flush");
          }
        }
        function callUpdatedHooks(queue2) {
          var i = queue2.length;
          while (i--) {
            var watcher = queue2[i];
            var vm = watcher.vm;
            if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
              callHook(vm, "updated");
            }
          }
        }
        function queueActivatedComponent(vm) {
          vm._inactive = false;
          activatedChildren.push(vm);
        }
        function callActivatedHooks(queue2) {
          for (var i = 0; i < queue2.length; i++) {
            queue2[i]._inactive = true;
            activateChildComponent(queue2[i], true);
          }
        }
        function queueWatcher(watcher) {
          var id = watcher.id;
          if (has[id] == null) {
            has[id] = true;
            if (!flushing) {
              queue.push(watcher);
            } else {
              var i = queue.length - 1;
              while (i > index && queue[i].id > watcher.id) {
                i--;
              }
              queue.splice(i + 1, 0, watcher);
            }
            if (!waiting) {
              waiting = true;
              if (!config.async) {
                flushSchedulerQueue();
                return;
              }
              nextTick(flushSchedulerQueue);
            }
          }
        }
        var uid$2 = 0;
        var Watcher = function Watcher2(vm, expOrFn, cb, options, isRenderWatcher) {
          this.vm = vm;
          if (isRenderWatcher) {
            vm._watcher = this;
          }
          vm._watchers.push(this);
          if (options) {
            this.deep = !!options.deep;
            this.user = !!options.user;
            this.lazy = !!options.lazy;
            this.sync = !!options.sync;
            this.before = options.before;
          } else {
            this.deep = this.user = this.lazy = this.sync = false;
          }
          this.cb = cb;
          this.id = ++uid$2;
          this.active = true;
          this.dirty = this.lazy;
          this.deps = [];
          this.newDeps = [];
          this.depIds = new _Set();
          this.newDepIds = new _Set();
          this.expression = expOrFn.toString();
          if (typeof expOrFn === "function") {
            this.getter = expOrFn;
          } else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
              this.getter = noop;
              warn('Failed watching path: "' + expOrFn + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', vm);
            }
          }
          this.value = this.lazy ? void 0 : this.get();
        };
        Watcher.prototype.get = function get() {
          pushTarget(this);
          var value;
          var vm = this.vm;
          try {
            value = this.getter.call(vm, vm);
          } catch (e) {
            if (this.user) {
              handleError(e, vm, 'getter for watcher "' + this.expression + '"');
            } else {
              throw e;
            }
          } finally {
            if (this.deep) {
              traverse(value);
            }
            popTarget();
            this.cleanupDeps();
          }
          return value;
        };
        Watcher.prototype.addDep = function addDep(dep) {
          var id = dep.id;
          if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
              dep.addSub(this);
            }
          }
        };
        Watcher.prototype.cleanupDeps = function cleanupDeps() {
          var i = this.deps.length;
          while (i--) {
            var dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) {
              dep.removeSub(this);
            }
          }
          var tmp = this.depIds;
          this.depIds = this.newDepIds;
          this.newDepIds = tmp;
          this.newDepIds.clear();
          tmp = this.deps;
          this.deps = this.newDeps;
          this.newDeps = tmp;
          this.newDeps.length = 0;
        };
        Watcher.prototype.update = function update() {
          if (this.lazy) {
            this.dirty = true;
          } else if (this.sync) {
            this.run();
          } else {
            queueWatcher(this);
          }
        };
        Watcher.prototype.run = function run() {
          if (this.active) {
            var value = this.get();
            if (value !== this.value || isObject(value) || this.deep) {
              var oldValue = this.value;
              this.value = value;
              if (this.user) {
                var info = 'callback for watcher "' + this.expression + '"';
                invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
              } else {
                this.cb.call(this.vm, value, oldValue);
              }
            }
          }
        };
        Watcher.prototype.evaluate = function evaluate() {
          this.value = this.get();
          this.dirty = false;
        };
        Watcher.prototype.depend = function depend() {
          var i = this.deps.length;
          while (i--) {
            this.deps[i].depend();
          }
        };
        Watcher.prototype.teardown = function teardown() {
          if (this.active) {
            if (!this.vm._isBeingDestroyed) {
              remove(this.vm._watchers, this);
            }
            var i = this.deps.length;
            while (i--) {
              this.deps[i].removeSub(this);
            }
            this.active = false;
          }
        };
        var sharedPropertyDefinition = {
          enumerable: true,
          configurable: true,
          get: noop,
          set: noop
        };
        function proxy(target2, sourceKey, key) {
          sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key];
          };
          sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val;
          };
          Object.defineProperty(target2, key, sharedPropertyDefinition);
        }
        function initState(vm) {
          vm._watchers = [];
          var opts2 = vm.$options;
          if (opts2.props) {
            initProps(vm, opts2.props);
          }
          if (opts2.methods) {
            initMethods(vm, opts2.methods);
          }
          if (opts2.data) {
            initData(vm);
          } else {
            observe(vm._data = {}, true);
          }
          if (opts2.computed) {
            initComputed(vm, opts2.computed);
          }
          if (opts2.watch && opts2.watch !== nativeWatch) {
            initWatch(vm, opts2.watch);
          }
        }
        function initProps(vm, propsOptions) {
          var propsData = vm.$options.propsData || {};
          var props2 = vm._props = {};
          var keys = vm.$options._propKeys = [];
          var isRoot = !vm.$parent;
          if (!isRoot) {
            toggleObserving(false);
          }
          var loop = function(key2) {
            keys.push(key2);
            var value = validateProp(key2, propsOptions, propsData, vm);
            {
              var hyphenatedKey = hyphenate(key2);
              if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
                warn('"' + hyphenatedKey + '" is a reserved attribute and cannot be used as component prop.', vm);
              }
              defineReactive$$1(props2, key2, value, function() {
                if (!isRoot && !isUpdatingChildComponent) {
                  warn(`Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "` + key2 + '"', vm);
                }
              });
            }
            if (!(key2 in vm)) {
              proxy(vm, "_props", key2);
            }
          };
          for (var key in propsOptions)
            loop(key);
          toggleObserving(true);
        }
        function initData(vm) {
          var data = vm.$options.data;
          data = vm._data = typeof data === "function" ? getData(data, vm) : data || {};
          if (!isPlainObject(data)) {
            data = {};
            warn("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", vm);
          }
          var keys = Object.keys(data);
          var props2 = vm.$options.props;
          var methods = vm.$options.methods;
          var i = keys.length;
          while (i--) {
            var key = keys[i];
            {
              if (methods && hasOwn(methods, key)) {
                warn('Method "' + key + '" has already been defined as a data property.', vm);
              }
            }
            if (props2 && hasOwn(props2, key)) {
              warn('The data property "' + key + '" is already declared as a prop. Use prop default value instead.', vm);
            } else if (!isReserved(key)) {
              proxy(vm, "_data", key);
            }
          }
          observe(data, true);
        }
        function getData(data, vm) {
          pushTarget();
          try {
            return data.call(vm, vm);
          } catch (e) {
            handleError(e, vm, "data()");
            return {};
          } finally {
            popTarget();
          }
        }
        var computedWatcherOptions = { lazy: true };
        function initComputed(vm, computed) {
          var watchers = vm._computedWatchers = /* @__PURE__ */ Object.create(null);
          var isSSR = isServerRendering();
          for (var key in computed) {
            var userDef = computed[key];
            var getter = typeof userDef === "function" ? userDef : userDef.get;
            if (getter == null) {
              warn('Getter is missing for computed property "' + key + '".', vm);
            }
            if (!isSSR) {
              watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
            }
            if (!(key in vm)) {
              defineComputed(vm, key, userDef);
            } else {
              if (key in vm.$data) {
                warn('The computed property "' + key + '" is already defined in data.', vm);
              } else if (vm.$options.props && key in vm.$options.props) {
                warn('The computed property "' + key + '" is already defined as a prop.', vm);
              } else if (vm.$options.methods && key in vm.$options.methods) {
                warn('The computed property "' + key + '" is already defined as a method.', vm);
              }
            }
          }
        }
        function defineComputed(target2, key, userDef) {
          var shouldCache = !isServerRendering();
          if (typeof userDef === "function") {
            sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
            sharedPropertyDefinition.set = noop;
          } else {
            sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
            sharedPropertyDefinition.set = userDef.set || noop;
          }
          if (sharedPropertyDefinition.set === noop) {
            sharedPropertyDefinition.set = function() {
              warn('Computed property "' + key + '" was assigned to but it has no setter.', this);
            };
          }
          Object.defineProperty(target2, key, sharedPropertyDefinition);
        }
        function createComputedGetter(key) {
          return function computedGetter() {
            var watcher = this._computedWatchers && this._computedWatchers[key];
            if (watcher) {
              if (watcher.dirty) {
                watcher.evaluate();
              }
              if (Dep.target) {
                watcher.depend();
              }
              return watcher.value;
            }
          };
        }
        function createGetterInvoker(fn) {
          return function computedGetter() {
            return fn.call(this, this);
          };
        }
        function initMethods(vm, methods) {
          var props2 = vm.$options.props;
          for (var key in methods) {
            {
              if (typeof methods[key] !== "function") {
                warn('Method "' + key + '" has type "' + typeof methods[key] + '" in the component definition. Did you reference the function correctly?', vm);
              }
              if (props2 && hasOwn(props2, key)) {
                warn('Method "' + key + '" has already been defined as a prop.', vm);
              }
              if (key in vm && isReserved(key)) {
                warn('Method "' + key + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.');
              }
            }
            vm[key] = typeof methods[key] !== "function" ? noop : bind(methods[key], vm);
          }
        }
        function initWatch(vm, watch) {
          for (var key in watch) {
            var handler = watch[key];
            if (Array.isArray(handler)) {
              for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i]);
              }
            } else {
              createWatcher(vm, key, handler);
            }
          }
        }
        function createWatcher(vm, expOrFn, handler, options) {
          if (isPlainObject(handler)) {
            options = handler;
            handler = handler.handler;
          }
          if (typeof handler === "string") {
            handler = vm[handler];
          }
          return vm.$watch(expOrFn, handler, options);
        }
        function stateMixin(Vue3) {
          var dataDef = {};
          dataDef.get = function() {
            return this._data;
          };
          var propsDef = {};
          propsDef.get = function() {
            return this._props;
          };
          {
            dataDef.set = function() {
              warn("Avoid replacing instance root $data. Use nested data properties instead.", this);
            };
            propsDef.set = function() {
              warn("$props is readonly.", this);
            };
          }
          Object.defineProperty(Vue3.prototype, "$data", dataDef);
          Object.defineProperty(Vue3.prototype, "$props", propsDef);
          Vue3.prototype.$set = set;
          Vue3.prototype.$delete = del;
          Vue3.prototype.$watch = function(expOrFn, cb, options) {
            var vm = this;
            if (isPlainObject(cb)) {
              return createWatcher(vm, expOrFn, cb, options);
            }
            options = options || {};
            options.user = true;
            var watcher = new Watcher(vm, expOrFn, cb, options);
            if (options.immediate) {
              var info = 'callback for immediate watcher "' + watcher.expression + '"';
              pushTarget();
              invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
              popTarget();
            }
            return function unwatchFn() {
              watcher.teardown();
            };
          };
        }
        var uid$3 = 0;
        function initMixin(Vue3) {
          Vue3.prototype._init = function(options) {
            var vm = this;
            vm._uid = uid$3++;
            var startTag, endTag2;
            if (config.performance && mark) {
              startTag = "vue-perf-start:" + vm._uid;
              endTag2 = "vue-perf-end:" + vm._uid;
              mark(startTag);
            }
            vm._isVue = true;
            if (options && options._isComponent) {
              initInternalComponent(vm, options);
            } else {
              vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
            }
            {
              initProxy(vm);
            }
            vm._self = vm;
            initLifecycle(vm);
            initEvents(vm);
            initRender(vm);
            callHook(vm, "beforeCreate");
            initInjections(vm);
            initState(vm);
            initProvide(vm);
            callHook(vm, "created");
            if (config.performance && mark) {
              vm._name = formatComponentName(vm, false);
              mark(endTag2);
              measure("vue " + vm._name + " init", startTag, endTag2);
            }
            if (vm.$options.el) {
              vm.$mount(vm.$options.el);
            }
          };
        }
        function initInternalComponent(vm, options) {
          var opts2 = vm.$options = Object.create(vm.constructor.options);
          var parentVnode = options._parentVnode;
          opts2.parent = options.parent;
          opts2._parentVnode = parentVnode;
          var vnodeComponentOptions = parentVnode.componentOptions;
          opts2.propsData = vnodeComponentOptions.propsData;
          opts2._parentListeners = vnodeComponentOptions.listeners;
          opts2._renderChildren = vnodeComponentOptions.children;
          opts2._componentTag = vnodeComponentOptions.tag;
          if (options.render) {
            opts2.render = options.render;
            opts2.staticRenderFns = options.staticRenderFns;
          }
        }
        function resolveConstructorOptions(Ctor) {
          var options = Ctor.options;
          if (Ctor.super) {
            var superOptions = resolveConstructorOptions(Ctor.super);
            var cachedSuperOptions = Ctor.superOptions;
            if (superOptions !== cachedSuperOptions) {
              Ctor.superOptions = superOptions;
              var modifiedOptions = resolveModifiedOptions(Ctor);
              if (modifiedOptions) {
                extend(Ctor.extendOptions, modifiedOptions);
              }
              options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
              if (options.name) {
                options.components[options.name] = Ctor;
              }
            }
          }
          return options;
        }
        function resolveModifiedOptions(Ctor) {
          var modified;
          var latest = Ctor.options;
          var sealed = Ctor.sealedOptions;
          for (var key in latest) {
            if (latest[key] !== sealed[key]) {
              if (!modified) {
                modified = {};
              }
              modified[key] = latest[key];
            }
          }
          return modified;
        }
        function Vue2(options) {
          if (!(this instanceof Vue2)) {
            warn("Vue is a constructor and should be called with the `new` keyword");
          }
          this._init(options);
        }
        initMixin(Vue2);
        stateMixin(Vue2);
        eventsMixin(Vue2);
        lifecycleMixin(Vue2);
        renderMixin(Vue2);
        function initUse(Vue3) {
          Vue3.use = function(plugin) {
            var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
            if (installedPlugins.indexOf(plugin) > -1) {
              return this;
            }
            var args = toArray(arguments, 1);
            args.unshift(this);
            if (typeof plugin.install === "function") {
              plugin.install.apply(plugin, args);
            } else if (typeof plugin === "function") {
              plugin.apply(null, args);
            }
            installedPlugins.push(plugin);
            return this;
          };
        }
        function initMixin$1(Vue3) {
          Vue3.mixin = function(mixin) {
            this.options = mergeOptions(this.options, mixin);
            return this;
          };
        }
        function initExtend(Vue3) {
          Vue3.cid = 0;
          var cid = 1;
          Vue3.extend = function(extendOptions) {
            extendOptions = extendOptions || {};
            var Super = this;
            var SuperId = Super.cid;
            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
            if (cachedCtors[SuperId]) {
              return cachedCtors[SuperId];
            }
            var name = extendOptions.name || Super.options.name;
            if (name) {
              validateComponentName(name);
            }
            var Sub = function VueComponent(options) {
              this._init(options);
            };
            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.cid = cid++;
            Sub.options = mergeOptions(Super.options, extendOptions);
            Sub["super"] = Super;
            if (Sub.options.props) {
              initProps$1(Sub);
            }
            if (Sub.options.computed) {
              initComputed$1(Sub);
            }
            Sub.extend = Super.extend;
            Sub.mixin = Super.mixin;
            Sub.use = Super.use;
            ASSET_TYPES.forEach(function(type) {
              Sub[type] = Super[type];
            });
            if (name) {
              Sub.options.components[name] = Sub;
            }
            Sub.superOptions = Super.options;
            Sub.extendOptions = extendOptions;
            Sub.sealedOptions = extend({}, Sub.options);
            cachedCtors[SuperId] = Sub;
            return Sub;
          };
        }
        function initProps$1(Comp) {
          var props2 = Comp.options.props;
          for (var key in props2) {
            proxy(Comp.prototype, "_props", key);
          }
        }
        function initComputed$1(Comp) {
          var computed = Comp.options.computed;
          for (var key in computed) {
            defineComputed(Comp.prototype, key, computed[key]);
          }
        }
        function initAssetRegisters(Vue3) {
          ASSET_TYPES.forEach(function(type) {
            Vue3[type] = function(id, definition) {
              if (!definition) {
                return this.options[type + "s"][id];
              } else {
                if (type === "component") {
                  validateComponentName(id);
                }
                if (type === "component" && isPlainObject(definition)) {
                  definition.name = definition.name || id;
                  definition = this.options._base.extend(definition);
                }
                if (type === "directive" && typeof definition === "function") {
                  definition = { bind: definition, update: definition };
                }
                this.options[type + "s"][id] = definition;
                return definition;
              }
            };
          });
        }
        function getComponentName(opts2) {
          return opts2 && (opts2.Ctor.options.name || opts2.tag);
        }
        function matches(pattern, name) {
          if (Array.isArray(pattern)) {
            return pattern.indexOf(name) > -1;
          } else if (typeof pattern === "string") {
            return pattern.split(",").indexOf(name) > -1;
          } else if (isRegExp(pattern)) {
            return pattern.test(name);
          }
          return false;
        }
        function pruneCache(keepAliveInstance, filter) {
          var cache = keepAliveInstance.cache;
          var keys = keepAliveInstance.keys;
          var _vnode = keepAliveInstance._vnode;
          for (var key in cache) {
            var entry = cache[key];
            if (entry) {
              var name = entry.name;
              if (name && !filter(name)) {
                pruneCacheEntry(cache, key, keys, _vnode);
              }
            }
          }
        }
        function pruneCacheEntry(cache, key, keys, current) {
          var entry = cache[key];
          if (entry && (!current || entry.tag !== current.tag)) {
            entry.componentInstance.$destroy();
          }
          cache[key] = null;
          remove(keys, key);
        }
        var patternTypes = [String, RegExp, Array];
        var KeepAlive = {
          name: "keep-alive",
          abstract: true,
          props: {
            include: patternTypes,
            exclude: patternTypes,
            max: [String, Number]
          },
          methods: {
            cacheVNode: function cacheVNode() {
              var ref2 = this;
              var cache = ref2.cache;
              var keys = ref2.keys;
              var vnodeToCache = ref2.vnodeToCache;
              var keyToCache = ref2.keyToCache;
              if (vnodeToCache) {
                var tag = vnodeToCache.tag;
                var componentInstance = vnodeToCache.componentInstance;
                var componentOptions = vnodeToCache.componentOptions;
                cache[keyToCache] = {
                  name: getComponentName(componentOptions),
                  tag,
                  componentInstance
                };
                keys.push(keyToCache);
                if (this.max && keys.length > parseInt(this.max)) {
                  pruneCacheEntry(cache, keys[0], keys, this._vnode);
                }
                this.vnodeToCache = null;
              }
            }
          },
          created: function created() {
            this.cache = /* @__PURE__ */ Object.create(null);
            this.keys = [];
          },
          destroyed: function destroyed() {
            for (var key in this.cache) {
              pruneCacheEntry(this.cache, key, this.keys);
            }
          },
          mounted: function mounted() {
            var this$1 = this;
            this.cacheVNode();
            this.$watch("include", function(val) {
              pruneCache(this$1, function(name) {
                return matches(val, name);
              });
            });
            this.$watch("exclude", function(val) {
              pruneCache(this$1, function(name) {
                return !matches(val, name);
              });
            });
          },
          updated: function updated() {
            this.cacheVNode();
          },
          render: function render() {
            var slot = this.$slots.default;
            var vnode = getFirstComponentChild(slot);
            var componentOptions = vnode && vnode.componentOptions;
            if (componentOptions) {
              var name = getComponentName(componentOptions);
              var ref2 = this;
              var include = ref2.include;
              var exclude = ref2.exclude;
              if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                return vnode;
              }
              var ref$12 = this;
              var cache = ref$12.cache;
              var keys = ref$12.keys;
              var key = vnode.key == null ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
              if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                remove(keys, key);
                keys.push(key);
              } else {
                this.vnodeToCache = vnode;
                this.keyToCache = key;
              }
              vnode.data.keepAlive = true;
            }
            return vnode || slot && slot[0];
          }
        };
        var builtInComponents = {
          KeepAlive
        };
        function initGlobalAPI(Vue3) {
          var configDef = {};
          configDef.get = function() {
            return config;
          };
          {
            configDef.set = function() {
              warn("Do not replace the Vue.config object, set individual fields instead.");
            };
          }
          Object.defineProperty(Vue3, "config", configDef);
          Vue3.util = {
            warn,
            extend,
            mergeOptions,
            defineReactive: defineReactive$$1
          };
          Vue3.set = set;
          Vue3.delete = del;
          Vue3.nextTick = nextTick;
          Vue3.observable = function(obj) {
            observe(obj);
            return obj;
          };
          Vue3.options = /* @__PURE__ */ Object.create(null);
          ASSET_TYPES.forEach(function(type) {
            Vue3.options[type + "s"] = /* @__PURE__ */ Object.create(null);
          });
          Vue3.options._base = Vue3;
          extend(Vue3.options.components, builtInComponents);
          initUse(Vue3);
          initMixin$1(Vue3);
          initExtend(Vue3);
          initAssetRegisters(Vue3);
        }
        initGlobalAPI(Vue2);
        Object.defineProperty(Vue2.prototype, "$isServer", {
          get: isServerRendering
        });
        Object.defineProperty(Vue2.prototype, "$ssrContext", {
          get: function get() {
            return this.$vnode && this.$vnode.ssrContext;
          }
        });
        Object.defineProperty(Vue2, "FunctionalRenderContext", {
          value: FunctionalRenderContext
        });
        Vue2.version = "2.6.14";
        var isReservedAttr = makeMap("style,class");
        var acceptValue = makeMap("input,textarea,option,select,progress");
        var mustUseProp = function(tag, type, attr) {
          return attr === "value" && acceptValue(tag) && type !== "button" || attr === "selected" && tag === "option" || attr === "checked" && tag === "input" || attr === "muted" && tag === "video";
        };
        var isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck");
        var isValidContentEditableValue = makeMap("events,caret,typing,plaintext-only");
        var convertEnumeratedValue = function(key, value) {
          return isFalsyAttrValue(value) || value === "false" ? "false" : key === "contenteditable" && isValidContentEditableValue(value) ? value : "true";
        };
        var isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible");
        var xlinkNS = "http://www.w3.org/1999/xlink";
        var isXlink = function(name) {
          return name.charAt(5) === ":" && name.slice(0, 5) === "xlink";
        };
        var getXlinkProp = function(name) {
          return isXlink(name) ? name.slice(6, name.length) : "";
        };
        var isFalsyAttrValue = function(val) {
          return val == null || val === false;
        };
        function genClassForVnode(vnode) {
          var data = vnode.data;
          var parentNode2 = vnode;
          var childNode = vnode;
          while (isDef(childNode.componentInstance)) {
            childNode = childNode.componentInstance._vnode;
            if (childNode && childNode.data) {
              data = mergeClassData(childNode.data, data);
            }
          }
          while (isDef(parentNode2 = parentNode2.parent)) {
            if (parentNode2 && parentNode2.data) {
              data = mergeClassData(data, parentNode2.data);
            }
          }
          return renderClass(data.staticClass, data.class);
        }
        function mergeClassData(child, parent) {
          return {
            staticClass: concat(child.staticClass, parent.staticClass),
            class: isDef(child.class) ? [child.class, parent.class] : parent.class
          };
        }
        function renderClass(staticClass, dynamicClass) {
          if (isDef(staticClass) || isDef(dynamicClass)) {
            return concat(staticClass, stringifyClass(dynamicClass));
          }
          return "";
        }
        function concat(a, b) {
          return a ? b ? a + " " + b : a : b || "";
        }
        function stringifyClass(value) {
          if (Array.isArray(value)) {
            return stringifyArray(value);
          }
          if (isObject(value)) {
            return stringifyObject(value);
          }
          if (typeof value === "string") {
            return value;
          }
          return "";
        }
        function stringifyArray(value) {
          var res = "";
          var stringified;
          for (var i = 0, l = value.length; i < l; i++) {
            if (isDef(stringified = stringifyClass(value[i])) && stringified !== "") {
              if (res) {
                res += " ";
              }
              res += stringified;
            }
          }
          return res;
        }
        function stringifyObject(value) {
          var res = "";
          for (var key in value) {
            if (value[key]) {
              if (res) {
                res += " ";
              }
              res += key;
            }
          }
          return res;
        }
        var namespaceMap = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML"
        };
        var isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot");
        var isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
        var isPreTag = function(tag) {
          return tag === "pre";
        };
        var isReservedTag = function(tag) {
          return isHTMLTag(tag) || isSVG(tag);
        };
        function getTagNamespace(tag) {
          if (isSVG(tag)) {
            return "svg";
          }
          if (tag === "math") {
            return "math";
          }
        }
        var unknownElementCache = /* @__PURE__ */ Object.create(null);
        function isUnknownElement(tag) {
          if (!inBrowser) {
            return true;
          }
          if (isReservedTag(tag)) {
            return false;
          }
          tag = tag.toLowerCase();
          if (unknownElementCache[tag] != null) {
            return unknownElementCache[tag];
          }
          var el = document.createElement(tag);
          if (tag.indexOf("-") > -1) {
            return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
          } else {
            return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
          }
        }
        var isTextInputType = makeMap("text,number,password,search,email,tel,url");
        function query(el) {
          if (typeof el === "string") {
            var selected = document.querySelector(el);
            if (!selected) {
              warn("Cannot find element: " + el);
              return document.createElement("div");
            }
            return selected;
          } else {
            return el;
          }
        }
        function createElement$1(tagName2, vnode) {
          var elm = document.createElement(tagName2);
          if (tagName2 !== "select") {
            return elm;
          }
          if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== void 0) {
            elm.setAttribute("multiple", "multiple");
          }
          return elm;
        }
        function createElementNS(namespace, tagName2) {
          return document.createElementNS(namespaceMap[namespace], tagName2);
        }
        function createTextNode(text2) {
          return document.createTextNode(text2);
        }
        function createComment(text2) {
          return document.createComment(text2);
        }
        function insertBefore(parentNode2, newNode, referenceNode) {
          parentNode2.insertBefore(newNode, referenceNode);
        }
        function removeChild(node, child) {
          node.removeChild(child);
        }
        function appendChild(node, child) {
          node.appendChild(child);
        }
        function parentNode(node) {
          return node.parentNode;
        }
        function nextSibling(node) {
          return node.nextSibling;
        }
        function tagName(node) {
          return node.tagName;
        }
        function setTextContent(node, text2) {
          node.textContent = text2;
        }
        function setStyleScope(node, scopeId) {
          node.setAttribute(scopeId, "");
        }
        var nodeOps = /* @__PURE__ */ Object.freeze({
          createElement: createElement$1,
          createElementNS,
          createTextNode,
          createComment,
          insertBefore,
          removeChild,
          appendChild,
          parentNode,
          nextSibling,
          tagName,
          setTextContent,
          setStyleScope
        });
        var ref = {
          create: function create(_, vnode) {
            registerRef(vnode);
          },
          update: function update(oldVnode, vnode) {
            if (oldVnode.data.ref !== vnode.data.ref) {
              registerRef(oldVnode, true);
              registerRef(vnode);
            }
          },
          destroy: function destroy(vnode) {
            registerRef(vnode, true);
          }
        };
        function registerRef(vnode, isRemoval) {
          var key = vnode.data.ref;
          if (!isDef(key)) {
            return;
          }
          var vm = vnode.context;
          var ref2 = vnode.componentInstance || vnode.elm;
          var refs = vm.$refs;
          if (isRemoval) {
            if (Array.isArray(refs[key])) {
              remove(refs[key], ref2);
            } else if (refs[key] === ref2) {
              refs[key] = void 0;
            }
          } else {
            if (vnode.data.refInFor) {
              if (!Array.isArray(refs[key])) {
                refs[key] = [ref2];
              } else if (refs[key].indexOf(ref2) < 0) {
                refs[key].push(ref2);
              }
            } else {
              refs[key] = ref2;
            }
          }
        }
        var emptyNode = new VNode("", {}, []);
        var hooks = ["create", "activate", "update", "remove", "destroy"];
        function sameVnode(a, b) {
          return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
        }
        function sameInputType(a, b) {
          if (a.tag !== "input") {
            return true;
          }
          var i;
          var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
          var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
          return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
        }
        function createKeyToOldIdx(children, beginIdx, endIdx) {
          var i, key;
          var map = {};
          for (i = beginIdx; i <= endIdx; ++i) {
            key = children[i].key;
            if (isDef(key)) {
              map[key] = i;
            }
          }
          return map;
        }
        function createPatchFunction(backend) {
          var i, j;
          var cbs = {};
          var modules2 = backend.modules;
          var nodeOps2 = backend.nodeOps;
          for (i = 0; i < hooks.length; ++i) {
            cbs[hooks[i]] = [];
            for (j = 0; j < modules2.length; ++j) {
              if (isDef(modules2[j][hooks[i]])) {
                cbs[hooks[i]].push(modules2[j][hooks[i]]);
              }
            }
          }
          function emptyNodeAt(elm) {
            return new VNode(nodeOps2.tagName(elm).toLowerCase(), {}, [], void 0, elm);
          }
          function createRmCb(childElm, listeners) {
            function remove$$1() {
              if (--remove$$1.listeners === 0) {
                removeNode(childElm);
              }
            }
            remove$$1.listeners = listeners;
            return remove$$1;
          }
          function removeNode(el) {
            var parent = nodeOps2.parentNode(el);
            if (isDef(parent)) {
              nodeOps2.removeChild(parent, el);
            }
          }
          function isUnknownElement$$1(vnode, inVPre) {
            return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function(ignore) {
              return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
            })) && config.isUnknownElement(vnode.tag);
          }
          var creatingElmInVPre = 0;
          function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index2) {
            if (isDef(vnode.elm) && isDef(ownerArray)) {
              vnode = ownerArray[index2] = cloneVNode(vnode);
            }
            vnode.isRootInsert = !nested;
            if (createComponent2(vnode, insertedVnodeQueue, parentElm, refElm)) {
              return;
            }
            var data = vnode.data;
            var children = vnode.children;
            var tag = vnode.tag;
            if (isDef(tag)) {
              {
                if (data && data.pre) {
                  creatingElmInVPre++;
                }
                if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
                  warn("Unknown custom element: <" + tag + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', vnode.context);
                }
              }
              vnode.elm = vnode.ns ? nodeOps2.createElementNS(vnode.ns, tag) : nodeOps2.createElement(tag, vnode);
              setScope(vnode);
              {
                createChildren(vnode, children, insertedVnodeQueue);
                if (isDef(data)) {
                  invokeCreateHooks(vnode, insertedVnodeQueue);
                }
                insert(parentElm, vnode.elm, refElm);
              }
              if (data && data.pre) {
                creatingElmInVPre--;
              }
            } else if (isTrue(vnode.isComment)) {
              vnode.elm = nodeOps2.createComment(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            } else {
              vnode.elm = nodeOps2.createTextNode(vnode.text);
              insert(parentElm, vnode.elm, refElm);
            }
          }
          function createComponent2(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i2 = vnode.data;
            if (isDef(i2)) {
              var isReactivated = isDef(vnode.componentInstance) && i2.keepAlive;
              if (isDef(i2 = i2.hook) && isDef(i2 = i2.init)) {
                i2(vnode, false);
              }
              if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                insert(parentElm, vnode.elm, refElm);
                if (isTrue(isReactivated)) {
                  reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                }
                return true;
              }
            }
          }
          function initComponent(vnode, insertedVnodeQueue) {
            if (isDef(vnode.data.pendingInsert)) {
              insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
              vnode.data.pendingInsert = null;
            }
            vnode.elm = vnode.componentInstance.$el;
            if (isPatchable(vnode)) {
              invokeCreateHooks(vnode, insertedVnodeQueue);
              setScope(vnode);
            } else {
              registerRef(vnode);
              insertedVnodeQueue.push(vnode);
            }
          }
          function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
            var i2;
            var innerNode = vnode;
            while (innerNode.componentInstance) {
              innerNode = innerNode.componentInstance._vnode;
              if (isDef(i2 = innerNode.data) && isDef(i2 = i2.transition)) {
                for (i2 = 0; i2 < cbs.activate.length; ++i2) {
                  cbs.activate[i2](emptyNode, innerNode);
                }
                insertedVnodeQueue.push(innerNode);
                break;
              }
            }
            insert(parentElm, vnode.elm, refElm);
          }
          function insert(parent, elm, ref$$1) {
            if (isDef(parent)) {
              if (isDef(ref$$1)) {
                if (nodeOps2.parentNode(ref$$1) === parent) {
                  nodeOps2.insertBefore(parent, elm, ref$$1);
                }
              } else {
                nodeOps2.appendChild(parent, elm);
              }
            }
          }
          function createChildren(vnode, children, insertedVnodeQueue) {
            if (Array.isArray(children)) {
              {
                checkDuplicateKeys(children);
              }
              for (var i2 = 0; i2 < children.length; ++i2) {
                createElm(children[i2], insertedVnodeQueue, vnode.elm, null, true, children, i2);
              }
            } else if (isPrimitive(vnode.text)) {
              nodeOps2.appendChild(vnode.elm, nodeOps2.createTextNode(String(vnode.text)));
            }
          }
          function isPatchable(vnode) {
            while (vnode.componentInstance) {
              vnode = vnode.componentInstance._vnode;
            }
            return isDef(vnode.tag);
          }
          function invokeCreateHooks(vnode, insertedVnodeQueue) {
            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
              cbs.create[i$1](emptyNode, vnode);
            }
            i = vnode.data.hook;
            if (isDef(i)) {
              if (isDef(i.create)) {
                i.create(emptyNode, vnode);
              }
              if (isDef(i.insert)) {
                insertedVnodeQueue.push(vnode);
              }
            }
          }
          function setScope(vnode) {
            var i2;
            if (isDef(i2 = vnode.fnScopeId)) {
              nodeOps2.setStyleScope(vnode.elm, i2);
            } else {
              var ancestor = vnode;
              while (ancestor) {
                if (isDef(i2 = ancestor.context) && isDef(i2 = i2.$options._scopeId)) {
                  nodeOps2.setStyleScope(vnode.elm, i2);
                }
                ancestor = ancestor.parent;
              }
            }
            if (isDef(i2 = activeInstance) && i2 !== vnode.context && i2 !== vnode.fnContext && isDef(i2 = i2.$options._scopeId)) {
              nodeOps2.setStyleScope(vnode.elm, i2);
            }
          }
          function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
            for (; startIdx <= endIdx; ++startIdx) {
              createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
            }
          }
          function invokeDestroyHook(vnode) {
            var i2, j2;
            var data = vnode.data;
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.destroy)) {
                i2(vnode);
              }
              for (i2 = 0; i2 < cbs.destroy.length; ++i2) {
                cbs.destroy[i2](vnode);
              }
            }
            if (isDef(i2 = vnode.children)) {
              for (j2 = 0; j2 < vnode.children.length; ++j2) {
                invokeDestroyHook(vnode.children[j2]);
              }
            }
          }
          function removeVnodes(vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
              var ch = vnodes[startIdx];
              if (isDef(ch)) {
                if (isDef(ch.tag)) {
                  removeAndInvokeRemoveHook(ch);
                  invokeDestroyHook(ch);
                } else {
                  removeNode(ch.elm);
                }
              }
            }
          }
          function removeAndInvokeRemoveHook(vnode, rm) {
            if (isDef(rm) || isDef(vnode.data)) {
              var i2;
              var listeners = cbs.remove.length + 1;
              if (isDef(rm)) {
                rm.listeners += listeners;
              } else {
                rm = createRmCb(vnode.elm, listeners);
              }
              if (isDef(i2 = vnode.componentInstance) && isDef(i2 = i2._vnode) && isDef(i2.data)) {
                removeAndInvokeRemoveHook(i2, rm);
              }
              for (i2 = 0; i2 < cbs.remove.length; ++i2) {
                cbs.remove[i2](vnode, rm);
              }
              if (isDef(i2 = vnode.data.hook) && isDef(i2 = i2.remove)) {
                i2(vnode, rm);
              } else {
                rm();
              }
            } else {
              removeNode(vnode.elm);
            }
          }
          function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
            var oldStartIdx = 0;
            var newStartIdx = 0;
            var oldEndIdx = oldCh.length - 1;
            var oldStartVnode = oldCh[0];
            var oldEndVnode = oldCh[oldEndIdx];
            var newEndIdx = newCh.length - 1;
            var newStartVnode = newCh[0];
            var newEndVnode = newCh[newEndIdx];
            var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
            var canMove = !removeOnly;
            {
              checkDuplicateKeys(newCh);
            }
            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
              if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx];
              } else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
              } else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
              } else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
              } else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
                canMove && nodeOps2.insertBefore(parentElm, oldStartVnode.elm, nodeOps2.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
              } else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                canMove && nodeOps2.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
              } else {
                if (isUndef(oldKeyToIdx)) {
                  oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                if (isUndef(idxInOld)) {
                  createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                } else {
                  vnodeToMove = oldCh[idxInOld];
                  if (sameVnode(vnodeToMove, newStartVnode)) {
                    patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
                    oldCh[idxInOld] = void 0;
                    canMove && nodeOps2.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                  } else {
                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                  }
                }
                newStartVnode = newCh[++newStartIdx];
              }
            }
            if (oldStartIdx > oldEndIdx) {
              refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
              addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
            } else if (newStartIdx > newEndIdx) {
              removeVnodes(oldCh, oldStartIdx, oldEndIdx);
            }
          }
          function checkDuplicateKeys(children) {
            var seenKeys = {};
            for (var i2 = 0; i2 < children.length; i2++) {
              var vnode = children[i2];
              var key = vnode.key;
              if (isDef(key)) {
                if (seenKeys[key]) {
                  warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
                } else {
                  seenKeys[key] = true;
                }
              }
            }
          }
          function findIdxInOld(node, oldCh, start, end) {
            for (var i2 = start; i2 < end; i2++) {
              var c = oldCh[i2];
              if (isDef(c) && sameVnode(node, c)) {
                return i2;
              }
            }
          }
          function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index2, removeOnly) {
            if (oldVnode === vnode) {
              return;
            }
            if (isDef(vnode.elm) && isDef(ownerArray)) {
              vnode = ownerArray[index2] = cloneVNode(vnode);
            }
            var elm = vnode.elm = oldVnode.elm;
            if (isTrue(oldVnode.isAsyncPlaceholder)) {
              if (isDef(vnode.asyncFactory.resolved)) {
                hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
              } else {
                vnode.isAsyncPlaceholder = true;
              }
              return;
            }
            if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
              vnode.componentInstance = oldVnode.componentInstance;
              return;
            }
            var i2;
            var data = vnode.data;
            if (isDef(data) && isDef(i2 = data.hook) && isDef(i2 = i2.prepatch)) {
              i2(oldVnode, vnode);
            }
            var oldCh = oldVnode.children;
            var ch = vnode.children;
            if (isDef(data) && isPatchable(vnode)) {
              for (i2 = 0; i2 < cbs.update.length; ++i2) {
                cbs.update[i2](oldVnode, vnode);
              }
              if (isDef(i2 = data.hook) && isDef(i2 = i2.update)) {
                i2(oldVnode, vnode);
              }
            }
            if (isUndef(vnode.text)) {
              if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch) {
                  updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
                }
              } else if (isDef(ch)) {
                {
                  checkDuplicateKeys(ch);
                }
                if (isDef(oldVnode.text)) {
                  nodeOps2.setTextContent(elm, "");
                }
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
              } else if (isDef(oldCh)) {
                removeVnodes(oldCh, 0, oldCh.length - 1);
              } else if (isDef(oldVnode.text)) {
                nodeOps2.setTextContent(elm, "");
              }
            } else if (oldVnode.text !== vnode.text) {
              nodeOps2.setTextContent(elm, vnode.text);
            }
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.postpatch)) {
                i2(oldVnode, vnode);
              }
            }
          }
          function invokeInsertHook(vnode, queue2, initial) {
            if (isTrue(initial) && isDef(vnode.parent)) {
              vnode.parent.data.pendingInsert = queue2;
            } else {
              for (var i2 = 0; i2 < queue2.length; ++i2) {
                queue2[i2].data.hook.insert(queue2[i2]);
              }
            }
          }
          var hydrationBailed = false;
          var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
          function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
            var i2;
            var tag = vnode.tag;
            var data = vnode.data;
            var children = vnode.children;
            inVPre = inVPre || data && data.pre;
            vnode.elm = elm;
            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
              vnode.isAsyncPlaceholder = true;
              return true;
            }
            {
              if (!assertNodeMatch(elm, vnode, inVPre)) {
                return false;
              }
            }
            if (isDef(data)) {
              if (isDef(i2 = data.hook) && isDef(i2 = i2.init)) {
                i2(vnode, true);
              }
              if (isDef(i2 = vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue);
                return true;
              }
            }
            if (isDef(tag)) {
              if (isDef(children)) {
                if (!elm.hasChildNodes()) {
                  createChildren(vnode, children, insertedVnodeQueue);
                } else {
                  if (isDef(i2 = data) && isDef(i2 = i2.domProps) && isDef(i2 = i2.innerHTML)) {
                    if (i2 !== elm.innerHTML) {
                      if (typeof console !== "undefined" && !hydrationBailed) {
                        hydrationBailed = true;
                        console.warn("Parent: ", elm);
                        console.warn("server innerHTML: ", i2);
                        console.warn("client innerHTML: ", elm.innerHTML);
                      }
                      return false;
                    }
                  } else {
                    var childrenMatch = true;
                    var childNode = elm.firstChild;
                    for (var i$1 = 0; i$1 < children.length; i$1++) {
                      if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                        childrenMatch = false;
                        break;
                      }
                      childNode = childNode.nextSibling;
                    }
                    if (!childrenMatch || childNode) {
                      if (typeof console !== "undefined" && !hydrationBailed) {
                        hydrationBailed = true;
                        console.warn("Parent: ", elm);
                        console.warn("Mismatching childNodes vs. VNodes: ", elm.childNodes, children);
                      }
                      return false;
                    }
                  }
                }
              }
              if (isDef(data)) {
                var fullInvoke = false;
                for (var key in data) {
                  if (!isRenderedModule(key)) {
                    fullInvoke = true;
                    invokeCreateHooks(vnode, insertedVnodeQueue);
                    break;
                  }
                }
                if (!fullInvoke && data["class"]) {
                  traverse(data["class"]);
                }
              }
            } else if (elm.data !== vnode.text) {
              elm.data = vnode.text;
            }
            return true;
          }
          function assertNodeMatch(node, vnode, inVPre) {
            if (isDef(vnode.tag)) {
              return vnode.tag.indexOf("vue-component") === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
            } else {
              return node.nodeType === (vnode.isComment ? 8 : 3);
            }
          }
          return function patch2(oldVnode, vnode, hydrating, removeOnly) {
            if (isUndef(vnode)) {
              if (isDef(oldVnode)) {
                invokeDestroyHook(oldVnode);
              }
              return;
            }
            var isInitialPatch = false;
            var insertedVnodeQueue = [];
            if (isUndef(oldVnode)) {
              isInitialPatch = true;
              createElm(vnode, insertedVnodeQueue);
            } else {
              var isRealElement = isDef(oldVnode.nodeType);
              if (!isRealElement && sameVnode(oldVnode, vnode)) {
                patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
              } else {
                if (isRealElement) {
                  if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                    oldVnode.removeAttribute(SSR_ATTR);
                    hydrating = true;
                  }
                  if (isTrue(hydrating)) {
                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                      invokeInsertHook(vnode, insertedVnodeQueue, true);
                      return oldVnode;
                    } else {
                      warn("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
                    }
                  }
                  oldVnode = emptyNodeAt(oldVnode);
                }
                var oldElm = oldVnode.elm;
                var parentElm = nodeOps2.parentNode(oldElm);
                createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm, nodeOps2.nextSibling(oldElm));
                if (isDef(vnode.parent)) {
                  var ancestor = vnode.parent;
                  var patchable = isPatchable(vnode);
                  while (ancestor) {
                    for (var i2 = 0; i2 < cbs.destroy.length; ++i2) {
                      cbs.destroy[i2](ancestor);
                    }
                    ancestor.elm = vnode.elm;
                    if (patchable) {
                      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                        cbs.create[i$1](emptyNode, ancestor);
                      }
                      var insert2 = ancestor.data.hook.insert;
                      if (insert2.merged) {
                        for (var i$2 = 1; i$2 < insert2.fns.length; i$2++) {
                          insert2.fns[i$2]();
                        }
                      }
                    } else {
                      registerRef(ancestor);
                    }
                    ancestor = ancestor.parent;
                  }
                }
                if (isDef(parentElm)) {
                  removeVnodes([oldVnode], 0, 0);
                } else if (isDef(oldVnode.tag)) {
                  invokeDestroyHook(oldVnode);
                }
              }
            }
            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
            return vnode.elm;
          };
        }
        var directives = {
          create: updateDirectives,
          update: updateDirectives,
          destroy: function unbindDirectives(vnode) {
            updateDirectives(vnode, emptyNode);
          }
        };
        function updateDirectives(oldVnode, vnode) {
          if (oldVnode.data.directives || vnode.data.directives) {
            _update(oldVnode, vnode);
          }
        }
        function _update(oldVnode, vnode) {
          var isCreate = oldVnode === emptyNode;
          var isDestroy = vnode === emptyNode;
          var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
          var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
          var dirsWithInsert = [];
          var dirsWithPostpatch = [];
          var key, oldDir, dir;
          for (key in newDirs) {
            oldDir = oldDirs[key];
            dir = newDirs[key];
            if (!oldDir) {
              callHook$1(dir, "bind", vnode, oldVnode);
              if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir);
              }
            } else {
              dir.oldValue = oldDir.value;
              dir.oldArg = oldDir.arg;
              callHook$1(dir, "update", vnode, oldVnode);
              if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpatch.push(dir);
              }
            }
          }
          if (dirsWithInsert.length) {
            var callInsert = function() {
              for (var i = 0; i < dirsWithInsert.length; i++) {
                callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
              }
            };
            if (isCreate) {
              mergeVNodeHook(vnode, "insert", callInsert);
            } else {
              callInsert();
            }
          }
          if (dirsWithPostpatch.length) {
            mergeVNodeHook(vnode, "postpatch", function() {
              for (var i = 0; i < dirsWithPostpatch.length; i++) {
                callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
              }
            });
          }
          if (!isCreate) {
            for (key in oldDirs) {
              if (!newDirs[key]) {
                callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
              }
            }
          }
        }
        var emptyModifiers = /* @__PURE__ */ Object.create(null);
        function normalizeDirectives$1(dirs, vm) {
          var res = /* @__PURE__ */ Object.create(null);
          if (!dirs) {
            return res;
          }
          var i, dir;
          for (i = 0; i < dirs.length; i++) {
            dir = dirs[i];
            if (!dir.modifiers) {
              dir.modifiers = emptyModifiers;
            }
            res[getRawDirName(dir)] = dir;
            dir.def = resolveAsset(vm.$options, "directives", dir.name, true);
          }
          return res;
        }
        function getRawDirName(dir) {
          return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
        }
        function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
          var fn = dir.def && dir.def[hook];
          if (fn) {
            try {
              fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
            } catch (e) {
              handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
            }
          }
        }
        var baseModules = [
          ref,
          directives
        ];
        function updateAttrs(oldVnode, vnode) {
          var opts2 = vnode.componentOptions;
          if (isDef(opts2) && opts2.Ctor.options.inheritAttrs === false) {
            return;
          }
          if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
            return;
          }
          var key, cur, old;
          var elm = vnode.elm;
          var oldAttrs = oldVnode.data.attrs || {};
          var attrs2 = vnode.data.attrs || {};
          if (isDef(attrs2.__ob__)) {
            attrs2 = vnode.data.attrs = extend({}, attrs2);
          }
          for (key in attrs2) {
            cur = attrs2[key];
            old = oldAttrs[key];
            if (old !== cur) {
              setAttr(elm, key, cur, vnode.data.pre);
            }
          }
          if ((isIE || isEdge) && attrs2.value !== oldAttrs.value) {
            setAttr(elm, "value", attrs2.value);
          }
          for (key in oldAttrs) {
            if (isUndef(attrs2[key])) {
              if (isXlink(key)) {
                elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
              } else if (!isEnumeratedAttr(key)) {
                elm.removeAttribute(key);
              }
            }
          }
        }
        function setAttr(el, key, value, isInPre) {
          if (isInPre || el.tagName.indexOf("-") > -1) {
            baseSetAttr(el, key, value);
          } else if (isBooleanAttr(key)) {
            if (isFalsyAttrValue(value)) {
              el.removeAttribute(key);
            } else {
              value = key === "allowfullscreen" && el.tagName === "EMBED" ? "true" : key;
              el.setAttribute(key, value);
            }
          } else if (isEnumeratedAttr(key)) {
            el.setAttribute(key, convertEnumeratedValue(key, value));
          } else if (isXlink(key)) {
            if (isFalsyAttrValue(value)) {
              el.removeAttributeNS(xlinkNS, getXlinkProp(key));
            } else {
              el.setAttributeNS(xlinkNS, key, value);
            }
          } else {
            baseSetAttr(el, key, value);
          }
        }
        function baseSetAttr(el, key, value) {
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key);
          } else {
            if (isIE && !isIE9 && el.tagName === "TEXTAREA" && key === "placeholder" && value !== "" && !el.__ieph) {
              var blocker = function(e) {
                e.stopImmediatePropagation();
                el.removeEventListener("input", blocker);
              };
              el.addEventListener("input", blocker);
              el.__ieph = true;
            }
            el.setAttribute(key, value);
          }
        }
        var attrs = {
          create: updateAttrs,
          update: updateAttrs
        };
        function updateClass(oldVnode, vnode) {
          var el = vnode.elm;
          var data = vnode.data;
          var oldData = oldVnode.data;
          if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
            return;
          }
          var cls = genClassForVnode(vnode);
          var transitionClass = el._transitionClasses;
          if (isDef(transitionClass)) {
            cls = concat(cls, stringifyClass(transitionClass));
          }
          if (cls !== el._prevClass) {
            el.setAttribute("class", cls);
            el._prevClass = cls;
          }
        }
        var klass = {
          create: updateClass,
          update: updateClass
        };
        var validDivisionCharRE = /[\w).+\-_$\]]/;
        function parseFilters(exp) {
          var inSingle = false;
          var inDouble = false;
          var inTemplateString = false;
          var inRegex = false;
          var curly = 0;
          var square = 0;
          var paren = 0;
          var lastFilterIndex = 0;
          var c, prev, i, expression, filters;
          for (i = 0; i < exp.length; i++) {
            prev = c;
            c = exp.charCodeAt(i);
            if (inSingle) {
              if (c === 39 && prev !== 92) {
                inSingle = false;
              }
            } else if (inDouble) {
              if (c === 34 && prev !== 92) {
                inDouble = false;
              }
            } else if (inTemplateString) {
              if (c === 96 && prev !== 92) {
                inTemplateString = false;
              }
            } else if (inRegex) {
              if (c === 47 && prev !== 92) {
                inRegex = false;
              }
            } else if (c === 124 && exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
              if (expression === void 0) {
                lastFilterIndex = i + 1;
                expression = exp.slice(0, i).trim();
              } else {
                pushFilter();
              }
            } else {
              switch (c) {
                case 34:
                  inDouble = true;
                  break;
                case 39:
                  inSingle = true;
                  break;
                case 96:
                  inTemplateString = true;
                  break;
                case 40:
                  paren++;
                  break;
                case 41:
                  paren--;
                  break;
                case 91:
                  square++;
                  break;
                case 93:
                  square--;
                  break;
                case 123:
                  curly++;
                  break;
                case 125:
                  curly--;
                  break;
              }
              if (c === 47) {
                var j = i - 1;
                var p2 = void 0;
                for (; j >= 0; j--) {
                  p2 = exp.charAt(j);
                  if (p2 !== " ") {
                    break;
                  }
                }
                if (!p2 || !validDivisionCharRE.test(p2)) {
                  inRegex = true;
                }
              }
            }
          }
          if (expression === void 0) {
            expression = exp.slice(0, i).trim();
          } else if (lastFilterIndex !== 0) {
            pushFilter();
          }
          function pushFilter() {
            (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
            lastFilterIndex = i + 1;
          }
          if (filters) {
            for (i = 0; i < filters.length; i++) {
              expression = wrapFilter(expression, filters[i]);
            }
          }
          return expression;
        }
        function wrapFilter(exp, filter) {
          var i = filter.indexOf("(");
          if (i < 0) {
            return '_f("' + filter + '")(' + exp + ")";
          } else {
            var name = filter.slice(0, i);
            var args = filter.slice(i + 1);
            return '_f("' + name + '")(' + exp + (args !== ")" ? "," + args : args);
          }
        }
        function baseWarn(msg, range2) {
          console.error("[Vue compiler]: " + msg);
        }
        function pluckModuleFunction(modules2, key) {
          return modules2 ? modules2.map(function(m) {
            return m[key];
          }).filter(function(_) {
            return _;
          }) : [];
        }
        function addProp(el, name, value, range2, dynamic) {
          (el.props || (el.props = [])).push(rangeSetItem({ name, value, dynamic }, range2));
          el.plain = false;
        }
        function addAttr(el, name, value, range2, dynamic) {
          var attrs2 = dynamic ? el.dynamicAttrs || (el.dynamicAttrs = []) : el.attrs || (el.attrs = []);
          attrs2.push(rangeSetItem({ name, value, dynamic }, range2));
          el.plain = false;
        }
        function addRawAttr(el, name, value, range2) {
          el.attrsMap[name] = value;
          el.attrsList.push(rangeSetItem({ name, value }, range2));
        }
        function addDirective(el, name, rawName, value, arg, isDynamicArg, modifiers, range2) {
          (el.directives || (el.directives = [])).push(rangeSetItem({
            name,
            rawName,
            value,
            arg,
            isDynamicArg,
            modifiers
          }, range2));
          el.plain = false;
        }
        function prependModifierMarker(symbol, name, dynamic) {
          return dynamic ? "_p(" + name + ',"' + symbol + '")' : symbol + name;
        }
        function addHandler(el, name, value, modifiers, important, warn2, range2, dynamic) {
          modifiers = modifiers || emptyObject;
          if (warn2 && modifiers.prevent && modifiers.passive) {
            warn2("passive and prevent can't be used together. Passive handler can't prevent default event.", range2);
          }
          if (modifiers.right) {
            if (dynamic) {
              name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
            } else if (name === "click") {
              name = "contextmenu";
              delete modifiers.right;
            }
          } else if (modifiers.middle) {
            if (dynamic) {
              name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
            } else if (name === "click") {
              name = "mouseup";
            }
          }
          if (modifiers.capture) {
            delete modifiers.capture;
            name = prependModifierMarker("!", name, dynamic);
          }
          if (modifiers.once) {
            delete modifiers.once;
            name = prependModifierMarker("~", name, dynamic);
          }
          if (modifiers.passive) {
            delete modifiers.passive;
            name = prependModifierMarker("&", name, dynamic);
          }
          var events2;
          if (modifiers.native) {
            delete modifiers.native;
            events2 = el.nativeEvents || (el.nativeEvents = {});
          } else {
            events2 = el.events || (el.events = {});
          }
          var newHandler = rangeSetItem({ value: value.trim(), dynamic }, range2);
          if (modifiers !== emptyObject) {
            newHandler.modifiers = modifiers;
          }
          var handlers = events2[name];
          if (Array.isArray(handlers)) {
            important ? handlers.unshift(newHandler) : handlers.push(newHandler);
          } else if (handlers) {
            events2[name] = important ? [newHandler, handlers] : [handlers, newHandler];
          } else {
            events2[name] = newHandler;
          }
          el.plain = false;
        }
        function getRawBindingAttr(el, name) {
          return el.rawAttrsMap[":" + name] || el.rawAttrsMap["v-bind:" + name] || el.rawAttrsMap[name];
        }
        function getBindingAttr(el, name, getStatic) {
          var dynamicValue = getAndRemoveAttr(el, ":" + name) || getAndRemoveAttr(el, "v-bind:" + name);
          if (dynamicValue != null) {
            return parseFilters(dynamicValue);
          } else if (getStatic !== false) {
            var staticValue = getAndRemoveAttr(el, name);
            if (staticValue != null) {
              return JSON.stringify(staticValue);
            }
          }
        }
        function getAndRemoveAttr(el, name, removeFromMap) {
          var val;
          if ((val = el.attrsMap[name]) != null) {
            var list = el.attrsList;
            for (var i = 0, l = list.length; i < l; i++) {
              if (list[i].name === name) {
                list.splice(i, 1);
                break;
              }
            }
          }
          if (removeFromMap) {
            delete el.attrsMap[name];
          }
          return val;
        }
        function getAndRemoveAttrByRegex(el, name) {
          var list = el.attrsList;
          for (var i = 0, l = list.length; i < l; i++) {
            var attr = list[i];
            if (name.test(attr.name)) {
              list.splice(i, 1);
              return attr;
            }
          }
        }
        function rangeSetItem(item, range2) {
          if (range2) {
            if (range2.start != null) {
              item.start = range2.start;
            }
            if (range2.end != null) {
              item.end = range2.end;
            }
          }
          return item;
        }
        function genComponentModel(el, value, modifiers) {
          var ref2 = modifiers || {};
          var number = ref2.number;
          var trim = ref2.trim;
          var baseValueExpression = "$$v";
          var valueExpression = baseValueExpression;
          if (trim) {
            valueExpression = "(typeof " + baseValueExpression + " === 'string'? " + baseValueExpression + ".trim(): " + baseValueExpression + ")";
          }
          if (number) {
            valueExpression = "_n(" + valueExpression + ")";
          }
          var assignment = genAssignmentCode(value, valueExpression);
          el.model = {
            value: "(" + value + ")",
            expression: JSON.stringify(value),
            callback: "function (" + baseValueExpression + ") {" + assignment + "}"
          };
        }
        function genAssignmentCode(value, assignment) {
          var res = parseModel(value);
          if (res.key === null) {
            return value + "=" + assignment;
          } else {
            return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
          }
        }
        var len, str, chr, index$1, expressionPos, expressionEndPos;
        function parseModel(val) {
          val = val.trim();
          len = val.length;
          if (val.indexOf("[") < 0 || val.lastIndexOf("]") < len - 1) {
            index$1 = val.lastIndexOf(".");
            if (index$1 > -1) {
              return {
                exp: val.slice(0, index$1),
                key: '"' + val.slice(index$1 + 1) + '"'
              };
            } else {
              return {
                exp: val,
                key: null
              };
            }
          }
          str = val;
          index$1 = expressionPos = expressionEndPos = 0;
          while (!eof()) {
            chr = next();
            if (isStringStart(chr)) {
              parseString(chr);
            } else if (chr === 91) {
              parseBracket(chr);
            }
          }
          return {
            exp: val.slice(0, expressionPos),
            key: val.slice(expressionPos + 1, expressionEndPos)
          };
        }
        function next() {
          return str.charCodeAt(++index$1);
        }
        function eof() {
          return index$1 >= len;
        }
        function isStringStart(chr2) {
          return chr2 === 34 || chr2 === 39;
        }
        function parseBracket(chr2) {
          var inBracket = 1;
          expressionPos = index$1;
          while (!eof()) {
            chr2 = next();
            if (isStringStart(chr2)) {
              parseString(chr2);
              continue;
            }
            if (chr2 === 91) {
              inBracket++;
            }
            if (chr2 === 93) {
              inBracket--;
            }
            if (inBracket === 0) {
              expressionEndPos = index$1;
              break;
            }
          }
        }
        function parseString(chr2) {
          var stringQuote = chr2;
          while (!eof()) {
            chr2 = next();
            if (chr2 === stringQuote) {
              break;
            }
          }
        }
        var warn$1;
        var RANGE_TOKEN = "__r";
        var CHECKBOX_RADIO_TOKEN = "__c";
        function model(el, dir, _warn) {
          warn$1 = _warn;
          var value = dir.value;
          var modifiers = dir.modifiers;
          var tag = el.tag;
          var type = el.attrsMap.type;
          {
            if (tag === "input" && type === "file") {
              warn$1("<" + el.tag + ' v-model="' + value + '" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.', el.rawAttrsMap["v-model"]);
            }
          }
          if (el.component) {
            genComponentModel(el, value, modifiers);
            return false;
          } else if (tag === "select") {
            genSelect(el, value, modifiers);
          } else if (tag === "input" && type === "checkbox") {
            genCheckboxModel(el, value, modifiers);
          } else if (tag === "input" && type === "radio") {
            genRadioModel(el, value, modifiers);
          } else if (tag === "input" || tag === "textarea") {
            genDefaultModel(el, value, modifiers);
          } else if (!config.isReservedTag(tag)) {
            genComponentModel(el, value, modifiers);
            return false;
          } else {
            warn$1("<" + el.tag + ' v-model="' + value + `">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.`, el.rawAttrsMap["v-model"]);
          }
          return true;
        }
        function genCheckboxModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          var trueValueBinding = getBindingAttr(el, "true-value") || "true";
          var falseValueBinding = getBindingAttr(el, "false-value") || "false";
          addProp(el, "checked", "Array.isArray(" + value + ")?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === "true" ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
          addHandler(el, "change", "var $$a=" + value + ",$$el=$event.target,$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");if(Array.isArray($$a)){var $$v=" + (number ? "_n(" + valueBinding + ")" : valueBinding) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + genAssignmentCode(value, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + genAssignmentCode(value, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + genAssignmentCode(value, "$$c") + "}", null, true);
        }
        function genRadioModel(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var valueBinding = getBindingAttr(el, "value") || "null";
          valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
          addProp(el, "checked", "_q(" + value + "," + valueBinding + ")");
          addHandler(el, "change", genAssignmentCode(value, valueBinding), null, true);
        }
        function genSelect(el, value, modifiers) {
          var number = modifiers && modifiers.number;
          var selectedVal = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (number ? "_n(val)" : "val") + "})";
          var assignment = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
          var code = "var $$selectedVal = " + selectedVal + ";";
          code = code + " " + genAssignmentCode(value, assignment);
          addHandler(el, "change", code, null, true);
        }
        function genDefaultModel(el, value, modifiers) {
          var type = el.attrsMap.type;
          {
            var value$1 = el.attrsMap["v-bind:value"] || el.attrsMap[":value"];
            var typeBinding = el.attrsMap["v-bind:type"] || el.attrsMap[":type"];
            if (value$1 && !typeBinding) {
              var binding = el.attrsMap["v-bind:value"] ? "v-bind:value" : ":value";
              warn$1(binding + '="' + value$1 + '" conflicts with v-model on the same element because the latter already expands to a value binding internally', el.rawAttrsMap[binding]);
            }
          }
          var ref2 = modifiers || {};
          var lazy = ref2.lazy;
          var number = ref2.number;
          var trim = ref2.trim;
          var needCompositionGuard = !lazy && type !== "range";
          var event = lazy ? "change" : type === "range" ? RANGE_TOKEN : "input";
          var valueExpression = "$event.target.value";
          if (trim) {
            valueExpression = "$event.target.value.trim()";
          }
          if (number) {
            valueExpression = "_n(" + valueExpression + ")";
          }
          var code = genAssignmentCode(value, valueExpression);
          if (needCompositionGuard) {
            code = "if($event.target.composing)return;" + code;
          }
          addProp(el, "value", "(" + value + ")");
          addHandler(el, event, code, null, true);
          if (trim || number) {
            addHandler(el, "blur", "$forceUpdate()");
          }
        }
        function normalizeEvents(on2) {
          if (isDef(on2[RANGE_TOKEN])) {
            var event = isIE ? "change" : "input";
            on2[event] = [].concat(on2[RANGE_TOKEN], on2[event] || []);
            delete on2[RANGE_TOKEN];
          }
          if (isDef(on2[CHECKBOX_RADIO_TOKEN])) {
            on2.change = [].concat(on2[CHECKBOX_RADIO_TOKEN], on2.change || []);
            delete on2[CHECKBOX_RADIO_TOKEN];
          }
        }
        var target$1;
        function createOnceHandler$1(event, handler, capture) {
          var _target = target$1;
          return function onceHandler() {
            var res = handler.apply(null, arguments);
            if (res !== null) {
              remove$2(event, onceHandler, capture, _target);
            }
          };
        }
        var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);
        function add$1(name, handler, capture, passive) {
          if (useMicrotaskFix) {
            var attachedTimestamp = currentFlushTimestamp;
            var original = handler;
            handler = original._wrapper = function(e) {
              if (e.target === e.currentTarget || e.timeStamp >= attachedTimestamp || e.timeStamp <= 0 || e.target.ownerDocument !== document) {
                return original.apply(this, arguments);
              }
            };
          }
          target$1.addEventListener(name, handler, supportsPassive ? { capture, passive } : capture);
        }
        function remove$2(name, handler, capture, _target) {
          (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
        }
        function updateDOMListeners(oldVnode, vnode) {
          if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
            return;
          }
          var on2 = vnode.data.on || {};
          var oldOn = oldVnode.data.on || {};
          target$1 = vnode.elm;
          normalizeEvents(on2);
          updateListeners(on2, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
          target$1 = void 0;
        }
        var events = {
          create: updateDOMListeners,
          update: updateDOMListeners
        };
        var svgContainer;
        function updateDOMProps(oldVnode, vnode) {
          if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
            return;
          }
          var key, cur;
          var elm = vnode.elm;
          var oldProps = oldVnode.data.domProps || {};
          var props2 = vnode.data.domProps || {};
          if (isDef(props2.__ob__)) {
            props2 = vnode.data.domProps = extend({}, props2);
          }
          for (key in oldProps) {
            if (!(key in props2)) {
              elm[key] = "";
            }
          }
          for (key in props2) {
            cur = props2[key];
            if (key === "textContent" || key === "innerHTML") {
              if (vnode.children) {
                vnode.children.length = 0;
              }
              if (cur === oldProps[key]) {
                continue;
              }
              if (elm.childNodes.length === 1) {
                elm.removeChild(elm.childNodes[0]);
              }
            }
            if (key === "value" && elm.tagName !== "PROGRESS") {
              elm._value = cur;
              var strCur = isUndef(cur) ? "" : String(cur);
              if (shouldUpdateValue(elm, strCur)) {
                elm.value = strCur;
              }
            } else if (key === "innerHTML" && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
              svgContainer = svgContainer || document.createElement("div");
              svgContainer.innerHTML = "<svg>" + cur + "</svg>";
              var svg = svgContainer.firstChild;
              while (elm.firstChild) {
                elm.removeChild(elm.firstChild);
              }
              while (svg.firstChild) {
                elm.appendChild(svg.firstChild);
              }
            } else if (cur !== oldProps[key]) {
              try {
                elm[key] = cur;
              } catch (e) {
              }
            }
          }
        }
        function shouldUpdateValue(elm, checkVal) {
          return !elm.composing && (elm.tagName === "OPTION" || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
        }
        function isNotInFocusAndDirty(elm, checkVal) {
          var notInFocus = true;
          try {
            notInFocus = document.activeElement !== elm;
          } catch (e) {
          }
          return notInFocus && elm.value !== checkVal;
        }
        function isDirtyWithModifiers(elm, newVal) {
          var value = elm.value;
          var modifiers = elm._vModifiers;
          if (isDef(modifiers)) {
            if (modifiers.number) {
              return toNumber(value) !== toNumber(newVal);
            }
            if (modifiers.trim) {
              return value.trim() !== newVal.trim();
            }
          }
          return value !== newVal;
        }
        var domProps = {
          create: updateDOMProps,
          update: updateDOMProps
        };
        var parseStyleText = cached(function(cssText) {
          var res = {};
          var listDelimiter = /;(?![^(]*\))/g;
          var propertyDelimiter = /:(.+)/;
          cssText.split(listDelimiter).forEach(function(item) {
            if (item) {
              var tmp = item.split(propertyDelimiter);
              tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
            }
          });
          return res;
        });
        function normalizeStyleData(data) {
          var style2 = normalizeStyleBinding(data.style);
          return data.staticStyle ? extend(data.staticStyle, style2) : style2;
        }
        function normalizeStyleBinding(bindingStyle) {
          if (Array.isArray(bindingStyle)) {
            return toObject(bindingStyle);
          }
          if (typeof bindingStyle === "string") {
            return parseStyleText(bindingStyle);
          }
          return bindingStyle;
        }
        function getStyle(vnode, checkChild) {
          var res = {};
          var styleData;
          if (checkChild) {
            var childNode = vnode;
            while (childNode.componentInstance) {
              childNode = childNode.componentInstance._vnode;
              if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
                extend(res, styleData);
              }
            }
          }
          if (styleData = normalizeStyleData(vnode.data)) {
            extend(res, styleData);
          }
          var parentNode2 = vnode;
          while (parentNode2 = parentNode2.parent) {
            if (parentNode2.data && (styleData = normalizeStyleData(parentNode2.data))) {
              extend(res, styleData);
            }
          }
          return res;
        }
        var cssVarRE = /^--/;
        var importantRE = /\s*!important$/;
        var setProp = function(el, name, val) {
          if (cssVarRE.test(name)) {
            el.style.setProperty(name, val);
          } else if (importantRE.test(val)) {
            el.style.setProperty(hyphenate(name), val.replace(importantRE, ""), "important");
          } else {
            var normalizedName = normalize(name);
            if (Array.isArray(val)) {
              for (var i = 0, len2 = val.length; i < len2; i++) {
                el.style[normalizedName] = val[i];
              }
            } else {
              el.style[normalizedName] = val;
            }
          }
        };
        var vendorNames = ["Webkit", "Moz", "ms"];
        var emptyStyle;
        var normalize = cached(function(prop) {
          emptyStyle = emptyStyle || document.createElement("div").style;
          prop = camelize(prop);
          if (prop !== "filter" && prop in emptyStyle) {
            return prop;
          }
          var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
          for (var i = 0; i < vendorNames.length; i++) {
            var name = vendorNames[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        });
        function updateStyle(oldVnode, vnode) {
          var data = vnode.data;
          var oldData = oldVnode.data;
          if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
            return;
          }
          var cur, name;
          var el = vnode.elm;
          var oldStaticStyle = oldData.staticStyle;
          var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
          var oldStyle = oldStaticStyle || oldStyleBinding;
          var style2 = normalizeStyleBinding(vnode.data.style) || {};
          vnode.data.normalizedStyle = isDef(style2.__ob__) ? extend({}, style2) : style2;
          var newStyle = getStyle(vnode, true);
          for (name in oldStyle) {
            if (isUndef(newStyle[name])) {
              setProp(el, name, "");
            }
          }
          for (name in newStyle) {
            cur = newStyle[name];
            if (cur !== oldStyle[name]) {
              setProp(el, name, cur == null ? "" : cur);
            }
          }
        }
        var style = {
          create: updateStyle,
          update: updateStyle
        };
        var whitespaceRE = /\s+/;
        function addClass(el, cls) {
          if (!cls || !(cls = cls.trim())) {
            return;
          }
          if (el.classList) {
            if (cls.indexOf(" ") > -1) {
              cls.split(whitespaceRE).forEach(function(c) {
                return el.classList.add(c);
              });
            } else {
              el.classList.add(cls);
            }
          } else {
            var cur = " " + (el.getAttribute("class") || "") + " ";
            if (cur.indexOf(" " + cls + " ") < 0) {
              el.setAttribute("class", (cur + cls).trim());
            }
          }
        }
        function removeClass(el, cls) {
          if (!cls || !(cls = cls.trim())) {
            return;
          }
          if (el.classList) {
            if (cls.indexOf(" ") > -1) {
              cls.split(whitespaceRE).forEach(function(c) {
                return el.classList.remove(c);
              });
            } else {
              el.classList.remove(cls);
            }
            if (!el.classList.length) {
              el.removeAttribute("class");
            }
          } else {
            var cur = " " + (el.getAttribute("class") || "") + " ";
            var tar = " " + cls + " ";
            while (cur.indexOf(tar) >= 0) {
              cur = cur.replace(tar, " ");
            }
            cur = cur.trim();
            if (cur) {
              el.setAttribute("class", cur);
            } else {
              el.removeAttribute("class");
            }
          }
        }
        function resolveTransition(def$$1) {
          if (!def$$1) {
            return;
          }
          if (typeof def$$1 === "object") {
            var res = {};
            if (def$$1.css !== false) {
              extend(res, autoCssTransition(def$$1.name || "v"));
            }
            extend(res, def$$1);
            return res;
          } else if (typeof def$$1 === "string") {
            return autoCssTransition(def$$1);
          }
        }
        var autoCssTransition = cached(function(name) {
          return {
            enterClass: name + "-enter",
            enterToClass: name + "-enter-to",
            enterActiveClass: name + "-enter-active",
            leaveClass: name + "-leave",
            leaveToClass: name + "-leave-to",
            leaveActiveClass: name + "-leave-active"
          };
        });
        var hasTransition = inBrowser && !isIE9;
        var TRANSITION = "transition";
        var ANIMATION = "animation";
        var transitionProp = "transition";
        var transitionEndEvent = "transitionend";
        var animationProp = "animation";
        var animationEndEvent = "animationend";
        if (hasTransition) {
          if (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0) {
            transitionProp = "WebkitTransition";
            transitionEndEvent = "webkitTransitionEnd";
          }
          if (window.onanimationend === void 0 && window.onwebkitanimationend !== void 0) {
            animationProp = "WebkitAnimation";
            animationEndEvent = "webkitAnimationEnd";
          }
        }
        var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(fn) {
          return fn();
        };
        function nextFrame(fn) {
          raf(function() {
            raf(fn);
          });
        }
        function addTransitionClass(el, cls) {
          var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
          if (transitionClasses.indexOf(cls) < 0) {
            transitionClasses.push(cls);
            addClass(el, cls);
          }
        }
        function removeTransitionClass(el, cls) {
          if (el._transitionClasses) {
            remove(el._transitionClasses, cls);
          }
          removeClass(el, cls);
        }
        function whenTransitionEnds(el, expectedType, cb) {
          var ref2 = getTransitionInfo(el, expectedType);
          var type = ref2.type;
          var timeout = ref2.timeout;
          var propCount = ref2.propCount;
          if (!type) {
            return cb();
          }
          var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
          var ended = 0;
          var end = function() {
            el.removeEventListener(event, onEnd);
            cb();
          };
          var onEnd = function(e) {
            if (e.target === el) {
              if (++ended >= propCount) {
                end();
              }
            }
          };
          setTimeout(function() {
            if (ended < propCount) {
              end();
            }
          }, timeout + 1);
          el.addEventListener(event, onEnd);
        }
        var transformRE = /\b(transform|all)(,|$)/;
        function getTransitionInfo(el, expectedType) {
          var styles = window.getComputedStyle(el);
          var transitionDelays = (styles[transitionProp + "Delay"] || "").split(", ");
          var transitionDurations = (styles[transitionProp + "Duration"] || "").split(", ");
          var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
          var animationDelays = (styles[animationProp + "Delay"] || "").split(", ");
          var animationDurations = (styles[animationProp + "Duration"] || "").split(", ");
          var animationTimeout = getTimeout(animationDelays, animationDurations);
          var type;
          var timeout = 0;
          var propCount = 0;
          if (expectedType === TRANSITION) {
            if (transitionTimeout > 0) {
              type = TRANSITION;
              timeout = transitionTimeout;
              propCount = transitionDurations.length;
            }
          } else if (expectedType === ANIMATION) {
            if (animationTimeout > 0) {
              type = ANIMATION;
              timeout = animationTimeout;
              propCount = animationDurations.length;
            }
          } else {
            timeout = Math.max(transitionTimeout, animationTimeout);
            type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
            propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
          }
          var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + "Property"]);
          return {
            type,
            timeout,
            propCount,
            hasTransform
          };
        }
        function getTimeout(delays, durations) {
          while (delays.length < durations.length) {
            delays = delays.concat(delays);
          }
          return Math.max.apply(null, durations.map(function(d, i) {
            return toMs(d) + toMs(delays[i]);
          }));
        }
        function toMs(s) {
          return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
        }
        function enter(vnode, toggleDisplay) {
          var el = vnode.elm;
          if (isDef(el._leaveCb)) {
            el._leaveCb.cancelled = true;
            el._leaveCb();
          }
          var data = resolveTransition(vnode.data.transition);
          if (isUndef(data)) {
            return;
          }
          if (isDef(el._enterCb) || el.nodeType !== 1) {
            return;
          }
          var css = data.css;
          var type = data.type;
          var enterClass = data.enterClass;
          var enterToClass = data.enterToClass;
          var enterActiveClass = data.enterActiveClass;
          var appearClass = data.appearClass;
          var appearToClass = data.appearToClass;
          var appearActiveClass = data.appearActiveClass;
          var beforeEnter = data.beforeEnter;
          var enter2 = data.enter;
          var afterEnter = data.afterEnter;
          var enterCancelled = data.enterCancelled;
          var beforeAppear = data.beforeAppear;
          var appear = data.appear;
          var afterAppear = data.afterAppear;
          var appearCancelled = data.appearCancelled;
          var duration = data.duration;
          var context = activeInstance;
          var transitionNode = activeInstance.$vnode;
          while (transitionNode && transitionNode.parent) {
            context = transitionNode.context;
            transitionNode = transitionNode.parent;
          }
          var isAppear = !context._isMounted || !vnode.isRootInsert;
          if (isAppear && !appear && appear !== "") {
            return;
          }
          var startClass = isAppear && appearClass ? appearClass : enterClass;
          var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
          var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
          var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
          var enterHook = isAppear ? typeof appear === "function" ? appear : enter2 : enter2;
          var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
          var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
          var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);
          if (explicitEnterDuration != null) {
            checkDuration(explicitEnterDuration, "enter", vnode);
          }
          var expectsCSS = css !== false && !isIE9;
          var userWantsControl = getHookArgumentsLength(enterHook);
          var cb = el._enterCb = once(function() {
            if (expectsCSS) {
              removeTransitionClass(el, toClass);
              removeTransitionClass(el, activeClass);
            }
            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, startClass);
              }
              enterCancelledHook && enterCancelledHook(el);
            } else {
              afterEnterHook && afterEnterHook(el);
            }
            el._enterCb = null;
          });
          if (!vnode.data.show) {
            mergeVNodeHook(vnode, "insert", function() {
              var parent = el.parentNode;
              var pendingNode = parent && parent._pending && parent._pending[vnode.key];
              if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
                pendingNode.elm._leaveCb();
              }
              enterHook && enterHook(el, cb);
            });
          }
          beforeEnterHook && beforeEnterHook(el);
          if (expectsCSS) {
            addTransitionClass(el, startClass);
            addTransitionClass(el, activeClass);
            nextFrame(function() {
              removeTransitionClass(el, startClass);
              if (!cb.cancelled) {
                addTransitionClass(el, toClass);
                if (!userWantsControl) {
                  if (isValidDuration(explicitEnterDuration)) {
                    setTimeout(cb, explicitEnterDuration);
                  } else {
                    whenTransitionEnds(el, type, cb);
                  }
                }
              }
            });
          }
          if (vnode.data.show) {
            toggleDisplay && toggleDisplay();
            enterHook && enterHook(el, cb);
          }
          if (!expectsCSS && !userWantsControl) {
            cb();
          }
        }
        function leave(vnode, rm) {
          var el = vnode.elm;
          if (isDef(el._enterCb)) {
            el._enterCb.cancelled = true;
            el._enterCb();
          }
          var data = resolveTransition(vnode.data.transition);
          if (isUndef(data) || el.nodeType !== 1) {
            return rm();
          }
          if (isDef(el._leaveCb)) {
            return;
          }
          var css = data.css;
          var type = data.type;
          var leaveClass = data.leaveClass;
          var leaveToClass = data.leaveToClass;
          var leaveActiveClass = data.leaveActiveClass;
          var beforeLeave = data.beforeLeave;
          var leave2 = data.leave;
          var afterLeave = data.afterLeave;
          var leaveCancelled = data.leaveCancelled;
          var delayLeave = data.delayLeave;
          var duration = data.duration;
          var expectsCSS = css !== false && !isIE9;
          var userWantsControl = getHookArgumentsLength(leave2);
          var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);
          if (isDef(explicitLeaveDuration)) {
            checkDuration(explicitLeaveDuration, "leave", vnode);
          }
          var cb = el._leaveCb = once(function() {
            if (el.parentNode && el.parentNode._pending) {
              el.parentNode._pending[vnode.key] = null;
            }
            if (expectsCSS) {
              removeTransitionClass(el, leaveToClass);
              removeTransitionClass(el, leaveActiveClass);
            }
            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, leaveClass);
              }
              leaveCancelled && leaveCancelled(el);
            } else {
              rm();
              afterLeave && afterLeave(el);
            }
            el._leaveCb = null;
          });
          if (delayLeave) {
            delayLeave(performLeave);
          } else {
            performLeave();
          }
          function performLeave() {
            if (cb.cancelled) {
              return;
            }
            if (!vnode.data.show && el.parentNode) {
              (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
            }
            beforeLeave && beforeLeave(el);
            if (expectsCSS) {
              addTransitionClass(el, leaveClass);
              addTransitionClass(el, leaveActiveClass);
              nextFrame(function() {
                removeTransitionClass(el, leaveClass);
                if (!cb.cancelled) {
                  addTransitionClass(el, leaveToClass);
                  if (!userWantsControl) {
                    if (isValidDuration(explicitLeaveDuration)) {
                      setTimeout(cb, explicitLeaveDuration);
                    } else {
                      whenTransitionEnds(el, type, cb);
                    }
                  }
                }
              });
            }
            leave2 && leave2(el, cb);
            if (!expectsCSS && !userWantsControl) {
              cb();
            }
          }
        }
        function checkDuration(val, name, vnode) {
          if (typeof val !== "number") {
            warn("<transition> explicit " + name + " duration is not a valid number - got " + JSON.stringify(val) + ".", vnode.context);
          } else if (isNaN(val)) {
            warn("<transition> explicit " + name + " duration is NaN - the duration expression might be incorrect.", vnode.context);
          }
        }
        function isValidDuration(val) {
          return typeof val === "number" && !isNaN(val);
        }
        function getHookArgumentsLength(fn) {
          if (isUndef(fn)) {
            return false;
          }
          var invokerFns = fn.fns;
          if (isDef(invokerFns)) {
            return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
          } else {
            return (fn._length || fn.length) > 1;
          }
        }
        function _enter(_, vnode) {
          if (vnode.data.show !== true) {
            enter(vnode);
          }
        }
        var transition = inBrowser ? {
          create: _enter,
          activate: _enter,
          remove: function remove$$1(vnode, rm) {
            if (vnode.data.show !== true) {
              leave(vnode, rm);
            } else {
              rm();
            }
          }
        } : {};
        var platformModules = [
          attrs,
          klass,
          events,
          domProps,
          style,
          transition
        ];
        var modules = platformModules.concat(baseModules);
        var patch = createPatchFunction({ nodeOps, modules });
        if (isIE9) {
          document.addEventListener("selectionchange", function() {
            var el = document.activeElement;
            if (el && el.vmodel) {
              trigger(el, "input");
            }
          });
        }
        var directive = {
          inserted: function inserted(el, binding, vnode, oldVnode) {
            if (vnode.tag === "select") {
              if (oldVnode.elm && !oldVnode.elm._vOptions) {
                mergeVNodeHook(vnode, "postpatch", function() {
                  directive.componentUpdated(el, binding, vnode);
                });
              } else {
                setSelected(el, binding, vnode.context);
              }
              el._vOptions = [].map.call(el.options, getValue);
            } else if (vnode.tag === "textarea" || isTextInputType(el.type)) {
              el._vModifiers = binding.modifiers;
              if (!binding.modifiers.lazy) {
                el.addEventListener("compositionstart", onCompositionStart);
                el.addEventListener("compositionend", onCompositionEnd);
                el.addEventListener("change", onCompositionEnd);
                if (isIE9) {
                  el.vmodel = true;
                }
              }
            }
          },
          componentUpdated: function componentUpdated(el, binding, vnode) {
            if (vnode.tag === "select") {
              setSelected(el, binding, vnode.context);
              var prevOptions = el._vOptions;
              var curOptions = el._vOptions = [].map.call(el.options, getValue);
              if (curOptions.some(function(o, i) {
                return !looseEqual(o, prevOptions[i]);
              })) {
                var needReset = el.multiple ? binding.value.some(function(v) {
                  return hasNoMatchingOption(v, curOptions);
                }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
                if (needReset) {
                  trigger(el, "change");
                }
              }
            }
          }
        };
        function setSelected(el, binding, vm) {
          actuallySetSelected(el, binding, vm);
          if (isIE || isEdge) {
            setTimeout(function() {
              actuallySetSelected(el, binding, vm);
            }, 0);
          }
        }
        function actuallySetSelected(el, binding, vm) {
          var value = binding.value;
          var isMultiple = el.multiple;
          if (isMultiple && !Array.isArray(value)) {
            warn('<select multiple v-model="' + binding.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(value).slice(8, -1), vm);
            return;
          }
          var selected, option;
          for (var i = 0, l = el.options.length; i < l; i++) {
            option = el.options[i];
            if (isMultiple) {
              selected = looseIndexOf(value, getValue(option)) > -1;
              if (option.selected !== selected) {
                option.selected = selected;
              }
            } else {
              if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i) {
                  el.selectedIndex = i;
                }
                return;
              }
            }
          }
          if (!isMultiple) {
            el.selectedIndex = -1;
          }
        }
        function hasNoMatchingOption(value, options) {
          return options.every(function(o) {
            return !looseEqual(o, value);
          });
        }
        function getValue(option) {
          return "_value" in option ? option._value : option.value;
        }
        function onCompositionStart(e) {
          e.target.composing = true;
        }
        function onCompositionEnd(e) {
          if (!e.target.composing) {
            return;
          }
          e.target.composing = false;
          trigger(e.target, "input");
        }
        function trigger(el, type) {
          var e = document.createEvent("HTMLEvents");
          e.initEvent(type, true, true);
          el.dispatchEvent(e);
        }
        function locateNode(vnode) {
          return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
        }
        var show = {
          bind: function bind2(el, ref2, vnode) {
            var value = ref2.value;
            vnode = locateNode(vnode);
            var transition$$1 = vnode.data && vnode.data.transition;
            var originalDisplay = el.__vOriginalDisplay = el.style.display === "none" ? "" : el.style.display;
            if (value && transition$$1) {
              vnode.data.show = true;
              enter(vnode, function() {
                el.style.display = originalDisplay;
              });
            } else {
              el.style.display = value ? originalDisplay : "none";
            }
          },
          update: function update(el, ref2, vnode) {
            var value = ref2.value;
            var oldValue = ref2.oldValue;
            if (!value === !oldValue) {
              return;
            }
            vnode = locateNode(vnode);
            var transition$$1 = vnode.data && vnode.data.transition;
            if (transition$$1) {
              vnode.data.show = true;
              if (value) {
                enter(vnode, function() {
                  el.style.display = el.__vOriginalDisplay;
                });
              } else {
                leave(vnode, function() {
                  el.style.display = "none";
                });
              }
            } else {
              el.style.display = value ? el.__vOriginalDisplay : "none";
            }
          },
          unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
            if (!isDestroy) {
              el.style.display = el.__vOriginalDisplay;
            }
          }
        };
        var platformDirectives = {
          model: directive,
          show
        };
        var transitionProps = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object]
        };
        function getRealChild(vnode) {
          var compOptions = vnode && vnode.componentOptions;
          if (compOptions && compOptions.Ctor.options.abstract) {
            return getRealChild(getFirstComponentChild(compOptions.children));
          } else {
            return vnode;
          }
        }
        function extractTransitionData(comp) {
          var data = {};
          var options = comp.$options;
          for (var key in options.propsData) {
            data[key] = comp[key];
          }
          var listeners = options._parentListeners;
          for (var key$1 in listeners) {
            data[camelize(key$1)] = listeners[key$1];
          }
          return data;
        }
        function placeholder(h, rawChild) {
          if (/\d-keep-alive$/.test(rawChild.tag)) {
            return h("keep-alive", {
              props: rawChild.componentOptions.propsData
            });
          }
        }
        function hasParentTransition(vnode) {
          while (vnode = vnode.parent) {
            if (vnode.data.transition) {
              return true;
            }
          }
        }
        function isSameChild(child, oldChild) {
          return oldChild.key === child.key && oldChild.tag === child.tag;
        }
        var isNotTextNode = function(c) {
          return c.tag || isAsyncPlaceholder(c);
        };
        var isVShowDirective = function(d) {
          return d.name === "show";
        };
        var Transition = {
          name: "transition",
          props: transitionProps,
          abstract: true,
          render: function render(h) {
            var this$1 = this;
            var children = this.$slots.default;
            if (!children) {
              return;
            }
            children = children.filter(isNotTextNode);
            if (!children.length) {
              return;
            }
            if (children.length > 1) {
              warn("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
            }
            var mode = this.mode;
            if (mode && mode !== "in-out" && mode !== "out-in") {
              warn("invalid <transition> mode: " + mode, this.$parent);
            }
            var rawChild = children[0];
            if (hasParentTransition(this.$vnode)) {
              return rawChild;
            }
            var child = getRealChild(rawChild);
            if (!child) {
              return rawChild;
            }
            if (this._leaving) {
              return placeholder(h, rawChild);
            }
            var id = "__transition-" + this._uid + "-";
            child.key = child.key == null ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
            var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
            var oldRawChild = this._vnode;
            var oldChild = getRealChild(oldRawChild);
            if (child.data.directives && child.data.directives.some(isVShowDirective)) {
              child.data.show = true;
            }
            if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
              var oldData = oldChild.data.transition = extend({}, data);
              if (mode === "out-in") {
                this._leaving = true;
                mergeVNodeHook(oldData, "afterLeave", function() {
                  this$1._leaving = false;
                  this$1.$forceUpdate();
                });
                return placeholder(h, rawChild);
              } else if (mode === "in-out") {
                if (isAsyncPlaceholder(child)) {
                  return oldRawChild;
                }
                var delayedLeave;
                var performLeave = function() {
                  delayedLeave();
                };
                mergeVNodeHook(data, "afterEnter", performLeave);
                mergeVNodeHook(data, "enterCancelled", performLeave);
                mergeVNodeHook(oldData, "delayLeave", function(leave2) {
                  delayedLeave = leave2;
                });
              }
            }
            return rawChild;
          }
        };
        var props = extend({
          tag: String,
          moveClass: String
        }, transitionProps);
        delete props.mode;
        var TransitionGroup = {
          props,
          beforeMount: function beforeMount() {
            var this$1 = this;
            var update = this._update;
            this._update = function(vnode, hydrating) {
              var restoreActiveInstance = setActiveInstance(this$1);
              this$1.__patch__(this$1._vnode, this$1.kept, false, true);
              this$1._vnode = this$1.kept;
              restoreActiveInstance();
              update.call(this$1, vnode, hydrating);
            };
          },
          render: function render(h) {
            var tag = this.tag || this.$vnode.data.tag || "span";
            var map = /* @__PURE__ */ Object.create(null);
            var prevChildren = this.prevChildren = this.children;
            var rawChildren = this.$slots.default || [];
            var children = this.children = [];
            var transitionData = extractTransitionData(this);
            for (var i = 0; i < rawChildren.length; i++) {
              var c = rawChildren[i];
              if (c.tag) {
                if (c.key != null && String(c.key).indexOf("__vlist") !== 0) {
                  children.push(c);
                  map[c.key] = c;
                  (c.data || (c.data = {})).transition = transitionData;
                } else {
                  var opts2 = c.componentOptions;
                  var name = opts2 ? opts2.Ctor.options.name || opts2.tag || "" : c.tag;
                  warn("<transition-group> children must be keyed: <" + name + ">");
                }
              }
            }
            if (prevChildren) {
              var kept = [];
              var removed = [];
              for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
                var c$1 = prevChildren[i$1];
                c$1.data.transition = transitionData;
                c$1.data.pos = c$1.elm.getBoundingClientRect();
                if (map[c$1.key]) {
                  kept.push(c$1);
                } else {
                  removed.push(c$1);
                }
              }
              this.kept = h(tag, null, kept);
              this.removed = removed;
            }
            return h(tag, null, children);
          },
          updated: function updated() {
            var children = this.prevChildren;
            var moveClass = this.moveClass || (this.name || "v") + "-move";
            if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
              return;
            }
            children.forEach(callPendingCbs);
            children.forEach(recordPosition);
            children.forEach(applyTranslation);
            this._reflow = document.body.offsetHeight;
            children.forEach(function(c) {
              if (c.data.moved) {
                var el = c.elm;
                var s = el.style;
                addTransitionClass(el, moveClass);
                s.transform = s.WebkitTransform = s.transitionDuration = "";
                el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                  if (e && e.target !== el) {
                    return;
                  }
                  if (!e || /transform$/.test(e.propertyName)) {
                    el.removeEventListener(transitionEndEvent, cb);
                    el._moveCb = null;
                    removeTransitionClass(el, moveClass);
                  }
                });
              }
            });
          },
          methods: {
            hasMove: function hasMove(el, moveClass) {
              if (!hasTransition) {
                return false;
              }
              if (this._hasMove) {
                return this._hasMove;
              }
              var clone = el.cloneNode();
              if (el._transitionClasses) {
                el._transitionClasses.forEach(function(cls) {
                  removeClass(clone, cls);
                });
              }
              addClass(clone, moveClass);
              clone.style.display = "none";
              this.$el.appendChild(clone);
              var info = getTransitionInfo(clone);
              this.$el.removeChild(clone);
              return this._hasMove = info.hasTransform;
            }
          }
        };
        function callPendingCbs(c) {
          if (c.elm._moveCb) {
            c.elm._moveCb();
          }
          if (c.elm._enterCb) {
            c.elm._enterCb();
          }
        }
        function recordPosition(c) {
          c.data.newPos = c.elm.getBoundingClientRect();
        }
        function applyTranslation(c) {
          var oldPos = c.data.pos;
          var newPos = c.data.newPos;
          var dx = oldPos.left - newPos.left;
          var dy = oldPos.top - newPos.top;
          if (dx || dy) {
            c.data.moved = true;
            var s = c.elm.style;
            s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
            s.transitionDuration = "0s";
          }
        }
        var platformComponents = {
          Transition,
          TransitionGroup
        };
        Vue2.config.mustUseProp = mustUseProp;
        Vue2.config.isReservedTag = isReservedTag;
        Vue2.config.isReservedAttr = isReservedAttr;
        Vue2.config.getTagNamespace = getTagNamespace;
        Vue2.config.isUnknownElement = isUnknownElement;
        extend(Vue2.options.directives, platformDirectives);
        extend(Vue2.options.components, platformComponents);
        Vue2.prototype.__patch__ = inBrowser ? patch : noop;
        Vue2.prototype.$mount = function(el, hydrating) {
          el = el && inBrowser ? query(el) : void 0;
          return mountComponent(this, el, hydrating);
        };
        if (inBrowser) {
          setTimeout(function() {
            if (config.devtools) {
              if (devtools) {
                devtools.emit("init", Vue2);
              } else {
                console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools");
              }
            }
            if (config.productionTip !== false && typeof console !== "undefined") {
              console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html");
            }
          }, 0);
        }
        var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
        var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
        var buildRegex = cached(function(delimiters2) {
          var open = delimiters2[0].replace(regexEscapeRE, "\\$&");
          var close = delimiters2[1].replace(regexEscapeRE, "\\$&");
          return new RegExp(open + "((?:.|\\n)+?)" + close, "g");
        });
        function parseText(text2, delimiters2) {
          var tagRE = delimiters2 ? buildRegex(delimiters2) : defaultTagRE;
          if (!tagRE.test(text2)) {
            return;
          }
          var tokens = [];
          var rawTokens = [];
          var lastIndex = tagRE.lastIndex = 0;
          var match, index2, tokenValue;
          while (match = tagRE.exec(text2)) {
            index2 = match.index;
            if (index2 > lastIndex) {
              rawTokens.push(tokenValue = text2.slice(lastIndex, index2));
              tokens.push(JSON.stringify(tokenValue));
            }
            var exp = parseFilters(match[1].trim());
            tokens.push("_s(" + exp + ")");
            rawTokens.push({ "@binding": exp });
            lastIndex = index2 + match[0].length;
          }
          if (lastIndex < text2.length) {
            rawTokens.push(tokenValue = text2.slice(lastIndex));
            tokens.push(JSON.stringify(tokenValue));
          }
          return {
            expression: tokens.join("+"),
            tokens: rawTokens
          };
        }
        function transformNode(el, options) {
          var warn2 = options.warn || baseWarn;
          var staticClass = getAndRemoveAttr(el, "class");
          if (staticClass) {
            var res = parseText(staticClass, options.delimiters);
            if (res) {
              warn2('class="' + staticClass + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.', el.rawAttrsMap["class"]);
            }
          }
          if (staticClass) {
            el.staticClass = JSON.stringify(staticClass);
          }
          var classBinding = getBindingAttr(el, "class", false);
          if (classBinding) {
            el.classBinding = classBinding;
          }
        }
        function genData(el) {
          var data = "";
          if (el.staticClass) {
            data += "staticClass:" + el.staticClass + ",";
          }
          if (el.classBinding) {
            data += "class:" + el.classBinding + ",";
          }
          return data;
        }
        var klass$1 = {
          staticKeys: ["staticClass"],
          transformNode,
          genData
        };
        function transformNode$1(el, options) {
          var warn2 = options.warn || baseWarn;
          var staticStyle = getAndRemoveAttr(el, "style");
          if (staticStyle) {
            {
              var res = parseText(staticStyle, options.delimiters);
              if (res) {
                warn2('style="' + staticStyle + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.', el.rawAttrsMap["style"]);
              }
            }
            el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
          }
          var styleBinding = getBindingAttr(el, "style", false);
          if (styleBinding) {
            el.styleBinding = styleBinding;
          }
        }
        function genData$1(el) {
          var data = "";
          if (el.staticStyle) {
            data += "staticStyle:" + el.staticStyle + ",";
          }
          if (el.styleBinding) {
            data += "style:(" + el.styleBinding + "),";
          }
          return data;
        }
        var style$1 = {
          staticKeys: ["staticStyle"],
          transformNode: transformNode$1,
          genData: genData$1
        };
        var decoder;
        var he = {
          decode: function decode(html2) {
            decoder = decoder || document.createElement("div");
            decoder.innerHTML = html2;
            return decoder.textContent;
          }
        };
        var isUnaryTag = makeMap("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr");
        var canBeLeftOpenTag = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
        var isNonPhrasingTag = makeMap("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track");
        var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + unicodeRegExp.source + "]*";
        var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
        var startTagOpen = new RegExp("^<" + qnameCapture);
        var startTagClose = /^\s*(\/?)>/;
        var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
        var doctype = /^<!DOCTYPE [^>]+>/i;
        var comment = /^<!\--/;
        var conditionalComment = /^<!\[/;
        var isPlainTextElement = makeMap("script,style,textarea", true);
        var reCache = {};
        var decodingMap = {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&amp;": "&",
          "&#10;": "\n",
          "&#9;": "	",
          "&#39;": "'"
        };
        var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
        var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
        var isIgnoreNewlineTag = makeMap("pre,textarea", true);
        var shouldIgnoreFirstNewline = function(tag, html2) {
          return tag && isIgnoreNewlineTag(tag) && html2[0] === "\n";
        };
        function decodeAttr(value, shouldDecodeNewlines2) {
          var re = shouldDecodeNewlines2 ? encodedAttrWithNewLines : encodedAttr;
          return value.replace(re, function(match) {
            return decodingMap[match];
          });
        }
        function parseHTML(html2, options) {
          var stack = [];
          var expectHTML = options.expectHTML;
          var isUnaryTag$$1 = options.isUnaryTag || no;
          var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
          var index2 = 0;
          var last, lastTag;
          while (html2) {
            last = html2;
            if (!lastTag || !isPlainTextElement(lastTag)) {
              var textEnd = html2.indexOf("<");
              if (textEnd === 0) {
                if (comment.test(html2)) {
                  var commentEnd = html2.indexOf("-->");
                  if (commentEnd >= 0) {
                    if (options.shouldKeepComment) {
                      options.comment(html2.substring(4, commentEnd), index2, index2 + commentEnd + 3);
                    }
                    advance(commentEnd + 3);
                    continue;
                  }
                }
                if (conditionalComment.test(html2)) {
                  var conditionalEnd = html2.indexOf("]>");
                  if (conditionalEnd >= 0) {
                    advance(conditionalEnd + 2);
                    continue;
                  }
                }
                var doctypeMatch = html2.match(doctype);
                if (doctypeMatch) {
                  advance(doctypeMatch[0].length);
                  continue;
                }
                var endTagMatch = html2.match(endTag);
                if (endTagMatch) {
                  var curIndex = index2;
                  advance(endTagMatch[0].length);
                  parseEndTag(endTagMatch[1], curIndex, index2);
                  continue;
                }
                var startTagMatch = parseStartTag();
                if (startTagMatch) {
                  handleStartTag(startTagMatch);
                  if (shouldIgnoreFirstNewline(startTagMatch.tagName, html2)) {
                    advance(1);
                  }
                  continue;
                }
              }
              var text2 = void 0, rest = void 0, next2 = void 0;
              if (textEnd >= 0) {
                rest = html2.slice(textEnd);
                while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
                  next2 = rest.indexOf("<", 1);
                  if (next2 < 0) {
                    break;
                  }
                  textEnd += next2;
                  rest = html2.slice(textEnd);
                }
                text2 = html2.substring(0, textEnd);
              }
              if (textEnd < 0) {
                text2 = html2;
              }
              if (text2) {
                advance(text2.length);
              }
              if (options.chars && text2) {
                options.chars(text2, index2 - text2.length, index2);
              }
            } else {
              var endTagLength = 0;
              var stackedTag = lastTag.toLowerCase();
              var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp("([\\s\\S]*?)(</" + stackedTag + "[^>]*>)", "i"));
              var rest$1 = html2.replace(reStackedTag, function(all, text3, endTag2) {
                endTagLength = endTag2.length;
                if (!isPlainTextElement(stackedTag) && stackedTag !== "noscript") {
                  text3 = text3.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
                }
                if (shouldIgnoreFirstNewline(stackedTag, text3)) {
                  text3 = text3.slice(1);
                }
                if (options.chars) {
                  options.chars(text3);
                }
                return "";
              });
              index2 += html2.length - rest$1.length;
              html2 = rest$1;
              parseEndTag(stackedTag, index2 - endTagLength, index2);
            }
            if (html2 === last) {
              options.chars && options.chars(html2);
              if (!stack.length && options.warn) {
                options.warn('Mal-formatted tag at end of template: "' + html2 + '"', { start: index2 + html2.length });
              }
              break;
            }
          }
          parseEndTag();
          function advance(n) {
            index2 += n;
            html2 = html2.substring(n);
          }
          function parseStartTag() {
            var start = html2.match(startTagOpen);
            if (start) {
              var match = {
                tagName: start[1],
                attrs: [],
                start: index2
              };
              advance(start[0].length);
              var end, attr;
              while (!(end = html2.match(startTagClose)) && (attr = html2.match(dynamicArgAttribute) || html2.match(attribute))) {
                attr.start = index2;
                advance(attr[0].length);
                attr.end = index2;
                match.attrs.push(attr);
              }
              if (end) {
                match.unarySlash = end[1];
                advance(end[0].length);
                match.end = index2;
                return match;
              }
            }
          }
          function handleStartTag(match) {
            var tagName2 = match.tagName;
            var unarySlash = match.unarySlash;
            if (expectHTML) {
              if (lastTag === "p" && isNonPhrasingTag(tagName2)) {
                parseEndTag(lastTag);
              }
              if (canBeLeftOpenTag$$1(tagName2) && lastTag === tagName2) {
                parseEndTag(tagName2);
              }
            }
            var unary = isUnaryTag$$1(tagName2) || !!unarySlash;
            var l = match.attrs.length;
            var attrs2 = new Array(l);
            for (var i = 0; i < l; i++) {
              var args = match.attrs[i];
              var value = args[3] || args[4] || args[5] || "";
              var shouldDecodeNewlines2 = tagName2 === "a" && args[1] === "href" ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
              attrs2[i] = {
                name: args[1],
                value: decodeAttr(value, shouldDecodeNewlines2)
              };
              if (options.outputSourceRange) {
                attrs2[i].start = args.start + args[0].match(/^\s*/).length;
                attrs2[i].end = args.end;
              }
            }
            if (!unary) {
              stack.push({ tag: tagName2, lowerCasedTag: tagName2.toLowerCase(), attrs: attrs2, start: match.start, end: match.end });
              lastTag = tagName2;
            }
            if (options.start) {
              options.start(tagName2, attrs2, unary, match.start, match.end);
            }
          }
          function parseEndTag(tagName2, start, end) {
            var pos, lowerCasedTagName;
            if (start == null) {
              start = index2;
            }
            if (end == null) {
              end = index2;
            }
            if (tagName2) {
              lowerCasedTagName = tagName2.toLowerCase();
              for (pos = stack.length - 1; pos >= 0; pos--) {
                if (stack[pos].lowerCasedTag === lowerCasedTagName) {
                  break;
                }
              }
            } else {
              pos = 0;
            }
            if (pos >= 0) {
              for (var i = stack.length - 1; i >= pos; i--) {
                if (i > pos || !tagName2 && options.warn) {
                  options.warn("tag <" + stack[i].tag + "> has no matching end tag.", { start: stack[i].start, end: stack[i].end });
                }
                if (options.end) {
                  options.end(stack[i].tag, start, end);
                }
              }
              stack.length = pos;
              lastTag = pos && stack[pos - 1].tag;
            } else if (lowerCasedTagName === "br") {
              if (options.start) {
                options.start(tagName2, [], true, start, end);
              }
            } else if (lowerCasedTagName === "p") {
              if (options.start) {
                options.start(tagName2, [], false, start, end);
              }
              if (options.end) {
                options.end(tagName2, start, end);
              }
            }
          }
        }
        var onRE = /^@|^v-on:/;
        var dirRE = /^v-|^@|^:|^#/;
        var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
        var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
        var stripParensRE = /^\(|\)$/g;
        var dynamicArgRE = /^\[.*\]$/;
        var argRE = /:(.*)$/;
        var bindRE = /^:|^\.|^v-bind:/;
        var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;
        var slotRE = /^v-slot(:|$)|^#/;
        var lineBreakRE = /[\r\n]/;
        var whitespaceRE$1 = /[ \f\t\r\n]+/g;
        var invalidAttributeRE = /[\s"'<>\/=]/;
        var decodeHTMLCached = cached(he.decode);
        var emptySlotScopeToken = "_empty_";
        var warn$2;
        var delimiters;
        var transforms;
        var preTransforms;
        var postTransforms;
        var platformIsPreTag;
        var platformMustUseProp;
        var platformGetTagNamespace;
        var maybeComponent;
        function createASTElement(tag, attrs2, parent) {
          return {
            type: 1,
            tag,
            attrsList: attrs2,
            attrsMap: makeAttrsMap(attrs2),
            rawAttrsMap: {},
            parent,
            children: []
          };
        }
        function parse(template, options) {
          warn$2 = options.warn || baseWarn;
          platformIsPreTag = options.isPreTag || no;
          platformMustUseProp = options.mustUseProp || no;
          platformGetTagNamespace = options.getTagNamespace || no;
          var isReservedTag2 = options.isReservedTag || no;
          maybeComponent = function(el) {
            return !!(el.component || el.attrsMap[":is"] || el.attrsMap["v-bind:is"] || !(el.attrsMap.is ? isReservedTag2(el.attrsMap.is) : isReservedTag2(el.tag)));
          };
          transforms = pluckModuleFunction(options.modules, "transformNode");
          preTransforms = pluckModuleFunction(options.modules, "preTransformNode");
          postTransforms = pluckModuleFunction(options.modules, "postTransformNode");
          delimiters = options.delimiters;
          var stack = [];
          var preserveWhitespace = options.preserveWhitespace !== false;
          var whitespaceOption = options.whitespace;
          var root;
          var currentParent;
          var inVPre = false;
          var inPre = false;
          var warned = false;
          function warnOnce(msg, range2) {
            if (!warned) {
              warned = true;
              warn$2(msg, range2);
            }
          }
          function closeElement(element) {
            trimEndingWhitespace(element);
            if (!inVPre && !element.processed) {
              element = processElement(element, options);
            }
            if (!stack.length && element !== root) {
              if (root.if && (element.elseif || element.else)) {
                {
                  checkRootConstraints(element);
                }
                addIfCondition(root, {
                  exp: element.elseif,
                  block: element
                });
              } else {
                warnOnce("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.", { start: element.start });
              }
            }
            if (currentParent && !element.forbidden) {
              if (element.elseif || element.else) {
                processIfConditions(element, currentParent);
              } else {
                if (element.slotScope) {
                  var name = element.slotTarget || '"default"';
                  (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
                }
                currentParent.children.push(element);
                element.parent = currentParent;
              }
            }
            element.children = element.children.filter(function(c) {
              return !c.slotScope;
            });
            trimEndingWhitespace(element);
            if (element.pre) {
              inVPre = false;
            }
            if (platformIsPreTag(element.tag)) {
              inPre = false;
            }
            for (var i = 0; i < postTransforms.length; i++) {
              postTransforms[i](element, options);
            }
          }
          function trimEndingWhitespace(el) {
            if (!inPre) {
              var lastNode;
              while ((lastNode = el.children[el.children.length - 1]) && lastNode.type === 3 && lastNode.text === " ") {
                el.children.pop();
              }
            }
          }
          function checkRootConstraints(el) {
            if (el.tag === "slot" || el.tag === "template") {
              warnOnce("Cannot use <" + el.tag + "> as component root element because it may contain multiple nodes.", { start: el.start });
            }
            if (el.attrsMap.hasOwnProperty("v-for")) {
              warnOnce("Cannot use v-for on stateful component root element because it renders multiple elements.", el.rawAttrsMap["v-for"]);
            }
          }
          parseHTML(template, {
            warn: warn$2,
            expectHTML: options.expectHTML,
            isUnaryTag: options.isUnaryTag,
            canBeLeftOpenTag: options.canBeLeftOpenTag,
            shouldDecodeNewlines: options.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
            shouldKeepComment: options.comments,
            outputSourceRange: options.outputSourceRange,
            start: function start(tag, attrs2, unary, start$1, end) {
              var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);
              if (isIE && ns === "svg") {
                attrs2 = guardIESVGBug(attrs2);
              }
              var element = createASTElement(tag, attrs2, currentParent);
              if (ns) {
                element.ns = ns;
              }
              {
                if (options.outputSourceRange) {
                  element.start = start$1;
                  element.end = end;
                  element.rawAttrsMap = element.attrsList.reduce(function(cumulated, attr) {
                    cumulated[attr.name] = attr;
                    return cumulated;
                  }, {});
                }
                attrs2.forEach(function(attr) {
                  if (invalidAttributeRE.test(attr.name)) {
                    warn$2("Invalid dynamic argument expression: attribute names cannot contain spaces, quotes, <, >, / or =.", {
                      start: attr.start + attr.name.indexOf("["),
                      end: attr.start + attr.name.length
                    });
                  }
                });
              }
              if (isForbiddenTag(element) && !isServerRendering()) {
                element.forbidden = true;
                warn$2("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <" + tag + ">, as they will not be parsed.", { start: element.start });
              }
              for (var i = 0; i < preTransforms.length; i++) {
                element = preTransforms[i](element, options) || element;
              }
              if (!inVPre) {
                processPre(element);
                if (element.pre) {
                  inVPre = true;
                }
              }
              if (platformIsPreTag(element.tag)) {
                inPre = true;
              }
              if (inVPre) {
                processRawAttrs(element);
              } else if (!element.processed) {
                processFor(element);
                processIf(element);
                processOnce(element);
              }
              if (!root) {
                root = element;
                {
                  checkRootConstraints(root);
                }
              }
              if (!unary) {
                currentParent = element;
                stack.push(element);
              } else {
                closeElement(element);
              }
            },
            end: function end(tag, start, end$1) {
              var element = stack[stack.length - 1];
              stack.length -= 1;
              currentParent = stack[stack.length - 1];
              if (options.outputSourceRange) {
                element.end = end$1;
              }
              closeElement(element);
            },
            chars: function chars(text2, start, end) {
              if (!currentParent) {
                {
                  if (text2 === template) {
                    warnOnce("Component template requires a root element, rather than just text.", { start });
                  } else if (text2 = text2.trim()) {
                    warnOnce('text "' + text2 + '" outside root element will be ignored.', { start });
                  }
                }
                return;
              }
              if (isIE && currentParent.tag === "textarea" && currentParent.attrsMap.placeholder === text2) {
                return;
              }
              var children = currentParent.children;
              if (inPre || text2.trim()) {
                text2 = isTextTag(currentParent) ? text2 : decodeHTMLCached(text2);
              } else if (!children.length) {
                text2 = "";
              } else if (whitespaceOption) {
                if (whitespaceOption === "condense") {
                  text2 = lineBreakRE.test(text2) ? "" : " ";
                } else {
                  text2 = " ";
                }
              } else {
                text2 = preserveWhitespace ? " " : "";
              }
              if (text2) {
                if (!inPre && whitespaceOption === "condense") {
                  text2 = text2.replace(whitespaceRE$1, " ");
                }
                var res;
                var child;
                if (!inVPre && text2 !== " " && (res = parseText(text2, delimiters))) {
                  child = {
                    type: 2,
                    expression: res.expression,
                    tokens: res.tokens,
                    text: text2
                  };
                } else if (text2 !== " " || !children.length || children[children.length - 1].text !== " ") {
                  child = {
                    type: 3,
                    text: text2
                  };
                }
                if (child) {
                  if (options.outputSourceRange) {
                    child.start = start;
                    child.end = end;
                  }
                  children.push(child);
                }
              }
            },
            comment: function comment2(text2, start, end) {
              if (currentParent) {
                var child = {
                  type: 3,
                  text: text2,
                  isComment: true
                };
                if (options.outputSourceRange) {
                  child.start = start;
                  child.end = end;
                }
                currentParent.children.push(child);
              }
            }
          });
          return root;
        }
        function processPre(el) {
          if (getAndRemoveAttr(el, "v-pre") != null) {
            el.pre = true;
          }
        }
        function processRawAttrs(el) {
          var list = el.attrsList;
          var len2 = list.length;
          if (len2) {
            var attrs2 = el.attrs = new Array(len2);
            for (var i = 0; i < len2; i++) {
              attrs2[i] = {
                name: list[i].name,
                value: JSON.stringify(list[i].value)
              };
              if (list[i].start != null) {
                attrs2[i].start = list[i].start;
                attrs2[i].end = list[i].end;
              }
            }
          } else if (!el.pre) {
            el.plain = true;
          }
        }
        function processElement(element, options) {
          processKey(element);
          element.plain = !element.key && !element.scopedSlots && !element.attrsList.length;
          processRef(element);
          processSlotContent(element);
          processSlotOutlet(element);
          processComponent(element);
          for (var i = 0; i < transforms.length; i++) {
            element = transforms[i](element, options) || element;
          }
          processAttrs(element);
          return element;
        }
        function processKey(el) {
          var exp = getBindingAttr(el, "key");
          if (exp) {
            {
              if (el.tag === "template") {
                warn$2("<template> cannot be keyed. Place the key on real elements instead.", getRawBindingAttr(el, "key"));
              }
              if (el.for) {
                var iterator = el.iterator2 || el.iterator1;
                var parent = el.parent;
                if (iterator && iterator === exp && parent && parent.tag === "transition-group") {
                  warn$2("Do not use v-for index as key on <transition-group> children, this is the same as not using keys.", getRawBindingAttr(el, "key"), true);
                }
              }
            }
            el.key = exp;
          }
        }
        function processRef(el) {
          var ref2 = getBindingAttr(el, "ref");
          if (ref2) {
            el.ref = ref2;
            el.refInFor = checkInFor(el);
          }
        }
        function processFor(el) {
          var exp;
          if (exp = getAndRemoveAttr(el, "v-for")) {
            var res = parseFor(exp);
            if (res) {
              extend(el, res);
            } else {
              warn$2("Invalid v-for expression: " + exp, el.rawAttrsMap["v-for"]);
            }
          }
        }
        function parseFor(exp) {
          var inMatch = exp.match(forAliasRE);
          if (!inMatch) {
            return;
          }
          var res = {};
          res.for = inMatch[2].trim();
          var alias = inMatch[1].trim().replace(stripParensRE, "");
          var iteratorMatch = alias.match(forIteratorRE);
          if (iteratorMatch) {
            res.alias = alias.replace(forIteratorRE, "").trim();
            res.iterator1 = iteratorMatch[1].trim();
            if (iteratorMatch[2]) {
              res.iterator2 = iteratorMatch[2].trim();
            }
          } else {
            res.alias = alias;
          }
          return res;
        }
        function processIf(el) {
          var exp = getAndRemoveAttr(el, "v-if");
          if (exp) {
            el.if = exp;
            addIfCondition(el, {
              exp,
              block: el
            });
          } else {
            if (getAndRemoveAttr(el, "v-else") != null) {
              el.else = true;
            }
            var elseif = getAndRemoveAttr(el, "v-else-if");
            if (elseif) {
              el.elseif = elseif;
            }
          }
        }
        function processIfConditions(el, parent) {
          var prev = findPrevElement(parent.children);
          if (prev && prev.if) {
            addIfCondition(prev, {
              exp: el.elseif,
              block: el
            });
          } else {
            warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : "else") + " used on element <" + el.tag + "> without corresponding v-if.", el.rawAttrsMap[el.elseif ? "v-else-if" : "v-else"]);
          }
        }
        function findPrevElement(children) {
          var i = children.length;
          while (i--) {
            if (children[i].type === 1) {
              return children[i];
            } else {
              if (children[i].text !== " ") {
                warn$2('text "' + children[i].text.trim() + '" between v-if and v-else(-if) will be ignored.', children[i]);
              }
              children.pop();
            }
          }
        }
        function addIfCondition(el, condition) {
          if (!el.ifConditions) {
            el.ifConditions = [];
          }
          el.ifConditions.push(condition);
        }
        function processOnce(el) {
          var once$$1 = getAndRemoveAttr(el, "v-once");
          if (once$$1 != null) {
            el.once = true;
          }
        }
        function processSlotContent(el) {
          var slotScope;
          if (el.tag === "template") {
            slotScope = getAndRemoveAttr(el, "scope");
            if (slotScope) {
              warn$2('the "scope" attribute for scoped slots have been deprecated and replaced by "slot-scope" since 2.5. The new "slot-scope" attribute can also be used on plain elements in addition to <template> to denote scoped slots.', el.rawAttrsMap["scope"], true);
            }
            el.slotScope = slotScope || getAndRemoveAttr(el, "slot-scope");
          } else if (slotScope = getAndRemoveAttr(el, "slot-scope")) {
            if (el.attrsMap["v-for"]) {
              warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> (v-for takes higher priority). Use a wrapper <template> for the scoped slot to make it clearer.", el.rawAttrsMap["slot-scope"], true);
            }
            el.slotScope = slotScope;
          }
          var slotTarget = getBindingAttr(el, "slot");
          if (slotTarget) {
            el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
            el.slotTargetDynamic = !!(el.attrsMap[":slot"] || el.attrsMap["v-bind:slot"]);
            if (el.tag !== "template" && !el.slotScope) {
              addAttr(el, "slot", slotTarget, getRawBindingAttr(el, "slot"));
            }
          }
          {
            if (el.tag === "template") {
              var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding) {
                {
                  if (el.slotTarget || el.slotScope) {
                    warn$2("Unexpected mixed usage of different slot syntaxes.", el);
                  }
                  if (el.parent && !maybeComponent(el.parent)) {
                    warn$2("<template v-slot> can only appear at the root level inside the receiving component", el);
                  }
                }
                var ref2 = getSlotName(slotBinding);
                var name = ref2.name;
                var dynamic = ref2.dynamic;
                el.slotTarget = name;
                el.slotTargetDynamic = dynamic;
                el.slotScope = slotBinding.value || emptySlotScopeToken;
              }
            } else {
              var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
              if (slotBinding$1) {
                {
                  if (!maybeComponent(el)) {
                    warn$2("v-slot can only be used on components or <template>.", slotBinding$1);
                  }
                  if (el.slotScope || el.slotTarget) {
                    warn$2("Unexpected mixed usage of different slot syntaxes.", el);
                  }
                  if (el.scopedSlots) {
                    warn$2("To avoid scope ambiguity, the default slot should also use <template> syntax when there are other named slots.", slotBinding$1);
                  }
                }
                var slots = el.scopedSlots || (el.scopedSlots = {});
                var ref$12 = getSlotName(slotBinding$1);
                var name$1 = ref$12.name;
                var dynamic$1 = ref$12.dynamic;
                var slotContainer = slots[name$1] = createASTElement("template", [], el);
                slotContainer.slotTarget = name$1;
                slotContainer.slotTargetDynamic = dynamic$1;
                slotContainer.children = el.children.filter(function(c) {
                  if (!c.slotScope) {
                    c.parent = slotContainer;
                    return true;
                  }
                });
                slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
                el.children = [];
                el.plain = false;
              }
            }
          }
        }
        function getSlotName(binding) {
          var name = binding.name.replace(slotRE, "");
          if (!name) {
            if (binding.name[0] !== "#") {
              name = "default";
            } else {
              warn$2("v-slot shorthand syntax requires a slot name.", binding);
            }
          }
          return dynamicArgRE.test(name) ? { name: name.slice(1, -1), dynamic: true } : { name: '"' + name + '"', dynamic: false };
        }
        function processSlotOutlet(el) {
          if (el.tag === "slot") {
            el.slotName = getBindingAttr(el, "name");
            if (el.key) {
              warn$2("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.", getRawBindingAttr(el, "key"));
            }
          }
        }
        function processComponent(el) {
          var binding;
          if (binding = getBindingAttr(el, "is")) {
            el.component = binding;
          }
          if (getAndRemoveAttr(el, "inline-template") != null) {
            el.inlineTemplate = true;
          }
        }
        function processAttrs(el) {
          var list = el.attrsList;
          var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
          for (i = 0, l = list.length; i < l; i++) {
            name = rawName = list[i].name;
            value = list[i].value;
            if (dirRE.test(name)) {
              el.hasBindings = true;
              modifiers = parseModifiers(name.replace(dirRE, ""));
              if (modifiers) {
                name = name.replace(modifierRE, "");
              }
              if (bindRE.test(name)) {
                name = name.replace(bindRE, "");
                value = parseFilters(value);
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                  name = name.slice(1, -1);
                }
                if (value.trim().length === 0) {
                  warn$2('The value for a v-bind expression cannot be empty. Found in "v-bind:' + name + '"');
                }
                if (modifiers) {
                  if (modifiers.prop && !isDynamic) {
                    name = camelize(name);
                    if (name === "innerHtml") {
                      name = "innerHTML";
                    }
                  }
                  if (modifiers.camel && !isDynamic) {
                    name = camelize(name);
                  }
                  if (modifiers.sync) {
                    syncGen = genAssignmentCode(value, "$event");
                    if (!isDynamic) {
                      addHandler(el, "update:" + camelize(name), syncGen, null, false, warn$2, list[i]);
                      if (hyphenate(name) !== camelize(name)) {
                        addHandler(el, "update:" + hyphenate(name), syncGen, null, false, warn$2, list[i]);
                      }
                    } else {
                      addHandler(el, '"update:"+(' + name + ")", syncGen, null, false, warn$2, list[i], true);
                    }
                  }
                }
                if (modifiers && modifiers.prop || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                  addProp(el, name, value, list[i], isDynamic);
                } else {
                  addAttr(el, name, value, list[i], isDynamic);
                }
              } else if (onRE.test(name)) {
                name = name.replace(onRE, "");
                isDynamic = dynamicArgRE.test(name);
                if (isDynamic) {
                  name = name.slice(1, -1);
                }
                addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
              } else {
                name = name.replace(dirRE, "");
                var argMatch = name.match(argRE);
                var arg = argMatch && argMatch[1];
                isDynamic = false;
                if (arg) {
                  name = name.slice(0, -(arg.length + 1));
                  if (dynamicArgRE.test(arg)) {
                    arg = arg.slice(1, -1);
                    isDynamic = true;
                  }
                }
                addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
                if (name === "model") {
                  checkForAliasModel(el, value);
                }
              }
            } else {
              {
                var res = parseText(value, delimiters);
                if (res) {
                  warn$2(name + '="' + value + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.', list[i]);
                }
              }
              addAttr(el, name, JSON.stringify(value), list[i]);
              if (!el.component && name === "muted" && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
                addProp(el, name, "true", list[i]);
              }
            }
          }
        }
        function checkInFor(el) {
          var parent = el;
          while (parent) {
            if (parent.for !== void 0) {
              return true;
            }
            parent = parent.parent;
          }
          return false;
        }
        function parseModifiers(name) {
          var match = name.match(modifierRE);
          if (match) {
            var ret = {};
            match.forEach(function(m) {
              ret[m.slice(1)] = true;
            });
            return ret;
          }
        }
        function makeAttrsMap(attrs2) {
          var map = {};
          for (var i = 0, l = attrs2.length; i < l; i++) {
            if (map[attrs2[i].name] && !isIE && !isEdge) {
              warn$2("duplicate attribute: " + attrs2[i].name, attrs2[i]);
            }
            map[attrs2[i].name] = attrs2[i].value;
          }
          return map;
        }
        function isTextTag(el) {
          return el.tag === "script" || el.tag === "style";
        }
        function isForbiddenTag(el) {
          return el.tag === "style" || el.tag === "script" && (!el.attrsMap.type || el.attrsMap.type === "text/javascript");
        }
        var ieNSBug = /^xmlns:NS\d+/;
        var ieNSPrefix = /^NS\d+:/;
        function guardIESVGBug(attrs2) {
          var res = [];
          for (var i = 0; i < attrs2.length; i++) {
            var attr = attrs2[i];
            if (!ieNSBug.test(attr.name)) {
              attr.name = attr.name.replace(ieNSPrefix, "");
              res.push(attr);
            }
          }
          return res;
        }
        function checkForAliasModel(el, value) {
          var _el = el;
          while (_el) {
            if (_el.for && _el.alias === value) {
              warn$2("<" + el.tag + ' v-model="' + value + '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.', el.rawAttrsMap["v-model"]);
            }
            _el = _el.parent;
          }
        }
        function preTransformNode(el, options) {
          if (el.tag === "input") {
            var map = el.attrsMap;
            if (!map["v-model"]) {
              return;
            }
            var typeBinding;
            if (map[":type"] || map["v-bind:type"]) {
              typeBinding = getBindingAttr(el, "type");
            }
            if (!map.type && !typeBinding && map["v-bind"]) {
              typeBinding = "(" + map["v-bind"] + ").type";
            }
            if (typeBinding) {
              var ifCondition = getAndRemoveAttr(el, "v-if", true);
              var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
              var hasElse = getAndRemoveAttr(el, "v-else", true) != null;
              var elseIfCondition = getAndRemoveAttr(el, "v-else-if", true);
              var branch0 = cloneASTElement(el);
              processFor(branch0);
              addRawAttr(branch0, "type", "checkbox");
              processElement(branch0, options);
              branch0.processed = true;
              branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
              addIfCondition(branch0, {
                exp: branch0.if,
                block: branch0
              });
              var branch1 = cloneASTElement(el);
              getAndRemoveAttr(branch1, "v-for", true);
              addRawAttr(branch1, "type", "radio");
              processElement(branch1, options);
              addIfCondition(branch0, {
                exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
                block: branch1
              });
              var branch2 = cloneASTElement(el);
              getAndRemoveAttr(branch2, "v-for", true);
              addRawAttr(branch2, ":type", typeBinding);
              processElement(branch2, options);
              addIfCondition(branch0, {
                exp: ifCondition,
                block: branch2
              });
              if (hasElse) {
                branch0.else = true;
              } else if (elseIfCondition) {
                branch0.elseif = elseIfCondition;
              }
              return branch0;
            }
          }
        }
        function cloneASTElement(el) {
          return createASTElement(el.tag, el.attrsList.slice(), el.parent);
        }
        var model$1 = {
          preTransformNode
        };
        var modules$1 = [
          klass$1,
          style$1,
          model$1
        ];
        function text(el, dir) {
          if (dir.value) {
            addProp(el, "textContent", "_s(" + dir.value + ")", dir);
          }
        }
        function html(el, dir) {
          if (dir.value) {
            addProp(el, "innerHTML", "_s(" + dir.value + ")", dir);
          }
        }
        var directives$1 = {
          model,
          text,
          html
        };
        var baseOptions = {
          expectHTML: true,
          modules: modules$1,
          directives: directives$1,
          isPreTag,
          isUnaryTag,
          mustUseProp,
          canBeLeftOpenTag,
          isReservedTag,
          getTagNamespace,
          staticKeys: genStaticKeys(modules$1)
        };
        var isStaticKey;
        var isPlatformReservedTag;
        var genStaticKeysCached = cached(genStaticKeys$1);
        function optimize(root, options) {
          if (!root) {
            return;
          }
          isStaticKey = genStaticKeysCached(options.staticKeys || "");
          isPlatformReservedTag = options.isReservedTag || no;
          markStatic$1(root);
          markStaticRoots(root, false);
        }
        function genStaticKeys$1(keys) {
          return makeMap("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (keys ? "," + keys : ""));
        }
        function markStatic$1(node) {
          node.static = isStatic(node);
          if (node.type === 1) {
            if (!isPlatformReservedTag(node.tag) && node.tag !== "slot" && node.attrsMap["inline-template"] == null) {
              return;
            }
            for (var i = 0, l = node.children.length; i < l; i++) {
              var child = node.children[i];
              markStatic$1(child);
              if (!child.static) {
                node.static = false;
              }
            }
            if (node.ifConditions) {
              for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                var block = node.ifConditions[i$1].block;
                markStatic$1(block);
                if (!block.static) {
                  node.static = false;
                }
              }
            }
          }
        }
        function markStaticRoots(node, isInFor) {
          if (node.type === 1) {
            if (node.static || node.once) {
              node.staticInFor = isInFor;
            }
            if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
              node.staticRoot = true;
              return;
            } else {
              node.staticRoot = false;
            }
            if (node.children) {
              for (var i = 0, l = node.children.length; i < l; i++) {
                markStaticRoots(node.children[i], isInFor || !!node.for);
              }
            }
            if (node.ifConditions) {
              for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
                markStaticRoots(node.ifConditions[i$1].block, isInFor);
              }
            }
          }
        }
        function isStatic(node) {
          if (node.type === 2) {
            return false;
          }
          if (node.type === 3) {
            return true;
          }
          return !!(node.pre || !node.hasBindings && !node.if && !node.for && !isBuiltInTag(node.tag) && isPlatformReservedTag(node.tag) && !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
        }
        function isDirectChildOfTemplateFor(node) {
          while (node.parent) {
            node = node.parent;
            if (node.tag !== "template") {
              return false;
            }
            if (node.for) {
              return true;
            }
          }
          return false;
        }
        var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
        var fnInvokeRE = /\([^)]*?\);*$/;
        var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
        var keyCodes = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          "delete": [8, 46]
        };
        var keyNames = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: [" ", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          "delete": ["Backspace", "Delete", "Del"]
        };
        var genGuard = function(condition) {
          return "if(" + condition + ")return null;";
        };
        var modifierCode = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: genGuard("$event.target !== $event.currentTarget"),
          ctrl: genGuard("!$event.ctrlKey"),
          shift: genGuard("!$event.shiftKey"),
          alt: genGuard("!$event.altKey"),
          meta: genGuard("!$event.metaKey"),
          left: genGuard("'button' in $event && $event.button !== 0"),
          middle: genGuard("'button' in $event && $event.button !== 1"),
          right: genGuard("'button' in $event && $event.button !== 2")
        };
        function genHandlers(events2, isNative2) {
          var prefix = isNative2 ? "nativeOn:" : "on:";
          var staticHandlers = "";
          var dynamicHandlers = "";
          for (var name in events2) {
            var handlerCode = genHandler(events2[name]);
            if (events2[name] && events2[name].dynamic) {
              dynamicHandlers += name + "," + handlerCode + ",";
            } else {
              staticHandlers += '"' + name + '":' + handlerCode + ",";
            }
          }
          staticHandlers = "{" + staticHandlers.slice(0, -1) + "}";
          if (dynamicHandlers) {
            return prefix + "_d(" + staticHandlers + ",[" + dynamicHandlers.slice(0, -1) + "])";
          } else {
            return prefix + staticHandlers;
          }
        }
        function genHandler(handler) {
          if (!handler) {
            return "function(){}";
          }
          if (Array.isArray(handler)) {
            return "[" + handler.map(function(handler2) {
              return genHandler(handler2);
            }).join(",") + "]";
          }
          var isMethodPath = simplePathRE.test(handler.value);
          var isFunctionExpression = fnExpRE.test(handler.value);
          var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ""));
          if (!handler.modifiers) {
            if (isMethodPath || isFunctionExpression) {
              return handler.value;
            }
            return "function($event){" + (isFunctionInvocation ? "return " + handler.value : handler.value) + "}";
          } else {
            var code = "";
            var genModifierCode = "";
            var keys = [];
            for (var key in handler.modifiers) {
              if (modifierCode[key]) {
                genModifierCode += modifierCode[key];
                if (keyCodes[key]) {
                  keys.push(key);
                }
              } else if (key === "exact") {
                var modifiers = handler.modifiers;
                genModifierCode += genGuard(["ctrl", "shift", "alt", "meta"].filter(function(keyModifier) {
                  return !modifiers[keyModifier];
                }).map(function(keyModifier) {
                  return "$event." + keyModifier + "Key";
                }).join("||"));
              } else {
                keys.push(key);
              }
            }
            if (keys.length) {
              code += genKeyFilter(keys);
            }
            if (genModifierCode) {
              code += genModifierCode;
            }
            var handlerCode = isMethodPath ? "return " + handler.value + ".apply(null, arguments)" : isFunctionExpression ? "return (" + handler.value + ").apply(null, arguments)" : isFunctionInvocation ? "return " + handler.value : handler.value;
            return "function($event){" + code + handlerCode + "}";
          }
        }
        function genKeyFilter(keys) {
          return "if(!$event.type.indexOf('key')&&" + keys.map(genFilterCode).join("&&") + ")return null;";
        }
        function genFilterCode(key) {
          var keyVal = parseInt(key, 10);
          if (keyVal) {
            return "$event.keyCode!==" + keyVal;
          }
          var keyCode = keyCodes[key];
          var keyName = keyNames[key];
          return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(keyCode) + ",$event.key," + JSON.stringify(keyName) + ")";
        }
        function on(el, dir) {
          if (dir.modifiers) {
            warn("v-on without argument does not support modifiers.");
          }
          el.wrapListeners = function(code) {
            return "_g(" + code + "," + dir.value + ")";
          };
        }
        function bind$1(el, dir) {
          el.wrapData = function(code) {
            return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? "true" : "false") + (dir.modifiers && dir.modifiers.sync ? ",true" : "") + ")";
          };
        }
        var baseDirectives = {
          on,
          bind: bind$1,
          cloak: noop
        };
        var CodegenState = function CodegenState2(options) {
          this.options = options;
          this.warn = options.warn || baseWarn;
          this.transforms = pluckModuleFunction(options.modules, "transformCode");
          this.dataGenFns = pluckModuleFunction(options.modules, "genData");
          this.directives = extend(extend({}, baseDirectives), options.directives);
          var isReservedTag2 = options.isReservedTag || no;
          this.maybeComponent = function(el) {
            return !!el.component || !isReservedTag2(el.tag);
          };
          this.onceId = 0;
          this.staticRenderFns = [];
          this.pre = false;
        };
        function generate(ast, options) {
          var state = new CodegenState(options);
          var code = ast ? ast.tag === "script" ? "null" : genElement(ast, state) : '_c("div")';
          return {
            render: "with(this){return " + code + "}",
            staticRenderFns: state.staticRenderFns
          };
        }
        function genElement(el, state) {
          if (el.parent) {
            el.pre = el.pre || el.parent.pre;
          }
          if (el.staticRoot && !el.staticProcessed) {
            return genStatic(el, state);
          } else if (el.once && !el.onceProcessed) {
            return genOnce(el, state);
          } else if (el.for && !el.forProcessed) {
            return genFor(el, state);
          } else if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.tag === "template" && !el.slotTarget && !state.pre) {
            return genChildren(el, state) || "void 0";
          } else if (el.tag === "slot") {
            return genSlot(el, state);
          } else {
            var code;
            if (el.component) {
              code = genComponent(el.component, el, state);
            } else {
              var data;
              if (!el.plain || el.pre && state.maybeComponent(el)) {
                data = genData$2(el, state);
              }
              var children = el.inlineTemplate ? null : genChildren(el, state, true);
              code = "_c('" + el.tag + "'" + (data ? "," + data : "") + (children ? "," + children : "") + ")";
            }
            for (var i = 0; i < state.transforms.length; i++) {
              code = state.transforms[i](el, code);
            }
            return code;
          }
        }
        function genStatic(el, state) {
          el.staticProcessed = true;
          var originalPreState = state.pre;
          if (el.pre) {
            state.pre = el.pre;
          }
          state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
          state.pre = originalPreState;
          return "_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ",true" : "") + ")";
        }
        function genOnce(el, state) {
          el.onceProcessed = true;
          if (el.if && !el.ifProcessed) {
            return genIf(el, state);
          } else if (el.staticInFor) {
            var key = "";
            var parent = el.parent;
            while (parent) {
              if (parent.for) {
                key = parent.key;
                break;
              }
              parent = parent.parent;
            }
            if (!key) {
              state.warn("v-once can only be used inside v-for that is keyed. ", el.rawAttrsMap["v-once"]);
              return genElement(el, state);
            }
            return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
          } else {
            return genStatic(el, state);
          }
        }
        function genIf(el, state, altGen, altEmpty) {
          el.ifProcessed = true;
          return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
        }
        function genIfConditions(conditions, state, altGen, altEmpty) {
          if (!conditions.length) {
            return altEmpty || "_e()";
          }
          var condition = conditions.shift();
          if (condition.exp) {
            return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
          } else {
            return "" + genTernaryExp(condition.block);
          }
          function genTernaryExp(el) {
            return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
          }
        }
        function genFor(el, state, altGen, altHelper) {
          var exp = el.for;
          var alias = el.alias;
          var iterator1 = el.iterator1 ? "," + el.iterator1 : "";
          var iterator2 = el.iterator2 ? "," + el.iterator2 : "";
          if (state.maybeComponent(el) && el.tag !== "slot" && el.tag !== "template" && !el.key) {
            state.warn("<" + el.tag + ' v-for="' + alias + " in " + exp + '">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.', el.rawAttrsMap["v-for"], true);
          }
          el.forProcessed = true;
          return (altHelper || "_l") + "((" + exp + "),function(" + alias + iterator1 + iterator2 + "){return " + (altGen || genElement)(el, state) + "})";
        }
        function genData$2(el, state) {
          var data = "{";
          var dirs = genDirectives(el, state);
          if (dirs) {
            data += dirs + ",";
          }
          if (el.key) {
            data += "key:" + el.key + ",";
          }
          if (el.ref) {
            data += "ref:" + el.ref + ",";
          }
          if (el.refInFor) {
            data += "refInFor:true,";
          }
          if (el.pre) {
            data += "pre:true,";
          }
          if (el.component) {
            data += 'tag:"' + el.tag + '",';
          }
          for (var i = 0; i < state.dataGenFns.length; i++) {
            data += state.dataGenFns[i](el);
          }
          if (el.attrs) {
            data += "attrs:" + genProps(el.attrs) + ",";
          }
          if (el.props) {
            data += "domProps:" + genProps(el.props) + ",";
          }
          if (el.events) {
            data += genHandlers(el.events, false) + ",";
          }
          if (el.nativeEvents) {
            data += genHandlers(el.nativeEvents, true) + ",";
          }
          if (el.slotTarget && !el.slotScope) {
            data += "slot:" + el.slotTarget + ",";
          }
          if (el.scopedSlots) {
            data += genScopedSlots(el, el.scopedSlots, state) + ",";
          }
          if (el.model) {
            data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
          }
          if (el.inlineTemplate) {
            var inlineTemplate = genInlineTemplate(el, state);
            if (inlineTemplate) {
              data += inlineTemplate + ",";
            }
          }
          data = data.replace(/,$/, "") + "}";
          if (el.dynamicAttrs) {
            data = "_b(" + data + ',"' + el.tag + '",' + genProps(el.dynamicAttrs) + ")";
          }
          if (el.wrapData) {
            data = el.wrapData(data);
          }
          if (el.wrapListeners) {
            data = el.wrapListeners(data);
          }
          return data;
        }
        function genDirectives(el, state) {
          var dirs = el.directives;
          if (!dirs) {
            return;
          }
          var res = "directives:[";
          var hasRuntime = false;
          var i, l, dir, needRuntime;
          for (i = 0, l = dirs.length; i < l; i++) {
            dir = dirs[i];
            needRuntime = true;
            var gen = state.directives[dir.name];
            if (gen) {
              needRuntime = !!gen(el, dir, state.warn);
            }
            if (needRuntime) {
              hasRuntime = true;
              res += '{name:"' + dir.name + '",rawName:"' + dir.rawName + '"' + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : "") + (dir.arg ? ",arg:" + (dir.isDynamicArg ? dir.arg : '"' + dir.arg + '"') : "") + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : "") + "},";
            }
          }
          if (hasRuntime) {
            return res.slice(0, -1) + "]";
          }
        }
        function genInlineTemplate(el, state) {
          var ast = el.children[0];
          if (el.children.length !== 1 || ast.type !== 1) {
            state.warn("Inline-template components must have exactly one child element.", { start: el.start });
          }
          if (ast && ast.type === 1) {
            var inlineRenderFns = generate(ast, state.options);
            return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function(code) {
              return "function(){" + code + "}";
            }).join(",") + "]}";
          }
        }
        function genScopedSlots(el, slots, state) {
          var needsForceUpdate = el.for || Object.keys(slots).some(function(key) {
            var slot = slots[key];
            return slot.slotTargetDynamic || slot.if || slot.for || containsSlotChild(slot);
          });
          var needsKey = !!el.if;
          if (!needsForceUpdate) {
            var parent = el.parent;
            while (parent) {
              if (parent.slotScope && parent.slotScope !== emptySlotScopeToken || parent.for) {
                needsForceUpdate = true;
                break;
              }
              if (parent.if) {
                needsKey = true;
              }
              parent = parent.parent;
            }
          }
          var generatedSlots = Object.keys(slots).map(function(key) {
            return genScopedSlot(slots[key], state);
          }).join(",");
          return "scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? ",null,false," + hash(generatedSlots) : "") + ")";
        }
        function hash(str2) {
          var hash2 = 5381;
          var i = str2.length;
          while (i) {
            hash2 = hash2 * 33 ^ str2.charCodeAt(--i);
          }
          return hash2 >>> 0;
        }
        function containsSlotChild(el) {
          if (el.type === 1) {
            if (el.tag === "slot") {
              return true;
            }
            return el.children.some(containsSlotChild);
          }
          return false;
        }
        function genScopedSlot(el, state) {
          var isLegacySyntax = el.attrsMap["slot-scope"];
          if (el.if && !el.ifProcessed && !isLegacySyntax) {
            return genIf(el, state, genScopedSlot, "null");
          }
          if (el.for && !el.forProcessed) {
            return genFor(el, state, genScopedSlot);
          }
          var slotScope = el.slotScope === emptySlotScopeToken ? "" : String(el.slotScope);
          var fn = "function(" + slotScope + "){return " + (el.tag === "template" ? el.if && isLegacySyntax ? "(" + el.if + ")?" + (genChildren(el, state) || "undefined") + ":undefined" : genChildren(el, state) || "undefined" : genElement(el, state)) + "}";
          var reverseProxy = slotScope ? "" : ",proxy:true";
          return "{key:" + (el.slotTarget || '"default"') + ",fn:" + fn + reverseProxy + "}";
        }
        function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
          var children = el.children;
          if (children.length) {
            var el$1 = children[0];
            if (children.length === 1 && el$1.for && el$1.tag !== "template" && el$1.tag !== "slot") {
              var normalizationType = checkSkip ? state.maybeComponent(el$1) ? ",1" : ",0" : "";
              return "" + (altGenElement || genElement)(el$1, state) + normalizationType;
            }
            var normalizationType$1 = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
            var gen = altGenNode || genNode;
            return "[" + children.map(function(c) {
              return gen(c, state);
            }).join(",") + "]" + (normalizationType$1 ? "," + normalizationType$1 : "");
          }
        }
        function getNormalizationType(children, maybeComponent2) {
          var res = 0;
          for (var i = 0; i < children.length; i++) {
            var el = children[i];
            if (el.type !== 1) {
              continue;
            }
            if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function(c) {
              return needsNormalization(c.block);
            })) {
              res = 2;
              break;
            }
            if (maybeComponent2(el) || el.ifConditions && el.ifConditions.some(function(c) {
              return maybeComponent2(c.block);
            })) {
              res = 1;
            }
          }
          return res;
        }
        function needsNormalization(el) {
          return el.for !== void 0 || el.tag === "template" || el.tag === "slot";
        }
        function genNode(node, state) {
          if (node.type === 1) {
            return genElement(node, state);
          } else if (node.type === 3 && node.isComment) {
            return genComment(node);
          } else {
            return genText(node);
          }
        }
        function genText(text2) {
          return "_v(" + (text2.type === 2 ? text2.expression : transformSpecialNewlines(JSON.stringify(text2.text))) + ")";
        }
        function genComment(comment2) {
          return "_e(" + JSON.stringify(comment2.text) + ")";
        }
        function genSlot(el, state) {
          var slotName = el.slotName || '"default"';
          var children = genChildren(el, state);
          var res = "_t(" + slotName + (children ? ",function(){return " + children + "}" : "");
          var attrs2 = el.attrs || el.dynamicAttrs ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function(attr) {
            return {
              name: camelize(attr.name),
              value: attr.value,
              dynamic: attr.dynamic
            };
          })) : null;
          var bind$$1 = el.attrsMap["v-bind"];
          if ((attrs2 || bind$$1) && !children) {
            res += ",null";
          }
          if (attrs2) {
            res += "," + attrs2;
          }
          if (bind$$1) {
            res += (attrs2 ? "" : ",null") + "," + bind$$1;
          }
          return res + ")";
        }
        function genComponent(componentName, el, state) {
          var children = el.inlineTemplate ? null : genChildren(el, state, true);
          return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : "") + ")";
        }
        function genProps(props2) {
          var staticProps = "";
          var dynamicProps = "";
          for (var i = 0; i < props2.length; i++) {
            var prop = props2[i];
            var value = transformSpecialNewlines(prop.value);
            if (prop.dynamic) {
              dynamicProps += prop.name + "," + value + ",";
            } else {
              staticProps += '"' + prop.name + '":' + value + ",";
            }
          }
          staticProps = "{" + staticProps.slice(0, -1) + "}";
          if (dynamicProps) {
            return "_d(" + staticProps + ",[" + dynamicProps.slice(0, -1) + "])";
          } else {
            return staticProps;
          }
        }
        function transformSpecialNewlines(text2) {
          return text2.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        var prohibitedKeywordRE = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
        var unaryOperatorsRE = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
        var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
        function detectErrors(ast, warn2) {
          if (ast) {
            checkNode(ast, warn2);
          }
        }
        function checkNode(node, warn2) {
          if (node.type === 1) {
            for (var name in node.attrsMap) {
              if (dirRE.test(name)) {
                var value = node.attrsMap[name];
                if (value) {
                  var range2 = node.rawAttrsMap[name];
                  if (name === "v-for") {
                    checkFor(node, 'v-for="' + value + '"', warn2, range2);
                  } else if (name === "v-slot" || name[0] === "#") {
                    checkFunctionParameterExpression(value, name + '="' + value + '"', warn2, range2);
                  } else if (onRE.test(name)) {
                    checkEvent(value, name + '="' + value + '"', warn2, range2);
                  } else {
                    checkExpression(value, name + '="' + value + '"', warn2, range2);
                  }
                }
              }
            }
            if (node.children) {
              for (var i = 0; i < node.children.length; i++) {
                checkNode(node.children[i], warn2);
              }
            }
          } else if (node.type === 2) {
            checkExpression(node.expression, node.text, warn2, node);
          }
        }
        function checkEvent(exp, text2, warn2, range2) {
          var stripped = exp.replace(stripStringRE, "");
          var keywordMatch = stripped.match(unaryOperatorsRE);
          if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== "$") {
            warn2('avoid using JavaScript unary operator as property name: "' + keywordMatch[0] + '" in expression ' + text2.trim(), range2);
          }
          checkExpression(exp, text2, warn2, range2);
        }
        function checkFor(node, text2, warn2, range2) {
          checkExpression(node.for || "", text2, warn2, range2);
          checkIdentifier(node.alias, "v-for alias", text2, warn2, range2);
          checkIdentifier(node.iterator1, "v-for iterator", text2, warn2, range2);
          checkIdentifier(node.iterator2, "v-for iterator", text2, warn2, range2);
        }
        function checkIdentifier(ident, type, text2, warn2, range2) {
          if (typeof ident === "string") {
            try {
              new Function("var " + ident + "=_");
            } catch (e) {
              warn2("invalid " + type + ' "' + ident + '" in expression: ' + text2.trim(), range2);
            }
          }
        }
        function checkExpression(exp, text2, warn2, range2) {
          try {
            new Function("return " + exp);
          } catch (e) {
            var keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
            if (keywordMatch) {
              warn2('avoid using JavaScript keyword as property name: "' + keywordMatch[0] + '"\n  Raw expression: ' + text2.trim(), range2);
            } else {
              warn2("invalid expression: " + e.message + " in\n\n    " + exp + "\n\n  Raw expression: " + text2.trim() + "\n", range2);
            }
          }
        }
        function checkFunctionParameterExpression(exp, text2, warn2, range2) {
          try {
            new Function(exp, "");
          } catch (e) {
            warn2("invalid function parameter expression: " + e.message + " in\n\n    " + exp + "\n\n  Raw expression: " + text2.trim() + "\n", range2);
          }
        }
        var range = 2;
        function generateCodeFrame(source, start, end) {
          if (start === void 0)
            start = 0;
          if (end === void 0)
            end = source.length;
          var lines = source.split(/\r?\n/);
          var count = 0;
          var res = [];
          for (var i = 0; i < lines.length; i++) {
            count += lines[i].length + 1;
            if (count >= start) {
              for (var j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length) {
                  continue;
                }
                res.push("" + (j + 1) + repeat$1(" ", 3 - String(j + 1).length) + "|  " + lines[j]);
                var lineLength = lines[j].length;
                if (j === i) {
                  var pad = start - (count - lineLength) + 1;
                  var length = end > count ? lineLength - pad : end - start;
                  res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
                } else if (j > i) {
                  if (end > count) {
                    var length$1 = Math.min(end - count, lineLength);
                    res.push("   |  " + repeat$1("^", length$1));
                  }
                  count += lineLength + 1;
                }
              }
              break;
            }
          }
          return res.join("\n");
        }
        function repeat$1(str2, n) {
          var result = "";
          if (n > 0) {
            while (true) {
              if (n & 1) {
                result += str2;
              }
              n >>>= 1;
              if (n <= 0) {
                break;
              }
              str2 += str2;
            }
          }
          return result;
        }
        function createFunction(code, errors) {
          try {
            return new Function(code);
          } catch (err) {
            errors.push({ err, code });
            return noop;
          }
        }
        function createCompileToFunctionFn(compile2) {
          var cache = /* @__PURE__ */ Object.create(null);
          return function compileToFunctions2(template, options, vm) {
            options = extend({}, options);
            var warn$$1 = options.warn || warn;
            delete options.warn;
            {
              try {
                new Function("return 1");
              } catch (e) {
                if (e.toString().match(/unsafe-eval|CSP/)) {
                  warn$$1("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.");
                }
              }
            }
            var key = options.delimiters ? String(options.delimiters) + template : template;
            if (cache[key]) {
              return cache[key];
            }
            var compiled = compile2(template, options);
            {
              if (compiled.errors && compiled.errors.length) {
                if (options.outputSourceRange) {
                  compiled.errors.forEach(function(e) {
                    warn$$1("Error compiling template:\n\n" + e.msg + "\n\n" + generateCodeFrame(template, e.start, e.end), vm);
                  });
                } else {
                  warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function(e) {
                    return "- " + e;
                  }).join("\n") + "\n", vm);
                }
              }
              if (compiled.tips && compiled.tips.length) {
                if (options.outputSourceRange) {
                  compiled.tips.forEach(function(e) {
                    return tip(e.msg, vm);
                  });
                } else {
                  compiled.tips.forEach(function(msg) {
                    return tip(msg, vm);
                  });
                }
              }
            }
            var res = {};
            var fnGenErrors = [];
            res.render = createFunction(compiled.render, fnGenErrors);
            res.staticRenderFns = compiled.staticRenderFns.map(function(code) {
              return createFunction(code, fnGenErrors);
            });
            {
              if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
                warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function(ref2) {
                  var err = ref2.err;
                  var code = ref2.code;
                  return err.toString() + " in\n\n" + code + "\n";
                }).join("\n"), vm);
              }
            }
            return cache[key] = res;
          };
        }
        function createCompilerCreator(baseCompile) {
          return function createCompiler2(baseOptions2) {
            function compile2(template, options) {
              var finalOptions = Object.create(baseOptions2);
              var errors = [];
              var tips = [];
              var warn2 = function(msg, range2, tip2) {
                (tip2 ? tips : errors).push(msg);
              };
              if (options) {
                if (options.outputSourceRange) {
                  var leadingSpaceLength = template.match(/^\s*/)[0].length;
                  warn2 = function(msg, range2, tip2) {
                    var data = { msg };
                    if (range2) {
                      if (range2.start != null) {
                        data.start = range2.start + leadingSpaceLength;
                      }
                      if (range2.end != null) {
                        data.end = range2.end + leadingSpaceLength;
                      }
                    }
                    (tip2 ? tips : errors).push(data);
                  };
                }
                if (options.modules) {
                  finalOptions.modules = (baseOptions2.modules || []).concat(options.modules);
                }
                if (options.directives) {
                  finalOptions.directives = extend(Object.create(baseOptions2.directives || null), options.directives);
                }
                for (var key in options) {
                  if (key !== "modules" && key !== "directives") {
                    finalOptions[key] = options[key];
                  }
                }
              }
              finalOptions.warn = warn2;
              var compiled = baseCompile(template.trim(), finalOptions);
              {
                detectErrors(compiled.ast, warn2);
              }
              compiled.errors = errors;
              compiled.tips = tips;
              return compiled;
            }
            return {
              compile: compile2,
              compileToFunctions: createCompileToFunctionFn(compile2)
            };
          };
        }
        var createCompiler = createCompilerCreator(function baseCompile(template, options) {
          var ast = parse(template.trim(), options);
          if (options.optimize !== false) {
            optimize(ast, options);
          }
          var code = generate(ast, options);
          return {
            ast,
            render: code.render,
            staticRenderFns: code.staticRenderFns
          };
        });
        var ref$1 = createCompiler(baseOptions);
        var compile = ref$1.compile;
        var compileToFunctions = ref$1.compileToFunctions;
        var div;
        function getShouldDecode(href) {
          div = div || document.createElement("div");
          div.innerHTML = href ? '<a href="\n"/>' : '<div a="\n"/>';
          return div.innerHTML.indexOf("&#10;") > 0;
        }
        var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
        var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
        var idToTemplate = cached(function(id) {
          var el = query(id);
          return el && el.innerHTML;
        });
        var mount = Vue2.prototype.$mount;
        Vue2.prototype.$mount = function(el, hydrating) {
          el = el && query(el);
          if (el === document.body || el === document.documentElement) {
            warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
            return this;
          }
          var options = this.$options;
          if (!options.render) {
            var template = options.template;
            if (template) {
              if (typeof template === "string") {
                if (template.charAt(0) === "#") {
                  template = idToTemplate(template);
                  if (!template) {
                    warn("Template element not found or is empty: " + options.template, this);
                  }
                }
              } else if (template.nodeType) {
                template = template.innerHTML;
              } else {
                {
                  warn("invalid template option:" + template, this);
                }
                return this;
              }
            } else if (el) {
              template = getOuterHTML(el);
            }
            if (template) {
              if (config.performance && mark) {
                mark("compile");
              }
              var ref2 = compileToFunctions(template, {
                outputSourceRange: true,
                shouldDecodeNewlines,
                shouldDecodeNewlinesForHref,
                delimiters: options.delimiters,
                comments: options.comments
              }, this);
              var render = ref2.render;
              var staticRenderFns = ref2.staticRenderFns;
              options.render = render;
              options.staticRenderFns = staticRenderFns;
              if (config.performance && mark) {
                mark("compile end");
                measure("vue " + this._name + " compile", "compile", "compile end");
              }
            }
          }
          return mount.call(this, el, hydrating);
        };
        function getOuterHTML(el) {
          if (el.outerHTML) {
            return el.outerHTML;
          } else {
            var container = document.createElement("div");
            container.appendChild(el.cloneNode(true));
            return container.innerHTML;
          }
        }
        Vue2.compile = compileToFunctions;
        return Vue2;
      });
    }
  });

  // node_modules/vue-sweetalert2/dist/vue-sweetalert.umd.js
  var require_vue_sweetalert_umd = __commonJS({
    "node_modules/vue-sweetalert2/dist/vue-sweetalert.umd.js"(exports, module) {
      !function(t, e) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis != "undefined" ? globalThis : t || self).vueSweetalert = e();
      }(exports, function() {
        "use strict";
        var t = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, e = { exports: {} };
        e.exports = function() {
          const t2 = Object.freeze({ cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer" }), e2 = (t3) => {
            const e3 = [];
            for (let n3 = 0; n3 < t3.length; n3++)
              e3.indexOf(t3[n3]) === -1 && e3.push(t3[n3]);
            return e3;
          }, n2 = (t3) => t3.charAt(0).toUpperCase() + t3.slice(1), o = (t3) => Array.prototype.slice.call(t3), i = (t3) => {
          }, s = (t3) => {
          }, a = [], r = (t3) => {
            a.includes(t3) || (a.push(t3), i(t3));
          }, c = (t3, e3) => {
            r('"'.concat(t3, '" is deprecated and will be removed in the next major release. Please use "').concat(e3, '" instead.'));
          }, l = (t3) => typeof t3 == "function" ? t3() : t3, u = (t3) => t3 && typeof t3.toPromise == "function", d = (t3) => u(t3) ? t3.toPromise() : Promise.resolve(t3), p = (t3) => t3 && Promise.resolve(t3) === t3, m = (t3) => typeof t3 == "object" && t3.jquery, g = (t3) => t3 instanceof Element || m(t3), h = (t3) => {
            const e3 = {};
            return typeof t3[0] != "object" || g(t3[0]) ? ["title", "html", "icon"].forEach((n3, o2) => {
              const i2 = t3[o2];
              typeof i2 == "string" || g(i2) ? e3[n3] = i2 : i2 !== void 0 && s("Unexpected type of ".concat(n3, '! Expected "string" or "Element", got ').concat(typeof i2));
            }) : Object.assign(e3, t3[0]), e3;
          }, f = "swal2-", b = (t3) => {
            const e3 = {};
            for (const n3 in t3)
              e3[t3[n3]] = f + t3[n3];
            return e3;
          }, y = b(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]), w = b(["success", "warning", "info", "question", "error"]), v = () => document.body.querySelector(".".concat(y.container)), C = (t3) => {
            const e3 = v();
            return e3 ? e3.querySelector(t3) : null;
          }, k = (t3) => C(".".concat(t3)), A = () => k(y.popup), B = () => k(y.icon), x = () => k(y.title), P = () => k(y["html-container"]), E = () => k(y.image), S = () => k(y["progress-steps"]), T = () => k(y["validation-message"]), O = () => C(".".concat(y.actions, " .").concat(y.confirm)), L = () => C(".".concat(y.actions, " .").concat(y.deny)), j = () => k(y["input-label"]), M = () => C(".".concat(y.loader)), D = () => C(".".concat(y.actions, " .").concat(y.cancel)), I = () => k(y.actions), H = () => k(y.footer), q = () => k(y["timer-progress-bar"]), V = () => k(y.close), N = '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n', U = () => {
            const t3 = o(A().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((t4, e3) => (t4 = parseInt(t4.getAttribute("tabindex"))) > (e3 = parseInt(e3.getAttribute("tabindex"))) ? 1 : t4 < e3 ? -1 : 0), n3 = o(A().querySelectorAll(N)).filter((t4) => t4.getAttribute("tabindex") !== "-1");
            return e2(t3.concat(n3)).filter((t4) => at(t4));
          }, F = () => !R() && !document.body.classList.contains(y["no-backdrop"]), R = () => document.body.classList.contains(y["toast-shown"]), z = () => A().hasAttribute("data-loading"), W = { previousBodyPadding: null }, _ = (t3, e3) => {
            if (t3.textContent = "", e3) {
              const n3 = new DOMParser().parseFromString(e3, "text/html");
              o(n3.querySelector("head").childNodes).forEach((e4) => {
                t3.appendChild(e4);
              }), o(n3.querySelector("body").childNodes).forEach((e4) => {
                t3.appendChild(e4);
              });
            }
          }, K = (t3, e3) => {
            if (!e3)
              return false;
            const n3 = e3.split(/\s+/);
            for (let o2 = 0; o2 < n3.length; o2++)
              if (!t3.classList.contains(n3[o2]))
                return false;
            return true;
          }, Y = (t3, e3) => {
            o(t3.classList).forEach((n3) => {
              Object.values(y).includes(n3) || Object.values(w).includes(n3) || Object.values(e3.showClass).includes(n3) || t3.classList.remove(n3);
            });
          }, $2 = (t3, e3, n3) => {
            if (Y(t3, e3), e3.customClass && e3.customClass[n3]) {
              if (typeof e3.customClass[n3] != "string" && !e3.customClass[n3].forEach)
                return i("Invalid type of customClass.".concat(n3, '! Expected string or iterable object, got "').concat(typeof e3.customClass[n3], '"'));
              G(t3, e3.customClass[n3]);
            }
          }, Z = (t3, e3) => {
            if (!e3)
              return null;
            switch (e3) {
              case "select":
              case "textarea":
              case "file":
                return tt(t3, y[e3]);
              case "checkbox":
                return t3.querySelector(".".concat(y.checkbox, " input"));
              case "radio":
                return t3.querySelector(".".concat(y.radio, " input:checked")) || t3.querySelector(".".concat(y.radio, " input:first-child"));
              case "range":
                return t3.querySelector(".".concat(y.range, " input"));
              default:
                return tt(t3, y.input);
            }
          }, J = (t3) => {
            if (t3.focus(), t3.type !== "file") {
              const e3 = t3.value;
              t3.value = "", t3.value = e3;
            }
          }, X = (t3, e3, n3) => {
            t3 && e3 && (typeof e3 == "string" && (e3 = e3.split(/\s+/).filter(Boolean)), e3.forEach((e4) => {
              t3.forEach ? t3.forEach((t4) => {
                n3 ? t4.classList.add(e4) : t4.classList.remove(e4);
              }) : n3 ? t3.classList.add(e4) : t3.classList.remove(e4);
            }));
          }, G = (t3, e3) => {
            X(t3, e3, true);
          }, Q = (t3, e3) => {
            X(t3, e3, false);
          }, tt = (t3, e3) => {
            for (let n3 = 0; n3 < t3.childNodes.length; n3++)
              if (K(t3.childNodes[n3], e3))
                return t3.childNodes[n3];
          }, et = (t3, e3, n3) => {
            n3 === "".concat(parseInt(n3)) && (n3 = parseInt(n3)), n3 || parseInt(n3) === 0 ? t3.style[e3] = typeof n3 == "number" ? "".concat(n3, "px") : n3 : t3.style.removeProperty(e3);
          }, nt = (t3, e3 = "flex") => {
            t3.style.display = e3;
          }, ot = (t3) => {
            t3.style.display = "none";
          }, it = (t3, e3, n3, o2) => {
            const i2 = t3.querySelector(e3);
            i2 && (i2.style[n3] = o2);
          }, st = (t3, e3, n3) => {
            e3 ? nt(t3, n3) : ot(t3);
          }, at = (t3) => !(!t3 || !(t3.offsetWidth || t3.offsetHeight || t3.getClientRects().length)), rt = () => !at(O()) && !at(L()) && !at(D()), ct = (t3) => !!(t3.scrollHeight > t3.clientHeight), lt = (t3) => {
            const e3 = window.getComputedStyle(t3), n3 = parseFloat(e3.getPropertyValue("animation-duration") || "0"), o2 = parseFloat(e3.getPropertyValue("transition-duration") || "0");
            return n3 > 0 || o2 > 0;
          }, ut = (t3, e3 = false) => {
            const n3 = q();
            at(n3) && (e3 && (n3.style.transition = "none", n3.style.width = "100%"), setTimeout(() => {
              n3.style.transition = "width ".concat(t3 / 1e3, "s linear"), n3.style.width = "0%";
            }, 10));
          }, dt = () => {
            const t3 = q(), e3 = parseInt(window.getComputedStyle(t3).width);
            t3.style.removeProperty("transition"), t3.style.width = "100%";
            const n3 = parseInt(window.getComputedStyle(t3).width), o2 = parseInt(e3 / n3 * 100);
            t3.style.removeProperty("transition"), t3.style.width = "".concat(o2, "%");
          }, pt = () => typeof window == "undefined" || typeof document == "undefined", mt = '\n <div aria-labelledby="'.concat(y.title, '" aria-describedby="').concat(y["html-container"], '" class="').concat(y.popup, '" tabindex="-1">\n   <button type="button" class="').concat(y.close, '"></button>\n   <ul class="').concat(y["progress-steps"], '"></ul>\n   <div class="').concat(y.icon, '"></div>\n   <img class="').concat(y.image, '" />\n   <h2 class="').concat(y.title, '" id="').concat(y.title, '"></h2>\n   <div class="').concat(y["html-container"], '" id="').concat(y["html-container"], '"></div>\n   <input class="').concat(y.input, '" />\n   <input type="file" class="').concat(y.file, '" />\n   <div class="').concat(y.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(y.select, '"></select>\n   <div class="').concat(y.radio, '"></div>\n   <label for="').concat(y.checkbox, '" class="').concat(y.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(y.label, '"></span>\n   </label>\n   <textarea class="').concat(y.textarea, '"></textarea>\n   <div class="').concat(y["validation-message"], '" id="').concat(y["validation-message"], '"></div>\n   <div class="').concat(y.actions, '">\n     <div class="').concat(y.loader, '"></div>\n     <button type="button" class="').concat(y.confirm, '"></button>\n     <button type="button" class="').concat(y.deny, '"></button>\n     <button type="button" class="').concat(y.cancel, '"></button>\n   </div>\n   <div class="').concat(y.footer, '"></div>\n   <div class="').concat(y["timer-progress-bar-container"], '">\n     <div class="').concat(y["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""), gt = () => {
            const t3 = v();
            return !!t3 && (t3.remove(), Q([document.documentElement, document.body], [y["no-backdrop"], y["toast-shown"], y["has-column"]]), true);
          }, ht = () => {
            Io.isVisible() && Io.resetValidationMessage();
          }, ft = () => {
            const t3 = A(), e3 = tt(t3, y.input), n3 = tt(t3, y.file), o2 = t3.querySelector(".".concat(y.range, " input")), i2 = t3.querySelector(".".concat(y.range, " output")), s2 = tt(t3, y.select), a2 = t3.querySelector(".".concat(y.checkbox, " input")), r2 = tt(t3, y.textarea);
            e3.oninput = ht, n3.onchange = ht, s2.onchange = ht, a2.onchange = ht, r2.oninput = ht, o2.oninput = () => {
              ht(), i2.value = o2.value;
            }, o2.onchange = () => {
              ht(), o2.nextSibling.value = o2.value;
            };
          }, bt = (t3) => typeof t3 == "string" ? document.querySelector(t3) : t3, yt = (t3) => {
            const e3 = A();
            e3.setAttribute("role", t3.toast ? "alert" : "dialog"), e3.setAttribute("aria-live", t3.toast ? "polite" : "assertive"), t3.toast || e3.setAttribute("aria-modal", "true");
          }, wt = (t3) => {
            window.getComputedStyle(t3).direction === "rtl" && G(v(), y.rtl);
          }, vt = (t3) => {
            const e3 = gt();
            if (pt())
              return void s("SweetAlert2 requires document to initialize");
            const n3 = document.createElement("div");
            n3.className = y.container, e3 && G(n3, y["no-transition"]), _(n3, mt);
            const o2 = bt(t3.target);
            o2.appendChild(n3), yt(t3), wt(o2), ft();
          }, Ct = (t3, e3) => {
            t3 instanceof HTMLElement ? e3.appendChild(t3) : typeof t3 == "object" ? kt(t3, e3) : t3 && _(e3, t3);
          }, kt = (t3, e3) => {
            t3.jquery ? At(e3, t3) : _(e3, t3.toString());
          }, At = (t3, e3) => {
            if (t3.textContent = "", 0 in e3)
              for (let n3 = 0; n3 in e3; n3++)
                t3.appendChild(e3[n3].cloneNode(true));
            else
              t3.appendChild(e3.cloneNode(true));
          }, Bt = (() => {
            if (pt())
              return false;
            const t3 = document.createElement("div"), e3 = { WebkitAnimation: "webkitAnimationEnd", OAnimation: "oAnimationEnd oanimationend", animation: "animationend" };
            for (const n3 in e3)
              if (Object.prototype.hasOwnProperty.call(e3, n3) && t3.style[n3] !== void 0)
                return e3[n3];
            return false;
          })(), xt = () => {
            const t3 = document.createElement("div");
            t3.className = y["scrollbar-measure"], document.body.appendChild(t3);
            const e3 = t3.getBoundingClientRect().width - t3.clientWidth;
            return document.body.removeChild(t3), e3;
          }, Pt = (t3, e3) => {
            const n3 = I(), o2 = M(), i2 = O(), s2 = L(), a2 = D();
            e3.showConfirmButton || e3.showDenyButton || e3.showCancelButton || ot(n3), $2(n3, e3, "actions"), St(i2, "confirm", e3), St(s2, "deny", e3), St(a2, "cancel", e3), Et(i2, s2, a2, e3), e3.reverseButtons && (n3.insertBefore(a2, o2), n3.insertBefore(s2, o2), n3.insertBefore(i2, o2)), _(o2, e3.loaderHtml), $2(o2, e3, "loader");
          };
          function Et(t3, e3, n3, o2) {
            if (!o2.buttonsStyling)
              return Q([t3, e3, n3], y.styled);
            G([t3, e3, n3], y.styled), o2.confirmButtonColor && (t3.style.backgroundColor = o2.confirmButtonColor, G(t3, y["default-outline"])), o2.denyButtonColor && (e3.style.backgroundColor = o2.denyButtonColor, G(e3, y["default-outline"])), o2.cancelButtonColor && (n3.style.backgroundColor = o2.cancelButtonColor, G(n3, y["default-outline"]));
          }
          function St(t3, e3, o2) {
            st(t3, o2["show".concat(n2(e3), "Button")], "inline-block"), _(t3, o2["".concat(e3, "ButtonText")]), t3.setAttribute("aria-label", o2["".concat(e3, "ButtonAriaLabel")]), t3.className = y[e3], $2(t3, o2, "".concat(e3, "Button")), G(t3, o2["".concat(e3, "ButtonClass")]);
          }
          function Tt(t3, e3) {
            typeof e3 == "string" ? t3.style.background = e3 : e3 || G([document.documentElement, document.body], y["no-backdrop"]);
          }
          function Ot(t3, e3) {
            e3 in y ? G(t3, y[e3]) : (i('The "position" parameter is not valid, defaulting to "center"'), G(t3, y.center));
          }
          function Lt(t3, e3) {
            if (e3 && typeof e3 == "string") {
              const n3 = "grow-".concat(e3);
              n3 in y && G(t3, y[n3]);
            }
          }
          const jt = (t3, e3) => {
            const n3 = v();
            n3 && (Tt(n3, e3.backdrop), Ot(n3, e3.position), Lt(n3, e3.grow), $2(n3, e3, "container"));
          };
          var Mt = { promise: /* @__PURE__ */ new WeakMap(), innerParams: /* @__PURE__ */ new WeakMap(), domCache: /* @__PURE__ */ new WeakMap() };
          const Dt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], It = (t3, e3) => {
            const n3 = A(), o2 = Mt.innerParams.get(t3), i2 = !o2 || e3.input !== o2.input;
            Dt.forEach((t4) => {
              const o3 = y[t4], s2 = tt(n3, o3);
              Vt(t4, e3.inputAttributes), s2.className = o3, i2 && ot(s2);
            }), e3.input && (i2 && Ht(e3), Nt(e3));
          }, Ht = (t3) => {
            if (!zt[t3.input])
              return s('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t3.input, '"'));
            const e3 = Rt(t3.input), n3 = zt[t3.input](e3, t3);
            nt(n3), setTimeout(() => {
              J(n3);
            });
          }, qt = (t3) => {
            for (let e3 = 0; e3 < t3.attributes.length; e3++) {
              const n3 = t3.attributes[e3].name;
              ["type", "value", "style"].includes(n3) || t3.removeAttribute(n3);
            }
          }, Vt = (t3, e3) => {
            const n3 = Z(A(), t3);
            if (n3) {
              qt(n3);
              for (const t4 in e3)
                n3.setAttribute(t4, e3[t4]);
            }
          }, Nt = (t3) => {
            const e3 = Rt(t3.input);
            t3.customClass && G(e3, t3.customClass.input);
          }, Ut = (t3, e3) => {
            t3.placeholder && !e3.inputPlaceholder || (t3.placeholder = e3.inputPlaceholder);
          }, Ft = (t3, e3, n3) => {
            if (n3.inputLabel) {
              t3.id = y.input;
              const o2 = document.createElement("label"), i2 = y["input-label"];
              o2.setAttribute("for", t3.id), o2.className = i2, G(o2, n3.customClass.inputLabel), o2.innerText = n3.inputLabel, e3.insertAdjacentElement("beforebegin", o2);
            }
          }, Rt = (t3) => {
            const e3 = y[t3] ? y[t3] : y.input;
            return tt(A(), e3);
          }, zt = {};
          zt.text = zt.email = zt.password = zt.number = zt.tel = zt.url = (t3, e3) => (typeof e3.inputValue == "string" || typeof e3.inputValue == "number" ? t3.value = e3.inputValue : p(e3.inputValue) || i('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof e3.inputValue, '"')), Ft(t3, t3, e3), Ut(t3, e3), t3.type = e3.input, t3), zt.file = (t3, e3) => (Ft(t3, t3, e3), Ut(t3, e3), t3), zt.range = (t3, e3) => {
            const n3 = t3.querySelector("input"), o2 = t3.querySelector("output");
            return n3.value = e3.inputValue, n3.type = e3.input, o2.value = e3.inputValue, Ft(n3, t3, e3), t3;
          }, zt.select = (t3, e3) => {
            if (t3.textContent = "", e3.inputPlaceholder) {
              const n3 = document.createElement("option");
              _(n3, e3.inputPlaceholder), n3.value = "", n3.disabled = true, n3.selected = true, t3.appendChild(n3);
            }
            return Ft(t3, t3, e3), t3;
          }, zt.radio = (t3) => (t3.textContent = "", t3), zt.checkbox = (t3, e3) => {
            const n3 = Z(A(), "checkbox");
            n3.value = 1, n3.id = y.checkbox, n3.checked = Boolean(e3.inputValue);
            const o2 = t3.querySelector("span");
            return _(o2, e3.inputPlaceholder), t3;
          }, zt.textarea = (t3, e3) => {
            t3.value = e3.inputValue, Ut(t3, e3), Ft(t3, t3, e3);
            const n3 = (t4) => parseInt(window.getComputedStyle(t4).marginLeft) + parseInt(window.getComputedStyle(t4).marginRight);
            if ("MutationObserver" in window) {
              const e4 = parseInt(window.getComputedStyle(A()).width);
              new MutationObserver(() => {
                const o2 = t3.offsetWidth + n3(t3);
                A().style.width = o2 > e4 ? "".concat(o2, "px") : null;
              }).observe(t3, { attributes: true, attributeFilter: ["style"] });
            }
            return t3;
          };
          const Wt = (t3, e3) => {
            const n3 = P();
            $2(n3, e3, "htmlContainer"), e3.html ? (Ct(e3.html, n3), nt(n3, "block")) : e3.text ? (n3.textContent = e3.text, nt(n3, "block")) : ot(n3), It(t3, e3);
          }, _t = (t3, e3) => {
            const n3 = H();
            st(n3, e3.footer), e3.footer && Ct(e3.footer, n3), $2(n3, e3, "footer");
          }, Kt = (t3, e3) => {
            const n3 = V();
            _(n3, e3.closeButtonHtml), $2(n3, e3, "closeButton"), st(n3, e3.showCloseButton), n3.setAttribute("aria-label", e3.closeButtonAriaLabel);
          }, Yt = (t3, e3) => {
            const n3 = Mt.innerParams.get(t3), o2 = B();
            return n3 && e3.icon === n3.icon ? (Jt(o2, e3), void $t(o2, e3)) : e3.icon || e3.iconHtml ? e3.icon && Object.keys(w).indexOf(e3.icon) === -1 ? (s('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e3.icon, '"')), ot(o2)) : (nt(o2), Jt(o2, e3), $t(o2, e3), void G(o2, e3.showClass.icon)) : ot(o2);
          }, $t = (t3, e3) => {
            for (const n3 in w)
              e3.icon !== n3 && Q(t3, w[n3]);
            G(t3, w[e3.icon]), Xt(t3, e3), Zt(), $2(t3, e3, "icon");
          }, Zt = () => {
            const t3 = A(), e3 = window.getComputedStyle(t3).getPropertyValue("background-color"), n3 = t3.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
            for (let o2 = 0; o2 < n3.length; o2++)
              n3[o2].style.backgroundColor = e3;
          }, Jt = (t3, e3) => {
            t3.textContent = "", e3.iconHtml ? _(t3, Gt(e3.iconHtml)) : e3.icon === "success" ? _(t3, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : e3.icon === "error" ? _(t3, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : _(t3, Gt({ question: "?", warning: "!", info: "i" }[e3.icon]));
          }, Xt = (t3, e3) => {
            if (e3.iconColor) {
              t3.style.color = e3.iconColor, t3.style.borderColor = e3.iconColor;
              for (const n3 of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"])
                it(t3, n3, "backgroundColor", e3.iconColor);
              it(t3, ".swal2-success-ring", "borderColor", e3.iconColor);
            }
          }, Gt = (t3) => '<div class="'.concat(y["icon-content"], '">').concat(t3, "</div>"), Qt = (t3, e3) => {
            const n3 = E();
            if (!e3.imageUrl)
              return ot(n3);
            nt(n3, ""), n3.setAttribute("src", e3.imageUrl), n3.setAttribute("alt", e3.imageAlt), et(n3, "width", e3.imageWidth), et(n3, "height", e3.imageHeight), n3.className = y.image, $2(n3, e3, "image");
          }, te = (t3) => {
            const e3 = document.createElement("li");
            return G(e3, y["progress-step"]), _(e3, t3), e3;
          }, ee = (t3) => {
            const e3 = document.createElement("li");
            return G(e3, y["progress-step-line"]), t3.progressStepsDistance && (e3.style.width = t3.progressStepsDistance), e3;
          }, ne = (t3, e3) => {
            const n3 = S();
            if (!e3.progressSteps || e3.progressSteps.length === 0)
              return ot(n3);
            nt(n3), n3.textContent = "", e3.currentProgressStep >= e3.progressSteps.length && i("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), e3.progressSteps.forEach((t4, o2) => {
              const i2 = te(t4);
              if (n3.appendChild(i2), o2 === e3.currentProgressStep && G(i2, y["active-progress-step"]), o2 !== e3.progressSteps.length - 1) {
                const t5 = ee(e3);
                n3.appendChild(t5);
              }
            });
          }, oe = (t3, e3) => {
            const n3 = x();
            st(n3, e3.title || e3.titleText, "block"), e3.title && Ct(e3.title, n3), e3.titleText && (n3.innerText = e3.titleText), $2(n3, e3, "title");
          }, ie = (t3, e3) => {
            const n3 = v(), o2 = A();
            e3.toast ? (et(n3, "width", e3.width), o2.style.width = "100%", o2.insertBefore(M(), B())) : et(o2, "width", e3.width), et(o2, "padding", e3.padding), e3.background && (o2.style.background = e3.background), ot(T()), se(o2, e3);
          }, se = (t3, e3) => {
            t3.className = "".concat(y.popup, " ").concat(at(t3) ? e3.showClass.popup : ""), e3.toast ? (G([document.documentElement, document.body], y["toast-shown"]), G(t3, y.toast)) : G(t3, y.modal), $2(t3, e3, "popup"), typeof e3.customClass == "string" && G(t3, e3.customClass), e3.icon && G(t3, y["icon-".concat(e3.icon)]);
          }, ae = (t3, e3) => {
            ie(t3, e3), jt(t3, e3), ne(t3, e3), Yt(t3, e3), Qt(t3, e3), oe(t3, e3), Kt(t3, e3), Wt(t3, e3), Pt(t3, e3), _t(t3, e3), typeof e3.didRender == "function" && e3.didRender(A());
          }, re = () => at(A()), ce = () => O() && O().click(), le = () => L() && L().click(), ue = () => D() && D().click();
          function de(...t3) {
            return new this(...t3);
          }
          function pe(t3) {
            class e3 extends this {
              _main(e4, n3) {
                return super._main(e4, Object.assign({}, t3, n3));
              }
            }
            return e3;
          }
          const me = (t3) => {
            let e3 = A();
            e3 || Io.fire(), e3 = A();
            const n3 = M();
            R() ? ot(B()) : ge(e3, t3), nt(n3), e3.setAttribute("data-loading", true), e3.setAttribute("aria-busy", true), e3.focus();
          }, ge = (t3, e3) => {
            const n3 = I(), o2 = M();
            !e3 && at(O()) && (e3 = O()), nt(n3), e3 && (ot(e3), o2.setAttribute("data-button-to-replace", e3.className)), o2.parentNode.insertBefore(o2, e3), G([t3, n3], y.loading);
          }, he = 100, fe = {}, be = () => {
            fe.previousActiveElement && fe.previousActiveElement.focus ? (fe.previousActiveElement.focus(), fe.previousActiveElement = null) : document.body && document.body.focus();
          }, ye = (t3) => new Promise((e3) => {
            if (!t3)
              return e3();
            const n3 = window.scrollX, o2 = window.scrollY;
            fe.restoreFocusTimeout = setTimeout(() => {
              be(), e3();
            }, he), window.scrollTo(n3, o2);
          }), we = () => fe.timeout && fe.timeout.getTimerLeft(), ve = () => {
            if (fe.timeout)
              return dt(), fe.timeout.stop();
          }, Ce = () => {
            if (fe.timeout) {
              const t3 = fe.timeout.start();
              return ut(t3), t3;
            }
          }, ke = () => {
            const t3 = fe.timeout;
            return t3 && (t3.running ? ve() : Ce());
          }, Ae = (t3) => {
            if (fe.timeout) {
              const e3 = fe.timeout.increase(t3);
              return ut(e3, true), e3;
            }
          }, Be = () => fe.timeout && fe.timeout.isRunning();
          let xe = false;
          const Pe = {};
          function Ee(t3 = "data-swal-template") {
            Pe[t3] = this, xe || (document.body.addEventListener("click", Se), xe = true);
          }
          const Se = (t3) => {
            for (let e3 = t3.target; e3 && e3 !== document; e3 = e3.parentNode)
              for (const t4 in Pe) {
                const n3 = e3.getAttribute(t4);
                if (n3)
                  return void Pe[t4].fire({ template: n3 });
              }
          }, Te = { title: "", titleText: "", text: "", html: "", footer: "", icon: void 0, iconColor: void 0, iconHtml: void 0, template: void 0, toast: false, showClass: { popup: "swal2-show", backdrop: "swal2-backdrop-show", icon: "swal2-icon-show" }, hideClass: { popup: "swal2-hide", backdrop: "swal2-backdrop-hide", icon: "swal2-icon-hide" }, customClass: {}, target: "body", backdrop: true, heightAuto: true, allowOutsideClick: true, allowEscapeKey: true, allowEnterKey: true, stopKeydownPropagation: true, keydownListenerCapture: false, showConfirmButton: true, showDenyButton: false, showCancelButton: false, preConfirm: void 0, preDeny: void 0, confirmButtonText: "OK", confirmButtonAriaLabel: "", confirmButtonColor: void 0, denyButtonText: "No", denyButtonAriaLabel: "", denyButtonColor: void 0, cancelButtonText: "Cancel", cancelButtonAriaLabel: "", cancelButtonColor: void 0, buttonsStyling: true, reverseButtons: false, focusConfirm: true, focusDeny: false, focusCancel: false, returnFocus: true, showCloseButton: false, closeButtonHtml: "&times;", closeButtonAriaLabel: "Close this dialog", loaderHtml: "", showLoaderOnConfirm: false, showLoaderOnDeny: false, imageUrl: void 0, imageWidth: void 0, imageHeight: void 0, imageAlt: "", timer: void 0, timerProgressBar: false, width: void 0, padding: void 0, background: void 0, input: void 0, inputPlaceholder: "", inputLabel: "", inputValue: "", inputOptions: {}, inputAutoTrim: true, inputAttributes: {}, inputValidator: void 0, returnInputValueOnDeny: false, validationMessage: void 0, grow: false, position: "center", progressSteps: [], currentProgressStep: void 0, progressStepsDistance: void 0, willOpen: void 0, didOpen: void 0, didRender: void 0, willClose: void 0, didClose: void 0, didDestroy: void 0, scrollbarPadding: true }, Oe = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"], Le = {}, je = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"], Me = (t3) => Object.prototype.hasOwnProperty.call(Te, t3), De = (t3) => Oe.indexOf(t3) !== -1, Ie = (t3) => Le[t3], He = (t3) => {
            Me(t3) || i('Unknown parameter "'.concat(t3, '"'));
          }, qe = (t3) => {
            je.includes(t3) && i('The parameter "'.concat(t3, '" is incompatible with toasts'));
          }, Ve = (t3) => {
            Ie(t3) && c(t3, Ie(t3));
          }, Ne = (t3) => {
            !t3.backdrop && t3.allowOutsideClick && i('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
            for (const e3 in t3)
              He(e3), t3.toast && qe(e3), Ve(e3);
          };
          var Ue = Object.freeze({ isValidParameter: Me, isUpdatableParameter: De, isDeprecatedParameter: Ie, argsToParams: h, isVisible: re, clickConfirm: ce, clickDeny: le, clickCancel: ue, getContainer: v, getPopup: A, getTitle: x, getHtmlContainer: P, getImage: E, getIcon: B, getInputLabel: j, getCloseButton: V, getActions: I, getConfirmButton: O, getDenyButton: L, getCancelButton: D, getLoader: M, getFooter: H, getTimerProgressBar: q, getFocusableElements: U, getValidationMessage: T, isLoading: z, fire: de, mixin: pe, showLoading: me, enableLoading: me, getTimerLeft: we, stopTimer: ve, resumeTimer: Ce, toggleTimer: ke, increaseTimer: Ae, isTimerRunning: Be, bindClickHandler: Ee });
          function Fe() {
            const t3 = Mt.innerParams.get(this);
            if (!t3)
              return;
            const e3 = Mt.domCache.get(this);
            ot(e3.loader), R() ? t3.icon && nt(B()) : Re(e3), Q([e3.popup, e3.actions], y.loading), e3.popup.removeAttribute("aria-busy"), e3.popup.removeAttribute("data-loading"), e3.confirmButton.disabled = false, e3.denyButton.disabled = false, e3.cancelButton.disabled = false;
          }
          const Re = (t3) => {
            const e3 = t3.popup.getElementsByClassName(t3.loader.getAttribute("data-button-to-replace"));
            e3.length ? nt(e3[0], "inline-block") : rt() && ot(t3.actions);
          };
          function ze(t3) {
            const e3 = Mt.innerParams.get(t3 || this), n3 = Mt.domCache.get(t3 || this);
            return n3 ? Z(n3.popup, e3.input) : null;
          }
          const We = () => {
            W.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (W.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(W.previousBodyPadding + xt(), "px"));
          }, _e = () => {
            W.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(W.previousBodyPadding, "px"), W.previousBodyPadding = null);
          }, Ke = () => {
            if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !K(document.body, y.iosfix)) {
              const t3 = document.body.scrollTop;
              document.body.style.top = "".concat(-1 * t3, "px"), G(document.body, y.iosfix), $e(), Ye();
            }
          }, Ye = () => {
            if (!navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)) {
              const t3 = 44;
              A().scrollHeight > window.innerHeight - t3 && (v().style.paddingBottom = "".concat(t3, "px"));
            }
          }, $e = () => {
            const t3 = v();
            let e3;
            t3.ontouchstart = (t4) => {
              e3 = Ze(t4);
            }, t3.ontouchmove = (t4) => {
              e3 && (t4.preventDefault(), t4.stopPropagation());
            };
          }, Ze = (t3) => {
            const e3 = t3.target, n3 = v();
            return !(Je(t3) || Xe(t3) || e3 !== n3 && (ct(n3) || e3.tagName === "INPUT" || e3.tagName === "TEXTAREA" || ct(P()) && P().contains(e3)));
          }, Je = (t3) => t3.touches && t3.touches.length && t3.touches[0].touchType === "stylus", Xe = (t3) => t3.touches && t3.touches.length > 1, Ge = () => {
            if (K(document.body, y.iosfix)) {
              const t3 = parseInt(document.body.style.top, 10);
              Q(document.body, y.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t3;
            }
          }, Qe = () => {
            o(document.body.children).forEach((t3) => {
              t3 === v() || t3.contains(v()) || (t3.hasAttribute("aria-hidden") && t3.setAttribute("data-previous-aria-hidden", t3.getAttribute("aria-hidden")), t3.setAttribute("aria-hidden", "true"));
            });
          }, tn = () => {
            o(document.body.children).forEach((t3) => {
              t3.hasAttribute("data-previous-aria-hidden") ? (t3.setAttribute("aria-hidden", t3.getAttribute("data-previous-aria-hidden")), t3.removeAttribute("data-previous-aria-hidden")) : t3.removeAttribute("aria-hidden");
            });
          };
          var en = { swalPromiseResolve: /* @__PURE__ */ new WeakMap() };
          function nn(t3, e3, n3, o2) {
            R() ? ln(t3, o2) : (ye(n3).then(() => ln(t3, o2)), fe.keydownTarget.removeEventListener("keydown", fe.keydownHandler, { capture: fe.keydownListenerCapture }), fe.keydownHandlerAdded = false), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (e3.setAttribute("style", "display:none !important"), e3.removeAttribute("class"), e3.innerHTML = "") : e3.remove(), F() && (_e(), Ge(), tn()), on();
          }
          function on() {
            Q([document.documentElement, document.body], [y.shown, y["height-auto"], y["no-backdrop"], y["toast-shown"]]);
          }
          function sn(t3) {
            const e3 = A();
            if (!e3)
              return;
            t3 = an(t3);
            const n3 = Mt.innerParams.get(this);
            if (!n3 || K(e3, n3.hideClass.popup))
              return;
            const o2 = en.swalPromiseResolve.get(this);
            Q(e3, n3.showClass.popup), G(e3, n3.hideClass.popup);
            const i2 = v();
            Q(i2, n3.showClass.backdrop), G(i2, n3.hideClass.backdrop), rn(this, e3, n3), o2(t3);
          }
          const an = (t3) => t3 === void 0 ? { isConfirmed: false, isDenied: false, isDismissed: true } : Object.assign({ isConfirmed: false, isDenied: false, isDismissed: false }, t3), rn = (t3, e3, n3) => {
            const o2 = v(), i2 = Bt && lt(e3);
            typeof n3.willClose == "function" && n3.willClose(e3), i2 ? cn(t3, e3, o2, n3.returnFocus, n3.didClose) : nn(t3, o2, n3.returnFocus, n3.didClose);
          }, cn = (t3, e3, n3, o2, i2) => {
            fe.swalCloseEventFinishedCallback = nn.bind(null, t3, n3, o2, i2), e3.addEventListener(Bt, function(t4) {
              t4.target === e3 && (fe.swalCloseEventFinishedCallback(), delete fe.swalCloseEventFinishedCallback);
            });
          }, ln = (t3, e3) => {
            setTimeout(() => {
              typeof e3 == "function" && e3.bind(t3.params)(), t3._destroy();
            });
          };
          function un(t3, e3, n3) {
            const o2 = Mt.domCache.get(t3);
            e3.forEach((t4) => {
              o2[t4].disabled = n3;
            });
          }
          function dn(t3, e3) {
            if (!t3)
              return false;
            if (t3.type === "radio") {
              const n3 = t3.parentNode.parentNode.querySelectorAll("input");
              for (let t4 = 0; t4 < n3.length; t4++)
                n3[t4].disabled = e3;
            } else
              t3.disabled = e3;
          }
          function pn() {
            un(this, ["confirmButton", "denyButton", "cancelButton"], false);
          }
          function mn() {
            un(this, ["confirmButton", "denyButton", "cancelButton"], true);
          }
          function gn() {
            return dn(this.getInput(), false);
          }
          function hn() {
            return dn(this.getInput(), true);
          }
          function fn(t3) {
            const e3 = Mt.domCache.get(this), n3 = Mt.innerParams.get(this);
            _(e3.validationMessage, t3), e3.validationMessage.className = y["validation-message"], n3.customClass && n3.customClass.validationMessage && G(e3.validationMessage, n3.customClass.validationMessage), nt(e3.validationMessage);
            const o2 = this.getInput();
            o2 && (o2.setAttribute("aria-invalid", true), o2.setAttribute("aria-describedby", y["validation-message"]), J(o2), G(o2, y.inputerror));
          }
          function bn() {
            const t3 = Mt.domCache.get(this);
            t3.validationMessage && ot(t3.validationMessage);
            const e3 = this.getInput();
            e3 && (e3.removeAttribute("aria-invalid"), e3.removeAttribute("aria-describedby"), Q(e3, y.inputerror));
          }
          function yn() {
            return Mt.domCache.get(this).progressSteps;
          }
          class wn {
            constructor(t3, e3) {
              this.callback = t3, this.remaining = e3, this.running = false, this.start();
            }
            start() {
              return this.running || (this.running = true, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)), this.remaining;
            }
            stop() {
              return this.running && (this.running = false, clearTimeout(this.id), this.remaining -= new Date() - this.started), this.remaining;
            }
            increase(t3) {
              const e3 = this.running;
              return e3 && this.stop(), this.remaining += t3, e3 && this.start(), this.remaining;
            }
            getTimerLeft() {
              return this.running && (this.stop(), this.start()), this.remaining;
            }
            isRunning() {
              return this.running;
            }
          }
          var vn = { email: (t3, e3) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t3) ? Promise.resolve() : Promise.resolve(e3 || "Invalid email address"), url: (t3, e3) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t3) ? Promise.resolve() : Promise.resolve(e3 || "Invalid URL") };
          function Cn(t3) {
            t3.inputValidator || Object.keys(vn).forEach((e3) => {
              t3.input === e3 && (t3.inputValidator = vn[e3]);
            });
          }
          function kn(t3) {
            (!t3.target || typeof t3.target == "string" && !document.querySelector(t3.target) || typeof t3.target != "string" && !t3.target.appendChild) && (i('Target parameter is not valid, defaulting to "body"'), t3.target = "body");
          }
          function An(t3) {
            Cn(t3), t3.showLoaderOnConfirm && !t3.preConfirm && i("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), kn(t3), typeof t3.title == "string" && (t3.title = t3.title.split("\n").join("<br />")), vt(t3);
          }
          const Bn = ["swal-title", "swal-html", "swal-footer"], xn = (t3) => {
            const e3 = typeof t3.template == "string" ? document.querySelector(t3.template) : t3.template;
            if (!e3)
              return {};
            const n3 = e3.content;
            return jn(n3), Object.assign(Pn(n3), En(n3), Sn(n3), Tn(n3), On(n3), Ln(n3, Bn));
          }, Pn = (t3) => {
            const e3 = {};
            return o(t3.querySelectorAll("swal-param")).forEach((t4) => {
              Mn(t4, ["name", "value"]);
              const n3 = t4.getAttribute("name");
              let o2 = t4.getAttribute("value");
              typeof Te[n3] == "boolean" && o2 === "false" && (o2 = false), typeof Te[n3] == "object" && (o2 = JSON.parse(o2)), e3[n3] = o2;
            }), e3;
          }, En = (t3) => {
            const e3 = {};
            return o(t3.querySelectorAll("swal-button")).forEach((t4) => {
              Mn(t4, ["type", "color", "aria-label"]);
              const o2 = t4.getAttribute("type");
              e3["".concat(o2, "ButtonText")] = t4.innerHTML, e3["show".concat(n2(o2), "Button")] = true, t4.hasAttribute("color") && (e3["".concat(o2, "ButtonColor")] = t4.getAttribute("color")), t4.hasAttribute("aria-label") && (e3["".concat(o2, "ButtonAriaLabel")] = t4.getAttribute("aria-label"));
            }), e3;
          }, Sn = (t3) => {
            const e3 = {}, n3 = t3.querySelector("swal-image");
            return n3 && (Mn(n3, ["src", "width", "height", "alt"]), n3.hasAttribute("src") && (e3.imageUrl = n3.getAttribute("src")), n3.hasAttribute("width") && (e3.imageWidth = n3.getAttribute("width")), n3.hasAttribute("height") && (e3.imageHeight = n3.getAttribute("height")), n3.hasAttribute("alt") && (e3.imageAlt = n3.getAttribute("alt"))), e3;
          }, Tn = (t3) => {
            const e3 = {}, n3 = t3.querySelector("swal-icon");
            return n3 && (Mn(n3, ["type", "color"]), n3.hasAttribute("type") && (e3.icon = n3.getAttribute("type")), n3.hasAttribute("color") && (e3.iconColor = n3.getAttribute("color")), e3.iconHtml = n3.innerHTML), e3;
          }, On = (t3) => {
            const e3 = {}, n3 = t3.querySelector("swal-input");
            n3 && (Mn(n3, ["type", "label", "placeholder", "value"]), e3.input = n3.getAttribute("type") || "text", n3.hasAttribute("label") && (e3.inputLabel = n3.getAttribute("label")), n3.hasAttribute("placeholder") && (e3.inputPlaceholder = n3.getAttribute("placeholder")), n3.hasAttribute("value") && (e3.inputValue = n3.getAttribute("value")));
            const i2 = t3.querySelectorAll("swal-input-option");
            return i2.length && (e3.inputOptions = {}, o(i2).forEach((t4) => {
              Mn(t4, ["value"]);
              const n4 = t4.getAttribute("value"), o2 = t4.innerHTML;
              e3.inputOptions[n4] = o2;
            })), e3;
          }, Ln = (t3, e3) => {
            const n3 = {};
            for (const o2 in e3) {
              const i2 = e3[o2], s2 = t3.querySelector(i2);
              s2 && (Mn(s2, []), n3[i2.replace(/^swal-/, "")] = s2.innerHTML.trim());
            }
            return n3;
          }, jn = (t3) => {
            const e3 = Bn.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
            o(t3.children).forEach((t4) => {
              const n3 = t4.tagName.toLowerCase();
              e3.indexOf(n3) === -1 && i("Unrecognized element <".concat(n3, ">"));
            });
          }, Mn = (t3, e3) => {
            o(t3.attributes).forEach((n3) => {
              e3.indexOf(n3.name) === -1 && i(['Unrecognized attribute "'.concat(n3.name, '" on <').concat(t3.tagName.toLowerCase(), ">."), "".concat(e3.length ? "Allowed attributes are: ".concat(e3.join(", ")) : "To set the value, use HTML within the element.")]);
            });
          }, Dn = 10, In = (t3) => {
            const e3 = v(), n3 = A();
            typeof t3.willOpen == "function" && t3.willOpen(n3);
            const o2 = window.getComputedStyle(document.body).overflowY;
            Nn(e3, n3, t3), setTimeout(() => {
              qn(e3, n3);
            }, Dn), F() && (Vn(e3, t3.scrollbarPadding, o2), Qe()), R() || fe.previousActiveElement || (fe.previousActiveElement = document.activeElement), typeof t3.didOpen == "function" && setTimeout(() => t3.didOpen(n3)), Q(e3, y["no-transition"]);
          }, Hn = (t3) => {
            const e3 = A();
            if (t3.target !== e3)
              return;
            const n3 = v();
            e3.removeEventListener(Bt, Hn), n3.style.overflowY = "auto";
          }, qn = (t3, e3) => {
            Bt && lt(e3) ? (t3.style.overflowY = "hidden", e3.addEventListener(Bt, Hn)) : t3.style.overflowY = "auto";
          }, Vn = (t3, e3, n3) => {
            Ke(), e3 && n3 !== "hidden" && We(), setTimeout(() => {
              t3.scrollTop = 0;
            });
          }, Nn = (t3, e3, n3) => {
            G(t3, n3.showClass.backdrop), e3.style.setProperty("opacity", "0", "important"), nt(e3, "grid"), setTimeout(() => {
              G(e3, n3.showClass.popup), e3.style.removeProperty("opacity");
            }, Dn), G([document.documentElement, document.body], y.shown), n3.heightAuto && n3.backdrop && !n3.toast && G([document.documentElement, document.body], y["height-auto"]);
          }, Un = (t3, e3) => {
            e3.input === "select" || e3.input === "radio" ? _n(t3, e3) : ["text", "email", "number", "tel", "textarea"].includes(e3.input) && (u(e3.inputValue) || p(e3.inputValue)) && (me(O()), Kn(t3, e3));
          }, Fn = (t3, e3) => {
            const n3 = t3.getInput();
            if (!n3)
              return null;
            switch (e3.input) {
              case "checkbox":
                return Rn(n3);
              case "radio":
                return zn(n3);
              case "file":
                return Wn(n3);
              default:
                return e3.inputAutoTrim ? n3.value.trim() : n3.value;
            }
          }, Rn = (t3) => t3.checked ? 1 : 0, zn = (t3) => t3.checked ? t3.value : null, Wn = (t3) => t3.files.length ? t3.getAttribute("multiple") !== null ? t3.files : t3.files[0] : null, _n = (t3, e3) => {
            const n3 = A(), o2 = (t4) => Yn[e3.input](n3, $n(t4), e3);
            u(e3.inputOptions) || p(e3.inputOptions) ? (me(O()), d(e3.inputOptions).then((e4) => {
              t3.hideLoading(), o2(e4);
            })) : typeof e3.inputOptions == "object" ? o2(e3.inputOptions) : s("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof e3.inputOptions));
          }, Kn = (t3, e3) => {
            const n3 = t3.getInput();
            ot(n3), d(e3.inputValue).then((o2) => {
              n3.value = e3.input === "number" ? parseFloat(o2) || 0 : "".concat(o2), nt(n3), n3.focus(), t3.hideLoading();
            }).catch((e4) => {
              s("Error in inputValue promise: ".concat(e4)), n3.value = "", nt(n3), n3.focus(), t3.hideLoading();
            });
          }, Yn = { select: (t3, e3, n3) => {
            const o2 = tt(t3, y.select), i2 = (t4, e4, o3) => {
              const i3 = document.createElement("option");
              i3.value = o3, _(i3, e4), i3.selected = Zn(o3, n3.inputValue), t4.appendChild(i3);
            };
            e3.forEach((t4) => {
              const e4 = t4[0], n4 = t4[1];
              if (Array.isArray(n4)) {
                const t5 = document.createElement("optgroup");
                t5.label = e4, t5.disabled = false, o2.appendChild(t5), n4.forEach((e5) => i2(t5, e5[1], e5[0]));
              } else
                i2(o2, n4, e4);
            }), o2.focus();
          }, radio: (t3, e3, n3) => {
            const o2 = tt(t3, y.radio);
            e3.forEach((t4) => {
              const e4 = t4[0], i3 = t4[1], s2 = document.createElement("input"), a2 = document.createElement("label");
              s2.type = "radio", s2.name = y.radio, s2.value = e4, Zn(e4, n3.inputValue) && (s2.checked = true);
              const r2 = document.createElement("span");
              _(r2, i3), r2.className = y.label, a2.appendChild(s2), a2.appendChild(r2), o2.appendChild(a2);
            });
            const i2 = o2.querySelectorAll("input");
            i2.length && i2[0].focus();
          } }, $n = (t3) => {
            const e3 = [];
            return typeof Map != "undefined" && t3 instanceof Map ? t3.forEach((t4, n3) => {
              let o2 = t4;
              typeof o2 == "object" && (o2 = $n(o2)), e3.push([n3, o2]);
            }) : Object.keys(t3).forEach((n3) => {
              let o2 = t3[n3];
              typeof o2 == "object" && (o2 = $n(o2)), e3.push([n3, o2]);
            }), e3;
          }, Zn = (t3, e3) => e3 && e3.toString() === t3.toString(), Jn = (t3, e3) => {
            t3.disableButtons(), e3.input ? Qn(t3, e3, "confirm") : oo(t3, e3, true);
          }, Xn = (t3, e3) => {
            t3.disableButtons(), e3.returnInputValueOnDeny ? Qn(t3, e3, "deny") : eo(t3, e3, false);
          }, Gn = (e3, n3) => {
            e3.disableButtons(), n3(t2.cancel);
          }, Qn = (t3, e3, n3) => {
            const o2 = Fn(t3, e3);
            e3.inputValidator ? to(t3, e3, o2, n3) : t3.getInput().checkValidity() ? n3 === "deny" ? eo(t3, e3, o2) : oo(t3, e3, o2) : (t3.enableButtons(), t3.showValidationMessage(e3.validationMessage));
          }, to = (t3, e3, n3, o2) => {
            t3.disableInput(), Promise.resolve().then(() => d(e3.inputValidator(n3, e3.validationMessage))).then((i2) => {
              t3.enableButtons(), t3.enableInput(), i2 ? t3.showValidationMessage(i2) : o2 === "deny" ? eo(t3, e3, n3) : oo(t3, e3, n3);
            });
          }, eo = (t3, e3, n3) => {
            e3.showLoaderOnDeny && me(L()), e3.preDeny ? Promise.resolve().then(() => d(e3.preDeny(n3, e3.validationMessage))).then((e4) => {
              e4 === false ? t3.hideLoading() : t3.closePopup({ isDenied: true, value: e4 === void 0 ? n3 : e4 });
            }) : t3.closePopup({ isDenied: true, value: n3 });
          }, no = (t3, e3) => {
            t3.closePopup({ isConfirmed: true, value: e3 });
          }, oo = (t3, e3, n3) => {
            e3.showLoaderOnConfirm && me(), e3.preConfirm ? (t3.resetValidationMessage(), Promise.resolve().then(() => d(e3.preConfirm(n3, e3.validationMessage))).then((e4) => {
              at(T()) || e4 === false ? t3.hideLoading() : no(t3, e4 === void 0 ? n3 : e4);
            })) : no(t3, n3);
          }, io = (t3, e3, n3, o2) => {
            e3.keydownTarget && e3.keydownHandlerAdded && (e3.keydownTarget.removeEventListener("keydown", e3.keydownHandler, { capture: e3.keydownListenerCapture }), e3.keydownHandlerAdded = false), n3.toast || (e3.keydownHandler = (e4) => co(t3, e4, o2), e3.keydownTarget = n3.keydownListenerCapture ? window : A(), e3.keydownListenerCapture = n3.keydownListenerCapture, e3.keydownTarget.addEventListener("keydown", e3.keydownHandler, { capture: e3.keydownListenerCapture }), e3.keydownHandlerAdded = true);
          }, so = (t3, e3, n3) => {
            const o2 = U();
            if (o2.length)
              return (e3 += n3) === o2.length ? e3 = 0 : e3 === -1 && (e3 = o2.length - 1), o2[e3].focus();
            A().focus();
          }, ao = ["ArrowRight", "ArrowDown"], ro = ["ArrowLeft", "ArrowUp"], co = (t3, e3, n3) => {
            const o2 = Mt.innerParams.get(t3);
            o2 && (o2.stopKeydownPropagation && e3.stopPropagation(), e3.key === "Enter" ? lo(t3, e3, o2) : e3.key === "Tab" ? uo(e3, o2) : [...ao, ...ro].includes(e3.key) ? po(e3.key) : e3.key === "Escape" && mo(e3, o2, n3));
          }, lo = (t3, e3, n3) => {
            if (!e3.isComposing && e3.target && t3.getInput() && e3.target.outerHTML === t3.getInput().outerHTML) {
              if (["textarea", "file"].includes(n3.input))
                return;
              ce(), e3.preventDefault();
            }
          }, uo = (t3, e3) => {
            const n3 = t3.target, o2 = U();
            let i2 = -1;
            for (let s2 = 0; s2 < o2.length; s2++)
              if (n3 === o2[s2]) {
                i2 = s2;
                break;
              }
            t3.shiftKey ? so(e3, i2, -1) : so(e3, i2, 1), t3.stopPropagation(), t3.preventDefault();
          }, po = (t3) => {
            if (![O(), L(), D()].includes(document.activeElement))
              return;
            const e3 = ao.includes(t3) ? "nextElementSibling" : "previousElementSibling", n3 = document.activeElement[e3];
            n3 && n3.focus();
          }, mo = (e3, n3, o2) => {
            l(n3.allowEscapeKey) && (e3.preventDefault(), o2(t2.esc));
          }, go = (t3, e3, n3) => {
            Mt.innerParams.get(t3).toast ? ho(t3, e3, n3) : (bo(e3), yo(e3), wo(t3, e3, n3));
          }, ho = (e3, n3, o2) => {
            n3.popup.onclick = () => {
              const n4 = Mt.innerParams.get(e3);
              n4.showConfirmButton || n4.showDenyButton || n4.showCancelButton || n4.showCloseButton || n4.timer || n4.input || o2(t2.close);
            };
          };
          let fo = false;
          const bo = (t3) => {
            t3.popup.onmousedown = () => {
              t3.container.onmouseup = function(e3) {
                t3.container.onmouseup = void 0, e3.target === t3.container && (fo = true);
              };
            };
          }, yo = (t3) => {
            t3.container.onmousedown = () => {
              t3.popup.onmouseup = function(e3) {
                t3.popup.onmouseup = void 0, (e3.target === t3.popup || t3.popup.contains(e3.target)) && (fo = true);
              };
            };
          }, wo = (e3, n3, o2) => {
            n3.container.onclick = (i2) => {
              const s2 = Mt.innerParams.get(e3);
              fo ? fo = false : i2.target === n3.container && l(s2.allowOutsideClick) && o2(t2.backdrop);
            };
          };
          function vo(t3, e3 = {}) {
            Ne(Object.assign({}, e3, t3)), fe.currentInstance && fe.currentInstance._destroy(), fe.currentInstance = this;
            const n3 = Co(t3, e3);
            An(n3), Object.freeze(n3), fe.timeout && (fe.timeout.stop(), delete fe.timeout), clearTimeout(fe.restoreFocusTimeout);
            const o2 = Ao(this);
            return ae(this, n3), Mt.innerParams.set(this, n3), ko(this, o2, n3);
          }
          const Co = (t3, e3) => {
            const n3 = xn(t3), o2 = Object.assign({}, Te, e3, n3, t3);
            return o2.showClass = Object.assign({}, Te.showClass, o2.showClass), o2.hideClass = Object.assign({}, Te.hideClass, o2.hideClass), o2;
          }, ko = (e3, n3, o2) => new Promise((i2) => {
            const s2 = (t3) => {
              e3.closePopup({ isDismissed: true, dismiss: t3 });
            };
            en.swalPromiseResolve.set(e3, i2), n3.confirmButton.onclick = () => Jn(e3, o2), n3.denyButton.onclick = () => Xn(e3, o2), n3.cancelButton.onclick = () => Gn(e3, s2), n3.closeButton.onclick = () => s2(t2.close), go(e3, n3, s2), io(e3, fe, o2, s2), Un(e3, o2), In(o2), Bo(fe, o2, s2), xo(n3, o2), setTimeout(() => {
              n3.container.scrollTop = 0;
            });
          }), Ao = (t3) => {
            const e3 = { popup: A(), container: v(), actions: I(), confirmButton: O(), denyButton: L(), cancelButton: D(), loader: M(), closeButton: V(), validationMessage: T(), progressSteps: S() };
            return Mt.domCache.set(t3, e3), e3;
          }, Bo = (t3, e3, n3) => {
            const o2 = q();
            ot(o2), e3.timer && (t3.timeout = new wn(() => {
              n3("timer"), delete t3.timeout;
            }, e3.timer), e3.timerProgressBar && (nt(o2), setTimeout(() => {
              t3.timeout && t3.timeout.running && ut(e3.timer);
            })));
          }, xo = (t3, e3) => {
            if (!e3.toast)
              return l(e3.allowEnterKey) ? void (Po(t3, e3) || so(e3, -1, 1)) : Eo();
          }, Po = (t3, e3) => e3.focusDeny && at(t3.denyButton) ? (t3.denyButton.focus(), true) : e3.focusCancel && at(t3.cancelButton) ? (t3.cancelButton.focus(), true) : !(!e3.focusConfirm || !at(t3.confirmButton) || (t3.confirmButton.focus(), 0)), Eo = () => {
            document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur();
          };
          function So(t3) {
            const e3 = A(), n3 = Mt.innerParams.get(this);
            if (!e3 || K(e3, n3.hideClass.popup))
              return i("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const o2 = {};
            Object.keys(t3).forEach((e4) => {
              Io.isUpdatableParameter(e4) ? o2[e4] = t3[e4] : i('Invalid parameter to update: "'.concat(e4, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'));
            });
            const s2 = Object.assign({}, n3, o2);
            ae(this, s2), Mt.innerParams.set(this, s2), Object.defineProperties(this, { params: { value: Object.assign({}, this.params, t3), writable: false, enumerable: true } });
          }
          function To() {
            const t3 = Mt.domCache.get(this), e3 = Mt.innerParams.get(this);
            e3 && (t3.popup && fe.swalCloseEventFinishedCallback && (fe.swalCloseEventFinishedCallback(), delete fe.swalCloseEventFinishedCallback), fe.deferDisposalTimer && (clearTimeout(fe.deferDisposalTimer), delete fe.deferDisposalTimer), typeof e3.didDestroy == "function" && e3.didDestroy(), Oo(this));
          }
          const Oo = (t3) => {
            delete t3.params, delete fe.keydownHandler, delete fe.keydownTarget, Lo(Mt), Lo(en);
          }, Lo = (t3) => {
            for (const e3 in t3)
              t3[e3] = /* @__PURE__ */ new WeakMap();
          };
          var jo = Object.freeze({ hideLoading: Fe, disableLoading: Fe, getInput: ze, close: sn, closePopup: sn, closeModal: sn, closeToast: sn, enableButtons: pn, disableButtons: mn, enableInput: gn, disableInput: hn, showValidationMessage: fn, resetValidationMessage: bn, getProgressSteps: yn, _main: vo, update: So, _destroy: To });
          let Mo;
          class Do {
            constructor(...t3) {
              if (typeof window == "undefined")
                return;
              Mo = this;
              const e3 = Object.freeze(this.constructor.argsToParams(t3));
              Object.defineProperties(this, { params: { value: e3, writable: false, enumerable: true, configurable: true } });
              const n3 = this._main(this.params);
              Mt.promise.set(this, n3);
            }
            then(t3) {
              return Mt.promise.get(this).then(t3);
            }
            finally(t3) {
              return Mt.promise.get(this).finally(t3);
            }
          }
          Object.assign(Do.prototype, jo), Object.assign(Do, Ue), Object.keys(jo).forEach((t3) => {
            Do[t3] = function(...e3) {
              if (Mo)
                return Mo[t3](...e3);
            };
          }), Do.DismissReason = t2, Do.version = "11.0.18";
          const Io = Do;
          return Io.default = Io, Io;
        }(), t !== void 0 && t.Sweetalert2 && (t.swal = t.sweetAlert = t.Swal = t.SweetAlert = t.Sweetalert2);
        var n = e.exports;
        return class {
          static install(t2, e2 = {}) {
            var o;
            const i = n.mixin(e2), s = function(...t3) {
              return i.fire.call(i, ...t3);
            };
            Object.assign(s, n), Object.keys(n).filter((t3) => typeof n[t3] == "function").forEach((t3) => {
              s[t3] = i[t3].bind(i);
            }), ((o = t2.config) == null ? void 0 : o.globalProperties) && !t2.config.globalProperties.$swal ? (t2.config.globalProperties.$swal = s, t2.provide("$swal", s)) : Object.prototype.hasOwnProperty.call(t2, "$swal") || (t2.prototype.$swal = s, t2.swal = s);
          }
        };
      });
    }
  });

  // node_modules/axios/lib/helpers/bind.js
  var require_bind = __commonJS({
    "node_modules/axios/lib/helpers/bind.js"(exports, module) {
      "use strict";
      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };
    }
  });

  // node_modules/axios/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/axios/lib/utils.js"(exports, module) {
      "use strict";
      var bind = require_bind();
      var toString = Object.prototype.toString;
      function isArray(val) {
        return Array.isArray(val);
      }
      function isUndefined(val) {
        return typeof val === "undefined";
      }
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
      }
      function isArrayBuffer(val) {
        return toString.call(val) === "[object ArrayBuffer]";
      }
      function isFormData(val) {
        return toString.call(val) === "[object FormData]";
      }
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && isArrayBuffer(val.buffer);
        }
        return result;
      }
      function isString(val) {
        return typeof val === "string";
      }
      function isNumber(val) {
        return typeof val === "number";
      }
      function isObject(val) {
        return val !== null && typeof val === "object";
      }
      function isPlainObject(val) {
        if (toString.call(val) !== "[object Object]") {
          return false;
        }
        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }
      function isDate(val) {
        return toString.call(val) === "[object Date]";
      }
      function isFile(val) {
        return toString.call(val) === "[object File]";
      }
      function isBlob(val) {
        return toString.call(val) === "[object Blob]";
      }
      function isFunction(val) {
        return toString.call(val) === "[object Function]";
      }
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }
      function isURLSearchParams(val) {
        return toString.call(val) === "[object URLSearchParams]";
      }
      function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
      }
      function isStandardBrowserEnv() {
        if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      }
      function forEach(obj, fn) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }
      function merge() {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === "function") {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }
      function stripBOM(content) {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      }
      module.exports = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isFunction,
        isStream,
        isURLSearchParams,
        isStandardBrowserEnv,
        forEach,
        merge,
        extend,
        trim,
        stripBOM
      };
    }
  });

  // node_modules/axios/lib/helpers/buildURL.js
  var require_buildURL = __commonJS({
    "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      module.exports = function buildURL(url, params, paramsSerializer) {
        if (!params) {
          return url;
        }
        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
              return;
            }
            if (utils.isArray(val)) {
              key = key + "[]";
            } else {
              val = [val];
            }
            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + "=" + encode(v));
            });
          });
          serializedParams = parts.join("&");
        }
        if (serializedParams) {
          var hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      };
    }
  });

  // node_modules/axios/lib/core/InterceptorManager.js
  var require_InterceptorManager = __commonJS({
    "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function InterceptorManager() {
        this.handlers = [];
      }
      InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      };
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };
      module.exports = InterceptorManager;
    }
  });

  // node_modules/axios/lib/helpers/normalizeHeaderName.js
  var require_normalizeHeaderName = __commonJS({
    "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
    }
  });

  // node_modules/axios/lib/core/enhanceError.js
  var require_enhanceError = __commonJS({
    "node_modules/axios/lib/core/enhanceError.js"(exports, module) {
      "use strict";
      module.exports = function enhanceError(error, config, code, request, response) {
        error.config = config;
        if (code) {
          error.code = code;
        }
        error.request = request;
        error.response = response;
        error.isAxiosError = true;
        error.toJSON = function toJSON() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        };
        return error;
      };
    }
  });

  // node_modules/axios/lib/core/createError.js
  var require_createError = __commonJS({
    "node_modules/axios/lib/core/createError.js"(exports, module) {
      "use strict";
      var enhanceError = require_enhanceError();
      module.exports = function createError(message, config, code, request, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };
    }
  });

  // node_modules/axios/lib/core/settle.js
  var require_settle = __commonJS({
    "node_modules/axios/lib/core/settle.js"(exports, module) {
      "use strict";
      var createError = require_createError();
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
        }
      };
    }
  });

  // node_modules/axios/lib/helpers/cookies.js
  var require_cookies = __commonJS({
    "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        };
      }() : function nonStandardBrowserEnv() {
        return {
          write: function write() {
          },
          read: function read() {
            return null;
          },
          remove: function remove() {
          }
        };
      }();
    }
  });

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  var require_isAbsoluteURL = __commonJS({
    "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
      "use strict";
      module.exports = function isAbsoluteURL(url) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      };
    }
  });

  // node_modules/axios/lib/helpers/combineURLs.js
  var require_combineURLs = __commonJS({
    "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
      "use strict";
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      };
    }
  });

  // node_modules/axios/lib/core/buildFullPath.js
  var require_buildFullPath = __commonJS({
    "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
      "use strict";
      var isAbsoluteURL = require_isAbsoluteURL();
      var combineURLs = require_combineURLs();
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };
    }
  });

  // node_modules/axios/lib/helpers/parseHeaders.js
  var require_parseHeaders = __commonJS({
    "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var ignoreDuplicateOf = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
          return parsed;
        }
        utils.forEach(headers.split("\n"), function parser(line) {
          i = line.indexOf(":");
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));
          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === "set-cookie") {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
          }
        });
        return parsed;
      };
    }
  });

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var require_isURLSameOrigin = __commonJS({
    "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() : function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
    }
  });

  // node_modules/axios/lib/cancel/Cancel.js
  var require_Cancel = __commonJS({
    "node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
      "use strict";
      function Cancel(message) {
        this.message = message;
      }
      Cancel.prototype.toString = function toString() {
        return "Cancel" + (this.message ? ": " + this.message : "");
      };
      Cancel.prototype.__CANCEL__ = true;
      module.exports = Cancel;
    }
  });

  // node_modules/axios/lib/adapters/xhr.js
  var require_xhr = __commonJS({
    "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var settle = require_settle();
      var cookies = require_cookies();
      var buildURL = require_buildURL();
      var buildFullPath = require_buildFullPath();
      var parseHeaders = require_parseHeaders();
      var isURLSameOrigin = require_isURLSameOrigin();
      var createError = require_createError();
      var defaults = require_defaults();
      var Cancel = require_Cancel();
      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;
          var responseType = config.responseType;
          var onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          if (utils.isFormData(requestData)) {
            delete requestHeaders["Content-Type"];
          }
          var request = new XMLHttpRequest();
          if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
          }
          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(createError("Network Error", config, null, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || defaults.transitional;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
            request = null;
          };
          if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                delete requestHeaders[key];
              } else {
                request.setRequestHeader(key, val);
              }
            });
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", config.onDownloadProgress);
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", config.onUploadProgress);
          }
          if (config.cancelToken || config.signal) {
            onCanceled = function(cancel) {
              if (!request) {
                return;
              }
              reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          if (!requestData) {
            requestData = null;
          }
          request.send(requestData);
        });
      };
    }
  });

  // node_modules/axios/lib/defaults.js
  var require_defaults = __commonJS({
    "node_modules/axios/lib/defaults.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var normalizeHeaderName = require_normalizeHeaderName();
      var enhanceError = require_enhanceError();
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
          headers["Content-Type"] = value;
        }
      }
      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== "undefined") {
          adapter = require_xhr();
        } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
          adapter = require_xhr();
        }
        return adapter;
      }
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        },
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data.toString();
          }
          if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
            setContentTypeIfUnset(headers, "application/json");
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          var transitional = this.transitional || defaults.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
          if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw enhanceError(e, this, "E_JSON_PARSE");
                }
                throw e;
              }
            }
          }
          return data;
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }
  });

  // node_modules/axios/lib/core/transformData.js
  var require_transformData = __commonJS({
    "node_modules/axios/lib/core/transformData.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var defaults = require_defaults();
      module.exports = function transformData(data, headers, fns) {
        var context = this || defaults;
        utils.forEach(fns, function transform(fn) {
          data = fn.call(context, data, headers);
        });
        return data;
      };
    }
  });

  // node_modules/axios/lib/cancel/isCancel.js
  var require_isCancel = __commonJS({
    "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
      "use strict";
      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
    }
  });

  // node_modules/axios/lib/core/dispatchRequest.js
  var require_dispatchRequest = __commonJS({
    "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var transformData = require_transformData();
      var isCancel = require_isCancel();
      var defaults = require_defaults();
      var Cancel = require_Cancel();
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new Cancel("canceled");
        }
      }
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = config.headers || {};
        config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
        config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
        utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
          delete config.headers[method];
        });
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
            }
          }
          return Promise.reject(reason);
        });
      };
    }
  });

  // node_modules/axios/lib/core/mergeConfig.js
  var require_mergeConfig = __commonJS({
    "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function mergeConfig(config1, config2) {
        config2 = config2 || {};
        var config = {};
        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          }
        }
        function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function mergeDirectKeys(prop) {
          if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        var mergeMap = {
          "url": valueFromConfig2,
          "method": valueFromConfig2,
          "data": valueFromConfig2,
          "baseURL": defaultToConfig2,
          "transformRequest": defaultToConfig2,
          "transformResponse": defaultToConfig2,
          "paramsSerializer": defaultToConfig2,
          "timeout": defaultToConfig2,
          "timeoutMessage": defaultToConfig2,
          "withCredentials": defaultToConfig2,
          "adapter": defaultToConfig2,
          "responseType": defaultToConfig2,
          "xsrfCookieName": defaultToConfig2,
          "xsrfHeaderName": defaultToConfig2,
          "onUploadProgress": defaultToConfig2,
          "onDownloadProgress": defaultToConfig2,
          "decompress": defaultToConfig2,
          "maxContentLength": defaultToConfig2,
          "maxBodyLength": defaultToConfig2,
          "transport": defaultToConfig2,
          "httpAgent": defaultToConfig2,
          "httpsAgent": defaultToConfig2,
          "cancelToken": defaultToConfig2,
          "socketPath": defaultToConfig2,
          "responseEncoding": defaultToConfig2,
          "validateStatus": mergeDirectKeys
        };
        utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
          var merge = mergeMap[prop] || mergeDeepProperties;
          var configValue = merge(prop);
          utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
        });
        return config;
      };
    }
  });

  // node_modules/axios/lib/env/data.js
  var require_data = __commonJS({
    "node_modules/axios/lib/env/data.js"(exports, module) {
      module.exports = {
        "version": "0.26.0"
      };
    }
  });

  // node_modules/axios/lib/helpers/validator.js
  var require_validator = __commonJS({
    "node_modules/axios/lib/helpers/validator.js"(exports, module) {
      "use strict";
      var VERSION = require_data().version;
      var validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return function(value, opt, opts) {
          if (validator === false) {
            throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new TypeError("options must be an object");
        }
        var keys = Object.keys(options);
        var i = keys.length;
        while (i-- > 0) {
          var opt = keys[i];
          var validator = schema[opt];
          if (validator) {
            var value = options[opt];
            var result = value === void 0 || validator(value, opt, options);
            if (result !== true) {
              throw new TypeError("option " + opt + " must be " + result);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw Error("Unknown option " + opt);
          }
        }
      }
      module.exports = {
        assertOptions,
        validators
      };
    }
  });

  // node_modules/axios/lib/core/Axios.js
  var require_Axios = __commonJS({
    "node_modules/axios/lib/core/Axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var buildURL = require_buildURL();
      var InterceptorManager = require_InterceptorManager();
      var dispatchRequest = require_dispatchRequest();
      var mergeConfig = require_mergeConfig();
      var validator = require_validator();
      var validators = validator.validators;
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      Axios.prototype.request = function request(configOrUrl, config) {
        if (typeof configOrUrl === "string") {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = "get";
        }
        var transitional = config.transitional;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest, void 0];
          Array.prototype.unshift.apply(chain, requestInterceptorChain);
          chain = chain.concat(responseInterceptorChain);
          promise = Promise.resolve(config);
          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }
          return promise;
        }
        var newConfig = config;
        while (requestInterceptorChain.length) {
          var onFulfilled = requestInterceptorChain.shift();
          var onRejected = requestInterceptorChain.shift();
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected(error);
            break;
          }
        }
        try {
          promise = dispatchRequest(newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        while (responseInterceptorChain.length) {
          promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
        }
        return promise;
      };
      Axios.prototype.getUri = function getUri(config) {
        config = mergeConfig(this.defaults, config);
        return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        Axios.prototype[method] = function(url, data, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data
          }));
        };
      });
      module.exports = Axios;
    }
  });

  // node_modules/axios/lib/cancel/CancelToken.js
  var require_CancelToken = __commonJS({
    "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
      "use strict";
      var Cancel = require_Cancel();
      function CancelToken(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        this.promise.then(function(cancel) {
          if (!token._listeners)
            return;
          var i;
          var l = token._listeners.length;
          for (i = 0; i < l; i++) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = function(onfulfilled) {
          var _resolve;
          var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);
          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };
          return promise;
        };
        executor(function cancel(message) {
          if (token.reason) {
            return;
          }
          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      CancelToken.prototype.subscribe = function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      };
      CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      };
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token,
          cancel
        };
      };
      module.exports = CancelToken;
    }
  });

  // node_modules/axios/lib/helpers/spread.js
  var require_spread = __commonJS({
    "node_modules/axios/lib/helpers/spread.js"(exports, module) {
      "use strict";
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
    }
  });

  // node_modules/axios/lib/helpers/isAxiosError.js
  var require_isAxiosError = __commonJS({
    "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function isAxiosError(payload) {
        return utils.isObject(payload) && payload.isAxiosError === true;
      };
    }
  });

  // node_modules/axios/lib/axios.js
  var require_axios = __commonJS({
    "node_modules/axios/lib/axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var bind = require_bind();
      var Axios = require_Axios();
      var mergeConfig = require_mergeConfig();
      var defaults = require_defaults();
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);
        utils.extend(instance, Axios.prototype, context);
        utils.extend(instance, context);
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios2 = createInstance(defaults);
      axios2.Axios = Axios;
      axios2.Cancel = require_Cancel();
      axios2.CancelToken = require_CancelToken();
      axios2.isCancel = require_isCancel();
      axios2.VERSION = require_data().version;
      axios2.all = function all(promises) {
        return Promise.all(promises);
      };
      axios2.spread = require_spread();
      axios2.isAxiosError = require_isAxiosError();
      module.exports = axios2;
      module.exports.default = axios2;
    }
  });

  // node_modules/axios/index.js
  var require_axios2 = __commonJS({
    "node_modules/axios/index.js"(exports, module) {
      module.exports = require_axios();
    }
  });

  // resource/js/components/login/Login.vue
  var Login_exports = {};
  __export(Login_exports, {
    default: () => Login_default
  });
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "resource\\js\\components\\login\\Login.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_script__, __vue_render__, __vue_staticRenderFns__, __vue_inject_styles__, __vue_scope_id__, __vue_module_identifier__, __vue_is_functional_template__, __vue_component__, Login_default;
  var init_Login = __esm({
    "resource/js/components/login/Login.vue"() {
      __vue_script__ = {
        name: "login-form",
        props: ["csrf"],
        data() {
          return {
            username: "",
            password: "",
            loginError: false
          };
        },
        methods: {
          login() {
            axios({
              method: "post",
              url: "/api/login",
              data: {
                csrf_token: this.csrf,
                username: this.username,
                password: this.password
              }
            }).then((response) => {
              const { data: { status, response: data } } = response;
              if (status) {
                this.setCookie("session", this.csrf, 365);
                location.href = "/";
              } else {
                this.loginError = true;
              }
            });
          },
          setCookie(name, value, days) {
            let expires = "";
            if (days) {
              const date = new Date();
              date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
              expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
          }
        },
        computed: {
          isInvalid() {
            if (this.loginError == true) {
              return "is-invalid";
            } else {
              return "";
            }
          }
        }
      };
      __vue_render__ = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", [
          _c("p", { staticClass: "login-box-msg" }, [_vm._v("Sign in to Dashboard")]),
          _vm._v(" "),
          _vm.loginError ? _c("div", { staticClass: "alert alert-danger", attrs: { role: "alert" } }, [_vm._v("\n        Incorrect user or password\n    ")]) : _vm._e(),
          _vm._v(" "),
          _c("form", {
            attrs: { method: "post" },
            on: {
              submit: function($event) {
                $event.preventDefault();
                return _vm.login.apply(null, arguments);
              }
            }
          }, [
            _c("input", {
              attrs: { type: "hidden", name: "csrf_token" },
              domProps: { value: _vm.csrf }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.username,
                    expression: "username"
                  }
                ],
                staticClass: "form-control",
                class: _vm.isInvalid,
                attrs: { type: "text", placeholder: "Username", name: "username" },
                domProps: { value: _vm.username },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return;
                    }
                    _vm.username = $event.target.value;
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group mb-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                staticClass: "form-control",
                class: _vm.isInvalid,
                attrs: {
                  type: "password",
                  placeholder: "Password",
                  name: "password"
                },
                domProps: { value: _vm.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return;
                    }
                    _vm.password = $event.target.value;
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(1)
            ]),
            _vm._v(" "),
            _vm._m(2)
          ])
        ]);
      };
      __vue_staticRenderFns__ = [
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("div", { staticClass: "input-group-append" }, [
            _c("div", { staticClass: "input-group-text" }, [
              _c("span", { staticClass: "fas fa-envelope" })
            ])
          ]);
        },
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("div", { staticClass: "input-group-append" }, [
            _c("div", { staticClass: "input-group-text" }, [
              _c("span", { staticClass: "fas fa-lock" })
            ])
          ]);
        },
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-8" }, [
              _c("div", { staticClass: "icheck-primary" }, [
                _c("input", { attrs: { type: "checkbox", id: "remember" } }),
                _vm._v(" "),
                _c("label", { attrs: { for: "remember" } }, [
                  _vm._v("\n                        Remember Me\n                    ")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4" }, [
              _c("button", {
                staticClass: "btn btn-primary btn-block",
                attrs: { type: "submit" }
              }, [_vm._v("Sign In")])
            ])
          ]);
        }
      ];
      __vue_render__._withStripped = true;
      __vue_inject_styles__ = void 0;
      __vue_scope_id__ = void 0;
      __vue_module_identifier__ = void 0;
      __vue_is_functional_template__ = false;
      __vue_component__ = /* @__PURE__ */ __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, void 0, void 0, void 0);
      Login_default = __vue_component__;
    }
  });

  // resource/js/components/users/ModalUser.vue
  var ModalUser_exports = {};
  __export(ModalUser_exports, {
    default: () => ModalUser_default
  });
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "resource\\js\\components\\users\\ModalUser.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_script__2, __vue_render__2, __vue_staticRenderFns__2, __vue_inject_styles__2, __vue_scope_id__2, __vue_module_identifier__2, __vue_is_functional_template__2, __vue_component__2, ModalUser_default;
  var init_ModalUser = __esm({
    "resource/js/components/users/ModalUser.vue"() {
      __vue_script__2 = {
        name: "u-modal",
        props: {
          csrf_token: {
            required: true
          }
        },
        data() {
          return {
            id_user: void 0,
            name_user: void 0,
            username: void 0,
            password: void 0,
            role: void 0,
            pic: "/images/anonymous.png",
            url_pic: "/assets/images/anonymous.png",
            edit: false
          };
        },
        methods: {
          onFileChange(e) {
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length)
              return;
            if (files[0].size > 2e6) {
              this.$swal.fire({
                icon: "warning",
                title: "The image is very heavy, the limit is up to 2mb"
              });
              return;
            }
            this.pic = files[0];
            return this.url_pic = URL.createObjectURL(files[0]);
          },
          handleSubmitUser() {
            const form_data = new FormData();
            form_data.append("csrf_token", this.csrf_token);
            form_data.append("name_user", this.name_user);
            form_data.append("username", this.username);
            form_data.append("password", this.password);
            form_data.append("role", this.role);
            form_data.append("pic", this.pic);
            if (this.edit) {
              axios({
                method: "post",
                url: `/users/edit/${this.id_user}`,
                headers: {
                  "Content-Type": "multipart/form-data"
                },
                data: form_data
              }).then((response) => {
                const { data: { status, response: resp } } = response;
                if (status) {
                  this.$emit("editData", JSON.parse(resp));
                  this.$refs.closeModal.click();
                  this.reset();
                }
              });
            } else {
              axios({
                method: "post",
                url: "/users/create",
                headers: {
                  "Content-Type": "multipart/form-data"
                },
                data: form_data
              }).then((response) => {
                const { data: { status, response: resp } } = response;
                if (status) {
                  this.$refs.closeModal.click();
                  this.$emit("mutateUser", JSON.parse(resp));
                  this.reset();
                } else {
                  this.$swal.fire({
                    icon: "error",
                    title: "Error.",
                    text: resp
                  });
                }
              });
            }
          },
          reset() {
            this.name_user = "";
            this.username = "";
            this.password = "";
            this.role = "";
            this.pic = "";
            this.url_pic = this.prop_pic;
            this.edit = false;
          },
          editU(data_edit) {
            this.edit = true;
            this.id_user = data_edit.id;
            this.name_user = data_edit.name;
            this.username = data_edit.username;
            this.role = data_edit.role;
            this.pic = data_edit.pic;
            this.url_pic = data_edit.pic;
          }
        }
      };
      __vue_render__2 = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", {
          staticClass: "modal fade",
          attrs: {
            id: "create-modal-user",
            tabindex: "-1",
            "aria-labelledby": "UserCreateModal",
            "aria-hidden": "true"
          }
        }, [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("form", {
                attrs: {
                  role: "form",
                  method: "POST",
                  enctype: "multipart/form-data"
                },
                on: {
                  submit: function($event) {
                    $event.preventDefault();
                    return _vm.handleSubmitUser.apply(null, arguments);
                  }
                }
              }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", {
                    staticClass: "modal-title",
                    attrs: { id: "UserCreateModal" }
                  }, [_vm._v("Add New User")]),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "btn-close",
                    attrs: {
                      type: "button",
                      "data-bs-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    on: { click: _vm.reset }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.name_user,
                              expression: "name_user"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "name_user",
                            id: "name_user",
                            placeholder: "Name User",
                            required: ""
                          },
                          domProps: { value: _vm.name_user },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return;
                              }
                              _vm.name_user = $event.target.value;
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.username,
                              expression: "username"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "username",
                            id: "username",
                            placeholder: "Username",
                            required: ""
                          },
                          domProps: { value: _vm.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return;
                              }
                              _vm.username = $event.target.value;
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            name: "password",
                            id: "password",
                            placeholder: "Password",
                            required: ""
                          },
                          domProps: { value: _vm.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return;
                              }
                              _vm.password = $event.target.value;
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _vm._m(3),
                        _vm._v(" "),
                        _c("select", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.role,
                              expression: "role"
                            }
                          ],
                          staticClass: "form-select",
                          attrs: { name: "role", id: "role", required: "" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
                                return o.selected;
                              }).map(function(o) {
                                var val = "_value" in o ? o._value : o.value;
                                return val;
                              });
                              _vm.role = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
                            }
                          }
                        }, [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select user role")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Administrator")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("Assistant")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v("Seller")
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("h6", { staticClass: "card-title" }, [
                        _vm._v("Upload photo")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "file",
                          name: "pic",
                          accept: ".png, .jpg, .jpeg"
                        },
                        on: { change: _vm.onFileChange }
                      }),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("max weight 20mb ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("img", {
                          staticClass: "img-thumbnail",
                          attrs: { src: _vm.url_pic, width: "100" }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c("button", {
                    ref: "closeModal",
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-bs-dismiss": "modal" }
                  }, [_vm._v("\n            Close\n          ")]),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-primary", attrs: { type: "submit" } }, [_vm._v("Save user")])
                ])
              ])
            ])
          ])
        ]);
      };
      __vue_staticRenderFns__2 = [
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("span", { staticClass: "input-group-text" }, [
            _c("i", { staticClass: "fa fa-user" })
          ]);
        },
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("span", { staticClass: "input-group-text" }, [
            _c("i", { staticClass: "fa fa-key" })
          ]);
        },
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("span", { staticClass: "input-group-text" }, [
            _c("i", { staticClass: "fa fa-lock" })
          ]);
        },
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("span", { staticClass: "input-group-text" }, [
            _c("i", { staticClass: "fa fa-users" })
          ]);
        }
      ];
      __vue_render__2._withStripped = true;
      __vue_inject_styles__2 = void 0;
      __vue_scope_id__2 = void 0;
      __vue_module_identifier__2 = void 0;
      __vue_is_functional_template__2 = false;
      __vue_component__2 = /* @__PURE__ */ __vue_normalize__2({ render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 }, __vue_inject_styles__2, __vue_script__2, __vue_scope_id__2, __vue_is_functional_template__2, __vue_module_identifier__2, false, void 0, void 0, void 0);
      ModalUser_default = __vue_component__2;
    }
  });

  // resource/js/components/users/TableUsers.vue
  var TableUsers_exports = {};
  __export(TableUsers_exports, {
    default: () => TableUsers_default
  });
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "resource\\js\\components\\users\\TableUsers.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_script__3, __vue_render__3, __vue_staticRenderFns__3, __vue_inject_styles__3, __vue_scope_id__3, __vue_module_identifier__3, __vue_is_functional_template__3, __vue_component__3, TableUsers_default;
  var init_TableUsers = __esm({
    "resource/js/components/users/TableUsers.vue"() {
      init_ModalUser();
      __vue_script__3 = {
        name: "u-table",
        props: {
          users: {
            type: String,
            required: true
          },
          csrf_token: {
            type: String,
            required: true
          }
        },
        components: {
          ModalUser: ModalUser_default
        },
        data() {
          return {
            u_search: "",
            userParser: JSON.parse(this.users),
            datatable: void 0,
            editB: false
          };
        },
        methods: {
          defineRole(role) {
            switch (role) {
              case "1":
                return "Admin";
              case "2":
                return "Assistant";
              case "3":
                return "Seller";
            }
          },
          defineState(state) {
            switch (state) {
              case "1":
                return "Active";
              case "0":
                return "Disabled";
            }
          },
          StateClass(state) {
            if (state == "1") {
              return "btn btn-success btn-sm";
            } else if (state == "0") {
              return "btn btn-danger btn-sm";
            }
          },
          UpdateState(id, state) {
            let newState = state == "1" ? "0" : "1";
            axios({
              method: "post",
              url: `/users/state/update/${id}`,
              data: {
                csrf_token: this.csrf_token,
                new_state: newState
              }
            }).then((response) => {
              const { data: { response: resp } } = response;
              const user2 = this.userParser.find((u) => u.id === resp.id);
              user2.state = resp.state;
            });
            return user.state;
          },
          formatDate(date) {
            const datetime = new Date(date);
            return datetime.toLocaleDateString("es-Mx");
          },
          userPic(pic) {
            if (pic) {
              return pic;
            } else {
              return "/assets/images/anonymous.png";
            }
          },
          mutateData(data) {
            this.userParser.push(data);
            new Promise((res) => {
              this.datatable.destroy();
              res(true);
            }).then(() => {
              this.mountedDatatable();
            });
          },
          editData(data) {
            const user2 = this.userParser.find((u) => u.id === data.id);
            user2.name = data.name;
            user2.username = data.username;
            user2.role = data.role;
            user2.pic = data.pic;
          },
          mountedDatatable() {
            return this.datatable = $("#datatable-user").DataTable({
              responsive: true,
              destroy: true,
              lengthChange: false,
              autoWidth: false,
              rowReorder: {
                selector: "td:nth-child(2)"
              }
            });
          },
          editU(id_u) {
            const data = this.userParser.find((u) => u.id === id_u);
            this.$refs.modal.editU(data);
            $("#modal-user-button").click();
          },
          deleteU(id_u) {
            this.$swal.fire({
              title: "Are you sure?",
              text: "do you want to delete this user?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                axios({
                  method: "post",
                  url: `/users/delete/${id_u}`,
                  data: {
                    csrf_token: this.csrf_token
                  }
                }).then((response) => {
                  const { data: { status } } = response;
                  if (status) {
                    this.$swal.fire("Deleted!", "the user was deleted.", "success");
                    this.userParser.splice(this.userParser.findIndex((u) => u.id === id_u), 1);
                  }
                });
              }
            });
          }
        },
        mounted() {
          this.mountedDatatable();
        }
      };
      __vue_render__3 = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("table", {
              staticClass: "table table-striped",
              attrs: { id: "datatable-user" }
            }, [
              _vm._m(1),
              _vm._v(" "),
              _c("tbody", _vm._l(_vm.userParser, function(user2, index) {
                return _c("tr", { key: index }, [
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _vm._v(_vm._s(index + 1))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _vm._v(_vm._s(user2.name))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _vm._v(_vm._s(user2.username))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _c("img", {
                      staticClass: "img-thumbnail rounded",
                      attrs: { src: _vm.userPic(user2.pic), width: "50" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _vm._v(_vm._s(_vm.defineRole(user2.role)))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _c("button", {
                      class: _vm.StateClass(user2.state),
                      attrs: {
                        type: "button",
                        title: "Activate or deactivate user"
                      },
                      on: {
                        click: function($event) {
                          return _vm.UpdateState(user2.id, user2.state);
                        }
                      }
                    }, [_vm._v(_vm._s(_vm.defineState(user2.state)))])
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _vm._v(_vm._s(user2.last_login))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _vm._v(_vm._s(_vm.formatDate(user2.date)))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _c("div", [
                      _c("button", {
                        staticClass: "btn btn-warning edit",
                        on: {
                          click: function($event) {
                            return _vm.editU(user2.id);
                          }
                        }
                      }, [_c("i", { staticClass: "fa fa-pencil" })]),
                      _vm._v(" "),
                      _c("button", {
                        staticClass: "btn btn-danger delete",
                        on: {
                          click: function($event) {
                            return _vm.deleteU(user2.id);
                          }
                        }
                      }, [_c("i", { staticClass: "fa fa-times" })])
                    ])
                  ])
                ]);
              }), 0)
            ])
          ]),
          _vm._v(" "),
          _c("u-modal", {
            ref: "modal",
            attrs: { csrf_token: _vm.csrf_token },
            on: { mutateUser: _vm.mutateData, editData: _vm.editData }
          })
        ], 1);
      };
      __vue_staticRenderFns__3 = [
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("div", { staticClass: "card-header" }, [
            _c("h3", { staticClass: "card-title" }, [_vm._v("List users")])
          ]);
        },
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("thead", [
            _c("tr", [
              _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center desktop" }, [_vm._v("Name")]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center" }, [_vm._v("User")]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center" }, [_vm._v("Pic")]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center" }, [_vm._v("Role")]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center all" }, [_vm._v("Status")]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center" }, [_vm._v("Last Login")]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center" }, [_vm._v("Registered")]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center all" }, [_vm._v("Action")])
            ])
          ]);
        }
      ];
      __vue_render__3._withStripped = true;
      __vue_inject_styles__3 = void 0;
      __vue_scope_id__3 = void 0;
      __vue_module_identifier__3 = void 0;
      __vue_is_functional_template__3 = false;
      __vue_component__3 = /* @__PURE__ */ __vue_normalize__3({ render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 }, __vue_inject_styles__3, __vue_script__3, __vue_scope_id__3, __vue_is_functional_template__3, __vue_module_identifier__3, false, void 0, void 0, void 0);
      TableUsers_default = __vue_component__3;
    }
  });

  // resource/js/components/categories/ModalCategories.vue
  var ModalCategories_exports = {};
  __export(ModalCategories_exports, {
    default: () => ModalCategories_default
  });
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "resource\\js\\components\\categories\\ModalCategories.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_script__4, __vue_render__4, __vue_staticRenderFns__4, __vue_inject_styles__4, __vue_scope_id__4, __vue_module_identifier__4, __vue_is_functional_template__4, __vue_component__4, ModalCategories_default;
  var init_ModalCategories = __esm({
    "resource/js/components/categories/ModalCategories.vue"() {
      __vue_script__4 = {
        name: "u-modal",
        props: {
          csrf_token: {
            required: true
          }
        },
        data() {
          return {
            id_category: void 0,
            name: void 0,
            description: void 0
          };
        },
        methods: {
          handleSubmitCategory() {
            const form_data = new FormData();
            form_data.append("csrf_token", this.csrf_token);
            form_data.append("name", this.name);
            form_data.append("description", this.description);
            if (this.edit) {
              axios({
                method: "post",
                url: `/categories/edit/${this.id_category}`,
                headers: {
                  "Content-Type": "multipart/form-data"
                },
                data: form_data
              }).then((response) => {
                const { data: { status, response: resp } } = response;
                if (status) {
                  this.$emit("editData", JSON.parse(resp));
                  this.$refs.closeModal.click();
                  this.reset();
                }
              });
            } else {
              axios({
                method: "post",
                url: "/categories/create",
                headers: {
                  "Content-Type": "multipart/form-data"
                },
                data: form_data
              }).then((response) => {
                const { data: { status, response: resp } } = response;
                if (status) {
                  this.$refs.closeModal.click();
                  this.$emit("mutateCate", JSON.parse(resp));
                  this.reset();
                } else {
                  this.$swal.fire({
                    icon: "error",
                    title: "Error.",
                    text: resp
                  });
                }
              });
            }
          },
          reset() {
            this.name = "";
            this.description = "";
            this.edit = false;
          },
          editCate(data_edit) {
            this.edit = true;
            this.id_category = data_edit.id;
            this.name = data_edit.name;
            this.description = data_edit.description;
          }
        }
      };
      __vue_render__4 = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", {
          staticClass: "modal fade",
          attrs: {
            id: "create-modal-category",
            tabindex: "-1",
            "aria-labelledby": "CategoryCreateModal",
            "aria-hidden": "true"
          }
        }, [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("form", {
                attrs: {
                  role: "form",
                  method: "POST",
                  enctype: "multipart/form-data"
                },
                on: {
                  submit: function($event) {
                    $event.preventDefault();
                    return _vm.handleSubmitCategory.apply(null, arguments);
                  }
                }
              }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c("h5", {
                    staticClass: "modal-title",
                    attrs: { id: "CategoryCreateModal" }
                  }, [_vm._v("Add New Category")]),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "btn-close",
                    attrs: {
                      type: "button",
                      "data-bs-dismiss": "modal",
                      "aria-label": "Close"
                    },
                    on: { click: _vm.reset }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.name,
                              expression: "name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "name",
                            id: "name",
                            placeholder: "Name Category",
                            required: ""
                          },
                          domProps: { value: _vm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return;
                              }
                              _vm.name = $event.target.value;
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group input-group-lg" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.description,
                              expression: "description"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "description",
                            id: "description",
                            placeholder: "Add a Description"
                          },
                          domProps: { value: _vm.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return;
                              }
                              _vm.description = $event.target.value;
                            }
                          }
                        })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c("button", {
                    ref: "closeModal",
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-bs-dismiss": "modal" }
                  }, [_vm._v("\n            Close\n          ")]),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-primary", attrs: { type: "submit" } }, [_vm._v("Save category")])
                ])
              ])
            ])
          ])
        ]);
      };
      __vue_staticRenderFns__4 = [
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("span", { staticClass: "input-group-text" }, [
            _c("i", { staticClass: "fa fa-th" })
          ]);
        },
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("span", { staticClass: "input-group-text" }, [
            _c("i", { staticClass: "fa fa-align-center" })
          ]);
        }
      ];
      __vue_render__4._withStripped = true;
      __vue_inject_styles__4 = void 0;
      __vue_scope_id__4 = void 0;
      __vue_module_identifier__4 = void 0;
      __vue_is_functional_template__4 = false;
      __vue_component__4 = /* @__PURE__ */ __vue_normalize__4({ render: __vue_render__4, staticRenderFns: __vue_staticRenderFns__4 }, __vue_inject_styles__4, __vue_script__4, __vue_scope_id__4, __vue_is_functional_template__4, __vue_module_identifier__4, false, void 0, void 0, void 0);
      ModalCategories_default = __vue_component__4;
    }
  });

  // resource/js/components/categories/TableCategories.vue
  var TableCategories_exports = {};
  __export(TableCategories_exports, {
    default: () => TableCategories_default
  });
  function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "resource\\js\\components\\categories\\TableCategories.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_script__5, __vue_render__5, __vue_staticRenderFns__5, __vue_inject_styles__5, __vue_scope_id__5, __vue_module_identifier__5, __vue_is_functional_template__5, __vue_component__5, TableCategories_default;
  var init_TableCategories = __esm({
    "resource/js/components/categories/TableCategories.vue"() {
      init_ModalCategories();
      __vue_script__5 = {
        name: "cate-table",
        props: {
          categories: {
            type: String,
            required: true
          },
          csrf_token: {
            type: String,
            required: true
          }
        },
        components: {
          ModalCategory: ModalCategories_default
        },
        data() {
          return {
            u_search: "",
            categoryParser: JSON.parse(this.categories),
            datatable: void 0,
            editB: false
          };
        },
        methods: {
          mountedDatatable() {
            return this.datatable = $("#datatable-categories").DataTable({
              responsive: true,
              destroy: true,
              lengthChange: false,
              autoWidth: false,
              rowReorder: {
                selector: "td:nth-child(2)"
              }
            });
          },
          mutateData(data) {
            this.categoryParser.push(data);
            new Promise((res) => {
              this.datatable.destroy();
              res(true);
            }).then(() => {
              this.mountedDatatable();
            });
          },
          editData(data) {
            const category = this.categoryParser.find((u) => u.id === data.id);
            category.name = data.name;
            category.description = data.description;
          },
          editCate(id) {
            const data = this.categoryParser.find((u) => u.id === id);
            this.$refs.modal.editCate(data);
            $("#modal-category-button").click();
          },
          deleteCate(id) {
            this.$swal.fire({
              title: "Are you sure?",
              text: "do you want to delete this category?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                axios({
                  method: "post",
                  url: `/categories/delete/${id}`,
                  data: {
                    csrf_token: this.csrf_token
                  }
                }).then((response) => {
                  const { data: { status } } = response;
                  if (status) {
                    this.$swal.fire("Deleted!", "the category was deleted.", "success");
                    this.categoryParser.splice(this.categoryParser.findIndex((u) => u.id === id), 1);
                  }
                });
              }
            });
          }
        },
        mounted() {
          this.mountedDatatable();
        }
      };
      __vue_render__5 = function() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("table", {
              staticClass: "table table-striped",
              attrs: { id: "datatable-categories" }
            }, [
              _vm._m(1),
              _vm._v(" "),
              _c("tbody", _vm._l(_vm.categoryParser, function(category, index) {
                return _c("tr", { key: index }, [
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _vm._v(_vm._s(index + 1))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _vm._v(_vm._s(category.name))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _vm._v(_vm._s(category.description))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center align-middle" }, [
                    _c("div", [
                      _c("button", {
                        staticClass: "btn btn-warning edit",
                        on: {
                          click: function($event) {
                            return _vm.editCate(category.id);
                          }
                        }
                      }, [_c("i", { staticClass: "fa fa-pencil" })]),
                      _vm._v(" "),
                      _c("button", {
                        staticClass: "btn btn-danger delete",
                        on: {
                          click: function($event) {
                            return _vm.deleteCate(category.id);
                          }
                        }
                      }, [_c("i", { staticClass: "fa fa-times" })])
                    ])
                  ])
                ]);
              }), 0)
            ])
          ]),
          _vm._v(" "),
          _c("cate-modal", {
            ref: "modal",
            attrs: { csrf_token: _vm.csrf_token },
            on: { mutateCate: _vm.mutateData, editData: _vm.editData }
          })
        ], 1);
      };
      __vue_staticRenderFns__5 = [
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("div", { staticClass: "card-header" }, [
            _c("h3", { staticClass: "card-title" }, [_vm._v("List categories")])
          ]);
        },
        function() {
          var _vm = this;
          var _h = _vm.$createElement;
          var _c = _vm._self._c || _h;
          return _c("thead", [
            _c("tr", [
              _c("th", { staticClass: "text-center" }, [_vm._v("#")]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center" }, [_vm._v("Name")]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center desktop" }, [
                _vm._v("Description")
              ]),
              _vm._v(" "),
              _c("th", { staticClass: "text-center all" }, [_vm._v("Action")])
            ])
          ]);
        }
      ];
      __vue_render__5._withStripped = true;
      __vue_inject_styles__5 = void 0;
      __vue_scope_id__5 = void 0;
      __vue_module_identifier__5 = void 0;
      __vue_is_functional_template__5 = false;
      __vue_component__5 = /* @__PURE__ */ __vue_normalize__5({ render: __vue_render__5, staticRenderFns: __vue_staticRenderFns__5 }, __vue_inject_styles__5, __vue_script__5, __vue_scope_id__5, __vue_is_functional_template__5, __vue_module_identifier__5, false, void 0, void 0, void 0);
      TableCategories_default = __vue_component__5;
    }
  });

  // resource/js/app.js
  var import_vue = __toESM(require_vue());
  var import_vue_sweetalert2 = __toESM(require_vue_sweetalert_umd());
  import_vue.default.config.productionTip = false;
  window.axios = require_axios2();
  window.Vue = require_vue();
  import_vue.default.use(import_vue_sweetalert2.default);
  import_vue.default.component("login-form", (init_Login(), __toCommonJS(Login_exports)).default);
  import_vue.default.component("u-table", (init_TableUsers(), __toCommonJS(TableUsers_exports)).default);
  import_vue.default.component("u-modal", (init_ModalUser(), __toCommonJS(ModalUser_exports)).default);
  import_vue.default.component("cate-table", (init_TableCategories(), __toCommonJS(TableCategories_exports)).default);
  import_vue.default.component("cate-modal", (init_ModalCategories(), __toCommonJS(ModalCategories_exports)).default);
  var app = new import_vue.default({
    el: "#app"
  });
})();
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
