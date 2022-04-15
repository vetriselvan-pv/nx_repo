import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'uniqueId',
})
export class UniqueIdPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    const head = Date.now().toString(36)
    const tail = Math.random().toString(36).substr(2)
    return `${value}_${head + tail}`
  }
}
