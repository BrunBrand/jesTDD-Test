import { LeadEntity } from "./LeadEntity";

export class Lead{
    public get(name:string):LeadEntity{
        let obj = new LeadEntity();
        obj.name = "bruno";
        obj.email = "brb@gmail.com";
        obj.phone = "15556123-123";
        
        return obj;
    }

    public getAll(): LeadEntity[]{
        let obj = new Array<LeadEntity>();
        obj.push(new LeadEntity());
        return obj;
    }

    public add(name:string, email:string, phone:string):boolean{
        return true;
    }

    public del(email:string):boolean{
        return true;
    }

}