import { LeadEntity } from "./LeadEntity";

export class Lead{
    public get(name:string):LeadEntity{
        throw "Not implemented";
    }

    public getAll(): LeadEntity{
        throw "Not Implemented";
    }

    public add(name:string, email:string, phone:string):boolean{
        throw "Not Implemented";
    }

    public del(email:string):boolean{
        throw "Not Implemented";
    }

}