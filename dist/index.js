'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var submitHandler = function submitHandler(confirmButton) {
    var result = {};
    result.isAsync = function () {
        return false;
    };
    result.done = function () {
        confirmButton.onChangeMode("submit");
    };

    return result;
};

var Confirm = function (_React$Component) {
    _inherits(Confirm, _React$Component);

    function Confirm(props) {
        _classCallCheck(this, Confirm);

        var _this = _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call(this, props));

        var content = _this.props.children;
        if (!content) {
            content = _this.props.content;
        }

        _this.state = { mode: "", content: content, delayHandler: null };
        _this.onChangeMode = _this.onChangeMode.bind(_this);
        _this.onConfirming = _this.onConfirming.bind(_this);
        _this.onSubmitting = _this.onSubmitting.bind(_this);
        _this.handleClickOutside = _this.handleClickOutside.bind(_this);
        return _this;
    }

    _createClass(Confirm, [{
        key: 'onChangeMode',
        value: function onChangeMode(mode) {
            if (mode == "confirm" || mode == "confirming" || mode == "confirmation") {
                this.setState({ mode: "confirm" });
            } else if (mode == "submit" || mode == "submitted") {
                this.setState({ mode: "submit" });
            } else if (mode == "submitting") {
                this.setState({ mode: "submitting" });
            } else if (mode == "delay" || mode == "delayed") {
                this.setState({ mode: "delay" });
            } else {
                if (this.state.mode != "submit" && this.state.mode != "submitting") {
                    this.setState({ mode: "" });
                }
            }
        }
    }, {
        key: 'onSubmitting',
        value: function onSubmitting(evt) {
            var handleClick = this.props.onClick;
            var eventHandler = submitHandler(this);

            this.onChangeMode("submitting");
            var result = handleClick(evt, eventHandler);
            if (result !== false) {
                this.onChangeMode("submit");
            }
        }
    }, {
        key: 'onConfirming',
        value: function onConfirming(k) {
            var delay = this.props.delay || {};
            var delayTime = delay.time || 0;
            if (delayTime === 0 || delayTime < 50) {
                this.onChangeMode("confirm");
            } else {
                var onChangeMode = this.onChangeMode;
                onChangeMode("delay");

                var handler = setTimeout(function () {
                    onChangeMode("confirm");
                }, delayTime);

                this.setState({ delayHandler: handler });
            }
        }
    }, {
        key: 'handleClickOutside',
        value: function handleClickOutside(evt) {
            if (this.state.delayHandler) {
                clearTimeout(this.state.delayHandler);
            }
            this.onChangeMode("");
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.mode == "confirm") {
                var confirmation = this.props.confirmation || {};
                var className = confirmation.className || this.props.className;
                var style = confirmation.style || this.props.style;

                var content = confirmation.content || "Confirm ?";
                if (typeof content === "function") {
                    content = content();
                }
                var onSubmitting = this.onSubmitting;
                return _react2.default.createElement(
                    'button',
                    { type: 'button', className: className,
                        style: style, onClick: function onClick(k) {
                            return onSubmitting(k);
                        } },
                    content
                );
            } else if (this.state.mode == "submit") {
                var submitted = this.props.submitted || {};
                var willDisable = submitted.willDisable || false;

                var className = submitted.className || this.props.className;
                var style = submitted.style || this.props.style;
                var content = submitted.content || this.state.content;

                if (typeof content === "function") {
                    content = content();
                }

                if (this.props.submitted && this.props.submitted.content) {
                    return content;
                } else {
                    var onConfirming = this.onConfirming;
                    return _react2.default.createElement(
                        'button',
                        { type: 'button', className: this.props.className,
                            style: this.props.style, disabled: willDisable,
                            onClick: function onClick(k) {
                                return onConfirming(k);
                            } },
                        content
                    );
                }
            } else if (this.state.mode == "delay" || this.state.mode == "submitting") {
                var delay = this.props.delay || {};
                var delayContent = delay.content;
                var content = delayContent || "Loading...";

                if (typeof content === "function") {
                    content = content();
                }

                return _react2.default.createElement(
                    'button',
                    { type: 'button', className: this.props.className,
                        style: this.props.style, disabled: true },
                    content
                );
            } else {
                var content = this.state.content;
                if (typeof content === "function") {
                    content = content();
                }
                var onConfirming = this.onConfirming;
                return _react2.default.createElement(
                    'button',
                    { type: 'button', className: this.props.className,
                        style: this.props.style, onClick: function onClick(k) {
                            return onConfirming(k);
                        } },
                    content
                );
            }
        }
    }]);

    return Confirm;
}(_react2.default.Component);

;
var exporting = (0, _reactOnclickoutside2.default)(Confirm);
exports.default = exporting;