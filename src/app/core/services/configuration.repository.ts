import {BaseRepository} from "./base.repository";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConfigModel} from "../models/config.model";
import {Inject, Injectable} from "@angular/core";
import {ENV_TOKEN} from "../../app.module";
import {Environment} from "../models/environment";

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
