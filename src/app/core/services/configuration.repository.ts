import {BaseRepository} from "./base.repository";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConfigModel} from "../models/config.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class ConfigurationRepository extends BaseRepository {
  constructor(httClient: HttpClient) {
    super(httClient);
  }

  getConfiguration(): Observable<ConfigModel> {
    return this.sendGet<ConfigModel>('/api/configuration');
  }
}
