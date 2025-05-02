import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';

@Component({
  selector: 'app-marquee',
  imports:[NgxMarqueeComponent, CommonModule],
  template: `
    <div class="marquee-wrapper">
        <om-marquee [scrollable] ="false" [reverse]="reverse" [pauseOnHover]="false" animationDuration="35s">
          <div *ngFor="let item of data; index as i;" class="content-block" #OmMarqueeContent>
            <p>
            <i class="marquee-icon {{item}}"></i>
            </p>
          </div>
        </om-marquee>
    </div>
  
  `,
  styles: `
  .marquee-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .content-block {
    border-radius: 0.75rem;
    border: 1px solid var(--text-color);
    padding: 0 3rem;
  }
  .marquee-icon{
    font-size: 4rem;
    opacity: 0.5;
  }

  // .marquee-gradient {
  //   position: absolute;
  //   top: 0;
  //   height: 100%;
  //   width: 33%;

  //   &.left {
  //     left: 0;
  //     background-image: linear-gradient(
  //       to right,
  //       var(--surface-background),
  //       transparent
  //     );
  //   }

  //   &.right {
  //     right: 0;
  //     background-image: linear-gradient(
  //       to left,
  //       var(--surface-background),
  //       transparent
  //     );
  //   }
  // }
  `
})
export class MarqueeComponent {
  @Input() data: any[] =[];
  @Input() reverse: boolean= false;
}
