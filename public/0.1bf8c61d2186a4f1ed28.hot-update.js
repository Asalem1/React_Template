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
            { onClick: this.onSaveClick.bind(this) },
            "Save"
          ),
          _react2.default.createElement(
            "button",
            { onClick: this.cancelClick.bind(this) },
            "Cancel"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrTGlzdEVudHJ5LmpzPzU4YTkiXSwibmFtZXMiOlsiVGFza0xpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJpc0VkaXRpbmciLCJzZXRTdGF0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbGRUYXNrIiwidGFzayIsIm5ld1Rhc2siLCJyZWZzIiwiZWRpdElucHV0IiwidmFsdWUiLCJzYXZlVGFzayIsIm9uU2F2ZUNsaWNrIiwiYmluZCIsImNhbmNlbENsaWNrIiwib25FZGl0Q2xpY2siLCJkZWxldGVUYXNrIiwiaXNDb21wbGV0ZWQiLCJ0YXNrU3R5bGUiLCJjb2xvciIsImN1cnNvciIsInRvZ2dsZVRhc2siLCJyZW5kZXJUYXNrU2VjdGlvbiIsInJlbmRlckFjdGlvblNlY3Rpb24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7OztBQUNuQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVc7QUFEQSxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhO0FBQ1osV0FBS0MsUUFBTCxDQUFjLEVBQUVELFdBQVcsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLFNBQXpCLEVBQWQ7QUFDRDs7O2tDQUVhO0FBQ1osV0FBS0MsUUFBTCxDQUFjLEVBQUVELFdBQVcsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLFNBQXpCLEVBQWQ7QUFDRDs7O2tDQUVhO0FBQ1pFLFlBQU1DLGNBQU47QUFDQSxVQUFNQyxVQUFVLEtBQUtOLEtBQUwsQ0FBV08sSUFBM0I7QUFDQSxVQUFNQyxVQUFVLEtBQUtDLElBQUwsQ0FBVUMsU0FBVixDQUFvQkMsS0FBcEM7QUFDQSxXQUFLWCxLQUFMLENBQVdZLFFBQVgsQ0FBb0JOLE9BQXBCLEVBQTZCRSxPQUE3QjtBQUNBLFdBQUtMLFFBQUwsQ0FBYyxFQUFFRCxXQUFXLEtBQWIsRUFBZDtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQUksS0FBS0QsS0FBTCxDQUFXQyxTQUFmLEVBQTBCO0FBQ3hCLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLVyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFqQjtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLFNBQVMsS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBakI7QUFBQTtBQUFBO0FBRkYsU0FERjtBQU1EO0FBQ0QsYUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsWUFBUSxXQUFVLEtBQWxCLEVBQXdCLFNBQVMsS0FBS0UsV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBakM7QUFBOEQsa0RBQU0sV0FBVSw0QkFBaEIsR0FBOUQ7QUFBQTtBQUFBLFNBREE7QUFFQTtBQUFBO0FBQUEsWUFBUSxXQUFVLEtBQWxCLEVBQXdCLFNBQVMsS0FBS2QsS0FBTCxDQUFXaUIsVUFBWCxDQUFzQkgsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBaUMsS0FBS2QsS0FBTCxDQUFXTyxJQUE1QyxDQUFqQztBQUFvRixrREFBTSxXQUFVLG1DQUFoQixHQUFwRjtBQUFBO0FBQUE7QUFGQSxPQURGO0FBTUQ7Ozt3Q0FFbUI7QUFBQSxtQkFDWSxLQUFLUCxLQURqQjtBQUFBLFVBQ1ZPLElBRFUsVUFDVkEsSUFEVTtBQUFBLFVBQ0pXLFdBREksVUFDSkEsV0FESTs7QUFFbEIsVUFBTUMsWUFBWTtBQUNoQkMsZUFBT0YsY0FBYyxPQUFkLEdBQXdCLEtBRGY7QUFFaEJHLGdCQUFRO0FBRlEsT0FBbEI7O0FBS0EsVUFBSSxLQUFLcEIsS0FBTCxDQUFXQyxTQUFmLEVBQTBCO0FBQ3hCLGVBQ0U7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLVyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFoQjtBQUNFO0FBQUE7QUFBQSxjQUFJLFdBQVUsdUJBQWQ7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0UsdURBQU8sTUFBSyxNQUFaLEVBQW1CLGNBQWNQLElBQWpDLEVBQXVDLEtBQUksV0FBM0M7QUFERjtBQURGO0FBREYsU0FERjtBQVNEO0FBQ0QsYUFDRTtBQUFBO0FBQUE7QUFDRSxpQkFBT1ksU0FEVDtBQUVFLG1CQUFTLEtBQUtuQixLQUFMLENBQVdzQixVQUFYLENBQXNCUixJQUF0QixDQUEyQixJQUEzQixFQUFpQ1AsSUFBakM7QUFGWDtBQUlHQTtBQUpILE9BREY7QUFRRDs7OzZCQUVRO0FBQ1AsYUFDSTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRyxlQUFLZ0IsaUJBQUwsRUFESDtBQUVHLGVBQUtDLG1CQUFMO0FBRkg7QUFERixPQURKO0FBUUQ7Ozs7RUE5RXdDLGdCQUFNQyxTOztrQkFBNUIxQixhIiwiZmlsZSI6IjAuMWJmOGM2MWQyMTg2YTRmMWVkMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNFZGl0aW5nOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2FuY2VsQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiAhdGhpcy5zdGF0ZS5pc0VkaXRpbmcgfSk7XHJcbiAgfVxyXG5cclxuICBvbkVkaXRDbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6ICF0aGlzLnN0YXRlLmlzRWRpdGluZyB9KTtcclxuICB9XHJcblxyXG4gIG9uU2F2ZUNsaWNrKCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG9sZFRhc2sgPSB0aGlzLnByb3BzLnRhc2tcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSB0aGlzLnJlZnMuZWRpdElucHV0LnZhbHVlO1xyXG4gICAgdGhpcy5wcm9wcy5zYXZlVGFzayhvbGRUYXNrLCBuZXdUYXNrKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IGZhbHNlIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXJBY3Rpb25TZWN0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFZGl0aW5nKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uU2F2ZUNsaWNrLmJpbmQodGhpcyl9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jYW5jZWxDbGljay5iaW5kKHRoaXMpfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3RoaXMub25FZGl0Q2xpY2suYmluZCh0aGlzKX0+PHNwYW4gY2xhc3NOYW1lPVwiIGdseXBoaWNvbiBnbHlwaGljb24tZXJhc2VcIj48L3NwYW4+IGVkaXQgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17dGhpcy5wcm9wcy5kZWxldGVUYXNrLmJpbmQodGhpcywgdGhpcy5wcm9wcy50YXNrKX0+PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUtY2lyY2xlXCI+PC9zcGFuPiBkZWxldGU8L2J1dHRvbj5cclxuICAgICAgPC90ZD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUYXNrU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IHsgdGFzaywgaXNDb21wbGV0ZWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB0YXNrU3R5bGUgPSB7XHJcbiAgICAgIGNvbG9yOiBpc0NvbXBsZXRlZCA/ICdncmVlbicgOiAncmVkJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0VkaXRpbmcpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblNhdmVDbGljay5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YXNrLWxpc3QtZW50cnkgbWVkaWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXt0YXNrfSByZWY9XCJlZGl0SW5wdXRcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGRcclxuICAgICAgICBzdHlsZT17dGFza1N0eWxlfVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMudG9nZ2xlVGFzay5iaW5kKHRoaXMsIHRhc2spfVxyXG4gICAgICA+XHJcbiAgICAgICAge3Rhc2t9XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhc2tTZWN0aW9uKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckFjdGlvblNlY3Rpb24oKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3Rhc2tMaXN0RW50cnkuanMiXSwic291cmNlUm9vdCI6IiJ9