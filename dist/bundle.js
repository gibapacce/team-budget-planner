/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// src/index.js\r\n\r\n// Deal class representing each deal\r\nclass Deal {\r\n  constructor(vendor, amount) {\r\n    this.vendor = vendor;\r\n    this.amount = amount;\r\n  }\r\n}\r\n\r\n// TeamBudgetPlanner class to manage deals and budgets\r\nclass TeamBudgetPlanner {\r\n  constructor() {\r\n    this.deals = [];\r\n  }\r\n\r\n  // Add a new deal\r\n  addDeal(vendor, amount) {\r\n    const deal = new Deal(vendor, parseFloat(amount));\r\n    this.deals.push(deal);\r\n  }\r\n\r\n  // Calculate total expenses\r\n  calculateTotalExpenses() {\r\n    return this.deals.reduce((total, deal) => total + deal.amount, 0);\r\n  }\r\n\r\n  // Decide annual budget based on expenses\r\n  async decideBudget() {\r\n    const totalExpenses = this.calculateTotalExpenses();\r\n    return new Promise((resolve) => {\r\n      setTimeout(() => {\r\n        resolve(\r\n          `The annual budget for the team should be at least $${\r\n            totalExpenses + 1000\r\n          }`,\r\n        );\r\n      }, 1000);\r\n    });\r\n  }\r\n\r\n  // Update the displayed expenses and budget\r\n  async updateDisplay() {\r\n    const expensesDiv = document.getElementById('expenses');\r\n    const budgetDiv = document.getElementById('budget');\r\n\r\n    const totalExpenses = this.calculateTotalExpenses();\r\n    expensesDiv.innerHTML = `<p>Total Expenses: $${totalExpenses}</p>`;\r\n\r\n    const budgetMessage = await this.decideBudget();\r\n    budgetDiv.innerHTML = `<p>${budgetMessage}</p>`;\r\n  }\r\n}\r\n\r\n// Immediately Invoked Function Expression (IIFE) to initialize the app\r\n(async () => {\r\n  const teamBudgetPlanner = new TeamBudgetPlanner();\r\n\r\n  // Handle form submission\r\n  const form = document.getElementById('dealForm');\r\n  form.addEventListener('submit', async (event) => {\r\n    event.preventDefault();\r\n    const vendor = event.target.vendor.value;\r\n    const amount = event.target.amount.value;\r\n\r\n    teamBudgetPlanner.addDeal(vendor, amount);\r\n\r\n    await teamBudgetPlanner.updateDisplay();\r\n\r\n    form.reset();\r\n  });\r\n\r\n  // Initial display update\r\n  await teamBudgetPlanner.updateDisplay();\r\n})();\r\n\n\n//# sourceURL=webpack://team-budget-planner/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;