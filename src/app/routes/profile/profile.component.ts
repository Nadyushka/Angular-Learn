import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
  ProfileResponse,
  ProfileServiceService,
} from '../../todos/services/profile-service.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile$!: Observable<ProfileResponse>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileServiceService
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId')
    this.profile$ = this.profileService.getProfile(+userId!)
  }

  onClickHandler() {
    this.router.navigate(['users'])
  }
}
