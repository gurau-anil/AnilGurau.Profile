import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-wrapper',
  standalone: true,
  templateUrl: './section-wrapper.component.html'
})
export class SectionWrapperComponent {
  @Input() title: string ="";
}
