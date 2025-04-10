import { BadRequestException, Body, Controller, Get, HttpStatus, Post, Query, Res, UseFilters } from "@nestjs/common";
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

    @Post()
    @UseFilters(new HttpExceptionFilter())
    async create(@Body() createCatDto: CreateCatDto) {
        throw new BadRequestException("Bad request!!!");
        this.catsService.create(createCatDto);
    }
}
