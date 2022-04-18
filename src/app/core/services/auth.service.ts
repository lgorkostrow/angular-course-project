import {RoleEnum, UserModel} from "../models/user.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class AuthService {
  private user!: UserModel;

  authorize(): void {
    this.user = { id: 12, fullName: 'Vasya Pupkin', email: 'vasya@gmail.com', role: RoleEnum.User };
  }

  isCurrentUserAdmin(): boolean {
    return this.user.role === RoleEnum.Admin;
  }

  updateRole(newRole: RoleEnum): void {
    this.user.role = newRole;
  }
}
