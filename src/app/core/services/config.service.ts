import {Inject, Injectable} from "@angular/core";
import {SessionStorageService, StorageService} from "./storage.service";
import {ConfigModel} from "../models/config.model";
import {APP_CONFIG, AppConfig} from "./constant.service";
import {ConfigurationRepository} from "./configuration.repository";
import {take} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class ConfigService {
  private defaultConfig: ConfigModel = {
    retryCount: 1,
  };
  private config: ConfigModel = this.defaultConfig;

  constructor(
    @Inject(SessionStorageService) private storage: StorageService,
    @Inject(APP_CONFIG) private appConstants: AppConfig,
    private configRepository: ConfigurationRepository,
  ) {
  }

  isInitialized(): boolean {
    return this.config !== undefined;
  }

  initialize(updateStorage: boolean = false): void {
    if (this.storage.isKeyExists(this.appConstants.ConfigStorageKey) && !updateStorage) {
      this.config = this.storage.get<ConfigModel>(this.appConstants.ConfigStorageKey);

      return;
    }

    this.storage.set(this.appConstants.ConfigStorageKey, this.config);

    this.configRepository.getConfiguration()
      .pipe(
        take(1),
      )
      .subscribe(config => {
        this.config = config;
        this.storage.set(this.appConstants.ConfigStorageKey, this.config);
      })
    ;
  }

  getConfig(): ConfigModel {
    return this.config;
  }

  setConfig(config: Partial<ConfigModel>): ConfigModel {
    this.config = {...this.config, ...config};

    return this.config;
  }
}
