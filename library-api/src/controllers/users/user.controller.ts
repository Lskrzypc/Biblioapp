// user.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service'; // Assurez-vous que le chemin d'importation est correct
import { UserModel } from 'library-api/src/models';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() userData: UserModel) {
    return this.userService.createUser(userData);
  }
}