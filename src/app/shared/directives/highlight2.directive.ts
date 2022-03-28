import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class Highlight2Directive {
  @Input() defaultColor: string = '#FFFFFF';
  @Input() highlightColor: string = '#CCCCCC';

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor);
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.defaultColor);
  }
}
