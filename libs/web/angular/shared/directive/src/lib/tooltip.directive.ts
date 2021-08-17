import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core'
import { Placement, createPopper, Options } from '@popperjs/core'
import { Subject } from 'rxjs'

@Directive({
  selector: '[pvsTooltip]',
})
export class TooltipDirective implements OnInit {
  @Input() tooltipTarget?: HTMLElement

  @Input() placement?: Placement
  @Input() appPopper?: HTMLElement

  private popper: any

  private readonly defaultConfig: Options = {
    placement: 'top',
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: '.popper__arrow',
        },
      },
    ],
    strategy: 'absolute',
  }
  private readonly destroy$ = new Subject<void>()

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const reference = this.appPopper ? this.appPopper : this.el.nativeElement
    const target = this.tooltipTarget
      ? this.tooltipTarget
      : this.el.nativeElement
    this.popper = createPopper(reference, target, {
      ...this.defaultConfig,
    })
  }
}
