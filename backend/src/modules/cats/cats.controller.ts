import { Body, Controller, Get, HttpStatus, Post, Query, Res } from "@nestjs/common";
import { CatDto, CreateCatDto } from "./dto/cats.dto";
import { Response } from "express";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    findAll(@Res() res: Response) {
        const cats = this.catsService.findAll();
        return res.status(HttpStatus.OK).json(cats);
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }
}
