import { Body, Controller, Get, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CatsService } from "src/cats/cats.service";

@Controller("dogs")
export class DogsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    findAll(@Res() res: Response) {
        const cats = this.catsService.findAll();
        return res.status(HttpStatus.OK).json(cats);
    }

    @Post()
    create(@Body() createCatDto: any) {
        this.catsService.create(createCatDto);
    }
}
