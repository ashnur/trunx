var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, href = _a.href, isActive = _a.isActive, isBlack = _a.isBlack, isDanger = _a.isDanger, isDark = _a.isDark, isFocused = _a.isFocused, isFullwidth = _a.isFullwidth, isInfo = _a.isInfo, isInverted = _a.isInverted, isLarge = _a.isLarge, isLight = _a.isLight, isLink = _a.isLink, isLoading = _a.isLoading, isMedium = _a.isMedium, isNormal = _a.isNormal, isOutlined = _a.isOutlined, isPrimary = _a.isPrimary, isRounded = _a.isRounded, isSmall = _a.isSmall, isStatic = _a.isStatic, isSuccess = _a.isSuccess, isText = _a.isText, isWarning = _a.isWarning, isWhite = _a.isWhite, onClick = _a.onClick, type = _a.type, props = __rest(_a, ["disabled", "href", "isActive", "isBlack", "isDanger", "isDark", "isFocused", "isFullwidth", "isInfo", "isInverted", "isLarge", "isLight", "isLink", "isLoading", "isMedium", "isNormal", "isOutlined", "isPrimary", "isRounded", "isSmall", "isStatic", "isSuccess", "isText", "isWarning", "isWhite", "onClick", "type"]);
        var className = classnames("button", {
            "is-active": isActive,
            "is-black": isBlack,
            "is-danger": isDanger,
            "is-dark": isDark,
            "is-focused": isFocused,
            "is-fullwidth": isFullwidth,
            "is-info": isInfo,
            "is-inverted": isInverted,
            "is-large": isLarge,
            "is-light": isLight,
            "is-link": isLink,
            "is-loading": isLoading,
            "is-medium": isMedium,
            "is-normal": isNormal,
            "is-outlined": isOutlined,
            "is-primary": isPrimary,
            "is-rounded": isRounded,
            "is-small": isSmall,
            "is-static": isStatic,
            "is-success": isSuccess,
            "is-text": isText,
            "is-warning": isWarning,
            "is-white": isWhite,
        });
        if (href) {
            return (React.createElement("a", __assign({ className: className, href: href }, props), this.props.children));
        }
        if (type) {
            return (React.createElement("input", __assign({ className: className, type: type }, props)));
        }
        return (React.createElement("button", __assign({ className: className, disabled: disabled, onClick: onClick }, props), this.props.children));
    };
    return Button;
}(React.Component));
exports.default = Button;
