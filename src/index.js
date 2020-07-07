import {elements} from '../js/views/base';
import {renderObj, clearObj, toggleVisibility, toggleInvisibility} from '../js/views/mapviews';
import * as Map from '../js/models/map';


//import * as priceCalc from './js/models/priceCalc';
import {MDCRipple} from '@material/ripple';
const buttonRipple = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
    return new MDCRipple(el);
});

export let endPrice = [];
export let indexDisplay = [];

elements.body.addEventListener('click', e => {
    console.log(e.target)
    let x = e.target.dataset.indexnbr;
    let y = e.target.dataset.return;
    console.log(x)
    if (x) {
        clearObj();
        toggleVisibility();
        renderObj(Map.obj1, x);
        indexDisplay.push(x)
        let p = e.target.dataset.price;
        p = parseInt(p, 10);
        endPrice.push(p);
        endPrice = endPrice.filter(function (value) {
            return !Number.isNaN(value);
        });
        console.log(indexDisplay);
        console.log(endPrice)
    } else if (y === "1") {
        indexDisplay.pop();
        endPrice.pop();
        clearObj();
        toggleInvisibility();
    } else if (y) {
        endPrice = endPrice.filter(function (value) {
            return !Number.isNaN(value);
        });
        let y = parseInt(y, 10);
        indexDisplay.pop();
        endPrice.pop();
        clearObj();
        let x = indexDisplay[indexDisplay.length - 1];
        renderObj(Map.obj1, x);
        console.log(indexDisplay);
        console.log(endPrice)
    } 
});
