export interface UserModel {
  id: number;
  fullName: string;
  email: string;
  role: RoleEnum;
}

export enum RoleEnum {
  User = 'User',
  Admin = 'Admin',
}
