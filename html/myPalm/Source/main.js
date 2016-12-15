/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/bfb0c893dd9292110cf7d9d26b4d2531', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/bfb0c893dd9292110cf7d9d26b4d2531',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "position": "absolute",
	    "backgroundColor": "#fec62f",
	    "top": 0,
	    "right": 0,
	    "bottom": 0,
	    "left": 0
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "title-style"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "https://m.jujinziben.com/dist/css/images/code@01.png"
	          },
	          "classList": [
	            "title-back-image"
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "title-input-back-div"
	          ],
	          "children": [
	            {
	              "type": "input",
	              "classList": [
	                "title-input"
	              ],
	              "attr": {
	                "placeholder": "请输入优惠码"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "title-right-button-back"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title-right-button-title"
	                  ],
	                  "attr": {
	                    "value": function () {return this.button}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "list-style"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "list-title-style"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "list-title-text"
	              ],
	              "attr": {
	                "value": "我的兑换历史"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "list-title-button-back"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "list-title-button-text",
	                    "list-title-button-select"
	                  ],
	                  "repeat": {
	                    "expression": function () {return this.buttonTitles},
	                    "value": "item"
	                  },
	                  "events": {
	                    "click": function ($event) {this.buttonClick(this.$index,$event)}
	                  },
	                  "shown": function () {return this.selectButtonIndex==this.$index},
	                  "style": {
	                    "left": function () {return this.$index*150}
	                  },
	                  "attr": {
	                    "value": function () {return this.item}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "list-title-button-text",
	                    "list-title-button-nomal"
	                  ],
	                  "repeat": {
	                    "expression": function () {return this.buttonTitles},
	                    "value": "item"
	                  },
	                  "events": {
	                    "click": function ($event) {this.buttonClick(this.$index,$event)}
	                  },
	                  "shown": function () {return this.selectButtonIndex!=this.$index},
	                  "style": {
	                    "left": function () {return this.$index*150}
	                  },
	                  "attr": {
	                    "value": function () {return this.item}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "list-list-style"
	          ],
	          "style": {
	            "top": 110
	          },
	          "children": [
	            {
	              "type": "list",
	              "classList": [
	                "list-list-style"
	              ],
	              "children": [
	                {
	                  "type": "cell",
	                  "append": "tree",
	                  "repeat": {
	                    "expression": function () {return this.listArray},
	                    "value": "item"
	                  },
	                  "style": {
	                    "height": 220,
	                    "width": 750
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "list-cell-left-dev"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-title-name"
	                          ],
	                          "attr": {
	                            "value": "兑换物品"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-content"
	                          ],
	                          "style": {
	                            "top": 0
	                          },
	                          "attr": {
	                            "value": function () {return this.item.text}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-title-name"
	                          ],
	                          "attr": {
	                            "value": "口令码"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-content"
	                          ],
	                          "style": {
	                            "top": 60
	                          },
	                          "attr": {
	                            "value": function () {return this.item.text}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-title-name"
	                          ],
	                          "attr": {
	                            "value": "兑换时间"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-content"
	                          ],
	                          "style": {
	                            "top": 120
	                          },
	                          "attr": {
	                            "value": function () {return this.item.text}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "list-cell-right-dev"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-title-name"
	                          ],
	                          "attr": {
	                            "value": "渠道"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-content"
	                          ],
	                          "style": {
	                            "top": 0
	                          },
	                          "attr": {
	                            "value": function () {return this.item.text}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-title-name"
	                          ],
	                          "attr": {
	                            "value": "状态"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-content"
	                          ],
	                          "style": {
	                            "top": 60
	                          },
	                          "attr": {
	                            "value": function () {return this.item.text}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-title-name"
	                          ],
	                          "attr": {
	                            "value": "过期时间"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "list-cell-dev-content"
	                          ],
	                          "style": {
	                            "top": 120
	                          },
	                          "attr": {
	                            "value": function () {return this.item.text}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "style": {
	                        "width": 750,
	                        "height": 20,
	                        "position": "absolute",
	                        "bottom": 0
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "title-style": {
	    "width": 750,
	    "height": 472
	  },
	  "title-back-image": {
	    "height": 472,
	    "width": 750
	  },
	  "title-input-back-div": {
	    "width": 400,
	    "height": 200,
	    "position": "absolute",
	    "left": 175,
	    "top": 250
	  },
	  "title-input": {
	    "width": 400,
	    "height": 80,
	    "backgroundColor": "#FFFFFF",
	    "display": "table",
	    "textAlign": "center"
	  },
	  "title-right-button-back": {
	    "backgroundColor": "#FFFF00",
	    "height": 80,
	    "width": 400,
	    "position": "absolute",
	    "top": 120,
	    "borderRadius": 25
	  },
	  "title-right-button-title": {
	    "textAlign": "center",
	    "display": "table",
	    "fontSize": 34,
	    "marginTop": 20
	  },
	  "list-style": {
	    "textAlign": "center",
	    "width": 750,
	    "position": "absolute",
	    "top": 472,
	    "bottom": 0
	  },
	  "list-title-style": {
	    "height": 110,
	    "width": 750,
	    "position": "absolute"
	  },
	  "list-title-text": {
	    "marginTop": 20,
	    "fontSize": 30,
	    "display": "block",
	    "color": "#FF0000",
	    "textAlign": "center"
	  },
	  "list-title-button-back": {
	    "height": 40,
	    "width": 600,
	    "left": 75,
	    "marginTop": 20
	  },
	  "list-title-button-text": {
	    "width": 150,
	    "height": 60,
	    "fontSize": 30,
	    "paddingTop": 15,
	    "textAlign": "center",
	    "position": "absolute"
	  },
	  "list-title-button-select": {
	    "color": "#FFFFFF",
	    "backgroundColor": "#FF0000"
	  },
	  "list-title-button-nomal": {
	    "color": "#FF0000",
	    "backgroundColor": "#fed93c"
	  },
	  "list-list-style": {
	    "width": 750,
	    "bottom": 0,
	    "position": "absolute",
	    "top": 40
	  },
	  "list-cell-right-dev": {
	    "width": 355,
	    "height": 200,
	    "position": "absolute",
	    "top": 0,
	    "left": 375,
	    "backgroundColor": "#fed93c",
	    "borderBottomRightRadius": 25,
	    "borderTopRightRadius": 25
	  },
	  "list-cell-left-dev": {
	    "width": 355,
	    "height": 200,
	    "position": "absolute",
	    "top": 0,
	    "left": 20,
	    "backgroundColor": "#fed93c",
	    "borderBottomLeftRadius": 25,
	    "borderTopLeftRadius": 25
	  },
	  "list-cell-dev-title-name": {
	    "width": 155,
	    "height": 40,
	    "marginTop": 20,
	    "left": 20,
	    "color": "#FF0000"
	  },
	  "list-cell-dev-content": {
	    "width": 220,
	    "height": 40,
	    "position": "absolute",
	    "left": 160,
	    "marginTop": 20,
	    "color": "#FF0000"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var stream = __weex_require__('@weex-module/stream') || {};
	var navigate = __weex_require__('@weex-module/event');
	var extras = __weex_require__('@weex-module/extras');

	module.exports = {
	  data: function () {return {
	    button: "兑换",
	    selectButtonIndex: 0,
	    buttonTitles: ["全部", "未使用", "已使用", "已过期"],
	    listArray: [{ "text": "11", "text1": "22", "text2": "33", "text3": "44", "text4": "55", "text5": "66" }, { "text": "11", "text1": "22", "text2": "33", "text3": "44", "text4": "55", "text5": "66" }, { "text": "11", "text1": "22", "text2": "33", "text3": "44", "text4": "55", "text5": "66" }]
	  }},
	  computed: function computed() {},
	  methods: {
	    buttonClick: function buttonClick(index) {
	      nativeLog(index);
	      this.selectButtonIndex = index;
	      stream.fetch({
	        method: 'GET',
	        url: "http://www.jiuyunda.net:90/api/v1/product/list?id=56c45924c2fb4e2050000022",
	        type: 'json'
	      }, function (res) {
	        nativeLog(res.data);
	      }, function (error) {});
//	      navigate.navigateTo({ "url": "http://127.0.0.1:8080/dist/main.js", "extras": this.selectButtonIndex.toString(), "title": "我是标题" });
	    }
	  },
	  created: function created() {

//	    var that = this;
//	    extras.callBack(function (res) {
//	      that.selectButtonIndex = parseInt(res);
//	      that.button = res;
//	    });
//	  }
//	};
}
	/* generated by weex-loader */


/***/ }
/******/ ]);
