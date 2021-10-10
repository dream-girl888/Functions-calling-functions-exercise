//Hey kiddo
const Kiddo = function (age1) {
  if (age1>=18){ 
     return "true";
  } else{
    return "false";
  }
  };
  
  const KiddoCall= function (){
    const Kiddoresult=Kiddo(18);
    console.log(Kiddoresult);
    if (Kiddoresult="true"){
    return "hi there"
  } else {
    return "Hey Kiddo";
  }
    };
    console.log(KiddoCall());
  