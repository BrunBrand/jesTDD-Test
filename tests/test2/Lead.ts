import { LeadEntity } from "./LeadEntity";


const db = new Array<LeadEntity>();

export class Lead{
    public get(email:string){
        let obj = new LeadEntity();

        db.forEach(f=>{
            if(f.email == email) return obj=f; 
        })

        return obj;
    }

    public getAll(): LeadEntity[]{
        return db;
    }

    public add(name:string, email:string, phone:string):boolean{
        let lead = new LeadEntity();

        lead.email  = email;
        lead.name   = name;
        lead.phone  = phone;
        db.push(lead);

        return true;
    }

    public del(email:string):boolean{
        let result = false;
        db.forEach(f=>{
            if(f.email == email){
                db.pop();
                result = true;
            }
        })
        return result;
    }
}
