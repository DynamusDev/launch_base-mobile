Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createClass = function() {
  function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
      }
  }
  return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
  }
}
var BaseMask = function() {
  function BaseMask() {
      _classCallCheck(this, BaseMask);
  }
  _createClass(BaseMask, [{
      key: 'getKeyboardType',
      value: function getKeyboardType() {
          return 'numeric';
      }
  }, {
      key: 'mergeSettings',
      value: function mergeSettings(obj1, obj2) {
          var obj3 = {};
          for (var attrname in obj1) {
              obj3[attrname] = obj1[attrname];
          }
          for (var attrname in obj2) {
              obj3[attrname] = obj2[attrname];
          }
          return obj3;
      }
  }, {
      key: 'getRawValue',
      value: function getRawValue(maskedValue, settings) {
          return maskedValue;
      }
  }, {
      key: 'getDefaultValue',
      value: function getDefaultValue(value) {
          if (value === undefined || value === null) {
              return '';
          }
          return value;
      }
  }, {
      key: 'getMask',
      value: function getMask(value, settings) {
          throw new Error('getCurrentMask is not implemented');
      }
  }, {
      key: 'removeNotNumbers',
      value: function removeNotNumbers(text) {
          return text.replace(/[^0-9]+/g, '');
      }
  }, {
      key: 'removeWhiteSpaces',
      value: function removeWhiteSpaces(text) {
          return (text || '').replace(/\s/g, '');
      }
  }]);
  return BaseMask;
}();
exports.default = BaseMask;