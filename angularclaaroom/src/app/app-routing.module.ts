import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ScheduleComponent} from "./pages/schedule/schedule.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {NotesComponent} from "./pages/notes/notes.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeworkComponent} from "./pages/homework/homework.component";
import {HomeComponent} from "./pages/home/home.component";
import {ChatComponent} from "./pages/chat/chat.component";

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'homework', component: HomeworkComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
