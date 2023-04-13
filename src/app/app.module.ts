import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ParentComponent } from './parent/parent.component'
import { ChildComponent } from './parent/child/child.component'
import { TodosComponent } from './todos/todos.component'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './todos/login/login/login.component'

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, TodosComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
