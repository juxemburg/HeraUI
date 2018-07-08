import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs';
import { ChallengeInfo, CreateChallengeModel } from '../../models/application.models';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private _uri = 'Challenge';

  constructor(private _http: HttpService) { }

  public getValoration(projectId: number): Observable<ChallengeInfo> {
    return this._http.get(`${this._uri}/GetGeneralValoration/${projectId}`);
  }

  public createChallenge(model: CreateChallengeModel): Observable<any> {
    return this._http.post(`${this._uri}/AddChallenge`, model);
  }
}
