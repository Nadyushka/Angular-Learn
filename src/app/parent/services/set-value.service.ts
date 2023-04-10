import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SetValueService {
  // value = 1000

  value$ = new BehaviorSubject<number>(0)

  incr() {
    this.value$.next(this.value$.getValue() + 1)
  }

  decr() {
    this.value$.next(this.value$.getValue() - 1)
  }
}
