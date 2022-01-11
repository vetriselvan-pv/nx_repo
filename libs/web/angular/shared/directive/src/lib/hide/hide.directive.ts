import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core'

@Directive({
  selector: '[pvsHideElement]',
})
export class HideDirective implements OnInit {
  @Input('pvsHideElement') delayTime = 0

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.container.createEmbeddedView(this.template)
    setTimeout(() => {
      this.container.clear()
    }, this.delayTime)
  }
}

// --> check this for reference
// https://medium.com/technofunnel/creating-custom-structural-directive-in-angular-79a2862cc169
