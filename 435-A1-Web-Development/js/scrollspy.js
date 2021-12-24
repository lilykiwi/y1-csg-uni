(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object") exports["scrollSpy"] = factory();
  else root["scrollSpy"] = factory();
})(window, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === "object" &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, "default", {
        enumerable: true,
        value: value,
      });
      /******/ if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, exports, __webpack_require__) {
        /**
         *
         * @param {string|HTMLElement} el - Selector to nav menu.
         * @param {{
         *  sectionSelector: string;
         *  targetSelector: string;
         *  offset: number;
         *  hrefAttribute: string;
         *  activeClass: string;
         * }} options - Options
         */
        module.exports = function (el, options = {}) {
          const ScrollSpy = __webpack_require__(1);
          const scrollSpy = new ScrollSpy(el, options);

          window.onload = function () {
            scrollSpy.onScroll();
          };
          window.addEventListener("scroll", () => {
            scrollSpy.onScroll();
          });

          return scrollSpy;
        };

        /***/
      },
      /* 1 */
      /***/ function (module, exports) {
        class ScrollSpy {
          /**
           * Initialises a new {@code ScrollSpy} instance.
           *
           * @param {string|HTMLElement} menu - Selector to nav menu.
           * @param {{
           *  sectionSelector: string;
           *  targetSelector: string;
           *  offset: number;
           *  hrefAttribute: string;
           *  activeClass: string;
           * }} options - Options
           */
          constructor(menu = "#navMain", options = {}) {
            if (!menu) {
              throw new Error("First argument cannot be empty");
            }
            if (!(typeof menu === "string" || menu instanceof HTMLElement)) {
              throw new TypeError(
                "menu can be either string or an instance of HTMLElement"
              );
            }

            if (typeof options !== "object") {
              throw new TypeError("options can only be of type object");
            }

            let defaultOptions = {
              sectionSelector: "section",
              targetSelector: "a",
              offset: 0,
              hrefAttribute: "href",
              activeClass: "active",
            };

            this.menuList =
              menu instanceof HTMLElement ? menu : document.querySelector(menu);
            this.options = Object.assign({}, defaultOptions, options);
            this.sections = document.querySelectorAll(
              this.options.sectionSelector
            );
          }

          /**
           * Handles scroll by finding the section
           * and setting the active class name.
           *
           * @returns {void}
           */
          onScroll() {
            const section = this.getCurrentSection();
            const menuItem = this.getCurrentMenuItem(section);

            if (menuItem) {
              this.removeCurrentActive({ ignore: menuItem });
              this.setActive(menuItem);
            }
          }

          /**
           * Returns the section where the current
           * scroll position is.
           *
           * @returns {HTMLElement}
           */
          getCurrentSection() {
            for (let i = 0; i < this.sections.length; i++) {
              /**
               * @type {HTMLElement}
               */
              const section = this.sections[i];
              const startAt = section.offsetTop;
              const endAt = startAt + section.offsetHeight;
              const currentPosition =
                (document.documentElement.scrollTop ||
                  document.body.scrollTop) + this.options.offset;
              const isInView =
                currentPosition >= startAt && currentPosition < endAt;
              if (isInView) {
                return section;
              }
            }
          }

          /**
           * Returns the menu item to which the
           * current scroll position is pointing to.
           *
           * @param {HTMLElement} section - The current section
           * @returns {HTMLAnchorElement}
           */
          getCurrentMenuItem(section) {
            if (!section) {
              return;
            }

            const sectionId = section.getAttribute("id");
            return this.menuList.querySelector(
              `[${this.options.hrefAttribute}="#${sectionId}"]`
            );
          }

          getRelativeTop(elm) {
            var pPos = elm.parentNode.getBoundingClientRect(), // parent pos
              cPos = elm.getBoundingClientRect(); // target pos
            return cPos.top - pPos.top + elm.parentNode.scrollTop;
          }

          /**
           * Adds active class to the passed element.
           *
           * @param {HTMLAnchorElement} menuItem - Menu item of current section.
           * @returns {void}
           */
          setActive(menuItem) {
            const isActive = menuItem.classList.contains(
              this.options.activeClass
            );
            if (!isActive) {
              const activeClasses = this.options.activeClass.trim().split(" ");
              activeClasses.forEach((activeClass) =>
                menuItem.classList.add(activeClass)
              );
            }
          }

          /**
           * Removes active class from all nav links
           * except the specified ignore element.
           *
           * @param {{
           *  ignore: HTMLAnchorElement
           * }} options
           * @returns {void}
           */
          removeCurrentActive(options = { ignore: null }) {
            const { hrefAttribute, targetSelector } = this.options;
            const menuItems = this.menuList.querySelectorAll(
              `${targetSelector}:not([${hrefAttribute}="${options.ignore.getAttribute(
                hrefAttribute
              )}"])`
            );

            menuItems.forEach((item) => {
              const activeClasses = this.options.activeClass.trim().split(" ");
              activeClasses.forEach((activeClass) =>
                item.classList.remove(activeClass)
              );
            });
          }
        }

        module.exports = ScrollSpy;

        /***/
      },
      /******/
    ]
  );
});
