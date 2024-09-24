import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/userCreate.dto';
// import { User } from 'src/user/interfaces/user.interface';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('number') number: number,
    @Body('age') age: number,
  ) {
    return this.userService.createUser(name, email, password, number, age);
  }
  @Get()
  async findAll(/*@Query() query: any*/): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: any) {
  //   return `This action updates a #${id}`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id}t`;
  // }
}
