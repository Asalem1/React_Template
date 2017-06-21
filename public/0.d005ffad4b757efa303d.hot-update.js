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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrTGlzdEVudHJ5LmpzPzU4YTkiXSwibmFtZXMiOlsiVGFza0xpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJpc0VkaXRpbmciLCJzZXRTdGF0ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbGRUYXNrIiwidGFzayIsIm5ld1Rhc2siLCJyZWZzIiwiZWRpdElucHV0IiwidmFsdWUiLCJzYXZlVGFzayIsIm9uU2F2ZUNsaWNrIiwiYmluZCIsImNhbmNlbENsaWNrIiwib25FZGl0Q2xpY2siLCJkZWxldGVUYXNrIiwiaXNDb21wbGV0ZWQiLCJ0YXNrU3R5bGUiLCJjb2xvciIsImN1cnNvciIsInRvZ2dsZVRhc2siLCJyZW5kZXJUYXNrU2VjdGlvbiIsInJlbmRlckFjdGlvblNlY3Rpb24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7OztBQUNuQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVc7QUFEQSxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQUVhO0FBQ1osV0FBS0MsUUFBTCxDQUFjLEVBQUVELFdBQVcsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLFNBQXpCLEVBQWQ7QUFDRDs7O2tDQUVhO0FBQ1osV0FBS0MsUUFBTCxDQUFjLEVBQUVELFdBQVcsQ0FBQyxLQUFLRCxLQUFMLENBQVdDLFNBQXpCLEVBQWQ7QUFDRDs7O2tDQUVhO0FBQ1pFLFlBQU1DLGNBQU47QUFDQSxVQUFNQyxVQUFVLEtBQUtOLEtBQUwsQ0FBV08sSUFBM0I7QUFDQSxVQUFNQyxVQUFVLEtBQUtDLElBQUwsQ0FBVUMsU0FBVixDQUFvQkMsS0FBcEM7QUFDQSxXQUFLWCxLQUFMLENBQVdZLFFBQVgsQ0FBb0JOLE9BQXBCLEVBQTZCRSxPQUE3QjtBQUNBLFdBQUtMLFFBQUwsQ0FBYyxFQUFFRCxXQUFXLEtBQWIsRUFBZDtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQUksS0FBS0QsS0FBTCxDQUFXQyxTQUFmLEVBQTBCO0FBQ3hCLGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsV0FBVSxLQUFsQixFQUF3QixTQUFTLEtBQUtXLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWpDO0FBQThELG9EQUFNLFdBQVUsZ0NBQWhCLEdBQTlEO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsV0FBVSxLQUFsQixFQUF3QixTQUFTLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQWpDO0FBQThELG9EQUFNLFdBQVUsaUNBQWhCLEdBQTlEO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QixDQUFqQjtBQUFBO0FBQUE7QUFIRixTQURGO0FBT0Q7QUFDRCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsS0FBbEIsRUFBd0IsU0FBUyxLQUFLRSxXQUFMLENBQWlCRixJQUFqQixDQUFzQixJQUF0QixDQUFqQztBQUE4RCxrREFBTSxXQUFVLDRCQUFoQixHQUE5RDtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFRLFdBQVUsS0FBbEIsRUFBd0IsU0FBUyxLQUFLZCxLQUFMLENBQVdpQixVQUFYLENBQXNCSCxJQUF0QixDQUEyQixJQUEzQixFQUFpQyxLQUFLZCxLQUFMLENBQVdPLElBQTVDLENBQWpDO0FBQW9GLGtEQUFNLFdBQVUsbUNBQWhCLEdBQXBGO0FBQUE7QUFBQTtBQUZGLE9BREY7QUFNRDs7O3dDQUVtQjtBQUFBLG1CQUNZLEtBQUtQLEtBRGpCO0FBQUEsVUFDVk8sSUFEVSxVQUNWQSxJQURVO0FBQUEsVUFDSlcsV0FESSxVQUNKQSxXQURJOztBQUVsQixVQUFNQyxZQUFZO0FBQ2hCQyxlQUFPRixjQUFjLE9BQWQsR0FBd0IsS0FEZjtBQUVoQkcsZ0JBQVE7QUFGUSxPQUFsQjs7QUFLQSxVQUFJLEtBQUtwQixLQUFMLENBQVdDLFNBQWYsRUFBMEI7QUFDeEIsZUFDRTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUtXLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSx1QkFBZDtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRSx1REFBTyxNQUFLLE1BQVosRUFBbUIsY0FBY1AsSUFBakMsRUFBdUMsS0FBSSxXQUEzQztBQURGO0FBREY7QUFERixTQURGO0FBU0Q7QUFDRCxhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPWSxTQURUO0FBRUUsbUJBQVMsS0FBS25CLEtBQUwsQ0FBV3NCLFVBQVgsQ0FBc0JSLElBQXRCLENBQTJCLElBQTNCLEVBQWlDUCxJQUFqQztBQUZYO0FBSUdBO0FBSkgsT0FERjtBQVFEOzs7NkJBRVE7QUFDUCxhQUNJO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNHLGVBQUtnQixpQkFBTCxFQURIO0FBRUcsZUFBS0MsbUJBQUw7QUFGSDtBQURGLE9BREo7QUFRRDs7OztFQS9Fd0MsZ0JBQU1DLFM7O2tCQUE1QjFCLGEiLCJmaWxlIjoiMC5kMDA1ZmZhZDRiNzU3ZWZhMzAzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tMaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0VkaXRpbmc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYW5jZWxDbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6ICF0aGlzLnN0YXRlLmlzRWRpdGluZyB9KTtcclxuICB9XHJcblxyXG4gIG9uRWRpdENsaWNrKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogIXRoaXMuc3RhdGUuaXNFZGl0aW5nIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TYXZlQ2xpY2soKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3Qgb2xkVGFzayA9IHRoaXMucHJvcHMudGFza1xyXG4gICAgY29uc3QgbmV3VGFzayA9IHRoaXMucmVmcy5lZGl0SW5wdXQudmFsdWU7XHJcbiAgICB0aGlzLnByb3BzLnNhdmVUYXNrKG9sZFRhc2ssIG5ld1Rhc2spO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRWRpdGluZzogZmFsc2UgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlckFjdGlvblNlY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0VkaXRpbmcpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3RoaXMub25TYXZlQ2xpY2suYmluZCh0aGlzKX0+PHNwYW4gY2xhc3NOYW1lPVwiIGdseXBoaWNvbiBnbHlwaGljb24tb2stY2lyY2xlXCI+PC9zcGFuPiB1cGRhdGUgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3RoaXMuY2FuY2VsQ2xpY2suYmluZCh0aGlzKX0+PHNwYW4gY2xhc3NOYW1lPVwiIGdseXBoaWNvbiBnbHlwaGljb24tYmFuLWNpcmNsZVwiPjwvc3Bhbj4gY2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2FuY2VsQ2xpY2suYmluZCh0aGlzKX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3RoaXMub25FZGl0Q2xpY2suYmluZCh0aGlzKX0+PHNwYW4gY2xhc3NOYW1lPVwiIGdseXBoaWNvbiBnbHlwaGljb24tZXJhc2VcIj48L3NwYW4+IGVkaXQgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmRlbGV0ZVRhc2suYmluZCh0aGlzLCB0aGlzLnByb3BzLnRhc2spfT48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZS1jaXJjbGVcIj48L3NwYW4+IGRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclRhc2tTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgeyB0YXNrLCBpc0NvbXBsZXRlZCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHRhc2tTdHlsZSA9IHtcclxuICAgICAgY29sb3I6IGlzQ29tcGxldGVkID8gJ2dyZWVuJyA6ICdyZWQnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLmlzRWRpdGluZykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU2F2ZUNsaWNrLmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhc2stbGlzdC1lbnRyeSBtZWRpYVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e3Rhc2t9IHJlZj1cImVkaXRJbnB1dFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZFxyXG4gICAgICAgIHN0eWxlPXt0YXNrU3R5bGV9XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy50b2dnbGVUYXNrLmJpbmQodGhpcywgdGFzayl9XHJcbiAgICAgID5cclxuICAgICAgICB7dGFza31cclxuICAgICAgPC90ZD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyVGFza1NlY3Rpb24oKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQWN0aW9uU2VjdGlvbigpfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdGFza0xpc3RFbnRyeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=