import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs';
import {
  ChallengeInfo,
  CreateChallengeModel,
  AutocompleteChallengeModel
} from '../../models/application.models';
import { IAutocompleteService } from '../../shared/models/shared.models';
import { OptionModel } from 'app/models/common.models';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService
  implements IAutocompleteService<AutocompleteChallengeModel> {
  private _uri = 'Challenge';

  constructor(private _http: HttpService) {}

  public getValoration(projectId: number): Observable<ChallengeInfo> {
    return this._http.get(`${this._uri}/GetGeneralValoration/${projectId}`);
  }

  public getMetadata(): Observable<OptionModel[]> {
    return this._http.get(`${this._uri}/GetMetadata`);
  }

  public createChallenge(model: CreateChallengeModel): Observable<any> {
    return this._http.post(`${this._uri}/AddChallenge`, model);
  }

  public search(
    searchString: string
  ): Observable<AutocompleteChallengeModel[]> {
    const params = new Map<string, string>().set('searchString', searchString);
    return this._http.get(`${this._uri}/GetAutocomplete`, params);
  }
}
