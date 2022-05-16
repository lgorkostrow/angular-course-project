import {InjectionToken} from "@angular/core";
import {Environment} from "./models/environment";

export const ENV_TOKEN = new InjectionToken<Environment>(
  'app.environment.token'
);
