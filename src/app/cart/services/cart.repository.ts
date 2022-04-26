import {CartItemModel} from "../models/cart-item.model";
import {LocalStorageService, StorageService} from "../../core/services/storage.service";
import {Inject, Injectable} from "@angular/core";
import {APP_CONFIG, AppConfig} from "../../core/services/constant.service";
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})
export class CartRepository {
  constructor(
    @Inject(LocalStorageService) private storage: StorageService,
    @Inject(APP_CONFIG) private appConstants: AppConfig,
  ) {
    if (!storage.isKeyExists(appConstants.CartStorageKey)) {
      storage.set(appConstants.CartStorageKey, []);
    }
  }

  getStoredCart(): Observable<CartItemModel[]> {
    return of(this.storage
      .get<CartItemModel[]>(this.appConstants.CartStorageKey));
  }

  save(items: CartItemModel[]): void {
    this.storage.set(this.appConstants.CartStorageKey, items);
  }
}
