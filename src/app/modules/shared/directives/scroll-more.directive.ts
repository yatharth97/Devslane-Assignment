import {AfterViewInit, EventEmitter, Directive, ElementRef, Input, Output} from "@angular/core";
import {fromEvent} from "rxjs";
import {exhaustMap, filter, map, pairwise, startWith} from "rxjs/operators";

@Directive({selector: "[scrollMore]"})
export class ScrollMoreDirective implements AfterViewInit {
  @Input() scrollPercent = 95;
  @Output() scrollEnd = new EventEmitter();

  private scrollEvent$;
  private userScrolledDown$;
  private requestOnScroll$;

  constructor(private elm: ElementRef) {
  }

  ngAfterViewInit() {

    this.registerScrollEvent();

    this.streamScrollEvents();

    this.requestCallbackOnScroll();

  }

  private registerScrollEvent() {

    this.scrollEvent$ = fromEvent(this.elm.nativeElement, "scroll");
  }

  private streamScrollEvents() {
    this.userScrolledDown$ = this.scrollEvent$
      .pipe(map((e: any): ScrollPosition => ({
          sH: e.target.scrollHeight,
          sT: e.target.scrollTop,
          cH: e.target.clientHeight
        })),
        pairwise(),
        filter(positions => {
          return this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1]);
        }));
  }

  private requestCallbackOnScroll() {
    this.requestOnScroll$ = this.userScrolledDown$;

    this.requestOnScroll$
      .subscribe((data) => {
        this.scrollEnd.emit();
        console.log(data);
      }, (err) => console.log(err));

  }

  private isUserScrollingDown = (positions) => {
    return positions[0].sT < positions[1].sT;
  }

  private isScrollExpectedPercent = (position) => {
    return ((position.sT + position.cH) / position.sH) > (this.scrollPercent / 100);
  }
}

interface ScrollPosition {
  sH: number;
  sT: number;
  cH: number;
}

const DEFAULT_SCROLL_POSITION: ScrollPosition = {
  sH: 0,
  sT: 0,
  cH: 0
};
