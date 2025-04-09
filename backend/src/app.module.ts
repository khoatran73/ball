import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { CatsController } from "./cats/cats.controller";
import { CatsModule } from "./cats/cats.module";
import { DogsModule } from "./dogs/dogs.module";
import { loggerMiddleware } from "./middlewares/logger.middleware";

@Module({
    imports: [ConfigModule.forRoot(), CatsModule, DogsModule],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(loggerMiddleware)
            .exclude({
                path: "cats",
                method: RequestMethod.POST,
            })
            .forRoutes(CatsController);
    }
}
