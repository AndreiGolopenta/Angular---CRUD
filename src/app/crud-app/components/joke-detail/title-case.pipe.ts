import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecasefirstletter'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string) {
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
  }
}