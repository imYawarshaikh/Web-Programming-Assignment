


function myFunction2() {
    const element = document.getElementById("container2");
    element.scrollIntoView();
  }

  function validation() {
   
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let creditcard_number = document.getElementById("creditcard_number").value;
    let creditcard_month = document.getElementById("creditcard_month").value;
    let creditcard_year = document.getElementById("creditcard_year").value;
   
    let error_msg = document.getElementById("container4");


    if (name == "") {
     
     error_msg.innerText="Name mandate"
     
      return false;
    }

    if (email == "") {
        error_msg.innerText="Email mandate"
         return false;
       }

       var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!emailRegex.test(email)) { 
        error_msg.innerText="Please enter email in correct format"
        return false;
    }



       if (creditcard_number == "") {
        error_msg.innerText="creditcard number mandate"
         return false;
       }

       if (creditcard_number.length < 16 ) {
       error_msg.innerText="creditcard number must be 16"
         return false;
       }

       
       if (!creditcard_number.includes("-")) {
        error_msg.innerText="Please correct credit card number like : 4111-1111-1111-1111"
         return false;
       }

       var cardRegx=  /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/;
       if(!cardRegx.test(creditcard_number))
        {
          error_msg.innerText="Please use correct format for credit card number as xxxx-xxxx-xxxx-xxxx"
         return false;
        }

       if (creditcard_month == "") {
        error_msg.innerText="creditcard month mandate"
         return false;
       }

       if (creditcard_month.length < 3 ) {
         error_msg.innerText="provide correct month example : MMM  - NOV"
         return false;
       }

       if (creditcard_month.length > 3 ) {
        error_msg.innerText="provide correct month example : MMM  - NOV"
        return false;
      }
       
       if (creditcard_year == "") {
        error_msg.innerText="creditcard year mandate"
         return false;
       }
       

       if (creditcard_year.length < 4 ) {
        error_msg.innerText="provide correct year example : yyyy  - 2022"
         return false;
       }
       
       if (creditcard_year.length > 4 ) {
        error_msg.innerText="provide correct year example : yyyy  - 2022"
         return false;
       }
       
   return true;

  }

function submit_form(){

    if(validation()){
        let error_msg = document.getElementById("container4");
        error_msg.innerText="successfully registered, Please check receipt below."
        generateReceipt();
        
    const element = document.getElementById("container3");
    element.scrollIntoView();
    }else{
      const element = document.getElementById("container2");
      element.scrollIntoView();
    }



}


function generateReceipt(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let creditcard_number = document.getElementById("creditcard_number").value;


    let name_div = document.getElementById("name_div");
    let email_div = document.getElementById("email_div");
    let creditcardno_div = document.getElementById("creditcardno_div");
    
    
    
 
    name_div.innerText="Customer Name : "+name;
    email_div.innerHTML="Customer Email :"+email;
    creditcardno_div.innerHTML="Customer Credit card number : XXXX-XXXX-XXXX-"+creditcard_number.substr(15);


    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
    let prod = document.getElementById("prod");
    var total =0;
    for (var checkbox of markedCheckbox) {  
        var NoOfProd = parseInt(document.getElementById("qty_"+checkbox.id).value);
        prod.append('Ordered Product: '+checkbox.id + ' $'+checkbox.name+ ' each |  Qty: '+NoOfProd);
         var temp = checkbox.name * NoOfProd;
         console.log(temp)
         total =total  + temp;  
         console.log(total)
        var br = document.createElement("br");
        prod.appendChild(br);
    }  
    var per = percentage(total, 10);
    var br = document.createElement("br");
    prod.appendChild(br);
    prod.append('Total price before donation: '+' $'+total);
    var br2 = document.createElement("br");
    prod.appendChild(br2);
    
    console.log(per);
    prod.append('Donate 10% of total bill: '+' $'+per);
    
    prod.appendChild(br);
    var  tp = Number(total) + Number(per);
    prod.append('Total price: '+' $'+tp);
    

}


function percentage(num, per)
{
  return (num/100)*per;
}

function myFunction(products) {
    var checkBox = document.getElementById(products);
    var text = document.getElementById("text");
    if (checkBox.checked == true){
       // alert("yo"+checkBox);
     text.innerHTML = text.innerHTML+"<div id= product_"+checkBox.id + "><hr>"+checkBox.id +" is selected"+"</div>";
    } else {
      //  alert("No"+checkBox);
      document.getElementById("product_"+checkBox.id).remove();
    }
  } 


