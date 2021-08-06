"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lead = void 0;
var LeadEntity_1 = require("./LeadEntity");
var Lead = /** @class */ (function () {
    function Lead() {
    }
    Lead.prototype.get = function (name) {
        var obj = new LeadEntity_1.LeadEntity();
        obj.name = "bruno";
        obj.email = "brb@gmail.com";
        obj.phone = "15556123-123";
        return obj;
    };
    Lead.prototype.getAll = function () {
        var obj = new Array();
        obj.push(new LeadEntity_1.LeadEntity());
        return obj;
    };
    Lead.prototype.add = function (name, email, phone) {
        return true;
    };
    Lead.prototype.del = function (email) {
        return true;
    };
    return Lead;
}());
exports.Lead = Lead;
