import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import {
  User,
  UserServiceService,
} from 'src/app/todos/services/users-service.service'
import { ProfileServiceService } from '../../todos/services/profile-service.service'

@Component({
  selector: 'inst-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers()
  }
}
