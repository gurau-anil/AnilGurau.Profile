import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  standalone: true,
  template: `
    <button class="btn btn-secondary btn-lg default-btn" (click)="onButtonClick($event)">
      {{content}} <i *ngIf="icon" class="{{icon}}"></i>
    </button>
  `,
  styles: [`
    .default-btn{
        border-radius: 0;
        margin: 0 0.5rem 0.5rem 0;
        border-color: #6786b2;
        background: #6786b2; 
        color: #ededed;
        transition: all 0.3s ease;

        &:hover{
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 20px rgba(103, 134, 178, 0.3);
        }

        &:active {
          transform: scale(0.97);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
        }
    }
    `]
})
export class ButtonComponent {
  @Input() content = '';
  @Input() icon = '';
  @Output() btnClicked: EventEmitter<boolean> = new EventEmitter<boolean>;

  onButtonClick(data: any){
    this.btnClicked.emit(true);
  }
}
