import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { normalUserGuard } from './services/normal-user.guard';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';


const routes: Routes = [
  {
    path:'signup', component:SignupComponent,pathMatch:'full'
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'admin', component: DashboardComponent,canActivate:[adminGuard],children:[
      { path: '', component: WelcomeComponent },
      { path: 'profile', component:ProfileComponent},
      {path:'categories',component:ViewCategoriesComponent}
    ]
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent, canActivate: [normalUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
