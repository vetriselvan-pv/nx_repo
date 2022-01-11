import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TooltipDirective } from './tooltip/tooltip.directive'
import { AccessControlDirective } from './access-control/access-control.directive'
import { HideDirective } from './hide/hide.directive'
import { DelayRenderingDirective } from './delay-rendering/delay-rendering.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [
    TooltipDirective,
    AccessControlDirective,
    HideDirective,
    DelayRenderingDirective,
  ],
  exports: [TooltipDirective],
})
export class WebAngularSharedDirectiveModule {}
