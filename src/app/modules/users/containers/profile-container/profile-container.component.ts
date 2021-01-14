import {Component, OnInit} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {User} from '../../models/user.model';
import {UserDataService} from '../../services/user-data.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { genders, nationalities } from 'src/app/constants';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {

  users: User[] = [];
  loading: boolean;
  queryParams = {
    results: 100,
    page: 1,
    nat: [],
    gender: []
  };
  loadingMore: boolean;
  nationalities = nationalities;
  genders = genders;
  nationalityControl = new FormControl([]);
  genderControl = new FormControl([]);
  group = new FormGroup({
    nat: this.nationalityControl,
    gender: this.genderControl
  });

  constructor(private userDataService: UserDataService,
              private route: ActivatedRoute,
              private router: Router) {
    this.setParamsFromRoute();
  }

  ngOnInit(): void {
    this.loading = true;
    this.loadUsers();
    this.setupFilters();
  }

  private setParamsFromRoute() {
    const params = this.route.snapshot.queryParamMap;

    if (params.has('page')) {
      this.queryParams.page = +params.get('page');
    }

    if (params.has('nat')) {
      this.queryParams.nat = params.get('nat').split(',');
      this.nationalityControl.setValue(this.queryParams.nat);
    }

    if (params.has('gender')) {
      this.queryParams.gender = params.get('gender').split(',');
      this.genderControl.setValue(this.queryParams.gender);
    }

  }

  private setParamsInRoute() {
    const data = this.group.value;
    const params: any = {
      page: this.queryParams.page
    };

    if (data.nat.length) {
      params.nat = data.nat.join(',');
    }

    if (data.gender.length) {
      params.gender = data.gender.join(',');
    }

    this.router.navigate(['/'], {
      queryParams: params
    });

  }

  private setupFilters() {
    this.group
      .valueChanges
      .subscribe(data => {
        this.queryParams.page = 1;
        this.queryParams = {
          ...this.queryParams,
          ...data
        };
        this.setParamsInRoute();
        this.loadUsers();
      });
  }

  private loadUsers() {
    this.loading = true;
    this.userDataService.getUsers(this.queryParams).pipe(
      tap(() => this.loading = false),
      map(usersResp => usersResp.results))
      .subscribe(users => {
        this.users = users;
      });
  }

  loadMore() {
    if (!this.loadingMore) {
      this.queryParams.page += 1;
      this.loadingMore = true;
      this.userDataService.getUsers(this.queryParams).pipe(
        tap(() => this.loadingMore = false),
        map(usersResp => usersResp.results))
        .subscribe(users => {
          this.users = [...this.users, ...users];
        });
    }
  }

}
