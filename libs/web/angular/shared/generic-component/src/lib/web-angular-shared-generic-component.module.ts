import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TextBoxComponent } from './text-box/text-box.component'
import { SelectComponent } from './select/select.component'
import { CheckboxComponent } from './checkbox/checkbox.component'
import { FileComponent } from './file/file.component'
import { ToggleComponent } from './toggle/toggle.component'
import { RadioComponent } from './radio/radio.component'
import { MaskInputComponent } from './mask-input/mask-input.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    TextBoxComponent,
    SelectComponent,
    CheckboxComponent,
    FileComponent,
    ToggleComponent,
    RadioComponent,
    MaskInputComponent,
  ],
})
export class WebAngularSharedGenericComponentModule {}
