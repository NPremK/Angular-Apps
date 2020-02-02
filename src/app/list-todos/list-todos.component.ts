import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './todo.service';
import { Todo } from './Todo';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos =[
  //   {id : 1 , description : 'Learn Angular'},
  //   {id : 2 , description : 'Learn Docker'}
  // ]
  todos:Todo[];
  message : string;
  // todo = {id : 2 , description : 'Learn Swimming'}
  constructor(private http : HttpClient,
  private todoService : TodoService,
  private router : Router) { 

  }

  ngOnInit() {
    this.todoService.getTodosList('prem').subscribe(
      response => {
          this.todos = response;
      }
    );
  }

  addTodo(){
    console.log('todoclicked');
   this.http.get('http://localhost:8080/hello/todo').subscribe(message => {
     console.log(message);
   });

  }

  updateTodo(id){
      this.router.navigate(['/todos',id]);
  }

  deleteTodo(id){
   this.todoService.deleteTodosList('prem',id).subscribe(
     success => {
       this.message = "Deleted todo " + id;
     }
   )
}
}
