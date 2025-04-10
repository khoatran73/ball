import {
    BadRequestException,
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
    UseFilters,
    UsePipes,
    ValidationPipe,
} from "@nestjs/common";
import { CatDto, CreateCatDto } from "./dto/cats.dto";
import { Response } from "express";
import { CatsService } from "./cats.service";
import { HttpExceptionFilter } from "~/common/filters/http-exception.filter";

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
