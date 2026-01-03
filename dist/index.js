"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@heroui/dom-animation/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  default: () => index_default
});
var import_framer_motion, index_default;
var init_dist = __esm({
  "node_modules/@heroui/dom-animation/dist/index.mjs"() {
    "use strict";
    "use client";
    import_framer_motion = require("framer-motion");
    index_default = import_framer_motion.domAnimation;
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AgeConfirmationModal: () => AgeConfirmationModal,
  CTACardWithMechanisms: () => CTACardWithMechanisms,
  LandingPageViewer: () => LandingPageViewer,
  ModernAudioPlayer: () => ModernAudioPlayer
});
module.exports = __toCommonJS(index_exports);

// src/landing-page-viewer.tsx
var import_react49 = require("react");

// node_modules/@heroui/avatar/dist/chunk-25E6VDTZ.mjs
var import_jsx_runtime = require("react/jsx-runtime");
var AvatarIcon = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    height: "80%",
    role: "presentation",
    viewBox: "0 0 24 24",
    width: "80%",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "path",
        {
          d: "M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489Z",
          fill: "currentColor"
        }
      )
    ]
  }
);

// node_modules/@heroui/react-utils/dist/chunk-3XT5V4LF.mjs
var React = __toESM(require("react"), 1);
function createContext2(options = {}) {
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  const Context = React.createContext(void 0);
  Context.displayName = name;
  function useContext2() {
    var _a;
    const context = React.useContext(Context);
    if (!context && strict) {
      const error = new Error(errorMessage);
      error.name = "ContextError";
      (_a = Error.captureStackTrace) == null ? void 0 : _a.call(Error, error, useContext2);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext2, Context];
}

// node_modules/@heroui/react-utils/dist/chunk-BDGLNRCW.mjs
var import_react = require("react");
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser = canUseDOM();
function useDOMRef(ref) {
  const domRef = (0, import_react.useRef)(null);
  (0, import_react.useImperativeHandle)(ref, () => domRef.current);
  return domRef;
}

// node_modules/@heroui/shared-utils/dist/index.mjs
var __DEV__ = process.env.NODE_ENV !== "production";
var __TEST__ = process.env.NODE_ENV === "test";
var dataAttr = (condition) => condition ? "true" : void 0;
function toVal(mix) {
  var k2, y2, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k2 = 0; k2 < mix.length; k2++) {
        if (mix[k2]) {
          if (y2 = toVal(mix[k2])) {
            str && (str += " ");
            str += y2;
          }
        }
      }
    } else {
      for (k2 in mix) {
        if (mix[k2]) {
          str && (str += " ");
          str += k2;
        }
      }
    }
  }
  return str;
}
function clsx(...args) {
  var i2 = 0, tmp, x2, str = "";
  while (i2 < args.length) {
    if (tmp = args[i2++]) {
      if (x2 = toVal(tmp)) {
        str && (str += " ");
        str += x2;
      }
    }
  }
  return str;
}
var safeText = (text) => {
  if ((text == null ? void 0 : text.length) <= 4) return text;
  return text == null ? void 0 : text.slice(0, 3);
};
var safeInitials = (text) => {
  const initials = (text == null ? void 0 : text.trim().split(/[\s\-_.]+/).filter(Boolean).map((word) => word.charAt(0).toUpperCase()).join("")) || "";
  return safeText(initials);
};
function getUniqueID(prefix) {
  return `${prefix}-${Math.floor(Math.random() * 1e6)}`;
}
function objectToDeps(obj) {
  if (!obj || typeof obj !== "object") {
    return "";
  }
  try {
    return JSON.stringify(obj);
  } catch {
    return "";
  }
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function clampPercentage(value, max = 100) {
  return Math.min(Math.max(value, 0), max);
}
function chain(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
var idsUpdaterMap = /* @__PURE__ */ new Map();
function mergeIds(idA, idB) {
  if (idA === idB) {
    return idA;
  }
  let setIdsA = idsUpdaterMap.get(idA);
  if (setIdsA) {
    setIdsA.forEach((ref) => ref.current = idB);
    return idB;
  }
  let setIdsB = idsUpdaterMap.get(idB);
  if (setIdsB) {
    setIdsB.forEach((ref) => ref.current = idA);
    return idA;
  }
  return idB;
}
function mergeProps(...args) {
  let result = { ...args[0] };
  for (let i2 = 1; i2 < args.length; i2++) {
    let props = args[i2];
    for (let key in props) {
      let a2 = result[key];
      let b = props[key];
      if (typeof a2 === "function" && typeof b === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) {
        result[key] = chain(a2, b);
      } else if ((key === "className" || key === "UNSAFE_className") && typeof a2 === "string" && typeof b === "string") {
        result[key] = clsx(a2, b);
      } else if (key === "id" && a2 && b) {
        result.id = mergeIds(a2, b);
      } else {
        result[key] = b !== void 0 ? b : a2;
      }
    }
  }
  return result;
}

// node_modules/@heroui/react-utils/dist/chunk-6UBKM7F3.mjs
var React2 = __toESM(require("react"), 1);
function useIsHydrated() {
  const subscribe = () => () => {
  };
  return React2.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

// node_modules/@heroui/react-rsc-utils/dist/chunk-RFWDHYLZ.mjs
var DOMPropNames = /* @__PURE__ */ new Set([
  "id",
  "type",
  "style",
  "title",
  "role",
  "tabIndex",
  "htmlFor",
  "width",
  "height",
  "abbr",
  "accept",
  "acceptCharset",
  "accessKey",
  "action",
  "allowFullScreen",
  "allowTransparency",
  "alt",
  "async",
  "autoComplete",
  "autoFocus",
  "autoPlay",
  "cellPadding",
  "cellSpacing",
  "challenge",
  "charset",
  "checked",
  "cite",
  "class",
  "className",
  "cols",
  "colSpan",
  "command",
  "content",
  "contentEditable",
  "contextMenu",
  "controls",
  "coords",
  "crossOrigin",
  "data",
  "dateTime",
  "default",
  "defer",
  "dir",
  "disabled",
  "download",
  "draggable",
  "dropzone",
  "encType",
  "enterKeyHint",
  "for",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "headers",
  "hidden",
  "high",
  "href",
  "hrefLang",
  "httpEquiv",
  "icon",
  "inputMode",
  "isMap",
  "itemId",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType",
  "kind",
  "label",
  "lang",
  "list",
  "loop",
  "manifest",
  "max",
  "maxLength",
  "media",
  "mediaGroup",
  "method",
  "min",
  "minLength",
  "multiple",
  "muted",
  "name",
  "noValidate",
  "open",
  "optimum",
  "pattern",
  "ping",
  "placeholder",
  "poster",
  "preload",
  "radioGroup",
  "referrerPolicy",
  "readOnly",
  "rel",
  "required",
  "rows",
  "rowSpan",
  "sandbox",
  "scope",
  "scoped",
  "scrolling",
  "seamless",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "sortable",
  "span",
  "spellCheck",
  "src",
  "srcDoc",
  "srcSet",
  "start",
  "step",
  "target",
  "translate",
  "typeMustMatch",
  "useMap",
  "value",
  "wmode",
  "wrap"
]);
var DOMEventNames = /* @__PURE__ */ new Set([
  "onCopy",
  "onCut",
  "onPaste",
  "onLoad",
  "onError",
  "onWheel",
  "onScroll",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onFocus",
  "onBlur",
  "onChange",
  "onInput",
  "onSubmit",
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onPointerDown",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerUp",
  "onSelect",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionEnd"
]);

// node_modules/@heroui/react-rsc-utils/dist/chunk-RJKRL3AU.mjs
var propRe = /^(data-.*)$/;
var ariaRe = /^(aria-.*)$/;
var funcRe = /^(on[A-Z].*)$/;
function filterDOMProps(props, opts = {}) {
  let {
    labelable = true,
    enabled = true,
    propNames,
    omitPropNames,
    omitEventNames,
    omitDataProps,
    omitEventProps
  } = opts;
  let filteredProps = {};
  if (!enabled) {
    return props;
  }
  for (const prop in props) {
    if (omitPropNames == null ? void 0 : omitPropNames.has(prop)) {
      continue;
    }
    if ((omitEventNames == null ? void 0 : omitEventNames.has(prop)) && funcRe.test(prop)) {
      continue;
    }
    if (funcRe.test(prop) && !DOMEventNames.has(prop)) {
      continue;
    }
    if (omitDataProps && propRe.test(prop)) {
      continue;
    }
    if (omitEventProps && funcRe.test(prop)) {
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(props, prop) && (DOMPropNames.has(prop) || labelable && ariaRe.test(prop) || (propNames == null ? void 0 : propNames.has(prop)) || propRe.test(prop)) || funcRe.test(prop)) {
      filteredProps[prop] = props[prop];
    }
  }
  return filteredProps;
}

// node_modules/@heroui/avatar/dist/chunk-JUJ53SJZ.mjs
var [AvatarGroupProvider, useAvatarGroupContext] = createContext2({
  name: "AvatarGroupContext",
  strict: false
});

// node_modules/@heroui/theme/dist/chunk-GQT3YUX3.mjs
var solid = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
};
var shadow = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
  foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
};
var bordered = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
  foreground: "bg-transparent border-foreground text-foreground"
};
var flat = {
  default: "bg-default/40 text-default-700",
  primary: "bg-primary/20 text-primary-600",
  secondary: "bg-secondary/20 text-secondary-600",
  success: "bg-success/20 text-success-700 dark:text-success",
  warning: "bg-warning/20 text-warning-700 dark:text-warning",
  danger: "bg-danger/20 text-danger-600 dark:text-danger-500",
  foreground: "bg-foreground/10 text-foreground"
};
var faded = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger",
  foreground: "border-default bg-default-100 text-foreground"
};
var light = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger",
  foreground: "bg-transparent text-foreground"
};
var ghost = {
  default: "border-default text-default-foreground",
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  success: "border-success text-success",
  warning: "border-warning text-warning",
  danger: "border-danger text-danger",
  foreground: "border-foreground text-foreground hover:!bg-foreground"
};
var colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost
};

// node_modules/@heroui/theme/dist/chunk-POSTVCTR.mjs
var animation_default = {
  /** Animation Utilities */
  ".spinner-bar-animation": {
    "animation-delay": "calc(-1.2s + (0.1s * var(--bar-index)))",
    transform: "rotate(calc(30deg * var(--bar-index)))translate(140%)"
  },
  ".spinner-dot-animation": {
    "animation-delay": "calc(250ms * var(--dot-index))"
  },
  ".spinner-dot-blink-animation": {
    "animation-delay": "calc(200ms * var(--dot-index))"
  }
};

// node_modules/@heroui/theme/dist/chunk-MPVWW3DX.mjs
var custom_default = {
  /**
   * Custom utilities
   */
  ".leading-inherit": {
    "line-height": "inherit"
  },
  ".bg-img-inherit": {
    "background-image": "inherit"
  },
  ".bg-clip-inherit": {
    "background-clip": "inherit"
  },
  ".text-fill-inherit": {
    "-webkit-text-fill-color": "inherit"
  },
  ".tap-highlight-transparent": {
    "-webkit-tap-highlight-color": "transparent"
  },
  ".input-search-cancel-button-none": {
    "&::-webkit-search-cancel-button": {
      "-webkit-appearance": "none"
    }
  }
};

// node_modules/@heroui/theme/dist/chunk-WH6SPIFG.mjs
var scrollbar_hide_default = {
  /**
   * Scroll Hide
   */
  ".scrollbar-hide": {
    /* IE and Edge */
    "-ms-overflow-style": "none",
    /* Firefox */
    "scrollbar-width": "none",
    /* Safari and Chrome */
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  ".scrollbar-default": {
    /* IE and Edge */
    "-ms-overflow-style": "auto",
    /* Firefox */
    "scrollbar-width": "auto",
    /* Safari and Chrome */
    "&::-webkit-scrollbar": {
      display: "block"
    }
  }
};

// node_modules/@heroui/theme/dist/chunk-RUIUXVZ4.mjs
var text_default = {
  /**
   * Text utilities
   */
  ".text-tiny": {
    "font-size": "var(--heroui-font-size-tiny)",
    "line-height": "var(--heroui-line-height-tiny)"
  },
  ".text-small": {
    "font-size": "var(--heroui-font-size-small)",
    "line-height": "var(--heroui-line-height-small)"
  },
  ".text-medium": {
    "font-size": "var(--heroui-font-size-medium)",
    "line-height": "var(--heroui-line-height-medium)"
  },
  ".text-large": {
    "font-size": "var(--heroui-font-size-large)",
    "line-height": "var(--heroui-line-height-large)"
  }
};

// node_modules/@heroui/theme/dist/chunk-GSRZWDGA.mjs
var DEFAULT_TRANSITION_DURATION = "250ms";
var transition_default = {
  /**
   * Transition utilities
   */
  ".transition-background": {
    "transition-property": "background",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-colors-opacity": {
    "transition-property": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-width": {
    "transition-property": "width",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-height": {
    "transition-property": "height",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-size": {
    "transition-property": "width, height",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-left": {
    "transition-property": "left",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-transform-opacity": {
    "transition-property": "transform, scale, opacity rotate",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-transform-background": {
    "transition-property": "transform, scale, background",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-transform-colors": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  },
  ".transition-transform-colors-opacity": {
    "transition-property": "transform, scale, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity",
    "transition-timing-function": "ease",
    "transition-duration": DEFAULT_TRANSITION_DURATION
  }
};

// node_modules/@heroui/theme/dist/chunk-6JJPIEK7.mjs
var utilities = {
  ...custom_default,
  ...transition_default,
  ...scrollbar_hide_default,
  ...text_default,
  ...animation_default
};

// node_modules/@heroui/theme/dist/chunk-UFVD3L5A.mjs
var COMMON_UNITS = ["small", "medium", "large"];
var twMergeConfig = {
  theme: {
    spacing: ["divider"],
    radius: COMMON_UNITS
  },
  classGroups: {
    shadow: [{ shadow: COMMON_UNITS }],
    opacity: [{ opacity: ["disabled"] }],
    "font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
    "border-w": [{ border: COMMON_UNITS }],
    "bg-image": [
      "bg-stripe-gradient-default",
      "bg-stripe-gradient-primary",
      "bg-stripe-gradient-secondary",
      "bg-stripe-gradient-success",
      "bg-stripe-gradient-warning",
      "bg-stripe-gradient-danger"
    ],
    transition: Object.keys(utilities).filter((key) => key.includes(".transition")).map((key) => key.replace(".", ""))
    // remove the dot from the key, .transition-background -> transition-background
  }
};

// node_modules/tailwind-variants/dist/chunk-GQLG7IS2.js
var y = /\s+/g;
var a = (t) => typeof t != "string" || !t ? t : t.replace(y, " ").trim();
var u = (...t) => {
  let r2 = [], n = (e) => {
    if (!e && e !== 0 && e !== /* @__PURE__ */ BigInt("0")) return;
    if (Array.isArray(e)) {
      for (let s = 0, o = e.length; s < o; s++) n(e[s]);
      return;
    }
    let f2 = typeof e;
    if (f2 === "string" || f2 === "number" || f2 === "bigint") {
      if (f2 === "number" && e !== e) return;
      r2.push(String(e));
    } else if (f2 === "object") {
      let s = Object.keys(e);
      for (let o = 0, i2 = s.length; o < i2; o++) {
        let l = s[o];
        e[l] && r2.push(l);
      }
    }
  };
  for (let e = 0, f2 = t.length; e < f2; e++) {
    let s = t[e];
    s != null && n(s);
  }
  return r2.length > 0 ? a(r2.join(" ")) : void 0;
};
var h = (t) => t === false ? "false" : t === true ? "true" : t === 0 ? "0" : t;
var x = (t) => {
  if (!t || typeof t != "object") return true;
  for (let r2 in t) return false;
  return true;
};
var k = (t, r2) => {
  if (t === r2) return true;
  if (!t || !r2) return false;
  let n = Object.keys(t), e = Object.keys(r2);
  if (n.length !== e.length) return false;
  for (let f2 = 0; f2 < n.length; f2++) {
    let s = n[f2];
    if (!e.includes(s) || t[s] !== r2[s]) return false;
  }
  return true;
};
var d = (t, r2) => {
  for (let n in r2) if (Object.prototype.hasOwnProperty.call(r2, n)) {
    let e = r2[n];
    n in t ? t[n] = u(t[n], e) : t[n] = e;
  }
  return t;
};
var c = (t, r2) => {
  for (let n = 0; n < t.length; n++) {
    let e = t[n];
    Array.isArray(e) ? c(e, r2) : e && r2.push(e);
  }
};
var g = (...t) => {
  let r2 = [];
  c(t, r2);
  let n = [];
  for (let e = 0; e < r2.length; e++) r2[e] && n.push(r2[e]);
  return n;
};
var p = (t, r2) => {
  let n = {};
  for (let e in t) {
    let f2 = t[e];
    if (e in r2) {
      let s = r2[e];
      Array.isArray(f2) || Array.isArray(s) ? n[e] = g(s, f2) : typeof f2 == "object" && typeof s == "object" && f2 && s ? n[e] = p(f2, s) : n[e] = s + " " + f2;
    } else n[e] = f2;
  }
  for (let e in r2) e in t || (n[e] = r2[e]);
  return n;
};

// node_modules/tailwind-variants/dist/chunk-IFWU2MEM.js
var Q = { twMerge: true, twMergeConfig: {}, responsiveVariants: false };
function ne() {
  let b = null, w = {}, A = false;
  return { get cachedTwMerge() {
    return b;
  }, set cachedTwMerge(u2) {
    b = u2;
  }, get cachedTwMergeConfig() {
    return w;
  }, set cachedTwMergeConfig(u2) {
    w = u2;
  }, get didTwMergeConfigChange() {
    return A;
  }, set didTwMergeConfigChange(u2) {
    A = u2;
  }, reset() {
    b = null, w = {}, A = false;
  } };
}
var S = ne();
var le = (b$1) => {
  let w = (u2, $) => {
    let { extend: c$1 = null, slots: M = {}, variants: q = {}, compoundVariants: L = [], compoundSlots: v = [], defaultVariants: U = {} } = u2, d$1 = { ...Q, ...$ }, x2 = (c$1 == null ? void 0 : c$1.base) ? u(c$1.base, u2 == null ? void 0 : u2.base) : u2 == null ? void 0 : u2.base, p2 = (c$1 == null ? void 0 : c$1.variants) && !x(c$1.variants) ? p(q, c$1.variants) : q, E = (c$1 == null ? void 0 : c$1.defaultVariants) && !x(c$1.defaultVariants) ? { ...c$1.defaultVariants, ...U } : U;
    !x(d$1.twMergeConfig) && !k(d$1.twMergeConfig, S.cachedTwMergeConfig) && (S.didTwMergeConfigChange = true, S.cachedTwMergeConfig = d$1.twMergeConfig);
    let N = x(c$1 == null ? void 0 : c$1.slots), O = x(M) ? {} : { base: u(u2 == null ? void 0 : u2.base, N && (c$1 == null ? void 0 : c$1.base)), ...M }, j$1 = N ? O : d({ ...c$1 == null ? void 0 : c$1.slots }, x(O) ? { base: u2 == null ? void 0 : u2.base } : O), T2 = x(c$1 == null ? void 0 : c$1.compoundVariants) ? L : g(c$1 == null ? void 0 : c$1.compoundVariants, L), y2 = (h2) => {
      if (x(p2) && x(M) && N) return b$1(x2, h2 == null ? void 0 : h2.class, h2 == null ? void 0 : h2.className)(d$1);
      if (T2 && !Array.isArray(T2)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof T2}`);
      if (v && !Array.isArray(v)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof v}`);
      let Y = (t, e, n = [], a$1) => {
        let r2 = n;
        if (typeof e == "string") {
          let i2 = a(e).split(" ");
          for (let l = 0; l < i2.length; l++) r2.push(`${t}:${i2[l]}`);
        } else if (Array.isArray(e)) for (let s = 0; s < e.length; s++) r2.push(`${t}:${e[s]}`);
        else if (typeof e == "object" && typeof a$1 == "string" && a$1 in e) {
          let s = e[a$1];
          if (s && typeof s == "string") {
            let l = a(s).split(" "), f2 = [];
            for (let o = 0; o < l.length; o++) f2.push(`${t}:${l[o]}`);
            r2[a$1] = r2[a$1] ? r2[a$1].concat(f2) : f2;
          } else if (Array.isArray(s) && s.length > 0) {
            let i2 = [];
            for (let l = 0; l < s.length; l++) i2.push(`${t}:${s[l]}`);
            r2[a$1] = i2;
          }
        }
        return r2;
      }, W = (t, e = p2, n = null, a2 = null) => {
        var _a;
        let r2 = e[t];
        if (!r2 || x(r2)) return null;
        let s = (_a = a2 == null ? void 0 : a2[t]) != null ? _a : h2 == null ? void 0 : h2[t];
        if (s === null) return null;
        let i2 = h(s), l = Array.isArray(d$1.responsiveVariants) && d$1.responsiveVariants.length > 0 || d$1.responsiveVariants === true, f2 = E == null ? void 0 : E[t], o = [];
        if (typeof i2 == "object" && l) for (let [C2, H] of Object.entries(i2)) {
          let te = r2[H];
          if (C2 === "initial") {
            f2 = H;
            continue;
          }
          Array.isArray(d$1.responsiveVariants) && !d$1.responsiveVariants.includes(C2) || (o = Y(C2, te, o, n));
        }
        let V = i2 != null && typeof i2 != "object" ? i2 : h(f2), m2 = r2[V || "false"];
        return typeof o == "object" && typeof n == "string" && o[n] ? d(o, m2) : o.length > 0 ? (o.push(m2), n === "base" ? o.join(" ") : o) : m2;
      }, Z = () => {
        if (!p2) return null;
        let t = Object.keys(p2), e = [];
        for (let n = 0; n < t.length; n++) {
          let a2 = W(t[n], p2);
          a2 && e.push(a2);
        }
        return e;
      }, _ = (t, e) => {
        if (!p2 || typeof p2 != "object") return null;
        let n = [];
        for (let a2 in p2) {
          let r2 = W(a2, p2, t, e), s = t === "base" && typeof r2 == "string" ? r2 : r2 && r2[t];
          s && n.push(s);
        }
        return n;
      }, z = {};
      for (let t in h2) {
        let e = h2[t];
        e !== void 0 && (z[t] = e);
      }
      let D = (t, e) => {
        var _a;
        let n = typeof (h2 == null ? void 0 : h2[t]) == "object" ? { [t]: (_a = h2[t]) == null ? void 0 : _a.initial } : {};
        return { ...E, ...z, ...n, ...e };
      }, G = (t = [], e) => {
        let n = [], a2 = t.length;
        for (let r2 = 0; r2 < a2; r2++) {
          let { class: s, className: i2, ...l } = t[r2], f2 = true, o = D(null, e);
          for (let V in l) {
            let m2 = l[V], C2 = o[V];
            if (Array.isArray(m2)) {
              if (!m2.includes(C2)) {
                f2 = false;
                break;
              }
            } else {
              if ((m2 == null || m2 === false) && (C2 == null || C2 === false)) continue;
              if (C2 !== m2) {
                f2 = false;
                break;
              }
            }
          }
          f2 && (s && n.push(s), i2 && n.push(i2));
        }
        return n;
      }, K = (t) => {
        let e = G(T2, t);
        if (!Array.isArray(e)) return e;
        let n = {}, a2 = b$1;
        for (let r2 = 0; r2 < e.length; r2++) {
          let s = e[r2];
          if (typeof s == "string") n.base = a2(n.base, s)(d$1);
          else if (typeof s == "object") for (let i2 in s) n[i2] = a2(n[i2], s[i2])(d$1);
        }
        return n;
      }, ee = (t) => {
        if (v.length < 1) return null;
        let e = {}, n = D(null, t);
        for (let a2 = 0; a2 < v.length; a2++) {
          let { slots: r2 = [], class: s, className: i2, ...l } = v[a2];
          if (!x(l)) {
            let f2 = true;
            for (let o in l) {
              let V = n[o], m2 = l[o];
              if (V === void 0 || (Array.isArray(m2) ? !m2.includes(V) : m2 !== V)) {
                f2 = false;
                break;
              }
            }
            if (!f2) continue;
          }
          for (let f2 = 0; f2 < r2.length; f2++) {
            let o = r2[f2];
            e[o] || (e[o] = []), e[o].push([s, i2]);
          }
        }
        return e;
      };
      if (!x(M) || !N) {
        let t = {};
        if (typeof j$1 == "object" && !x(j$1)) {
          let e = b$1;
          for (let n in j$1) t[n] = (a2) => {
            let r2 = K(a2), s = ee(a2);
            return e(j$1[n], _(n, a2), r2 ? r2[n] : void 0, s ? s[n] : void 0, a2 == null ? void 0 : a2.class, a2 == null ? void 0 : a2.className)(d$1);
          };
        }
        return t;
      }
      return b$1(x2, Z(), G(T2), h2 == null ? void 0 : h2.class, h2 == null ? void 0 : h2.className)(d$1);
    }, X = () => {
      if (!(!p2 || typeof p2 != "object")) return Object.keys(p2);
    };
    return y2.variantKeys = X(), y2.extend = c$1, y2.base = x2, y2.slots = j$1, y2.variants = p2, y2.defaultVariants = E, y2.compoundSlots = v, y2.compoundVariants = T2, y2;
  };
  return { tv: w, createTV: (u2) => ($, c2) => w($, c2 ? p(u2, c2) : u2) };
};

// node_modules/tailwind-merge/dist/bundle-mjs.mjs
var CLASS_PART_SEPARATOR = "-";
var createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
var getGroupRecursive = (classParts, classPartObject) => {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
};
var arbitraryPropertyRegex = /^\[(.+)\]$/;
var getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
var createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const classGroupId in classGroups) {
    processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
  }
  return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
var getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
var isThemeGetter = (func) => func.isThemeGetter;
var createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
var createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      } else if (currentCharacter === "(") {
        parenDepth++;
      } else if (currentCharacter === ")") {
        parenDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
    const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: className,
      maybePostfixModifierPosition: void 0
    };
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
var stripImportantModifier = (baseClassName) => {
  if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
    return baseClassName.substring(0, baseClassName.length - 1);
  }
  if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
    return baseClassName.substring(1);
  }
  return baseClassName;
};
var createSortModifiers = (config) => {
  const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
  const sortModifiers = (modifiers) => {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier) => {
      const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
      if (isPositionSensitive) {
        sortedModifiers.push(...unsortedModifiers.sort(), modifier);
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
  };
  return sortModifiers;
};
var createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config)
});
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
      const group = conflictGroups[i2];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
var toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k2 = 0; k2 < mix.length; k2++) {
    if (mix[k2]) {
      if (resolvedValue = toValue(mix[k2])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
var fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+\/\d+$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
  const themeColor = fromTheme("color");
  const themeFont = fromTheme("font");
  const themeText = fromTheme("text");
  const themeFontWeight = fromTheme("font-weight");
  const themeTracking = fromTheme("tracking");
  const themeLeading = fromTheme("leading");
  const themeBreakpoint = fromTheme("breakpoint");
  const themeContainer = fromTheme("container");
  const themeSpacing = fromTheme("spacing");
  const themeRadius = fromTheme("radius");
  const themeShadow = fromTheme("shadow");
  const themeInsetShadow = fromTheme("inset-shadow");
  const themeTextShadow = fromTheme("text-shadow");
  const themeDropShadow = fromTheme("drop-shadow");
  const themeBlur = fromTheme("blur");
  const themePerspective = fromTheme("perspective");
  const themeAspect = fromTheme("aspect");
  const themeEase = fromTheme("ease");
  const themeAnimate = fromTheme("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
  const scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
  const scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: scaleInset()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
};
var mergeConfigs = (baseConfig, {
  cacheSize,
  prefix,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => {
  overrideProperty(baseConfig, "cacheSize", cacheSize);
  overrideProperty(baseConfig, "prefix", prefix);
  overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
  overrideConfigProperties(baseConfig.theme, override.theme);
  overrideConfigProperties(baseConfig.classGroups, override.classGroups);
  overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
  overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
  overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
  mergeConfigProperties(baseConfig.theme, extend.theme);
  mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
  mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
  mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
  mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
  return baseConfig;
};
var overrideProperty = (baseObject, overrideKey, overrideValue) => {
  if (overrideValue !== void 0) {
    baseObject[overrideKey] = overrideValue;
  }
};
var overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
};
var mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject) {
    for (const key in mergeObject) {
      mergeArrayProperties(baseObject, mergeObject, key);
    }
  }
};
var mergeArrayProperties = (baseObject, mergeObject, key) => {
  const mergeValue = mergeObject[key];
  if (mergeValue !== void 0) {
    baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
  }
};
var extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

// node_modules/tailwind-variants/dist/index.js
var f = (e) => x(e) ? twMerge : extendTailwindMerge({ ...e, extend: { theme: e.theme, classGroups: e.classGroups, conflictingClassGroupModifiers: e.conflictingClassGroupModifiers, conflictingClassGroups: e.conflictingClassGroups, ...e.extend } });
var i = (...e) => (a2) => {
  let t = u(e);
  return !t || !a2.twMerge ? t : ((!S.cachedTwMerge || S.didTwMergeConfigChange) && (S.didTwMergeConfigChange = false, S.cachedTwMerge = f(S.cachedTwMergeConfig)), S.cachedTwMerge(t) || void 0);
};
var { createTV: C, tv: T } = le(i);

// node_modules/@heroui/theme/dist/chunk-TX3FPB7D.mjs
var tv = (options, config) => {
  var _a, _b, _c;
  return T(options, {
    ...config,
    twMerge: (_a = config == null ? void 0 : config.twMerge) != null ? _a : true,
    twMergeConfig: {
      ...config == null ? void 0 : config.twMergeConfig,
      theme: {
        ...(_b = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _b.theme,
        ...twMergeConfig.theme
      },
      classGroups: {
        ...(_c = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _c.classGroups,
        ...twMergeConfig.classGroups
      }
    }
  });
};

// node_modules/@heroui/theme/dist/chunk-SCJBZBCG.mjs
var spinner = tv({
  slots: {
    base: "relative inline-flex flex-col gap-2 items-center justify-center",
    wrapper: "relative flex",
    label: "text-foreground dark:text-foreground-dark font-regular",
    circle1: "absolute w-full h-full rounded-full",
    circle2: "absolute w-full h-full rounded-full",
    dots: "relative rounded-full mx-auto",
    spinnerBars: [
      "absolute",
      "animate-fade-out",
      "rounded-full",
      "w-[25%]",
      "h-[8%]",
      "left-[calc(37.5%)]",
      "top-[calc(46%)]",
      "spinner-bar-animation"
    ]
  },
  variants: {
    size: {
      sm: {
        wrapper: "w-5 h-5",
        circle1: "border-2",
        circle2: "border-2",
        dots: "size-1",
        label: "text-small"
      },
      md: {
        wrapper: "w-8 h-8",
        circle1: "border-3",
        circle2: "border-3",
        dots: "size-1.5",
        label: "text-medium"
      },
      lg: {
        wrapper: "w-10 h-10",
        circle1: "border-3",
        circle2: "border-3",
        dots: "size-2",
        label: "text-large"
      }
    },
    color: {
      current: {
        circle1: "border-b-current",
        circle2: "border-b-current",
        dots: "bg-current",
        spinnerBars: "bg-current"
      },
      white: {
        circle1: "border-b-white",
        circle2: "border-b-white",
        dots: "bg-white",
        spinnerBars: "bg-white"
      },
      default: {
        circle1: "border-b-default",
        circle2: "border-b-default",
        dots: "bg-default",
        spinnerBars: "bg-default"
      },
      primary: {
        circle1: "border-b-primary",
        circle2: "border-b-primary",
        dots: "bg-primary",
        spinnerBars: "bg-primary"
      },
      secondary: {
        circle1: "border-b-secondary",
        circle2: "border-b-secondary",
        dots: "bg-secondary",
        spinnerBars: "bg-secondary"
      },
      success: {
        circle1: "border-b-success",
        circle2: "border-b-success",
        dots: "bg-success",
        spinnerBars: "bg-success"
      },
      warning: {
        circle1: "border-b-warning",
        circle2: "border-b-warning",
        dots: "bg-warning",
        spinnerBars: "bg-warning"
      },
      danger: {
        circle1: "border-b-danger",
        circle2: "border-b-danger",
        dots: "bg-danger",
        spinnerBars: "bg-danger"
      }
    },
    labelColor: {
      foreground: {
        label: "text-foreground"
      },
      primary: {
        label: "text-primary"
      },
      secondary: {
        label: "text-secondary"
      },
      success: {
        label: "text-success"
      },
      warning: {
        label: "text-warning"
      },
      danger: {
        label: "text-danger"
      }
    },
    variant: {
      default: {
        circle1: [
          "animate-spinner-ease-spin",
          "border-solid",
          "border-t-transparent",
          "border-l-transparent",
          "border-r-transparent"
        ],
        circle2: [
          "opacity-75",
          "animate-spinner-linear-spin",
          "border-dotted",
          "border-t-transparent",
          "border-l-transparent",
          "border-r-transparent"
        ]
      },
      gradient: {
        circle1: [
          "border-0",
          "bg-gradient-to-b",
          "from-transparent",
          "via-transparent",
          "to-primary",
          "animate-spinner-linear-spin",
          "[animation-duration:1s]",
          "[-webkit-mask:radial-gradient(closest-side,rgba(0,0,0,0.0)calc(100%-3px),rgba(0,0,0,1)calc(100%-3px))]"
        ],
        circle2: ["hidden"]
      },
      wave: {
        wrapper: "translate-y-3/4",
        dots: ["animate-sway", "spinner-dot-animation"]
      },
      dots: {
        wrapper: "translate-y-2/4",
        dots: ["animate-blink", "spinner-dot-blink-animation"]
      },
      spinner: {},
      simple: {
        wrapper: "text-foreground h-5 w-5 animate-spin",
        circle1: "opacity-25",
        circle2: "opacity-75"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    labelColor: "foreground",
    variant: "default"
  },
  compoundVariants: [
    { variant: "gradient", color: "current", class: { circle1: "to-current" } },
    { variant: "gradient", color: "white", class: { circle1: "to-white" } },
    { variant: "gradient", color: "default", class: { circle1: "to-default" } },
    { variant: "gradient", color: "primary", class: { circle1: "to-primary" } },
    { variant: "gradient", color: "secondary", class: { circle1: "to-secondary" } },
    { variant: "gradient", color: "success", class: { circle1: "to-success" } },
    { variant: "gradient", color: "warning", class: { circle1: "to-warning" } },
    { variant: "gradient", color: "danger", class: { circle1: "to-danger" } },
    {
      variant: "wave",
      size: "sm",
      class: {
        wrapper: "w-5 h-5"
      }
    },
    {
      variant: "wave",
      size: "md",
      class: {
        wrapper: "w-8 h-8"
      }
    },
    {
      variant: "wave",
      size: "lg",
      class: {
        wrapper: "w-12 h-12"
      }
    },
    {
      variant: "dots",
      size: "sm",
      class: {
        wrapper: "w-5 h-5"
      }
    },
    {
      variant: "dots",
      size: "md",
      class: {
        wrapper: "w-8 h-8"
      }
    },
    {
      variant: "dots",
      size: "lg",
      class: {
        wrapper: "w-12 h-12"
      }
    },
    // Simple variants
    // Size
    {
      variant: "simple",
      size: "sm",
      class: {
        wrapper: "w-5 h-5"
      }
    },
    {
      variant: "simple",
      size: "md",
      class: {
        wrapper: "w-8 h-8"
      }
    },
    {
      variant: "simple",
      size: "lg",
      class: {
        wrapper: "w-12 h-12"
      }
    },
    // Color
    {
      variant: "simple",
      color: "current",
      class: {
        wrapper: "text-current"
      }
    },
    {
      variant: "simple",
      color: "white",
      class: {
        wrapper: "text-white"
      }
    },
    {
      variant: "simple",
      color: "default",
      class: {
        wrapper: "text-default"
      }
    },
    {
      variant: "simple",
      color: "primary",
      class: {
        wrapper: "text-primary"
      }
    },
    {
      variant: "simple",
      color: "secondary",
      class: {
        wrapper: "text-secondary"
      }
    },
    {
      variant: "simple",
      color: "success",
      class: {
        wrapper: "text-success"
      }
    },
    {
      variant: "simple",
      color: "warning",
      class: {
        wrapper: "text-warning"
      }
    },
    {
      variant: "simple",
      color: "danger",
      class: {
        wrapper: "text-danger"
      }
    }
  ]
});

// node_modules/@heroui/theme/dist/chunk-JGY6VQQQ.mjs
var dataFocusVisibleClasses = [
  "outline-solid outline-transparent",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
];
var ringClasses = [
  "outline-solid outline-transparent",
  "ring-2",
  "ring-focus",
  "ring-offset-2",
  "ring-offset-background"
];
var translateCenterClasses = [
  "absolute",
  "top-1/2",
  "left-1/2",
  "-translate-x-1/2",
  "-translate-y-1/2"
];
var collapseAdjacentVariantBorders = {
  default: ["[&+.border-medium.border-default]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  primary: ["[&+.border-medium.border-primary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  secondary: [
    "[&+.border-medium.border-secondary]:ms-[calc(var(--heroui-border-width-medium)*-1)]"
  ],
  success: ["[&+.border-medium.border-success]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  warning: ["[&+.border-medium.border-warning]:ms-[calc(var(--heroui-border-width-medium)*-1)]"],
  danger: ["[&+.border-medium.border-danger]:ms-[calc(var(--heroui-border-width-medium)*-1)]"]
};

// node_modules/@heroui/theme/dist/chunk-3HDE5SVQ.mjs
var progress = tv(
  {
    slots: {
      base: "flex flex-col gap-2 w-full",
      label: "",
      labelWrapper: "flex justify-between",
      value: "",
      track: "z-0 relative bg-default-300/50 overflow-hidden rtl:rotate-180",
      indicator: "h-full"
    },
    variants: {
      color: {
        default: {
          indicator: "bg-default-400"
        },
        primary: {
          indicator: "bg-primary"
        },
        secondary: {
          indicator: "bg-secondary"
        },
        success: {
          indicator: "bg-success"
        },
        warning: {
          indicator: "bg-warning"
        },
        danger: {
          indicator: "bg-danger"
        }
      },
      size: {
        sm: {
          label: "text-small",
          value: "text-small",
          track: "h-1"
        },
        md: {
          label: "text-medium",
          value: "text-medium",
          track: "h-3"
        },
        lg: {
          label: "text-large",
          value: "text-large",
          track: "h-5"
        }
      },
      radius: {
        none: {
          track: "rounded-none",
          indicator: "rounded-none"
        },
        sm: {
          track: "rounded-small",
          indicator: "rounded-small"
        },
        md: {
          track: "rounded-medium",
          indicator: "rounded-medium"
        },
        lg: {
          track: "rounded-large",
          indicator: "rounded-large"
        },
        full: {
          track: "rounded-full",
          indicator: "rounded-full"
        }
      },
      isStriped: {
        true: {
          indicator: "bg-stripe-gradient-default bg-stripe-size"
        }
      },
      isIndeterminate: {
        true: {
          indicator: ["absolute", "w-full", "origin-left", "animate-indeterminate-bar"]
        }
      },
      isDisabled: {
        true: {
          base: "opacity-disabled cursor-not-allowed"
        }
      },
      disableAnimation: {
        true: {},
        false: {
          indicator: "transition-transform !duration-500"
        }
      }
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      radius: "full",
      isStriped: false,
      isIndeterminate: false,
      isDisabled: false
    },
    compoundVariants: [
      // disableAnimation && !isIndeterminate
      {
        disableAnimation: true,
        isIndeterminate: false,
        class: {
          indicator: "!transition-none motion-reduce:transition-none"
        }
      },
      {
        color: "primary",
        isStriped: true,
        class: {
          indicator: "bg-stripe-gradient-primary bg-stripe-size"
        }
      },
      {
        color: "secondary",
        isStriped: true,
        class: {
          indicator: "bg-stripe-gradient-secondary bg-stripe-size"
        }
      },
      {
        color: "success",
        isStriped: true,
        class: {
          indicator: "bg-stripe-gradient-success bg-stripe-size"
        }
      },
      {
        color: "warning",
        isStriped: true,
        class: {
          indicator: "bg-stripe-gradient-warning bg-stripe-size"
        }
      },
      {
        color: "danger",
        isStriped: true,
        class: {
          indicator: "bg-stripe-gradient-danger bg-stripe-size"
        }
      }
    ]
  },
  {
    twMerge: true
  }
);
var circularProgress = tv({
  slots: {
    base: "flex flex-col justify-center gap-1 max-w-fit items-center",
    label: "",
    svgWrapper: "relative block",
    svg: "z-0 relative overflow-hidden",
    track: "h-full stroke-default-300/50",
    indicator: "h-full stroke-current",
    value: "absolute font-normal inset-0 flex items-center justify-center"
  },
  variants: {
    color: {
      default: {
        svg: "text-default-400"
      },
      primary: {
        svg: "text-primary"
      },
      secondary: {
        svg: "text-secondary"
      },
      success: {
        svg: "text-success"
      },
      warning: {
        svg: "text-warning"
      },
      danger: {
        svg: "text-danger"
      }
    },
    size: {
      sm: {
        svg: "w-8 h-8",
        label: "text-small",
        value: "text-[0.5rem]"
      },
      md: {
        svg: "w-10 h-10",
        label: "text-small",
        value: "text-[0.55rem]"
      },
      lg: {
        svg: "w-12 h-12",
        label: "text-medium",
        value: "text-[0.6rem]"
      }
    },
    isIndeterminate: {
      true: {
        svg: "animate-spinner-ease-spin"
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled cursor-not-allowed"
      }
    },
    disableAnimation: {
      true: {},
      false: {
        indicator: "transition-all !duration-500"
      }
    }
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    isDisabled: false
  },
  compoundVariants: [
    // disableAnimation && !isIndeterminate
    {
      disableAnimation: true,
      isIndeterminate: false,
      class: {
        svg: "!transition-none motion-reduce:transition-none"
      }
    }
  ]
});

// node_modules/@heroui/theme/dist/chunk-ZQGNWTBN.mjs
var button = tv({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-solid outline-transparent",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    "transform-gpu data-[pressed=true]:scale-[0.97]",
    "cursor-pointer",
    // focus ring
    ...dataFocusVisibleClasses
  ],
  variants: {
    variant: {
      solid: "",
      bordered: "border-medium bg-transparent",
      light: "bg-transparent",
      flat: "",
      faded: "border-medium",
      shadow: "",
      ghost: "border-medium bg-transparent"
    },
    size: {
      sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
      lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large"
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: ""
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
      full: "rounded-full"
    },
    fullWidth: {
      true: "w-full"
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none"
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none"
    },
    isIconOnly: {
      true: "px-0 !gap-0",
      false: "[&>svg]:max-w-[theme(spacing.8)]"
    },
    disableAnimation: {
      true: "!transition-none data-[pressed=true]:scale-100",
      false: "transition-transform-colors-opacity motion-reduce:transition-none"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "default",
    fullWidth: false,
    isDisabled: false,
    isInGroup: false
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: colorVariants.solid.default
    },
    {
      variant: "solid",
      color: "primary",
      class: colorVariants.solid.primary
    },
    {
      variant: "solid",
      color: "secondary",
      class: colorVariants.solid.secondary
    },
    {
      variant: "solid",
      color: "success",
      class: colorVariants.solid.success
    },
    {
      variant: "solid",
      color: "warning",
      class: colorVariants.solid.warning
    },
    {
      variant: "solid",
      color: "danger",
      class: colorVariants.solid.danger
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: colorVariants.shadow.default
    },
    {
      variant: "shadow",
      color: "primary",
      class: colorVariants.shadow.primary
    },
    {
      variant: "shadow",
      color: "secondary",
      class: colorVariants.shadow.secondary
    },
    {
      variant: "shadow",
      color: "success",
      class: colorVariants.shadow.success
    },
    {
      variant: "shadow",
      color: "warning",
      class: colorVariants.shadow.warning
    },
    {
      variant: "shadow",
      color: "danger",
      class: colorVariants.shadow.danger
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: colorVariants.bordered.default
    },
    {
      variant: "bordered",
      color: "primary",
      class: colorVariants.bordered.primary
    },
    {
      variant: "bordered",
      color: "secondary",
      class: colorVariants.bordered.secondary
    },
    {
      variant: "bordered",
      color: "success",
      class: colorVariants.bordered.success
    },
    {
      variant: "bordered",
      color: "warning",
      class: colorVariants.bordered.warning
    },
    {
      variant: "bordered",
      color: "danger",
      class: colorVariants.bordered.danger
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: colorVariants.flat.default
    },
    {
      variant: "flat",
      color: "primary",
      class: colorVariants.flat.primary
    },
    {
      variant: "flat",
      color: "secondary",
      class: colorVariants.flat.secondary
    },
    {
      variant: "flat",
      color: "success",
      class: colorVariants.flat.success
    },
    {
      variant: "flat",
      color: "warning",
      class: colorVariants.flat.warning
    },
    {
      variant: "flat",
      color: "danger",
      class: colorVariants.flat.danger
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: colorVariants.faded.default
    },
    {
      variant: "faded",
      color: "primary",
      class: colorVariants.faded.primary
    },
    {
      variant: "faded",
      color: "secondary",
      class: colorVariants.faded.secondary
    },
    {
      variant: "faded",
      color: "success",
      class: colorVariants.faded.success
    },
    {
      variant: "faded",
      color: "warning",
      class: colorVariants.faded.warning
    },
    {
      variant: "faded",
      color: "danger",
      class: colorVariants.faded.danger
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: [colorVariants.light.default, "data-[hover=true]:bg-default/40"]
    },
    {
      variant: "light",
      color: "primary",
      class: [colorVariants.light.primary, "data-[hover=true]:bg-primary/20"]
    },
    {
      variant: "light",
      color: "secondary",
      class: [colorVariants.light.secondary, "data-[hover=true]:bg-secondary/20"]
    },
    {
      variant: "light",
      color: "success",
      class: [colorVariants.light.success, "data-[hover=true]:bg-success/20"]
    },
    {
      variant: "light",
      color: "warning",
      class: [colorVariants.light.warning, "data-[hover=true]:bg-warning/20"]
    },
    {
      variant: "light",
      color: "danger",
      class: [colorVariants.light.danger, "data-[hover=true]:bg-danger/20"]
    },
    // ghost / color
    {
      variant: "ghost",
      color: "default",
      class: [colorVariants.ghost.default, "data-[hover=true]:!bg-default"]
    },
    {
      variant: "ghost",
      color: "primary",
      class: [
        colorVariants.ghost.primary,
        "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "secondary",
      class: [
        colorVariants.ghost.secondary,
        "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "success",
      class: [
        colorVariants.ghost.success,
        "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "warning",
      class: [
        colorVariants.ghost.warning,
        "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground"
      ]
    },
    {
      variant: "ghost",
      color: "danger",
      class: [
        colorVariants.ghost.danger,
        "data-[hover=true]:!bg-danger data-[hover=true]:!text-danger-foreground"
      ]
    },
    // isInGroup / radius / size <-- radius not provided
    {
      isInGroup: true,
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      size: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: true,
      size: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      size: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: true,
      isRounded: true,
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    // isInGroup / radius <-- radius provided
    {
      isInGroup: true,
      radius: "none",
      class: "rounded-none first:rounded-s-none last:rounded-e-none"
    },
    {
      isInGroup: true,
      radius: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: true,
      radius: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      radius: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: true,
      radius: "full",
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    // isInGroup / bordered / ghost
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "default",
      className: collapseAdjacentVariantBorders.default
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "primary",
      className: collapseAdjacentVariantBorders.primary
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "secondary",
      className: collapseAdjacentVariantBorders.secondary
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "success",
      className: collapseAdjacentVariantBorders.success
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "warning",
      className: collapseAdjacentVariantBorders.warning
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "danger",
      className: collapseAdjacentVariantBorders.danger
    },
    {
      isIconOnly: true,
      size: "sm",
      class: "min-w-8 w-8 h-8"
    },
    {
      isIconOnly: true,
      size: "md",
      class: "min-w-10 w-10 h-10"
    },
    {
      isIconOnly: true,
      size: "lg",
      class: "min-w-12 w-12 h-12"
    },
    // variant / hover
    {
      variant: ["solid", "faded", "flat", "bordered", "shadow"],
      class: "data-[hover=true]:opacity-hover"
    }
  ]
});
var buttonGroup = tv({
  base: "inline-flex items-center justify-center h-auto",
  variants: {
    fullWidth: {
      true: "w-full"
    }
  },
  defaultVariants: {
    fullWidth: false
  }
});

// node_modules/@heroui/theme/dist/chunk-KGFOLKLU.mjs
var card = tv({
  slots: {
    base: [
      "flex",
      "flex-col",
      "relative",
      "overflow-hidden",
      "h-auto",
      "outline-solid outline-transparent",
      "text-foreground",
      "box-border",
      "bg-content1",
      // focus ring
      ...dataFocusVisibleClasses
    ],
    header: [
      "flex",
      "p-3",
      "z-10",
      "w-full",
      "justify-start",
      "items-center",
      "shrink-0",
      "overflow-inherit",
      "color-inherit",
      "subpixel-antialiased"
    ],
    body: [
      "relative",
      "flex",
      "flex-1",
      "w-full",
      "p-3",
      "flex-auto",
      "flex-col",
      "place-content-inherit",
      "align-items-inherit",
      "h-auto",
      "break-words",
      "text-left",
      "overflow-y-auto",
      "subpixel-antialiased"
    ],
    footer: [
      "p-3",
      "h-auto",
      "flex",
      "w-full",
      "items-center",
      "overflow-hidden",
      "color-inherit",
      "subpixel-antialiased"
    ]
  },
  variants: {
    shadow: {
      none: {
        base: "shadow-none"
      },
      sm: {
        base: "shadow-small"
      },
      md: {
        base: "shadow-medium"
      },
      lg: {
        base: "shadow-large"
      }
    },
    radius: {
      none: {
        base: "rounded-none",
        header: "rounded-none",
        footer: "rounded-none"
      },
      sm: {
        base: "rounded-small",
        header: "rounded-t-small",
        footer: "rounded-b-small"
      },
      md: {
        base: "rounded-medium",
        header: "rounded-t-medium",
        footer: "rounded-b-medium"
      },
      lg: {
        base: "rounded-large",
        header: "rounded-t-large",
        footer: "rounded-b-large"
      }
    },
    fullWidth: {
      true: {
        base: "w-full"
      }
    },
    isHoverable: {
      true: {
        base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"
      }
    },
    isPressable: {
      true: { base: "cursor-pointer" }
    },
    isBlurred: {
      true: {
        base: [
          "bg-background/80",
          "dark:bg-background/20",
          "backdrop-blur-md",
          "backdrop-saturate-150"
        ]
      }
    },
    isFooterBlurred: {
      true: {
        footer: ["bg-background/10", "backdrop-blur", "backdrop-saturate-150"]
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled cursor-not-allowed"
      }
    },
    disableAnimation: {
      true: "",
      false: { base: "transition-transform-background motion-reduce:transition-none" }
    }
  },
  compoundVariants: [
    {
      isPressable: true,
      class: "data-[pressed=true]:scale-[0.97] tap-highlight-transparent"
    }
  ],
  defaultVariants: {
    radius: "lg",
    shadow: "md",
    fullWidth: false,
    isHoverable: false,
    isPressable: false,
    isDisabled: false,
    isFooterBlurred: false
  }
});

// node_modules/@heroui/theme/dist/chunk-OZTMQS2F.mjs
var chip = tv({
  slots: {
    base: [
      "relative",
      "max-w-fit",
      "min-w-min",
      "inline-flex",
      "items-center",
      "justify-between",
      "box-border",
      "whitespace-nowrap"
    ],
    content: "flex-1 text-inherit font-normal",
    dot: ["w-2", "h-2", "ml-1", "rounded-full"],
    avatar: "shrink-0",
    closeButton: [
      "z-10",
      "appearance-none",
      "outline-solid outline-transparent",
      "select-none",
      "transition-opacity",
      "opacity-70",
      "hover:opacity-100",
      "cursor-pointer",
      "active:opacity-disabled",
      "tap-highlight-transparent"
    ]
  },
  variants: {
    variant: {
      solid: {},
      bordered: {
        base: "border-medium bg-transparent"
      },
      light: {
        base: "bg-transparent"
      },
      flat: {},
      faded: {
        base: "border-medium"
      },
      shadow: {},
      dot: {
        base: "border-medium border-default text-foreground bg-transparent"
      }
    },
    color: {
      default: {
        dot: "bg-default-400"
      },
      primary: {
        dot: "bg-primary"
      },
      secondary: {
        dot: "bg-secondary"
      },
      success: {
        dot: "bg-success"
      },
      warning: {
        dot: "bg-warning"
      },
      danger: {
        dot: "bg-danger"
      }
    },
    size: {
      sm: {
        base: "px-1 h-6 text-tiny",
        content: "px-1",
        closeButton: "text-medium",
        avatar: "w-4 h-4"
      },
      md: {
        base: "px-1 h-7 text-small",
        content: "px-2",
        closeButton: "text-large",
        avatar: "w-5 h-5"
      },
      lg: {
        base: "px-2 h-8 text-medium",
        content: "px-2",
        closeButton: "text-xl",
        avatar: "w-6 h-6"
      }
    },
    radius: {
      none: {
        base: "rounded-none"
      },
      sm: {
        base: "rounded-small"
      },
      md: {
        base: "rounded-medium"
      },
      lg: {
        base: "rounded-large"
      },
      full: {
        base: "rounded-full"
      }
    },
    isOneChar: {
      true: {},
      false: {}
    },
    isCloseable: {
      true: {},
      false: {}
    },
    hasStartContent: {
      true: {}
    },
    hasEndContent: {
      true: {}
    },
    isDisabled: {
      true: { base: "opacity-disabled pointer-events-none" }
    },
    isCloseButtonFocusVisible: {
      true: {
        closeButton: [...ringClasses, "ring-1", "rounded-full"]
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "full",
    isDisabled: false
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: {
        base: colorVariants.solid.default
      }
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        base: colorVariants.solid.primary
      }
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        base: colorVariants.solid.secondary
      }
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: colorVariants.solid.success
      }
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: colorVariants.solid.warning
      }
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: colorVariants.solid.danger
      }
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: {
        base: colorVariants.shadow.default
      }
    },
    {
      variant: "shadow",
      color: "primary",
      class: {
        base: colorVariants.shadow.primary
      }
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        base: colorVariants.shadow.secondary
      }
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        base: colorVariants.shadow.success
      }
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        base: colorVariants.shadow.warning
      }
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        base: colorVariants.shadow.danger
      }
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: {
        base: colorVariants.bordered.default
      }
    },
    {
      variant: "bordered",
      color: "primary",
      class: {
        base: colorVariants.bordered.primary
      }
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        base: colorVariants.bordered.secondary
      }
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        base: colorVariants.bordered.success
      }
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        base: colorVariants.bordered.warning
      }
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        base: colorVariants.bordered.danger
      }
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: {
        base: colorVariants.flat.default
      }
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        base: colorVariants.flat.primary
      }
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        base: colorVariants.flat.secondary
      }
    },
    {
      variant: "flat",
      color: "success",
      class: {
        base: colorVariants.flat.success
      }
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        base: colorVariants.flat.warning
      }
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        base: colorVariants.flat.danger
      }
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: {
        base: colorVariants.faded.default
      }
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        base: colorVariants.faded.primary
      }
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        base: colorVariants.faded.secondary
      }
    },
    {
      variant: "faded",
      color: "success",
      class: {
        base: colorVariants.faded.success
      }
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        base: colorVariants.faded.warning
      }
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        base: colorVariants.faded.danger
      }
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: {
        base: colorVariants.light.default
      }
    },
    {
      variant: "light",
      color: "primary",
      class: {
        base: colorVariants.light.primary
      }
    },
    {
      variant: "light",
      color: "secondary",
      class: {
        base: colorVariants.light.secondary
      }
    },
    {
      variant: "light",
      color: "success",
      class: {
        base: colorVariants.light.success
      }
    },
    {
      variant: "light",
      color: "warning",
      class: {
        base: colorVariants.light.warning
      }
    },
    {
      variant: "light",
      color: "danger",
      class: {
        base: colorVariants.light.danger
      }
    },
    // isOneChar / size
    {
      isOneChar: true,
      hasStartContent: false,
      hasEndContent: false,
      size: "sm",
      class: {
        base: "w-5 h-5 min-w-5 min-h-5"
      }
    },
    {
      isOneChar: true,
      hasStartContent: false,
      hasEndContent: false,
      size: "md",
      class: {
        base: "w-6 h-6 min-w-6 min-h-6"
      }
    },
    {
      isOneChar: true,
      hasStartContent: false,
      hasEndContent: false,
      size: "lg",
      class: {
        base: "w-7 h-7 min-w-7 min-h-7"
      }
    },
    // isOneChar / isCloseable
    {
      isOneChar: true,
      isCloseable: false,
      hasStartContent: false,
      hasEndContent: false,
      class: {
        base: "px-0 justify-center",
        content: "px-0 flex-none"
      }
    },
    {
      isOneChar: true,
      isCloseable: true,
      hasStartContent: false,
      hasEndContent: false,
      class: {
        base: "w-auto"
      }
    },
    // isOneChar / dot
    {
      isOneChar: true,
      variant: "dot",
      class: {
        base: "w-auto h-7 px-1 items-center",
        content: "px-2"
      }
    },
    // hasStartContent / size
    {
      hasStartContent: true,
      size: "sm",
      class: {
        content: "pl-0.5"
      }
    },
    {
      hasStartContent: true,
      size: ["md", "lg"],
      class: {
        content: "pl-1"
      }
    },
    // hasEndContent / size
    {
      hasEndContent: true,
      size: "sm",
      class: {
        content: "pr-0.5"
      }
    },
    {
      hasEndContent: true,
      size: ["md", "lg"],
      class: {
        content: "pr-1"
      }
    }
  ]
});

