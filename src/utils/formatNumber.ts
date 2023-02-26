
function formatNumber(amount: number, minSize?: number) {

    if (!amount) {
        return 0
    }

    if (minSize === 0) {
        if (amount < 1) {
            return amount.toLocaleString("en", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 5,
            });
        }
        return new Intl.NumberFormat('en' , {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
            style: 'currency',
            currency: 'USD'
        }).format(amount).replace('$', '')

        // amount.toLocaleString("en", {
        //     minimumFractionDigits: 0,
        //     maximumFractionDigits: 0,
        // });
    }
    if (amount && minSize) {
        if (minSize < 1) {
            return new Intl.NumberFormat("en", {
                maximumFractionDigits: minSize.toString().length - 2,
                minimumFractionDigits: 0,
                style: 'currency',
                currency: 'USD'
            }).format(amount).replace('$', '')

        } else {
            return amount.toLocaleString();
        }
    } else {
        return 0
    }

}


export default formatNumber;
