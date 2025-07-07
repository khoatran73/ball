import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { loggerMiddleware } from "./common/middleware/logger.middleware";
import { CatsController } from "./modules/cats/cats.controller";
import { CatsModule } from "./modules/cats/cats.module";
import { DogsModule } from "./modules/dogs/dogs.module";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        CatsModule,
        DogsModule,
        AuthModule,
        UsersModule,
        PrismaModule,
    ],
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
