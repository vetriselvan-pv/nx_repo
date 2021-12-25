import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TooltipDirective } from './tooltip/tooltip.directive'
import { AccessControlDirective } from './access-control/access-control.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [TooltipDirective, AccessControlDirective],
  exports: [TooltipDirective],
})
export class WebAngularSharedDirectiveModule {}
