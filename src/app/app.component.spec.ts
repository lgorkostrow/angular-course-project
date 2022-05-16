import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {ConfigService} from "./core/services/config.service";
import {AuthService} from "./core/services/auth.service";
import {DropdownSelectItemModel} from "./shared/models/dropdown-select-item.model";
import {RoleEnum} from "./core/models/user.model";

describe('AppComponent', () => {
  let component: AppComponent;
  let mockConfigurationService: ConfigService;
  let mockAuthService: AuthService;

  beforeEach(async () => {
    mockConfigurationService = jasmine.createSpyObj(['initialize']);
    mockAuthService = jasmine.createSpyObj(['authorize', 'isCurrentUserAdmin', 'updateRole']);

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: ConfigService, useValue: mockConfigurationService},
        {provide: AuthService, useValue: mockAuthService},
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize application configuration', () => {
      // Act
      component.ngOnInit();

      // Assert
      expect(mockConfigurationService.initialize).toHaveBeenCalled();
    });

    it('should call authorize method', () => {
      // Act
      component.ngOnInit();

      // Assert
      expect(mockAuthService.authorize).toHaveBeenCalled();
    });

    it('should set isCurrentUserAdmin property', () => {
      // Arrange
      mockAuthService.isCurrentUserAdmin = jasmine.createSpy().and.returnValue(false);

      // Act
      component.ngOnInit();

      // Assert
      expect(component.isCurrentUserAdmin).toBeDefined();
      expect(mockAuthService.isCurrentUserAdmin).toHaveBeenCalled();
    });
  });

  describe('onRoleChange', () => {
    it('should call updateRole method of authService', () => {
      // Arrange
      const data = new DropdownSelectItemModel('Test', RoleEnum.User, false);

      // Act
      component.onRoleChange(data);

      // Assert
      expect(mockAuthService.updateRole).toHaveBeenCalledWith(data.value);
    });

    it('should reset isCurrentUserAdmin', () => {
      // Arrange
      const data = new DropdownSelectItemModel('Test', RoleEnum.Admin, false);
      mockAuthService.isCurrentUserAdmin = jasmine.createSpy().and.returnValue(true);

      // Act
      component.onRoleChange(data);

      // Assert
      expect(component.isCurrentUserAdmin).toBeTrue();
      expect(mockAuthService.isCurrentUserAdmin).toHaveBeenCalled();
    });
  });
});
