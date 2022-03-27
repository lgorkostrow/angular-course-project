import {GeneratorService} from "./generator.service";
import {InjectionToken} from "@angular/core";

export const SESSION_ID = new InjectionToken<string>('Session ID');
export function GeneratorFactory(n: number): (generatorService: GeneratorService) => string {
  return (generatorService: GeneratorService): string => generatorService.generate(n);
}
