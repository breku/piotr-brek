import { Component } from '@angular/core';

@Component({
    selector: 'jb-content',
    template: `
        <div class="jb-content">
            <div class="jb-landing-image-wrapper">
                <div class="jb-landing-image"></div>
            </div>
            <div class="jb-text">
                <p>
                    Działalność rozpoczęta została w 2018r. Zapewniam kompleksową obsługę inwestycji drogowych. Sprawuję
                    nadzór budowlany oraz wykonuję projekty budowlane i wykonawcze w branży drogowej, łącznie z
                    opracowaniem kosztorysów inwestorskich lub powykonawczych.
                    Posiadam uprawnienia wykonawcze oraz projektowe, bez ograniczeń, w branży drogowej. Pozwalają mi one
                    wykonywać funkcję kierownika budowy lub inspektora nadzoru, a także uprawniają mnie do projektowania
                    w specjalności inżynieryjnej drogowej bez ograniczeń.
                </p>
                <jb-content-offer></jb-content-offer>
            </div>
        </div>
    `,
    styleUrls: ['../../scss/jb-content.scss']
})
export class JbContent {
}
