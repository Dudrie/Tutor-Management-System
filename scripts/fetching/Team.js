"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Axios_1 = __importDefault(require("./Axios"));
function sortStudentsOfTeam(team) {
    team.students = team.students.sort(function (a, b) {
        return (a.lastname + ", " + a.firstname).localeCompare(b.lastname + ", " + b.firstname);
    });
}
function getTeamsOfTutorial(tutorialId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Axios_1.default.get("tutorial/" + tutorialId + "/team")];
                case 1:
                    response = _a.sent();
                    if (response.status === 200) {
                        response.data.forEach(function (team) { return sortStudentsOfTeam(team); });
                        return [2 /*return*/, response.data];
                    }
                    return [2 /*return*/, Promise.reject("Wrong status code (" + response.status + ").")];
            }
        });
    });
}
exports.getTeamsOfTutorial = getTeamsOfTutorial;
function getTeamOfTutorial(tutorialId, teamId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Axios_1.default.get("tutorial/" + tutorialId + "/team/" + teamId)];
                case 1:
                    response = _a.sent();
                    if (response.status === 200) {
                        sortStudentsOfTeam(response.data);
                        return [2 /*return*/, response.data];
                    }
                    return [2 /*return*/, Promise.reject("Wrong status code (" + response.status + ").")];
            }
        });
    });
}
exports.getTeamOfTutorial = getTeamOfTutorial;
function createTeam(tutorialId, teamInfo) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Axios_1.default.post("tutorial/" + tutorialId + "/team", teamInfo)];
                case 1:
                    response = _a.sent();
                    if (response.status === 201) {
                        sortStudentsOfTeam(response.data);
                        return [2 /*return*/, response.data];
                    }
                    return [2 /*return*/, Promise.reject("Wrong status code (" + response.status + ").")];
            }
        });
    });
}
exports.createTeam = createTeam;
function editTeam(tutorialId, teamId, teamInfo) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Axios_1.default.patch("tutorial/" + tutorialId + "/team/" + teamId, teamInfo)];
                case 1:
                    response = _a.sent();
                    if (response.status === 200) {
                        sortStudentsOfTeam(response.data);
                        return [2 /*return*/, response.data];
                    }
                    return [2 /*return*/, Promise.reject("Wrong status code (" + response.status + ").")];
            }
        });
    });
}
exports.editTeam = editTeam;
function deleteTeam(tutorialId, teamId) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Axios_1.default.delete("tutorial/" + tutorialId + "/team/" + teamId)];
                case 1:
                    response = _a.sent();
                    if (response.status !== 204) {
                        return [2 /*return*/, Promise.reject("Wrong status code (" + response.status + ").")];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteTeam = deleteTeam;
function setPointsOfTeam(tutorialId, teamId, points) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Axios_1.default.put("tutorial/" + tutorialId + "/team/" + teamId + "/points", points)];
                case 1:
                    response = _a.sent();
                    if (response.status !== 204) {
                        return [2 /*return*/, Promise.reject("Wrong status code (" + response.status + ").")];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.setPointsOfTeam = setPointsOfTeam;
