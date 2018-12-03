import { InMemoryDbService } from "angular-in-memory-web-api";

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
          alert: "Low ph",
          air_temperature: 24,
          water_temperature: 18.5,
          humidity: 45,
          light: 65000,
          ph: 6,
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
      {
        id: 1,
        module_id: 1,
        description: "Task 1",
        date: "2018-11-01",
        status: "P",
        type: "A"
      },
      {
        id: 2,
        module_id: 1,
        description: "Task 2",
        date: "2018-10-09",
        status: "P",
        type: "A"
      },
      {
        id: 5,
        module_id: 1,
        description: "Task 2.5",
        date: "2018-10-09",
        status: "F",
        type: "A"
      },
      {
        id: 3,
        module_id: 1,
        description: "Task 3",
        date: "2018-11-02",
        status: "P",
        type: "A"
      },
      {
        id: 4,
        module_id: 4,
        description: "Task 1",
        date: "2018-01-01",
        status: "F",
        type: "A"
      }
    ];
    const records = [
        {
           id: 1,
           module_id: 1,
           date: '2018-11-25 15:00:00',
           status: {
               air_temperature: 23.62,
               water_temperature: 20.15,
               humidity: 43.46,
               light: 0,
               ph: 6.48,
               ec: 24.54,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 2,
           module_id: 2,
           date: '2018-11-25 15:00:00',
           status: {
               air_temperature: 22.03,
               water_temperature: 20.08,
               humidity: 43.02,
               light: 0,
               ph: 6.57,
               ec: 25.69,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 3,
           module_id: 1,
           date: '2018-11-25 16:00:00',
           status: {
               air_temperature: 22.02,
               water_temperature: 18.92,
               humidity: 40.02,
               light: 1390,
               ph: 6.36,
               ec: 26.14,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 4,
           module_id: 2,
           date: '2018-11-25 16:00:00',
           status: {
               air_temperature: 22.28,
               water_temperature: 19.72,
               humidity: 45.24,
               light: 1390,
               ph: 6.49,
               ec: 25.63,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 5,
           module_id: 1,
           date: '2018-11-25 17:00:00',
           status: {
               air_temperature: 24.56,
               water_temperature: 18.84,
               humidity: 41.43,
               light: 3135,
               ph: 6.47,
               ec: 25.44,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 6,
           module_id: 2,
           date: '2018-11-25 17:00:00',
           status: {
               air_temperature: 25.8,
               water_temperature: 16.92,
               humidity: 41.38,
               light: 3135,
               ph: 6.62,
               ec: 22.05,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 7,
           module_id: 1,
           date: '2018-11-25 18:00:00',
           status: {
               air_temperature: 22.69,
               water_temperature: 18.52,
               humidity: 46.06,
               light: 4636,
               ph: 6.34,
               ec: 24.16,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 8,
           module_id: 2,
           date: '2018-11-25 18:00:00',
           status: {
               air_temperature: 24.77,
               water_temperature: 18.34,
               humidity: 47.54,
               light: 4636,
               ph: 6.33,
               ec: 23.87,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 9,
           module_id: 1,
           date: '2018-11-25 19:00:00',
           status: {
               air_temperature: 25.95,
               water_temperature: 20.11,
               humidity: 47.25,
               light: 4942,
               ph: 6.53,
               ec: 25.08,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 10,
           module_id: 2,
           date: '2018-11-25 19:00:00',
           status: {
               air_temperature: 25.07,
               water_temperature: 18.77,
               humidity: 46.04,
               light: 4942,
               ph: 6.47,
               ec: 26.12,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 11,
           module_id: 1,
           date: '2018-11-25 20:00:00',
           status: {
               air_temperature: 22.84,
               water_temperature: 20.04,
               humidity: 41,
               light: 6702,
               ph: 6.35,
               ec: 26.41,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 12,
           module_id: 2,
           date: '2018-11-25 20:00:00',
           status: {
               air_temperature: 24.11,
               water_temperature: 19.31,
               humidity: 49.7,
               light: 6702,
               ph: 6.37,
               ec: 24.78,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 13,
           module_id: 1,
           date: '2018-11-25 21:00:00',
           status: {
               air_temperature: 23,
               water_temperature: 20.15,
               humidity: 41.76,
               light: 8840,
               ph: 6.59,
               ec: 26.4,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 14,
           module_id: 2,
           date: '2018-11-25 21:00:00',
           status: {
               air_temperature: 22.11,
               water_temperature: 20.33,
               humidity: 45.34,
               light: 8840,
               ph: 6.31,
               ec: 26.39,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 15,
           module_id: 1,
           date: '2018-11-25 22:00:00',
           status: {
               air_temperature: 22.43,
               water_temperature: 17.63,
               humidity: 41.83,
               light: 11492,
               ph: 6.64,
               ec: 23.37,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 16,
           module_id: 2,
           date: '2018-11-25 22:00:00',
           status: {
               air_temperature: 23.71,
               water_temperature: 18.08,
               humidity: 49.9,
               light: 11492,
               ph: 6.3,
               ec: 25.6,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 17,
           module_id: 1,
           date: '2018-11-25 23:00:00',
           status: {
               air_temperature: 25.11,
               water_temperature: 18.15,
               humidity: 47.58,
               light: 11573,
               ph: 6.34,
               ec: 23.36,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 18,
           module_id: 2,
           date: '2018-11-25 23:00:00',
           status: {
               air_temperature: 23.1,
               water_temperature: 16.66,
               humidity: 42.78,
               light: 11573,
               ph: 6.53,
               ec: 24.62,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 19,
           module_id: 1,
           date: '2018-11-26 00:00:00',
           status: {
               air_temperature: 22.51,
               water_temperature: 19.24,
               humidity: 48.4,
               light: 12758,
               ph: 6.63,
               ec: 22.27,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 20,
           module_id: 2,
           date: '2018-11-26 00:00:00',
           status: {
               air_temperature: 24.17,
               water_temperature: 19.47,
               humidity: 41.86,
               light: 12758,
               ph: 6.51,
               ec: 24.9,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 21,
           module_id: 1,
           date: '2018-11-26 01:00:00',
           status: {
               air_temperature: 22.87,
               water_temperature: 17.43,
               humidity: 40.33,
               light: 12766,
               ph: 6.53,
               ec: 23.29,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 22,
           module_id: 2,
           date: '2018-11-26 01:00:00',
           status: {
               air_temperature: 22.54,
               water_temperature: 17.33,
               humidity: 41.15,
               light: 12766,
               ph: 6.36,
               ec: 25.16,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 23,
           module_id: 1,
           date: '2018-11-26 02:00:00',
           status: {
               air_temperature: 23.74,
               water_temperature: 18.3,
               humidity: 41.83,
               light: 12887,
               ph: 6.3,
               ec: 25.01,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 24,
           module_id: 2,
           date: '2018-11-26 02:00:00',
           status: {
               air_temperature: 25.02,
               water_temperature: 20.5,
               humidity: 48.69,
               light: 12887,
               ph: 6.58,
               ec: 22.15,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 25,
           module_id: 1,
           date: '2018-11-26 03:00:00',
           status: {
               air_temperature: 24.13,
               water_temperature: 19.17,
               humidity: 49.47,
               light: 15549,
               ph: 6.34,
               ec: 22.24,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 26,
           module_id: 2,
           date: '2018-11-26 03:00:00',
           status: {
               air_temperature: 22.2,
               water_temperature: 19.98,
               humidity: 49.12,
               light: 15549,
               ph: 6.6,
               ec: 23.31,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 27,
           module_id: 1,
           date: '2018-11-26 04:00:00',
           status: {
               air_temperature: 24.34,
               water_temperature: 17.41,
               humidity: 42.62,
               light: 18121,
               ph: 6.44,
               ec: 23.09,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 28,
           module_id: 2,
           date: '2018-11-26 04:00:00',
           status: {
               air_temperature: 23.21,
               water_temperature: 16.94,
               humidity: 44.1,
               light: 18121,
               ph: 6.36,
               ec: 25.5,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 29,
           module_id: 1,
           date: '2018-11-26 05:00:00',
           status: {
               air_temperature: 22.26,
               water_temperature: 19.6,
               humidity: 40.66,
               light: 20291,
               ph: 6.46,
               ec: 23.04,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 30,
           module_id: 2,
           date: '2018-11-26 05:00:00',
           status: {
               air_temperature: 23.17,
               water_temperature: 18.15,
               humidity: 49.94,
               light: 20291,
               ph: 6.61,
               ec: 24.28,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 31,
           module_id: 1,
           date: '2018-11-26 06:00:00',
           status: {
               air_temperature: 24.93,
               water_temperature: 18.26,
               humidity: 42.6,
               light: 20643,
               ph: 6.68,
               ec: 22.49,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 32,
           module_id: 2,
           date: '2018-11-26 06:00:00',
           status: {
               air_temperature: 23.14,
               water_temperature: 17.6,
               humidity: 42.93,
               light: 20643,
               ph: 6.39,
               ec: 23.05,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 33,
           module_id: 1,
           date: '2018-11-26 07:00:00',
           status: {
               air_temperature: 25.48,
               water_temperature: 16.81,
               humidity: 49.74,
               light: 22556,
               ph: 6.56,
               ec: 24.88,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 34,
           module_id: 2,
           date: '2018-11-26 07:00:00',
           status: {
               air_temperature: 23.03,
               water_temperature: 17.71,
               humidity: 40.49,
               light: 22556,
               ph: 6.61,
               ec: 26.55,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 35,
           module_id: 1,
           date: '2018-11-26 08:00:00',
           status: {
               air_temperature: 25.67,
               water_temperature: 18.88,
               humidity: 43.89,
               light: 24810,
               ph: 6.54,
               ec: 23.79,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 36,
           module_id: 2,
           date: '2018-11-26 08:00:00',
           status: {
               air_temperature: 22.24,
               water_temperature: 17.48,
               humidity: 41.9,
               light: 24810,
               ph: 6.42,
               ec: 23.94,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 37,
           module_id: 1,
           date: '2018-11-26 09:00:00',
           status: {
               air_temperature: 24.25,
               water_temperature: 20.19,
               humidity: 44.68,
               light: 25697,
               ph: 6.69,
               ec: 26.65,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 38,
           module_id: 2,
           date: '2018-11-26 09:00:00',
           status: {
               air_temperature: 22.33,
               water_temperature: 16.74,
               humidity: 48.4,
               light: 25697,
               ph: 6.33,
               ec: 24.9,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 39,
           module_id: 1,
           date: '2018-11-26 10:00:00',
           status: {
               air_temperature: 22.21,
               water_temperature: 19.64,
               humidity: 44.19,
               light: 26092,
               ph: 6.42,
               ec: 25.6,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 40,
           module_id: 2,
           date: '2018-11-26 10:00:00',
           status: {
               air_temperature: 22.38,
               water_temperature: 19.12,
               humidity: 42.03,
               light: 26092,
               ph: 6.69,
               ec: 22.67,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 41,
           module_id: 1,
           date: '2018-11-26 11:00:00',
           status: {
               air_temperature: 24.96,
               water_temperature: 17.15,
               humidity: 46.72,
               light: 27193,
               ph: 6.67,
               ec: 26.67,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 42,
           module_id: 2,
           date: '2018-11-26 11:00:00',
           status: {
               air_temperature: 25.25,
               water_temperature: 18.05,
               humidity: 43.04,
               light: 27193,
               ph: 6.62,
               ec: 26.01,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 43,
           module_id: 1,
           date: '2018-11-26 12:00:00',
           status: {
               air_temperature: 24.22,
               water_temperature: 19.14,
               humidity: 40.16,
               light: 28296,
               ph: 6.57,
               ec: 25.29,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 44,
           module_id: 2,
           date: '2018-11-26 12:00:00',
           status: {
               air_temperature: 25.93,
               water_temperature: 17.32,
               humidity: 47.78,
               light: 28296,
               ph: 6.56,
               ec: 25.1,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 45,
           module_id: 1,
           date: '2018-11-26 13:00:00',
           status: {
               air_temperature: 25.47,
               water_temperature: 20.37,
               humidity: 43.86,
               light: 30425,
               ph: 6.5,
               ec: 24.01,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 46,
           module_id: 2,
           date: '2018-11-26 13:00:00',
           status: {
               air_temperature: 23.77,
               water_temperature: 19.49,
               humidity: 45.21,
               light: 30425,
               ph: 6.41,
               ec: 24.78,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 47,
           module_id: 1,
           date: '2018-11-26 14:00:00',
           status: {
               air_temperature: 24.96,
               water_temperature: 18.39,
               humidity: 41.81,
               light: 31292,
               ph: 6.59,
               ec: 25.62,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 48,
           module_id: 2,
           date: '2018-11-26 14:00:00',
           status: {
               air_temperature: 23.28,
               water_temperature: 18.28,
               humidity: 45.43,
               light: 31292,
               ph: 6.6,
               ec: 23.62,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 49,
           module_id: 1,
           date: '2018-11-26 15:00:00',
           status: {
               air_temperature: 23.79,
               water_temperature: 19.31,
               humidity: 43.33,
               light: 0,
               ph: 6.68,
               ec: 26.53,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 50,
           module_id: 2,
           date: '2018-11-26 15:00:00',
           status: {
               air_temperature: 24.47,
               water_temperature: 18.34,
               humidity: 40.36,
               light: 0,
               ph: 6.56,
               ec: 22.06,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 51,
           module_id: 1,
           date: '2018-11-26 16:00:00',
           status: {
               air_temperature: 25.3,
               water_temperature: 19.92,
               humidity: 41.29,
               light: 1674,
               ph: 6.34,
               ec: 25.94,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 52,
           module_id: 2,
           date: '2018-11-26 16:00:00',
           status: {
               air_temperature: 23.9,
               water_temperature: 17.92,
               humidity: 47.89,
               light: 1674,
               ph: 6.64,
               ec: 24.89,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 53,
           module_id: 1,
           date: '2018-11-26 17:00:00',
           status: {
               air_temperature: 25.49,
               water_temperature: 18.26,
               humidity: 42.81,
               light: 1773,
               ph: 6.44,
               ec: 24.03,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 54,
           module_id: 2,
           date: '2018-11-26 17:00:00',
           status: {
               air_temperature: 24.04,
               water_temperature: 17.53,
               humidity: 43.16,
               light: 1773,
               ph: 6.39,
               ec: 22.61,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 55,
           module_id: 1,
           date: '2018-11-26 18:00:00',
           status: {
               air_temperature: 25.61,
               water_temperature: 20.45,
               humidity: 43.51,
               light: 2100,
               ph: 6.32,
               ec: 23.01,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 56,
           module_id: 2,
           date: '2018-11-26 18:00:00',
           status: {
               air_temperature: 24.19,
               water_temperature: 19.16,
               humidity: 40.86,
               light: 2100,
               ph: 6.46,
               ec: 22.48,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 57,
           module_id: 1,
           date: '2018-11-26 19:00:00',
           status: {
               air_temperature: 23.87,
               water_temperature: 18.44,
               humidity: 41.3,
               light: 4172,
               ph: 6.53,
               ec: 26.86,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 58,
           module_id: 2,
           date: '2018-11-26 19:00:00',
           status: {
               air_temperature: 22.6,
               water_temperature: 16.78,
               humidity: 47.52,
               light: 4172,
               ph: 6.58,
               ec: 24.85,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 59,
           module_id: 1,
           date: '2018-11-26 20:00:00',
           status: {
               air_temperature: 25.85,
               water_temperature: 17.97,
               humidity: 42.14,
               light: 5730,
               ph: 6.49,
               ec: 22.96,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 60,
           module_id: 2,
           date: '2018-11-26 20:00:00',
           status: {
               air_temperature: 22.7,
               water_temperature: 19.68,
               humidity: 46.59,
               light: 5730,
               ph: 6.43,
               ec: 23.14,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 61,
           module_id: 1,
           date: '2018-11-26 21:00:00',
           status: {
               air_temperature: 22.08,
               water_temperature: 19.63,
               humidity: 43.7,
               light: 7993,
               ph: 6.58,
               ec: 25.01,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 62,
           module_id: 2,
           date: '2018-11-26 21:00:00',
           status: {
               air_temperature: 25.01,
               water_temperature: 17.41,
               humidity: 42.76,
               light: 7993,
               ph: 6.52,
               ec: 25.66,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 63,
           module_id: 1,
           date: '2018-11-26 22:00:00',
           status: {
               air_temperature: 23.47,
               water_temperature: 18.73,
               humidity: 45.94,
               light: 8643,
               ph: 6.5,
               ec: 26.12,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 64,
           module_id: 2,
           date: '2018-11-26 22:00:00',
           status: {
               air_temperature: 25.99,
               water_temperature: 18.49,
               humidity: 48.32,
               light: 8643,
               ph: 6.34,
               ec: 26.64,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 65,
           module_id: 1,
           date: '2018-11-26 23:00:00',
           status: {
               air_temperature: 24.97,
               water_temperature: 19.39,
               humidity: 46.87,
               light: 8860,
               ph: 6.64,
               ec: 22,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 66,
           module_id: 2,
           date: '2018-11-26 23:00:00',
           status: {
               air_temperature: 24.48,
               water_temperature: 17,
               humidity: 44.45,
               light: 8860,
               ph: 6.48,
               ec: 22.24,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 67,
           module_id: 1,
           date: '2018-11-27 00:00:00',
           status: {
               air_temperature: 24.27,
               water_temperature: 17.94,
               humidity: 44.97,
               light: 10200,
               ph: 6.7,
               ec: 25.17,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 68,
           module_id: 2,
           date: '2018-11-27 00:00:00',
           status: {
               air_temperature: 25.63,
               water_temperature: 19.19,
               humidity: 40.38,
               light: 10200,
               ph: 6.44,
               ec: 22.72,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 69,
           module_id: 1,
           date: '2018-11-27 01:00:00',
           status: {
               air_temperature: 22.21,
               water_temperature: 19.22,
               humidity: 47.39,
               light: 11821,
               ph: 6.7,
               ec: 24.84,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 70,
           module_id: 2,
           date: '2018-11-27 01:00:00',
           status: {
               air_temperature: 25.57,
               water_temperature: 17.56,
               humidity: 49.99,
               light: 11821,
               ph: 6.33,
               ec: 23.95,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 71,
           module_id: 1,
           date: '2018-11-27 02:00:00',
           status: {
               air_temperature: 24.7,
               water_temperature: 16.73,
               humidity: 42.42,
               light: 13907,
               ph: 6.6,
               ec: 23.4,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 72,
           module_id: 2,
           date: '2018-11-27 02:00:00',
           status: {
               air_temperature: 22.62,
               water_temperature: 17.2,
               humidity: 44.83,
               light: 13907,
               ph: 6.32,
               ec: 22.26,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 73,
           module_id: 1,
           date: '2018-11-27 03:00:00',
           status: {
               air_temperature: 23.47,
               water_temperature: 19.35,
               humidity: 42.04,
               light: 14248,
               ph: 6.49,
               ec: 22.15,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 74,
           module_id: 2,
           date: '2018-11-27 03:00:00',
           status: {
               air_temperature: 23.08,
               water_temperature: 16.97,
               humidity: 48.12,
               light: 14248,
               ph: 6.39,
               ec: 24.43,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 75,
           module_id: 1,
           date: '2018-11-27 04:00:00',
           status: {
               air_temperature: 22.48,
               water_temperature: 20.43,
               humidity: 42.19,
               light: 16948,
               ph: 6.41,
               ec: 22.47,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 76,
           module_id: 2,
           date: '2018-11-27 04:00:00',
           status: {
               air_temperature: 22.93,
               water_temperature: 18.58,
               humidity: 44.21,
               light: 16948,
               ph: 6.32,
               ec: 22.54,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 77,
           module_id: 1,
           date: '2018-11-27 05:00:00',
           status: {
               air_temperature: 22.45,
               water_temperature: 19.14,
               humidity: 45,
               light: 19442,
               ph: 6.57,
               ec: 26.84,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 78,
           module_id: 2,
           date: '2018-11-27 05:00:00',
           status: {
               air_temperature: 24.48,
               water_temperature: 18.08,
               humidity: 44.39,
               light: 19442,
               ph: 6.67,
               ec: 23.11,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 79,
           module_id: 1,
           date: '2018-11-27 06:00:00',
           status: {
               air_temperature: 24.99,
               water_temperature: 16.84,
               humidity: 49.39,
               light: 19818,
               ph: 6.36,
               ec: 22.44,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 80,
           module_id: 2,
           date: '2018-11-27 06:00:00',
           status: {
               air_temperature: 25.35,
               water_temperature: 18.32,
               humidity: 48.17,
               light: 19818,
               ph: 6.45,
               ec: 23.26,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 81,
           module_id: 1,
           date: '2018-11-27 07:00:00',
           status: {
               air_temperature: 24.41,
               water_temperature: 17.23,
               humidity: 44.26,
               light: 21109,
               ph: 6.31,
               ec: 26.59,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 82,
           module_id: 2,
           date: '2018-11-27 07:00:00',
           status: {
               air_temperature: 25.88,
               water_temperature: 17.69,
               humidity: 47.25,
               light: 21109,
               ph: 6.64,
               ec: 23.08,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 83,
           module_id: 1,
           date: '2018-11-27 08:00:00',
           status: {
               air_temperature: 25.67,
               water_temperature: 17.03,
               humidity: 46.14,
               light: 22455,
               ph: 6.62,
               ec: 26.42,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 84,
           module_id: 2,
           date: '2018-11-27 08:00:00',
           status: {
               air_temperature: 23.01,
               water_temperature: 19.11,
               humidity: 42.94,
               light: 22455,
               ph: 6.6,
               ec: 23.5,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 85,
           module_id: 1,
           date: '2018-11-27 09:00:00',
           status: {
               air_temperature: 25.95,
               water_temperature: 17.35,
               humidity: 43.29,
               light: 23418,
               ph: 6.3,
               ec: 23.48,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 86,
           module_id: 2,
           date: '2018-11-27 09:00:00',
           status: {
               air_temperature: 24.21,
               water_temperature: 18.71,
               humidity: 46.45,
               light: 23418,
               ph: 6.44,
               ec: 22,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 87,
           module_id: 1,
           date: '2018-11-27 10:00:00',
           status: {
               air_temperature: 25.84,
               water_temperature: 18.42,
               humidity: 46.98,
               light: 25489,
               ph: 6.47,
               ec: 24.94,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 88,
           module_id: 2,
           date: '2018-11-27 10:00:00',
           status: {
               air_temperature: 23.88,
               water_temperature: 19.57,
               humidity: 47.02,
               light: 25489,
               ph: 6.55,
               ec: 25.16,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 89,
           module_id: 1,
           date: '2018-11-27 11:00:00',
           status: {
               air_temperature: 25.61,
               water_temperature: 20.22,
               humidity: 48.69,
               light: 27371,
               ph: 6.3,
               ec: 23.58,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 90,
           module_id: 2,
           date: '2018-11-27 11:00:00',
           status: {
               air_temperature: 24.53,
               water_temperature: 16.94,
               humidity: 46.95,
               light: 27371,
               ph: 6.52,
               ec: 23.48,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 91,
           module_id: 1,
           date: '2018-11-27 12:00:00',
           status: {
               air_temperature: 25.15,
               water_temperature: 19.96,
               humidity: 40.97,
               light: 29637,
               ph: 6.47,
               ec: 23.24,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 92,
           module_id: 2,
           date: '2018-11-27 12:00:00',
           status: {
               air_temperature: 24.11,
               water_temperature: 19.29,
               humidity: 47.07,
               light: 29637,
               ph: 6.44,
               ec: 23.66,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 93,
           module_id: 1,
           date: '2018-11-27 13:00:00',
           status: {
               air_temperature: 22.74,
               water_temperature: 17.85,
               humidity: 49.84,
               light: 30361,
               ph: 6.38,
               ec: 24.46,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 94,
           module_id: 2,
           date: '2018-11-27 13:00:00',
           status: {
               air_temperature: 22.21,
               water_temperature: 16.65,
               humidity: 41.47,
               light: 30361,
               ph: 6.45,
               ec: 26.6,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 95,
           module_id: 1,
           date: '2018-11-27 14:00:00',
           status: {
               air_temperature: 23.03,
               water_temperature: 17.49,
               humidity: 40.48,
               light: 31149,
               ph: 6.67,
               ec: 24.5,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 96,
           module_id: 2,
           date: '2018-11-27 14:00:00',
           status: {
               air_temperature: 24.42,
               water_temperature: 18.48,
               humidity: 46.82,
               light: 31149,
               ph: 6.7,
               ec: 26.88,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 97,
           module_id: 1,
           date: '2018-11-27 15:00:00',
           status: {
               air_temperature: 24.4,
               water_temperature: 20.45,
               humidity: 42.89,
               light: 0,
               ph: 6.42,
               ec: 25.93,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 98,
           module_id: 2,
           date: '2018-11-27 15:00:00',
           status: {
               air_temperature: 24.12,
               water_temperature: 19.97,
               humidity: 48.52,
               light: 0,
               ph: 6.42,
               ec: 26.19,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 99,
           module_id: 1,
           date: '2018-11-27 16:00:00',
           status: {
               air_temperature: 24.77,
               water_temperature: 16.85,
               humidity: 46.12,
               light: 943,
               ph: 6.42,
               ec: 25.15,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 100,
           module_id: 2,
           date: '2018-11-27 16:00:00',
           status: {
               air_temperature: 25.45,
               water_temperature: 17.8,
               humidity: 44.17,
               light: 943,
               ph: 6.45,
               ec: 23.51,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 101,
           module_id: 1,
           date: '2018-11-27 17:00:00',
           status: {
               air_temperature: 22.38,
               water_temperature: 18.77,
               humidity: 48.62,
               light: 1183,
               ph: 6.5,
               ec: 23.76,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 102,
           module_id: 2,
           date: '2018-11-27 17:00:00',
           status: {
               air_temperature: 23.31,
               water_temperature: 19.38,
               humidity: 46.58,
               light: 1183,
               ph: 6.47,
               ec: 26.87,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 103,
           module_id: 1,
           date: '2018-11-27 18:00:00',
           status: {
               air_temperature: 24.2,
               water_temperature: 19.41,
               humidity: 48.43,
               light: 2974,
               ph: 6.48,
               ec: 26.1,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 104,
           module_id: 2,
           date: '2018-11-27 18:00:00',
           status: {
               air_temperature: 23.85,
               water_temperature: 19.63,
               humidity: 49.48,
               light: 2974,
               ph: 6.68,
               ec: 25.24,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 105,
           module_id: 1,
           date: '2018-11-27 19:00:00',
           status: {
               air_temperature: 24.45,
               water_temperature: 19.02,
               humidity: 49.39,
               light: 4164,
               ph: 6.31,
               ec: 26.22,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 106,
           module_id: 2,
           date: '2018-11-27 19:00:00',
           status: {
               air_temperature: 26,
               water_temperature: 18.97,
               humidity: 47.13,
               light: 4164,
               ph: 6.55,
               ec: 24.43,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 107,
           module_id: 1,
           date: '2018-11-27 20:00:00',
           status: {
               air_temperature: 24.48,
               water_temperature: 20.31,
               humidity: 43.02,
               light: 6306,
               ph: 6.38,
               ec: 24.1,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 108,
           module_id: 2,
           date: '2018-11-27 20:00:00',
           status: {
               air_temperature: 25.51,
               water_temperature: 19.96,
               humidity: 45.8,
               light: 6306,
               ph: 6.65,
               ec: 24.04,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 109,
           module_id: 1,
           date: '2018-11-27 21:00:00',
           status: {
               air_temperature: 22.59,
               water_temperature: 18.78,
               humidity: 47.73,
               light: 6385,
               ph: 6.6,
               ec: 25.74,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 110,
           module_id: 2,
           date: '2018-11-27 21:00:00',
           status: {
               air_temperature: 25.6,
               water_temperature: 17.18,
               humidity: 44.49,
               light: 6385,
               ph: 6.54,
               ec: 25.91,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 111,
           module_id: 1,
           date: '2018-11-27 22:00:00',
           status: {
               air_temperature: 22.84,
               water_temperature: 17.19,
               humidity: 46.52,
               light: 6934,
               ph: 6.48,
               ec: 26.34,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 112,
           module_id: 2,
           date: '2018-11-27 22:00:00',
           status: {
               air_temperature: 25.51,
               water_temperature: 17.41,
               humidity: 40.01,
               light: 6934,
               ph: 6.37,
               ec: 24.29,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 113,
           module_id: 1,
           date: '2018-11-27 23:00:00',
           status: {
               air_temperature: 25.71,
               water_temperature: 20.18,
               humidity: 45.43,
               light: 7494,
               ph: 6.65,
               ec: 24.59,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 114,
           module_id: 2,
           date: '2018-11-27 23:00:00',
           status: {
               air_temperature: 24.41,
               water_temperature: 17.66,
               humidity: 48.19,
               light: 7494,
               ph: 6.61,
               ec: 26.78,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 115,
           module_id: 1,
           date: '2018-11-28 00:00:00',
           status: {
               air_temperature: 25.95,
               water_temperature: 20.04,
               humidity: 44.37,
               light: 8894,
               ph: 6.46,
               ec: 26.09,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 116,
           module_id: 2,
           date: '2018-11-28 00:00:00',
           status: {
               air_temperature: 23.11,
               water_temperature: 20.2,
               humidity: 41.14,
               light: 8894,
               ph: 6.42,
               ec: 22.03,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 117,
           module_id: 1,
           date: '2018-11-28 01:00:00',
           status: {
               air_temperature: 24.12,
               water_temperature: 20.32,
               humidity: 41.21,
               light: 9710,
               ph: 6.38,
               ec: 22.29,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 118,
           module_id: 2,
           date: '2018-11-28 01:00:00',
           status: {
               air_temperature: 22.88,
               water_temperature: 16.56,
               humidity: 45.62,
               light: 9710,
               ph: 6.31,
               ec: 26.15,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 119,
           module_id: 1,
           date: '2018-11-28 02:00:00',
           status: {
               air_temperature: 25.68,
               water_temperature: 16.79,
               humidity: 43.88,
               light: 11633,
               ph: 6.34,
               ec: 22.83,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 120,
           module_id: 2,
           date: '2018-11-28 02:00:00',
           status: {
               air_temperature: 25.59,
               water_temperature: 16.86,
               humidity: 40.24,
               light: 11633,
               ph: 6.39,
               ec: 25.39,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 121,
           module_id: 1,
           date: '2018-11-28 03:00:00',
           status: {
               air_temperature: 25.54,
               water_temperature: 19.65,
               humidity: 40.25,
               light: 12883,
               ph: 6.58,
               ec: 26.72,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 122,
           module_id: 2,
           date: '2018-11-28 03:00:00',
           status: {
               air_temperature: 23.54,
               water_temperature: 20.39,
               humidity: 45.9,
               light: 12883,
               ph: 6.38,
               ec: 22.55,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 123,
           module_id: 1,
           date: '2018-11-28 04:00:00',
           status: {
               air_temperature: 24.26,
               water_temperature: 18.73,
               humidity: 43.88,
               light: 14283,
               ph: 6.31,
               ec: 22.56,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 124,
           module_id: 2,
           date: '2018-11-28 04:00:00',
           status: {
               air_temperature: 22.95,
               water_temperature: 19.8,
               humidity: 45.92,
               light: 14283,
               ph: 6.39,
               ec: 22.42,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 125,
           module_id: 1,
           date: '2018-11-28 05:00:00',
           status: {
               air_temperature: 22.59,
               water_temperature: 17.39,
               humidity: 41.05,
               light: 15423,
               ph: 6.5,
               ec: 24,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 126,
           module_id: 2,
           date: '2018-11-28 05:00:00',
           status: {
               air_temperature: 24.19,
               water_temperature: 18.41,
               humidity: 44.01,
               light: 15423,
               ph: 6.41,
               ec: 24.58,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 127,
           module_id: 1,
           date: '2018-11-28 06:00:00',
           status: {
               air_temperature: 22.35,
               water_temperature: 17.94,
               humidity: 49.81,
               light: 15532,
               ph: 6.3,
               ec: 25.29,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 128,
           module_id: 2,
           date: '2018-11-28 06:00:00',
           status: {
               air_temperature: 23.06,
               water_temperature: 20.08,
               humidity: 46.76,
               light: 15532,
               ph: 6.57,
               ec: 24.12,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 129,
           module_id: 1,
           date: '2018-11-28 07:00:00',
           status: {
               air_temperature: 25.91,
               water_temperature: 20.28,
               humidity: 49.23,
               light: 17383,
               ph: 6.63,
               ec: 23.14,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 130,
           module_id: 2,
           date: '2018-11-28 07:00:00',
           status: {
               air_temperature: 25.78,
               water_temperature: 18.43,
               humidity: 48.96,
               light: 17383,
               ph: 6.65,
               ec: 26.32,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 131,
           module_id: 1,
           date: '2018-11-28 08:00:00',
           status: {
               air_temperature: 23.84,
               water_temperature: 18.92,
               humidity: 49.4,
               light: 17895,
               ph: 6.68,
               ec: 22.56,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 132,
           module_id: 2,
           date: '2018-11-28 08:00:00',
           status: {
               air_temperature: 22.16,
               water_temperature: 17.95,
               humidity: 42.1,
               light: 17895,
               ph: 6.31,
               ec: 23.68,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 133,
           module_id: 1,
           date: '2018-11-28 09:00:00',
           status: {
               air_temperature: 22.32,
               water_temperature: 20.32,
               humidity: 46.18,
               light: 19028,
               ph: 6.38,
               ec: 26.35,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 134,
           module_id: 2,
           date: '2018-11-28 09:00:00',
           status: {
               air_temperature: 25.07,
               water_temperature: 17.07,
               humidity: 48.09,
               light: 19028,
               ph: 6.44,
               ec: 26.74,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 135,
           module_id: 1,
           date: '2018-11-28 10:00:00',
           status: {
               air_temperature: 23.53,
               water_temperature: 17.37,
               humidity: 44.89,
               light: 19703,
               ph: 6.61,
               ec: 23.57,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 136,
           module_id: 2,
           date: '2018-11-28 10:00:00',
           status: {
               air_temperature: 24.78,
               water_temperature: 17.43,
               humidity: 41.81,
               light: 19703,
               ph: 6.57,
               ec: 26.5,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 137,
           module_id: 1,
           date: '2018-11-28 11:00:00',
           status: {
               air_temperature: 25.79,
               water_temperature: 17.36,
               humidity: 45.12,
               light: 21878,
               ph: 6.59,
               ec: 27,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 138,
           module_id: 2,
           date: '2018-11-28 11:00:00',
           status: {
               air_temperature: 24.14,
               water_temperature: 17.32,
               humidity: 41.52,
               light: 21878,
               ph: 6.53,
               ec: 24.34,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 139,
           module_id: 1,
           date: '2018-11-28 12:00:00',
           status: {
               air_temperature: 24.27,
               water_temperature: 17.16,
               humidity: 45.24,
               light: 21900,
               ph: 6.54,
               ec: 26.97,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 140,
           module_id: 2,
           date: '2018-11-28 12:00:00',
           status: {
               air_temperature: 23.17,
               water_temperature: 19.16,
               humidity: 42.65,
               light: 21900,
               ph: 6.35,
               ec: 26.21,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 141,
           module_id: 1,
           date: '2018-11-28 13:00:00',
           status: {
               air_temperature: 22.95,
               water_temperature: 19.58,
               humidity: 43.76,
               light: 22065,
               ph: 6.41,
               ec: 26.53,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 142,
           module_id: 2,
           date: '2018-11-28 13:00:00',
           status: {
               air_temperature: 25.16,
               water_temperature: 17.01,
               humidity: 42.65,
               light: 22065,
               ph: 6.35,
               ec: 26.86,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 143,
           module_id: 1,
           date: '2018-11-28 14:00:00',
           status: {
               air_temperature: 22.4,
               water_temperature: 19.82,
               humidity: 46.17,
               light: 23396,
               ph: 6.64,
               ec: 22.12,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 144,
           module_id: 2,
           date: '2018-11-28 14:00:00',
           status: {
               air_temperature: 25.74,
               water_temperature: 18.74,
               humidity: 40.07,
               light: 23396,
               ph: 6.57,
               ec: 24.63,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 145,
           module_id: 1,
           date: '2018-11-28 15:00:00',
           status: {
               air_temperature: 22.59,
               water_temperature: 16.66,
               humidity: 49.47,
               light: 0,
               ph: 6.49,
               ec: 26.18,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 146,
           module_id: 2,
           date: '2018-11-28 15:00:00',
           status: {
               air_temperature: 22.89,
               water_temperature: 17.86,
               humidity: 44.15,
               light: 0,
               ph: 6.63,
               ec: 24.99,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 147,
           module_id: 1,
           date: '2018-11-28 16:00:00',
           status: {
               air_temperature: 23.32,
               water_temperature: 19.59,
               humidity: 42.7,
               light: 295,
               ph: 6.7,
               ec: 23.96,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 148,
           module_id: 2,
           date: '2018-11-28 16:00:00',
           status: {
               air_temperature: 22.6,
               water_temperature: 20.14,
               humidity: 45.43,
               light: 295,
               ph: 6.67,
               ec: 24.58,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 149,
           module_id: 1,
           date: '2018-11-28 17:00:00',
           status: {
               air_temperature: 23.17,
               water_temperature: 19.31,
               humidity: 42.88,
               light: 1318,
               ph: 6.45,
               ec: 22.55,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 150,
           module_id: 2,
           date: '2018-11-28 17:00:00',
           status: {
               air_temperature: 23.98,
               water_temperature: 17.77,
               humidity: 44.92,
               light: 1318,
               ph: 6.67,
               ec: 25.63,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 151,
           module_id: 1,
           date: '2018-11-28 18:00:00',
           status: {
               air_temperature: 25.61,
               water_temperature: 20.37,
               humidity: 49.49,
               light: 1677,
               ph: 6.52,
               ec: 23.23,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 152,
           module_id: 2,
           date: '2018-11-28 18:00:00',
           status: {
               air_temperature: 24.42,
               water_temperature: 18.99,
               humidity: 49.65,
               light: 1677,
               ph: 6.37,
               ec: 25.62,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 153,
           module_id: 1,
           date: '2018-11-28 19:00:00',
           status: {
               air_temperature: 25.95,
               water_temperature: 20.42,
               humidity: 48.04,
               light: 3668,
               ph: 6.51,
               ec: 24,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 154,
           module_id: 2,
           date: '2018-11-28 19:00:00',
           status: {
               air_temperature: 25.67,
               water_temperature: 19.76,
               humidity: 47.9,
               light: 3668,
               ph: 6.49,
               ec: 22.91,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 155,
           module_id: 1,
           date: '2018-11-28 20:00:00',
           status: {
               air_temperature: 22.15,
               water_temperature: 17.94,
               humidity: 42.51,
               light: 5553,
               ph: 6.64,
               ec: 24.34,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 156,
           module_id: 2,
           date: '2018-11-28 20:00:00',
           status: {
               air_temperature: 23.51,
               water_temperature: 17.15,
               humidity: 49.06,
               light: 5553,
               ph: 6.33,
               ec: 22,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 157,
           module_id: 1,
           date: '2018-11-28 21:00:00',
           status: {
               air_temperature: 23.05,
               water_temperature: 17.07,
               humidity: 48.08,
               light: 6242,
               ph: 6.54,
               ec: 22.51,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 158,
           module_id: 2,
           date: '2018-11-28 21:00:00',
           status: {
               air_temperature: 24.48,
               water_temperature: 17.22,
               humidity: 47.03,
               light: 6242,
               ph: 6.68,
               ec: 23.02,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 159,
           module_id: 1,
           date: '2018-11-28 22:00:00',
           status: {
               air_temperature: 22.36,
               water_temperature: 18.61,
               humidity: 45.84,
               light: 8730,
               ph: 6.6,
               ec: 26.73,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 160,
           module_id: 2,
           date: '2018-11-28 22:00:00',
           status: {
               air_temperature: 23.91,
               water_temperature: 19.4,
               humidity: 40.39,
               light: 8730,
               ph: 6.69,
               ec: 26.77,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 161,
           module_id: 1,
           date: '2018-11-28 23:00:00',
           status: {
               air_temperature: 25.09,
               water_temperature: 18.28,
               humidity: 40.82,
               light: 10681,
               ph: 6.65,
               ec: 24.41,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 162,
           module_id: 2,
           date: '2018-11-28 23:00:00',
           status: {
               air_temperature: 23.56,
               water_temperature: 18.61,
               humidity: 45.49,
               light: 10681,
               ph: 6.43,
               ec: 22.61,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 163,
           module_id: 1,
           date: '2018-11-29 00:00:00',
           status: {
               air_temperature: 22.12,
               water_temperature: 19.07,
               humidity: 48.89,
               light: 10798,
               ph: 6.43,
               ec: 26.74,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 164,
           module_id: 2,
           date: '2018-11-29 00:00:00',
           status: {
               air_temperature: 23.49,
               water_temperature: 18.18,
               humidity: 41.37,
               light: 10798,
               ph: 6.64,
               ec: 26.16,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 165,
           module_id: 1,
           date: '2018-11-29 01:00:00',
           status: {
               air_temperature: 22.75,
               water_temperature: 17.54,
               humidity: 47.44,
               light: 12747,
               ph: 6.55,
               ec: 23.18,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 166,
           module_id: 2,
           date: '2018-11-29 01:00:00',
           status: {
               air_temperature: 25.72,
               water_temperature: 17.89,
               humidity: 46.89,
               light: 12747,
               ph: 6.51,
               ec: 25.66,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 167,
           module_id: 1,
           date: '2018-11-29 02:00:00',
           status: {
               air_temperature: 24.6,
               water_temperature: 18.26,
               humidity: 42.57,
               light: 15327,
               ph: 6.65,
               ec: 26.66,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 168,
           module_id: 2,
           date: '2018-11-29 02:00:00',
           status: {
               air_temperature: 25.32,
               water_temperature: 18.05,
               humidity: 50,
               light: 15327,
               ph: 6.41,
               ec: 24.63,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 169,
           module_id: 1,
           date: '2018-11-29 03:00:00',
           status: {
               air_temperature: 22.41,
               water_temperature: 19.36,
               humidity: 40.88,
               light: 16016,
               ph: 6.39,
               ec: 25.84,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 170,
           module_id: 2,
           date: '2018-11-29 03:00:00',
           status: {
               air_temperature: 23.47,
               water_temperature: 19.35,
               humidity: 41.3,
               light: 16016,
               ph: 6.31,
               ec: 24.92,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 171,
           module_id: 1,
           date: '2018-11-29 04:00:00',
           status: {
               air_temperature: 25.03,
               water_temperature: 18.63,
               humidity: 43.06,
               light: 16123,
               ph: 6.48,
               ec: 23.46,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 172,
           module_id: 2,
           date: '2018-11-29 04:00:00',
           status: {
               air_temperature: 23.51,
               water_temperature: 20.37,
               humidity: 46.73,
               light: 16123,
               ph: 6.5,
               ec: 23.99,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 173,
           module_id: 1,
           date: '2018-11-29 05:00:00',
           status: {
               air_temperature: 25.86,
               water_temperature: 18.7,
               humidity: 46.24,
               light: 16225,
               ph: 6.3,
               ec: 23.38,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 174,
           module_id: 2,
           date: '2018-11-29 05:00:00',
           status: {
               air_temperature: 24.9,
               water_temperature: 17.51,
               humidity: 41.45,
               light: 16225,
               ph: 6.36,
               ec: 22.65,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 175,
           module_id: 1,
           date: '2018-11-29 06:00:00',
           status: {
               air_temperature: 23.48,
               water_temperature: 17.07,
               humidity: 42.84,
               light: 18930,
               ph: 6.4,
               ec: 26.68,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 176,
           module_id: 2,
           date: '2018-11-29 06:00:00',
           status: {
               air_temperature: 24.4,
               water_temperature: 16.68,
               humidity: 41.47,
               light: 18930,
               ph: 6.58,
               ec: 26.14,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 177,
           module_id: 1,
           date: '2018-11-29 07:00:00',
           status: {
               air_temperature: 23.07,
               water_temperature: 16.88,
               humidity: 44.33,
               light: 21393,
               ph: 6.45,
               ec: 25.95,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 178,
           module_id: 2,
           date: '2018-11-29 07:00:00',
           status: {
               air_temperature: 25.25,
               water_temperature: 17.06,
               humidity: 40.43,
               light: 21393,
               ph: 6.56,
               ec: 24.01,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 179,
           module_id: 1,
           date: '2018-11-29 08:00:00',
           status: {
               air_temperature: 23.11,
               water_temperature: 17.71,
               humidity: 47.85,
               light: 22937,
               ph: 6.67,
               ec: 24.97,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 180,
           module_id: 2,
           date: '2018-11-29 08:00:00',
           status: {
               air_temperature: 23.81,
               water_temperature: 17.31,
               humidity: 48.68,
               light: 22937,
               ph: 6.41,
               ec: 25.37,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 181,
           module_id: 1,
           date: '2018-11-29 09:00:00',
           status: {
               air_temperature: 24.31,
               water_temperature: 18.3,
               humidity: 40.99,
               light: 25126,
               ph: 6.5,
               ec: 25.88,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 182,
           module_id: 2,
           date: '2018-11-29 09:00:00',
           status: {
               air_temperature: 25.23,
               water_temperature: 16.92,
               humidity: 44.26,
               light: 25126,
               ph: 6.47,
               ec: 24.5,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 183,
           module_id: 1,
           date: '2018-11-29 10:00:00',
           status: {
               air_temperature: 25.8,
               water_temperature: 16.93,
               humidity: 44.41,
               light: 26468,
               ph: 6.69,
               ec: 23.76,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 184,
           module_id: 2,
           date: '2018-11-29 10:00:00',
           status: {
               air_temperature: 22.3,
               water_temperature: 18.86,
               humidity: 49.1,
               light: 26468,
               ph: 6.3,
               ec: 23.99,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 185,
           module_id: 1,
           date: '2018-11-29 11:00:00',
           status: {
               air_temperature: 23.04,
               water_temperature: 19.68,
               humidity: 42.1,
               light: 27717,
               ph: 6.49,
               ec: 22.13,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 186,
           module_id: 2,
           date: '2018-11-29 11:00:00',
           status: {
               air_temperature: 24.67,
               water_temperature: 17.44,
               humidity: 47.68,
               light: 27717,
               ph: 6.39,
               ec: 24.79,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 187,
           module_id: 1,
           date: '2018-11-29 12:00:00',
           status: {
               air_temperature: 25.22,
               water_temperature: 19.75,
               humidity: 40.69,
               light: 28833,
               ph: 6.61,
               ec: 23.62,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 188,
           module_id: 2,
           date: '2018-11-29 12:00:00',
           status: {
               air_temperature: 22.73,
               water_temperature: 17.92,
               humidity: 45.02,
               light: 28833,
               ph: 6.62,
               ec: 24.46,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 189,
           module_id: 1,
           date: '2018-11-29 13:00:00',
           status: {
               air_temperature: 22.89,
               water_temperature: 19.68,
               humidity: 45.94,
               light: 29385,
               ph: 6.5,
               ec: 23.23,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 190,
           module_id: 2,
           date: '2018-11-29 13:00:00',
           status: {
               air_temperature: 24.74,
               water_temperature: 19.8,
               humidity: 46.62,
               light: 29385,
               ph: 6.7,
               ec: 25.87,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 191,
           module_id: 1,
           date: '2018-11-29 14:00:00',
           status: {
               air_temperature: 23.06,
               water_temperature: 18.74,
               humidity: 46.41,
               light: 30480,
               ph: 6.38,
               ec: 23.72,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 192,
           module_id: 2,
           date: '2018-11-29 14:00:00',
           status: {
               air_temperature: 25.6,
               water_temperature: 20.04,
               humidity: 43.26,
               light: 30480,
               ph: 6.44,
               ec: 25.23,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 193,
           module_id: 1,
           date: '2018-11-29 15:00:00',
           status: {
               air_temperature: 23.69,
               water_temperature: 19.7,
               humidity: 46.37,
               light: 0,
               ph: 6.48,
               ec: 26.51,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 194,
           module_id: 2,
           date: '2018-11-29 15:00:00',
           status: {
               air_temperature: 23.04,
               water_temperature: 17.81,
               humidity: 46.15,
               light: 0,
               ph: 6.33,
               ec: 25.29,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 195,
           module_id: 1,
           date: '2018-11-29 16:00:00',
           status: {
               air_temperature: 25.79,
               water_temperature: 20.47,
               humidity: 41.73,
               light: 839,
               ph: 6.58,
               ec: 22.43,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 196,
           module_id: 2,
           date: '2018-11-29 16:00:00',
           status: {
               air_temperature: 23.2,
               water_temperature: 17.97,
               humidity: 45.75,
               light: 839,
               ph: 6.52,
               ec: 24.59,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 197,
           module_id: 1,
           date: '2018-11-29 17:00:00',
           status: {
               air_temperature: 24.03,
               water_temperature: 17.63,
               humidity: 41.23,
               light: 2506,
               ph: 6.55,
               ec: 23.14,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 198,
           module_id: 2,
           date: '2018-11-29 17:00:00',
           status: {
               air_temperature: 25.9,
               water_temperature: 20.37,
               humidity: 41.1,
               light: 2506,
               ph: 6.36,
               ec: 26.13,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 199,
           module_id: 1,
           date: '2018-11-29 18:00:00',
           status: {
               air_temperature: 23.52,
               water_temperature: 19.88,
               humidity: 42.83,
               light: 3958,
               ph: 6.69,
               ec: 26.59,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 200,
           module_id: 2,
           date: '2018-11-29 18:00:00',
           status: {
               air_temperature: 24.82,
               water_temperature: 17.52,
               humidity: 46.79,
               light: 3958,
               ph: 6.49,
               ec: 25.47,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 201,
           module_id: 1,
           date: '2018-11-29 19:00:00',
           status: {
               air_temperature: 25.02,
               water_temperature: 18.33,
               humidity: 41.07,
               light: 6460,
               ph: 6.53,
               ec: 24.23,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 202,
           module_id: 2,
           date: '2018-11-29 19:00:00',
           status: {
               air_temperature: 24.99,
               water_temperature: 17.63,
               humidity: 43.65,
               light: 6460,
               ph: 6.68,
               ec: 22.77,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 203,
           module_id: 1,
           date: '2018-11-29 20:00:00',
           status: {
               air_temperature: 24.28,
               water_temperature: 18.48,
               humidity: 45.78,
               light: 7387,
               ph: 6.4,
               ec: 25.91,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 204,
           module_id: 2,
           date: '2018-11-29 20:00:00',
           status: {
               air_temperature: 22.03,
               water_temperature: 18.86,
               humidity: 48.56,
               light: 7387,
               ph: 6.43,
               ec: 22.53,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 205,
           module_id: 1,
           date: '2018-11-29 21:00:00',
           status: {
               air_temperature: 25.81,
               water_temperature: 18.3,
               humidity: 46.5,
               light: 8298,
               ph: 6.5,
               ec: 25.61,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 206,
           module_id: 2,
           date: '2018-11-29 21:00:00',
           status: {
               air_temperature: 24.57,
               water_temperature: 16.92,
               humidity: 42.3,
               light: 8298,
               ph: 6.3,
               ec: 26.93,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 207,
           module_id: 1,
           date: '2018-11-29 22:00:00',
           status: {
               air_temperature: 23.87,
               water_temperature: 19.2,
               humidity: 44.44,
               light: 9240,
               ph: 6.5,
               ec: 23.76,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 208,
           module_id: 2,
           date: '2018-11-29 22:00:00',
           status: {
               air_temperature: 23.23,
               water_temperature: 20.42,
               humidity: 40.75,
               light: 9240,
               ph: 6.46,
               ec: 24.46,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 209,
           module_id: 1,
           date: '2018-11-29 23:00:00',
           status: {
               air_temperature: 24.75,
               water_temperature: 19.72,
               humidity: 41.95,
               light: 11575,
               ph: 6.4,
               ec: 24.75,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 210,
           module_id: 2,
           date: '2018-11-29 23:00:00',
           status: {
               air_temperature: 22.38,
               water_temperature: 16.77,
               humidity: 41.03,
               light: 11575,
               ph: 6.48,
               ec: 26.89,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 211,
           module_id: 1,
           date: '2018-11-30 00:00:00',
           status: {
               air_temperature: 24.69,
               water_temperature: 19.12,
               humidity: 41.09,
               light: 12840,
               ph: 6.52,
               ec: 25.85,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 212,
           module_id: 2,
           date: '2018-11-30 00:00:00',
           status: {
               air_temperature: 22.33,
               water_temperature: 18.52,
               humidity: 48.26,
               light: 12840,
               ph: 6.39,
               ec: 22.87,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 213,
           module_id: 1,
           date: '2018-11-30 01:00:00',
           status: {
               air_temperature: 24.01,
               water_temperature: 17.34,
               humidity: 42.44,
               light: 15293,
               ph: 6.46,
               ec: 24.27,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 214,
           module_id: 2,
           date: '2018-11-30 01:00:00',
           status: {
               air_temperature: 22.52,
               water_temperature: 18.01,
               humidity: 42.82,
               light: 15293,
               ph: 6.67,
               ec: 25.77,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 215,
           module_id: 1,
           date: '2018-11-30 02:00:00',
           status: {
               air_temperature: 22.68,
               water_temperature: 19.12,
               humidity: 42.92,
               light: 15581,
               ph: 6.35,
               ec: 26.73,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 216,
           module_id: 2,
           date: '2018-11-30 02:00:00',
           status: {
               air_temperature: 23.5,
               water_temperature: 17.6,
               humidity: 47.92,
               light: 15581,
               ph: 6.54,
               ec: 22.24,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 217,
           module_id: 1,
           date: '2018-11-30 03:00:00',
           status: {
               air_temperature: 22.1,
               water_temperature: 17.69,
               humidity: 48.59,
               light: 16773,
               ph: 6.59,
               ec: 23.23,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 218,
           module_id: 2,
           date: '2018-11-30 03:00:00',
           status: {
               air_temperature: 25.38,
               water_temperature: 18,
               humidity: 44.9,
               light: 16773,
               ph: 6.64,
               ec: 24.47,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 219,
           module_id: 1,
           date: '2018-11-30 04:00:00',
           status: {
               air_temperature: 22.09,
               water_temperature: 17.44,
               humidity: 40.23,
               light: 17210,
               ph: 6.51,
               ec: 24.85,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 220,
           module_id: 2,
           date: '2018-11-30 04:00:00',
           status: {
               air_temperature: 24.71,
               water_temperature: 16.56,
               humidity: 42.48,
               light: 17210,
               ph: 6.55,
               ec: 22.96,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 221,
           module_id: 1,
           date: '2018-11-30 05:00:00',
           status: {
               air_temperature: 23.35,
               water_temperature: 18.88,
               humidity: 49.72,
               light: 19910,
               ph: 6.35,
               ec: 22.49,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 222,
           module_id: 2,
           date: '2018-11-30 05:00:00',
           status: {
               air_temperature: 24.97,
               water_temperature: 20.28,
               humidity: 49.24,
               light: 19910,
               ph: 6.56,
               ec: 25.82,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 223,
           module_id: 1,
           date: '2018-11-30 06:00:00',
           status: {
               air_temperature: 22.53,
               water_temperature: 18.42,
               humidity: 42.33,
               light: 19972,
               ph: 6.43,
               ec: 25.21,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 224,
           module_id: 2,
           date: '2018-11-30 06:00:00',
           status: {
               air_temperature: 22.43,
               water_temperature: 17.3,
               humidity: 42.97,
               light: 19972,
               ph: 6.34,
               ec: 23.54,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 225,
           module_id: 1,
           date: '2018-11-30 07:00:00',
           status: {
               air_temperature: 25.6,
               water_temperature: 19.93,
               humidity: 44.84,
               light: 20161,
               ph: 6.59,
               ec: 26.17,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 226,
           module_id: 2,
           date: '2018-11-30 07:00:00',
           status: {
               air_temperature: 23.5,
               water_temperature: 20.17,
               humidity: 43.53,
               light: 20161,
               ph: 6.64,
               ec: 22.64,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 227,
           module_id: 1,
           date: '2018-11-30 08:00:00',
           status: {
               air_temperature: 22.35,
               water_temperature: 19.98,
               humidity: 40.16,
               light: 22477,
               ph: 6.41,
               ec: 23.31,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 228,
           module_id: 2,
           date: '2018-11-30 08:00:00',
           status: {
               air_temperature: 23.11,
               water_temperature: 19.91,
               humidity: 40.95,
               light: 22477,
               ph: 6.42,
               ec: 25.71,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 229,
           module_id: 1,
           date: '2018-11-30 09:00:00',
           status: {
               air_temperature: 22.41,
               water_temperature: 18.88,
               humidity: 44.93,
               light: 23813,
               ph: 6.53,
               ec: 23.77,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 230,
           module_id: 2,
           date: '2018-11-30 09:00:00',
           status: {
               air_temperature: 25.26,
               water_temperature: 18.55,
               humidity: 44.35,
               light: 23813,
               ph: 6.64,
               ec: 23.14,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 231,
           module_id: 1,
           date: '2018-11-30 10:00:00',
           status: {
               air_temperature: 23.95,
               water_temperature: 17.52,
               humidity: 44.66,
               light: 23823,
               ph: 6.49,
               ec: 23.89,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 232,
           module_id: 2,
           date: '2018-11-30 10:00:00',
           status: {
               air_temperature: 23.85,
               water_temperature: 20.26,
               humidity: 48.19,
               light: 23823,
               ph: 6.69,
               ec: 22.5,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 233,
           module_id: 1,
           date: '2018-11-30 11:00:00',
           status: {
               air_temperature: 23.87,
               water_temperature: 17.68,
               humidity: 44.63,
               light: 24382,
               ph: 6.32,
               ec: 23.56,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 234,
           module_id: 2,
           date: '2018-11-30 11:00:00',
           status: {
               air_temperature: 23,
               water_temperature: 17.95,
               humidity: 43.1,
               light: 24382,
               ph: 6.59,
               ec: 25.79,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 235,
           module_id: 1,
           date: '2018-11-30 12:00:00',
           status: {
               air_temperature: 24.22,
               water_temperature: 18.87,
               humidity: 45.41,
               light: 24761,
               ph: 6.58,
               ec: 25.47,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 236,
           module_id: 2,
           date: '2018-11-30 12:00:00',
           status: {
               air_temperature: 24.19,
               water_temperature: 16.71,
               humidity: 43.64,
               light: 24761,
               ph: 6.68,
               ec: 26.09,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 237,
           module_id: 1,
           date: '2018-11-30 13:00:00',
           status: {
               air_temperature: 22.12,
               water_temperature: 18.86,
               humidity: 46.01,
               light: 25473,
               ph: 6.63,
               ec: 24.8,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 238,
           module_id: 2,
           date: '2018-11-30 13:00:00',
           status: {
               air_temperature: 24.33,
               water_temperature: 18.8,
               humidity: 43.88,
               light: 25473,
               ph: 6.37,
               ec: 24.12,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 239,
           module_id: 1,
           date: '2018-11-30 14:00:00',
           status: {
               air_temperature: 22.69,
               water_temperature: 16.66,
               humidity: 49.11,
               light: 26995,
               ph: 6.63,
               ec: 24.81,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 240,
           module_id: 2,
           date: '2018-11-30 14:00:00',
           status: {
               air_temperature: 22.38,
               water_temperature: 19.87,
               humidity: 49.07,
               light: 26995,
               ph: 6.59,
               ec: 23.96,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 241,
           module_id: 1,
           date: '2018-11-30 15:00:00',
           status: {
               air_temperature: 22.21,
               water_temperature: 20.13,
               humidity: 46.1,
               light: 0,
               ph: 6.56,
               ec: 23.26,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 242,
           module_id: 2,
           date: '2018-11-30 15:00:00',
           status: {
               air_temperature: 22.55,
               water_temperature: 17.8,
               humidity: 45.43,
               light: 0,
               ph: 6.52,
               ec: 23.03,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 243,
           module_id: 1,
           date: '2018-11-30 16:00:00',
           status: {
               air_temperature: 24.23,
               water_temperature: 18.8,
               humidity: 46.26,
               light: 1785,
               ph: 6.43,
               ec: 26.41,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 244,
           module_id: 2,
           date: '2018-11-30 16:00:00',
           status: {
               air_temperature: 24.04,
               water_temperature: 16.6,
               humidity: 44.11,
               light: 1785,
               ph: 6.66,
               ec: 26.42,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 245,
           module_id: 1,
           date: '2018-11-30 17:00:00',
           status: {
               air_temperature: 22.75,
               water_temperature: 18.85,
               humidity: 42.56,
               light: 3790,
               ph: 6.32,
               ec: 26.36,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 246,
           module_id: 2,
           date: '2018-11-30 17:00:00',
           status: {
               air_temperature: 25.71,
               water_temperature: 16.65,
               humidity: 43.17,
               light: 3790,
               ph: 6.62,
               ec: 26.09,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 247,
           module_id: 1,
           date: '2018-11-30 18:00:00',
           status: {
               air_temperature: 25.42,
               water_temperature: 19.9,
               humidity: 46.96,
               light: 5866,
               ph: 6.35,
               ec: 23.55,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 248,
           module_id: 2,
           date: '2018-11-30 18:00:00',
           status: {
               air_temperature: 24.61,
               water_temperature: 16.69,
               humidity: 40.83,
               light: 5866,
               ph: 6.56,
               ec: 25.47,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 249,
           module_id: 1,
           date: '2018-11-30 19:00:00',
           status: {
               air_temperature: 24.44,
               water_temperature: 18.2,
               humidity: 46.27,
               light: 7576,
               ph: 6.39,
               ec: 26.43,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 250,
           module_id: 2,
           date: '2018-11-30 19:00:00',
           status: {
               air_temperature: 23.15,
               water_temperature: 18.01,
               humidity: 45.52,
               light: 7576,
               ph: 6.66,
               ec: 25.97,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 251,
           module_id: 1,
           date: '2018-11-30 20:00:00',
           status: {
               air_temperature: 25.46,
               water_temperature: 18.58,
               humidity: 49.32,
               light: 9237,
               ph: 6.31,
               ec: 25.97,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 252,
           module_id: 2,
           date: '2018-11-30 20:00:00',
           status: {
               air_temperature: 22.12,
               water_temperature: 18.78,
               humidity: 45.96,
               light: 9237,
               ph: 6.35,
               ec: 23.07,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 253,
           module_id: 1,
           date: '2018-11-30 21:00:00',
           status: {
               air_temperature: 22.62,
               water_temperature: 17.54,
               humidity: 48.8,
               light: 9887,
               ph: 6.35,
               ec: 24.77,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 254,
           module_id: 2,
           date: '2018-11-30 21:00:00',
           status: {
               air_temperature: 23.12,
               water_temperature: 20.5,
               humidity: 47.48,
               light: 9887,
               ph: 6.33,
               ec: 26.89,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 255,
           module_id: 1,
           date: '2018-11-30 22:00:00',
           status: {
               air_temperature: 25.88,
               water_temperature: 18.61,
               humidity: 48.44,
               light: 10989,
               ph: 6.47,
               ec: 25.15,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 256,
           module_id: 2,
           date: '2018-11-30 22:00:00',
           status: {
               air_temperature: 25.32,
               water_temperature: 16.74,
               humidity: 48.27,
               light: 10989,
               ph: 6.55,
               ec: 23.85,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 257,
           module_id: 1,
           date: '2018-11-30 23:00:00',
           status: {
               air_temperature: 22.46,
               water_temperature: 20.06,
               humidity: 46.34,
               light: 13155,
               ph: 6.67,
               ec: 24.83,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 258,
           module_id: 2,
           date: '2018-11-30 23:00:00',
           status: {
               air_temperature: 24.95,
               water_temperature: 17.43,
               humidity: 46.62,
               light: 13155,
               ph: 6.32,
               ec: 25.53,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 259,
           module_id: 1,
           date: '2018-12-01 00:00:00',
           status: {
               air_temperature: 25.71,
               water_temperature: 20.13,
               humidity: 48.48,
               light: 15638,
               ph: 6.42,
               ec: 23.92,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 260,
           module_id: 2,
           date: '2018-12-01 00:00:00',
           status: {
               air_temperature: 22.1,
               water_temperature: 17.33,
               humidity: 40.8,
               light: 15638,
               ph: 6.5,
               ec: 25.79,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 261,
           module_id: 1,
           date: '2018-12-01 01:00:00',
           status: {
               air_temperature: 23.56,
               water_temperature: 16.77,
               humidity: 40.37,
               light: 18204,
               ph: 6.44,
               ec: 22.31,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 262,
           module_id: 2,
           date: '2018-12-01 01:00:00',
           status: {
               air_temperature: 24.39,
               water_temperature: 18.19,
               humidity: 47.6,
               light: 18204,
               ph: 6.56,
               ec: 22.29,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 263,
           module_id: 1,
           date: '2018-12-01 02:00:00',
           status: {
               air_temperature: 25.81,
               water_temperature: 18.91,
               humidity: 40.55,
               light: 20774,
               ph: 6.36,
               ec: 24.51,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 264,
           module_id: 2,
           date: '2018-12-01 02:00:00',
           status: {
               air_temperature: 24.19,
               water_temperature: 16.69,
               humidity: 41.15,
               light: 20774,
               ph: 6.36,
               ec: 24.34,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 265,
           module_id: 1,
           date: '2018-12-01 03:00:00',
           status: {
               air_temperature: 24.31,
               water_temperature: 16.57,
               humidity: 43.84,
               light: 21393,
               ph: 6.3,
               ec: 25.49,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 266,
           module_id: 2,
           date: '2018-12-01 03:00:00',
           status: {
               air_temperature: 25.62,
               water_temperature: 17.4,
               humidity: 42.89,
               light: 21393,
               ph: 6.33,
               ec: 24.01,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 267,
           module_id: 1,
           date: '2018-12-01 04:00:00',
           status: {
               air_temperature: 22.07,
               water_temperature: 19.34,
               humidity: 42.25,
               light: 22277,
               ph: 6.57,
               ec: 24.96,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 268,
           module_id: 2,
           date: '2018-12-01 04:00:00',
           status: {
               air_temperature: 23.27,
               water_temperature: 16.78,
               humidity: 45.24,
               light: 22277,
               ph: 6.34,
               ec: 24.94,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 269,
           module_id: 1,
           date: '2018-12-01 05:00:00',
           status: {
               air_temperature: 25.2,
               water_temperature: 18.2,
               humidity: 44.5,
               light: 23707,
               ph: 6.41,
               ec: 24.85,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 270,
           module_id: 2,
           date: '2018-12-01 05:00:00',
           status: {
               air_temperature: 24.28,
               water_temperature: 18.24,
               humidity: 49.62,
               light: 23707,
               ph: 6.36,
               ec: 25.55,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 271,
           module_id: 1,
           date: '2018-12-01 06:00:00',
           status: {
               air_temperature: 24.16,
               water_temperature: 18.55,
               humidity: 48.67,
               light: 24816,
               ph: 6.35,
               ec: 23.94,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 272,
           module_id: 2,
           date: '2018-12-01 06:00:00',
           status: {
               air_temperature: 23.79,
               water_temperature: 18.94,
               humidity: 47.21,
               light: 24816,
               ph: 6.59,
               ec: 26.26,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 273,
           module_id: 1,
           date: '2018-12-01 07:00:00',
           status: {
               air_temperature: 25.68,
               water_temperature: 20.49,
               humidity: 42.25,
               light: 25449,
               ph: 6.35,
               ec: 22.54,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 274,
           module_id: 2,
           date: '2018-12-01 07:00:00',
           status: {
               air_temperature: 23.21,
               water_temperature: 19.08,
               humidity: 48.38,
               light: 25449,
               ph: 6.7,
               ec: 22.66,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 275,
           module_id: 1,
           date: '2018-12-01 08:00:00',
           status: {
               air_temperature: 25.69,
               water_temperature: 17.83,
               humidity: 47.84,
               light: 26198,
               ph: 6.48,
               ec: 23.16,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 276,
           module_id: 2,
           date: '2018-12-01 08:00:00',
           status: {
               air_temperature: 22.75,
               water_temperature: 19.17,
               humidity: 47.02,
               light: 26198,
               ph: 6.58,
               ec: 22.48,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 277,
           module_id: 1,
           date: '2018-12-01 09:00:00',
           status: {
               air_temperature: 22.36,
               water_temperature: 20.41,
               humidity: 41.67,
               light: 26215,
               ph: 6.68,
               ec: 23.98,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 278,
           module_id: 2,
           date: '2018-12-01 09:00:00',
           status: {
               air_temperature: 25.84,
               water_temperature: 19.04,
               humidity: 44.26,
               light: 26215,
               ph: 6.62,
               ec: 26.38,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 279,
           module_id: 1,
           date: '2018-12-01 10:00:00',
           status: {
               air_temperature: 22.41,
               water_temperature: 20.18,
               humidity: 47.03,
               light: 27449,
               ph: 6.46,
               ec: 25.74,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 280,
           module_id: 2,
           date: '2018-12-01 10:00:00',
           status: {
               air_temperature: 23.37,
               water_temperature: 17.01,
               humidity: 47.37,
               light: 27449,
               ph: 6.59,
               ec: 26.39,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 281,
           module_id: 1,
           date: '2018-12-01 11:00:00',
           status: {
               air_temperature: 25.15,
               water_temperature: 20.33,
               humidity: 40.45,
               light: 29812,
               ph: 6.38,
               ec: 26.8,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 282,
           module_id: 2,
           date: '2018-12-01 11:00:00',
           status: {
               air_temperature: 23.66,
               water_temperature: 17.24,
               humidity: 48.93,
               light: 29812,
               ph: 6.47,
               ec: 25.32,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 283,
           module_id: 1,
           date: '2018-12-01 12:00:00',
           status: {
               air_temperature: 24.97,
               water_temperature: 16.79,
               humidity: 47.69,
               light: 31059,
               ph: 6.57,
               ec: 24.33,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 284,
           module_id: 2,
           date: '2018-12-01 12:00:00',
           status: {
               air_temperature: 25.72,
               water_temperature: 16.69,
               humidity: 41.33,
               light: 31059,
               ph: 6.42,
               ec: 24.94,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 285,
           module_id: 1,
           date: '2018-12-01 13:00:00',
           status: {
               air_temperature: 23.87,
               water_temperature: 19.59,
               humidity: 41.46,
               light: 32507,
               ph: 6.57,
               ec: 25.98,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 286,
           module_id: 2,
           date: '2018-12-01 13:00:00',
           status: {
               air_temperature: 22.42,
               water_temperature: 17.51,
               humidity: 43.29,
               light: 32507,
               ph: 6.62,
               ec: 24.33,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 287,
           module_id: 1,
           date: '2018-12-01 14:00:00',
           status: {
               air_temperature: 23.3,
               water_temperature: 17.74,
               humidity: 46.11,
               light: 34833,
               ph: 6.4,
               ec: 22.31,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 288,
           module_id: 2,
           date: '2018-12-01 14:00:00',
           status: {
               air_temperature: 22.13,
               water_temperature: 20.37,
               humidity: 49.28,
               light: 34833,
               ph: 6.39,
               ec: 25.53,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 289,
           module_id: 1,
           date: '2018-12-01 15:00:00',
           status: {
               air_temperature: 23.78,
               water_temperature: 18.46,
               humidity: 42.52,
               light: 0,
               ph: 6.55,
               ec: 23.65,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 290,
           module_id: 2,
           date: '2018-12-01 15:00:00',
           status: {
               air_temperature: 24.68,
               water_temperature: 20.22,
               humidity: 41.21,
               light: 0,
               ph: 6.52,
               ec: 25.37,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 291,
           module_id: 1,
           date: '2018-12-01 16:00:00',
           status: {
               air_temperature: 23.08,
               water_temperature: 16.58,
               humidity: 44.36,
               light: 94,
               ph: 6.56,
               ec: 23.21,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 292,
           module_id: 2,
           date: '2018-12-01 16:00:00',
           status: {
               air_temperature: 25.11,
               water_temperature: 17.63,
               humidity: 49.42,
               light: 94,
               ph: 6.48,
               ec: 25.8,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 293,
           module_id: 1,
           date: '2018-12-01 17:00:00',
           status: {
               air_temperature: 22.71,
               water_temperature: 17.51,
               humidity: 45.62,
               light: 730,
               ph: 6.33,
               ec: 24.04,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 294,
           module_id: 2,
           date: '2018-12-01 17:00:00',
           status: {
               air_temperature: 24.21,
               water_temperature: 17.06,
               humidity: 46.5,
               light: 730,
               ph: 6.57,
               ec: 22.09,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 295,
           module_id: 1,
           date: '2018-12-01 18:00:00',
           status: {
               air_temperature: 25.62,
               water_temperature: 18.4,
               humidity: 46.3,
               light: 2754,
               ph: 6.69,
               ec: 25.46,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 296,
           module_id: 2,
           date: '2018-12-01 18:00:00',
           status: {
               air_temperature: 23.65,
               water_temperature: 18.78,
               humidity: 46.09,
               light: 2754,
               ph: 6.7,
               ec: 25.58,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 297,
           module_id: 1,
           date: '2018-12-01 19:00:00',
           status: {
               air_temperature: 24.91,
               water_temperature: 18.46,
               humidity: 49.55,
               light: 5414,
               ph: 6.38,
               ec: 23.78,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 298,
           module_id: 2,
           date: '2018-12-01 19:00:00',
           status: {
               air_temperature: 23.68,
               water_temperature: 16.67,
               humidity: 43.57,
               light: 5414,
               ph: 6.3,
               ec: 26.09,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 299,
           module_id: 1,
           date: '2018-12-01 20:00:00',
           status: {
               air_temperature: 22.25,
               water_temperature: 20.05,
               humidity: 42.2,
               light: 5911,
               ph: 6.58,
               ec: 25.55,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 300,
           module_id: 2,
           date: '2018-12-01 20:00:00',
           status: {
               air_temperature: 25.61,
               water_temperature: 20.27,
               humidity: 49.6,
               light: 5911,
               ph: 6.53,
               ec: 26.07,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 301,
           module_id: 1,
           date: '2018-12-01 21:00:00',
           status: {
               air_temperature: 23.91,
               water_temperature: 19.6,
               humidity: 41,
               light: 7059,
               ph: 6.48,
               ec: 25.97,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 302,
           module_id: 2,
           date: '2018-12-01 21:00:00',
           status: {
               air_temperature: 22.83,
               water_temperature: 17.61,
               humidity: 41.72,
               light: 7059,
               ph: 6.55,
               ec: 24.71,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 303,
           module_id: 1,
           date: '2018-12-01 22:00:00',
           status: {
               air_temperature: 24.09,
               water_temperature: 18.33,
               humidity: 43.62,
               light: 9314,
               ph: 6.65,
               ec: 22.16,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 304,
           module_id: 2,
           date: '2018-12-01 22:00:00',
           status: {
               air_temperature: 22.95,
               water_temperature: 19.65,
               humidity: 45.29,
               light: 9314,
               ph: 6.48,
               ec: 22.35,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 305,
           module_id: 1,
           date: '2018-12-01 23:00:00',
           status: {
               air_temperature: 22.81,
               water_temperature: 17.5,
               humidity: 47.2,
               light: 11499,
               ph: 6.69,
               ec: 24.79,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 306,
           module_id: 2,
           date: '2018-12-01 23:00:00',
           status: {
               air_temperature: 22.11,
               water_temperature: 18.1,
               humidity: 41.69,
               light: 11499,
               ph: 6.56,
               ec: 22.18,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 307,
           module_id: 1,
           date: '2018-12-02 00:00:00',
           status: {
               air_temperature: 22.75,
               water_temperature: 17.98,
               humidity: 49.6,
               light: 12671,
               ph: 6.35,
               ec: 24.73,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 308,
           module_id: 2,
           date: '2018-12-02 00:00:00',
           status: {
               air_temperature: 22.52,
               water_temperature: 17.93,
               humidity: 49.42,
               light: 12671,
               ph: 6.59,
               ec: 25.42,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 309,
           module_id: 1,
           date: '2018-12-02 01:00:00',
           status: {
               air_temperature: 24.37,
               water_temperature: 20.12,
               humidity: 48.91,
               light: 14551,
               ph: 6.53,
               ec: 25.17,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 310,
           module_id: 2,
           date: '2018-12-02 01:00:00',
           status: {
               air_temperature: 22.76,
               water_temperature: 16.78,
               humidity: 43.07,
               light: 14551,
               ph: 6.7,
               ec: 26.16,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 311,
           module_id: 1,
           date: '2018-12-02 02:00:00',
           status: {
               air_temperature: 22.16,
               water_temperature: 18.1,
               humidity: 42,
               light: 16269,
               ph: 6.59,
               ec: 26.09,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 312,
           module_id: 2,
           date: '2018-12-02 02:00:00',
           status: {
               air_temperature: 22.43,
               water_temperature: 19.22,
               humidity: 41.38,
               light: 16269,
               ph: 6.39,
               ec: 22.48,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 313,
           module_id: 1,
           date: '2018-12-02 03:00:00',
           status: {
               air_temperature: 23.39,
               water_temperature: 19.01,
               humidity: 41.86,
               light: 18879,
               ph: 6.3,
               ec: 24.96,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 314,
           module_id: 2,
           date: '2018-12-02 03:00:00',
           status: {
               air_temperature: 23.18,
               water_temperature: 17.47,
               humidity: 48.96,
               light: 18879,
               ph: 6.62,
               ec: 25.39,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 315,
           module_id: 1,
           date: '2018-12-02 04:00:00',
           status: {
               air_temperature: 25.95,
               water_temperature: 18.4,
               humidity: 41.42,
               light: 19582,
               ph: 6.42,
               ec: 22.87,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 316,
           module_id: 2,
           date: '2018-12-02 04:00:00',
           status: {
               air_temperature: 25.43,
               water_temperature: 17.68,
               humidity: 46.95,
               light: 19582,
               ph: 6.31,
               ec: 24.34,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 317,
           module_id: 1,
           date: '2018-12-02 05:00:00',
           status: {
               air_temperature: 24.99,
               water_temperature: 17.39,
               humidity: 43.2,
               light: 20544,
               ph: 6.39,
               ec: 26.46,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 318,
           module_id: 2,
           date: '2018-12-02 05:00:00',
           status: {
               air_temperature: 23.89,
               water_temperature: 17.77,
               humidity: 44.27,
               light: 20544,
               ph: 6.69,
               ec: 25.68,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 319,
           module_id: 1,
           date: '2018-12-02 06:00:00',
           status: {
               air_temperature: 23.98,
               water_temperature: 19.43,
               humidity: 49.04,
               light: 22959,
               ph: 6.68,
               ec: 24.84,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 320,
           module_id: 2,
           date: '2018-12-02 06:00:00',
           status: {
               air_temperature: 24.46,
               water_temperature: 19.56,
               humidity: 40.56,
               light: 22959,
               ph: 6.5,
               ec: 24.88,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 321,
           module_id: 1,
           date: '2018-12-02 07:00:00',
           status: {
               air_temperature: 25.84,
               water_temperature: 18.62,
               humidity: 48.5,
               light: 23628,
               ph: 6.6,
               ec: 24.45,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 322,
           module_id: 2,
           date: '2018-12-02 07:00:00',
           status: {
               air_temperature: 23.94,
               water_temperature: 19.33,
               humidity: 40.16,
               light: 23628,
               ph: 6.44,
               ec: 22.64,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 323,
           module_id: 1,
           date: '2018-12-02 08:00:00',
           status: {
               air_temperature: 22.77,
               water_temperature: 17.36,
               humidity: 46.87,
               light: 25855,
               ph: 6.49,
               ec: 23.81,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 324,
           module_id: 2,
           date: '2018-12-02 08:00:00',
           status: {
               air_temperature: 23.53,
               water_temperature: 19.36,
               humidity: 40.05,
               light: 25855,
               ph: 6.54,
               ec: 24.35,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 325,
           module_id: 1,
           date: '2018-12-02 09:00:00',
           status: {
               air_temperature: 23.85,
               water_temperature: 18.55,
               humidity: 47.62,
               light: 27971,
               ph: 6.41,
               ec: 24.87,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 326,
           module_id: 2,
           date: '2018-12-02 09:00:00',
           status: {
               air_temperature: 22.26,
               water_temperature: 20.34,
               humidity: 45.62,
               light: 27971,
               ph: 6.48,
               ec: 24.93,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 327,
           module_id: 1,
           date: '2018-12-02 10:00:00',
           status: {
               air_temperature: 25.65,
               water_temperature: 18.57,
               humidity: 43.81,
               light: 29823,
               ph: 6.47,
               ec: 26.18,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 328,
           module_id: 2,
           date: '2018-12-02 10:00:00',
           status: {
               air_temperature: 25.82,
               water_temperature: 20.24,
               humidity: 49.85,
               light: 29823,
               ph: 6.43,
               ec: 22.41,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 329,
           module_id: 1,
           date: '2018-12-02 11:00:00',
           status: {
               air_temperature: 23.19,
               water_temperature: 18.13,
               humidity: 45.62,
               light: 30748,
               ph: 6.49,
               ec: 22.26,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 330,
           module_id: 2,
           date: '2018-12-02 11:00:00',
           status: {
               air_temperature: 22.67,
               water_temperature: 18.49,
               humidity: 41.01,
               light: 30748,
               ph: 6.68,
               ec: 22.5,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 331,
           module_id: 1,
           date: '2018-12-02 12:00:00',
           status: {
               air_temperature: 24.27,
               water_temperature: 17.77,
               humidity: 44.74,
               light: 32719,
               ph: 6.68,
               ec: 22.33,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 332,
           module_id: 2,
           date: '2018-12-02 12:00:00',
           status: {
               air_temperature: 25.58,
               water_temperature: 19.96,
               humidity: 46.23,
               light: 32719,
               ph: 6.61,
               ec: 25.62,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 333,
           module_id: 1,
           date: '2018-12-02 13:00:00',
           status: {
               air_temperature: 23.63,
               water_temperature: 17.52,
               humidity: 41.87,
               light: 34446,
               ph: 6.59,
               ec: 22.69,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 334,
           module_id: 2,
           date: '2018-12-02 13:00:00',
           status: {
               air_temperature: 25.19,
               water_temperature: 20.1,
               humidity: 44.04,
               light: 34446,
               ph: 6.52,
               ec: 25.64,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 335,
           module_id: 1,
           date: '2018-12-02 14:00:00',
           status: {
               air_temperature: 22.91,
               water_temperature: 16.64,
               humidity: 44.59,
               light: 36863,
               ph: 6.39,
               ec: 23.35,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 336,
           module_id: 2,
           date: '2018-12-02 14:00:00',
           status: {
               air_temperature: 22.98,
               water_temperature: 17.79,
               humidity: 40.37,
               light: 36863,
               ph: 6.39,
               ec: 26.71,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 337,
           module_id: 1,
           date: '2018-12-02 15:00:00',
           status: {
               air_temperature: 22.03,
               water_temperature: 17.22,
               humidity: 44.5,
               light: 0,
               ph: 6.34,
               ec: 26.88,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 338,
           module_id: 2,
           date: '2018-12-02 15:00:00',
           status: {
               air_temperature: 25.94,
               water_temperature: 19.39,
               humidity: 45.86,
               light: 0,
               ph: 6.48,
               ec: 24.71,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 339,
           module_id: 1,
           date: '2018-12-02 16:00:00',
           status: {
               air_temperature: 24.67,
               water_temperature: 20.07,
               humidity: 46.06,
               light: 2540,
               ph: 6.62,
               ec: 26.27,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 340,
           module_id: 2,
           date: '2018-12-02 16:00:00',
           status: {
               air_temperature: 25.47,
               water_temperature: 19.34,
               humidity: 48.24,
               light: 2540,
               ph: 6.38,
               ec: 24.57,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 341,
           module_id: 1,
           date: '2018-12-02 17:00:00',
           status: {
               air_temperature: 24.79,
               water_temperature: 17.46,
               humidity: 48.6,
               light: 4886,
               ph: 6.51,
               ec: 24.66,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 342,
           module_id: 2,
           date: '2018-12-02 17:00:00',
           status: {
               air_temperature: 25.25,
               water_temperature: 18.91,
               humidity: 40.96,
               light: 4886,
               ph: 6.38,
               ec: 23.9,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 343,
           module_id: 1,
           date: '2018-12-02 18:00:00',
           status: {
               air_temperature: 24,
               water_temperature: 17.47,
               humidity: 47.02,
               light: 6920,
               ph: 6.3,
               ec: 25.76,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 344,
           module_id: 2,
           date: '2018-12-02 18:00:00',
           status: {
               air_temperature: 25.28,
               water_temperature: 18.58,
               humidity: 47.36,
               light: 6920,
               ph: 6.54,
               ec: 26.5,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 345,
           module_id: 1,
           date: '2018-12-02 19:00:00',
           status: {
               air_temperature: 23.45,
               water_temperature: 17.59,
               humidity: 43.28,
               light: 7901,
               ph: 6.69,
               ec: 23.04,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 346,
           module_id: 2,
           date: '2018-12-02 19:00:00',
           status: {
               air_temperature: 26,
               water_temperature: 18.83,
               humidity: 41.3,
               light: 7901,
               ph: 6.54,
               ec: 24.56,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 347,
           module_id: 1,
           date: '2018-12-02 20:00:00',
           status: {
               air_temperature: 24.91,
               water_temperature: 17.32,
               humidity: 47.93,
               light: 8703,
               ph: 6.39,
               ec: 26.84,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 348,
           module_id: 2,
           date: '2018-12-02 20:00:00',
           status: {
               air_temperature: 23.09,
               water_temperature: 18.23,
               humidity: 48.21,
               light: 8703,
               ph: 6.59,
               ec: 25.45,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 349,
           module_id: 1,
           date: '2018-12-02 21:00:00',
           status: {
               air_temperature: 24.89,
               water_temperature: 18.58,
               humidity: 42.94,
               light: 9368,
               ph: 6.3,
               ec: 24.47,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 350,
           module_id: 2,
           date: '2018-12-02 21:00:00',
           status: {
               air_temperature: 22.23,
               water_temperature: 18.85,
               humidity: 48.64,
               light: 9368,
               ph: 6.41,
               ec: 22.29,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 351,
           module_id: 1,
           date: '2018-12-02 22:00:00',
           status: {
               air_temperature: 22.97,
               water_temperature: 16.64,
               humidity: 48.31,
               light: 11674,
               ph: 6.64,
               ec: 25.97,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 352,
           module_id: 2,
           date: '2018-12-02 22:00:00',
           status: {
               air_temperature: 22.53,
               water_temperature: 19.08,
               humidity: 45.3,
               light: 11674,
               ph: 6.49,
               ec: 26.92,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 353,
           module_id: 1,
           date: '2018-12-02 23:00:00',
           status: {
               air_temperature: 22.4,
               water_temperature: 19.51,
               humidity: 49.52,
               light: 13963,
               ph: 6.59,
               ec: 24.49,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 354,
           module_id: 2,
           date: '2018-12-02 23:00:00',
           status: {
               air_temperature: 24.18,
               water_temperature: 16.54,
               humidity: 47.38,
               light: 13963,
               ph: 6.7,
               ec: 26.44,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 355,
           module_id: 1,
           date: '2018-12-03 00:00:00',
           status: {
               air_temperature: 25.04,
               water_temperature: 18.01,
               humidity: 46.38,
               light: 16353,
               ph: 6.55,
               ec: 26.5,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 356,
           module_id: 2,
           date: '2018-12-03 00:00:00',
           status: {
               air_temperature: 25.55,
               water_temperature: 19.67,
               humidity: 46.74,
               light: 16353,
               ph: 6.65,
               ec: 22.02,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 357,
           module_id: 1,
           date: '2018-12-03 01:00:00',
           status: {
               air_temperature: 22.98,
               water_temperature: 18.38,
               humidity: 45.03,
               light: 18252,
               ph: 6.7,
               ec: 23.64,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 358,
           module_id: 2,
           date: '2018-12-03 01:00:00',
           status: {
               air_temperature: 22,
               water_temperature: 18.76,
               humidity: 40.95,
               light: 18252,
               ph: 6.64,
               ec: 26.64,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 359,
           module_id: 1,
           date: '2018-12-03 02:00:00',
           status: {
               air_temperature: 25.11,
               water_temperature: 18.09,
               humidity: 49.45,
               light: 20878,
               ph: 6.45,
               ec: 23.35,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 360,
           module_id: 2,
           date: '2018-12-03 02:00:00',
           status: {
               air_temperature: 22.91,
               water_temperature: 17.51,
               humidity: 43.6,
               light: 20878,
               ph: 6.51,
               ec: 25.1,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 361,
           module_id: 1,
           date: '2018-12-03 03:00:00',
           status: {
               air_temperature: 22.89,
               water_temperature: 19.93,
               humidity: 44.62,
               light: 23343,
               ph: 6.67,
               ec: 22.66,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 362,
           module_id: 2,
           date: '2018-12-03 03:00:00',
           status: {
               air_temperature: 22.59,
               water_temperature: 19.46,
               humidity: 43.98,
               light: 23343,
               ph: 6.56,
               ec: 24.22,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 363,
           module_id: 1,
           date: '2018-12-03 04:00:00',
           status: {
               air_temperature: 22.78,
               water_temperature: 20.03,
               humidity: 42.34,
               light: 25872,
               ph: 6.43,
               ec: 23.2,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 364,
           module_id: 2,
           date: '2018-12-03 04:00:00',
           status: {
               air_temperature: 25.3,
               water_temperature: 19.5,
               humidity: 46.38,
               light: 25872,
               ph: 6.4,
               ec: 23,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 365,
           module_id: 1,
           date: '2018-12-03 05:00:00',
           status: {
               air_temperature: 23.64,
               water_temperature: 19.82,
               humidity: 42.59,
               light: 27694,
               ph: 6.55,
               ec: 26.33,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 366,
           module_id: 2,
           date: '2018-12-03 05:00:00',
           status: {
               air_temperature: 25.82,
               water_temperature: 18.88,
               humidity: 47.96,
               light: 27694,
               ph: 6.64,
               ec: 24.46,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 367,
           module_id: 1,
           date: '2018-12-03 06:00:00',
           status: {
               air_temperature: 22.39,
               water_temperature: 17.39,
               humidity: 43.44,
               light: 27876,
               ph: 6.69,
               ec: 23.03,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 368,
           module_id: 2,
           date: '2018-12-03 06:00:00',
           status: {
               air_temperature: 25.29,
               water_temperature: 18.4,
               humidity: 47.84,
               light: 27876,
               ph: 6.66,
               ec: 24.93,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 369,
           module_id: 1,
           date: '2018-12-03 07:00:00',
           status: {
               air_temperature: 23.75,
               water_temperature: 19.86,
               humidity: 47.76,
               light: 30465,
               ph: 6.58,
               ec: 24.12,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 370,
           module_id: 2,
           date: '2018-12-03 07:00:00',
           status: {
               air_temperature: 24.38,
               water_temperature: 18.44,
               humidity: 44.26,
               light: 30465,
               ph: 6.68,
               ec: 23.45,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 371,
           module_id: 1,
           date: '2018-12-03 08:00:00',
           status: {
               air_temperature: 23.41,
               water_temperature: 18.02,
               humidity: 47.03,
               light: 32185,
               ph: 6.69,
               ec: 26.57,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 372,
           module_id: 2,
           date: '2018-12-03 08:00:00',
           status: {
               air_temperature: 23.01,
               water_temperature: 17.29,
               humidity: 42.24,
               light: 32185,
               ph: 6.33,
               ec: 22.54,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 373,
           module_id: 1,
           date: '2018-12-03 09:00:00',
           status: {
               air_temperature: 24.27,
               water_temperature: 18.28,
               humidity: 48.71,
               light: 33426,
               ph: 6.61,
               ec: 22.59,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 374,
           module_id: 2,
           date: '2018-12-03 09:00:00',
           status: {
               air_temperature: 24.18,
               water_temperature: 19.35,
               humidity: 48.55,
               light: 33426,
               ph: 6.45,
               ec: 26.76,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 375,
           module_id: 1,
           date: '2018-12-03 10:00:00',
           status: {
               air_temperature: 24.61,
               water_temperature: 19.78,
               humidity: 41.16,
               light: 33475,
               ph: 6.41,
               ec: 24.75,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 376,
           module_id: 2,
           date: '2018-12-03 10:00:00',
           status: {
               air_temperature: 25.14,
               water_temperature: 16.52,
               humidity: 41.13,
               light: 33475,
               ph: 6.5,
               ec: 22.73,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 377,
           module_id: 1,
           date: '2018-12-03 11:00:00',
           status: {
               air_temperature: 25.68,
               water_temperature: 17.91,
               humidity: 47.98,
               light: 34647,
               ph: 6.69,
               ec: 22.01,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 378,
           module_id: 2,
           date: '2018-12-03 11:00:00',
           status: {
               air_temperature: 24.78,
               water_temperature: 19.35,
               humidity: 45.93,
               light: 34647,
               ph: 6.3,
               ec: 23.69,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 379,
           module_id: 1,
           date: '2018-12-03 12:00:00',
           status: {
               air_temperature: 25.86,
               water_temperature: 18.41,
               humidity: 45.55,
               light: 37255,
               ph: 6.64,
               ec: 25.67,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 380,
           module_id: 2,
           date: '2018-12-03 12:00:00',
           status: {
               air_temperature: 22.35,
               water_temperature: 18.85,
               humidity: 43.28,
               light: 37255,
               ph: 6.67,
               ec: 23.4,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 381,
           module_id: 1,
           date: '2018-12-03 13:00:00',
           status: {
               air_temperature: 23.51,
               water_temperature: 17.25,
               humidity: 44.92,
               light: 38016,
               ph: 6.68,
               ec: 25.06,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 382,
           module_id: 2,
           date: '2018-12-03 13:00:00',
           status: {
               air_temperature: 24.04,
               water_temperature: 18.28,
               humidity: 40.85,
               light: 38016,
               ph: 6.36,
               ec: 22.16,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 383,
           module_id: 1,
           date: '2018-12-03 14:00:00',
           status: {
               air_temperature: 24.7,
               water_temperature: 20.02,
               humidity: 42.56,
               light: 39430,
               ph: 6.61,
               ec: 23.01,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 384,
           module_id: 2,
           date: '2018-12-03 14:00:00',
           status: {
               air_temperature: 23.17,
               water_temperature: 19.22,
               humidity: 44.6,
               light: 39430,
               ph: 6.67,
               ec: 26.49,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 385,
           module_id: 1,
           date: '2018-12-03 15:00:00',
           status: {
               air_temperature: 24.01,
               water_temperature: 20.4,
               humidity: 40.66,
               light: 0,
               ph: 6.7,
               ec: 22.85,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 386,
           module_id: 2,
           date: '2018-12-03 15:00:00',
           status: {
               air_temperature: 22.12,
               water_temperature: 18.58,
               humidity: 42.4,
               light: 0,
               ph: 6.54,
               ec: 23.3,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 387,
           module_id: 1,
           date: '2018-12-03 16:00:00',
           status: {
               air_temperature: 24.28,
               water_temperature: 18.9,
               humidity: 45.95,
               light: 2179,
               ph: 6.31,
               ec: 22.41,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 388,
           module_id: 2,
           date: '2018-12-03 16:00:00',
           status: {
               air_temperature: 25.3,
               water_temperature: 19.06,
               humidity: 43.89,
               light: 2179,
               ph: 6.34,
               ec: 26.87,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 389,
           module_id: 1,
           date: '2018-12-03 17:00:00',
           status: {
               air_temperature: 24.07,
               water_temperature: 17.74,
               humidity: 46.56,
               light: 4390,
               ph: 6.62,
               ec: 22.74,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 390,
           module_id: 2,
           date: '2018-12-03 17:00:00',
           status: {
               air_temperature: 24.3,
               water_temperature: 17.2,
               humidity: 42.16,
               light: 4390,
               ph: 6.48,
               ec: 22.2,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 391,
           module_id: 1,
           date: '2018-12-03 18:00:00',
           status: {
               air_temperature: 24.72,
               water_temperature: 16.67,
               humidity: 41.88,
               light: 6114,
               ph: 6.39,
               ec: 25.57,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 392,
           module_id: 2,
           date: '2018-12-03 18:00:00',
           status: {
               air_temperature: 24.44,
               water_temperature: 17.46,
               humidity: 47.52,
               light: 6114,
               ph: 6.51,
               ec: 26.51,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 393,
           module_id: 1,
           date: '2018-12-03 19:00:00',
           status: {
               air_temperature: 24.77,
               water_temperature: 16.92,
               humidity: 44.83,
               light: 7709,
               ph: 6.34,
               ec: 25.87,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 394,
           module_id: 2,
           date: '2018-12-03 19:00:00',
           status: {
               air_temperature: 24.15,
               water_temperature: 17.16,
               humidity: 48.99,
               light: 7709,
               ph: 6.5,
               ec: 22.74,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 395,
           module_id: 1,
           date: '2018-12-03 20:00:00',
           status: {
               air_temperature: 25.47,
               water_temperature: 18.18,
               humidity: 48.17,
               light: 8737,
               ph: 6.39,
               ec: 22.08,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 396,
           module_id: 2,
           date: '2018-12-03 20:00:00',
           status: {
               air_temperature: 22.4,
               water_temperature: 20.31,
               humidity: 45.56,
               light: 8737,
               ph: 6.68,
               ec: 24.67,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 397,
           module_id: 1,
           date: '2018-12-03 21:00:00',
           status: {
               air_temperature: 25.05,
               water_temperature: 16.69,
               humidity: 46.59,
               light: 9034,
               ph: 6.32,
               ec: 25.31,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 398,
           module_id: 2,
           date: '2018-12-03 21:00:00',
           status: {
               air_temperature: 24.61,
               water_temperature: 18.96,
               humidity: 42.56,
               light: 9034,
               ph: 6.65,
               ec: 24.56,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 399,
           module_id: 1,
           date: '2018-12-03 22:00:00',
           status: {
               air_temperature: 24.42,
               water_temperature: 18.77,
               humidity: 44.08,
               light: 10702,
               ph: 6.41,
               ec: 22.68,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 400,
           module_id: 2,
           date: '2018-12-03 22:00:00',
           status: {
               air_temperature: 25.14,
               water_temperature: 18.47,
               humidity: 46.98,
               light: 10702,
               ph: 6.67,
               ec: 24.99,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 401,
           module_id: 1,
           date: '2018-12-03 23:00:00',
           status: {
               air_temperature: 22.78,
               water_temperature: 19.94,
               humidity: 46.75,
               light: 10918,
               ph: 6.64,
               ec: 24.35,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 402,
           module_id: 2,
           date: '2018-12-03 23:00:00',
           status: {
               air_temperature: 25.16,
               water_temperature: 17.97,
               humidity: 43.7,
               light: 10918,
               ph: 6.55,
               ec: 26.5,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 403,
           module_id: 1,
           date: '2018-12-04 00:00:00',
           status: {
               air_temperature: 23.65,
               water_temperature: 16.54,
               humidity: 49.51,
               light: 10926,
               ph: 6.47,
               ec: 25.52,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 404,
           module_id: 2,
           date: '2018-12-04 00:00:00',
           status: {
               air_temperature: 24.51,
               water_temperature: 20.06,
               humidity: 47.85,
               light: 10926,
               ph: 6.61,
               ec: 24.08,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 405,
           module_id: 1,
           date: '2018-12-04 01:00:00',
           status: {
               air_temperature: 25.21,
               water_temperature: 19.05,
               humidity: 41.8,
               light: 13157,
               ph: 6.48,
               ec: 24.87,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 406,
           module_id: 2,
           date: '2018-12-04 01:00:00',
           status: {
               air_temperature: 25.09,
               water_temperature: 18.72,
               humidity: 47.88,
               light: 13157,
               ph: 6.63,
               ec: 24.09,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 407,
           module_id: 1,
           date: '2018-12-04 02:00:00',
           status: {
               air_temperature: 25.55,
               water_temperature: 20.45,
               humidity: 42.36,
               light: 13737,
               ph: 6.67,
               ec: 23.46,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 408,
           module_id: 2,
           date: '2018-12-04 02:00:00',
           status: {
               air_temperature: 23.07,
               water_temperature: 18.04,
               humidity: 40.99,
               light: 13737,
               ph: 6.53,
               ec: 22.01,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 409,
           module_id: 1,
           date: '2018-12-04 03:00:00',
           status: {
               air_temperature: 22.9,
               water_temperature: 19.07,
               humidity: 44.73,
               light: 15554,
               ph: 6.3,
               ec: 23.17,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 410,
           module_id: 2,
           date: '2018-12-04 03:00:00',
           status: {
               air_temperature: 23.98,
               water_temperature: 20.33,
               humidity: 40.05,
               light: 15554,
               ph: 6.68,
               ec: 23.3,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 411,
           module_id: 1,
           date: '2018-12-04 04:00:00',
           status: {
               air_temperature: 22.58,
               water_temperature: 20.3,
               humidity: 48.45,
               light: 16311,
               ph: 6.57,
               ec: 24.34,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 412,
           module_id: 2,
           date: '2018-12-04 04:00:00',
           status: {
               air_temperature: 23.84,
               water_temperature: 18.38,
               humidity: 40.96,
               light: 16311,
               ph: 6.46,
               ec: 25.62,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 413,
           module_id: 1,
           date: '2018-12-04 05:00:00',
           status: {
               air_temperature: 23.95,
               water_temperature: 16.71,
               humidity: 46.91,
               light: 18830,
               ph: 6.5,
               ec: 25.01,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 414,
           module_id: 2,
           date: '2018-12-04 05:00:00',
           status: {
               air_temperature: 25.78,
               water_temperature: 17.93,
               humidity: 46.38,
               light: 18830,
               ph: 6.64,
               ec: 25.42,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 415,
           module_id: 1,
           date: '2018-12-04 06:00:00',
           status: {
               air_temperature: 22.79,
               water_temperature: 18.82,
               humidity: 40.09,
               light: 20564,
               ph: 6.55,
               ec: 25.1,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 416,
           module_id: 2,
           date: '2018-12-04 06:00:00',
           status: {
               air_temperature: 24.86,
               water_temperature: 16.8,
               humidity: 46.27,
               light: 20564,
               ph: 6.31,
               ec: 26.85,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 417,
           module_id: 1,
           date: '2018-12-04 07:00:00',
           status: {
               air_temperature: 24.53,
               water_temperature: 20.37,
               humidity: 42.55,
               light: 21958,
               ph: 6.35,
               ec: 24.89,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 418,
           module_id: 2,
           date: '2018-12-04 07:00:00',
           status: {
               air_temperature: 25.51,
               water_temperature: 19.4,
               humidity: 48.37,
               light: 21958,
               ph: 6.66,
               ec: 23.7,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 419,
           module_id: 1,
           date: '2018-12-04 08:00:00',
           status: {
               air_temperature: 23.7,
               water_temperature: 19.54,
               humidity: 47.02,
               light: 23081,
               ph: 6.39,
               ec: 24.98,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 420,
           module_id: 2,
           date: '2018-12-04 08:00:00',
           status: {
               air_temperature: 24.25,
               water_temperature: 17.09,
               humidity: 47.46,
               light: 23081,
               ph: 6.68,
               ec: 25.37,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 421,
           module_id: 1,
           date: '2018-12-04 09:00:00',
           status: {
               air_temperature: 24.1,
               water_temperature: 17.7,
               humidity: 45.01,
               light: 24792,
               ph: 6.36,
               ec: 25.96,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 422,
           module_id: 2,
           date: '2018-12-04 09:00:00',
           status: {
               air_temperature: 23.39,
               water_temperature: 18.25,
               humidity: 43.6,
               light: 24792,
               ph: 6.52,
               ec: 22.16,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 423,
           module_id: 1,
           date: '2018-12-04 10:00:00',
           status: {
               air_temperature: 23.06,
               water_temperature: 17.51,
               humidity: 47.04,
               light: 25738,
               ph: 6.63,
               ec: 26.92,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 424,
           module_id: 2,
           date: '2018-12-04 10:00:00',
           status: {
               air_temperature: 24.52,
               water_temperature: 19.66,
               humidity: 44.19,
               light: 25738,
               ph: 6.5,
               ec: 22.02,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 425,
           module_id: 1,
           date: '2018-12-04 11:00:00',
           status: {
               air_temperature: 23.35,
               water_temperature: 19.3,
               humidity: 41.5,
               light: 26385,
               ph: 6.33,
               ec: 22.4,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 426,
           module_id: 2,
           date: '2018-12-04 11:00:00',
           status: {
               air_temperature: 25.43,
               water_temperature: 19.1,
               humidity: 46.58,
               light: 26385,
               ph: 6.45,
               ec: 24.7,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 427,
           module_id: 1,
           date: '2018-12-04 12:00:00',
           status: {
               air_temperature: 22.76,
               water_temperature: 18.74,
               humidity: 41.17,
               light: 26686,
               ph: 6.54,
               ec: 25.46,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 428,
           module_id: 2,
           date: '2018-12-04 12:00:00',
           status: {
               air_temperature: 23.4,
               water_temperature: 16.6,
               humidity: 49.61,
               light: 26686,
               ph: 6.36,
               ec: 23.15,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 429,
           module_id: 1,
           date: '2018-12-04 13:00:00',
           status: {
               air_temperature: 22.17,
               water_temperature: 20.39,
               humidity: 48.66,
               light: 26881,
               ph: 6.68,
               ec: 25.96,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 430,
           module_id: 2,
           date: '2018-12-04 13:00:00',
           status: {
               air_temperature: 25.99,
               water_temperature: 18.02,
               humidity: 42.45,
               light: 26881,
               ph: 6.44,
               ec: 26.42,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 431,
           module_id: 1,
           date: '2018-12-04 14:00:00',
           status: {
               air_temperature: 25.25,
               water_temperature: 20.03,
               humidity: 40.34,
               light: 29562,
               ph: 6.54,
               ec: 24.8,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 432,
           module_id: 2,
           date: '2018-12-04 14:00:00',
           status: {
               air_temperature: 24.88,
               water_temperature: 18.52,
               humidity: 43.72,
               light: 29562,
               ph: 6.58,
               ec: 24.27,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 433,
           module_id: 1,
           date: '2018-12-04 15:00:00',
           status: {
               air_temperature: 23.78,
               water_temperature: 17.23,
               humidity: 43.91,
               light: 0,
               ph: 6.44,
               ec: 23.23,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 434,
           module_id: 2,
           date: '2018-12-04 15:00:00',
           status: {
               air_temperature: 25.28,
               water_temperature: 18.95,
               humidity: 43.41,
               light: 0,
               ph: 6.37,
               ec: 26.08,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 435,
           module_id: 1,
           date: '2018-12-04 16:00:00',
           status: {
               air_temperature: 25.57,
               water_temperature: 16.68,
               humidity: 48.97,
               light: 2481,
               ph: 6.5,
               ec: 25.82,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 436,
           module_id: 2,
           date: '2018-12-04 16:00:00',
           status: {
               air_temperature: 24.94,
               water_temperature: 20.09,
               humidity: 44.2,
               light: 2481,
               ph: 6.47,
               ec: 26.06,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 437,
           module_id: 1,
           date: '2018-12-04 17:00:00',
           status: {
               air_temperature: 25.51,
               water_temperature: 20.4,
               humidity: 44.15,
               light: 2888,
               ph: 6.66,
               ec: 22.1,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 438,
           module_id: 2,
           date: '2018-12-04 17:00:00',
           status: {
               air_temperature: 25.43,
               water_temperature: 16.91,
               humidity: 46.39,
               light: 2888,
               ph: 6.55,
               ec: 25.47,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 439,
           module_id: 1,
           date: '2018-12-04 18:00:00',
           status: {
               air_temperature: 22.53,
               water_temperature: 18.34,
               humidity: 47.47,
               light: 3695,
               ph: 6.53,
               ec: 22.23,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 440,
           module_id: 2,
           date: '2018-12-04 18:00:00',
           status: {
               air_temperature: 25.91,
               water_temperature: 18.19,
               humidity: 43.38,
               light: 3695,
               ph: 6.38,
               ec: 25.03,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 441,
           module_id: 1,
           date: '2018-12-04 19:00:00',
           status: {
               air_temperature: 25.06,
               water_temperature: 20.08,
               humidity: 49.01,
               light: 6137,
               ph: 6.34,
               ec: 26.82,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 442,
           module_id: 2,
           date: '2018-12-04 19:00:00',
           status: {
               air_temperature: 25.87,
               water_temperature: 20.05,
               humidity: 44.28,
               light: 6137,
               ph: 6.38,
               ec: 26.78,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 443,
           module_id: 1,
           date: '2018-12-04 20:00:00',
           status: {
               air_temperature: 23.61,
               water_temperature: 19.65,
               humidity: 43.03,
               light: 8069,
               ph: 6.3,
               ec: 25.24,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 444,
           module_id: 2,
           date: '2018-12-04 20:00:00',
           status: {
               air_temperature: 22.47,
               water_temperature: 19.31,
               humidity: 44.58,
               light: 8069,
               ph: 6.35,
               ec: 23.6,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 445,
           module_id: 1,
           date: '2018-12-04 21:00:00',
           status: {
               air_temperature: 22.74,
               water_temperature: 20.4,
               humidity: 47.62,
               light: 9724,
               ph: 6.31,
               ec: 24.52,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 446,
           module_id: 2,
           date: '2018-12-04 21:00:00',
           status: {
               air_temperature: 25.37,
               water_temperature: 16.63,
               humidity: 48.01,
               light: 9724,
               ph: 6.48,
               ec: 26.95,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 447,
           module_id: 1,
           date: '2018-12-04 22:00:00',
           status: {
               air_temperature: 22.84,
               water_temperature: 18.7,
               humidity: 40.23,
               light: 12139,
               ph: 6.39,
               ec: 24.7,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 448,
           module_id: 2,
           date: '2018-12-04 22:00:00',
           status: {
               air_temperature: 25.8,
               water_temperature: 18.16,
               humidity: 49.77,
               light: 12139,
               ph: 6.64,
               ec: 22.1,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 449,
           module_id: 1,
           date: '2018-12-04 23:00:00',
           status: {
               air_temperature: 23.19,
               water_temperature: 20.47,
               humidity: 40.65,
               light: 12717,
               ph: 6.47,
               ec: 25.84,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 450,
           module_id: 2,
           date: '2018-12-04 23:00:00',
           status: {
               air_temperature: 23.71,
               water_temperature: 19.47,
               humidity: 42.49,
               light: 12717,
               ph: 6.68,
               ec: 24.88,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 451,
           module_id: 1,
           date: '2018-12-05 00:00:00',
           status: {
               air_temperature: 22.32,
               water_temperature: 19.17,
               humidity: 44.79,
               light: 12721,
               ph: 6.33,
               ec: 24.66,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 452,
           module_id: 2,
           date: '2018-12-05 00:00:00',
           status: {
               air_temperature: 24.92,
               water_temperature: 18.95,
               humidity: 43.62,
               light: 12721,
               ph: 6.51,
               ec: 22.42,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 453,
           module_id: 1,
           date: '2018-12-05 01:00:00',
           status: {
               air_temperature: 22.62,
               water_temperature: 19.5,
               humidity: 49.96,
               light: 14286,
               ph: 6.7,
               ec: 23.49,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 454,
           module_id: 2,
           date: '2018-12-05 01:00:00',
           status: {
               air_temperature: 22.65,
               water_temperature: 19.94,
               humidity: 44.31,
               light: 14286,
               ph: 6.67,
               ec: 25.27,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 455,
           module_id: 1,
           date: '2018-12-05 02:00:00',
           status: {
               air_temperature: 22.52,
               water_temperature: 19.22,
               humidity: 45.87,
               light: 15078,
               ph: 6.54,
               ec: 22.09,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 456,
           module_id: 2,
           date: '2018-12-05 02:00:00',
           status: {
               air_temperature: 22.08,
               water_temperature: 19.8,
               humidity: 45.11,
               light: 15078,
               ph: 6.42,
               ec: 23.17,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 457,
           module_id: 1,
           date: '2018-12-05 03:00:00',
           status: {
               air_temperature: 23.77,
               water_temperature: 18.92,
               humidity: 47.74,
               light: 16622,
               ph: 6.44,
               ec: 22.58,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 458,
           module_id: 2,
           date: '2018-12-05 03:00:00',
           status: {
               air_temperature: 25.74,
               water_temperature: 20.08,
               humidity: 41.02,
               light: 16622,
               ph: 6.48,
               ec: 26.07,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 459,
           module_id: 1,
           date: '2018-12-05 04:00:00',
           status: {
               air_temperature: 25.58,
               water_temperature: 20.31,
               humidity: 48.65,
               light: 18414,
               ph: 6.6,
               ec: 25.48,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 460,
           module_id: 2,
           date: '2018-12-05 04:00:00',
           status: {
               air_temperature: 22.44,
               water_temperature: 18.85,
               humidity: 41.2,
               light: 18414,
               ph: 6.61,
               ec: 25.34,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 461,
           module_id: 1,
           date: '2018-12-05 05:00:00',
           status: {
               air_temperature: 22.64,
               water_temperature: 16.74,
               humidity: 49.88,
               light: 18575,
               ph: 6.41,
               ec: 25.54,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 462,
           module_id: 2,
           date: '2018-12-05 05:00:00',
           status: {
               air_temperature: 24,
               water_temperature: 20.16,
               humidity: 41.19,
               light: 18575,
               ph: 6.48,
               ec: 25.79,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 463,
           module_id: 1,
           date: '2018-12-05 06:00:00',
           status: {
               air_temperature: 25.37,
               water_temperature: 16.99,
               humidity: 48.87,
               light: 19533,
               ph: 6.6,
               ec: 25.64,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 464,
           module_id: 2,
           date: '2018-12-05 06:00:00',
           status: {
               air_temperature: 23.28,
               water_temperature: 16.71,
               humidity: 45.44,
               light: 19533,
               ph: 6.48,
               ec: 25.05,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 465,
           module_id: 1,
           date: '2018-12-05 07:00:00',
           status: {
               air_temperature: 23.56,
               water_temperature: 17.78,
               humidity: 43.58,
               light: 20706,
               ph: 6.34,
               ec: 26.73,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 466,
           module_id: 2,
           date: '2018-12-05 07:00:00',
           status: {
               air_temperature: 24.11,
               water_temperature: 18.7,
               humidity: 48.95,
               light: 20706,
               ph: 6.48,
               ec: 26.34,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 467,
           module_id: 1,
           date: '2018-12-05 08:00:00',
           status: {
               air_temperature: 23.96,
               water_temperature: 17.11,
               humidity: 42.86,
               light: 21226,
               ph: 6.33,
               ec: 26.75,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 468,
           module_id: 2,
           date: '2018-12-05 08:00:00',
           status: {
               air_temperature: 25.19,
               water_temperature: 18.25,
               humidity: 46.26,
               light: 21226,
               ph: 6.69,
               ec: 23.86,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 469,
           module_id: 1,
           date: '2018-12-05 09:00:00',
           status: {
               air_temperature: 24.55,
               water_temperature: 17.84,
               humidity: 42.03,
               light: 21475,
               ph: 6.56,
               ec: 25.91,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 470,
           module_id: 2,
           date: '2018-12-05 09:00:00',
           status: {
               air_temperature: 23.22,
               water_temperature: 18.54,
               humidity: 47.66,
               light: 21475,
               ph: 6.3,
               ec: 22.27,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 471,
           module_id: 1,
           date: '2018-12-05 10:00:00',
           status: {
               air_temperature: 22.73,
               water_temperature: 16.53,
               humidity: 42.65,
               light: 22685,
               ph: 6.69,
               ec: 23.29,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 472,
           module_id: 2,
           date: '2018-12-05 10:00:00',
           status: {
               air_temperature: 25.7,
               water_temperature: 18.57,
               humidity: 43.9,
               light: 22685,
               ph: 6.7,
               ec: 24.48,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 473,
           module_id: 1,
           date: '2018-12-05 11:00:00',
           status: {
               air_temperature: 25.07,
               water_temperature: 17.45,
               humidity: 44.27,
               light: 24592,
               ph: 6.45,
               ec: 22.11,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 474,
           module_id: 2,
           date: '2018-12-05 11:00:00',
           status: {
               air_temperature: 22.81,
               water_temperature: 18.33,
               humidity: 47.33,
               light: 24592,
               ph: 6.6,
               ec: 22,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 475,
           module_id: 1,
           date: '2018-12-05 12:00:00',
           status: {
               air_temperature: 25.47,
               water_temperature: 16.56,
               humidity: 43.91,
               light: 24880,
               ph: 6.63,
               ec: 22.28,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 476,
           module_id: 2,
           date: '2018-12-05 12:00:00',
           status: {
               air_temperature: 25.55,
               water_temperature: 16.71,
               humidity: 46.35,
               light: 24880,
               ph: 6.58,
               ec: 23,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 477,
           module_id: 1,
           date: '2018-12-05 13:00:00',
           status: {
               air_temperature: 24.8,
               water_temperature: 16.9,
               humidity: 45.26,
               light: 27391,
               ph: 6.45,
               ec: 24.3,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 478,
           module_id: 2,
           date: '2018-12-05 13:00:00',
           status: {
               air_temperature: 23.17,
               water_temperature: 16.63,
               humidity: 46.24,
               light: 27391,
               ph: 6.65,
               ec: 26.76,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 479,
           module_id: 1,
           date: '2018-12-05 14:00:00',
           status: {
               air_temperature: 23.48,
               water_temperature: 19.51,
               humidity: 49.49,
               light: 29756,
               ph: 6.47,
               ec: 22.84,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 480,
           module_id: 2,
           date: '2018-12-05 14:00:00',
           status: {
               air_temperature: 24.24,
               water_temperature: 19.3,
               humidity: 45.26,
               light: 29756,
               ph: 6.63,
               ec: 23.55,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 481,
           module_id: 1,
           date: '2018-12-05 15:00:00',
           status: {
               air_temperature: 24.98,
               water_temperature: 17.9,
               humidity: 49.73,
               light: 0,
               ph: 6.66,
               ec: 22.3,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 482,
           module_id: 2,
           date: '2018-12-05 15:00:00',
           status: {
               air_temperature: 22.62,
               water_temperature: 18.05,
               humidity: 48.52,
               light: 0,
               ph: 6.44,
               ec: 23.61,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 483,
           module_id: 1,
           date: '2018-12-05 16:00:00',
           status: {
               air_temperature: 23.16,
               water_temperature: 17.02,
               humidity: 41.19,
               light: 2527,
               ph: 6.7,
               ec: 26.66,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 484,
           module_id: 2,
           date: '2018-12-05 16:00:00',
           status: {
               air_temperature: 25.78,
               water_temperature: 17.89,
               humidity: 49.22,
               light: 2527,
               ph: 6.48,
               ec: 22.71,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 485,
           module_id: 1,
           date: '2018-12-05 17:00:00',
           status: {
               air_temperature: 25.7,
               water_temperature: 20.2,
               humidity: 42.94,
               light: 4944,
               ph: 6.42,
               ec: 24.42,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 486,
           module_id: 2,
           date: '2018-12-05 17:00:00',
           status: {
               air_temperature: 24.77,
               water_temperature: 19.75,
               humidity: 40.44,
               light: 4944,
               ph: 6.59,
               ec: 25.48,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 487,
           module_id: 1,
           date: '2018-12-05 18:00:00',
           status: {
               air_temperature: 24.53,
               water_temperature: 17.97,
               humidity: 42.03,
               light: 5792,
               ph: 6.41,
               ec: 23.05,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 488,
           module_id: 2,
           date: '2018-12-05 18:00:00',
           status: {
               air_temperature: 24.43,
               water_temperature: 16.81,
               humidity: 40.3,
               light: 5792,
               ph: 6.49,
               ec: 24.32,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 489,
           module_id: 1,
           date: '2018-12-05 19:00:00',
           status: {
               air_temperature: 22.38,
               water_temperature: 17.87,
               humidity: 49.6,
               light: 7182,
               ph: 6.38,
               ec: 24.26,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 490,
           module_id: 2,
           date: '2018-12-05 19:00:00',
           status: {
               air_temperature: 22.97,
               water_temperature: 20.43,
               humidity: 48.64,
               light: 7182,
               ph: 6.53,
               ec: 23.48,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 491,
           module_id: 1,
           date: '2018-12-05 20:00:00',
           status: {
               air_temperature: 23.05,
               water_temperature: 18.87,
               humidity: 45.77,
               light: 7289,
               ph: 6.55,
               ec: 23.34,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 492,
           module_id: 2,
           date: '2018-12-05 20:00:00',
           status: {
               air_temperature: 24.66,
               water_temperature: 19.05,
               humidity: 41.61,
               light: 7289,
               ph: 6.44,
               ec: 24.41,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 493,
           module_id: 1,
           date: '2018-12-05 21:00:00',
           status: {
               air_temperature: 22.07,
               water_temperature: 18.53,
               humidity: 47.56,
               light: 7997,
               ph: 6.66,
               ec: 24.29,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 494,
           module_id: 2,
           date: '2018-12-05 21:00:00',
           status: {
               air_temperature: 23.82,
               water_temperature: 18.32,
               humidity: 41.29,
               light: 7997,
               ph: 6.58,
               ec: 25.44,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 495,
           module_id: 1,
           date: '2018-12-05 22:00:00',
           status: {
               air_temperature: 24.83,
               water_temperature: 19.25,
               humidity: 48.52,
               light: 8183,
               ph: 6.55,
               ec: 25.37,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 496,
           module_id: 2,
           date: '2018-12-05 22:00:00',
           status: {
               air_temperature: 25.57,
               water_temperature: 16.84,
               humidity: 44.41,
               light: 8183,
               ph: 6.32,
               ec: 26.15,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 497,
           module_id: 1,
           date: '2018-12-05 23:00:00',
           status: {
               air_temperature: 22.74,
               water_temperature: 16.72,
               humidity: 41.97,
               light: 10639,
               ph: 6.38,
               ec: 24.72,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 498,
           module_id: 2,
           date: '2018-12-05 23:00:00',
           status: {
               air_temperature: 24.79,
               water_temperature: 19.75,
               humidity: 40.26,
               light: 10639,
               ph: 6.47,
               ec: 22.48,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 499,
           module_id: 1,
           date: '2018-12-06 00:00:00',
           status: {
               air_temperature: 23.56,
               water_temperature: 19.22,
               humidity: 45.91,
               light: 10868,
               ph: 6.61,
               ec: 23.44,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 500,
           module_id: 2,
           date: '2018-12-06 00:00:00',
           status: {
               air_temperature: 25.97,
               water_temperature: 20.47,
               humidity: 41.81,
               light: 10868,
               ph: 6.5,
               ec: 25.43,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 501,
           module_id: 1,
           date: '2018-12-06 01:00:00',
           status: {
               air_temperature: 25.91,
               water_temperature: 17.81,
               humidity: 44.29,
               light: 11992,
               ph: 6.41,
               ec: 22.37,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 502,
           module_id: 2,
           date: '2018-12-06 01:00:00',
           status: {
               air_temperature: 25.84,
               water_temperature: 17.8,
               humidity: 42.23,
               light: 11992,
               ph: 6.62,
               ec: 23,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 503,
           module_id: 1,
           date: '2018-12-06 02:00:00',
           status: {
               air_temperature: 22.24,
               water_temperature: 20,
               humidity: 42.6,
               light: 14519,
               ph: 6.4,
               ec: 23.19,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 504,
           module_id: 2,
           date: '2018-12-06 02:00:00',
           status: {
               air_temperature: 24.54,
               water_temperature: 19.71,
               humidity: 47.07,
               light: 14519,
               ph: 6.35,
               ec: 24.16,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 505,
           module_id: 1,
           date: '2018-12-06 03:00:00',
           status: {
               air_temperature: 24.55,
               water_temperature: 20.46,
               humidity: 45.14,
               light: 14913,
               ph: 6.4,
               ec: 23.74,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 506,
           module_id: 2,
           date: '2018-12-06 03:00:00',
           status: {
               air_temperature: 25.16,
               water_temperature: 19.93,
               humidity: 40.09,
               light: 14913,
               ph: 6.5,
               ec: 22.78,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 507,
           module_id: 1,
           date: '2018-12-06 04:00:00',
           status: {
               air_temperature: 22.66,
               water_temperature: 19.47,
               humidity: 45.36,
               light: 15541,
               ph: 6.33,
               ec: 24.54,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 508,
           module_id: 2,
           date: '2018-12-06 04:00:00',
           status: {
               air_temperature: 22.32,
               water_temperature: 18.75,
               humidity: 45.43,
               light: 15541,
               ph: 6.46,
               ec: 26.79,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 509,
           module_id: 1,
           date: '2018-12-06 05:00:00',
           status: {
               air_temperature: 25.88,
               water_temperature: 16.7,
               humidity: 47.88,
               light: 17780,
               ph: 6.64,
               ec: 25.41,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 510,
           module_id: 2,
           date: '2018-12-06 05:00:00',
           status: {
               air_temperature: 25.56,
               water_temperature: 17.8,
               humidity: 45.74,
               light: 17780,
               ph: 6.36,
               ec: 25.18,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 511,
           module_id: 1,
           date: '2018-12-06 06:00:00',
           status: {
               air_temperature: 22,
               water_temperature: 18.59,
               humidity: 40.1,
               light: 20097,
               ph: 6.58,
               ec: 25.7,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 512,
           module_id: 2,
           date: '2018-12-06 06:00:00',
           status: {
               air_temperature: 22.17,
               water_temperature: 19.23,
               humidity: 48.86,
               light: 20097,
               ph: 6.63,
               ec: 22.48,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 513,
           module_id: 1,
           date: '2018-12-06 07:00:00',
           status: {
               air_temperature: 23.37,
               water_temperature: 19.54,
               humidity: 45.87,
               light: 21139,
               ph: 6.63,
               ec: 23.75,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 514,
           module_id: 2,
           date: '2018-12-06 07:00:00',
           status: {
               air_temperature: 25.08,
               water_temperature: 17.83,
               humidity: 44.99,
               light: 21139,
               ph: 6.47,
               ec: 26.9,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 515,
           module_id: 1,
           date: '2018-12-06 08:00:00',
           status: {
               air_temperature: 22.78,
               water_temperature: 19.12,
               humidity: 45.28,
               light: 22316,
               ph: 6.31,
               ec: 23.23,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 516,
           module_id: 2,
           date: '2018-12-06 08:00:00',
           status: {
               air_temperature: 25.72,
               water_temperature: 20.3,
               humidity: 44.67,
               light: 22316,
               ph: 6.63,
               ec: 22.11,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 517,
           module_id: 1,
           date: '2018-12-06 09:00:00',
           status: {
               air_temperature: 23.72,
               water_temperature: 19.22,
               humidity: 41.04,
               light: 23202,
               ph: 6.54,
               ec: 23.21,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 518,
           module_id: 2,
           date: '2018-12-06 09:00:00',
           status: {
               air_temperature: 24,
               water_temperature: 17.11,
               humidity: 47.86,
               light: 23202,
               ph: 6.49,
               ec: 25.64,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 519,
           module_id: 1,
           date: '2018-12-06 10:00:00',
           status: {
               air_temperature: 24.73,
               water_temperature: 19.84,
               humidity: 48.81,
               light: 23501,
               ph: 6.66,
               ec: 26.46,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 520,
           module_id: 2,
           date: '2018-12-06 10:00:00',
           status: {
               air_temperature: 22.23,
               water_temperature: 18.32,
               humidity: 49.25,
               light: 23501,
               ph: 6.5,
               ec: 22.16,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 521,
           module_id: 1,
           date: '2018-12-06 11:00:00',
           status: {
               air_temperature: 24.86,
               water_temperature: 16.55,
               humidity: 42.77,
               light: 25968,
               ph: 6.62,
               ec: 23.2,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 522,
           module_id: 2,
           date: '2018-12-06 11:00:00',
           status: {
               air_temperature: 25.95,
               water_temperature: 18.66,
               humidity: 41.77,
               light: 25968,
               ph: 6.32,
               ec: 23.2,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 523,
           module_id: 1,
           date: '2018-12-06 12:00:00',
           status: {
               air_temperature: 23.01,
               water_temperature: 17.5,
               humidity: 48.05,
               light: 27742,
               ph: 6.54,
               ec: 22.45,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 524,
           module_id: 2,
           date: '2018-12-06 12:00:00',
           status: {
               air_temperature: 25.35,
               water_temperature: 20.14,
               humidity: 48.5,
               light: 27742,
               ph: 6.57,
               ec: 26.5,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 525,
           module_id: 1,
           date: '2018-12-06 13:00:00',
           status: {
               air_temperature: 25.57,
               water_temperature: 20.13,
               humidity: 43.34,
               light: 29430,
               ph: 6.62,
               ec: 23.72,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 526,
           module_id: 2,
           date: '2018-12-06 13:00:00',
           status: {
               air_temperature: 23.5,
               water_temperature: 19.06,
               humidity: 46.18,
               light: 29430,
               ph: 6.44,
               ec: 22.42,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 527,
           module_id: 1,
           date: '2018-12-06 14:00:00',
           status: {
               air_temperature: 23.34,
               water_temperature: 17.71,
               humidity: 47.46,
               light: 30735,
               ph: 6.32,
               ec: 22.58,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 528,
           module_id: 2,
           date: '2018-12-06 14:00:00',
           status: {
               air_temperature: 25.07,
               water_temperature: 18.26,
               humidity: 49.67,
               light: 30735,
               ph: 6.59,
               ec: 26.2,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 529,
           module_id: 1,
           date: '2018-12-06 15:00:00',
           status: {
               air_temperature: 23.91,
               water_temperature: 18.36,
               humidity: 42.16,
               light: 0,
               ph: 6.59,
               ec: 25.46,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 530,
           module_id: 2,
           date: '2018-12-06 15:00:00',
           status: {
               air_temperature: 24.99,
               water_temperature: 16.99,
               humidity: 48.07,
               light: 0,
               ph: 6.63,
               ec: 23.86,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 531,
           module_id: 1,
           date: '2018-12-06 16:00:00',
           status: {
               air_temperature: 23.68,
               water_temperature: 17.93,
               humidity: 47.54,
               light: 1653,
               ph: 6.51,
               ec: 26.35,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 532,
           module_id: 2,
           date: '2018-12-06 16:00:00',
           status: {
               air_temperature: 23.43,
               water_temperature: 19.1,
               humidity: 43.28,
               light: 1653,
               ph: 6.63,
               ec: 24.32,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 533,
           module_id: 1,
           date: '2018-12-06 17:00:00',
           status: {
               air_temperature: 24.92,
               water_temperature: 19.75,
               humidity: 41.26,
               light: 1874,
               ph: 6.65,
               ec: 26.75,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 534,
           module_id: 2,
           date: '2018-12-06 17:00:00',
           status: {
               air_temperature: 25.77,
               water_temperature: 16.61,
               humidity: 46.48,
               light: 1874,
               ph: 6.6,
               ec: 26.51,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 535,
           module_id: 1,
           date: '2018-12-06 18:00:00',
           status: {
               air_temperature: 25.07,
               water_temperature: 17.61,
               humidity: 46.49,
               light: 4526,
               ph: 6.62,
               ec: 23.72,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 536,
           module_id: 2,
           date: '2018-12-06 18:00:00',
           status: {
               air_temperature: 25.92,
               water_temperature: 19.06,
               humidity: 47.17,
               light: 4526,
               ph: 6.46,
               ec: 26.11,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 537,
           module_id: 1,
           date: '2018-12-06 19:00:00',
           status: {
               air_temperature: 22.6,
               water_temperature: 18.24,
               humidity: 48.3,
               light: 6385,
               ph: 6.51,
               ec: 26.06,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 538,
           module_id: 2,
           date: '2018-12-06 19:00:00',
           status: {
               air_temperature: 23.69,
               water_temperature: 20.33,
               humidity: 43.82,
               light: 6385,
               ph: 6.42,
               ec: 26.73,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 539,
           module_id: 1,
           date: '2018-12-06 20:00:00',
           status: {
               air_temperature: 22.18,
               water_temperature: 19.03,
               humidity: 44.39,
               light: 7649,
               ph: 6.52,
               ec: 22.99,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 540,
           module_id: 2,
           date: '2018-12-06 20:00:00',
           status: {
               air_temperature: 25.9,
               water_temperature: 16.61,
               humidity: 41.5,
               light: 7649,
               ph: 6.43,
               ec: 22.27,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 541,
           module_id: 1,
           date: '2018-12-06 21:00:00',
           status: {
               air_temperature: 23.63,
               water_temperature: 16.86,
               humidity: 41.7,
               light: 10219,
               ph: 6.67,
               ec: 23.47,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 542,
           module_id: 2,
           date: '2018-12-06 21:00:00',
           status: {
               air_temperature: 22.88,
               water_temperature: 18.89,
               humidity: 45.54,
               light: 10219,
               ph: 6.4,
               ec: 23.71,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 543,
           module_id: 1,
           date: '2018-12-06 22:00:00',
           status: {
               air_temperature: 23.4,
               water_temperature: 18.71,
               humidity: 43.58,
               light: 11075,
               ph: 6.33,
               ec: 24.4,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 544,
           module_id: 2,
           date: '2018-12-06 22:00:00',
           status: {
               air_temperature: 25.59,
               water_temperature: 20.27,
               humidity: 40.24,
               light: 11075,
               ph: 6.35,
               ec: 25.07,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 545,
           module_id: 1,
           date: '2018-12-06 23:00:00',
           status: {
               air_temperature: 24.81,
               water_temperature: 16.91,
               humidity: 49.04,
               light: 11504,
               ph: 6.47,
               ec: 22.36,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 546,
           module_id: 2,
           date: '2018-12-06 23:00:00',
           status: {
               air_temperature: 25.82,
               water_temperature: 16.8,
               humidity: 45.81,
               light: 11504,
               ph: 6.39,
               ec: 24.51,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 547,
           module_id: 1,
           date: '2018-12-07 00:00:00',
           status: {
               air_temperature: 24.5,
               water_temperature: 17.07,
               humidity: 44.67,
               light: 14172,
               ph: 6.65,
               ec: 26.12,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 548,
           module_id: 2,
           date: '2018-12-07 00:00:00',
           status: {
               air_temperature: 22.99,
               water_temperature: 18.07,
               humidity: 42.47,
               light: 14172,
               ph: 6.6,
               ec: 25.91,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 549,
           module_id: 1,
           date: '2018-12-07 01:00:00',
           status: {
               air_temperature: 24.12,
               water_temperature: 16.91,
               humidity: 44.46,
               light: 14552,
               ph: 6.7,
               ec: 25.32,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 550,
           module_id: 2,
           date: '2018-12-07 01:00:00',
           status: {
               air_temperature: 23.62,
               water_temperature: 17.01,
               humidity: 43.75,
               light: 14552,
               ph: 6.46,
               ec: 25.18,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 551,
           module_id: 1,
           date: '2018-12-07 02:00:00',
           status: {
               air_temperature: 25.42,
               water_temperature: 20.36,
               humidity: 43.73,
               light: 15471,
               ph: 6.65,
               ec: 23.15,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 552,
           module_id: 2,
           date: '2018-12-07 02:00:00',
           status: {
               air_temperature: 25.56,
               water_temperature: 19.59,
               humidity: 47.45,
               light: 15471,
               ph: 6.36,
               ec: 22.34,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 553,
           module_id: 1,
           date: '2018-12-07 03:00:00',
           status: {
               air_temperature: 22.45,
               water_temperature: 20.04,
               humidity: 45.08,
               light: 17888,
               ph: 6.3,
               ec: 25.04,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 554,
           module_id: 2,
           date: '2018-12-07 03:00:00',
           status: {
               air_temperature: 24.14,
               water_temperature: 18.95,
               humidity: 47.61,
               light: 17888,
               ph: 6.5,
               ec: 25.55,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 555,
           module_id: 1,
           date: '2018-12-07 04:00:00',
           status: {
               air_temperature: 24.14,
               water_temperature: 18.59,
               humidity: 40.6,
               light: 18060,
               ph: 6.32,
               ec: 23.55,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 556,
           module_id: 2,
           date: '2018-12-07 04:00:00',
           status: {
               air_temperature: 24.71,
               water_temperature: 17.86,
               humidity: 42.38,
               light: 18060,
               ph: 6.69,
               ec: 24.49,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 557,
           module_id: 1,
           date: '2018-12-07 05:00:00',
           status: {
               air_temperature: 23.33,
               water_temperature: 19.51,
               humidity: 40.68,
               light: 18454,
               ph: 6.56,
               ec: 22.86,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 558,
           module_id: 2,
           date: '2018-12-07 05:00:00',
           status: {
               air_temperature: 23.98,
               water_temperature: 17.18,
               humidity: 48.67,
               light: 18454,
               ph: 6.61,
               ec: 22.68,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 559,
           module_id: 1,
           date: '2018-12-07 06:00:00',
           status: {
               air_temperature: 25.22,
               water_temperature: 20.03,
               humidity: 43.71,
               light: 18454,
               ph: 6.46,
               ec: 22.64,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 560,
           module_id: 2,
           date: '2018-12-07 06:00:00',
           status: {
               air_temperature: 25.12,
               water_temperature: 20.09,
               humidity: 49.66,
               light: 18454,
               ph: 6.51,
               ec: 25.01,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 561,
           module_id: 1,
           date: '2018-12-07 07:00:00',
           status: {
               air_temperature: 24.67,
               water_temperature: 16.9,
               humidity: 49.31,
               light: 19972,
               ph: 6.33,
               ec: 25.02,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 562,
           module_id: 2,
           date: '2018-12-07 07:00:00',
           status: {
               air_temperature: 22.72,
               water_temperature: 17.02,
               humidity: 40.7,
               light: 19972,
               ph: 6.4,
               ec: 22.41,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 563,
           module_id: 1,
           date: '2018-12-07 08:00:00',
           status: {
               air_temperature: 24.51,
               water_temperature: 18.75,
               humidity: 48.38,
               light: 21193,
               ph: 6.57,
               ec: 23.65,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 564,
           module_id: 2,
           date: '2018-12-07 08:00:00',
           status: {
               air_temperature: 23.18,
               water_temperature: 20,
               humidity: 45.59,
               light: 21193,
               ph: 6.57,
               ec: 26.16,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 565,
           module_id: 1,
           date: '2018-12-07 09:00:00',
           status: {
               air_temperature: 23.37,
               water_temperature: 17.29,
               humidity: 47.21,
               light: 22508,
               ph: 6.44,
               ec: 23.18,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 566,
           module_id: 2,
           date: '2018-12-07 09:00:00',
           status: {
               air_temperature: 25.48,
               water_temperature: 19.39,
               humidity: 49.84,
               light: 22508,
               ph: 6.42,
               ec: 25.28,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 567,
           module_id: 1,
           date: '2018-12-07 10:00:00',
           status: {
               air_temperature: 23.44,
               water_temperature: 19.65,
               humidity: 47.85,
               light: 23014,
               ph: 6.45,
               ec: 26.48,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 568,
           module_id: 2,
           date: '2018-12-07 10:00:00',
           status: {
               air_temperature: 25.22,
               water_temperature: 17.33,
               humidity: 47.75,
               light: 23014,
               ph: 6.39,
               ec: 24.02,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 569,
           module_id: 1,
           date: '2018-12-07 11:00:00',
           status: {
               air_temperature: 22.38,
               water_temperature: 18.94,
               humidity: 44.4,
               light: 23681,
               ph: 6.63,
               ec: 26.23,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 570,
           module_id: 2,
           date: '2018-12-07 11:00:00',
           status: {
               air_temperature: 25.29,
               water_temperature: 18.37,
               humidity: 49.81,
               light: 23681,
               ph: 6.4,
               ec: 22.12,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 571,
           module_id: 1,
           date: '2018-12-07 12:00:00',
           status: {
               air_temperature: 24.67,
               water_temperature: 20.21,
               humidity: 41.84,
               light: 25255,
               ph: 6.47,
               ec: 22.36,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 572,
           module_id: 2,
           date: '2018-12-07 12:00:00',
           status: {
               air_temperature: 22.75,
               water_temperature: 18.53,
               humidity: 40.95,
               light: 25255,
               ph: 6.34,
               ec: 25.4,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 573,
           module_id: 1,
           date: '2018-12-07 13:00:00',
           status: {
               air_temperature: 25.64,
               water_temperature: 19.51,
               humidity: 41.26,
               light: 25711,
               ph: 6.41,
               ec: 23.52,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 574,
           module_id: 2,
           date: '2018-12-07 13:00:00',
           status: {
               air_temperature: 25.02,
               water_temperature: 16.88,
               humidity: 45.64,
               light: 25711,
               ph: 6.68,
               ec: 22.14,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 575,
           module_id: 1,
           date: '2018-12-07 14:00:00',
           status: {
               air_temperature: 22.91,
               water_temperature: 20.06,
               humidity: 47.8,
               light: 28235,
               ph: 6.58,
               ec: 24.69,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 576,
           module_id: 2,
           date: '2018-12-07 14:00:00',
           status: {
               air_temperature: 23.17,
               water_temperature: 17.08,
               humidity: 40.39,
               light: 28235,
               ph: 6.62,
               ec: 25.47,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 577,
           module_id: 1,
           date: '2018-12-07 15:00:00',
           status: {
               air_temperature: 22.68,
               water_temperature: 18.82,
               humidity: 47.72,
               light: 0,
               ph: 6.49,
               ec: 23.43,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 578,
           module_id: 2,
           date: '2018-12-07 15:00:00',
           status: {
               air_temperature: 22.33,
               water_temperature: 18.58,
               humidity: 48.13,
               light: 0,
               ph: 6.35,
               ec: 23.69,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 579,
           module_id: 1,
           date: '2018-12-07 16:00:00',
           status: {
               air_temperature: 22.65,
               water_temperature: 19.07,
               humidity: 47.61,
               light: 2645,
               ph: 6.57,
               ec: 25.6,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 580,
           module_id: 2,
           date: '2018-12-07 16:00:00',
           status: {
               air_temperature: 23.34,
               water_temperature: 17.53,
               humidity: 47.46,
               light: 2645,
               ph: 6.57,
               ec: 24.53,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 581,
           module_id: 1,
           date: '2018-12-07 17:00:00',
           status: {
               air_temperature: 25.46,
               water_temperature: 16.51,
               humidity: 49,
               light: 4885,
               ph: 6.47,
               ec: 22.05,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 582,
           module_id: 2,
           date: '2018-12-07 17:00:00',
           status: {
               air_temperature: 24.44,
               water_temperature: 19.34,
               humidity: 40.63,
               light: 4885,
               ph: 6.67,
               ec: 26.99,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 583,
           module_id: 1,
           date: '2018-12-07 18:00:00',
           status: {
               air_temperature: 25.12,
               water_temperature: 19.82,
               humidity: 41.93,
               light: 7377,
               ph: 6.51,
               ec: 24.55,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 584,
           module_id: 2,
           date: '2018-12-07 18:00:00',
           status: {
               air_temperature: 23.07,
               water_temperature: 19.6,
               humidity: 41.73,
               light: 7377,
               ph: 6.63,
               ec: 26.09,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 585,
           module_id: 1,
           date: '2018-12-07 19:00:00',
           status: {
               air_temperature: 22.83,
               water_temperature: 16.69,
               humidity: 42.11,
               light: 8688,
               ph: 6.52,
               ec: 24.98,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 586,
           module_id: 2,
           date: '2018-12-07 19:00:00',
           status: {
               air_temperature: 25.9,
               water_temperature: 18.76,
               humidity: 47.75,
               light: 8688,
               ph: 6.5,
               ec: 24.54,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 587,
           module_id: 1,
           date: '2018-12-07 20:00:00',
           status: {
               air_temperature: 22.32,
               water_temperature: 17.6,
               humidity: 42.65,
               light: 10002,
               ph: 6.68,
               ec: 24.32,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 588,
           module_id: 2,
           date: '2018-12-07 20:00:00',
           status: {
               air_temperature: 24.9,
               water_temperature: 17.4,
               humidity: 43.16,
               light: 10002,
               ph: 6.43,
               ec: 22.57,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 589,
           module_id: 1,
           date: '2018-12-07 21:00:00',
           status: {
               air_temperature: 23.21,
               water_temperature: 17.71,
               humidity: 46.36,
               light: 10451,
               ph: 6.57,
               ec: 24.51,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 590,
           module_id: 2,
           date: '2018-12-07 21:00:00',
           status: {
               air_temperature: 23.63,
               water_temperature: 17.27,
               humidity: 41.36,
               light: 10451,
               ph: 6.47,
               ec: 24.47,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 591,
           module_id: 1,
           date: '2018-12-07 22:00:00',
           status: {
               air_temperature: 23.5,
               water_temperature: 19.79,
               humidity: 40.7,
               light: 10540,
               ph: 6.63,
               ec: 24.54,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 592,
           module_id: 2,
           date: '2018-12-07 22:00:00',
           status: {
               air_temperature: 22.27,
               water_temperature: 19.5,
               humidity: 41.5,
               light: 10540,
               ph: 6.34,
               ec: 22.74,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 593,
           module_id: 1,
           date: '2018-12-07 23:00:00',
           status: {
               air_temperature: 25.14,
               water_temperature: 18.72,
               humidity: 40.22,
               light: 10941,
               ph: 6.34,
               ec: 24.91,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 594,
           module_id: 2,
           date: '2018-12-07 23:00:00',
           status: {
               air_temperature: 22.5,
               water_temperature: 19.52,
               humidity: 46.26,
               light: 10941,
               ph: 6.51,
               ec: 24.77,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 595,
           module_id: 1,
           date: '2018-12-08 00:00:00',
           status: {
               air_temperature: 22.44,
               water_temperature: 16.63,
               humidity: 43.87,
               light: 12271,
               ph: 6.66,
               ec: 23.4,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 596,
           module_id: 2,
           date: '2018-12-08 00:00:00',
           status: {
               air_temperature: 25.1,
               water_temperature: 17.6,
               humidity: 43.53,
               light: 12271,
               ph: 6.37,
               ec: 25.26,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 597,
           module_id: 1,
           date: '2018-12-08 01:00:00',
           status: {
               air_temperature: 22.49,
               water_temperature: 19.62,
               humidity: 47.54,
               light: 12509,
               ph: 6.33,
               ec: 25.73,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 598,
           module_id: 2,
           date: '2018-12-08 01:00:00',
           status: {
               air_temperature: 24.99,
               water_temperature: 18.09,
               humidity: 43.02,
               light: 12509,
               ph: 6.44,
               ec: 23.54,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 599,
           module_id: 1,
           date: '2018-12-08 02:00:00',
           status: {
               air_temperature: 25.4,
               water_temperature: 17.97,
               humidity: 42.66,
               light: 14009,
               ph: 6.38,
               ec: 24.04,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 600,
           module_id: 2,
           date: '2018-12-08 02:00:00',
           status: {
               air_temperature: 22.58,
               water_temperature: 17.47,
               humidity: 40.07,
               light: 14009,
               ph: 6.69,
               ec: 26.42,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 601,
           module_id: 1,
           date: '2018-12-08 03:00:00',
           status: {
               air_temperature: 24.52,
               water_temperature: 19.92,
               humidity: 40.69,
               light: 15824,
               ph: 6.56,
               ec: 22.61,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 602,
           module_id: 2,
           date: '2018-12-08 03:00:00',
           status: {
               air_temperature: 22.49,
               water_temperature: 16.61,
               humidity: 42.95,
               light: 15824,
               ph: 6.34,
               ec: 22,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 603,
           module_id: 1,
           date: '2018-12-08 04:00:00',
           status: {
               air_temperature: 23.1,
               water_temperature: 17.96,
               humidity: 48.68,
               light: 16135,
               ph: 6.66,
               ec: 26.43,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 604,
           module_id: 2,
           date: '2018-12-08 04:00:00',
           status: {
               air_temperature: 25.79,
               water_temperature: 19.19,
               humidity: 49.18,
               light: 16135,
               ph: 6.56,
               ec: 24.07,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 605,
           module_id: 1,
           date: '2018-12-08 05:00:00',
           status: {
               air_temperature: 23.29,
               water_temperature: 17.23,
               humidity: 49.82,
               light: 18306,
               ph: 6.38,
               ec: 22.78,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 606,
           module_id: 2,
           date: '2018-12-08 05:00:00',
           status: {
               air_temperature: 22.69,
               water_temperature: 16.64,
               humidity: 46.85,
               light: 18306,
               ph: 6.63,
               ec: 24.85,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 607,
           module_id: 1,
           date: '2018-12-08 06:00:00',
           status: {
               air_temperature: 23.99,
               water_temperature: 16.77,
               humidity: 43.76,
               light: 18713,
               ph: 6.37,
               ec: 23.69,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 608,
           module_id: 2,
           date: '2018-12-08 06:00:00',
           status: {
               air_temperature: 25.31,
               water_temperature: 17.73,
               humidity: 47.51,
               light: 18713,
               ph: 6.63,
               ec: 22.4,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 609,
           module_id: 1,
           date: '2018-12-08 07:00:00',
           status: {
               air_temperature: 22.94,
               water_temperature: 16.5,
               humidity: 41.44,
               light: 19323,
               ph: 6.63,
               ec: 23.39,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 610,
           module_id: 2,
           date: '2018-12-08 07:00:00',
           status: {
               air_temperature: 22.56,
               water_temperature: 18.4,
               humidity: 43.57,
               light: 19323,
               ph: 6.53,
               ec: 25.21,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 611,
           module_id: 1,
           date: '2018-12-08 08:00:00',
           status: {
               air_temperature: 22.69,
               water_temperature: 20.44,
               humidity: 48.37,
               light: 20301,
               ph: 6.67,
               ec: 23.09,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 612,
           module_id: 2,
           date: '2018-12-08 08:00:00',
           status: {
               air_temperature: 24.87,
               water_temperature: 18.32,
               humidity: 48.72,
               light: 20301,
               ph: 6.51,
               ec: 23.56,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 613,
           module_id: 1,
           date: '2018-12-08 09:00:00',
           status: {
               air_temperature: 22.1,
               water_temperature: 19.26,
               humidity: 47.04,
               light: 20468,
               ph: 6.32,
               ec: 22.61,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 614,
           module_id: 2,
           date: '2018-12-08 09:00:00',
           status: {
               air_temperature: 25.32,
               water_temperature: 17.82,
               humidity: 47.56,
               light: 20468,
               ph: 6.63,
               ec: 25.7,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 615,
           module_id: 1,
           date: '2018-12-08 10:00:00',
           status: {
               air_temperature: 25.37,
               water_temperature: 16.94,
               humidity: 47.74,
               light: 22572,
               ph: 6.39,
               ec: 24.52,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 616,
           module_id: 2,
           date: '2018-12-08 10:00:00',
           status: {
               air_temperature: 22.71,
               water_temperature: 16.52,
               humidity: 43.69,
               light: 22572,
               ph: 6.33,
               ec: 24.16,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 617,
           module_id: 1,
           date: '2018-12-08 11:00:00',
           status: {
               air_temperature: 23.44,
               water_temperature: 16.98,
               humidity: 44.83,
               light: 23081,
               ph: 6.66,
               ec: 25.76,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 618,
           module_id: 2,
           date: '2018-12-08 11:00:00',
           status: {
               air_temperature: 22.15,
               water_temperature: 16.69,
               humidity: 46.69,
               light: 23081,
               ph: 6.48,
               ec: 26.61,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 619,
           module_id: 1,
           date: '2018-12-08 12:00:00',
           status: {
               air_temperature: 25.71,
               water_temperature: 18.97,
               humidity: 43.66,
               light: 24322,
               ph: 6.34,
               ec: 22.6,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 620,
           module_id: 2,
           date: '2018-12-08 12:00:00',
           status: {
               air_temperature: 22.56,
               water_temperature: 19.27,
               humidity: 43.39,
               light: 24322,
               ph: 6.48,
               ec: 22.17,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 621,
           module_id: 1,
           date: '2018-12-08 13:00:00',
           status: {
               air_temperature: 25.84,
               water_temperature: 17.94,
               humidity: 41.06,
               light: 24337,
               ph: 6.33,
               ec: 26.41,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 622,
           module_id: 2,
           date: '2018-12-08 13:00:00',
           status: {
               air_temperature: 25.72,
               water_temperature: 19.71,
               humidity: 40.61,
               light: 24337,
               ph: 6.45,
               ec: 24.79,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 623,
           module_id: 1,
           date: '2018-12-08 14:00:00',
           status: {
               air_temperature: 25.65,
               water_temperature: 17.73,
               humidity: 42.95,
               light: 24900,
               ph: 6.41,
               ec: 22.77,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 624,
           module_id: 2,
           date: '2018-12-08 14:00:00',
           status: {
               air_temperature: 24.89,
               water_temperature: 19.18,
               humidity: 49.63,
               light: 24900,
               ph: 6.63,
               ec: 25.81,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 625,
           module_id: 1,
           date: '2018-12-08 15:00:00',
           status: {
               air_temperature: 23.53,
               water_temperature: 17.74,
               humidity: 49.47,
               light: 0,
               ph: 6.55,
               ec: 23.72,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 626,
           module_id: 2,
           date: '2018-12-08 15:00:00',
           status: {
               air_temperature: 23.59,
               water_temperature: 20.18,
               humidity: 48.18,
               light: 0,
               ph: 6.47,
               ec: 24.26,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 627,
           module_id: 1,
           date: '2018-12-08 16:00:00',
           status: {
               air_temperature: 23.74,
               water_temperature: 20.05,
               humidity: 47.21,
               light: 2125,
               ph: 6.67,
               ec: 23.84,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 628,
           module_id: 2,
           date: '2018-12-08 16:00:00',
           status: {
               air_temperature: 22.77,
               water_temperature: 18.1,
               humidity: 45.44,
               light: 2125,
               ph: 6.45,
               ec: 26.63,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 629,
           module_id: 1,
           date: '2018-12-08 17:00:00',
           status: {
               air_temperature: 25.87,
               water_temperature: 18.86,
               humidity: 46.75,
               light: 4490,
               ph: 6.68,
               ec: 26.86,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 630,
           module_id: 2,
           date: '2018-12-08 17:00:00',
           status: {
               air_temperature: 25.96,
               water_temperature: 17.56,
               humidity: 42.45,
               light: 4490,
               ph: 6.46,
               ec: 24.45,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 631,
           module_id: 1,
           date: '2018-12-08 18:00:00',
           status: {
               air_temperature: 25.1,
               water_temperature: 18.71,
               humidity: 47.76,
               light: 7054,
               ph: 6.51,
               ec: 23.62,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 632,
           module_id: 2,
           date: '2018-12-08 18:00:00',
           status: {
               air_temperature: 24.38,
               water_temperature: 16.56,
               humidity: 44.53,
               light: 7054,
               ph: 6.31,
               ec: 26.53,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 633,
           module_id: 1,
           date: '2018-12-08 19:00:00',
           status: {
               air_temperature: 22.16,
               water_temperature: 19.06,
               humidity: 47.52,
               light: 8785,
               ph: 6.35,
               ec: 24.32,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 634,
           module_id: 2,
           date: '2018-12-08 19:00:00',
           status: {
               air_temperature: 22.62,
               water_temperature: 20.3,
               humidity: 48.99,
               light: 8785,
               ph: 6.46,
               ec: 25.22,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 635,
           module_id: 1,
           date: '2018-12-08 20:00:00',
           status: {
               air_temperature: 24.08,
               water_temperature: 19.78,
               humidity: 47.18,
               light: 10261,
               ph: 6.31,
               ec: 23.12,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 636,
           module_id: 2,
           date: '2018-12-08 20:00:00',
           status: {
               air_temperature: 22,
               water_temperature: 17.24,
               humidity: 44.94,
               light: 10261,
               ph: 6.65,
               ec: 23.44,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 637,
           module_id: 1,
           date: '2018-12-08 21:00:00',
           status: {
               air_temperature: 22.6,
               water_temperature: 19.47,
               humidity: 41.77,
               light: 12919,
               ph: 6.49,
               ec: 25.4,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 638,
           module_id: 2,
           date: '2018-12-08 21:00:00',
           status: {
               air_temperature: 23.1,
               water_temperature: 18.15,
               humidity: 48.55,
               light: 12919,
               ph: 6.61,
               ec: 23.31,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 639,
           module_id: 1,
           date: '2018-12-08 22:00:00',
           status: {
               air_temperature: 22.17,
               water_temperature: 18.38,
               humidity: 44.11,
               light: 14512,
               ph: 6.49,
               ec: 26.7,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 640,
           module_id: 2,
           date: '2018-12-08 22:00:00',
           status: {
               air_temperature: 25.95,
               water_temperature: 19.96,
               humidity: 49.74,
               light: 14512,
               ph: 6.34,
               ec: 26.53,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 641,
           module_id: 1,
           date: '2018-12-08 23:00:00',
           status: {
               air_temperature: 23.03,
               water_temperature: 16.56,
               humidity: 47.46,
               light: 16512,
               ph: 6.36,
               ec: 25.77,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 642,
           module_id: 2,
           date: '2018-12-08 23:00:00',
           status: {
               air_temperature: 23.47,
               water_temperature: 18.71,
               humidity: 42.85,
               light: 16512,
               ph: 6.36,
               ec: 23.24,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 643,
           module_id: 1,
           date: '2018-12-09 00:00:00',
           status: {
               air_temperature: 24.88,
               water_temperature: 17.06,
               humidity: 48.72,
               light: 17827,
               ph: 6.34,
               ec: 25.25,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 644,
           module_id: 2,
           date: '2018-12-09 00:00:00',
           status: {
               air_temperature: 25.16,
               water_temperature: 19.18,
               humidity: 44.44,
               light: 17827,
               ph: 6.37,
               ec: 25.03,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 645,
           module_id: 1,
           date: '2018-12-09 01:00:00',
           status: {
               air_temperature: 24.34,
               water_temperature: 18.4,
               humidity: 44.12,
               light: 19034,
               ph: 6.35,
               ec: 25.28,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 646,
           module_id: 2,
           date: '2018-12-09 01:00:00',
           status: {
               air_temperature: 23.01,
               water_temperature: 18.86,
               humidity: 46.94,
               light: 19034,
               ph: 6.68,
               ec: 25.53,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 647,
           module_id: 1,
           date: '2018-12-09 02:00:00',
           status: {
               air_temperature: 22.77,
               water_temperature: 17.46,
               humidity: 42.99,
               light: 21112,
               ph: 6.36,
               ec: 24.91,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 648,
           module_id: 2,
           date: '2018-12-09 02:00:00',
           status: {
               air_temperature: 25.47,
               water_temperature: 19.73,
               humidity: 45.56,
               light: 21112,
               ph: 6.53,
               ec: 26.3,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 649,
           module_id: 1,
           date: '2018-12-09 03:00:00',
           status: {
               air_temperature: 24.81,
               water_temperature: 20.02,
               humidity: 40.21,
               light: 22643,
               ph: 6.52,
               ec: 26.18,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 650,
           module_id: 2,
           date: '2018-12-09 03:00:00',
           status: {
               air_temperature: 23.07,
               water_temperature: 16.52,
               humidity: 43.26,
               light: 22643,
               ph: 6.52,
               ec: 26.14,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 651,
           module_id: 1,
           date: '2018-12-09 04:00:00',
           status: {
               air_temperature: 25.95,
               water_temperature: 19.52,
               humidity: 47.62,
               light: 24917,
               ph: 6.68,
               ec: 23.5,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 652,
           module_id: 2,
           date: '2018-12-09 04:00:00',
           status: {
               air_temperature: 25.14,
               water_temperature: 20.29,
               humidity: 49.26,
               light: 24917,
               ph: 6.44,
               ec: 25.81,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 653,
           module_id: 1,
           date: '2018-12-09 05:00:00',
           status: {
               air_temperature: 25.44,
               water_temperature: 16.75,
               humidity: 42.73,
               light: 26618,
               ph: 6.47,
               ec: 25.15,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 654,
           module_id: 2,
           date: '2018-12-09 05:00:00',
           status: {
               air_temperature: 23.49,
               water_temperature: 19.83,
               humidity: 43.66,
               light: 26618,
               ph: 6.38,
               ec: 24.89,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 655,
           module_id: 1,
           date: '2018-12-09 06:00:00',
           status: {
               air_temperature: 25.56,
               water_temperature: 17.17,
               humidity: 45.28,
               light: 26713,
               ph: 6.63,
               ec: 23.97,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 656,
           module_id: 2,
           date: '2018-12-09 06:00:00',
           status: {
               air_temperature: 24.67,
               water_temperature: 18.09,
               humidity: 46.65,
               light: 26713,
               ph: 6.31,
               ec: 24.08,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 657,
           module_id: 1,
           date: '2018-12-09 07:00:00',
           status: {
               air_temperature: 25.79,
               water_temperature: 19.44,
               humidity: 42.81,
               light: 27488,
               ph: 6.33,
               ec: 24.49,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 658,
           module_id: 2,
           date: '2018-12-09 07:00:00',
           status: {
               air_temperature: 23.18,
               water_temperature: 19.3,
               humidity: 46.65,
               light: 27488,
               ph: 6.32,
               ec: 23.95,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 659,
           module_id: 1,
           date: '2018-12-09 08:00:00',
           status: {
               air_temperature: 23.37,
               water_temperature: 19.25,
               humidity: 41.64,
               light: 27747,
               ph: 6.7,
               ec: 24.32,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 660,
           module_id: 2,
           date: '2018-12-09 08:00:00',
           status: {
               air_temperature: 23.13,
               water_temperature: 18.74,
               humidity: 42.42,
               light: 27747,
               ph: 6.38,
               ec: 24.14,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 661,
           module_id: 1,
           date: '2018-12-09 09:00:00',
           status: {
               air_temperature: 24.92,
               water_temperature: 19.88,
               humidity: 42.46,
               light: 29223,
               ph: 6.62,
               ec: 24.57,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 662,
           module_id: 2,
           date: '2018-12-09 09:00:00',
           status: {
               air_temperature: 24.41,
               water_temperature: 20.12,
               humidity: 41.68,
               light: 29223,
               ph: 6.4,
               ec: 25.14,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 663,
           module_id: 1,
           date: '2018-12-09 10:00:00',
           status: {
               air_temperature: 22.57,
               water_temperature: 18.87,
               humidity: 45.7,
               light: 30728,
               ph: 6.64,
               ec: 24.07,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 664,
           module_id: 2,
           date: '2018-12-09 10:00:00',
           status: {
               air_temperature: 22.45,
               water_temperature: 16.88,
               humidity: 44.22,
               light: 30728,
               ph: 6.57,
               ec: 23.83,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 665,
           module_id: 1,
           date: '2018-12-09 11:00:00',
           status: {
               air_temperature: 24.26,
               water_temperature: 16.99,
               humidity: 40.86,
               light: 33029,
               ph: 6.6,
               ec: 22.13,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 666,
           module_id: 2,
           date: '2018-12-09 11:00:00',
           status: {
               air_temperature: 25.68,
               water_temperature: 20.16,
               humidity: 44.89,
               light: 33029,
               ph: 6.42,
               ec: 22.53,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 667,
           module_id: 1,
           date: '2018-12-09 12:00:00',
           status: {
               air_temperature: 22.99,
               water_temperature: 17.14,
               humidity: 49.3,
               light: 33646,
               ph: 6.61,
               ec: 22.43,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 668,
           module_id: 2,
           date: '2018-12-09 12:00:00',
           status: {
               air_temperature: 22.49,
               water_temperature: 17.51,
               humidity: 44.03,
               light: 33646,
               ph: 6.67,
               ec: 26.77,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 669,
           module_id: 1,
           date: '2018-12-09 13:00:00',
           status: {
               air_temperature: 24.27,
               water_temperature: 20.25,
               humidity: 40.94,
               light: 35214,
               ph: 6.32,
               ec: 24.29,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 670,
           module_id: 2,
           date: '2018-12-09 13:00:00',
           status: {
               air_temperature: 25.26,
               water_temperature: 20,
               humidity: 41.11,
               light: 35214,
               ph: 6.54,
               ec: 23.09,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 671,
           module_id: 1,
           date: '2018-12-09 14:00:00',
           status: {
               air_temperature: 23.15,
               water_temperature: 18.73,
               humidity: 47.43,
               light: 36976,
               ph: 6.43,
               ec: 24.53,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 672,
           module_id: 2,
           date: '2018-12-09 14:00:00',
           status: {
               air_temperature: 22.68,
               water_temperature: 17.7,
               humidity: 47.61,
               light: 36976,
               ph: 6.36,
               ec: 22.48,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 673,
           module_id: 1,
           date: '2018-12-09 15:00:00',
           status: {
               air_temperature: 22.26,
               water_temperature: 18.17,
               humidity: 44.23,
               light: 0,
               ph: 6.55,
               ec: 22.51,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 674,
           module_id: 2,
           date: '2018-12-09 15:00:00',
           status: {
               air_temperature: 22.53,
               water_temperature: 19.04,
               humidity: 48.18,
               light: 0,
               ph: 6.61,
               ec: 22.36,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 675,
           module_id: 1,
           date: '2018-12-09 16:00:00',
           status: {
               air_temperature: 24.14,
               water_temperature: 19.59,
               humidity: 48.45,
               light: 2683,
               ph: 6.51,
               ec: 26.54,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 676,
           module_id: 2,
           date: '2018-12-09 16:00:00',
           status: {
               air_temperature: 22.82,
               water_temperature: 17.26,
               humidity: 41.94,
               light: 2683,
               ph: 6.67,
               ec: 22.06,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 677,
           module_id: 1,
           date: '2018-12-09 17:00:00',
           status: {
               air_temperature: 24.74,
               water_temperature: 18.13,
               humidity: 42.51,
               light: 4352,
               ph: 6.37,
               ec: 23.87,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 678,
           module_id: 2,
           date: '2018-12-09 17:00:00',
           status: {
               air_temperature: 22.41,
               water_temperature: 18.88,
               humidity: 41.93,
               light: 4352,
               ph: 6.63,
               ec: 25.32,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 679,
           module_id: 1,
           date: '2018-12-09 18:00:00',
           status: {
               air_temperature: 22.6,
               water_temperature: 17.78,
               humidity: 46.09,
               light: 4871,
               ph: 6.46,
               ec: 24.49,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 680,
           module_id: 2,
           date: '2018-12-09 18:00:00',
           status: {
               air_temperature: 25.85,
               water_temperature: 17.43,
               humidity: 41.48,
               light: 4871,
               ph: 6.64,
               ec: 22.63,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 681,
           module_id: 1,
           date: '2018-12-09 19:00:00',
           status: {
               air_temperature: 23.4,
               water_temperature: 17.65,
               humidity: 46.16,
               light: 7204,
               ph: 6.38,
               ec: 22.7,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 682,
           module_id: 2,
           date: '2018-12-09 19:00:00',
           status: {
               air_temperature: 25.78,
               water_temperature: 18.55,
               humidity: 43.32,
               light: 7204,
               ph: 6.49,
               ec: 25.83,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 683,
           module_id: 1,
           date: '2018-12-09 20:00:00',
           status: {
               air_temperature: 23.46,
               water_temperature: 17.49,
               humidity: 42.65,
               light: 9684,
               ph: 6.42,
               ec: 25.01,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 684,
           module_id: 2,
           date: '2018-12-09 20:00:00',
           status: {
               air_temperature: 25.21,
               water_temperature: 19.99,
               humidity: 42.95,
               light: 9684,
               ph: 6.5,
               ec: 23.82,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 685,
           module_id: 1,
           date: '2018-12-09 21:00:00',
           status: {
               air_temperature: 25.86,
               water_temperature: 19.91,
               humidity: 48.98,
               light: 11305,
               ph: 6.68,
               ec: 26.56,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 686,
           module_id: 2,
           date: '2018-12-09 21:00:00',
           status: {
               air_temperature: 24.24,
               water_temperature: 17.23,
               humidity: 43.24,
               light: 11305,
               ph: 6.52,
               ec: 23.33,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 687,
           module_id: 1,
           date: '2018-12-09 22:00:00',
           status: {
               air_temperature: 25.02,
               water_temperature: 17.64,
               humidity: 47.17,
               light: 12819,
               ph: 6.43,
               ec: 23.4,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 688,
           module_id: 2,
           date: '2018-12-09 22:00:00',
           status: {
               air_temperature: 24.72,
               water_temperature: 19.58,
               humidity: 48.11,
               light: 12819,
               ph: 6.5,
               ec: 22.05,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 689,
           module_id: 1,
           date: '2018-12-09 23:00:00',
           status: {
               air_temperature: 23.02,
               water_temperature: 17.79,
               humidity: 47.32,
               light: 14819,
               ph: 6.35,
               ec: 22.99,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 690,
           module_id: 2,
           date: '2018-12-09 23:00:00',
           status: {
               air_temperature: 24.93,
               water_temperature: 20.24,
               humidity: 45.7,
               light: 14819,
               ph: 6.38,
               ec: 26.04,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 691,
           module_id: 1,
           date: '2018-12-10 00:00:00',
           status: {
               air_temperature: 23.76,
               water_temperature: 20.46,
               humidity: 47.44,
               light: 16892,
               ph: 6.4,
               ec: 26.45,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 692,
           module_id: 2,
           date: '2018-12-10 00:00:00',
           status: {
               air_temperature: 22.46,
               water_temperature: 20.05,
               humidity: 48.6,
               light: 16892,
               ph: 6.6,
               ec: 25.93,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 693,
           module_id: 1,
           date: '2018-12-10 01:00:00',
           status: {
               air_temperature: 23.29,
               water_temperature: 17.49,
               humidity: 44.05,
               light: 17391,
               ph: 6.52,
               ec: 23.37,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 694,
           module_id: 2,
           date: '2018-12-10 01:00:00',
           status: {
               air_temperature: 22.67,
               water_temperature: 20.41,
               humidity: 42.92,
               light: 17391,
               ph: 6.47,
               ec: 25.04,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 695,
           module_id: 1,
           date: '2018-12-10 02:00:00',
           status: {
               air_temperature: 23.05,
               water_temperature: 19.04,
               humidity: 43.16,
               light: 17954,
               ph: 6.66,
               ec: 26.31,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 696,
           module_id: 2,
           date: '2018-12-10 02:00:00',
           status: {
               air_temperature: 23.56,
               water_temperature: 17.07,
               humidity: 48.17,
               light: 17954,
               ph: 6.64,
               ec: 24.22,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 697,
           module_id: 1,
           date: '2018-12-10 03:00:00',
           status: {
               air_temperature: 25.09,
               water_temperature: 19.33,
               humidity: 41.6,
               light: 19286,
               ph: 6.54,
               ec: 26.5,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 698,
           module_id: 2,
           date: '2018-12-10 03:00:00',
           status: {
               air_temperature: 24.71,
               water_temperature: 19.9,
               humidity: 49.73,
               light: 19286,
               ph: 6.38,
               ec: 26.56,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 699,
           module_id: 1,
           date: '2018-12-10 04:00:00',
           status: {
               air_temperature: 25.82,
               water_temperature: 16.62,
               humidity: 42.08,
               light: 19812,
               ph: 6.66,
               ec: 22.17,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 700,
           module_id: 2,
           date: '2018-12-10 04:00:00',
           status: {
               air_temperature: 23.38,
               water_temperature: 20.38,
               humidity: 49.04,
               light: 19812,
               ph: 6.63,
               ec: 22.48,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 701,
           module_id: 1,
           date: '2018-12-10 05:00:00',
           status: {
               air_temperature: 24.71,
               water_temperature: 19.57,
               humidity: 47.84,
               light: 21972,
               ph: 6.49,
               ec: 25.08,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 702,
           module_id: 2,
           date: '2018-12-10 05:00:00',
           status: {
               air_temperature: 22.83,
               water_temperature: 19.06,
               humidity: 42.35,
               light: 21972,
               ph: 6.52,
               ec: 22.88,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 703,
           module_id: 1,
           date: '2018-12-10 06:00:00',
           status: {
               air_temperature: 22.31,
               water_temperature: 17.89,
               humidity: 44.05,
               light: 24358,
               ph: 6.54,
               ec: 22.64,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 704,
           module_id: 2,
           date: '2018-12-10 06:00:00',
           status: {
               air_temperature: 22.03,
               water_temperature: 17.86,
               humidity: 44.81,
               light: 24358,
               ph: 6.51,
               ec: 25.86,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 705,
           module_id: 1,
           date: '2018-12-10 07:00:00',
           status: {
               air_temperature: 24.83,
               water_temperature: 17.45,
               humidity: 40.39,
               light: 24712,
               ph: 6.56,
               ec: 22.67,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 706,
           module_id: 2,
           date: '2018-12-10 07:00:00',
           status: {
               air_temperature: 24.67,
               water_temperature: 17.78,
               humidity: 49.67,
               light: 24712,
               ph: 6.55,
               ec: 26.07,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 707,
           module_id: 1,
           date: '2018-12-10 08:00:00',
           status: {
               air_temperature: 22.07,
               water_temperature: 20.19,
               humidity: 41.61,
               light: 27009,
               ph: 6.68,
               ec: 24.61,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 708,
           module_id: 2,
           date: '2018-12-10 08:00:00',
           status: {
               air_temperature: 24.49,
               water_temperature: 16.57,
               humidity: 41.92,
               light: 27009,
               ph: 6.46,
               ec: 26.78,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 709,
           module_id: 1,
           date: '2018-12-10 09:00:00',
           status: {
               air_temperature: 22.33,
               water_temperature: 20.23,
               humidity: 41.99,
               light: 28913,
               ph: 6.61,
               ec: 22.78,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 710,
           module_id: 2,
           date: '2018-12-10 09:00:00',
           status: {
               air_temperature: 23.91,
               water_temperature: 17.94,
               humidity: 49.58,
               light: 28913,
               ph: 6.55,
               ec: 24.49,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 711,
           module_id: 1,
           date: '2018-12-10 10:00:00',
           status: {
               air_temperature: 23.87,
               water_temperature: 19.84,
               humidity: 43.32,
               light: 29247,
               ph: 6.33,
               ec: 26.32,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 712,
           module_id: 2,
           date: '2018-12-10 10:00:00',
           status: {
               air_temperature: 24.54,
               water_temperature: 17.85,
               humidity: 41.95,
               light: 29247,
               ph: 6.5,
               ec: 24.19,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 713,
           module_id: 1,
           date: '2018-12-10 11:00:00',
           status: {
               air_temperature: 23.36,
               water_temperature: 19.93,
               humidity: 43.3,
               light: 31254,
               ph: 6.34,
               ec: 26.02,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 714,
           module_id: 2,
           date: '2018-12-10 11:00:00',
           status: {
               air_temperature: 24.08,
               water_temperature: 18.77,
               humidity: 49.66,
               light: 31254,
               ph: 6.32,
               ec: 26.22,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 715,
           module_id: 1,
           date: '2018-12-10 12:00:00',
           status: {
               air_temperature: 25.55,
               water_temperature: 18.65,
               humidity: 49.89,
               light: 33507,
               ph: 6.57,
               ec: 26.41,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 716,
           module_id: 2,
           date: '2018-12-10 12:00:00',
           status: {
               air_temperature: 23.67,
               water_temperature: 18.26,
               humidity: 41.23,
               light: 33507,
               ph: 6.51,
               ec: 24.7,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 717,
           module_id: 1,
           date: '2018-12-10 13:00:00',
           status: {
               air_temperature: 25.53,
               water_temperature: 18.56,
               humidity: 46.88,
               light: 35347,
               ph: 6.56,
               ec: 24.35,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 718,
           module_id: 2,
           date: '2018-12-10 13:00:00',
           status: {
               air_temperature: 25.75,
               water_temperature: 20.03,
               humidity: 48.05,
               light: 35347,
               ph: 6.51,
               ec: 26.9,
               pump: 0,
               bulb: 0,
            }
        },
        {
           id: 719,
           module_id: 1,
           date: '2018-12-10 14:00:00',
           status: {
               air_temperature: 23.96,
               water_temperature: 18.2,
               humidity: 40.54,
               light: 38037,
               ph: 6.4,
               ec: 23.59,
               pump: 1,
               bulb: 1,
            }
        },
        {
           id: 720,
           module_id: 2,
           date: '2018-12-10 14:00:00',
           status: {
               air_temperature: 25.3,
               water_temperature: 19.99,
               humidity: 45.25,
               light: 38037,
               ph: 6.62,
               ec: 22.61,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 721,
           module_id: 1,
           date: '2018-12-10 15:00:00',
           status: {
               air_temperature: 23.85,
               water_temperature: 17.24,
               humidity: 49.5,
               light: 0,
               ph: 6.59,
               ec: 25.63,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 722,
           module_id: 2,
           date: '2018-12-10 15:00:00',
           status: {
               air_temperature: 24.85,
               water_temperature: 16.76,
               humidity: 49.61,
               light: 0,
               ph: 6.67,
               ec: 23.05,
               pump: 1,
               bulb: 0,
            }
        },
        {
           id: 723,
           module_id: 1,
           date: '2018-12-10 16:00:00',
           status: {
               air_temperature: 23.98,
               water_temperature: 18.52,
               humidity: 40.51,
               light: 306,
               ph: 6.7,
               ec: 25.84,
               pump: 0,
               bulb: 1,
            }
        },
        {
           id: 724,
           module_id: 2,
           date: '2018-12-10 16:00:00',
           status: {
               air_temperature: 23.25,
               water_temperature: 17.15,
               humidity: 48.75,
               light: 306,
               ph: 6.64,
               ec: 25.39,
               pump: 0,
               bulb: 1,
            }
        },
     ];
     
    return { modules, tasks, records };
  }
}
