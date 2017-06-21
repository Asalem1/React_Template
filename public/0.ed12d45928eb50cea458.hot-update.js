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
      var _props = this.props,
          task = _props.task,
          isCompleted = _props.isCompleted;

      var taskStyle = {
        color: isCompleted ? 'green' : 'red',
        cursor: 'pointer'
      };

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
        "td",
        {
          style: taskStyle,
          onClick: this.props.toggleTask.bind(this, task)
        },
        task
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "thead",
        null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrTGlzdEVudHJ5LmpzPzU4YTkiXSwibmFtZXMiOlsiVGFza0xpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJpc0VkaXRpbmciLCJzZXRTdGF0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbGRUYXNrIiwidGFzayIsIm5ld1Rhc2siLCJyZWZzIiwiZWRpdElucHV0IiwidmFsdWUiLCJzYXZlVGFzayIsIm9uU2F2ZUNsaWNrIiwiYmluZCIsImNhbmNlbENsaWNrIiwib25FZGl0Q2xpY2siLCJkZWxldGVUYXNrIiwiaXNDb21wbGV0ZWQiLCJ0YXNrU3R5bGUiLCJjb2xvciIsImN1cnNvciIsInRvZ2dsZVRhc2siLCJyZW5kZXJUYXNrU2VjdGlvbiIsInJlbmRlckFjdGlvblNlY3Rpb24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7OztBQUNuQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVc7QUFEQSxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhO0FBQ1osV0FBS0MsUUFBTCxDQUFjLEVBQUVELFdBQVcsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLFNBQXpCLEVBQWQ7QUFDRDs7O2tDQUVhO0FBQ1osV0FBS0MsUUFBTCxDQUFjLEVBQUVELFdBQVcsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLFNBQXpCLEVBQWQ7QUFDRDs7O2tDQUVhO0FBQ1pFLFlBQU1DLGNBQU47QUFDQSxVQUFNQyxVQUFVLEtBQUtOLEtBQUwsQ0FBV08sSUFBM0I7QUFDQSxVQUFNQyxVQUFVLEtBQUtDLElBQUwsQ0FBVUMsU0FBVixDQUFvQkMsS0FBcEM7QUFDQSxXQUFLWCxLQUFMLENBQVdZLFFBQVgsQ0FBb0JOLE9BQXBCLEVBQTZCRSxPQUE3QjtBQUNBLFdBQUtMLFFBQUwsQ0FBYyxFQUFFRCxXQUFXLEtBQWIsRUFBZDtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQUksS0FBS0QsS0FBTCxDQUFXQyxTQUFmLEVBQTBCO0FBQ3hCLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsV0FBVSxLQUFsQixFQUF3QixTQUFTLEtBQUtXLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWpDO0FBQThELG9EQUFNLFdBQVUsZ0NBQWhCLEdBQTlEO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsV0FBVSxLQUFsQixFQUF3QixTQUFTLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQWpDO0FBQThELG9EQUFNLFdBQVUsaUNBQWhCLEdBQTlEO0FBQUE7QUFBQTtBQUZGLFNBREY7QUFNRDtBQUNELGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxLQUFsQixFQUF3QixTQUFTLEtBQUtFLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLENBQWpDO0FBQThELGtEQUFNLFdBQVUsNEJBQWhCLEdBQTlEO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQVEsV0FBVSxLQUFsQixFQUF3QixTQUFTLEtBQUtkLEtBQUwsQ0FBV2lCLFVBQVgsQ0FBc0JILElBQXRCLENBQTJCLElBQTNCLEVBQWlDLEtBQUtkLEtBQUwsQ0FBV08sSUFBNUMsQ0FBakM7QUFBb0Ysa0RBQU0sV0FBVSxtQ0FBaEIsR0FBcEY7QUFBQTtBQUFBO0FBRkYsT0FERjtBQU1EOzs7d0NBRW1CO0FBQUEsbUJBQ1ksS0FBS1AsS0FEakI7QUFBQSxVQUNWTyxJQURVLFVBQ1ZBLElBRFU7QUFBQSxVQUNKVyxXQURJLFVBQ0pBLFdBREk7O0FBRWxCLFVBQU1DLFlBQVk7QUFDaEJDLGVBQU9GLGNBQWMsT0FBZCxHQUF3QixLQURmO0FBRWhCRyxnQkFBUTtBQUZRLE9BQWxCOztBQUtBLFVBQUksS0FBS3BCLEtBQUwsQ0FBV0MsU0FBZixFQUEwQjtBQUN4QixlQUNFO0FBQUE7QUFBQSxZQUFNLFVBQVUsS0FBS1csV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBaEI7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFVLHVCQUFkO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFLHVEQUFPLE1BQUssTUFBWixFQUFtQixjQUFjUCxJQUFqQyxFQUF1QyxLQUFJLFdBQTNDO0FBREY7QUFERjtBQURGLFNBREY7QUFTRDtBQUNELGFBQ0U7QUFBQTtBQUFBO0FBQ0UsaUJBQU9ZLFNBRFQ7QUFFRSxtQkFBUyxLQUFLbkIsS0FBTCxDQUFXc0IsVUFBWCxDQUFzQlIsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUNQLElBQWpDO0FBRlg7QUFJR0E7QUFKSCxPQURGO0FBUUQ7Ozs2QkFFUTtBQUNQLGFBQ0k7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0csZUFBS2dCLGlCQUFMLEVBREg7QUFFRyxlQUFLQyxtQkFBTDtBQUZIO0FBREYsT0FESjtBQVFEOzs7O0VBOUV3QyxnQkFBTUMsUzs7a0JBQTVCMUIsYSIsImZpbGUiOiIwLmVkMTJkNDU5MjhlYjUwY2VhNDU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0xpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzRWRpdGluZzogZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbmNlbENsaWNrKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogIXRoaXMuc3RhdGUuaXNFZGl0aW5nIH0pO1xyXG4gIH1cclxuXHJcbiAgb25FZGl0Q2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiAhdGhpcy5zdGF0ZS5pc0VkaXRpbmcgfSk7XHJcbiAgfVxyXG5cclxuICBvblNhdmVDbGljaygpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBvbGRUYXNrID0gdGhpcy5wcm9wcy50YXNrXHJcbiAgICBjb25zdCBuZXdUYXNrID0gdGhpcy5yZWZzLmVkaXRJbnB1dC52YWx1ZTtcclxuICAgIHRoaXMucHJvcHMuc2F2ZVRhc2sob2xkVGFzaywgbmV3VGFzayk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiBmYWxzZSB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQWN0aW9uU2VjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzRWRpdGluZykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5vblNhdmVDbGljay5iaW5kKHRoaXMpfT48c3BhbiBjbGFzc05hbWU9XCIgZ2x5cGhpY29uIGdseXBoaWNvbi1vay1jaXJjbGVcIj48L3NwYW4+IHVwZGF0ZSA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5jYW5jZWxDbGljay5iaW5kKHRoaXMpfT48c3BhbiBjbGFzc05hbWU9XCIgZ2x5cGhpY29uIGdseXBoaWNvbi1iYW4tY2lyY2xlXCI+PC9zcGFuPiBjYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5vbkVkaXRDbGljay5iaW5kKHRoaXMpfT48c3BhbiBjbGFzc05hbWU9XCIgZ2x5cGhpY29uIGdseXBoaWNvbi1lcmFzZVwiPjwvc3Bhbj4gZWRpdCA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZGVsZXRlVGFzay5iaW5kKHRoaXMsIHRoaXMucHJvcHMudGFzayl9PjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlLWNpcmNsZVwiPjwvc3Bhbj4gZGVsZXRlPC9idXR0b24+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGFza1NlY3Rpb24oKSB7XHJcbiAgICBjb25zdCB7IHRhc2ssIGlzQ29tcGxldGVkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdGFza1N0eWxlID0ge1xyXG4gICAgICBjb2xvcjogaXNDb21wbGV0ZWQgPyAnZ3JlZW4nIDogJ3JlZCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFZGl0aW5nKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TYXZlQ2xpY2suYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFzay1saXN0LWVudHJ5IG1lZGlhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17dGFza30gcmVmPVwiZWRpdElucHV0XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkXHJcbiAgICAgICAgc3R5bGU9e3Rhc2tTdHlsZX1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnRvZ2dsZVRhc2suYmluZCh0aGlzLCB0YXNrKX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0YXNrfVxyXG4gICAgICA8L3RkPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJUYXNrU2VjdGlvbigpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJBY3Rpb25TZWN0aW9uKCl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90YXNrTGlzdEVudHJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==