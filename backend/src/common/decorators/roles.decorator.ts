import { SetMetadata } from "@nestjs/common";
export const Roles = (...roles: string[]) => {
    console.log('🚀 ~ Roles ~ roles:', roles)
    
    return SetMetadata("roles", roles)
};
