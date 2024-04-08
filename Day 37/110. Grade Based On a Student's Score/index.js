"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*  Grade based on a students score:
Create a function that assigns a grade(A,B,C,D,E,F) based on a student's score.
*/
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
function getPercentageAndGrade() {
    return __awaiter(this, void 0, void 0, function () {
        var inputMarks, percentage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            name: "obtainedMarks",
                            message: "enter obtained marks",
                            type: "number",
                        },
                        {
                            name: "totalMarks",
                            message: "enter total marks",
                            type: "number",
                        },
                    ])];
                case 1:
                    inputMarks = _a.sent();
                    percentage = (inputMarks.obtainedMarks / inputMarks.totalMarks) * 100;
                    if (percentage >= 45 && percentage <= 100) {
                        console.log(chalk_1.default.green("percentage: ".concat(percentage)));
                        if (percentage >= 90 && percentage <= 100) {
                            console.log(chalk_1.default.green("grade: A+"));
                        }
                        else if (percentage >= 85 && percentage <= 89) {
                            console.log(chalk_1.default.green("grade: A"));
                        }
                        else if (percentage >= 80 && percentage <= 84) {
                            console.log(chalk_1.default.green("grade: B+"));
                        }
                        else if (percentage >= 74 && percentage <= 79) {
                            console.log(chalk_1.default.green("grade: B"));
                        }
                        else if (percentage >= 69 && percentage <= 73) {
                            console.log(chalk_1.default.green("grade: C+"));
                        }
                        else if (percentage >= 60 && percentage <= 68) {
                            console.log(chalk_1.default.green("grade: C"));
                        }
                        else if (percentage >= 50 && percentage <= 59) {
                            console.log(chalk_1.default.green("grade: D"));
                        }
                        else if (percentage >= 45 && percentage <= 49) {
                            console.log(chalk_1.default.green("grade: E"));
                        }
                    }
                    else if (percentage < 45 && percentage >= 0) {
                        console.log(chalk_1.default.red("percentage: ".concat(percentage)));
                        if (percentage < 45 && percentage >= 0) {
                            console.log(chalk_1.default.red("grade: F"));
                        }
                        else {
                            console.log(chalk_1.default.red("Invalid input"));
                        }
                    }
                    else {
                        console.log(chalk_1.default.red("Invalid input"));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getPercentageAndGradeAgain() {
    return __awaiter(this, void 0, void 0, function () {
        var inputMarksAgain;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getPercentageAndGrade()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            name: "enterMarks",
                            message: "Do you want to check for more numbers?",
                            type: "input",
                        })];
                case 2:
                    inputMarksAgain = _a.sent();
                    _a.label = 3;
                case 3:
                    if (inputMarksAgain.enterMarks === "y" ||
                        inputMarksAgain.enterMarks === "yes" ||
                        inputMarksAgain.enterMarks === "Y" ||
                        inputMarksAgain.enterMarks === "Yes") return [3 /*break*/, 0];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
getPercentageAndGradeAgain();