// node_modules/@heroui/theme/dist/chunk-D2DWF4OD.mjs
var avatar = tv({
  slots: {
    base: [
      "flex",
      "relative",
      "justify-center",
      "items-center",
      "box-border",
      "overflow-hidden",
      "align-middle",
      "text-white",
      "z-0",
      // focus ring
      ...dataFocusVisibleClasses
    ],
    img: [
      "flex",
      "object-cover",
      "w-full",
      "h-full",
      "transition-opacity",
      "!duration-500",
      "opacity-0",
      "data-[loaded=true]:opacity-100"
    ],
    fallback: [...translateCenterClasses, "flex", "items-center", "justify-center"],
    name: [...translateCenterClasses, "font-normal", "text-center", "text-inherit"],
    icon: [
      ...translateCenterClasses,
      "flex",
      "items-center",
      "justify-center",
      "text-inherit",
      "w-full",
      "h-full"
    ]
  },
  variants: {
    size: {
      sm: {
        base: "w-8 h-8 text-tiny"
      },
      md: {
        base: "w-10 h-10 text-tiny"
      },
      lg: {
        base: "w-14 h-14 text-small"
      }
    },
    color: {
      default: {
        base: colorVariants.solid.default
      },
      primary: {
        base: colorVariants.solid.primary
      },
      secondary: {
        base: colorVariants.solid.secondary
      },
      success: {
        base: colorVariants.solid.success
      },
      warning: {
        base: colorVariants.solid.warning
      },
      danger: {
        base: colorVariants.solid.danger
      }
    },
    radius: {
      none: {
        base: "rounded-none"
      },
      sm: {
        base: "rounded-small"
      },
      md: {
        base: "rounded-medium"
      },
      lg: {
        base: "rounded-large"
      },
      full: {
        base: "rounded-full"
      }
    },
    isBordered: {
      true: {
        base: "ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark"
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled"
      }
    },
    isInGroup: {
      true: {
        base: [
          "-ms-2 data-[hover=true]:-translate-x-3 rtl:data-[hover=true]:translate-x-3 transition-transform",
          "data-[focus-visible=true]:-translate-x-3 rtl:data-[focus-visible=true]:translate-x-3"
        ]
      }
    },
    isInGridGroup: {
      true: {
        base: "m-0 data-[hover=true]:translate-x-0"
      }
    },
    disableAnimation: {
      true: {
        base: "transition-none",
        img: "transition-none"
      },
      false: {}
    }
  },
  defaultVariants: {
    size: "md",
    color: "default",
    radius: "full"
  },
  compoundVariants: [
    {
      color: "default",
      isBordered: true,
      class: {
        base: "ring-default"
      }
    },
    {
      color: "primary",
      isBordered: true,
      class: {
        base: "ring-primary"
      }
    },
    {
      color: "secondary",
      isBordered: true,
      class: {
        base: "ring-secondary"
      }
    },
    {
      color: "success",
      isBordered: true,
      class: {
        base: "ring-success"
      }
    },
    {
      color: "warning",
      isBordered: true,
      class: {
        base: "ring-warning"
      }
    },
    {
      color: "danger",
      isBordered: true,
      class: {
        base: "ring-danger"
      }
    }
  ]
});
var avatarGroup = tv({
  slots: {
    base: "flex items-center justify-center h-auto w-max",
    count: "hover:-translate-x-0"
  },
  variants: {
    isGrid: {
      true: "inline-grid grid-cols-4 gap-3"
    }
  }
});

// node_modules/@heroui/system/dist/chunk-Q3W45BN5.mjs
var [ProviderContext, useProviderContext] = createContext2({
  name: "ProviderContext",
  strict: false
});

// node_modules/@react-aria/i18n/dist/utils.mjs
var $148a7a147e38ea7f$var$RTL_SCRIPTS = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]);
var $148a7a147e38ea7f$var$RTL_LANGS = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(localeString) {
  if (Intl.Locale) {
    let locale = new Intl.Locale(localeString).maximize();
    let textInfo = typeof locale.getTextInfo === "function" ? locale.getTextInfo() : locale.textInfo;
    if (textInfo) return textInfo.direction === "rtl";
    if (locale.script) return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(locale.script);
  }
  let lang = localeString.split("-")[0];
  return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}

// node_modules/@react-aria/i18n/dist/useDefaultLocale.mjs
var import_react3 = require("react");

// node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var import_react2 = __toESM(require("react"), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = /* @__PURE__ */ (0, import_react2.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = /* @__PURE__ */ (0, import_react2.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = (0, import_react2.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react2.useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react2.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react2.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM && process.env.NODE_ENV !== "production") console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react2.default).useId();
  let [didSSR] = (0, import_react2.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react2.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react2.default)["useSyncExternalStore"] === "function") return (0, import_react2.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react2.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@react-aria/i18n/dist/useDefaultLocale.mjs
var $1e5a04cdaf7d1af8$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
  let locale = typeof window !== "undefined" && window[$1e5a04cdaf7d1af8$var$localeSymbol] || typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      locale
    ]);
  } catch {
    locale = "en-US";
  }
  return {
    locale,
    direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? "rtl" : "ltr"
  };
}
var $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
var $1e5a04cdaf7d1af8$var$listeners = /* @__PURE__ */ new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
  $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
  for (let listener of $1e5a04cdaf7d1af8$var$listeners) listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
  let isSSR = (0, $b5e257d569688ac6$export$535bd6ca7f90a273)();
  let [defaultLocale, setDefaultLocale] = (0, import_react3.useState)($1e5a04cdaf7d1af8$var$currentLocale);
  (0, import_react3.useEffect)(() => {
    if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
    $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
    return () => {
      $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
      if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
    };
  }, []);
  if (isSSR) return {
    locale: "en-US",
    direction: "ltr"
  };
  return defaultLocale;
}

// node_modules/@react-aria/i18n/dist/context.mjs
var import_react4 = __toESM(require("react"), 1);
var $18f2051aff69b9bf$var$I18nContext = /* @__PURE__ */ (0, import_react4.default).createContext(null);
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
  let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
  let context = (0, import_react4.useContext)($18f2051aff69b9bf$var$I18nContext);
  return context || defaultLocale;
}

