import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'instagram'
  isLoading = true
  textOne = 'Initial value'
  text = 'Start value'

  constructor() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

  changeTextHandler(event: Event) {
    this.textOne = (event.currentTarget as HTMLInputElement).value
  }
}
