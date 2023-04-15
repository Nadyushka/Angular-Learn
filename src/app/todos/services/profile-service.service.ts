import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/env/environment.prod'
import { map, Observable } from 'rxjs'

export interface ProfileResponse {
  aboutMe?: string
  contacts: Contacts
  lookingForAJob: boolean
  lookingForAJobDescription?: string
  fullName: string
  userId: number
  photos: {
    small?: string
    large?: string
  }
}

interface Contacts {
  facebook?: any
  website?: any
  vk?: any
  twitter?: any
  instagram?: any
  youtube?: any
  github?: any
  mainLink?: any
}

@Injectable({
  providedIn: 'root',
})
export class ProfileServiceService {
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environment.apiKey,
    },
  }

  constructor(private http: HttpClient) {}

  getProfile(userId: number): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(
      `${environment.baseUrl}/profile/${userId}`,
      this.httpOptions
    )
  }
}
