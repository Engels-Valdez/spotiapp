import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimagen'
})
export class NoimagenPipe implements PipeTransform {

  transform(value: any ['url']): any {
    
      if( value ){
        
        return value.url;

      }else{

        return 'assets/img/noimagen.png';
        
      }

  }

}
