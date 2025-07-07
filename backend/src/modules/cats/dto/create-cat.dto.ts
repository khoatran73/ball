import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCatDto {
    @IsNotEmpty()
    @ApiProperty({
        description: "The name of a cat",
    })
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: "The age of a cat",
        minimum: 0,
        default: 1,
    })
    age: number;

    @IsNotEmpty()
    @ApiProperty({
        description: "The breed of a cat",
    })
    breed: string;
}
