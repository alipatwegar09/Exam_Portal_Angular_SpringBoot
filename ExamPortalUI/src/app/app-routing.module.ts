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
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './pages/admin/add-quizzes/add-quizzes.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';


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
      {path:'categories',component:ViewCategoriesComponent},
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'quizzes', component: ViewQuizzesComponent },
      { path: 'add-quizzes', component: AddQuizzesComponent },
      { path: 'quiz/:qid', component: UpdateQuizComponent },
      { path: 'view-questions/:qid/:title', component: ViewQuestionsComponent },
      { path: 'add-questions/:qid/:title', component: AddQuestionsComponent }
    ] 
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent, canActivate: [normalUserGuard],
    children:[
      {path:':catId',component:LoadQuizComponent},
      { path: 'instructions/:qid', component: InstructionsComponent }
    ]
  },
  { path: 'start-quiz/:qid', component: StartComponent, canActivate: [normalUserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
