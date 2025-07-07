import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

const setupSwagger = (app: INestApplication<any>) => {
    const config = new DocumentBuilder()
        .setTitle("BALL")
        .setDescription("The BALL API document")
        .setVersion("1.0")
        .addBearerAuth()
        .build();

    const options: SwaggerDocumentOptions = {
        operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
    };

    const documentFactory = () => SwaggerModule.createDocument(app, config, options);

    SwaggerModule.setup("swagger/index", app, documentFactory, {
        jsonDocumentUrl: "swagger/json",
    });
};

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    setupSwagger(app);

    await app.listen(process.env.PORT ?? 5000);
}

bootstrap();
