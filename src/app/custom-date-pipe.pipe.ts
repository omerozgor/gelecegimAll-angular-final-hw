import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customDatePipe'
  
})
export class CustomDatePipePipe implements PipeTransform {

  // Tablolarda tarihleri istediğim şekilde gösterebilmek için custom pipe
  
  constructor(private datePipe: DatePipe){

  }

  transform(value: string): string {
    if (Date.parse(value)) { // eğer verilen string tarihe çevrilebiliyorsa
      
      let formattedDate = this.datePipe.transform(value, 'MMMM dd, yyyy');
    if (formattedDate) {
      return formattedDate;
    }else{
      return value;
    }
      
    }else{ // çeviremiyorsa öylece bırakıyor
      
      return value;
    }
    
    
    
  }

}
