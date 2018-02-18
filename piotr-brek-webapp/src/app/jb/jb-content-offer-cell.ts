import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'jb-content-offer-cell',
    template: `
        <div class="offer-cell-wrapper">
            <div [@fadeInAnimation] class="offer-cell-image offer-cell-image-{{image}}"></div>
            <div class="offer-cell">{{text}}</div>
        </div>

    `,
    animations: [
        trigger('fadeInAnimation', [
            transition(':enter', [
                style({opacity: 0}),
                animate('1.5s', style({opacity: 1}))
            ]),
        ])],
    styleUrls:
        ['../../scss/jb-content-offer.scss']
})

export class JbContentOfferCell {

    @Input()
    text: string;

    @Input()
    image: string;

}