// node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react5 = __toESM(require("react"), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react5.default).useLayoutEffect : () => {
};

// node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react6 = __toESM(require("react"), 1);
var $8ae05eaa5c114e9c$var$_React_useInsertionEffect;
var $8ae05eaa5c114e9c$var$useEarlyEffect = ($8ae05eaa5c114e9c$var$_React_useInsertionEffect = (0, import_react6.default)["useInsertionEffect"]) !== null && $8ae05eaa5c114e9c$var$_React_useInsertionEffect !== void 0 ? $8ae05eaa5c114e9c$var$_React_useInsertionEffect : (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c);
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react6.useRef)(null);
  $8ae05eaa5c114e9c$var$useEarlyEffect(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react6.useCallback)((...args) => {
    const f2 = ref.current;
    return f2 === null || f2 === void 0 ? void 0 : f2(...args);
  }, []);
}

// node_modules/@react-aria/utils/dist/useId.mjs
var import_react7 = require("react");
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$export$d41a04c74483c6ef = /* @__PURE__ */ new Map();
var $bdb11010cef70236$var$registry;
if (typeof FinalizationRegistry !== "undefined") $bdb11010cef70236$var$registry = new FinalizationRegistry((heldValue) => {
  $bdb11010cef70236$export$d41a04c74483c6ef.delete(heldValue);
});
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let [value, setValue] = (0, import_react7.useState)(defaultId);
  let nextId = (0, import_react7.useRef)(null);
  let res = (0, $b5e257d569688ac6$export$619500959fc48b26)(value);
  let cleanupRef = (0, import_react7.useRef)(null);
  if ($bdb11010cef70236$var$registry) $bdb11010cef70236$var$registry.register(cleanupRef, res);
  if ($bdb11010cef70236$var$canUseDOM) {
    const cacheIdRef = $bdb11010cef70236$export$d41a04c74483c6ef.get(res);
    if (cacheIdRef && !cacheIdRef.includes(nextId)) cacheIdRef.push(nextId);
    else $bdb11010cef70236$export$d41a04c74483c6ef.set(res, [
      nextId
    ]);
  }
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    let r2 = res;
    return () => {
      if ($bdb11010cef70236$var$registry) $bdb11010cef70236$var$registry.unregister(cleanupRef);
      $bdb11010cef70236$export$d41a04c74483c6ef.delete(r2);
    };
  }, [
    res
  ]);
  (0, import_react7.useEffect)(() => {
    let newId = nextId.current;
    if (newId) setValue(newId);
    return () => {
      if (newId) nextId.current = null;
    };
  });
  return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB) return idA;
  let setIdsA = $bdb11010cef70236$export$d41a04c74483c6ef.get(idA);
  if (setIdsA) {
    setIdsA.forEach((ref) => ref.current = idB);
    return idB;
  }
  let setIdsB = $bdb11010cef70236$export$d41a04c74483c6ef.get(idB);
  if (setIdsB) {
    setIdsB.forEach((ref) => ref.current = idA);
    return idA;
  }
  return idB;
}

// node_modules/@react-aria/utils/dist/chain.mjs
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}

// node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};
function $431fbd86ca7dc216$var$isNode(value) {
  return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
  return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}

// node_modules/@react-stately/flags/dist/import.mjs
var $f4e2df6bd15f8569$var$_shadowDOM = false;
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
  return $f4e2df6bd15f8569$var$_shadowDOM;
}

// node_modules/@react-aria/utils/dist/DOMFunctions.mjs
function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
  if (!(0, $f4e2df6bd15f8569$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
  if (!node || !otherNode) return false;
  let currentNode = otherNode;
  while (currentNode !== null) {
    if (currentNode === node) return true;
    if (currentNode.tagName === "SLOT" && currentNode.assignedSlot)
      currentNode = currentNode.assignedSlot.parentNode;
    else if ((0, $431fbd86ca7dc216$export$af51f0f06c0f328a)(currentNode))
      currentNode = currentNode.host;
    else currentNode = currentNode.parentNode;
  }
  return false;
}
var $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document) => {
  var _activeElement_shadowRoot;
  if (!(0, $f4e2df6bd15f8569$export$98658e8c59125e6a)()) return doc.activeElement;
  let activeElement = doc.activeElement;
  while (activeElement && "shadowRoot" in activeElement && ((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement)) activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
  if ((0, $f4e2df6bd15f8569$export$98658e8c59125e6a)() && event.target.shadowRoot) {
    if (event.composedPath) return event.composedPath()[0];
  }
  return event.target;
}

// node_modules/@react-aria/utils/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f2, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f2 = r(e[t])) && (n && (n += " "), n += f2);
  } else for (f2 in e) e[f2] && (n && (n += " "), n += f2);
  return n;
}
function clsx2() {
  for (var e, t, f2 = 0, n = "", o = arguments.length; f2 < o; f2++) (e = arguments[f2]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx2;

// node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i2 = 1; i2 < args.length; i2++) {
    let props = args[i2];
    for (let key in props) {
      let a2 = result[key];
      let b = props[key];
      if (typeof a2 === "function" && typeof b === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a2, b);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a2 === "string" && typeof b === "string") result[key] = (0, clsx_default)(a2, b);
      else if (key === "id" && a2 && b) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a2, b);
      else result[key] = b !== void 0 ? b : a2;
    }
  }
  return result;
}

// node_modules/@react-aria/utils/dist/filterDOMProps.mjs
var $65484d02dcb7eb3e$var$DOMPropNames = /* @__PURE__ */ new Set([
  "id"
]);
var $65484d02dcb7eb3e$var$labelablePropNames = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]);
var $65484d02dcb7eb3e$var$linkPropNames = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]);
var $65484d02dcb7eb3e$var$globalAttrs = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]);
var $65484d02dcb7eb3e$var$globalEvents = /* @__PURE__ */ new Set([
  "onClick",
  "onAuxClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onScroll",
  "onWheel",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionCancel",
  "onTransitionEnd",
  "onTransitionRun",
  "onTransitionStart"
]);
var $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
  let { labelable, isLink, global, events = global, propNames } = opts;
  let filteredProps = {};
  for (const prop in props) if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || global && $65484d02dcb7eb3e$var$globalAttrs.has(prop) || events && $65484d02dcb7eb3e$var$globalEvents.has(prop) || prop.endsWith("Capture") && $65484d02dcb7eb3e$var$globalEvents.has(prop.slice(0, -7)) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
  return filteredProps;
}

// node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  let brands = (_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands;
  return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
  if (process.env.NODE_ENV === "test") return fn;
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
var $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
var $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
var $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
var $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});

// node_modules/@react-aria/utils/dist/openLink.mjs
var import_react8 = __toESM(require("react"), 1);
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
    else ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;

// node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined") return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e) => {
    if (!isTransitionEvent(e) || !e.target) return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
      e.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e.propertyName);
  };
  let onTransitionEnd = (e) => {
    if (!isTransitionEvent(e) || !e.target) return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!properties) return;
    properties.delete(e.propertyName);
    if (properties.size === 0) {
      e.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$var$cleanupDetachedElements() {
  for (const [eventTarget] of $bbed8b41f857bcc0$var$transitionsByElement)
    if ("isConnected" in eventTarget && !eventTarget.isConnected) $bbed8b41f857bcc0$var$transitionsByElement.delete(eventTarget);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    $bbed8b41f857bcc0$var$cleanupDetachedElements();
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
    else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}

// node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var import_react9 = require("react");
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react9.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react9.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, fn, options);
  }, []);
  let removeGlobalListener = (0, import_react9.useCallback)((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react9.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react9.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/@react-aria/utils/dist/useLabels.mjs
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
  let { id, "aria-label": label, "aria-labelledby": labelledBy } = props;
  id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
  if (labelledBy && label) {
    let ids = /* @__PURE__ */ new Set([
      id,
      ...labelledBy.trim().split(/\s+/)
    ]);
    labelledBy = [
      ...ids
    ].join(" ");
  } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(" ");
  if (!label && !labelledBy && defaultLabel) label = defaultLabel;
  return {
    id,
    "aria-label": label,
    "aria-labelledby": labelledBy
  };
}

// node_modules/@react-aria/utils/dist/useSyncRef.mjs
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref) context.ref.current = null;
      };
    }
  });
}

// node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.pointerType === "" && event.isTrusted) return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
  return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}

// node_modules/@react-aria/utils/dist/isElementVisible.mjs
var $7d2416ea0959daaa$var$supportsCheckVisibility = typeof Element !== "undefined" && "checkVisibility" in Element.prototype;
function $7d2416ea0959daaa$var$isStyleVisible(element) {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
  let { display, visibility } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    const { getComputedStyle } = element.ownerDocument.defaultView;
    let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
    isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
  }
  return isVisible;
}
function $7d2416ea0959daaa$var$isAttributeVisible(element, childElement) {
  return !element.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !element.hasAttribute("data-react-aria-prevent-focus") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $7d2416ea0959daaa$export$e989c0fffaa6b27a(element, childElement) {
  if ($7d2416ea0959daaa$var$supportsCheckVisibility) return element.checkVisibility({
    visibilityProperty: true
  }) && !element.closest("[data-react-aria-prevent-focus]");
  return element.nodeName !== "#comment" && $7d2416ea0959daaa$var$isStyleVisible(element) && $7d2416ea0959daaa$var$isAttributeVisible(element, childElement) && (!element.parentElement || $7d2416ea0959daaa$export$e989c0fffaa6b27a(element.parentElement, element));
}

// node_modules/@react-aria/utils/dist/isFocusable.mjs
var $b4b717babfbb907b$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])',
  "permission"
];
var $b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$b4b717babfbb907b$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $b4b717babfbb907b$var$TABBABLE_ELEMENT_SELECTOR = $b4b717babfbb907b$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $b4b717babfbb907b$export$4c063cf1350e6fed(element) {
  return element.matches($b4b717babfbb907b$var$FOCUSABLE_ELEMENT_SELECTOR) && (0, $7d2416ea0959daaa$export$e989c0fffaa6b27a)(element) && !$b4b717babfbb907b$var$isInert(element);
}
function $b4b717babfbb907b$var$isInert(element) {
  let node = element;
  while (node != null) {
    if (node instanceof node.ownerDocument.defaultView.HTMLElement && node.inert) return true;
    node = node.parentElement;
  }
  return false;
}

// node_modules/@react-stately/utils/dist/number.mjs
function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
  let newValue = Math.min(Math.max(value, min), max);
  return newValue;
}

// node_modules/@internationalized/number/dist/NumberFormatter.mjs
var $488c6ddbf4ef74c2$var$formatterCache = /* @__PURE__ */ new Map();
var $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
try {
  $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay === "exceptZero";
} catch {
}
var $488c6ddbf4ef74c2$var$supportsUnit = false;
try {
  $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style === "unit";
} catch {
}
var $488c6ddbf4ef74c2$var$UNITS = {
  degree: {
    narrow: {
      default: "\xB0",
      "ja-JP": " \u5EA6",
      "zh-TW": "\u5EA6",
      "sl-SI": " \xB0"
    }
  }
};
var $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 = class {
  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(value) {
    let res = "";
    if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
    else res = this.numberFormatter.format(value);
    if (this.options.style === "unit" && !$488c6ddbf4ef74c2$var$supportsUnit) {
      var _UNITS_unit;
      let { unit, unitDisplay = "short", locale } = this.resolvedOptions();
      if (!unit) return res;
      let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
      res += values[locale] || values.default;
    }
    return res;
  }
  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(value) {
    return this.numberFormatter.formatToParts(value);
  }
  /** Formats a number range as a string. */
  formatRange(start, end) {
    if (typeof this.numberFormatter.formatRange === "function") return this.numberFormatter.formatRange(start, end);
    if (end < start) throw new RangeError("End date must be >= start date");
    return `${this.format(start)} \u2013 ${this.format(end)}`;
  }
  /** Formats a number range as an array of parts. */
  formatRangeToParts(start, end) {
    if (typeof this.numberFormatter.formatRangeToParts === "function") return this.numberFormatter.formatRangeToParts(start, end);
    if (end < start) throw new RangeError("End date must be >= start date");
    let startParts = this.numberFormatter.formatToParts(start);
    let endParts = this.numberFormatter.formatToParts(end);
    return [
      ...startParts.map((p2) => ({
        ...p2,
        source: "startRange"
      })),
      {
        type: "literal",
        value: " \u2013 ",
        source: "shared"
      },
      ...endParts.map((p2) => ({
        ...p2,
        source: "endRange"
      }))
    ];
  }
  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions() {
    let options = this.numberFormatter.resolvedOptions();
    if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
      ...options,
      signDisplay: this.options.signDisplay
    };
    if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === "unit") options = {
      ...options,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    };
    return options;
  }
  constructor(locale, options = {}) {
    this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
    this.options = options;
  }
};
function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
  let { numberingSystem } = options;
  if (numberingSystem && locale.includes("-nu-")) {
    if (!locale.includes("-u-")) locale += "-u-";
    locale += `-nu-${numberingSystem}`;
  }
  if (options.style === "unit" && !$488c6ddbf4ef74c2$var$supportsUnit) {
    var _UNITS_unit;
    let { unit, unitDisplay = "short" } = options;
    if (!unit) throw new Error('unit option must be provided with style: "unit"');
    if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
    options = {
      ...options,
      style: "decimal"
    };
  }
  let cacheKey = locale + (options ? Object.entries(options).sort((a2, b) => a2[0] < b[0] ? -1 : 1).join() : "");
  if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
  let numberFormatter = new Intl.NumberFormat(locale, options);
  $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
  return numberFormatter;
}
function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
  if (signDisplay === "auto") return numberFormat.format(num);
  else if (signDisplay === "never") return numberFormat.format(Math.abs(num));
  else {
    let needsPositiveSign = false;
    if (signDisplay === "always") needsPositiveSign = num > 0 || Object.is(num, 0);
    else if (signDisplay === "exceptZero") {
      if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
      else needsPositiveSign = num > 0;
    }
    if (needsPositiveSign) {
      let negative = numberFormat.format(-num);
      let noSign = numberFormat.format(num);
      let minus = negative.replace(noSign, "").replace(/\u200e|\u061C/, "");
      if ([
        ...minus
      ].length !== 1) console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case");
      let positive = negative.replace(noSign, "!!!").replace(minus, "+").replace("!!!", noSign);
      return positive;
    } else return numberFormat.format(num);
  }
}

// node_modules/@react-aria/i18n/dist/useNumberFormatter.mjs
var import_react10 = require("react");
function $a916eb452884faea$export$b7a616150fdb9f44(options = {}) {
  let { locale } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  return (0, import_react10.useMemo)(() => new (0, $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5)(locale, options), [
    locale,
    options
  ]);
}

// node_modules/@react-aria/interactions/dist/utils.mjs
var import_react11 = require("react");
function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  event.nativeEvent = nativeEvent;
  event.isDefaultPrevented = () => event.defaultPrevented;
  event.isPropagationStopped = () => event.cancelBubble;
  event.persist = () => {
  };
  return event;
}
function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  });
  Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react11.useRef)({
    isFocused: false,
    observer: null
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  });
  return (0, import_react11.useCallback)((e) => {
    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e.target;
      let onBlurHandler = (e2) => {
        stateRef.current.isFocused = false;
        if (target.disabled) {
          let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e2);
          dispatchBlur(event);
        }
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}
var $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
function $8a9cb279dc87e130$export$cabe61c495ee3649(target) {
  while (target && !(0, $b4b717babfbb907b$export$4c063cf1350e6fed)(target)) target = target.parentElement;
  let window2 = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(target);
  let activeElement = window2.document.activeElement;
  if (!activeElement || activeElement === target) return;
  $8a9cb279dc87e130$export$fda7da73ab5d4c48 = true;
  let isRefocusing = false;
  let onBlur = (e) => {
    if (e.target === activeElement || isRefocusing) e.stopImmediatePropagation();
  };
  let onFocusOut = (e) => {
    if (e.target === activeElement || isRefocusing) {
      e.stopImmediatePropagation();
      if (!target && !isRefocusing) {
        isRefocusing = true;
        (0, $7215afc6de606d6b$export$de79e2c695e052f3)(activeElement);
        cleanup();
      }
    }
  };
  let onFocus = (e) => {
    if (e.target === target || isRefocusing) e.stopImmediatePropagation();
  };
  let onFocusIn = (e) => {
    if (e.target === target || isRefocusing) {
      e.stopImmediatePropagation();
      if (!isRefocusing) {
        isRefocusing = true;
        (0, $7215afc6de606d6b$export$de79e2c695e052f3)(activeElement);
        cleanup();
      }
    }
  };
  window2.addEventListener("blur", onBlur, true);
  window2.addEventListener("focusout", onFocusOut, true);
  window2.addEventListener("focusin", onFocusIn, true);
  window2.addEventListener("focus", onFocus, true);
  let cleanup = () => {
    cancelAnimationFrame(raf);
    window2.removeEventListener("blur", onBlur, true);
    window2.removeEventListener("focusout", onFocusOut, true);
    window2.removeEventListener("focusin", onFocusIn, true);
    window2.removeEventListener("focus", onFocus, true);
    $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;
    isRefocusing = false;
  };
  let raf = requestAnimationFrame(cleanup);
  return cleanup;
}

// node_modules/@react-aria/interactions/dist/textSelection.mjs
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style[property]);
    target.style[property] = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state !== "disabled") return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
      if (target.style[property] === "none") target.style[property] = targetOldUserSelect;
      if (target.getAttribute("style") === "") target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}

// node_modules/@react-aria/interactions/dist/context.mjs
var import_react12 = __toESM(require("react"), 1);
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, import_react12.default).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";

// node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
  if (descriptor.get) return descriptor.get.call(receiver);
  return descriptor.value;
}

// node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}

// node_modules/@swc/helpers/esm/_class_private_field_get.js
function _class_private_field_get(receiver, privateMap) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
  return _class_apply_descriptor_get(receiver, descriptor);
}

// node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
  if (descriptor.set) descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_set.js
function _class_private_field_set(receiver, privateMap, value) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
  _class_apply_descriptor_set(receiver, descriptor, value);
  return value;
}

