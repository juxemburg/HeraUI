import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {

  @Input()
  disabled = false;

  @Input()
  public btnClass = '';

  @Input()
  public btnIcon = 'check';

  @Input()
  public btnText = '';

  @Input()
  public btnSpinner = 'sync-alt';

  @Input()
  public btnColor = 'btn-success';

  public icon = '';
  public text = '';

  @Input()
  public submitted: Observable<boolean>;

  @Output()
  public onSubmitted = new EventEmitter<boolean>();

  public isLoading = false;

  public set loading(val: boolean) {
    this.isLoading = val;
    this.icon = this.isLoading ? this.btnSpinner : this.btnIcon;
    this.text = this.isLoading ? '' : this.btnText;
  }

  constructor() {
  }

  ngOnInit() {
    this.icon = this.btnIcon;
    this.text = this.btnText;
    this.submitted
      .subscribe(val => {
        this.loading = val;
      }, _ => {
        this.btnColor = 'btn-danger';
        this.icon = 'times';
      });
  }

  onClicked() {
    this.onSubmitted.emit(true);
  }


}
