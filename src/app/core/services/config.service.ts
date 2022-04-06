import {Inject, Injectable} from "@angular/core";
import {SessionStorageService, StorageService} from "./storage.service";
import {ConfigModel} from "../models/config.model";
import {RoleEnum, UserModel} from "../models/user.model";
import {APP_CONFIG, AppConfig} from "./constant.service";
import {SESSION_ID} from "./generator.factory";

@Injectable({providedIn: 'root'})
export class ConfigService {
  private config!: ConfigModel;

  constructor(
    @Inject(SessionStorageService) private storage: StorageService,
    @Inject(APP_CONFIG) private appConstants: AppConfig,
    @Inject(SESSION_ID) private sessionId: string,
  ) {
  }

  isInitialized(): boolean {
    return this.config !== undefined;
  }

  initialize(user: UserModel, updateStorage: boolean = false): void {
    if (this.storage.isKeyExists(this.appConstants.ConfigStorageKey) && !updateStorage) {
      this.config = this.storage.get<ConfigModel>(this.appConstants.ConfigStorageKey);

      return;
    }

    this.config = {
      ...user,
      sessionId: this.sessionId,
    };
    this.storage.set(this.appConstants.ConfigStorageKey, this.config);
  }

  getConfig(): ConfigModel {
    return this.config;
  }

  isCurrentUserAdmin(): boolean {
    return this.getConfig().role === RoleEnum.Admin;
  }

  setConfig(config: Partial<ConfigModel>): ConfigModel {
    this.config = {...this.config, ...config};

    return this.config;
  }
}
