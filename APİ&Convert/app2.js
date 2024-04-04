 //https://api.apilayer.com/exchangerates_data/latest
//"apikey", "PNEAH0d24yKi1gtxHLqCfmE5SH0d6n0c"
document.getElementById("change").addEventListener("click",function(){

const xhr=new XMLHttpRequest();
xhr.open("GET","https://api.apilayer.com/exchangerates_data/latest",true);
xhr.setRequestHeader("apikey", "PNEAH0d24yKi1gtxHLqCfmE5SH0d6n0c");
xhr.onload=function(){

const response=JSON.parse(this.responseText);
const rate=response.rates.TRY;
const amount=Number(document.getElementById("amount").value);
document.getElementById("tl").value=amount*rate;




}

xhr.send();

})
   