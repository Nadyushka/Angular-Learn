import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import {
  User,
  UserServiceService,
} from 'src/app/todos/services/users-service.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'inst-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // const currentPage = Number(this.route.snapshot.queryParamMap.get('page'))
    // const page = currentPage ? currentPage : 1
    // this.getUsers(page)

    this.route.queryParams.subscribe((params: Params) => {
      this.getUsers(params['page'] ? params['page'] : 1)
    })
  }

  getUsers(page: number) {
    this.users$ = this.userService.getUsers(page)
  }

  nextUsersHandler() {
    const currentPage = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = currentPage ? currentPage + 1 : 2
    this.router
      //  .navigateByUrl(`users?page=${nextPage}`)
      .navigate(['/users'], { queryParams: { page: nextPage } })
  }
}
