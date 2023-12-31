import { Component, ViewChild, Input, ElementRef, Renderer, AfterViewInit, HostListener } from '@angular/core';
import { slideIn, fadeIn } from '../animations/animations.component';

@Component ({
  selector: 'mdb-sidenav',
  templateUrl: 'sidenav.component.html'
})

export class SidenavComponent implements AfterViewInit {
  public windwosWidth: number;
  public shown: boolean;

  @Input() public class: string;
  @Input() public fixed = true;

  @ViewChild('sidenav') public sideNav: ElementRef;
  @ViewChild('overlay') public overlay: any;

  constructor( public el: ElementRef,
    public renderer: Renderer) {
  }

  ngAfterViewInit() {
    // pobraneie szerokosci okna po init
    this.windwosWidth = window.innerWidth;

    if (this.fixed) {
      this.renderer.setElementClass(document.body, 'fixed-sn', true);

      if (this.windwosWidth < 769) {
        this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(-100%)');
        this.setShown(false);
      } else {
        this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(0%)');
        this.setShown(true);
      }
    } else {
      this.renderer.setElementClass(document.body, 'hidden-sn', true);
      this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(-100%)');
      this.setShown(false);
    }
  }

  @HostListener('window:resize')
  windwosResize() {
    this.windwosWidth = window.innerWidth;
    if (this.fixed) {
      if (this.windwosWidth < 769 && this.shown) {
        this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(-100%)');
        this.setShown(false);
      } else {
        this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(0%)');
        this.setShown(true);
      }

      if (this.windwosWidth > 768 && this.shown) {
        this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(-100%)');
        this.hideOverlay();
        this.setShown(false);
      }
    } else {
      if (this.windwosWidth > 768) {
        this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(-100%)');
        this.hideOverlay();
        this.setShown(false);
      }
    }

  };

  show() {
    if (this.fixed) {
      if (this.windwosWidth < 769) {
        this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(0%)');
        this.setShown(true);
        this.showOverlay();
      } else {
        this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(0%)');
        this.setShown(true);
      }
    } else {
      this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(0%)');
      this.setShown(true);
      this.showOverlay();
    }

  }

  hide() {
    if (this.fixed) {
      if (this.windwosWidth < 769) {
        this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(-100%)');
        this.setShown(false);
        this.hideOverlay();
      } else {
        this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(-100%)');
        this.setShown(false);
      }
    } else {
      this.renderer.setElementStyle(this.sideNav.nativeElement, 'transform',  'translateX(-100%)');
      this.setShown(false);
      this.hideOverlay();
    }
  }

  toggle() {
    if (this.shown) {
      this.hide();
    }  else {
      this.show();
    }
  }

  showOverlay() {
    this.renderer.setElementStyle(this.overlay.nativeElement, 'display', 'block');
    setTimeout(() => {
      this.renderer.setElementStyle(this.overlay.nativeElement, 'opacity', '1');
    }, 0);
  }

  hideOverlay() {
    this.renderer.setElementStyle(this.overlay.nativeElement, 'opacity', '0');
    setTimeout(() => {
      this.renderer.setElementStyle(this.overlay.nativeElement, 'display', 'none');
    }, 200);
  }

  setShown(value: boolean) {
    setTimeout(() => {
      this.shown = value;
    }, 510);
  }

}
