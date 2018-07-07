import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs';
import { ChallengeInfo } from '../../models/application.models';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  private _uri = 'Challenge';

  constructor(private _http: HttpService) { }

  public getValoration(projectId: number): Observable<ChallengeInfo> {
    return this._http.get(`${this._uri}/GetGeneralValoration/${projectId}`);
  }
}
