import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./core/services/config.service";
import {RoleEnum} from "./core/models/user.model";
import {DropdownSelectItemModel} from "./shared/models/dropdown-select-item.model";
import {AuthService} from "./core/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isCurrentUserAdmin = false;
  roleList = [
    new DropdownSelectItemModel('User', RoleEnum.User, true),
    new DropdownSelectItemModel('Admin', RoleEnum.Admin, false),
  ];

  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.configService.initialize();
    this.authService.authorize();
    this.isCurrentUserAdmin = this.authService.isCurrentUserAdmin();
  }

  onRoleChange(event: DropdownSelectItemModel<RoleEnum>): void {
    this.authService.updateRole(event.value);
    this.isCurrentUserAdmin = this.authService.isCurrentUserAdmin();
  }
}
