import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SessionStorageService, StorageService} from "./services/storage.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: SessionStorageService, useValue: new StorageService(window.sessionStorage) },
  ],
})
export class CoreModule { }
