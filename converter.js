
async function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
  
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`);
      const data = await response.json();
      const exchangeRate = data[fromCurrency][toCurrency];
      const result = amount * exchangeRate;
      document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
      console.error('Error fetching the exchange rate:', error);
      alert('Failed to fetch the exchange rate.');
    }
  }
  
 
  async function fetchCryptoRates() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd,eur,jpy');
      const data = await response.json();
  
      const cryptoRatesBody = document.getElementById('cryptoRatesBody');
      cryptoRatesBody.innerHTML = ''; 
  
    for (key in data ){
      console.log(data[key])
      cryptoRatesBody.innerHTML += `
        <tr>
          <td>${key.toUpperCase()}</td>
          <td>$${data[key].usd}</td>
          <td>€${data[key].eur}</td>
          <td>¥${data[key].jpy}</td>
         
        </tr>
      `;
    }
      console.log(data)
  
    } catch (error) {
      console.error('Error fetching crypto rates:', error);
    }
  }
  
 
  document.addEventListener('DOMContentLoaded', fetchCryptoRates);
  
  
