import { Deserializable } from "./deserializable";
import { StatusSchema } from "./module";

export class Record implements Deserializable {
  id: number;
  module_id: number;
  date: Date;
  status: StatusSchema;

  deserialize(input: any) {
    Object.assign(this, input);
    this.date = new Date(this.date);
    return this;
  }

  getValue(key: string){
    return this.status[key];
  }
  
  getPrintableDate(){
    return this.date.toISOString();
  }
  
  getDateToGroup(){
    return this.date.toISOString().substring(0, 10);
  }

}


