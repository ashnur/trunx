'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classname = require('classname');

var _classname2 = _interopRequireDefault(_classname);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Column extends _react.Component {
  render() {
    const {
      is2,
      is3,
      is4,
      is5,
      is6,
      is7,
      is8,
      is9,
      is10,
      is11,
      isFourFifths,
      isHalf,
      isNarrow,
      isNarrowDesktop,
      isNarrowMobile,
      isNarrowTablet,
      isNarrowTouch,
      isNarrowWidescreen,
      isNarrowFullhd,
      isOneFifth,
      isOneQuarter,
      isThreeFifths,
      isThreeQuarters,
      isTwoQuarters
    } = this.props;

    return _react2.default.createElement(
      'div',
      {
        className: (0, _classname2.default)(['column'], {
          'is-2': is2,
          'is-3': is3,
          'is-4': is4,
          'is-5': is5,
          'is-6': is6,
          'is-7': is7,
          'is-8': is8,
          'is-9': is9,
          'is-10': is10,
          'is-11': is11,
          'is-four-fifths': isFourFifths,
          'is-half': isHalf,
          'is-narrow': isNarrow,
          'is-narrow-desktop': isNarrowDesktop,
          'is-narrow-mobile': isNarrowMobile,
          'is-narrow-tablet': isNarrowTablet,
          'is-narrow-touch': isNarrowTouch,
          'is-narrow-widescreen': isNarrowWidescreen,
          'is-narrow-fullhd': isNarrowFullhd,
          'is-one-fifth': isOneFifth,
          'is-one-quarter': isOneQuarter,
          'is-three-fifths': isThreeFifths,
          'is-three-quarters': isThreeQuarters,
          'is-two-quarters': isTwoQuarters
        })
      },
      this.props.children
    );
  }
}
exports.default = Column;