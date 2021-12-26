import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Comédia': return 'theater_comedy';
      case 'Natureza': return 'park';
    }
    return 'smart_display';
  }

}
