import { Component, Input } from '@angular/core';

@Component({
    selector: 'jb-content-offer-cell',
    template: `
        <div class="offer-cell-wrapper">
            <div class="offer-cell-image offer-cell-image-{{image}}"></div>
            <div class="offer-cell">{{text}}</div>
        </div>

    `,
    styleUrls: ['../../scss/jb-content-offer.scss']
})
export class JbContentOfferCell {

    @Input()
    text: string;

    @Input()
    private image: string;

}
