import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-challenge-result-finished',
  templateUrl: './course-challenge-result-finished.component.html',
  styleUrls: ['./course-challenge-result-finished.component.scss']
})
export class CourseChallengeResultFinishedComponent implements OnInit {

  public isVisible = false;

  constructor() { }

  ngOnInit() {
  }


  @Output()
  public Show() {
    this.isVisible = true;
  }

  public Hide() {
    this.isVisible = false;
  }
}
