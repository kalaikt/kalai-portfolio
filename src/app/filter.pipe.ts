import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.env.toLowerCase().includes(searchText);
    });
   }
}
