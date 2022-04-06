import {Component, OnInit} from '@angular/core';
import {ConfigService} from "./core/services/config.service";
import {RoleEnum} from "./core/models/user.model";
import {DropdownSelectItemModel} from "./shared/models/dropdown-select-item.model";

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

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.initialize(
      { id: 12, fullName: 'Vasya Pupkin', email: 'vasya@gmail.com', role: RoleEnum.User }
    );
    this.isCurrentUserAdmin = this.configService.isCurrentUserAdmin();
  }

  onRoleChange(event: DropdownSelectItemModel<RoleEnum>): void {
    this.configService.setConfig({ role: event.value });
    this.isCurrentUserAdmin = this.configService.isCurrentUserAdmin();
  }
}
