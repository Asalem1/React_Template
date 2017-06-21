webpackHotUpdate(0,{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(36), RootInstanceProvider = __webpack_require__(37), ReactMount = __webpack_require__(24), React = __webpack_require__(10); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskListEntry = function (_React$Component) {
  _inherits(TaskListEntry, _React$Component);

  function TaskListEntry(props) {
    _classCallCheck(this, TaskListEntry);

    var _this = _possibleConstructorReturn(this, (TaskListEntry.__proto__ || Object.getPrototypeOf(TaskListEntry)).call(this, props));

    _this.state = {
      isEditing: false
    };
    return _this;
  }

  _createClass(TaskListEntry, [{
    key: "cancelClick",
    value: function cancelClick() {
      this.setState({ isEditing: !this.state.isEditing });
    }
  }, {
    key: "onEditClick",
    value: function onEditClick() {
      this.setState({ isEditing: !this.state.isEditing });
    }
  }, {
    key: "onSaveClick",
    value: function onSaveClick() {
      event.preventDefault();
      var oldTask = this.props.task;
      var newTask = this.refs.editInput.value;
      this.props.saveTask(oldTask, newTask);
      this.setState({ isEditing: false });
    }
  }, {
    key: "renderActionSection",
    value: function renderActionSection() {
      if (this.state.isEditing) {
        return _react2.default.createElement(
          "td",
          null,
          _react2.default.createElement(
            "button",
            { className: "btn", onClick: this.onSaveClick.bind(this) },
            _react2.default.createElement("span", { className: " glyphicon glyphicon-ok-circle" }),
            " update "
          ),
          _react2.default.createElement(
            "button",
            { className: "btn", onClick: this.cancelClick.bind(this) },
            _react2.default.createElement("span", { className: " glyphicon glyphicon-ban-circle" }),
            " cancel"
          )
        );
      }
      return _react2.default.createElement(
        "td",
        null,
        _react2.default.createElement(
          "button",
          { className: "btn", onClick: this.onEditClick.bind(this) },
          _react2.default.createElement("span", { className: " glyphicon glyphicon-erase" }),
          " edit "
        ),
        _react2.default.createElement(
          "button",
          { className: "btn", onClick: this.props.deleteTask.bind(this, this.props.task) },
          _react2.default.createElement("span", { className: "glyphicon glyphicon-remove-circle" }),
          " delete"
        )
      );
    }
  }, {
    key: "renderTaskSection",
    value: function renderTaskSection() {
      var task = this.props.task;

      if (this.state.isEditing) {
        return _react2.default.createElement(
          "form",
          { onSubmit: this.onSaveClick.bind(this) },
          _react2.default.createElement(
            "li",
            { className: "task-list-entry media" },
            _react2.default.createElement(
              "div",
              { className: "media-body" },
              _react2.default.createElement("input", { type: "text", defaultValue: task, ref: "editInput" })
            )
          )
        );
      }
      return _react2.default.createElement(
        "div",
        { className: "media-body" },
        task
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "li",
        { className: "task-list-entry media" },
        _react2.default.createElement(
          "tr",
          null,
          this.renderTaskSection(),
          this.renderActionSection()
        )
      );
    }
  }]);

  return TaskListEntry;
}(_react2.default.Component);

exports.default = TaskListEntry;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(38); if (makeExportsHot(module, __webpack_require__(10))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "taskListEntry.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrTGlzdEVudHJ5LmpzPzU4YTkiXSwibmFtZXMiOlsiVGFza0xpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJpc0VkaXRpbmciLCJzZXRTdGF0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbGRUYXNrIiwidGFzayIsIm5ld1Rhc2siLCJyZWZzIiwiZWRpdElucHV0IiwidmFsdWUiLCJzYXZlVGFzayIsIm9uU2F2ZUNsaWNrIiwiYmluZCIsImNhbmNlbENsaWNrIiwib25FZGl0Q2xpY2siLCJkZWxldGVUYXNrIiwicmVuZGVyVGFza1NlY3Rpb24iLCJyZW5kZXJBY3Rpb25TZWN0aW9uIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7QUFDbkIseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXO0FBREEsS0FBYjtBQUZpQjtBQUtsQjs7OztrQ0FFYTtBQUNaLFdBQUtDLFFBQUwsQ0FBYyxFQUFFRCxXQUFXLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxTQUF6QixFQUFkO0FBQ0Q7OztrQ0FFYTtBQUNaLFdBQUtDLFFBQUwsQ0FBYyxFQUFFRCxXQUFXLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxTQUF6QixFQUFkO0FBQ0Q7OztrQ0FFYTtBQUNaRSxZQUFNQyxjQUFOO0FBQ0EsVUFBTUMsVUFBVSxLQUFLTixLQUFMLENBQVdPLElBQTNCO0FBQ0EsVUFBTUMsVUFBVSxLQUFLQyxJQUFMLENBQVVDLFNBQVYsQ0FBb0JDLEtBQXBDO0FBQ0EsV0FBS1gsS0FBTCxDQUFXWSxRQUFYLENBQW9CTixPQUFwQixFQUE2QkUsT0FBN0I7QUFDQSxXQUFLTCxRQUFMLENBQWMsRUFBRUQsV0FBVyxLQUFiLEVBQWQ7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFJLEtBQUtELEtBQUwsQ0FBV0MsU0FBZixFQUEwQjtBQUN4QixlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLFdBQVUsS0FBbEIsRUFBd0IsU0FBUyxLQUFLVyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFqQztBQUE4RCxvREFBTSxXQUFVLGdDQUFoQixHQUE5RDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLFdBQVUsS0FBbEIsRUFBd0IsU0FBUyxLQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUFqQztBQUE4RCxvREFBTSxXQUFVLGlDQUFoQixHQUE5RDtBQUFBO0FBQUE7QUFGRixTQURGO0FBTUQ7QUFDRCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsS0FBbEIsRUFBd0IsU0FBUyxLQUFLRSxXQUFMLENBQWlCRixJQUFqQixDQUFzQixJQUF0QixDQUFqQztBQUE4RCxrREFBTSxXQUFVLDRCQUFoQixHQUE5RDtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFRLFdBQVUsS0FBbEIsRUFBd0IsU0FBUyxLQUFLZCxLQUFMLENBQVdpQixVQUFYLENBQXNCSCxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxLQUFLZCxLQUFMLENBQVdPLElBQTVDLENBQWpDO0FBQW9GLGtEQUFNLFdBQVUsbUNBQWhCLEdBQXBGO0FBQUE7QUFBQTtBQUZGLE9BREY7QUFNRDs7O3dDQUVtQjtBQUNsQixVQUFNQSxPQUFPLEtBQUtQLEtBQUwsQ0FBV08sSUFBeEI7O0FBRUEsVUFBSSxLQUFLTixLQUFMLENBQVdDLFNBQWYsRUFBMEI7QUFDeEIsZUFDRTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUtXLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSx1QkFBZDtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRSx1REFBTyxNQUFLLE1BQVosRUFBbUIsY0FBY1AsSUFBakMsRUFBdUMsS0FBSSxXQUEzQztBQURGO0FBREY7QUFERixTQURGO0FBU0Q7QUFDRCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNHQTtBQURILE9BREY7QUFLRDs7OzZCQUVRO0FBQ1AsYUFDSTtBQUFBO0FBQUEsVUFBSSxXQUFVLHVCQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0csZUFBS1csaUJBQUwsRUFESDtBQUVHLGVBQUtDLG1CQUFMO0FBRkg7QUFERixPQURKO0FBUUQ7Ozs7RUF2RXdDLGdCQUFNQyxTOztrQkFBNUJyQixhIiwiZmlsZSI6IjAuNzQ4ZjAyZTZhMWMxYzlkNzNiY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNFZGl0aW5nOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FuY2VsQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiAhdGhpcy5zdGF0ZS5pc0VkaXRpbmcgfSk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRDbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6ICF0aGlzLnN0YXRlLmlzRWRpdGluZyB9KTtcclxuICB9XHJcblxyXG4gIG9uU2F2ZUNsaWNrKCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG9sZFRhc2sgPSB0aGlzLnByb3BzLnRhc2tcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0aGlzLnJlZnMuZWRpdElucHV0LnZhbHVlO1xyXG4gICAgdGhpcy5wcm9wcy5zYXZlVGFzayhvbGRUYXNrLCBuZXdUYXNrKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IGZhbHNlIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXJBY3Rpb25TZWN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFZGl0aW5nKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLm9uU2F2ZUNsaWNrLmJpbmQodGhpcyl9PjxzcGFuIGNsYXNzTmFtZT1cIiBnbHlwaGljb24gZ2x5cGhpY29uLW9rLWNpcmNsZVwiPjwvc3Bhbj4gdXBkYXRlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLmNhbmNlbENsaWNrLmJpbmQodGhpcyl9PjxzcGFuIGNsYXNzTmFtZT1cIiBnbHlwaGljb24gZ2x5cGhpY29uLWJhbi1jaXJjbGVcIj48L3NwYW4+IGNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLm9uRWRpdENsaWNrLmJpbmQodGhpcyl9PjxzcGFuIGNsYXNzTmFtZT1cIiBnbHlwaGljb24gZ2x5cGhpY29uLWVyYXNlXCI+PC9zcGFuPiBlZGl0IDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5wcm9wcy5kZWxldGVUYXNrLmJpbmQodGhpcywgdGhpcy5wcm9wcy50YXNrKX0+PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUtY2lyY2xlXCI+PC9zcGFuPiBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgPC90ZD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUYXNrU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnByb3BzLnRhc2s7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFZGl0aW5nKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TYXZlQ2xpY2suYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFzay1saXN0LWVudHJ5IG1lZGlhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17dGFza30gcmVmPVwiZWRpdElucHV0XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAge3Rhc2t9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhc2stbGlzdC1lbnRyeSBtZWRpYVwiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJUYXNrU2VjdGlvbigpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJBY3Rpb25TZWN0aW9uKCl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3Rhc2tMaXN0RW50cnkuanMiXSwic291cmNlUm9vdCI6IiJ9