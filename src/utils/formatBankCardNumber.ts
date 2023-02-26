import replaceAll from "./replaceAll";

export default function formatBankCardNumber(value: string) {

    var newval = '';
    // write regex to remove any space
    value = replaceAll(value, " ", '');
    // iterate through each numver
    for (var i = 0; i < value.length; i++) {
        // add space if modulus of 4 is 0
        if (i % 4 === 0 && i > 0) newval = newval.concat(' ');
        // concatenate the new value
        newval = newval.concat(value.charAt(i));
    }
    // update the final value in the html input
    return newval;
}
