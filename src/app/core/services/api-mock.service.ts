import { InMemoryDbService } from "angular-in-memory-web-api";
import { Module } from "../models/module";

export class ApiMockService implements InMemoryDbService {
  createDb() {
    const modules = [
      {
        id: 1,
        serial: "0-000-001",
        name: "Lettuce",
        start_at: "2018-10-01",
        configs: {
          air_temperature: 24,
          water_temperature: 18.5,
          humidity: 45,
          light: 65000,
          ph: 6.5,
          ec: 25
        },
        status: {
          air_temperature: 22.3,
          water_temperature: 19.2,
          humidity: 48.5,
          light: 65000,
          ph: 6.4,
          ec: 52,
          pump: true,
          bulb: false
        }
      },
      {
        id: 2,
        serial: "0-002-581",
        name: "Tomato",
        start_at: "2018-01-01",
        configs: {
          air_temperature: 24,
          water_temperature: 18.5,
          humidity: 45,
          light: 65000,
          ph: 6.5,
          ec: 55
        },
        status: {
          alert: 'Low ph',
          air_temperature: 24,
          water_temperature: 18.5,
          humidity: 45,
          light: 65000,
          ph: 6.5,
          ec: 55,
          pump: true,
          bulb: false
        }
      },
      {
        id: 3,
        serial: "0-698-589",
        name: "",
        start_at: "",
        configs: {
          air_temperature: 24,
          water_temperature: 18.5,
          humidity: 45,
          light: 65000,
          ph: 6.5,
          ec: 55
        },
        status: {
          air_temperature: 24,
          water_temperature: 18.5,
          humidity: 45,
          light: 65000,
          ph: 6.5,
          ec: 55,
          pump: true,
          bulb: false
        }
      }
    ];

    const tasks = [
      {id: 1, module_id: 1, description: 'Task 1', date: '2018-11-01', status: 'P', type: 'A'},
      {id: 2, module_id: 1, description: 'Task 2', date: '2018-10-09', status: 'P', type: 'A'},
      {id: 5, module_id: 1, description: 'Task 2.5', date: '2018-10-09', status: 'F', type: 'A'},
      {id: 3, module_id: 1, description: 'Task 3', date: '2018-11-02', status: 'P', type: 'A'},
      {id: 4, module_id: 4, description: 'Task 1', date: '2018-01-01', status: 'F', type: 'A'}
    ];

    return { modules, tasks };
  }
}
