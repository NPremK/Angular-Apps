import { Component, OnInit } from '@angular/core';
import { Todo } from '../../list-todos/Todo';
import { TodoService } from '../../list-todos/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo : Todo
  id : number

  constructor(
    private todoService : TodoService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1,"test",new Date(),false);

    this.todoService.getTodo("prem",this.id).subscribe(
      data => this.todo = data
    )

  }

}
