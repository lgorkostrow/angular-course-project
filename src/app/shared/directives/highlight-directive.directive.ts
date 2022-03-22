import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirective {
  @Input() public defaultColor: string = '#FFFFFF';
  @Input() public highlightColor: string = '#CCCCCC';

  private currentColor: string = this.defaultColor; // '#FFFFFF';

  @HostBinding('style.background-color') get getBackgroundColor() {
    return this.currentColor;
  }

  @HostListener('mouseover') onMouseOver() {
    console.log(222)
    this.currentColor = this.highlightColor;
  }

  @HostListener('mouseout') onMouseOut() {
    this.currentColor = this.defaultColor;
  }

  constructor() {
  }

}
