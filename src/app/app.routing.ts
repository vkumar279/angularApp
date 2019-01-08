import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { StudentComponent } from './student/student.component';

const routes: Routes = [    
    {
      path: 'students',
      component: StudentComponent
    }
  ];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);