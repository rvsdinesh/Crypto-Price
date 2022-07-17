function reloadPrice() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum%2Cpolkadot%2Csolana%2Cuniswap%2Cripple%2Cxrp%2Cbinancecoin%2Clitecoin%2Ccardano%2Cyearnfinance%2Cdash%2Ctether&vs_currencies=inr%2Cusd";
    fetch(url)
    .then(data => data.json())
    .then(cryptoPrices =>{

        //bitcoin
        document.getElementById("bitcoinPriceINR").innerHTML = cryptoPrices.bitcoin.inr.toLocaleString("en-IN");
        document.getElementById("bitcoinPriceUSD").innerHTML = cryptoPrices.bitcoin.usd.toLocaleString("en-US");
        

        //ethreum
        document.getElementById("ethereumPriceINR").innerHTML = cryptoPrices.ethereum.inr.toLocaleString("en-IN");
        document.getElementById("ethereumPriceUSD").innerHTML = cryptoPrices.ethereum.usd.toLocaleString("en-US");
        

        //dogecoin
        document.getElementById("dogecoinPriceINR").innerHTML = cryptoPrices.dogecoin.inr.toLocaleString("en-IN");
        document.getElementById("dogecoinPriceUSD").innerHTML = cryptoPrices.dogecoin.usd.toLocaleString("en-US");
        

        //binancecoin
        document.getElementById("binancePriceINR").innerHTML = cryptoPrices.binancecoin.inr.toLocaleString("en-IN");
        document.getElementById("binancePriceUSD").innerHTML = cryptoPrices.binancecoin.usd.toLocaleString("en-US");
        

        //ripple
        document.getElementById("ripplePriceINR").innerHTML = cryptoPrices.ripple.inr.toLocaleString("en-IN");
        document.getElementById("ripplePriceUSD").innerHTML = cryptoPrices.ripple.usd.toLocaleString("en-US");
        
        //litecoin
        document.getElementById("litecoinPriceINR").innerHTML = cryptoPrices.litecoin.inr.toLocaleString("en-IN");
        document.getElementById("litecoinPriceUSD").innerHTML = cryptoPrices.litecoin.usd.toLocaleString("en-US");
        
        //dash
        document.getElementById("dashPriceINR").innerHTML = cryptoPrices.dash.inr.toLocaleString("en-IN");
        document.getElementById("dashPriceUSD").innerHTML = cryptoPrices.dash.usd.toLocaleString("en-US");
        
        //tether
        document.getElementById("tetherPriceINR").innerHTML = cryptoPrices.tether.inr.toLocaleString("en-IN");
        document.getElementById("tetherPriceUSD").innerHTML = cryptoPrices.tether.usd.toLocaleString("en-US");
        
        //Cardano
        document.getElementById("cardanoPriceINR").innerHTML = cryptoPrices.cardano.inr.toLocaleString("en-IN");
        document.getElementById("cardanoPriceUSD").innerHTML = cryptoPrices.cardano.usd.toLocaleString("en-US");
        
        //Uniswap
        document.getElementById("uniswapPriceINR").innerHTML = cryptoPrices.uniswap.inr.toLocaleString("en-IN");
        document.getElementById("uniswapPriceUSD").innerHTML = cryptoPrices.uniswap.usd.toLocaleString("en-US");
        
        //Polkadot
        document.getElementById("polkadotPriceINR").innerHTML = cryptoPrices.polkadot.inr.toLocaleString("en-IN");
        document.getElementById("polkadotPriceUSD").innerHTML = cryptoPrices.polkadot.usd.toLocaleString("en-US");
        
        //Solana
        document.getElementById("SolanaPriceINR").innerHTML = cryptoPrices.solana.inr.toLocaleString("en-IN");
        document.getElementById("SolanaPriceUSD").innerHTML = cryptoPrices.solana.usd.toLocaleString("en-US");
        
    });

    
};
 

window.onload = function load() {
    document.getElementById("refreshButton").onclick = reloadPrice;
    reloadPrice();
    
}