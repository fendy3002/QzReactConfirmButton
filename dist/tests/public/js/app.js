'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../../../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var content1 = function content1() {
                return _react2.default.createElement(
                    'span',
                    { style: { fontStyle: "italic" } },
                    'Submit'
                );
            };
            var confirmation1 = {
                content: function content() {
                    return _react2.default.createElement(
                        'span',
                        { style: { fontWeight: "bold" } },
                        'Are you sure to continue?'
                    );
                }
            };
            var confirmation2 = {
                style: { backgroundColor: "yellow" }
            };

            var delay1 = {
                time: 1000
            };
            var delay2 = {
                time: 1000,
                content: function content() {
                    return _react2.default.createElement(
                        'span',
                        { style: { fontWeight: "bold" } },
                        '...'
                    );
                }
            };

            var submitted1 = {
                willDisable: true
            };
            var submitted2 = {
                content: function content() {
                    return _react2.default.createElement(
                        'span',
                        { style: { fontWeight: "bold" } },
                        'Success'
                    );
                }
            };

            var async1 = function async1(evt, handler) {
                setTimeout(function () {
                    console.log("ASYNC SUBMITTED");
                    handler.done();
                }, 1000);
                return handler.isAsync(); // equals return false
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Normal'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Normal:',
                        _react2.default.createElement(
                            _index2.default,
                            { onClick: function onClick() {
                                    return console.log("SUBMITTED!");
                                } },
                            'Submit'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Function as content:',
                        _react2.default.createElement(_index2.default, { onClick: function onClick() {
                                return console.log("SUBMITTED!");
                            },
                            content: content1 })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Confirmation'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Confirm content:',
                        _react2.default.createElement(
                            _index2.default,
                            { onClick: function onClick() {
                                    return console.log("SUBMITTED!");
                                },
                                confirmation: confirmation1 },
                            'Submit'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Confirm button style:',
                        _react2.default.createElement(
                            _index2.default,
                            { onClick: function onClick() {
                                    return console.log("SUBMITTED!");
                                },
                                confirmation: confirmation2 },
                            'Submit'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Delay Confirmation'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Delayed:',
                        _react2.default.createElement(
                            _index2.default,
                            { onClick: function onClick() {
                                    return console.log("SUBMITTED!");
                                }, delay: delay1 },
                            'Submit'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Delayed with custom content:',
                        _react2.default.createElement(
                            _index2.default,
                            { onClick: function onClick() {
                                    return console.log("SUBMITTED!");
                                },
                                delay: delay2 },
                            'Submit'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Submitted'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Will disable:',
                        _react2.default.createElement(
                            _index2.default,
                            { onClick: function onClick() {
                                    return console.log("SUBMITTED!");
                                },
                                submitted: submitted1 },
                            'Submit'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Custom content:',
                        _react2.default.createElement(
                            _index2.default,
                            { onClick: function onClick() {
                                    return console.log("SUBMITTED!");
                                },
                                submitted: submitted2 },
                            'Submit'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Async'
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        'Async:',
                        _react2.default.createElement(
                            _index2.default,
                            { onClick: async1 },
                            'Submit'
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

;

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('content'));