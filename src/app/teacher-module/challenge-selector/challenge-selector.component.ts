import { Component, OnInit, forwardRef } from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { AutocompleteChallengeModel } from '../../models/application.models';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '../../../../node_modules/@angular/forms';
import { validateConfig } from '../../../../node_modules/@angular/router/src/config';

@Component({
  selector: 'app-challenge-selector',
  templateUrl: './challenge-selector.component.html',
  styleUrls: ['./challenge-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChallengeSelectorComponent),
    multi: true
  }]
})
export class ChallengeSelectorComponent implements OnInit, ControlValueAccessor {

  public searchType: any = ChallengeService;

  public value: AutocompleteChallengeModel;
  public get valueId(): number {
    return this.value.id;
  }

  public displayChallengeFn = item => `${item.nombre}`;
  private onChange = (val: number) => { };
  private onTouched = () => { };

  constructor() {
    this.value = new AutocompleteChallengeModel(0, '', '', '');
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this.value.id = <number>obj;
    this.onChange(this.valueId);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onItemSelected(item: any) {
    this.value = item;
    this.onChange(this.valueId);
  }

}
