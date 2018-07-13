import { Observable } from 'rxjs';

export interface IAutocompleteService<T> {
    search(searchString: string): Observable<T[]>;
}

export interface IAutocompletable {
    AutocompleteId: any;
}