// node_modules/@react-aria/interactions/dist/usePress.mjs
var import_react_dom = require("react-dom");
var import_react13 = require("react");
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react13.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  if (context) {
    let { register, ...contextProps } = context;
    props = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
    register();
  }
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
var $f6c31cce2adf654f$var$PressEvent = class {
  continuePropagation() {
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent, state) {
    (0, _class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    var _state_target;
    let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
    const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
    let x2, y2 = 0;
    let clientX, clientY = null;
    if (originalEvent.clientX != null && originalEvent.clientY != null) {
      clientX = originalEvent.clientX;
      clientY = originalEvent.clientY;
    }
    if (rect) {
      if (clientX != null && clientY != null) {
        x2 = clientX - rect.left;
        y2 = clientY - rect.top;
      } else {
        x2 = rect.width / 2;
        y2 = rect.height / 2;
      }
    }
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
    this.x = x2;
    this.y = y2;
  }
};
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
var $f6c31cce2adf654f$var$STYLE_ID = "react-aria-pressable-style";
var $f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE = "data-react-aria-pressable";
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let { onPress, onPressChange, onPressStart, onPressEnd, onPressUp, onClick, isDisabled, isPressed: isPressedProp, preventFocusOnPress, shouldCancelOnPointerExit, allowTextSelectionOnPress, ref: domRef, ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = (0, import_react13.useState)(false);
  let ref = (0, import_react13.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null,
    disposables: []
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let triggerPressStart = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled || state.didFirePressStart) return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart) return false;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled) {
      let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled) return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
      for (let dispose of state.disposables) dispose();
      state.disposables = [];
    }
  });
  let cancelOnPointerExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e) => {
    if (shouldCancelOnPointerExit) cancel(e);
  });
  let triggerClick = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e) => {
    if (isDisabled) return;
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  });
  let triggerSyntheticClick = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e, target) => {
    if (isDisabled) return;
    if (onClick) {
      let event = new MouseEvent("click", e);
      (0, $8a9cb279dc87e130$export$c2b7abe5d61ec696)(event, target);
      onClick((0, $8a9cb279dc87e130$export$525bc4921d56d4a)(event));
    }
  });
  let pressProps = (0, import_react13.useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && (0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard((0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent), e.key)) e.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            state.pointerType = "keyboard";
            shouldStopPropagation = triggerPressStart(e, "keyboard");
            let originalTarget = e.currentTarget;
            let pressUp = (e2) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e2, originalTarget) && !e2.repeat && (0, $d4ee10de306f2510$export$4282f70798064fe0)(originalTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e2)) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e2), "keyboard");
            };
            addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), "keyup", (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation) e.stopPropagation();
          if (e.metaKey && (0, $c87311424ea30a05$export$9ac100e40613ea10)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
        } else if (e.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e) {
        if (e && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        if (e && e.button === 0 && !state.isTriggeringEvent && !(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled) e.preventDefault();
          if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $6a7db85432448f7f$export$60278871457622de)(e.nativeEvent))) {
            let stopPressStart = triggerPressStart(e, "virtual");
            let stopPressUp = triggerPressUp(e, "virtual");
            let stopPressEnd = triggerPressEnd(e, "virtual");
            triggerClick(e);
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          } else if (state.isPressed && state.pointerType !== "keyboard") {
            let pointerType = state.pointerType || e.nativeEvent.pointerType || "virtual";
            let stopPressUp = triggerPressUp($f6c31cce2adf654f$var$createEvent(e.currentTarget, e), pointerType);
            let stopPressEnd = triggerPressEnd($f6c31cce2adf654f$var$createEvent(e.currentTarget, e), pointerType, true);
            shouldStopPropagation = stopPressUp && stopPressEnd;
            state.isOverTarget = false;
            triggerClick(e);
            cancel(e);
          }
          state.ignoreEmulatedMouseEvents = false;
          if (shouldStopPropagation) e.stopPropagation();
        }
      }
    };
    let onKeyUp = (e) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard((0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e), e.key)) e.preventDefault();
        let target = (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e);
        let wasPressed = (0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e));
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard", wasPressed);
        if (wasPressed) triggerSyntheticClick(e, state.target);
        removeAllGlobalListeners();
        if (e.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && (0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          (0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
      } else if (e.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values()) (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e) => {
        if (e.button !== 0 || !(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        if ((0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        state.pointerType = e.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;
          if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
          let target = (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent);
          if ("releasePointerCapture" in target) target.releasePointerCapture(e.pointerId);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseDown = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        if (e.button === 0) {
          if (preventFocusOnPress) {
            let dispose = (0, $8a9cb279dc87e130$export$cabe61c495ee3649)(e.target);
            if (dispose) state.disposables.push(dispose);
          }
          e.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent)) || state.pointerType === "virtual") return;
        if (e.button === 0 && !state.isPressed) triggerPressUp(e, state.pointerType || e.pointerType);
      };
      pressProps2.onPointerEnter = (e) => {
        if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = true;
          triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
        }
      };
      pressProps2.onPointerLeave = (e) => {
        if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
          cancelOnPointerExit(e);
        }
      };
      let onPointerUp = (e) => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
          if ((0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e)) && state.pointerType != null) {
            let clicked = false;
            let timeout = setTimeout(() => {
              if (state.isPressed && state.target instanceof HTMLElement) {
                if (clicked) cancel(e);
                else {
                  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(state.target);
                  state.target.click();
                }
              }
            }, 80);
            addGlobalListener(e.currentTarget, "click", () => clicked = true, true);
            state.disposables.push(() => clearTimeout(timeout));
          } else cancel(e);
          state.isOverTarget = false;
        }
      };
      let onPointerCancel = (e) => {
        cancel(e);
      };
      pressProps2.onDragStart = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        cancel(e);
      };
    } else if (process.env.NODE_ENV === "test") {
      pressProps2.onMouseDown = (e) => {
        if (e.button !== 0 || !(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        if (state.ignoreEmulatedMouseEvents) {
          e.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e.currentTarget;
        state.pointerType = (0, $6a7db85432448f7f$export$60278871457622de)(e.nativeEvent) ? "virtual" : "mouse";
        let shouldStopPropagation = (0, import_react_dom.flushSync)(() => triggerPressStart(e, state.pointerType));
        if (shouldStopPropagation) e.stopPropagation();
        if (preventFocusOnPress) {
          let dispose = (0, $8a9cb279dc87e130$export$cabe61c495ee3649)(e.target);
          if (dispose) state.disposables.push(dispose);
        }
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseLeave = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
          cancelOnPointerExit(e);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseUp = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        if (!state.ignoreEmulatedMouseEvents && e.button === 0 && !state.isPressed) triggerPressUp(e, state.pointerType || "mouse");
      };
      let onMouseUp = (e) => {
        if (e.button !== 0) return;
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && state.target.contains(e.target) && state.pointerType != null) ;
        else cancel(e);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
        if (!touch) return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e.currentTarget;
        state.pointerType = "touch";
        if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
        let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
        if (shouldStopPropagation) e.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        if (!state.isPressed) {
          e.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
          cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onTouchEnd = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        if (!state.isPressed) {
          e.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
          triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
          triggerSyntheticClick(e.nativeEvent, state.target);
        } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
        if (shouldStopPropagation) e.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        e.stopPropagation();
        if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
      };
      let onScroll = (e) => {
        if (state.isPressed && (0, $d4ee10de306f2510$export$4282f70798064fe0)((0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e), state.target)) cancel({
          currentTarget: state.target,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
          altKey: false
        });
      };
      pressProps2.onDragStart = (e) => {
        if (!(0, $d4ee10de306f2510$export$4282f70798064fe0)(e.currentTarget, (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent))) return;
        cancel(e);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp,
    triggerClick,
    triggerSyntheticClick
  ]);
  (0, import_react13.useEffect)(() => {
    if (!domRef || process.env.NODE_ENV === "test") return;
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(domRef.current);
    if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById($f6c31cce2adf654f$var$STYLE_ID)) return;
    const style = ownerDocument.createElement("style");
    style.id = $f6c31cce2adf654f$var$STYLE_ID;
    style.textContent = `
@layer {
  [${$f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
    ownerDocument.head.prepend(style);
  }, [
    domRef
  ]);
  (0, import_react13.useEffect)(() => {
    let state = ref.current;
    return () => {
      var _state_target;
      if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_state_target = state.target) !== null && _state_target !== void 0 ? _state_target : void 0);
      for (let dispose of state.disposables) dispose();
      state.disposables = [];
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps, {
      [$f6c31cce2adf654f$var$PRESSABLE_ATTRIBUTE]: true
    })
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0) return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i2 = 0; i2 < changedTouches.length; i2++) {
    const touch = changedTouches[i2];
    if (touch.identifier === pointerId) return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createTouchEvent(target, e) {
  let clientX = 0;
  let clientY = 0;
  if (e.targetTouches && e.targetTouches.length === 1) {
    clientX = e.targetTouches[0].clientX;
    clientY = e.targetTouches[0].clientY;
  }
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
  let clientX = e.clientX;
  let clientY = e.clientY;
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = 0;
  let offsetY = 0;
  if (point.width !== void 0) offsetX = point.width / 2;
  else if (point.radiusX !== void 0) offsetX = point.radiusX;
  if (point.height !== void 0) offsetY = point.height / 2;
  else if (point.radiusY !== void 0) offsetY = point.radiusY;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a2, b) {
  if (a2.left > b.right || b.left > a2.right) return false;
  if (a2.top > b.bottom || b.top > a2.bottom) return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefaultUp(target) {
  if (target instanceof HTMLInputElement) return false;
  if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
  return true;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  return $f6c31cce2adf654f$var$shouldPreventDefaultUp(target);
}
var $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

// node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var import_react14 = require("react");
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e);
}
function $507fabe10e71c6fb$var$isValidKey(e) {
  return !(e.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e.type === "mousedown" || e.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
  if ((0, $6a7db85432448f7f$export$60278871457622de)(e)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
  if (e.target === window || e.target === document || (0, $8a9cb279dc87e130$export$fda7da73ab5d4c48) || !e.isTrusted) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  if (0, $8a9cb279dc87e130$export$fda7da73ab5d4c48) return;
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || typeof document === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else if (process.env.NODE_ENV === "test") {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else if (process.env.NODE_ENV === "test") {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
  return $507fabe10e71c6fb$var$currentModality;
}
var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
  let document1 = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e === null || e === void 0 ? void 0 : e.target);
  const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable;
  return !(isTextInput && modality === "keyboard" && e instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react14.useEffect)(() => {
    let handler = (modality, e) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}

// node_modules/@react-aria/interactions/dist/focusSafely.mjs
function $3ad3f6e1647bc98d$export$80f3e147d781571c(element) {
  const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  const activeElement = (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
  if ((0, $507fabe10e71c6fb$export$630ff653c5ada6a9)() === "virtual") {
    let lastFocusedElement = activeElement;
    (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
      if ((0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) === lastFocusedElement && element.isConnected) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(element);
    });
  } else (0, $7215afc6de606d6b$export$de79e2c695e052f3)(element);
}

// node_modules/@react-aria/interactions/dist/useFocus.mjs
var import_react15 = require("react");
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react15.useCallback)((e) => {
    if (e.target === e.currentTarget) {
      if (onBlurProp) onBlurProp(e);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, import_react15.useCallback)((e) => {
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e.target);
    const activeElement = ownerDocument ? (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) : (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)();
    if (e.target === e.currentTarget && activeElement === (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent)) {
      if (onFocusProp) onFocusProp(e);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// node_modules/@react-aria/interactions/dist/createEventHandler.mjs
function $93925083ecbb358c$export$48d1ea6320830260(handler) {
  if (!handler) return void 0;
  let shouldStopPropagation = true;
  return (e) => {
    let event = {
      ...e,
      preventDefault() {
        e.preventDefault();
      },
      isDefaultPrevented() {
        return e.isDefaultPrevented();
      },
      stopPropagation() {
        if (shouldStopPropagation && process.env.NODE_ENV !== "production") console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
        else shouldStopPropagation = true;
      },
      continuePropagation() {
        shouldStopPropagation = false;
      },
      isPropagationStopped() {
        return shouldStopPropagation;
      }
    };
    handler(event);
    if (shouldStopPropagation) e.stopPropagation();
  };
}

// node_modules/@react-aria/interactions/dist/useKeyboard.mjs
function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyDown),
      onKeyUp: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyUp)
    }
  };
}

// node_modules/@react-aria/interactions/dist/useFocusable.mjs
var import_react16 = __toESM(require("react"), 1);
var $f645667febf57a63$export$f9762fab77588ecb = /* @__PURE__ */ (0, import_react16.default).createContext(null);
function $f645667febf57a63$var$useFocusableContext(ref) {
  let context = (0, import_react16.useContext)($f645667febf57a63$export$f9762fab77588ecb) || {};
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, ref);
  let { ref: _, ...otherProps } = context;
  return otherProps;
}
function $f645667febf57a63$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)(props);
  let { keyboardProps } = (0, $46d819fcbaf35654$export$8f71654801c2f7cd)(props);
  let interactions = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(focusProps, keyboardProps);
  let domProps = $f645667febf57a63$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = (0, import_react16.useRef)(props.autoFocus);
  (0, import_react16.useEffect)(() => {
    if (autoFocusRef.current && domRef.current) (0, $3ad3f6e1647bc98d$export$80f3e147d781571c)(domRef.current);
    autoFocusRef.current = false;
  }, [
    domRef
  ]);
  let tabIndex = props.excludeFromTabOrder ? -1 : 0;
  if (props.isDisabled) tabIndex = void 0;
  return {
    focusableProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)({
      ...interactions,
      tabIndex
    }, interactionProps)
  };
}

// node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var import_react17 = require("react");
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react17.useRef)({
    isFocusWithin: false
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let onBlur = (0, import_react17.useCallback)((e) => {
    if (!e.currentTarget.contains(e.target)) return;
    if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
      state.current.isFocusWithin = false;
      removeAllGlobalListeners();
      if (onBlurWithin) onBlurWithin(e);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]);
  let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, import_react17.useCallback)((e) => {
    if (!e.currentTarget.contains(e.target)) return;
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e.target);
    const activeElement = (0, $d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
    if (!state.current.isFocusWithin && activeElement === (0, $d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent)) {
      if (onFocusWithin) onFocusWithin(e);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e);
      let currentTarget = e.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e2) => {
        if (state.current.isFocusWithin && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(currentTarget, e2.target)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: e2.target
          });
          (0, $8a9cb279dc87e130$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
          let event = (0, $8a9cb279dc87e130$export$525bc4921d56d4a)(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: true
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  if (isDisabled) return {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/@react-aria/interactions/dist/useHover.mjs
var import_react18 = require("react");
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
  if (e.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined") return;
  if ($6179b936705e76d3$var$hoverCount === 0) {
    if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else if (process.env.NODE_ENV === "test") document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  }
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0) return;
    if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else if (process.env.NODE_ENV === "test") document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = (0, import_react18.useState)(false);
  let state = (0, import_react18.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react18.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let { hoverProps, triggerHoverEnd } = (0, import_react18.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(event.target), "pointerover", (e) => {
        if (state.isHovered && state.target && !(0, $d4ee10de306f2510$export$4282f70798064fe0)(state.target, e.target)) triggerHoverEnd2(e, e.pointerType);
      }, {
        capture: true
      });
      if (onHoverStart) onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      let target = state.target;
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered || !target) return;
      state.isHovered = false;
      removeAllGlobalListeners();
      if (onHoverEnd) onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
        triggerHoverStart(e, e.pointerType);
      };
      hoverProps2.onPointerLeave = (e) => {
        if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd2(e, e.pointerType);
      };
    } else if (process.env.NODE_ENV === "test") {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e) => {
        if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd2(e, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state,
    addGlobalListener,
    removeAllGlobalListeners
  ]);
  (0, import_react18.useEffect)(() => {
    if (isDisabled) triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/@react-aria/focus/dist/useFocusRing.mjs
var import_react19 = require("react");
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react19.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, import_react19.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react19.useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (0, import_react19.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, import_react19.useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/@heroui/system-rsc/dist/chunk-YFAKJTDR.mjs
var import_react20 = require("react");
function forwardRef(component) {
  return (0, import_react20.forwardRef)(component);
}
var mapPropsVariants = (props, variantKeys, removeVariantProps = true) => {
  if (!variantKeys) {
    return [props, {}];
  }
  const picked = variantKeys.reduce((acc, key) => {
    if (key in props) {
      return { ...acc, [key]: props[key] };
    } else {
      return acc;
    }
  }, {});
  if (removeVariantProps) {
    const omitted = Object.keys(props).filter((key) => !variantKeys.includes(key)).reduce((acc, key) => ({ ...acc, [key]: props[key] }), {});
    return [omitted, picked];
  } else {
    return [props, picked];
  }
};

// node_modules/@heroui/avatar/dist/chunk-VWM2HFFA.mjs
var import_react23 = require("react");

// node_modules/@heroui/use-image/dist/index.mjs
var import_react22 = require("react");

// node_modules/@heroui/use-safe-layout-effect/dist/index.mjs
var import_react21 = require("react");
var useSafeLayoutEffect = Boolean(globalThis == null ? void 0 : globalThis.document) ? import_react21.useLayoutEffect : import_react21.useEffect;

// node_modules/@heroui/use-image/dist/index.mjs
function useImage(props = {}) {
  const {
    onLoad,
    onError,
    ignoreFallback,
    src,
    crossOrigin,
    srcSet,
    sizes,
    loading,
    shouldBypassImageLoad = false
  } = props;
  const isHydrated = useIsHydrated();
  const imageRef = (0, import_react22.useRef)(isHydrated ? new Image() : null);
  const [status, setStatus] = (0, import_react22.useState)("pending");
  (0, import_react22.useEffect)(() => {
    if (!imageRef.current) return;
    imageRef.current.onload = (event) => {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };
    imageRef.current.onerror = (error) => {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error);
    };
  }, [imageRef.current]);
  const flush = () => {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };
  const load = (0, import_react22.useCallback)(() => {
    if (!src) return "pending";
    if (ignoreFallback || shouldBypassImageLoad) return "loaded";
    const img = new Image();
    img.src = src;
    if (crossOrigin) img.crossOrigin = crossOrigin;
    if (srcSet) img.srcset = srcSet;
    if (sizes) img.sizes = sizes;
    if (loading) img.loading = loading;
    imageRef.current = img;
    if (img.complete && img.naturalWidth) {
      return "loaded";
    }
    return "loading";
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError, loading, shouldBypassImageLoad]);
  useSafeLayoutEffect(() => {
    if (isHydrated) {
      setStatus(load());
    }
  }, [isHydrated, load]);
  return ignoreFallback ? "loaded" : status;
}

// node_modules/@heroui/avatar/dist/chunk-VWM2HFFA.mjs
function useAvatar(originalProps = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const globalContext = useProviderContext();
  const groupContext = useAvatarGroupContext();
  const isInGroup = !!groupContext;
  const {
    as,
    ref,
    src,
    name,
    icon,
    classNames,
    fallback,
    alt = name || "avatar",
    imgRef: imgRefProp,
    color = (_a = groupContext == null ? void 0 : groupContext.color) != null ? _a : "default",
    radius = (_b = groupContext == null ? void 0 : groupContext.radius) != null ? _b : "full",
    size = (_c = groupContext == null ? void 0 : groupContext.size) != null ? _c : "md",
    isBordered = (_d = groupContext == null ? void 0 : groupContext.isBordered) != null ? _d : false,
    isDisabled = (_e = groupContext == null ? void 0 : groupContext.isDisabled) != null ? _e : false,
    isFocusable = false,
    getInitials = safeInitials,
    ignoreFallback = false,
    showFallback: showFallbackProp = false,
    ImgComponent = "img",
    imgProps,
    className,
    onError,
    disableAnimation: disableAnimationProp,
    ...otherProps
  } = originalProps;
  const Component = as || "span";
  const domRef = useDOMRef(ref);
  const imgRef = useDOMRef(imgRefProp);
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  const disableAnimation = (_f = disableAnimationProp != null ? disableAnimationProp : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _f : false;
  const isHeroImage = (_h = typeof ImgComponent === "object" && ((_g = ImgComponent == null ? void 0 : ImgComponent.displayName) == null ? void 0 : _g.includes("HeroUI"))) != null ? _h : false;
  const imageStatus = useImage({
    src,
    onError,
    ignoreFallback,
    shouldBypassImageLoad: as !== void 0 || ImgComponent !== "img" && !isHeroImage
  });
  const isImgLoaded = imageStatus === "loaded";
  const shouldFilterDOMProps = !isHeroImage;
  const showFallback = (!src || !isImgLoaded) && showFallbackProp;
  const slots = (0, import_react23.useMemo)(
    () => {
      var _a2;
      return avatar({
        color,
        radius,
        size,
        isBordered,
        isDisabled,
        isInGroup,
        disableAnimation,
        isInGridGroup: (_a2 = groupContext == null ? void 0 : groupContext.isGrid) != null ? _a2 : false
      });
    },
    [
      color,
      radius,
      size,
      isBordered,
      isDisabled,
      disableAnimation,
      isInGroup,
      groupContext == null ? void 0 : groupContext.isGrid
    ]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const canBeFocused = (0, import_react23.useMemo)(() => {
    return isFocusable || as === "button";
  }, [isFocusable, as]);
  const getAvatarProps = (0, import_react23.useCallback)(
    (props = {}) => ({
      ref: domRef,
      tabIndex: canBeFocused ? 0 : -1,
      "data-hover": dataAttr(isHovered),
      "data-focus": dataAttr(isFocused),
      "data-focus-visible": dataAttr(isFocusVisible),
      className: slots.base({
        class: clsx(baseStyles, props == null ? void 0 : props.className)
      }),
      ...mergeProps(otherProps, hoverProps, canBeFocused ? focusProps : {})
    }),
    [canBeFocused, slots, baseStyles, focusProps, otherProps]
  );
  const getImageProps = (0, import_react23.useCallback)(
    (props = {}) => ({
      ref: imgRef,
      src,
      "data-loaded": dataAttr(isImgLoaded),
      className: slots.img({ class: classNames == null ? void 0 : classNames.img }),
      ...mergeProps(
        imgProps,
        props,
        filterDOMProps({ disableAnimation }, {
          enabled: shouldFilterDOMProps
        })
      )
    }),
    [slots, isImgLoaded, imgProps, disableAnimation, src, imgRef, shouldFilterDOMProps]
  );
  return {
    Component,
    ImgComponent,
    src,
    alt,
    icon,
    name,
    imgRef,
    slots,
    classNames,
    fallback,
    isImgLoaded,
    showFallback,
    ignoreFallback,
    getInitials,
    getAvatarProps,
    getImageProps
  };
}

// node_modules/@heroui/avatar/dist/chunk-DPUNBZPN.mjs
var import_react24 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Avatar = forwardRef((props, ref) => {
  const {
    Component,
    ImgComponent,
    src,
    icon = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarIcon, {}),
    alt,
    classNames,
    slots,
    name,
    showFallback,
    fallback: fallbackComponent,
    getInitials,
    getAvatarProps,
    getImageProps
  } = useAvatar({
    ...props,
    ref
  });
  const fallback = (0, import_react24.useMemo)(() => {
    if (!showFallback && src) return null;
    if (fallbackComponent) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { "aria-label": alt, className: slots.fallback({ class: classNames == null ? void 0 : classNames.fallback }), role: "img", children: fallbackComponent });
    }
    return name ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-label": alt, className: slots.name({ class: classNames == null ? void 0 : classNames.name }), role: "img", children: getInitials(name) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-label": alt, className: slots.icon({ class: classNames == null ? void 0 : classNames.icon }), role: "img", children: icon });
  }, [showFallback, src, fallbackComponent, name, classNames]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Component, { ...getAvatarProps(), children: [
    src && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ImgComponent, { ...getImageProps(), alt }),
    fallback
  ] });
});
Avatar.displayName = "HeroUI.Avatar";
var avatar_default = Avatar;

// node_modules/@heroui/card/dist/chunk-XHGGCEVJ.mjs
var [CardProvider, useCardContext] = createContext2({
  name: "CardContext",
  strict: true,
  errorMessage: "useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"
});

// node_modules/@heroui/card/dist/chunk-LGSBTEIA.mjs
var import_jsx_runtime3 = require("react/jsx-runtime");
var CardBody = forwardRef((props, ref) => {
  var _a;
  const { as, className, children, ...otherProps } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const { slots, classNames } = useCardContext();
  const bodyStyles = clsx(classNames == null ? void 0 : classNames.body, className);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Component, { ref: domRef, className: (_a = slots.body) == null ? void 0 : _a.call(slots, { class: bodyStyles }), ...otherProps, children });
});
CardBody.displayName = "HeroUI.CardBody";
var card_body_default = CardBody;

// node_modules/@heroui/card/dist/chunk-DHMIPUUY.mjs
var import_react26 = require("react");

// node_modules/@heroui/use-aria-button/dist/index.mjs
function useAriaButton(props, ref) {
  let {
    elementType = "button",
    isDisabled,
    onPress,
    onPressStart,
    onPressEnd,
    onPressUp,
    onPressChange,
    // @ts-ignore - undocumented
    preventFocusOnPress,
    // @ts-ignore - undocumented
    allowFocusWhenDisabled,
    onClick,
    href,
    target,
    rel,
    type = "button",
    allowTextSelectionOnPress
  } = props;
  let additionalProps;
  if (elementType === "button") {
    additionalProps = {
      type,
      disabled: isDisabled
    };
  } else {
    additionalProps = {
      role: "button",
      href: elementType === "a" && !isDisabled ? href : void 0,
      target: elementType === "a" ? target : void 0,
      type: elementType === "input" ? type : void 0,
      disabled: elementType === "input" ? isDisabled : void 0,
      "aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
      rel: elementType === "a" ? rel : void 0
    };
  }
  let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21({
    onClick,
    onPressStart,
    onPressEnd,
    onPressUp,
    onPressChange,
    onPress,
    isDisabled,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    ref
  });
  let { focusableProps } = $f645667febf57a63$export$4c014de7c8940b4c(props, ref);
  if (allowFocusWhenDisabled) {
    focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
  }
  let buttonProps = $3ef42575df84b30b$export$9d1611c77c2fe928(
    focusableProps,
    pressProps,
    $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { labelable: true })
  );
  return {
    isPressed,
    // Used to indicate press state for visual
    buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(additionalProps, buttonProps, {
      "aria-haspopup": props["aria-haspopup"],
      "aria-expanded": props["aria-expanded"],
      "aria-controls": props["aria-controls"],
      "aria-pressed": props["aria-pressed"],
      "aria-current": props["aria-current"]
    })
  };
}

// node_modules/@heroui/ripple/dist/chunk-QHRCZSEO.mjs
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime4 = require("react/jsx-runtime");
var domAnimation2 = () => Promise.resolve().then(() => (init_dist(), dist_exports)).then((res) => res.default);
var Ripple = (props) => {
  const { ripples = [], motionProps, color = "currentColor", style, onClear } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: ripples.map((ripple) => {
    const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_framer_motion2.LazyMotion, { features: domAnimation2, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_framer_motion2.AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_framer_motion2.m.span,
      {
        animate: { transform: "scale(2)", opacity: 0 },
        className: "heroui-ripple",
        exit: { opacity: 0 },
        initial: { transform: "scale(0)", opacity: 0.35 },
        style: {
          position: "absolute",
          backgroundColor: color,
          borderRadius: "100%",
          transformOrigin: "center",
          pointerEvents: "none",
          overflow: "hidden",
          inset: 0,
          zIndex: 0,
          top: ripple.y,
          left: ripple.x,
          width: `${ripple.size}px`,
          height: `${ripple.size}px`,
          ...style
        },
        transition: { duration },
        onAnimationComplete: () => {
          onClear(ripple.key);
        },
        ...motionProps
      }
    ) }) }, ripple.key);
  }) });
};
Ripple.displayName = "HeroUI.Ripple";
var ripple_default = Ripple;

// node_modules/@heroui/ripple/dist/chunk-6VC6TS2O.mjs
var import_react25 = require("react");
function useRipple(props = {}) {
  const [ripples, setRipples] = (0, import_react25.useState)([]);
  const onPress = (0, import_react25.useCallback)((event) => {
    const trigger = event.target;
    const size = Math.max(trigger.clientWidth, trigger.clientHeight);
    setRipples((prevRipples) => [
      ...prevRipples,
      {
        key: getUniqueID(prevRipples.length.toString()),
        size,
        x: event.x - size / 2,
        y: event.y - size / 2
      }
    ]);
  }, []);
  const onClear = (0, import_react25.useCallback)((key) => {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key));
  }, []);
  return { ripples, onClear, onPress, ...props };
}

// node_modules/@heroui/card/dist/chunk-DHMIPUUY.mjs
function useCard(originalProps) {
  var _a, _b, _c, _d;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, card.variantKeys);
  const {
    ref,
    as,
    children,
    onClick,
    onPress,
    autoFocus,
    className,
    classNames,
    allowTextSelectionOnPress = true,
    ...otherProps
  } = props;
  const domRef = useDOMRef(ref);
  const Component = as || (originalProps.isPressable ? "button" : "div");
  const shouldFilterDOMProps = typeof Component === "string";
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const disableRipple = (_d = (_c = originalProps.disableRipple) != null ? _c : globalContext == null ? void 0 : globalContext.disableRipple) != null ? _d : false;
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const { onClear: onClearRipple, onPress: onRipplePressHandler, ripples } = useRipple();
  const handlePress = (0, import_react26.useCallback)(
    (e) => {
      if (disableRipple || disableAnimation) return;
      domRef.current && onRipplePressHandler(e);
    },
    [disableRipple, disableAnimation, domRef, onRipplePressHandler]
  );
  const { buttonProps, isPressed } = useAriaButton(
    {
      onPress: chain(onPress, handlePress),
      elementType: as,
      isDisabled: !originalProps.isPressable,
      onClick,
      allowTextSelectionOnPress,
      ...otherProps
    },
    domRef
  );
  const { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled: !originalProps.isHoverable,
    ...otherProps
  });
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus
  });
  const slots = (0, import_react26.useMemo)(
    () => card({
      ...variantProps,
      disableAnimation
    }),
    [objectToDeps(variantProps), disableAnimation]
  );
  const context = (0, import_react26.useMemo)(
    () => ({
      slots,
      classNames,
      disableAnimation,
      isDisabled: originalProps.isDisabled,
      isFooterBlurred: originalProps.isFooterBlurred,
      fullWidth: originalProps.fullWidth
    }),
    [
      slots,
      classNames,
      originalProps.isDisabled,
      originalProps.isFooterBlurred,
      disableAnimation,
      originalProps.fullWidth
    ]
  );
  const getCardProps = (0, import_react26.useCallback)(
    (props2 = {}) => {
      return {
        ref: domRef,
        className: slots.base({ class: baseStyles }),
        tabIndex: originalProps.isPressable ? 0 : -1,
        "data-hover": dataAttr(isHovered),
        "data-pressed": dataAttr(isPressed),
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-disabled": dataAttr(originalProps.isDisabled),
        ...mergeProps(
          originalProps.isPressable ? { ...buttonProps, ...focusProps, role: "button" } : {},
          originalProps.isHoverable ? hoverProps : {},
          filterDOMProps(otherProps, {
            enabled: shouldFilterDOMProps
          }),
          filterDOMProps(props2)
        )
      };
    },
    [
      domRef,
      slots,
      baseStyles,
      shouldFilterDOMProps,
      originalProps.isPressable,
      originalProps.isHoverable,
      originalProps.isDisabled,
      isHovered,
      isPressed,
      isFocusVisible,
      buttonProps,
      focusProps,
      hoverProps,
      otherProps
    ]
  );
  const getRippleProps = (0, import_react26.useCallback)(
    () => ({ ripples, onClear: onClearRipple }),
    [ripples, onClearRipple]
  );
  return {
    context,
    domRef,
    Component,
    classNames,
    children,
    isHovered,
    isPressed,
    disableAnimation,
    isPressable: originalProps.isPressable,
    isHoverable: originalProps.isHoverable,
    disableRipple,
    handlePress,
    isFocusVisible,
    getCardProps,
    getRippleProps
  };
}

// node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs
var import_jsx_runtime5 = require("react/jsx-runtime");
var Card = forwardRef((props, ref) => {
  const {
    children,
    context,
    Component,
    isPressable,
    disableAnimation,
    disableRipple,
    getCardProps,
    getRippleProps
  } = useCard({ ...props, ref });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Component, { ...getCardProps(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CardProvider, { value: context, children }),
    isPressable && !disableAnimation && !disableRipple && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ripple_default, { ...getRippleProps() })
  ] });
});
Card.displayName = "HeroUI.Card";
var card_default = Card;

// node_modules/@heroui/button/dist/chunk-3SAWKTTV.mjs
var [ButtonGroupProvider, useButtonGroupContext] = createContext2({
  name: "ButtonGroupContext",
  strict: false
});

// node_modules/@heroui/button/dist/chunk-REKYGLAJ.mjs
var import_react27 = require("react");
var import_react28 = require("react");
function useButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const groupContext = useButtonGroupContext();
  const globalContext = useProviderContext();
  const isInGroup = !!groupContext;
  const {
    ref,
    as,
    children,
    startContent: startContentProp,
    endContent: endContentProp,
    autoFocus,
    className,
    spinner: spinner2,
    isLoading = false,
    disableRipple: disableRippleProp = false,
    fullWidth = (_a = groupContext == null ? void 0 : groupContext.fullWidth) != null ? _a : false,
    radius = groupContext == null ? void 0 : groupContext.radius,
    size = (_b = groupContext == null ? void 0 : groupContext.size) != null ? _b : "md",
    color = (_c = groupContext == null ? void 0 : groupContext.color) != null ? _c : "default",
    variant = (_d = groupContext == null ? void 0 : groupContext.variant) != null ? _d : "solid",
    disableAnimation = (_f = (_e = groupContext == null ? void 0 : groupContext.disableAnimation) != null ? _e : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _f : false,
    isDisabled: isDisabledProp = (_g = groupContext == null ? void 0 : groupContext.isDisabled) != null ? _g : false,
    isIconOnly = (_h = groupContext == null ? void 0 : groupContext.isIconOnly) != null ? _h : false,
    spinnerPlacement = "start",
    onPress,
    onClick,
    ...otherProps
  } = props;
  const Component = as || "button";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const disableRipple = (_i = disableRippleProp || (globalContext == null ? void 0 : globalContext.disableRipple)) != null ? _i : disableAnimation;
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus
  });
  const isDisabled = isDisabledProp || isLoading;
  const styles = (0, import_react28.useMemo)(
    () => button({
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      disableAnimation,
      isIconOnly,
      className
    }),
    [
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      isIconOnly,
      disableAnimation,
      className
    ]
  );
  const { onPress: onRipplePressHandler, onClear: onClearRipple, ripples } = useRipple();
  const handlePress = (0, import_react27.useCallback)(
    (e) => {
      if (disableRipple || isDisabled || disableAnimation) return;
      domRef.current && onRipplePressHandler(e);
    },
    [disableRipple, isDisabled, disableAnimation, domRef, onRipplePressHandler]
  );
  const { buttonProps: ariaButtonProps, isPressed } = useAriaButton(
    {
      elementType: as,
      isDisabled,
      onPress: chain(onPress, handlePress),
      onClick,
      ...otherProps
    },
    domRef
  );
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  const getButtonProps = (0, import_react27.useCallback)(
    (props2 = {}) => ({
      "data-disabled": dataAttr(isDisabled),
      "data-focus": dataAttr(isFocused),
      "data-pressed": dataAttr(isPressed),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-loading": dataAttr(isLoading),
      ...mergeProps(
        ariaButtonProps,
        focusProps,
        hoverProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        filterDOMProps(props2)
      ),
      className: styles
    }),
    [
      isLoading,
      isDisabled,
      isFocused,
      isPressed,
      shouldFilterDOMProps,
      isFocusVisible,
      isHovered,
      ariaButtonProps,
      focusProps,
      hoverProps,
      otherProps,
      styles
    ]
  );
  const getIconClone = (icon) => (0, import_react28.isValidElement)(icon) ? (0, import_react28.cloneElement)(icon, {
    // @ts-ignore
    "aria-hidden": true,
    focusable: false
  }) : null;
  const startContent = getIconClone(startContentProp);
  const endContent = getIconClone(endContentProp);
  const spinnerSize = (0, import_react28.useMemo)(() => {
    const buttonSpinnerSizeMap = {
      sm: "sm",
      md: "sm",
      lg: "md"
    };
    return buttonSpinnerSizeMap[size];
  }, [size]);
  const getRippleProps = (0, import_react27.useCallback)(
    () => ({ ripples, onClear: onClearRipple }),
    [ripples, onClearRipple]
  );
  return {
    Component,
    children,
    domRef,
    spinner: spinner2,
    styles,
    startContent,
    endContent,
    isLoading,
    spinnerPlacement,
    spinnerSize,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly
  };
}

// node_modules/@heroui/spinner/dist/chunk-IKKYW34A.mjs
var import_react29 = require("react");
function useSpinner(originalProps) {
  var _a, _b;
  const [props, variantProps] = mapPropsVariants(originalProps, spinner.variantKeys);
  const globalContext = useProviderContext();
  const variant = (_b = (_a = originalProps == null ? void 0 : originalProps.variant) != null ? _a : globalContext == null ? void 0 : globalContext.spinnerVariant) != null ? _b : "default";
  const { children, className, classNames, label: labelProp, ...otherProps } = props;
  const slots = (0, import_react29.useMemo)(() => spinner({ ...variantProps }), [objectToDeps(variantProps)]);
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const label = labelProp || children;
  const ariaLabel = (0, import_react29.useMemo)(() => {
    if (label && typeof label === "string") {
      return label;
    }
    return !otherProps["aria-label"] ? "Loading" : "";
  }, [children, label, otherProps["aria-label"]]);
  const getSpinnerProps = (0, import_react29.useCallback)(
    () => ({
      "aria-label": ariaLabel,
      className: slots.base({
        class: baseStyles
      }),
      ...otherProps
    }),
    [ariaLabel, slots, baseStyles, otherProps]
  );
  return { label, slots, classNames, variant, getSpinnerProps };
}

// node_modules/@heroui/spinner/dist/chunk-MSDKUXDP.mjs
var import_jsx_runtime6 = require("react/jsx-runtime");
var Spinner = forwardRef((props, ref) => {
  const { slots, classNames, label, variant, getSpinnerProps } = useSpinner({ ...props });
  if (variant === "wave" || variant === "dots") {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { ref, ...getSpinnerProps(), children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }), children: [...new Array(3)].map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "i",
        {
          className: slots.dots({ class: classNames == null ? void 0 : classNames.dots }),
          style: {
            "--dot-index": index
          }
        },
        `dot-${index}`
      )) }),
      label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: slots.label({ class: classNames == null ? void 0 : classNames.label }), children: label })
    ] });
  }
  if (variant === "simple") {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { ref, ...getSpinnerProps(), children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "svg",
        {
          className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }),
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "circle",
              {
                className: slots.circle1({ class: classNames == null ? void 0 : classNames.circle1 }),
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "path",
              {
                className: slots.circle2({ class: classNames == null ? void 0 : classNames.circle2 }),
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                fill: "currentColor"
              }
            )
          ]
        }
      ),
      label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: slots.label({ class: classNames == null ? void 0 : classNames.label }), children: label })
    ] });
  }
  if (variant === "spinner") {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { ref, ...getSpinnerProps(), children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }), children: [...new Array(12)].map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "i",
        {
          className: slots.spinnerBars({ class: classNames == null ? void 0 : classNames.spinnerBars }),
          style: {
            "--bar-index": index
          }
        },
        `star-${index}`
      )) }),
      label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: slots.label({ class: classNames == null ? void 0 : classNames.label }), children: label })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { ref, ...getSpinnerProps(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }), children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: slots.circle1({ class: classNames == null ? void 0 : classNames.circle1 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("i", { className: slots.circle2({ class: classNames == null ? void 0 : classNames.circle2 }) })
    ] }),
    label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: slots.label({ class: classNames == null ? void 0 : classNames.label }), children: label })
  ] });
});
Spinner.displayName = "HeroUI.Spinner";
var spinner_default = Spinner;

// node_modules/@heroui/button/dist/chunk-WBUKVQRU.mjs
var import_jsx_runtime7 = require("react/jsx-runtime");
var Button = forwardRef((props, ref) => {
  const {
    Component,
    domRef,
    children,
    spinnerSize,
    spinner: spinner2 = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(spinner_default, { color: "current", size: spinnerSize }),
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly
  } = useButton({ ...props, ref });
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Component, { ref: domRef, ...getButtonProps(), children: [
    startContent,
    isLoading && spinnerPlacement === "start" && spinner2,
    isLoading && isIconOnly ? null : children,
    isLoading && spinnerPlacement === "end" && spinner2,
    endContent,
    !disableRipple && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ripple_default, { ...getRippleProps() })
  ] });
});
Button.displayName = "HeroUI.Button";
var button_default = Button;

// node_modules/@heroui/chip/dist/chunk-N45CR57R.mjs
var import_react30 = require("react");
function useChip(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, chip.variantKeys);
  const {
    ref,
    as,
    children,
    avatar: avatar2,
    startContent,
    endContent,
    onClose,
    classNames,
    className,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const isCloseable = !!onClose;
  const isDotVariant = originalProps.variant === "dot";
  const { focusProps: closeFocusProps, isFocusVisible: isCloseButtonFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const isOneChar = (0, import_react30.useMemo)(
    () => typeof children === "string" && (children == null ? void 0 : children.length) === 1,
    [children]
  );
  const hasStartContent = (0, import_react30.useMemo)(() => !!avatar2 || !!startContent, [avatar2, startContent]);
  const hasEndContent = (0, import_react30.useMemo)(() => !!endContent || isCloseable, [endContent, isCloseable]);
  const slots = (0, import_react30.useMemo)(
    () => chip({
      ...variantProps,
      hasStartContent,
      hasEndContent,
      isOneChar,
      isCloseable,
      isCloseButtonFocusVisible
    }),
    [
      objectToDeps(variantProps),
      isCloseButtonFocusVisible,
      hasStartContent,
      hasEndContent,
      isOneChar,
      isCloseable
    ]
  );
  const { pressProps: closePressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled),
    onPress: onClose
  });
  const getChipProps = () => {
    return {
      ref: domRef,
      className: slots.base({ class: baseStyles }),
      ...otherProps
    };
  };
  const getCloseButtonProps = () => {
    return {
      role: "button",
      tabIndex: 0,
      className: slots.closeButton({ class: classNames == null ? void 0 : classNames.closeButton }),
      "aria-label": "close chip",
      ...mergeProps(closePressProps, closeFocusProps)
    };
  };
  const getAvatarClone = (avatar22) => {
    if (!(0, import_react30.isValidElement)(avatar22)) return null;
    return (0, import_react30.cloneElement)(avatar22, {
      // @ts-ignore
      className: slots.avatar({ class: classNames == null ? void 0 : classNames.avatar })
    });
  };
  const getContentClone = (content) => (0, import_react30.isValidElement)(content) ? (0, import_react30.cloneElement)(content, {
    // @ts-ignore
    className: clsx("max-h-[80%]", content.props.className)
  }) : null;
  return {
    Component,
    children,
    slots,
    classNames,
    isDot: isDotVariant,
    isCloseable,
    startContent: getAvatarClone(avatar2) || getContentClone(startContent),
    endContent: getContentClone(endContent),
    getCloseButtonProps,
    getChipProps
  };
}

// node_modules/@heroui/shared-icons/dist/chunk-M3MASYO7.mjs
var import_jsx_runtime8 = require("react/jsx-runtime");
var CloseFilledIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "svg",
  {
    "aria-hidden": "true",
    focusable: "false",
    height: "1em",
    role: "presentation",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "path",
      {
        d: "M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",
        fill: "currentColor"
      }
    )
  }
);

// node_modules/@heroui/chip/dist/chunk-IHOGUXIG.mjs
var import_react31 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var Chip = forwardRef((props, ref) => {
  const {
    Component,
    children,
    slots,
    classNames,
    isDot,
    isCloseable,
    startContent,
    endContent,
    getCloseButtonProps,
    getChipProps
  } = useChip({
    ...props,
    ref
  });
  const start = (0, import_react31.useMemo)(() => {
    if (isDot && !startContent) {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: slots.dot({ class: classNames == null ? void 0 : classNames.dot }) });
    }
    return startContent;
  }, [slots, startContent, isDot]);
  const end = (0, import_react31.useMemo)(() => {
    if (isCloseable) {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { ...getCloseButtonProps(), children: endContent || /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CloseFilledIcon, {}) });
    }
    return endContent;
  }, [endContent, isCloseable, getCloseButtonProps]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Component, { ...getChipProps(), children: [
    start,
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: slots.content({ class: classNames == null ? void 0 : classNames.content }), children }),
    end
  ] });
});
Chip.displayName = "HeroUI.Chip";
var chip_default = Chip;

// src/landing-page-viewer.tsx
var import_react50 = require("@iconify/react");
var import_framer_motion12 = require("framer-motion");

// src/modern-audio-player.tsx
var import_react32 = require("react");
var import_react33 = require("@iconify/react");
var import_framer_motion3 = require("framer-motion");
var import_wavesurfer = __toESM(require("wavesurfer.js"));
var import_jsx_runtime10 = require("react/jsx-runtime");
function ModernAudioPlayer({ src, theme = "dark" }) {
  const [isPlaying, setIsPlaying] = (0, import_react32.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react32.useState)(true);
  const [duration, setDuration] = (0, import_react32.useState)(0);
  const [currentTime, setCurrentTime] = (0, import_react32.useState)(0);
  const waveformRef = (0, import_react32.useRef)(null);
  const wavesurferRef = (0, import_react32.useRef)(null);
  const isDestroyedRef = (0, import_react32.useRef)(false);
  const isLightMode = theme === "light";
  (0, import_react32.useEffect)(() => {
    if (!waveformRef.current) return;
    isDestroyedRef.current = false;
    const wavesurfer = import_wavesurfer.default.create({
      container: waveformRef.current,
      // Use brand pink as the primary accent color
      waveColor: isLightMode ? "rgba(236, 72, 153, 0.15)" : "rgba(236, 72, 153, 0.2)",
      progressColor: "rgb(236, 72, 153)",
      cursorColor: "transparent",
      barWidth: 2,
      barGap: 2,
      barRadius: 2,
      height: 32,
      normalize: true,
      backend: "WebAudio"
    });
    wavesurferRef.current = wavesurfer;
    wavesurfer.load(src);
    wavesurfer.on("ready", () => {
      if (!isDestroyedRef.current) {
        setIsLoading(false);
        setDuration(wavesurfer.getDuration());
      }
    });
    wavesurfer.on("audioprocess", () => {
      if (!isDestroyedRef.current) {
        setCurrentTime(wavesurfer.getCurrentTime());
      }
    });
    wavesurfer.on("finish", () => {
      if (!isDestroyedRef.current) {
        setIsPlaying(false);
      }
    });
    wavesurfer.on("error", () => {
      if (!isDestroyedRef.current) {
        setIsLoading(false);
      }
    });
    return () => {
      isDestroyedRef.current = true;
      if (wavesurfer) {
        wavesurfer.unAll();
        setTimeout(() => {
          try {
            wavesurfer.destroy();
          } catch (e) {
          }
        }, 0);
      }
    };
  }, [src, isLightMode]);
  const togglePlay = () => {
    if (!wavesurferRef.current) return;
    if (isPlaying) {
      wavesurferRef.current.pause();
    } else {
      wavesurferRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      className: "flex items-center gap-3 p-3 rounded-2xl backdrop-blur-sm",
      style: {
        backgroundColor: isLightMode ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          import_framer_motion3.motion.button,
          {
            whileTap: { scale: 0.95 },
            onClick: togglePlay,
            disabled: isLoading,
            className: "flex-shrink-0 w-10 h-10 rounded-full bg-[#ec4899] flex items-center justify-center hover:bg-[#db2777] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              import_react33.Icon,
              {
                icon: isPlaying ? "solar:pause-bold" : "solar:play-bold",
                width: 20,
                className: "text-white",
                style: { marginLeft: isPlaying ? 0 : 2 }
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex-1 flex items-center gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "div",
            {
              ref: waveformRef,
              className: "flex-1 cursor-pointer",
              style: { minHeight: "32px" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "span",
            {
              className: "text-xs font-medium tabular-nums min-w-[35px]",
              style: { color: isLightMode ? "#64748b" : "#94a3b8" },
              children: formatTime(isPlaying ? currentTime : duration)
            }
          )
        ] })
      ]
    }
  );
}

// src/ctr-mechanisms/cta-card-with-mechanisms.tsx
var import_react46 = require("react");
var import_react47 = require("@iconify/react");

// src/ctr-mechanisms/click-to-reveal.tsx
var import_react36 = require("react");

// node_modules/@heroui/use-is-mounted/dist/index.mjs
var import_react34 = require("react");
function useIsMounted(props = {}) {
  const { rerender = false, delay = 0 } = props;
  const isMountedRef = (0, import_react34.useRef)(false);
  const [isMounted, setIsMounted] = (0, import_react34.useState)(false);
  (0, import_react34.useEffect)(() => {
    isMountedRef.current = true;
    let timer = null;
    if (rerender) {
      if (delay > 0) {
        timer = setTimeout(() => {
          setIsMounted(true);
        }, delay);
      } else {
        setIsMounted(true);
      }
    }
    return () => {
      isMountedRef.current = false;
      if (rerender) {
        setIsMounted(false);
      }
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [rerender]);
  return [(0, import_react34.useCallback)(() => isMountedRef.current, []), isMounted];
}

// node_modules/@react-aria/label/dist/useLabel.mjs
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
  let { id, label, "aria-labelledby": ariaLabelledby, "aria-label": ariaLabel, labelElementType = "label" } = props;
  id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
  let labelId = (0, $bdb11010cef70236$export$f680877a34711e37)();
  let labelProps = {};
  if (label) {
    ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
    labelProps = {
      id: labelId,
      htmlFor: labelElementType === "label" ? id : void 0
    };
  } else if (!ariaLabelledby && !ariaLabel && process.env.NODE_ENV !== "production") console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
  let fieldProps = (0, $313b98861ee5dd6c$export$d6875122194c7b44)({
    id,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby
  });
  return {
    labelProps,
    fieldProps
  };
}

// node_modules/@react-aria/progress/dist/useProgressBar.mjs
function $204d9ebcedfb8806$export$ed5abd763a836edc(props) {
  let { value = 0, minValue = 0, maxValue = 100, valueLabel, isIndeterminate, formatOptions = {
    style: "percent"
  } } = props;
  let domProps = (0, $65484d02dcb7eb3e$export$457c3d6518dd4c6f)(props, {
    labelable: true
  });
  let { labelProps, fieldProps } = (0, $d191a55c9702f145$export$8467354a121f1b9f)({
    ...props,
    // Progress bar is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  value = (0, $9446cca9a3875146$export$7d15b64cf5a3a4c4)(value, minValue, maxValue);
  let percentage = (value - minValue) / (maxValue - minValue);
  let formatter = (0, $a916eb452884faea$export$b7a616150fdb9f44)(formatOptions);
  if (!isIndeterminate && !valueLabel) {
    let valueToFormat = formatOptions.style === "percent" ? percentage : value;
    valueLabel = formatter.format(valueToFormat);
  }
  return {
    progressBarProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, {
      ...fieldProps,
      "aria-valuenow": isIndeterminate ? void 0 : value,
      "aria-valuemin": minValue,
      "aria-valuemax": maxValue,
      "aria-valuetext": isIndeterminate ? void 0 : valueLabel,
      role: "progressbar"
    }),
    labelProps
  };
}

// node_modules/@heroui/progress/dist/chunk-Z2ODYSHN.mjs
var import_react35 = require("react");
function useProgress(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, progress.variantKeys);
  const {
    ref,
    as,
    id,
    className,
    classNames,
    label,
    valueLabel,
    value = 0,
    minValue = 0,
    maxValue = 100,
    showValueLabel = false,
    formatOptions = {
      style: "percent"
    },
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const [, isMounted] = useIsMounted({
    rerender: true,
    delay: 100
  });
  const isIndeterminate = originalProps.isIndeterminate;
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const { progressBarProps, labelProps } = $204d9ebcedfb8806$export$ed5abd763a836edc({
    id,
    label,
    value,
    minValue,
    maxValue,
    valueLabel,
    formatOptions,
    isIndeterminate,
    "aria-labelledby": originalProps["aria-labelledby"],
    "aria-label": originalProps["aria-label"]
  });
  const slots = (0, import_react35.useMemo)(
    () => progress({
      ...variantProps,
      disableAnimation
    }),
    [objectToDeps(variantProps), disableAnimation]
  );
  const selfMounted = disableAnimation ? true : isMounted;
  const percentage = (0, import_react35.useMemo)(
    () => isIndeterminate || !selfMounted ? void 0 : clampPercentage((value - minValue) / (maxValue - minValue) * 100),
    [selfMounted, isIndeterminate, value, minValue, maxValue]
  );
  const getProgressBarProps = (0, import_react35.useCallback)(
    (props2 = {}) => ({
      ref: domRef,
      "data-indeterminate": dataAttr(isIndeterminate),
      "data-disabled": dataAttr(originalProps.isDisabled),
      className: slots.base({ class: baseStyles }),
      ...mergeProps(progressBarProps, otherProps, props2)
    }),
    [
      domRef,
      slots,
      isIndeterminate,
      originalProps.isDisabled,
      baseStyles,
      progressBarProps,
      otherProps
    ]
  );
  const getLabelProps = (0, import_react35.useCallback)(
    (props2 = {}) => ({
      className: slots.label({ class: classNames == null ? void 0 : classNames.label }),
      ...mergeProps(labelProps, props2)
    }),
    [slots, classNames, labelProps]
  );
  return {
    Component,
    domRef,
    slots,
    classNames,
    label,
    percentage,
    showValueLabel,
    getProgressBarProps,
    getLabelProps
  };
}

// node_modules/@heroui/progress/dist/chunk-XVMALT6H.mjs
var import_jsx_runtime11 = require("react/jsx-runtime");
var Progress = forwardRef((props, ref) => {
  const {
    Component,
    slots,
    classNames,
    label,
    percentage,
    showValueLabel,
    getProgressBarProps,
    getLabelProps
  } = useProgress({ ...props, ref });
  const progressBarProps = getProgressBarProps();
  const shouldShowLabelWrapper = label || showValueLabel;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Component, { ...progressBarProps, children: [
    shouldShowLabelWrapper ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: slots.labelWrapper({ class: classNames == null ? void 0 : classNames.labelWrapper }), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { ...getLabelProps(), children: label }),
      showValueLabel && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: slots.value({ class: classNames == null ? void 0 : classNames.value }), children: progressBarProps["aria-valuetext"] })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: slots.track({ class: classNames == null ? void 0 : classNames.track }), children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "div",
      {
        className: slots.indicator({ class: classNames == null ? void 0 : classNames.indicator }),
        style: {
          transform: `translateX(-${100 - (percentage || 0)}%)`
        }
      }
    ) })
  ] });
});
Progress.displayName = "HeroUI.Progress";
var progress_default = Progress;

// src/ctr-mechanisms/click-to-reveal.tsx
var import_framer_motion4 = require("framer-motion");
var import_react37 = require("@iconify/react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function ClickToReveal({
  clicksRequired,
  buttonText,
  onReveal,
  children
}) {
  const [clickCount, setClickCount] = (0, import_react36.useState)(0);
  const [isRevealed, setIsRevealed] = (0, import_react36.useState)(false);
  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= clicksRequired) {
      setIsRevealed(true);
      onReveal();
    }
  };
  const progress2 = clickCount / clicksRequired * 100;
  if (isRevealed) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "absolute inset-0 backdrop-blur-md bg-black/60 z-[5] flex flex-col items-center justify-center px-4 py-4 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      import_framer_motion4.motion.div,
      {
        animate: clickCount > 0 ? { scale: [1, 1.1, 1] } : {},
        transition: { duration: 0.3 },
        className: "text-center space-y-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            import_react37.Icon,
            {
              icon: "solar:click-bold-duotone",
              width: 40,
              className: "text-white mx-auto drop-shadow-lg"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-white font-semibold text-base drop-shadow-md", children: buttonText }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-white/80 text-xs drop-shadow-sm", children: [
              clicksRequired - clickCount,
              " more ",
              clicksRequired - clickCount === 1 ? "tap" : "taps",
              " to unlock"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
            button_default,
            {
              size: "md",
              onPress: handleClick,
              className: "font-bold shadow-lg bg-[#ec4899] hover:bg-[#db2777] text-white",
              children: [
                "Tap to Unlock (",
                clickCount,
                "/",
                clicksRequired,
                ")"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            progress_default,
            {
              value: progress2,
              className: "max-w-[200px]",
              color: "primary",
              classNames: {
                indicator: "bg-[#ec4899]"
              },
              size: "sm"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "opacity-30 pointer-events-none", children })
  ] });
}

// src/ctr-mechanisms/countdown-reveal.tsx
var import_react38 = require("react");
var import_framer_motion5 = require("framer-motion");
var import_react39 = require("@iconify/react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function CountdownReveal({
  durationSeconds,
  message,
  onReveal,
  children
}) {
  const [secondsLeft, setSecondsLeft] = (0, import_react38.useState)(durationSeconds);
  const [isRevealed, setIsRevealed] = (0, import_react38.useState)(false);
  (0, import_react38.useEffect)(() => {
    if (secondsLeft <= 0) {
      setIsRevealed(true);
      onReveal();
      return;
    }
    const timer = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1e3);
    return () => clearTimeout(timer);
  }, [secondsLeft]);
  if (isRevealed) {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "relative overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "absolute inset-0 backdrop-blur-md bg-black/60 z-[5] flex flex-col items-center justify-center px-4 py-3 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      import_framer_motion5.motion.div,
      {
        animate: { scale: [1, 1.05, 1] },
        transition: { duration: 1, repeat: Infinity },
        className: "text-center space-y-1.5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_react39.Icon,
            {
              icon: "solar:clock-circle-bold-duotone",
              width: 36,
              className: "text-white mx-auto drop-shadow-lg"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-white font-semibold text-sm drop-shadow-md", children: message }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              import_framer_motion5.motion.div,
              {
                initial: { scale: 1.2, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                className: "text-3xl font-bold text-white drop-shadow-lg",
                children: secondsLeft
              },
              secondsLeft
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-white/80 text-xs drop-shadow-sm", children: "seconds remaining..." })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "opacity-30 pointer-events-none", children })
  ] });
}

// src/ctr-mechanisms/scarcity-badge.tsx
var import_react40 = require("@iconify/react");
var import_framer_motion6 = require("framer-motion");
var import_jsx_runtime14 = require("react/jsx-runtime");
function ScarcityBadge({
  type,
  count,
  total,
  message
}) {
  const isSlots = type === "slots";
  const getDisplayMessage = () => {
    if (message) {
      return message.replace("{current}", String(count)).replace("{total}", String(total || 0));
    }
    return isSlots ? `Only ${count}/${total} left!` : `${count} watching now`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, { children: isSlots ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    import_framer_motion6.motion.div,
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      className: "absolute top-2 left-2 z-[10]",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        chip_default,
        {
          color: "danger",
          variant: "solid",
          size: "sm",
          className: "font-semibold",
          startContent: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react40.Icon, { icon: "solar:fire-bold", width: 14 }),
          children: getDisplayMessage()
        }
      )
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    import_framer_motion6.motion.div,
    {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      className: "absolute top-2 right-2 z-[10]",
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        chip_default,
        {
          color: "success",
          variant: "solid",
          size: "sm",
          className: "font-semibold",
          startContent: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            import_framer_motion6.motion.span,
            {
              animate: { opacity: [1, 0.3, 1] },
              transition: { duration: 2, repeat: Infinity },
              className: "inline-block w-2 h-2 rounded-full bg-white mr-1"
            }
          ) }),
          children: getDisplayMessage()
        }
      )
    }
  ) });
}

// src/ctr-mechanisms/blur-overlay.tsx
var import_react41 = require("react");
var import_framer_motion7 = require("framer-motion");
var import_react42 = require("@iconify/react");
var import_jsx_runtime15 = require("react/jsx-runtime");
function BlurOverlay({
  blurAmount,
  teaserText,
  onReveal,
  children
}) {
  const [isRevealed, setIsRevealed] = (0, import_react41.useState)(false);
  const handleReveal = () => {
    setIsRevealed(true);
    onReveal();
  };
  if (isRevealed) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "relative overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        style: { filter: `blur(${blurAmount}px)` },
        className: "pointer-events-none select-none",
        "aria-hidden": "true",
        children
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-[5] flex flex-col items-center justify-center px-4 py-3 rounded-xl cursor-default",
        onClick: (e) => e.stopPropagation(),
        onPointerDown: (e) => e.stopPropagation(),
        onPointerUp: (e) => e.stopPropagation(),
        onTouchStart: (e) => e.stopPropagation(),
        onTouchEnd: (e) => e.stopPropagation(),
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          import_framer_motion7.motion.div,
          {
            initial: { y: 20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            className: "text-center space-y-1.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                import_react42.Icon,
                {
                  icon: "solar:eye-bold-duotone",
                  width: 36,
                  className: "text-white mx-auto drop-shadow-lg"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-0.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-white font-semibold text-sm drop-shadow-md", children: teaserText }),
                /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-white/80 text-xs drop-shadow-sm", children: "Click below to reveal" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                button_default,
                {
                  size: "sm",
                  onPress: handleReveal,
                  className: "font-bold shadow-lg bg-[#ec4899] hover:bg-[#db2777] text-white",
                  startContent: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_react42.Icon, { icon: "solar:eye-linear", width: 16 }),
                  children: "Reveal Now"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}

// src/ctr-mechanisms/progress-bar-reveal.tsx
var import_react43 = require("react");
var import_framer_motion8 = require("framer-motion");
var import_react44 = require("@iconify/react");
var import_jsx_runtime16 = require("react/jsx-runtime");
function ProgressBarReveal({
  durationSeconds,
  message,
  onReveal,
  children
}) {
  const [progress2, setProgress] = (0, import_react43.useState)(0);
  const [isRevealed, setIsRevealed] = (0, import_react43.useState)(false);
  (0, import_react43.useEffect)(() => {
    const interval = 50;
    const totalSteps = durationSeconds * 1e3 / interval;
    const incrementPerStep = 100 / totalSteps;
    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += incrementPerStep;
      if (currentProgress >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsRevealed(true);
          onReveal();
        }, 300);
      } else {
        setProgress(currentProgress);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [durationSeconds]);
  if (isRevealed) {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_jsx_runtime16.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "relative overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "absolute inset-0 backdrop-blur-md bg-black/60 z-[5] flex flex-col items-center justify-center px-4 py-4 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_framer_motion8.motion.div, { className: "text-center space-y-2 w-full max-w-[250px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        import_react44.Icon,
        {
          icon: "solar:hourglass-bold-duotone",
          width: 40,
          className: "text-white mx-auto drop-shadow-lg"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-white font-semibold text-base drop-shadow-md", children: message }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          progress_default,
          {
            value: progress2,
            className: "w-full",
            color: "primary",
            classNames: {
              indicator: "bg-[#ec4899]"
            },
            size: "md"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("p", { className: "text-white/80 text-xs drop-shadow-sm", children: [
          Math.round(progress2),
          "% loaded..."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "opacity-30 pointer-events-none", children })
  ] });
}

// src/ctr-mechanisms/confetti-effect.tsx
var import_react45 = require("react");
var import_framer_motion9 = require("framer-motion");
var import_jsx_runtime17 = require("react/jsx-runtime");
function ConfettiEffect({ trigger, duration = 3e3 }) {
  const [particles, setParticles] = (0, import_react45.useState)([]);
  (0, import_react45.useEffect)(() => {
    if (!trigger) return;
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F"];
    const newParticles = Array.from({ length: 30 }, (_, i2) => ({
      id: i2,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(newParticles);
    const timer = setTimeout(() => {
      setParticles([]);
    }, duration);
    return () => clearTimeout(timer);
  }, [trigger, duration]);
  if (particles.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "fixed inset-0 pointer-events-none z-50 overflow-hidden", children: particles.map((particle) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_framer_motion9.motion.div,
    {
      initial: {
        top: -20,
        left: `${particle.x}%`,
        opacity: 1,
        scale: 1
      },
      animate: {
        top: "110%",
        opacity: 0,
        scale: 0,
        rotate: Math.random() * 720 - 360
      },
      transition: {
        duration: 2 + Math.random() * 2,
        ease: "easeOut"
      },
      className: "absolute w-3 h-3 rounded-full",
      style: { backgroundColor: particle.color }
    },
    particle.id
  )) });
}

// src/ctr-mechanisms/cta-card-with-mechanisms.tsx
var import_framer_motion10 = require("framer-motion");
var import_jsx_runtime18 = require("react/jsx-runtime");
function CTACardWithMechanisms({
  card: card2,
  onReveal,
  children
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
  const [isRevealed, setIsRevealed] = (0, import_react46.useState)(false);
  const [showConfetti, setShowConfetti] = (0, import_react46.useState)(false);
  const mechanisms = card2.ctr_mechanisms;
  const handleReveal = () => {
    var _a2;
    if ((_a2 = mechanisms == null ? void 0 : mechanisms.visual_effects) == null ? void 0 : _a2.confetti_on_reveal) {
      setShowConfetti(true);
    }
    setIsRevealed(true);
    onReveal();
  };
  let content = children;
  if (((_a = mechanisms == null ? void 0 : mechanisms.visual_effects) == null ? void 0 : _a.pulse_animation) || ((_b = mechanisms == null ? void 0 : mechanisms.visual_effects) == null ? void 0 : _b.glow_effect)) {
    const className = `
      ${mechanisms.visual_effects.pulse_animation ? "animate-pulse" : ""}
      ${mechanisms.visual_effects.glow_effect ? "shadow-lg shadow-[rgba(236,72,153,0.5)]" : ""}
    `.trim();
    content = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      import_framer_motion10.motion.div,
      {
        animate: mechanisms.visual_effects.pulse_animation ? { scale: [1, 1.02, 1] } : {},
        transition: { duration: 2, repeat: Infinity },
        className,
        children: content
      }
    );
  }
  if (((_c = mechanisms == null ? void 0 : mechanisms.click_to_reveal) == null ? void 0 : _c.enabled) && !isRevealed) {
    content = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      ClickToReveal,
      {
        clicksRequired: mechanisms.click_to_reveal.clicks_required,
        buttonText: mechanisms.click_to_reveal.button_text,
        onReveal: handleReveal,
        children: content
      }
    );
  } else if (((_d = mechanisms == null ? void 0 : mechanisms.progress_bar) == null ? void 0 : _d.enabled) && !isRevealed) {
    content = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      ProgressBarReveal,
      {
        durationSeconds: mechanisms.progress_bar.duration_seconds,
        message: mechanisms.progress_bar.message,
        onReveal: handleReveal,
        children: content
      }
    );
  } else if (((_e = mechanisms == null ? void 0 : mechanisms.countdown_timer) == null ? void 0 : _e.enabled) && !isRevealed) {
    content = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      CountdownReveal,
      {
        durationSeconds: mechanisms.countdown_timer.duration_seconds,
        message: mechanisms.countdown_timer.message,
        onReveal: handleReveal,
        children: content
      }
    );
  } else if (((_f = mechanisms == null ? void 0 : mechanisms.blur_preview) == null ? void 0 : _f.enabled) && !isRevealed) {
    content = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      BlurOverlay,
      {
        blurAmount: mechanisms.blur_preview.blur_amount,
        teaserText: mechanisms.blur_preview.teaser_text,
        onReveal: handleReveal,
        children: content
      }
    );
  }
  const blockingActive = !isRevealed && (((_g = mechanisms == null ? void 0 : mechanisms.click_to_reveal) == null ? void 0 : _g.enabled) || ((_h = mechanisms == null ? void 0 : mechanisms.progress_bar) == null ? void 0 : _h.enabled) || ((_i = mechanisms == null ? void 0 : mechanisms.countdown_timer) == null ? void 0 : _i.enabled));
  const showBadges = !blockingActive;
  const hasMultipleBadges = showBadges && [
    (_j = mechanisms == null ? void 0 : mechanisms.limited_slots) == null ? void 0 : _j.enabled,
    (_k = mechanisms == null ? void 0 : mechanisms.live_viewers) == null ? void 0 : _k.enabled,
    (_l = mechanisms == null ? void 0 : mechanisms.exclusive_badge) == null ? void 0 : _l.enabled
  ].filter(Boolean).length > 1;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "relative overflow-hidden rounded-xl", children: [
    showBadges && ((_m = mechanisms == null ? void 0 : mechanisms.limited_slots) == null ? void 0 : _m.enabled) && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      ScarcityBadge,
      {
        type: "slots",
        count: mechanisms.limited_slots.current,
        total: mechanisms.limited_slots.total,
        message: mechanisms.limited_slots.message
      }
    ),
    showBadges && ((_n = mechanisms == null ? void 0 : mechanisms.live_viewers) == null ? void 0 : _n.enabled) && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      ScarcityBadge,
      {
        type: "viewers",
        count: mechanisms.live_viewers.count
      }
    ),
    showBadges && ((_o = mechanisms == null ? void 0 : mechanisms.exclusive_badge) == null ? void 0 : _o.enabled) && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      import_framer_motion10.motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        className: `absolute z-[10] ${hasMultipleBadges ? "bottom-2 left-2" : "top-2 left-2"}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          chip_default,
          {
            color: "secondary",
            variant: "solid",
            size: "sm",
            className: "font-semibold",
            startContent: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react47.Icon, { icon: "solar:crown-bold", width: 14 }),
            children: mechanisms.exclusive_badge.text
          }
        )
      }
    ),
    content,
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ConfettiEffect, { trigger: showConfetti })
  ] });
}

