import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core'

@Directive({
  selector: '[pvsDelayRendering]',
})
export class DelayRenderingDirective implements OnInit {
  @Input('pvsDelayRendering') delayTime = 0

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.container.createEmbeddedView(this.template)
    }, this.delayTime)
  }
}

// --> check this for reference
// https://medium.com/technofunnel/creating-custom-structural-directive-in-angular-79a2862cc169
