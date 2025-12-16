import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: Array<{ id: number; email: string; name: string }> = [];
  private nextId = 1;

  create(createUserDto: CreateUserDto) {
    const user = { id: this.nextId++, ...createUserDto };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((u) => u.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const idx = this.users.findIndex((u) => u.id === id);
    if (idx === -1) return null;
    this.users[idx] = { ...this.users[idx], ...updateUserDto } as any;
    return this.users[idx];
  }

  remove(id: number) {
    const idx = this.users.findIndex((u) => u.id === id);
    if (idx === -1) return null;
    const [removed] = this.users.splice(idx, 1);
    return removed;
  }
}
