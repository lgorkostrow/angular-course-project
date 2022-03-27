import {Inject, Injectable} from "@angular/core";
import {SessionStorageService, StorageService} from "./storage.service";
import {ConfigModel} from "../models/config.model";
import {UserModel} from "../models/user.model";
import {APP_CONFIG, AppConfig} from "./constant.service";
import {GeneratorService} from "./generator.service";
import {SESSION_ID} from "./generator.factory";

@Injectable()
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

  initialize(user: UserModel): void {
    if (this.isInitialized()) {
      return;
    }

    if (this.storage.isKeyExists(this.appConstants.ConfigStorageKey)) {
      this.config = this.storage.get<ConfigModel>(this.appConstants.ConfigStorageKey);

      return;
    }

    this.config = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      sessionId: this.sessionId,
    };
    this.storage.set(this.appConstants.ConfigStorageKey, this.config);
  }

  getConfig(): ConfigModel {
    return this.config;
  }

  setConfig(config: Partial<ConfigModel>): ConfigModel {
    this.config = {...this.config, ...config};

    return this.config;
  }
}
