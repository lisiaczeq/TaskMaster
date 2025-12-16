import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: Array<{ id: number; title: string; description?: string; status?: string; userId?: number }> = [];
  private nextId = 1;

  create(createTaskDto: CreateTaskDto) {
    const task = { id: this.nextId++, ...createTaskDto };
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    return this.tasks.find((t) => t.id === id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const idx = this.tasks.findIndex((t) => t.id === id);
    if (idx === -1) return null;
    this.tasks[idx] = { ...this.tasks[idx], ...updateTaskDto };
    return this.tasks[idx];
  }

  remove(id: number) {
    const idx = this.tasks.findIndex((t) => t.id === id);
    if (idx === -1) return null;
    const [removed] = this.tasks.splice(idx, 1);
    return removed;
  }
}
