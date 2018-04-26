import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(args==='-1'){
      return value.sort(sortNumberDsc)
    }else if(args==='1'){
      return value.sort(sortNumberAsc)
    }else{
      return value.sort(sortNumberAsc)
    }
    
    
    function sortNumberAsc(a, b){
      return a-b
    }
    function sortNumberDsc(a, b){
      return b-a
    }
  }

  

}
