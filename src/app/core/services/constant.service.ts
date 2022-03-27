import {InjectionToken} from "@angular/core";

export interface AppConfig {
  ConfigStorageKey: string;
  CartStorageKey: string;
}

export const APP_DI_CONFIG: AppConfig = {
  ConfigStorageKey: 'config',
  CartStorageKey: 'cart',
};

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');
