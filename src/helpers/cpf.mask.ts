Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.validateCPF = exports.CPF_MASK = undefined;
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
var CPF_MASK = (exports.CPF_MASK = "999.999.999-99");
var validateCPF = (exports.validateCPF = function validateCPF(cpf) {
  if (cpf == "") {
    return true;
  }
  cpf = cpf.replace(/\./gi, "").replace(/-/gi, "");
  var isValid = true;
  var sum;
  var rest;
  var i;
  i = 0;
  sum = 0;
  if (
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  ) {
    isValid = false;
  }
  for (i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) {
    rest = 0;
  }
  if (rest != parseInt(cpf.substring(9, 10))) {
    isValid = false;
  }
  sum = 0;
  for (i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) {
    rest = 0;
  }
  if (rest != parseInt(cpf.substring(10, 11))) {
    isValid = false;
  }
  return isValid;
});
var maskOptions = {
  mask: CPF_MASK,
};
var CpfMask = (function (_BaseMask) {
  _inherits(CpfMask, _BaseMask);

  function CpfMask() {
    _classCallCheck(this, CpfMask);
    return _possibleConstructorReturn(
      this,
      (CpfMask.__proto__ || Object.getPrototypeOf(CpfMask)).apply(
        this,
        arguments
      )
    );
  }
  _createClass(
    CpfMask,
    [
      {
        key: "getValue",
        value: function getValue(value, settings) {
          return _custom2.default.shared.getValue(value, maskOptions);
        },
      },
      {
        key: "getRawValue",
        value: function getRawValue(maskedValue, settings) {
          return _get(
            CpfMask.prototype.__proto__ ||
              Object.getPrototypeOf(CpfMask.prototype),
            "removeNotNumbers",
            this
          ).call(this, maskedValue);
        },
      },
      {
        key: "validate",
        value: function validate(value, settings) {
          var isEmpty = (value || "").trim().length === 0;
          return !isEmpty && validateCPF(value);
        },
      },
      {
        key: "getMask",
        value: function getMask(value, settings) {
          return CPF_MASK;
        },
      },
    ],
    [
      {
        key: "getType",
        value: function getType() {
          return "cpf";
        },
      },
    ]
  );
  return CpfMask;
})(_base2.default);
exports.default = CpfMask;
