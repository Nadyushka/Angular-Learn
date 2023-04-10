import { Component, Input } from '@angular/core'
import { SetValueService } from './services/set-value.service'

export interface Address {
  city: string
  street: string
  house: number
}

@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  name = 'Vasya'
  surname = 'Petrov'
  address: Address = {
    city: 'Minsk',
    street: 'Planotov str.',
    house: 49,
  }
  math?: number

  getGrade(value: number) {
    this.math = value
  }

  grades = ['math:5', 'music:4']

  showGrade(grade: string) {
    this.grades.push(grade)
  }

  isLoading = true

  constructor(private setValue: SetValueService) {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

  inputValue = ''

  buttonChange = false

  onClickButton() {
    this.buttonChange = this.buttonChange === false ? true : false
  }

  fruits: Array<{ id: number; name: string; price: number }> = [
    { id: 1, name: 'apple1', price: 10 },
    { id: 2, name: 'apple2', price: 1 },
    { id: 3, name: 'apple3', price: 50 },
    { id: 4, name: 'apple4', price: 11 },
    { id: 5, name: 'apple5', price: 12 },
  ]

  setValueFromService = 0

  ngOnInit(): void {
    // this.setValueFromService = this.setValue.value
    this.setValue.value$.subscribe(value => {
      this.setValueFromService = value
    })
  }

  incrementValue() {
    this.setValue.incr()
  }

  decrementValue() {
    this.setValue.decr()
  }
}
