import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/common/enums/role.enum';

const ROLES_KEY = 'roles';
const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

export { ROLES_KEY, Roles };
