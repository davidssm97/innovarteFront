import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path: '',
                loadComponent: () => import('./domains/business/home/home.component')
            },

            {
                path: 'student',
                loadComponent: () => import('./domains/business/students/students.component')
            },

            {
                path: 'course',
                loadComponent: () => import('./domains/business/courses/courses.component')
            }

        ]
    }
];
