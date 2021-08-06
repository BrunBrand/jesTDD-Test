import { Lead } from "./Lead";
import { LeadEntity } from "./LeadEntity";
import { jest } from "@jest/globals";

describe('TDD', ()=>{
    
    let tested: Lead;

    const user = {
        name: 'bruno',
        email: 'brb@gmail.com',
        number:'15556123-123'
    }

    beforeEach(()=>tested = new Lead());

    it("Add one Lead", ()=>{
        const result = tested.add(user.name,user.email,user.number);
        expect(result).toBe(true);
    })

    it("Get one lead",()=>{
        const result = tested.get("brb@gm.com");
        expect(result).toBeInstanceOf(LeadEntity);
        expect(result.name).toBe(user.name);
        expect(result.email).toBe(user.email);
        expect(result.phone).toBe(user.number);
    })

    it("Get all leads", ()=>{
        const result = tested.getAll();
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(1);

    })

    it("Delete lead",()=>{
        const result = tested.del(user.email);
        expect(result).toBe(true);
    })




})