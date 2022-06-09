import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], propertyName: string, choice: string): any[] {
    let resultArr: any[] = [];
    if (choice == '') return arr;
    arr.forEach((obj) => {
      let val = obj[propertyName];
      if (
        isNaN(val) &&
        val != undefined &&
        val.toLowerCase() === choice.toLowerCase()
      )
        resultArr.push(obj);
      if (!isNaN(val) && val <= Number(choice)) resultArr.push(obj);
    });
    return resultArr;
  }
}
