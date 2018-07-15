import { Component, OnInit, Input, Injector, Output, EventEmitter } from '@angular/core';
import { IAutocompleteService, IAutocompletable } from '../models/shared.models';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss']
})
export class AutocompleteInputComponent implements OnInit {

  public isLoading = false;
  public isFocused = false;

  public modelList: IAutocompletable[];
  private _searchService: IAutocompleteService<IAutocompletable>;

  public selectedValue: IAutocompletable;
  public inputText = '';

  @Output()
  public onSelected = new EventEmitter<IAutocompletable>();

  @Input()
  public inputClass = '';

  @Input()
  public searchServiceType: IAutocompletable;

  @Input()
  public displayFn: (item: any) => string;

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

  public onBlur() {
    setTimeout(() => {
      this.isFocused = false;
      if (!this.selectedValue) {
        this.inputText = '';
      }
    }, 200);
  }

  public onItemSelected(item: any) {
    this.inputText = this.displayFn(item);
    this.selectedValue = item;
    this.onSelected.emit(this.selectedValue);
  }

}
