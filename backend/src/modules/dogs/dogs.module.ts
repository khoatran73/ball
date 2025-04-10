import { Module } from "@nestjs/common";
import { DogsController } from "./dogs.controller";
import { CatsModule } from "../cats/cats.module";

@Module({
    imports: [CatsModule],
    controllers: [DogsController],
})
export class DogsModule {}
