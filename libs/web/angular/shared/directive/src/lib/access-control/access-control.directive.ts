import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[pvsAccessControl]',
})
export class AccessControlDirective implements OnInit {
  @Input() moduleType: string
  @Input() accessType: string

  //auth service need to inject

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.display = 'none'
    this.checkAccess()
  }

  // oonce auth service implemented need to check the access from the api and display accordingly
  checkAccess() {
    // const accessControl : any = this.auth.getAccessControl()
    // const module: any = accessControls.find(access => access.module_name === this.moduleType);
    // this.elementRef.nativeElement.style.display = module[this.accessType] ? "block" : "none";
  }
}

// Ex: to use directive

// <button
// accessControl
// moduleType="Users"
// accessType="create_action"
// > +
// </button>

// https://betterprogramming.pub/create-a-role-based-show-hide-directive-in-angular-8d83fca2eb69 --> for reference
