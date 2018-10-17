import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  ModulesComponent
} from './modules.component';
import {
  DashboardComponent
} from './components/dashboard/dashboard.component';
import {
  ConfigurationComponent
} from './components/configuration/configuration.component';
import {
  TasksComponent
} from './components/tasks/tasks.component';
import {
  AddTaskComponent
} from './components/add-task/add-task.component';
import {
  HistoricalsComponent
} from './components/historicals/historicals.component';



const routes: Routes = [{
    path: '',
    component: ModulesComponent,
    children: [{
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'configuration',
        component: ConfigurationComponent,
        data: {
          title: 'configuration'
        }
      },
      {
        path: 'tasks',
        component: TasksComponent,
        data: {
          title: 'Tasks'
        }
      },
      {
        path: 'tasks/new',
        component: AddTaskComponent,
        data: {
          title: 'New Task'
        }
      },
      {
        path: 'historicals',
        component: HistoricalsComponent,
        data: {
          title: 'Historicals'
        }
      },
    ]
  },
  /*
  {
      path: '**',
      component: ErrorComponent
  }
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {}
