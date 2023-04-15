import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './todos/login/login/login.component'
import { ProfileComponent } from './routes/profile/profile.component'
import { HomePageComponent } from './routes/home-page/home-page.component'
import { UsersComponent } from './routes/users/users.component'
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:userId', component: ProfileComponent },
  { path: 'users', component: UsersComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppModuleRoutingModule {}
