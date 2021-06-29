import { modulo, percentage, percentageOf, difference } from "./percentage.js";

import { calculateAspectRatio } from "./aspect-ratio.js";

// all elements to add event listeners to
const moduloForm = document.querySelector("#modulo-form");
const percentageForm = document.querySelector("#percentage-form");
const percentageOfForm = document.querySelector("#percentageOf-form");
const differenceForm = document.querySelector("#difference-form");
const aspectForm = document.querySelector("#aspect-form");


// all event listeners
moduloForm.addEventListener("change", updateValue);
percentageForm.addEventListener("change", updateValue);
percentageOfForm.addEventListener("change", updateValue);
differenceForm.addEventListener("change", updateValue);
aspectForm.addEventListener("change", updateValue);

// all functionalities are inside this function that is only fired if values in the input fields change
function updateValue(e) {
    // functionality for modulo operation
    const modulo1 = parseInt(document.querySelector("#modulo_1").value);
    const modulo2 = parseInt(document.querySelector("#modulo_2").value);
    const moduloResult = modulo(modulo1, modulo2);
    const moduloResultField = document.querySelector("#modulo_result");
    moduloResultField.value = moduloResult;

    // functionality for percentage calculation
    const percentage1 = parseInt(document.querySelector("#percentage_1").value);
    const percentage2 = parseInt(document.querySelector("#percentage_2").value);
    const percentageResult = percentage(percentage1, percentage2);
    const percentageResultField = document.querySelector("#percentage_result");
    percentageResultField.value = percentageResult;

    // functionality for percentageOf calculation
    const percentageOf1 = parseInt(document.querySelector("#percentageOf_1").value);
    const percentageOf2 = parseInt(document.querySelector("#percentageOf_2").value);
    const percentageOfResult = parseInt(percentageOf(percentageOf1, percentageOf2));
    const percentageOfResultField = document.querySelector("#percentageOf_result");
    percentageOfResultField.value = percentageOfResult;

    // functionality for difference calculation
    const difference1 = parseInt(document.querySelector("#difference_1").value);
    const difference2 = parseInt(document.querySelector("#difference_2").value);
    const differenceResult = difference(difference1, difference2);
    const differenceResultField = document.querySelector("#difference_result");
    differenceResultField.value = differenceResult;

    // functionality for aspect ratio calculation
    const ratio1 = parseInt(document.querySelector("#ratio_1").value);
    const ratio2 = parseInt(document.querySelector("#ratio_2").value);
    const ratioResultWidth = document.querySelector("#ratio_result-width");
    const ratioResultHeight = document.querySelector("#ratio_result-height");
    let ratioResult;
    switch (e.target) {
        case (ratioResultWidth) :
            ratioResult = calculateAspectRatio(ratio1, ratio2, parseInt(e.target.value), "w");
            ratioResultHeight.value = ratioResult;
            break;
        case (ratioResultWidth) :
            ratioResult = calculateAspectRatio(ratio1, ratio2, parseInt(e.target.value), "h");
            ratioResultWidth.value = ratioResult;
            break;
        default :
        // not working
        ratioResultHeight.value = "";
        ratioResultWidth.value = "";
    };  
};






