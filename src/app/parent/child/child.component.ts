import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Address } from '../parent.component'

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  name = 'Petya'
  inputGrade = ''

  @Input() surnameProps?: string
  @Input() address?: Address

  @Output() sendGradeEvent = new EventEmitter<number>()
  @Output() sendInfo = new EventEmitter<string>()

  sendGradeHandler() {
    const math = 5
    this.sendGradeEvent.emit(math)
  }

  sendInfoHandler() {
    this.sendInfo.emit(this.inputGrade)
  }
}
