import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCatDto {
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;
    
    @IsNotEmpty()
    breed: string;
}

export interface CatDto {
    name: string;
    age: number;
    breed: string;
}
