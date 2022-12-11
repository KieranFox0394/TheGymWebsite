var isGoldSelected = false;
var isSilverSelected = false;
var isBronzeSelected = false;

var goldBox = document.getElementById('selectionBoxGold');
var silverBox = document.getElementById('selectionBoxSilver');
var bronzeBox = document.getElementById('selectionBoxBronze');
var goldPrice = document.getElementById('goldPrice');

var det = document.getElementById('details');
var costSum = document.getElementById('costSum');
var costRow = document.getElementById('costRow');
var youthDiscountRow = document.getElementById('youthDiscountRow');
var oapDiscountRow = document.getElementById('oapDiscountRow');
var saleDiscountRow = document.getElementById('saleDiscountRow');

var timeToCountTo = new Date(0);

var cost = document.getElementById('cost');
var costData = document.getElementById('costData');

var saleDiscount = document.getElementById('saleDiscount');
var saleDiscountData = document.getElementById('saleDiscountData');

var goldPricePlan = 900;
var silverPricePlan = 600;
var bronzePricePlan = 300;

var saleDiscountPercent = 0.1;
var oapDiscountPercent = 0.15;
var youthDiscountPercent = 0.05;

var saleDiscount = 0;
var oapDiscount = 0;
var youthDiscount = 0;
var finalPrice;

var planPrice = 0;
var timeLeft = 0;
var dob = document.getElementById("inputDOB").value;
var age = 30;

function onLoad(){
    goldPrice.innerHTML = '&euro; ' + goldPricePlan;
    silverPrice.innerHTML = '&euro; ' + silverPricePlan;
    bronzePrice.innerHTML = '&euro; ' + bronzePricePlan;
}

function goldHover(){
    if(isGoldSelected == true)
        {
            goldBox.style.background = "#51ad86";
        }
    else{
            goldBox.style.background = "black";
        }

    }

function goldLeaveHover(){
    if(isGoldSelected == true)
        {
            goldBox.style.background = "black";
        }
    else{
            goldBox.style.background = "#51ad86";
        }

    }

function goldSwitch()
{   console.log(isGoldSelected);
    if(isGoldSelected == true)
    {
    goldBox.style.background = "black";
    
    hideDetailsAndCosts();
    isGoldSelected = false;
    }
 else {
    goldBox.style.background = "#51ad86";     
     
     if(isBronzeSelected == true)
       {
        bronzeSwitch();
       }
     if(isSilverSelected == true)
     {
         silverSwitch();
     }
     planPrice = goldPricePlan;
     updateCosts();
     showDetailsAndCosts();
     isGoldSelected = true;
 }
}
 
 function silverSwitch()
{   console.log(isSilverSelected);
    if(isSilverSelected == true)
    {
    silverBox.style.background = "black";
        
    isSilverSelected = false;
    hideDetailsAndCosts();   

    }
 else {
    silverBox.style.background = "#51ad86";
    
    if(isGoldSelected == true)
       {
        goldSwitch();
       }
     if(isBronzeSelected == true)
     {
         bronzeSwitch();
     }
     planPrice = silverPricePlan;
     updateCosts();
     showDetailsAndCosts();
     isSilverSelected = true;
 }
}
 
 function bronzeSwitch()
{   console.log(isBronzeSelected);
    if(isBronzeSelected == true)
    {
    bronzeBox.style.background = "#black";

    isBronzeSelected = false;
    hideDetailsAndCosts();
    }
 else {
    bronzeBox.style.background = "#51ad86";
          
     if(isGoldSelected == true)
       {
        goldSwitch();
       }
     if(isSilverSelected == true)
     {
         silverSwitch();
     }
     planPrice = bronzePricePlan
     updateCosts();
     showDetailsAndCosts();
     isBronzeSelected = true;
 }
   
}

function showDetailsAndCosts(){
    updateCosts();
    showDetails();
    showCosts();
}

function showDetails()
{
    det.style.visibility = "visible";
}

function showCosts()
{   
    costRow.style.visibility = "visible";
    youthDiscountRow.style.visibility = "visible";
    oapDiscountRow.style.visibility = "visible";
    saleDiscountRow.style.visibility = "visible";
}

function hideDetailsAndCosts(){
    hideDetails();
    hideCosts();
}

function hideDetails()
{
    det.style.visibility = "hidden";

}

function hideCosts()
{
    
    costRow.style.visibility = "hidden";
    youthDiscountRow.style.visibility = "hidden";
    oapDiscountRow.style.visibility = "hidden";
    saleDiscountRow.style.visibility = "hidden";
}

function updateCosts(){
    costData.innerHTML = '&euro; ' + planPrice ;
    oapDiscountData.innerHTML = '';
    youthDiscountData.innerHTML = '';
    if(timeLeft >0)
        {   saleDiscount = planPrice*saleDiscountPercent;
            saleDiscountData.innerHTML = ' - ' + '&euro; ' + (saleDiscount);
        }
    else{
        
    }
    if(age > 64 && age < 200)
        {   oapDiscount = planPrice*oapDiscountPercent;
            oapDiscountData.innerHTML = ' - ' + '&euro; ' + (oapDiscount);
        }
    if(age < 24 && age >0)
        {   youthDiscount = planPrice*youthDiscountPercent;
            youthDiscountData.innerHTML = ' - ' + '&euro; ' + (youthDiscount);
        }
    
   finalPrice = planPrice - (saleDiscount + oapDiscount + youthDiscount);
    costData.innerHTML = ('&euro; ' + finalPrice);
    
}

function updateAge(){ 
  dob = document.getElementById("inputDOB").value;
  var dobDate = new Date(dob);    
   var ageDiff = Date.now() - dobDate;
   var ageDate = new Date(ageDiff); 
   age = (Math.abs(ageDate.getUTCFullYear() - 1970));
   updateCosts();
}

       
var countdown = setInterval(function() {
  //gathered some logic for this from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
  var dateToCountTo = new Date();
  dateToCountTo.setHours('23');
  dateToCountTo.setMinutes('59');
  dateToCountTo.setSeconds('59');
  var timeToCountTo = dateToCountTo.getTime();

  
  var now = new Date().getTime(); 
  timeLeft = timeToCountTo - now ;

  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
      if(hours < 10)
          {hours = "0"+hours;}
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
     if(minutes < 10)
          {minutes = "0"+minutes;}
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
     if(seconds < 10)
          {seconds = "0"+seconds;}
    
    
  document.getElementById("countdown").innerHTML = hours + ":"
  + minutes + ":" + seconds;
}, 1000);

