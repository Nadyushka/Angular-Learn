import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
interface BaseResponse<T = {}> {
  data: T
  message: string[]
  fieldsError: string[]
  resultCode: number
}

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': 'dd3c66bc-c7e8-44a0-a861-e9ed3c285b89',
    },
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodos()
  }

  getTodos() {
    this.http
      .get<Todo[]>(
        'https://social-network.samuraijs.com/api/1.1/todo-lists',
        this.httpOptions
      )
      .subscribe(res => {
        this.todos = res
      })
  }

  addTodos() {
    const title = 'Angular' + Math.floor(Math.random() * 100)
    this.http
      .post<BaseResponse<{ item: Todo }>>(
        'https://social-network.samuraijs.com/api/1.1/todo-lists',
        { title },
        this.httpOptions
      )
      .subscribe(res => {
        const newTodo = res.data.item
        this.todos.unshift(newTodo)
      })
  }

  deleteTodos() {
    const todoId = '39d5d6d5-2c23-41bc-a681-9dfa9cca5b60'
    this.http
      .delete<BaseResponse>(
        `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`,
        this.httpOptions
      )
      .subscribe(res => {
        if (res.resultCode === 0) {
          this.todos = this.todos.filter(tl => tl.id !== todoId)
        }
      })
  }
}
