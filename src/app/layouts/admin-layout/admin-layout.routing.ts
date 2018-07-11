import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { TeacherCoursesComponent } from 'app/teacher-module/teacher-courses/teacher-courses.component';
import { NotFoundComponent } from 'app/shared/not-found/not-found.component';
import { ChallengesComponent } from '../../teacher-module/challenges/challenges.component';
import { CreateChallengeComponent } from '../../teacher-module/create-challenge/create-challenge.component';
import { IsAuthenticatedGuardService } from '../../shared/services/guards/is-authenticated-guard.service';
import { IsProfesorRoleGuardService } from '../../shared/services/guards/is-profesor-role-guard.service';
import { CreateCourseComponent } from '../../teacher-module/create-course/create-course.component';





export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [IsAuthenticatedGuardService, IsProfesorRoleGuardService],
        children: [
            {
                path: 'teacher',
                children: [
                    { path: 'courses', component: TeacherCoursesComponent },
                    { path: 'courses-create', component: CreateCourseComponent },
                    { path: 'challenges', component: ChallengesComponent },
                    { path: 'challenge-create', component: CreateChallengeComponent }
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
