import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jb-content-offer',
    template: `
        <div class="headline">Oferta biura:</div>
        <div class="offer-rows">
            <div class="offer-row">
                <jb-content-offer-cell [text]="offers[0]" [image]="'documents'"></jb-content-offer-cell>
                <jb-content-offer-cell [text]="offers[1]" [image]="'road-icon'"></jb-content-offer-cell>
                <jb-content-offer-cell [text]="offers[2]" [image]="'chat'"></jb-content-offer-cell>
            </div>
            <div class="offer-row">
                <jb-content-offer-cell [text]="offers[3]" [image]="'tools'"></jb-content-offer-cell>
                <jb-content-offer-cell [text]="offers[4]" [image]="'finance'"></jb-content-offer-cell>
            </div>
        </div>

        <p>
            Wszystkie wyżej wymienione usługi wykonywane są zgodnie z obowiązującymi przepisami oraz na
            podstawie
            indywidualnie zawartych umów z Zamawiającym.
        </p>
        <p>
            Priorytetem jest zawsze dotrzymanie terminu.
        </p>
    `,
    styleUrls: ['../../scss/jb-content-offer.scss']
})
export class JbContentOffer implements OnInit {

    offers: string[] = [];

    ngOnInit(): void {
        this.offers[0] = 'Sporządzanie projektów budowlanych i wykonawczych wraz z uzyskaniem decyzji pozwolenia nabudowę';
        this.offers[1] = 'Sporządzanie kosztorysów budowlanych w oparciu o projekt budowlany, jak również w oparciu o pomiary w terenie';
        this.offers[2] = 'Wsparcie techniczne, pomoc w rozliczeniu inwwestycji, przygotowanie dokumentacji powykonawczej i operatów kolaudacyjnych';
        this.offers[3] = 'Usługa Kierownika Budowy, Inspektora Nadzoru, zgodnie z obowiązującymi przepisami';
        this.offers[4] = 'Opracowanie projektów stałej i czasowej organizacji ruchu wraz z uzyskaniem opinii, uzgodnień i decyzji';
    }
}
