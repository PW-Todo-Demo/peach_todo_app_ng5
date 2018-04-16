import { BaseDataService } from '../../classes/base-data-service';
import { Injectable } from '@angular/core';
import { PeachService } from 'ng-beyond';
import { Task } from '../../models/task/task.model';

@Injectable()
export class TasksService extends BaseDataService {

  constructor(peachService: PeachService) {
    super(peachService, Task);
  }

}
