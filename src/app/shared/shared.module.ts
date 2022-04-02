import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './directives/highlight.directive';
import {Highlight2Directive} from './directives/highlight2.directive';
import {OrderByPipe} from "./pipes/order-by.pipe";
import {DropdownSelectComponent} from './components/dropdown-select/dropdown-select.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    HighlightDirective,
    Highlight2Directive,
    OrderByPipe,
    DropdownSelectComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatToolbarModule
  ],
  exports: [
    HighlightDirective,
    Highlight2Directive,
    OrderByPipe,
    DropdownSelectComponent,
    ToolbarComponent,
    CommonModule,
    FormsModule,
  ],
  providers: [
    OrderByPipe,
  ],
})
export class SharedModule {
}
