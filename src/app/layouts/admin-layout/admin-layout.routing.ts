import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { TeacherCoursesComponent } from '../../components/teacher-courses/teacher-courses.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';



export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'teacher',
                children: [
                    { path: 'courses', component: TeacherCoursesComponent }
                ]
            },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'user-profile', component: UserProfileComponent },
            { path: 'table-list', component: TableListComponent },
            { path: 'typography', component: TypographyComponent },
            { path: 'icons', component: IconsComponent },
            { path: 'maps', component: MapsComponent },
            { path: 'notifications', component: NotificationsComponent },
            { path: '', redirectTo: 'dashboard' },
            { path: 'not-found', component: NotFoundComponent },
            { path: '**', redirectTo: 'not-found' }
        ]
    }
];
