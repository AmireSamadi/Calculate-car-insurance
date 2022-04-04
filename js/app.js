//varibels

let html=new HtmlUi();

let form=document.querySelector("#request-quote");
//event listener
eventListener()
function eventListener() {
    document.addEventListener("DOMContentLoaded",function(){
    html.displayYaer();
    });
form.addEventListener("submit",function(e){
    e.preventDefault();
    let make=document.querySelector("#make").value;
    let year=document.querySelector("#year").value;
    let level=document.querySelector("input[name='level']:checked").value;
   if (make===""||year===""||level==="") {
   html.displayError("مقادیر خالی است ");
   } else {
      let calcINC=new Insurance(make,year,level);
      let insurance=calcINC.calcInsurance(calcINC);
      let resultDiv=document.querySelector("#result div");
      if (resultDiv) {
        resultDiv.remove()
      }
      html.displayResult(insurance,calcINC);
     
   }
})


}
