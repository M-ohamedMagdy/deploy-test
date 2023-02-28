import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './components/new/new.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudntsComponent } from './components/studnts/studnts.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:"",component:StudntsComponent},
  {path:"studnts",component:StudntsComponent},
  {path:"new",component:NewComponent},
  {path:"studnts/:id",component:StudentDetailsComponent},
  {path:"update/:id",component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
