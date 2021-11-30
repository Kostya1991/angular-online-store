import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-image',
  templateUrl: './image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  @Output('onClick')
  public onClick$ = new EventEmitter<void>();

  @Input()
  public name = '';

  @Input()
  public width = 200;

  @Input()
  public height = 200;

  @HostListener('click', [])
  public onImageClick() {
    this.onClick$.emit();
  }
}
