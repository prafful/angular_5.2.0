import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //logic of what needs to be done when this pipe is called
    if(args==='asc'){
      return value.sort()
    }else if(args === 'dsc'){
      return value.sort().reverse();
    }else{
      return value.sort()
    }


    
    //'10' === 10
   
  }

}
