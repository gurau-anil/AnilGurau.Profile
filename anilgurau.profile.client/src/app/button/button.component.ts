import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  standalone: true,
  template: `
    <button class="btn btn-secondary btn-lg default-btn" (click)="onButtonClick($event)">
      {{content}}
    </button>
  `,
  styles: `

    .default-btn{
        border-radius: 0;
        margin: 0 0.5rem 0.5rem 0;
        border-color: #6786b2;
        background: #6786b2; color: #ededed
    }
    .default-btn:hover{
        color: #e2e2e2;
        background: #6786b2;
    }
  `
})
export class ButtonComponent {
  @Input() content = ''
  @Output() btnClicked: EventEmitter<boolean> = new EventEmitter<boolean>;

  onButtonClick(data: any){
    this.btnClicked.emit(true);
  }
}
