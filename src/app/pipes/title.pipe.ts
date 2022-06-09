import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
})
export class TitlePipe implements PipeTransform {
  transform(value: string, gender?: string): string {
    let result: string = '';
    if (gender == 'f') result = `Ms. ${value}`;
    if (gender == 'm') result = `Mr. ${value}`;
    if (gender == undefined) result = value;
    return result;
  }
}
