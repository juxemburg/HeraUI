import { Observable } from 'rxjs';

export interface IAutocompleteService<T> {
    search(searchString: string): Observable<T[]>;
}

export interface IAutocompletable {
    AutocompleteId(): any;
    DisplayText(): string;
}

export class MenuRoute {
    constructor(
        public route: string,
        public name: string,
        public icon: string
    ) { }
}
