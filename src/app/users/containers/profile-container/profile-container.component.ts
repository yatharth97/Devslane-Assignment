import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  users$: Observable<User[]>;
  loading: boolean;
  queryParams = {
    results: 100,
    page: 1,
    nat: []
  };
  loadingMore: boolean;

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.loading = true;
    this.users$ = this.userDataService.getUsers(this.queryParams).pipe(
      tap(() => this.loading = false),
      map(usersResp => usersResp.results));
  }

}
