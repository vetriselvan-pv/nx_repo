import { Pipe, PipeTransform } from '@angular/core'
import { IDatePipe } from 'libs/shared/interface/src'

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: any, args: IDatePipe): unknown {
    switch (args.dateArgs) {
      case 'valid':
        return !Number.isNaN(new Date(value).valueOf())
        break
      case 'dayOfYear':
        return Math.floor(
          (value - Number(new Date(value.getFullYear(), 0, 0))) /
            1000 /
            60 /
            60 /
            24
        )
        break
      default:
        break
    }
  }
}