// src/ctr-mechanisms/age-confirmation-modal.tsx
var import_react48 = require("@iconify/react");
var import_framer_motion11 = require("framer-motion");
var import_jsx_runtime19 = require("react/jsx-runtime");
function AgeConfirmationModal({
  isOpen,
  onConfirm,
  onCancel,
  children
}) {
  const handleCancel = () => {
    onCancel();
  };
  if (!isOpen) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "relative overflow-hidden rounded-xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "pointer-events-none opacity-30", children }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 z-[5] flex flex-col items-center justify-center px-4 py-3 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      import_framer_motion11.motion.div,
      {
        initial: { y: 10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        className: "text-center space-y-1.5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            import_react48.Icon,
            {
              icon: "solar:shield-warning-bold-duotone",
              width: 36,
              className: "text-warning mx-auto drop-shadow-lg"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-white font-semibold text-sm drop-shadow-md", children: "Adult Content (18+)" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-white/90 text-xs drop-shadow-sm leading-tight", children: "You must be 18+ to continue" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex gap-2 pt-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              button_default,
              {
                size: "sm",
                onPress: onConfirm,
                className: "font-bold shadow-lg bg-[#ec4899] hover:bg-[#db2777] text-white",
                children: "I'm 18+"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              button_default,
              {
                size: "sm",
                variant: "bordered",
                onPress: handleCancel,
                className: "font-bold shadow-lg bg-white/10 text-white border-white/20",
                children: "Exit"
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}

// src/landing-page-viewer.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function isRedditFlow() {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  return params.has("r");
}
function wrapUrlForNavigation(url, isPreview) {
  if (!url) return "";
  if (!isPreview && isRedditFlow()) {
    return `/reddit-escape?target=${encodeURIComponent(url)}`;
  }
  return url;
}
function trackClick(linkId, isPreview) {
  if (!linkId || isPreview || typeof window === "undefined") return;
  fetch("/api/analytics/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      link_id: linkId,
      event_type: "click"
    })
  }).catch(() => {
  });
}
function LandingPageViewer({
  link,
  settings,
  onButtonClick,
  isPreview = false,
  isFreePlan = false
}) {
  const [showingAgeConfirmationFor, setShowingAgeConfirmationFor] = (0, import_react49.useState)(null);
  const isLightMode = settings.theme_mode === "light";
  const themeColors = {
    background: isLightMode ? "#FFFFFF" : "#18181b",
    textPrimary: isLightMode ? "#18181b" : "#ffffff",
    textSecondary: isLightMode ? "#64748b" : "#94a3b8",
    cardBg: isLightMode ? "#f8fafc" : "#27272a",
    border: isLightMode ? "#e2e8f0" : "#3f3f46"
  };
  const getButtonVariant = () => {
    switch (settings.button_style) {
      case "gradient":
        return "solid";
      case "outline":
        return "bordered";
      case "solid":
        return "solid";
      default:
        return "flat";
    }
  };
  const getButtonClass = () => {
    if (settings.button_style === "gradient") {
      return `bg-gradient-to-r from-${settings.button_color}-400 to-${settings.button_color}-600`;
    }
    return "";
  };
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
    if (isPreview) return;
    if (!link.destination_url) return;
    trackClick(link.id, isPreview);
    const target = wrapUrlForNavigation(link.destination_url, isPreview);
    if (!target) return;
    window.location.href = target;
  };
  const mode = settings.profile_display_mode || "full";
  const isFullMode = mode === "full";
  const isVideoMode = mode === "video";
  const heroHeightClass = (() => {
    if (isVideoMode) return "h-[520px] md:h-[520px]";
    if (isFullMode) return "h-[420px] md:h-[420px]";
    return "h-[320px] md:h-[320px]";
  })();
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "min-h-screen flex items-center justify-center relative overflow-hidden", children: [
    isVideoMode && settings.header_video_url ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "video",
      {
        className: "hidden md:block absolute inset-0 z-0 w-full h-full object-cover",
        src: settings.header_video_url,
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        "aria-hidden": "true",
        style: {
          filter: "blur(80px) brightness(0.4)",
          transform: "scale(1.1)"
        }
      }
    ) : settings.avatar_url ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        className: "hidden md:block absolute inset-0 z-0",
        style: {
          backgroundImage: `url(${settings.avatar_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(80px) brightness(0.4)",
          transform: "scale(1.1)"
        }
      }
    ) : null,
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "div",
      {
        className: "relative z-10 w-full md:max-w-md md:min-h-[812px] md:shadow-2xl md:rounded-2xl overflow-y-auto flex flex-col",
        style: { backgroundColor: themeColors.background },
        children: [
          isFreePlan && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "a",
            {
              href: "https://www.outlink.bio/",
              target: "_blank",
              rel: "noreferrer",
              className: "absolute left-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg",
              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("img", { src: "/logo2.svg", alt: "Outlink", className: "h-5 w-5" })
            }
          ),
          isFullMode || isVideoMode ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_framer_motion12.motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.6 },
              className: `relative w-full ${heroHeightClass}`,
              children: isVideoMode ? (() => {
                if (settings.header_video_url) {
                  const focus = settings.header_video_focus || "center";
                  let focusClass = "object-center";
                  if (focus === "top") focusClass = "object-top";
                  else if (focus === "bottom") focusClass = "object-bottom";
                  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "relative w-full h-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                      "video",
                      {
                        src: settings.header_video_url,
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: `w-full h-full object-cover ${focusClass}`
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                      "div",
                      {
                        className: "absolute inset-x-0 bottom-0 h-48 pointer-events-none",
                        style: {
                          background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${themeColors.background} 100%)`
                        }
                      }
                    )
                  ] });
                }
                return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-full h-full bg-default-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  import_react50.Icon,
                  {
                    icon: "solar:clapperboard-play-bold-duotone",
                    className: "w-16 h-16 text-default-300"
                  }
                ) });
              })() : settings.avatar_url ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "relative w-full h-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  "img",
                  {
                    src: settings.avatar_url,
                    alt: settings.display_name || link.title || "Profile",
                    className: "w-full h-full object-cover object-center"
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  "div",
                  {
                    className: "absolute inset-x-0 bottom-0 h-32 pointer-events-none",
                    style: {
                      background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${themeColors.background} 100%)`
                    }
                  }
                )
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-full h-full bg-default-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                import_react50.Icon,
                {
                  icon: "solar:user-bold-duotone",
                  className: "w-24 h-24 text-default-300"
                }
              ) })
            }
          ) : (
            /* Avatar Mode - Circular Profile Picture */
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-full pt-8" })
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            "div",
            {
              className: "flex-1 flex flex-col items-center px-4 sm:px-6 md:px-8 relative z-10",
              style: { marginTop: isFullMode ? "0" : "0" },
              children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-full max-w-md", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col items-center gap-4", children: [
                (isFullMode || isVideoMode) && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                  import_framer_motion12.motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2, duration: 0.3 },
                    className: "flex flex-col items-center gap-2 mt-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                          "h1",
                          {
                            className: "text-2xl sm:text-3xl font-bold",
                            style: { color: themeColors.textPrimary },
                            children: settings.display_name || link.title || "Profile"
                          }
                        ),
                        settings.verified_badge && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: settings.verified_badge_style === "solid" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                          import_react50.Icon,
                          {
                            icon: "solar:verified-check-bold",
                            width: 24,
                            style: { color: "#ec4899" }
                          }
                        ) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                          chip_default,
                          {
                            size: "sm",
                            variant: "flat",
                            className: "bg-[#ec4899]/10 text-[#ec4899]",
                            startContent: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                              import_react50.Icon,
                              {
                                icon: "solar:verified-check-bold",
                                width: 16,
                                style: { color: "#ec4899" }
                              }
                            ),
                            children: "Verified"
                          }
                        ) })
                      ] }),
                      settings.show_domain_handle && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                        "p",
                        {
                          className: "text-sm",
                          style: { color: themeColors.textSecondary },
                          children: [
                            link.domain,
                            "/",
                            link.path
                          ]
                        }
                      )
                    ]
                  }
                ),
                mode === "avatar" && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  import_framer_motion12.motion.div,
                  {
                    initial: { scale: 0.8 },
                    animate: { scale: 1 },
                    transition: { delay: 0.1, duration: 0.3 },
                    className: "relative",
                    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                      "div",
                      {
                        className: "rounded-full p-1",
                        style: {
                          background: "linear-gradient(135deg, #0EA5E9, #3B82F6, #6366F1)"
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                          avatar_default,
                          {
                            src: settings.avatar_url || void 0,
                            alt: settings.display_name || link.title || "Profile",
                            className: "w-32 h-32 text-large border-4",
                            style: { borderColor: themeColors.background },
                            showFallback: true,
                            fallback: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                              import_react50.Icon,
                              {
                                icon: "solar:user-bold-duotone",
                                className: "w-20 h-20 text-default-500"
                              }
                            )
                          }
                        )
                      }
                    )
                  }
                ),
                mode === "avatar" && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                  import_framer_motion12.motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2, duration: 0.3 },
                    className: "flex flex-col items-center gap-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                          "h1",
                          {
                            className: "text-2xl sm:text-3xl font-bold",
                            style: { color: themeColors.textPrimary },
                            children: settings.display_name || link.title || "Profile"
                          }
                        ),
                        settings.verified_badge && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children: settings.verified_badge_style === "solid" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                          import_react50.Icon,
                          {
                            icon: "solar:verified-check-bold",
                            width: 24,
                            style: { color: "#ec4899" }
                          }
                        ) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                          chip_default,
                          {
                            size: "sm",
                            variant: "flat",
                            className: "bg-[#ec4899]/10 text-[#ec4899]",
                            startContent: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                              import_react50.Icon,
                              {
                                icon: "solar:verified-check-bold",
                                width: 16,
                                style: { color: "#ec4899" }
                              }
                            ),
                            children: "Verified"
                          }
                        ) })
                      ] }),
                      settings.show_domain_handle && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                        "p",
                        {
                          className: "text-sm",
                          style: { color: themeColors.textSecondary },
                          children: [
                            link.domain,
                            "/",
                            link.path
                          ]
                        }
                      )
                    ]
                  }
                ),
                settings.social_links && settings.social_links.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  import_framer_motion12.motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.3, duration: 0.3 },
                    className: "flex flex-wrap items-center justify-center gap-2",
                    children: settings.social_links.map((social, index) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                      button_default,
                      {
                        as: "a",
                        href: social.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        isIconOnly: true,
                        size: "sm",
                        variant: "flat",
                        className: "hover:scale-110 transition-transform",
                        children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react50.Icon, { icon: social.icon, width: 20 })
                      },
                      index
                    ))
                  }
                ),
                settings.show_follower_count && settings.follower_count > 0 && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  import_framer_motion12.motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.4, duration: 0.3 },
                    className: "text-center",
                    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                      "p",
                      {
                        className: "text-sm",
                        style: { color: themeColors.textSecondary },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                            "span",
                            {
                              className: "font-semibold",
                              style: { color: themeColors.textPrimary },
                              children: settings.follower_count.toLocaleString()
                            }
                          ),
                          " ",
                          "Total Followers"
                        ]
                      }
                    )
                  }
                ),
                settings.voice_note_url && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  import_framer_motion12.motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.45, duration: 0.3 },
                    className: "w-full max-w-sm",
                    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                      ModernAudioPlayer,
                      {
                        src: settings.voice_note_url,
                        theme: settings.theme_mode
                      }
                    )
                  }
                ),
                settings.bio && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  import_framer_motion12.motion.p,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.5, duration: 0.3 },
                    className: "text-center max-w-sm",
                    style: { color: themeColors.textSecondary },
                    children: settings.bio
                  }
                ),
                settings.cta_cards && settings.cta_cards.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "w-full space-y-3 mt-4", children: settings.cta_cards.sort((a2, b) => a2.order - b.order).map((card2, index) => {
                  const getCardStyle = () => {
                    switch (card2.style.type) {
                      case "solid":
                        return {
                          background: card2.style.background_color || "#666"
                        };
                      case "gradient":
                        return {
                          background: card2.style.background_gradient ? `linear-gradient(135deg, ${card2.style.background_gradient.start}, ${card2.style.background_gradient.end})` : "linear-gradient(135deg, #667eea, #764ba2)"
                        };
                      case "image":
                        return {
                          backgroundImage: card2.style.background_image ? `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${card2.style.background_image})` : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        };
                      case "video":
                        return { background: "#000" };
                      default:
                        return {};
                    }
                  };
                  const handleCardClick = () => {
                    if (isPreview) return;
                    if (card2.require_18plus) {
                      setShowingAgeConfirmationFor(card2.id);
                      return;
                    }
                    trackClick(link.id, isPreview);
                    const navUrl = wrapUrlForNavigation(
                      card2.url,
                      isPreview
                    );
                    if (!navUrl) return;
                    window.location.href = navUrl;
                  };
                  const handleAgeConfirm = () => {
                    trackClick(link.id, isPreview);
                    const navUrl = wrapUrlForNavigation(
                      card2.url,
                      isPreview
                    );
                    if (!navUrl) return;
                    window.location.href = navUrl;
                  };
                  const handleAgeCancel = () => {
                    setShowingAgeConfirmationFor(null);
                  };
                  const renderCardContent = () => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    card_default,
                    {
                      isPressable: true,
                      onPress: handleCardClick,
                      className: "w-full hover:scale-[1.02] transition-transform shadow-lg relative",
                      style: getCardStyle(),
                      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                        card_body_default,
                        {
                          className: `p-6 flex items-center justify-center relative ${card2.ctr_mechanisms ? "min-h-[150px] md:min-h-[140px]" : "min-h-[120px]"}`,
                          children: [
                            card2.style.type === "video" && card2.style.background_video && (() => {
                              const fit = card2.style.background_fit || "fill";
                              const focus = card2.style.background_focus || "top";
                              const baseClasses = "absolute inset-0 w-full h-full opacity-60";
                              const fitClass = fit === "fit" ? "object-contain" : "object-cover";
                              let focusClass = "";
                              if (fit === "fill") {
                                if (focus === "top")
                                  focusClass = "object-top";
                                else if (focus === "bottom")
                                  focusClass = "object-bottom";
                                else focusClass = "object-center";
                              }
                              return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                                "video",
                                {
                                  src: card2.style.background_video,
                                  autoPlay: true,
                                  loop: true,
                                  muted: true,
                                  playsInline: true,
                                  className: `${baseClasses} ${fitClass} ${focusClass}`
                                }
                              );
                            })(),
                            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "text-center w-full relative z-10", children: [
                              card2.style.logo_icon && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "mb-2", children: [
                                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                                  import_react50.Icon,
                                  {
                                    icon: card2.style.logo_icon,
                                    width: 36,
                                    style: {
                                      color: card2.style.logo_color || "#fff",
                                      filter: card2.style.type === "image" || card2.style.type === "video" ? "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" : "none"
                                    },
                                    className: "mx-auto"
                                  }
                                ),
                                card2.style.logo_name && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                                  "p",
                                  {
                                    className: "font-bold text-lg mt-1",
                                    style: {
                                      color: card2.style.logo_color || "#fff",
                                      textShadow: card2.style.type === "image" || card2.style.type === "video" ? "0 2px 4px rgba(0,0,0,0.3)" : "none"
                                    },
                                    children: [
                                      card2.style.prefix_text && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "mr-1", children: card2.style.prefix_text }),
                                      card2.style.logo_name
                                    ]
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                                "h3",
                                {
                                  className: `text-lg font-semibold ${card2.style.type === "image" || card2.style.type === "gradient" || card2.style.type === "solid" || card2.style.type === "video" ? "text-white" : "text-foreground"}`,
                                  style: {
                                    textShadow: card2.style.type === "image" || card2.style.type === "video" ? "0 2px 8px rgba(0,0,0,0.5)" : "none"
                                  },
                                  children: card2.title
                                }
                              ),
                              card2.description && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                                "p",
                                {
                                  className: `text-sm mt-1 ${card2.style.type === "image" || card2.style.type === "gradient" || card2.style.type === "solid" || card2.style.type === "video" ? "text-white/90" : "text-default-500"}`,
                                  style: {
                                    textShadow: card2.style.type === "image" || card2.style.type === "video" ? "0 1px 4px rgba(0,0,0,0.5)" : "none"
                                  },
                                  children: card2.description
                                }
                              )
                            ] })
                          ]
                        }
                      )
                    }
                  );
                  const cardWithMechanisms = card2.ctr_mechanisms ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    CTACardWithMechanisms,
                    {
                      card: card2,
                      onReveal: () => {
                      },
                      children: renderCardContent()
                    }
                  ) : renderCardContent();
                  const finalContent = showingAgeConfirmationFor === card2.id && !isPreview ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    AgeConfirmationModal,
                    {
                      isOpen: true,
                      onConfirm: handleAgeConfirm,
                      onCancel: handleAgeCancel,
                      children: cardWithMechanisms
                    }
                  ) : cardWithMechanisms;
                  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    import_framer_motion12.motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: {
                        delay: 0.6 + index * 0.1,
                        duration: 0.3
                      },
                      className: "relative",
                      children: finalContent
                    },
                    card2.id
                  );
                }) }) : (
                  // Fallback to default button if no CTA cards
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    import_framer_motion12.motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.6, duration: 0.3 },
                      className: "w-full px-4",
                      children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                        card_default,
                        {
                          isPressable: true,
                          onPress: handleButtonClick,
                          className: "w-full hover:scale-[1.02] transition-transform shadow-lg",
                          children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(card_body_default, { className: "p-6", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center justify-between", children: [
                            /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex-1", children: [
                              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { className: "text-lg font-semibold text-foreground", children: link.title || "Click here" }),
                              link.description && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-sm text-default-500 mt-1", children: link.description })
                            ] }),
                            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                              import_react50.Icon,
                              {
                                icon: "solar:arrow-right-line-duotone",
                                width: 24,
                                className: "text-default-400 ml-4"
                              }
                            )
                          ] }) })
                        }
                      )
                    }
                  )
                ),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                  import_framer_motion12.motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.8, duration: 0.3 },
                    className: "mt-8 pb-8 flex justify-center",
                    children: isFreePlan ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                      "a",
                      {
                        href: "https://www.outlink.bio/",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-lg hover:brightness-110 transition bg-gradient-to-r from-pink-500 to-orange-400 text-white",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "inline-flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                            "img",
                            {
                              src: "/logo2.svg",
                              alt: "Outlink logo",
                              className: "h-4 w-4"
                            }
                          ) }),
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Build your own premium page with Outlink" })
                        ]
                      }
                    ) : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                      "a",
                      {
                        href: "https://www.outlink.bio/",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "inline-flex items-center gap-2 text-xs text-default-500 hover:text-default-300 transition-colors",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                            "img",
                            {
                              src: "/logo2.svg",
                              alt: "Outlink logo",
                              className: "h-4 w-4"
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Powered by Outlink" })
                        ]
                      }
                    )
                  }
                )
              ] }) })
            }
          )
        ]
      }
    )
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AgeConfirmationModal,
  CTACardWithMechanisms,
  LandingPageViewer,
  ModernAudioPlayer
});
//# sourceMappingURL=index.js.map