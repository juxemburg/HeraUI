import { Component, OnInit, Input, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { IAutocompleteService, IAutocompletable } from '../models/shared.models';
import { ChallengeService } from 'app/teacher-module/services/challenge.service';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss']
})
export class AutocompleteInputComponent implements OnInit {

  public isLoading = false;

  @Input()
  public inputClass = '';

  @Input()
  public searchServiceType: IAutocompletable;

  public modelList: IAutocompletable[];

  private _searchService: IAutocompleteService<IAutocompletable>;

  // @Input()
  // public searchObservable: Observable<any>;

  constructor(private _injector: Injector) { }

  ngOnInit() {
    this.loadService();
  }

  onInputChanged(event) {
    const target = event.target;
    console.log(target.value);
    this.search(target.value);
  }

  private search(searchString: string) {
    this.isLoading = true;
    this._searchService.search(searchString)
      .subscribe(data => {
        console.log('Autocomplete results:');
        console.log(data);
        this.modelList = data;
        this.isLoading = false;
      }, _ => {
        console.log('search failed');
        this.isLoading = false;
      });
  }

  private loadService() {
    if (this.searchServiceType) {
      this._searchService = this._injector.get(this.searchServiceType);
    }
  }

}
