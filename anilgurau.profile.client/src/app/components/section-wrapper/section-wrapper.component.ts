import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-wrapper',
  standalone: true,
  templateUrl: './section-wrapper.component.html',
  styleUrl: './section-wrapper.component.scss'
})
export class SectionWrapperComponent {
  @Input() title: string ="";
}
