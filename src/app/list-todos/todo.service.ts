import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './Todo';

@Injectable()
export class TodoService {

  
  constructor( private http : HttpClient) {

   }

   getTodosList(name) { 
     
    return this.http.get<Todo[]>(`http://localhost:8080/todo/${name}/todos/`);

   }

   deleteTodosList(name,id) { 
     return this.http.delete(`http://localhost:8080/todo/${name}/todos/${id}`);

   }

   
   getTodo(name,id) { 
    
    return this.http.get<Todo>(`http://localhost:8080/todo/${name}/todos/${id}`);

   }
}
