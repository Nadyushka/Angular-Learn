import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  map,
  Observable,
  throwError,
} from 'rxjs'
import { environment } from '../../../env/environment.prod'
import { BeautyLoggerService } from './beauty-logger.service'

export interface Todo {
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

@Injectable({
  providedIn: 'root',
})
export class TodosServiceService {
  httpOptions = {
    withCredentials: true,
    headers: {
      'api-key': environment.apiKey,
    },
  }

  todo$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  constructor(
    private http: HttpClient,
    private beautyLogger: BeautyLoggerService
  ) {}

  private errorHandler(err: HttpErrorResponse) {
    this.beautyLogger.log(err.message, 'error')
    return EMPTY
  }

  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(todos => {
        this.todo$.next(todos)
      })
  }

  addTodos(title: string) {
    this.http
      .post<BaseResponse<{ item: Todo }>>(
        `${environment.baseUrl}/todo-lists`,
        { title },
        this.httpOptions
      )
      .pipe(
        map(res => {
          const newTodo = res.data.item
          const stateTodos = this.todo$.getValue()
          return [newTodo, ...stateTodos]
        }),
        catchError(this.errorHandler.bind(this))
      )
      .subscribe(todos => {
        this.todo$.next(todos)
      })
  }

  deleteTodos(todoId: string) {
    this.http
      .delete<BaseResponse>(
        `${environment.baseUrl}/todo-lists/${todoId}`,
        this.httpOptions
      )
      .pipe(
        map(() => {
          return this.todo$.getValue().filter(tl => tl.id !== todoId)
        }),
        catchError(this.errorHandler.bind(this))
      )
      .subscribe(todos => this.todo$.next(todos))
  }
}
