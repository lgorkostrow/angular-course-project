import {UserModel} from "./user.model";

export interface ConfigModel extends UserModel{
  sessionId: string;
}
