import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs'
import { Tasks } from '../mock-task';
import { Task } from '../Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {}

  getTask():Observable<Task[]>{
    const task= of(Tasks);
    return task;
  }
}
