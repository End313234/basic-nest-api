import { Body, Delete, Get, Post, Patch, Put } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { UsersService } from "src/providers/users.service";

@Controller("users")
export default class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUser(
        @Body("name") name: string,
        @Body("email") email: string,
        @Body("password") password: string
    ) {
        return await this.usersService.createUser(name, email, password);
    }

    @Get("/all")
    async getAll(
        @Body("email") email: string,
        @Body("password") password: string
    ) {
        return await this.usersService.getAll(email, password);
    }

    @Delete()
    async deleteUser(
        @Body("email") email: string,
        @Body("password") password: string
    ) {
        return await this.usersService.removeUser(email, password);
    }

    @Get()
    async getSpecificUser(
        @Body("username") username: string,
        @Body("email") email: string,
        @Body("password") password: string
    ) {
        return await this.usersService.getSpecificUser(username, email, password);
    }

    @Put()
    async updateUser(
        @Body("email") email: string,
        @Body("password") password: string,
        @Body("infoToUpdate") infoToUpdate: string,
        @Body("newInfo") newInfo: string
    ) {
        return await this.usersService.updateUser(email, password, infoToUpdate, newInfo);
    }

    @Patch()
    async makeLogin(
        @Body("email") email: string,
        @Body("password") password: string
    ) {
        return await this.usersService.makeLogin(email, password);
    }

    @Put("/todo")
    async createItem(
        @Body("itemName") itemName: string,
        @Body("itemDescription") itemDescription: string,
        @Body("email") email: string,
        @Body("password") password: string
    ) {
        return await this.usersService.createTodoListItem(itemName, itemDescription, email, password);
    }

    @Delete("/todo")
    async deleteItem(
        @Body("itemName") itemName: string,
        @Body("email") email: string,
        @Body("password") password: string
    ) {
        return await this.usersService.deleteTodoListItem(itemName, email, password);
    }

}