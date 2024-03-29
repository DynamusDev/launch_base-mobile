Object.defineProperty(exports, "__esModule", {
  value: true,
});
var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;
    if (getter === undefined) {
      return undefined;
    }
    return getter.call(receiver);
  }
};
var _base = require("./_base.mask");
var _base2 = _interopRequireDefault(_base);
var _custom = require("./custom.mask");
var _custom2 = _interopRequireDefault(_custom);
var _dateAndTime = require("date-and-time");
var _dateAndTime2 = _interopRequireDefault(_dateAndTime);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
var DATETIME_MASK_SETTINGS = {
  format: "DD/MM/YYYY HH:mm:ss",
};
var DatetimeMask = (function (_BaseMask) {
  _inherits(DatetimeMask, _BaseMask);

  function DatetimeMask() {
    _classCallCheck(this, DatetimeMask);
    return _possibleConstructorReturn(
      this,
      (DatetimeMask.__proto__ || Object.getPrototypeOf(DatetimeMask)).apply(
        this,
        arguments
      )
    );
  }
  _createClass(
    DatetimeMask,
    [
      {
        key: "getValue",
        value: function getValue(value, settings) {
          var mergedSettings = this._getMergedSettings(settings);
          var mask = this.getMask(value, mergedSettings);
          return _custom2.default.shared.getValue(value, {
            mask: mask,
          });
        },
      },
      {
        key: "getRawValue",
        value: function getRawValue(maskedValue, settings) {
          var mergedSettings = this._getMergedSettings(settings);
          return _dateAndTime2.default.parse(
            maskedValue,
            mergedSettings.format
          );
        },
      },
      {
        key: "validate",
        value: function validate(value, settings) {
          var maskedValue = this.getValue(value, settings);
          var mergedSettings = this._getMergedSettings(settings);
          var isValid = _dateAndTime2.default.isValid(
            maskedValue,
            mergedSettings.format
          );
          return isValid;
        },
      },
      {
        key: "_getMergedSettings",
        value: function _getMergedSettings(settings) {
          return _get(
            DatetimeMask.prototype.__proto__ ||
              Object.getPrototypeOf(DatetimeMask.prototype),
            "mergeSettings",
            this
          ).call(this, DATETIME_MASK_SETTINGS, settings);
        },
      },
      {
        key: "getMask",
        value: function getMask(value, settings) {
          var mask = "";
          for (var i = 0; i < settings.format.length; i++) {
            mask += settings.format[i].replace(/[a-zA-Z]+/g, "9");
          }
          return mask;
        },
      },
    ],
    [
      {
        key: "getType",
        value: function getType() {
          return "datetime";
        },
      },
    ]
  );
  return DatetimeMask;
})(_base2.default);
exports.default = DatetimeMask;
