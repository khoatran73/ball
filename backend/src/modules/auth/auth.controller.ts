import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

class SignInParam {
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    password: string;
}

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("login")
    async login(@Body() body: SignInParam) {
        const user = await this.authService.validateUser(body.email, body.password);
        return this.authService.login(user);
    }
}
