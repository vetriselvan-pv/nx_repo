import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UniqueIdPipe } from './unique-id.pipe'
import { DatePipe } from './date.pipe'

@NgModule({
  imports: [CommonModule],
  declarations: [UniqueIdPipe, DatePipe],
})
export class WebAngularSharedPipesModule {}
