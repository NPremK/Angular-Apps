import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { TodoService } from './list-todos/todo.service';
import { TodoComponent } from './todo/todo/todo.component';
import { BasicAuthService } from './auth/basic-auth.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ListTodosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path:'todos', component : ListTodosComponent},
      {path:'todos/:id', component : TodoComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule,
    FormsModule

  ],
  providers :[TodoService,
   {
    provide : HTTP_INTERCEPTORS, useClass : BasicAuthService,multi:true
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
