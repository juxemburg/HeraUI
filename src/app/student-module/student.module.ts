import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesComponent } from './courses/courses.component';
import { PortalCardComponent } from './portal-card/portal-card.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesSearchComponent } from './courses-search/courses-search.component';
import { CourseSearchCardComponent } from './course-search-card/course-search-card.component';
import { CourseSearchListComponent } from './course-search-list/course-search-list.component';
import { CourseChallengeComponent } from './course-challenge/course-challenge.component';
import { StudentChallengeService } from './services/student-challenge.service';
import { CourseChallengeHistoryComponent } from './course-challenge-history/course-challenge-history.component';
import { CourseChallengeGradeComponent } from './course-challenge-grade/course-challenge-grade.component';
import { CourseChallengeResultComponent } from './course-challenge-result/course-challenge-result.component';
import { DemeterModule } from '../demeter-module/demeter.module';
import { CourseChallengeResultFinishedComponent } from './course-challenge-result-finished/course-challenge-result-finished.component';
import { CourseChallengePeersResultTableComponent } from './course-challenge-peers-result-table/course-challenge-peers-result-table.component';


@NgModule({
  imports: [
    CommonModule,
    DemeterModule,
    SharedModule
  ],
  declarations: [
    CourseComponent,
    CourseCardComponent,
    CoursesComponent,
    PortalCardComponent,
    CoursesSearchComponent,
    CourseSearchCardComponent,
    CourseSearchListComponent,
    CourseChallengeComponent,
    CourseChallengeHistoryComponent,
    CourseChallengeGradeComponent,
    CourseChallengeResultComponent,
    CourseChallengeResultFinishedComponent,
    CourseChallengePeersResultTableComponent
  ],
  exports: [
    CourseComponent,
    CourseCardComponent,
    CoursesComponent,
    PortalCardComponent
  ],
  providers: [StudentChallengeService]
})
export class StudentModule { }
