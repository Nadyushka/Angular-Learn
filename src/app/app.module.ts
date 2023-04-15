import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ParentComponent } from './parent/parent.component'
import { ChildComponent } from './parent/child/child.component'
import { TodosComponent } from './todos/todos.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './todos/login/login/login.component'
import { ProfileComponent } from './routes/profile/profile.component'
import { RouterModule } from '@angular/router'
import { AppModuleRoutingModule } from './app-module-routing.module'
import { HomePageComponent } from './routes/home-page/home-page.component'
import { UsersComponent } from './routes/users/users.component'
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component'
import { CredentialsInterceptor } from './routes/credentials.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TodosComponent,
    LoginComponent,
    ProfileComponent,
    HomePageComponent,
    UsersComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppModuleRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
