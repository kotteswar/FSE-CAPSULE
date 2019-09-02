import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'createtask', pathMatch: 'full' },
{ path: 'createtask', component:CreateTaskComponent},
{ path: 'updatetask', component:UpdateTaskComponent},
{ path: 'showtask', component:ShowTaskComponent},
// { path: 'product/:id', component: ProductComponent },  
// { path: 'contact', component: ContactComponent },  
{ path: '**', component:CreateTaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }







