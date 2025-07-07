import {
    Body,
    Controller,
    DefaultValuePipe,
    Get,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Query,
    Res,
    UseGuards,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { Response } from "express";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Roles } from "~/common/decorators/roles.decorator";
import { JwtAuthGuard } from "~/common/guards/jwt-auth.guard";
import { RolesGuard } from "~/common/guards/roles.guard";

// @ApiBearerAuth()
@Controller("cats")
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findAll(@Res() res: Response) {
        const cats = this.catsService.findAll();
        return res.status(HttpStatus.OK).json(cats);
    }

    @Get("paging")
    findAllPaging(
        @Query("page", new DefaultValuePipe(0), ParseIntPipe) page: number,
        @Res() res: Response,
    ) {
        const cats = this.catsService.findAll();
        return res.status(HttpStatus.OK).json(cats);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles("admin")
    @Get("protected")
    getProtectedData() {
        return "You are admin";
    }

    @Get(":age")
    findOneByAge(@Param("age", ParseIntPipe) age: number) {
        return this.catsService.findOneByAge(age);
    }

    @Post()
    // @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
    create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }
}
