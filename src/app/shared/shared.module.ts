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
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {
  ValidationErrorMessageComponent
} from './components/validation-error-message/validation-error-message.component';

@NgModule({
  declarations: [
    HighlightDirective,
    Highlight2Directive,
    OrderByPipe,
    DropdownSelectComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    ValidationErrorMessageComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HighlightDirective,
    Highlight2Directive,
    OrderByPipe,
    DropdownSelectComponent,
    ToolbarComponent,
    CommonModule,
    FormsModule,
    ValidationErrorMessageComponent,
  ],
  providers: [
    OrderByPipe,
  ],
})
export class SharedModule {
}
