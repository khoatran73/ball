import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CatsModule } from "./cats/cats.module";
import { DogsModule } from "./dogs/dogs.module";

@Module({
    imports: [ConfigModule.forRoot(), CatsModule, DogsModule],
})
export class AppModule {}
