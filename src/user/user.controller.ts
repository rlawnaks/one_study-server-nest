import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (
        private readonly userService: UserService
    ) {}

    @Post()
    async saveUser(@Body() body) {
        return this.userService.saveUser(body.name, body.number)
    }

    @Get()
    async findAll() {
        return await this.userService.findAll()
    }

    @Get('/:id')
    async findByIdx(@Param('id') idx: string) {
        return await this.userService.findByIdx(Number(idx))
    }

    @Delete('/:id')
    async delete(@Param('id') idx: string) {
        return await this.userService.delete(Number(idx));
    }   

    @Patch('/:id')
    async updatd(@Param('id') idx: string, @Body() body) {
        return await this.userService.update(Number(idx), body)
    }
        
}
