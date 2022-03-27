import {Injectable} from "@angular/core";

@Injectable()
export class GeneratorService {
  generate(n: number): string {
    const allCapsAlpha = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const allLowerAlpha = [...'abcdefghijklmnopqrstuvwxyz'];
    const allNumbers = [...'0123456789'];

    const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha,];

    return [...Array(n)]
      .map(i => base[Math.random() * base.length|0])
      .join('');
  }
}
