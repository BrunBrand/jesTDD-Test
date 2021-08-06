"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lead_1 = require("./Lead");
var LeadEntity_1 = require("./LeadEntity");
describe('TDD', function () {
    var tested;
    var user = {
        name: 'bruno',
        email: 'brb@gmail.com',
        number: '15556123-123'
    };
    beforeEach(function () { return tested = new Lead_1.Lead(); });
    it("Add one Lead", function () {
        var result = tested.add(user.name, user.email, user.number);
        expect(result).toBe(true);
    });
    it("Get one lead", function () {
        var result = tested.get(user.email);
        expect(result).toBeInstanceOf(LeadEntity_1.LeadEntity);
        expect(result.name).toBe(user.name);
        expect(result.email).toBe(user.email);
        expect(result.phone).toBe(user.number);
    });
    it("Get all leads", function () {
        var result = tested.getAll();
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(1);
    });
    it("Delete lead", function () {
        var result = tested.del(user.email);
        expect(result).toBe(true);
    });
});
