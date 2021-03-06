
import { Module } from "@nestjs/common";
import UsersController from "src/controllers/users.controller";
import { UsersService } from "src/providers/users.service";

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}