"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lead = void 0;
var LeadEntity_1 = require("./LeadEntity");
var db = new Array();
var Lead = /** @class */ (function () {
    function Lead() {
    }
    Lead.prototype.get = function (email) {
        var obj = new LeadEntity_1.LeadEntity();
        db.forEach(function (f) {
            if (f.email == email)
                return obj = f;
        });
        return obj;
    };
    Lead.prototype.getAll = function () {
        return db;
    };
    Lead.prototype.add = function (name, email, phone) {
        var lead = new LeadEntity_1.LeadEntity();
        lead.email = email;
        lead.name = name;
        lead.phone = phone;
        db.push(lead);
        return true;
    };
    Lead.prototype.del = function (email) {
        var result = false;
        db.forEach(function (f) {
            if (f.email == email) {
                db.pop();
                result = true;
            }
        });
        return result;
    };
    return Lead;
}());
exports.Lead = Lead;
