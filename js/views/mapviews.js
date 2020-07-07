import { elements } from './base';
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {endPrice} from '../../src/index';


//map flow
export const clearObj = () => {
    elements.devis.innerHTML = '';
};

export const renderObj = (obj, i) => {
    
    i = parseInt(i, 10);

    if (i === NaN) {
        toggleInvisibility();
    } else if (obj[i].A === 'Minute(s)' || obj[i].A === 'Personne(s)' || obj[i].A === 'Jour(s)') {
        
        
        const markup = `
            <div class="devis__Q">
            <p class="devis__question">${obj[i].Q}</p>
            <form class="devis__form">
                <label class="mdc-text-field mdc-text-field--outlined devis__btn--A">
                    <input id="input" type="number" min="1" class="mdc-text-field__input" aria-labelledby="nbr de ${obj[i].A}" required>
                    <div class="mdc-notched-outline">
                        <div class="mdc-notched-outline__leading"></div>
                        <div class="mdc-notched-outline__notch">
                        <span class="mdc-floating-label" id="nbr">${obj[i].A}</span>
                        </div>
                        <div class="mdc-notched-outline__trailing"></div>
                    </div>
                </label>                   
                <button type="button" class="mdc-button devis__btn--A">
                    <div id="dfg" class="mdc-button__ripple" data-indexnbr="${obj[i].idA}"></div>
                    <i class="material-icons mdc-button__icon" aria-hidden="true">arrow_forward</i>
                </button>
            </form>
            <button class="mdc-button devis__btn--back">
                <div class="mdc-button__ripple" data-return="${obj[i].index}"></div>
                <span class="mdc-button__label">retour</span>
            </button> 
            </div>  
        `;
        elements.devis.insertAdjacentHTML('afterbegin', markup);

        const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
        const buttonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
            return new MDCRipple(el);
        });

        const calcAll = e => {
            e.preventDefault();
            let nbr = document.getElementById('input').value;
            const calc = el => {
                el = parseInt(el, 10);
                let nbrCalc = el + 1;
                return nbrCalc
            };
            let nbrCalc = calc(nbr);
            endPrice.push(nbrCalc);
            console.log(endPrice);
            console.log(nbr)
        }
        document.getElementById('dfg').addEventListener('click', calcAll);
        

    } else if (obj[i].A === undefined) {

        const reducer = (acc, cur) => acc + cur;
        let sumPrice = endPrice.filter(function (value) {
            return !Number.isNaN(value);
        });
        sumPrice = endPrice.reduce(reducer);

        const markup = `
            <div class="devis__Q">
                <p class="devis__question">${obj[i].Q}</p>
                <div class="devis__btn">
                    <a class="devis__btn--A">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idA}" data-price="${obj[i].priceA}"></div>
                            <span class="mdc-button__label">${sumPrice} €</span>
                        </button>
                    </a>                    
                </div>
                <button class="mdc-button devis__btn--back">
                    <div class="mdc-button__ripple" data-return="${obj[i].index}"></div>
                    <span class="mdc-button__label">retour</span>
                </button> 
            </div>  
        `;
        
        elements.devis.insertAdjacentHTML('afterbegin', markup);
        
        const buttonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
            return new MDCRipple(el);
        });
        
        console.log(endPrice);
        console.log(sumPrice);

    } else if (obj[i].C === undefined) {
        const markup = `
            <div class="devis__Q">
                <p class="devis__question">${obj[i].Q}</p>
                <div class="devis__btn">
                    <a class="devis__btn--A">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idA}" data-price="${obj[i].priceA}"></div>
                            <span class="mdc-button__label">${obj[i].A}</span>
                        </button>
                    </a>
                    <a class="devis__btn--B">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idB}" data-price="${obj[i].priceB}"></div>
                            <span class="mdc-button__label">${obj[i].B}</span>
                        </button>
                    </a>                     
                </div>
                <button class="mdc-button devis__btn--back">
                    <div class="mdc-button__ripple" data-return="${obj[i].index}"></div>
                    <span class="mdc-button__label">retour</span>
                </button> 
            </div>  
        `;
        elements.devis.insertAdjacentHTML('afterbegin', markup);
        
        const buttonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
            return new MDCRipple(el);
        });

    } else if (obj[i].D === undefined) {        
        const markup = `
            <div class="devis__Q">
                <p class="devis__question">${obj[i].Q}</p>
                <div class="devis__btn">
                    <a class="devis__btn--A">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idA}" data-price="${obj[i].priceA}"></div>
                            <span class="mdc-button__label">${obj[i].A}</span>
                        </button>
                    </a>
                    <a class="devis__btn--B">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idB}" data-price="${obj[i].priceB}"></div>
                            <span class="mdc-button__label">${obj[i].B}</span>
                        </button>
                    </a>
                    <a class="devis__btn--C">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idC}" data-price="${obj[i].priceC}"></div>
                            <span class="mdc-button__label">${obj[i].C}</span>
                        </button>
                    </a>                      
                </div>
                <button class="mdc-button devis__btn--back">
                    <div class="mdc-button__ripple" data-return="${obj[i].index}"></div>
                    <span class="mdc-button__label">retour</span>
                </button> 
            </div>  
        `;
        elements.devis.insertAdjacentHTML('afterbegin', markup);  

        const buttonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
            return new MDCRipple(el);
        });
        
    } else if (obj[i].E === undefined) {
        const markup = `
            <div class="devis__Q">
                <p class="devis__question">${obj[i].Q}</p>
                <div class="devis__btn">
                    <a class="devis__btn--A">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idA}" data-price="${obj[i].priceA}"></div>
                            <span class="mdc-button__label">${obj[i].A}</span>
                        </button>
                    </a>
                    <a class="devis__btn--B">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idB}" data-price="${obj[i].priceB}"></div>
                            <span class="mdc-button__label">${obj[i].B}</span>
                        </button>
                    </a>
                    <a class="devis__btn--C">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idC}" data-price="${obj[i].priceC}"></div>
                            <span class="mdc-button__label">${obj[i].C}</span>
                        </button>
                    </a>
                    <a class="devis__btn--D">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idD}" data-price="${obj[i].priceD}"></div>
                            <span class="mdc-button__label">${obj[i].D}</span>
                        </button>
                    </a>
                </div>
                <button class="mdc-button devis__btn--back">
                    <div class="mdc-button__ripple" data-return="${obj[i].index}"></div>
                    <span class="mdc-button__label">retour</span>
                </button> 
            </div>  
        `;
        elements.devis.insertAdjacentHTML('afterbegin', markup);
        
        const buttonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
            return new MDCRipple(el);
        });
    } else {
        const markup = `
            <div class="devis__Q">
                <p class="devis__question">${obj[i].Q}</p>
                <div class="devis__btn">
                    <a class="devis__btn--A">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idA}" data-price="${obj[i].priceA}"></div>
                            <span class="mdc-button__label">${obj[i].A}</span>
                        </button>
                    </a>
                    <a class="devis__btn--B">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idB}" data-price="${obj[i].priceB}"></div>
                            <span class="mdc-button__label">${obj[i].B}</span>
                        </button>
                    </a>
                    <a class="devis__btn--C">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idC}" data-price="${obj[i].priceC}"></div>
                            <span class="mdc-button__label">${obj[i].C}</span>
                        </button>
                    </a>
                    <a class="devis__btn--D">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idD}" data-price="${obj[i].priceD}"></div>
                            <span class="mdc-button__label">${obj[i].D}</span>
                        </button>
                    </a>
                    <a class="devis__btn--E">
                        <button class="mdc-button">
                            <div class="mdc-button__ripple" data-indexnbr="${obj[i]. idE}" data-price="${obj[i].priceE}"></div>
                            <span class="mdc-button__label">${obj[i].E}</span>
                        </button>
                    </a>
                </div>
                <button class="mdc-button devis__btn--back">
                    <div class="mdc-button__ripple" data-return="${obj[i].index}"></div>
                    <span class="mdc-button__label">retour</span>
                </button> 
            </div>  
        `;
        elements.devis.insertAdjacentHTML('afterbegin', markup);

        const buttonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
            return new MDCRipple(el);
        });
    }
};

export const toggleVisibility = () => {
    elements.devis.style.visibility = 'visible';
};
export const toggleInvisibility = () => {
    elements.devis.style.visibility = 'hidden';
};