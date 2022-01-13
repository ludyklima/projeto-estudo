import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inc',
})
export class IncPipe implements PipeTransform {
  transform(array: number[]): number[] {
    return array.map((n) => n+1);
  }
}
