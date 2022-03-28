import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { Highlight2Directive } from './directives/highlight2.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    Highlight2Directive,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    Highlight2Directive,
  ]
})
export class SharedModule { }
