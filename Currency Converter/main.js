function convertCurrency(sourceCurrency, targetCurrency, amount) {
    if(sourceCurrency=="USD" && targetCurrency=="EUR")
    {
        return amount*0.85;
    }
     else if(sourceCurrency=="EUR" && targetCurrency=="USD")
     {
        return amount*1.18;
     }
      else if(sourceCurrency=="USD" && targetCurrency=="INR")
     {
        return amount*74.83;
     }
       else (sourceCurrency=="INR" && targetCurrency=="EUR")
     {
        return amount*0.011;
     }
}

console.log(convertCurrency("USD","EUR",10));