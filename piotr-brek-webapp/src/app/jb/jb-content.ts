import { Component } from '@angular/core';

@Component({
    selector: 'jb-content',
    template: `
        <div class="jb-content">
            <div class="jb-landing-image"></div>
            <div class="jb-text">
                <p>
                    Działalność rozpoczęta została w 2018r. Zapewniam kompleksową obsługę inwestycji drogowych. Sprawuję
                    nadzór budowlany oraz wykonuję projekty budowlane i wykonawcze w branży drogowej, łącznie z
                    opracowaniem kosztorysów inwestorskich lub powykonawczych.
                    Posiadam uprawnienia wykonawcze oraz projektowe, bez ograniczeń, w branży drogowej. Pozwalają mi one
                    wykonywać funkcję kierownika budowy lub inspektora nadzoru, a także uprawniają mnie do projektowania
                    w specjalności inżynieryjnej drogowej bez ograniczeń.
                </p>
                <p>
                    Oferta biura:
                </p>
                <ul>
                    <li>sporządzanie projektów budowlanych i wykonawczych wraz z uzyskaniem decyzji pozwolenia na
                        budowę
                    </li>
                    <li>opracowanie projektów stałej i czasowej organizacji ruchu wraz z uzyskaniem opinii, uzgodnień i
                        decyzji
                    </li>
                    <li>usługa Kierownika Budowy, Inspektora Nadzoru, zgodnie z obowiązującymi przepisami</li>
                    <li>sporządzanie kosztorysów budowlanych w oparciu o projekt budowlany, jak również w oparciu o
                        pomiary w
                        terenie
                    </li>
                    <li>wsparcie techniczne, pomoc w rozliczeniu inwwestycji, przygotowanie dokumentacji powykonawczej i
                        operatów kolaudacyjnych
                    </li>
                </ul>

                <p>
                    Wszystkie wyżej wymienione usługi wykonywane są zgodnie z obowiązującymi przepisami oraz na
                    podstawie
                    indywidualnie zawartych umów z Zamawiającym.
                </p>
                <p>
                    Priorytetem jest zawsze dotrzymanie terminu.
                </p>
            </div>
        </div>
    `,
    styleUrls: ['../../scss/jb-content.scss']
})
export class JbContent {
}
