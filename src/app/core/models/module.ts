import { Deserializable } from "./deserializable";

class ConfigsSchema {
  air_temperature: number;
  water_temperature: number;
  humidity: number;
  light: number;
  ph: number;
  ec: number;
}

export class StatusSchema {
  alert?: string;
  air_temperature: number;
  water_temperature: number;
  humidity: number;
  light: number;
  ph: number;
  ec: number;
  pump: boolean;
  bulb: boolean;
}

export class Module implements Deserializable {
  id: number;
  name: string;
  serial: string;
  start_at: Date;
  status: StatusSchema;
  configs: ConfigsSchema;

  deserialize(input: any) {
    Object.assign(this, input);
    this.start_at = new Date(this.start_at);
    return this;
  }

  GrowthTime() {
    if (!this.start_at) return "";
    let diff = Math.abs(new Date().getTime() - this.start_at.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
  }
}
