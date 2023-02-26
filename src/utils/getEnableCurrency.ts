

const getEnableCurrency = (type: string, currencies: any[]) => {
    switch (type) {
        case 'buy' :
            return currencies.filter((item: any) => item.isSellEnable || item.isBuyEnable );
        case 'sell' :
            return currencies.filter((item: any) => item.isSellEnable || item.isBuyEnable );
        case 'withdrawal' :
            return currencies.filter((item: any) => item.isWithdrawEnabled )
        case 'deposit' :
            return currencies.filter((item: any) => item.isDepositEnabled )
        default :
            return currencies
    }
}

export default getEnableCurrency