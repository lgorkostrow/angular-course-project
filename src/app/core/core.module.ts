import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SessionStorageService, StorageService} from "./services/storage.service";
import {GeneratorService} from "./services/generator.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GeneratorService,
    { provide: SessionStorageService, useValue: new StorageService(window.sessionStorage) },
  ],
})
export class CoreModule { }
