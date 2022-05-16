import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'orderBy', pure: false})
export class OrderByPipe implements PipeTransform {
  transform<T extends object>(arr: T[], field: string, isAsc: boolean): T[] {
    if (arr.length === 0) {
      return arr;
    }

    if (!(field in arr[0])) {
      throw Error('Undefined field');
    }

    return arr.sort((a, b) => {
      const field1 = (a as any)[field];
      const field2 = (b as any)[field];

      if (!isNaN(parseFloat(field1)) && !isNaN(field1 - 0)) {
        return isAsc
          ? field1 - field2
          : field2 - field1;
      }

      if (typeof field1 === 'string') {
        return isAsc
          ? field1.localeCompare(field2)
          : field2.localeCompare(field1);
      }

      return field1 < field2
        ? (isAsc ? -1 : 1)
        : (!isAsc ? 1 : -1);
    });
  }
}
