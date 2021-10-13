//call functions from other functions
const Adult = function (age) {
  if (age>=18){ 
     return true;
  } else{
    return false;
  }
  };
  
  const Greet= function (age){
    if (Adult(age)){ //ander functie oproepen
    return "Hello there"
  } else {
    return "Hey Kiddo";
  }
    };
    console.log(Greet(8));//Hey Kiddo
    console.log(Greet(18));//Hello there
  


    //VAT oefening1 prijs incl VAT berekenen. functie met baseprice en VAT precentage
    const calculateVAT=function(basePrice, VATpercentage){
const VAT= basePrice * (VATpercentage/100);
return VAT;}

const calculatePrice=function (basePrice, VATpercentage){
  const priceVAT= basePrice + (calculateVAT(basePrice, VATpercentage));//ander functie oproepen
  return priceVAT;
};
console.log(calculatePrice(1000, 9));//1090


 //VAT oefening2 functie 

 const calculateVAT2=function(VATpercentage2){
  const VAT2= 1 + (VATpercentage2/100);
  return VAT2;}
  
  const calculatePrice2=function (PriceVAT2, VATpercentage2){
    const basePrice2= PriceVAT2 / (calculateVAT2(VATpercentage2));//ander functie oproepen
    const VATprice= PriceVAT2-basePrice2;
    return [basePrice2, VATprice]; //tussen haken zetten anders krijg je maar 1 uitkomst in console.
  };
  console.log(calculatePrice2(1090,9));//999,9, 90,0001




