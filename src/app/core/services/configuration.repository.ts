import {BaseRepository} from "./base.repository";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConfigModel} from "../models/config.model";
import {Inject, Injectable} from "@angular/core";
import {Environment} from "../models/environment";
import {ENV_TOKEN} from "../tokens";

@Injectable({providedIn: "root"})
export class ConfigurationRepository extends BaseRepository {
  constructor(
    @Inject(ENV_TOKEN) env: Environment,
    httClient: HttpClient,
    ) {
    super(env.apiUrl!, httClient);
  }

  getConfiguration(): Observable<ConfigModel> {
    return this.sendGet<ConfigModel>('/configuration');
  }
}
