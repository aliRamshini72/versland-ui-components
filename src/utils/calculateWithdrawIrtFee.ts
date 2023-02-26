

export default function calculateWithdrawIrtFee(amount : number) {
    if (amount < 50000){
        return 0
    } else if (amount < 1000000) {
        return 1000
    }else if (amount < 10000000){
        return  2000
    }else if (amount < 50000000 ) {
        return  3500
    }else {
        return 5000
    }

}
