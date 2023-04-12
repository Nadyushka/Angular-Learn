import { Component, OnInit } from '@angular/core'
import { Todo, TodosServiceService } from './services/todos-service.service'
import { Observable, Subscription } from 'rxjs'
import { BeautyLoggerService } from './services/beauty-logger.service'

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>
  error = ''
  subscription: Subscription = new Subscription()

  constructor(private todoservice: TodosServiceService) {}

  // ngOnDestroy(): void {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe()
  //   }
  // }

  ngOnInit() {
    this.todos$ = this.todoservice.todo$
    this.getTodos()
  }

  getTodos() {
    this.todoservice.getTodos()
    // this.subscription.add(
    //   this.todoservice.getTodos().subscribe({
    //     next: res => {
    //       this.todos = res
    //     },
    //     error: (error: HttpErrorResponse) => {
    //       this.error = error.message
    //     },
    //   })
    // )
  }

  addTodos() {
    const title = 'Angular' + Math.floor(Math.random() * 100)
    this.todoservice.addTodos(title)
    // this.subscription.add(
    //   this.todoservice.addTodos(title).subscribe(res => {
    //     const newTodo = res.data.item
    //     this.todos.unshift(newTodo)
    //   })
    // )
  }

  deleteTodos() {
    const todoId = '7d3bd523-f52e-4730-ab53-7006f687c74b'
    this.todoservice.deleteTodos(todoId)
    // this.subscription.add(
    //   this.todoservice.deleteTodos(todoId).subscribe(res => {
    //     if (res.resultCode === 0) {
    //       this.todos = this.todos.filter(tl => tl.id !== todoId)
    //     }
    //   })
    // )
  }
}
