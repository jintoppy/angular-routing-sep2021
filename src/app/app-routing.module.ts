import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ActorComponent } from './components/actor/actor.component';
import { StudentComponent } from './components/student/student.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [  
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'actor',
        component: ActorComponent
      },
      {
        path: 'student',
        component: StudentComponent
      }
    ]
  },
  {
    path: 'contactus',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-details/:userId',
    component: UserDetailsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
