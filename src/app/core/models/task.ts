import { Module } from "./module";

import { Deserializable } from "./deserializable";

export class Task implements Deserializable {
  id: number;
  module_id: number;
  description: string;
  date: Date;
  status: string;
  type: string;
  isOutdated: boolean;
  module: Module;

  constructor(
    module: Module = null,
    description: string = null,
    date: Date = null
  ) {
    if (module !== null && description !== null && date !== null) {
      this.module = module;
      this.module_id = module.id;
      this.description = description;
      this.date = date;
    }
    this.status = "P";
    this.type = "H";
  }

  deserialize(input: any) {
    Object.assign(this, input);
    this.date = new Date(this.date);
    let diff = Math.floor(
      (this.date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );
    this.isOutdated = diff < -1 ? true : false;
    return this;
  }
}
