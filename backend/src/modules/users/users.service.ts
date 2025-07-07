import { Injectable } from "@nestjs/common";
import { User } from "./interfaces/user.interface";
import { PrismaService } from "~/prisma/prisma.service";

const users2 = [
    {
        userId: 1,
        username: "john",
        password: "changeme",
    },
    {
        userId: 2,
        username: "maria",
        password: "guess",
    },
];

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(username: string): Promise<User | undefined> {
        return users2.find((user) => user.username === username);
    }

    async findAll(): Promise<any> {
        return await this.prisma.user.findMany();
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }
}
