import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ctTextEllipsis]',
})

export class TextEllipsisDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.addEllipsisStyles();
  }

  private addEllipsisStyles(): void {
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'white-space', 'nowrap');
    this.renderer.setStyle(this.el.nativeElement, 'text-overflow', 'ellipsis');
  }
}
