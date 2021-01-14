import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { UserResponse } from '../models/user.response';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getUsers(data: any): Observable<UserResponse> {
    let params = new HttpParams();
    for (const key of Object.keys(data)) {
      params = params.append(key, data[key]);
    }
    return this.http.get<UserResponse>(environment.baseUrl, { params });

  }
}
