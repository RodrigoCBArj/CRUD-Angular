import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Coméria': return 'theater_comedy';
      case 'Natureza': return 'park';
    }
    return 'smart_display';
  }

}
