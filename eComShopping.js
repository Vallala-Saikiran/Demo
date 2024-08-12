let welcome="Welcome to flipkart shopping"
// standard code best practices
let category1="Mobile"
let category2= "Grocery"
let category3= " clothing"

let mBrand="iphone15"
let mBrand2="SamS21"

let gItem="oil";
let gItem2="rice"

let cItem="Jeans"
 let cItem2="Kurtha"
 let choice=1;

 function main_Call()
 {
switch(choice)
{
    case 1:
     console.log("Welcome to New Launch / Offer Mobile")
   
    if(mBrand=='iphone15')
    {
       console.log("applicable 50% discount ") 
    }

    if(mBrand=='SamS21')
        {
           console.log("applicable 60% discount ") 
        }
    
 
 case 2:
 
    console.log("Welcome to Grocery items")
    if(gItem=='oil')
        {
           console.log("applicable Buy 1 Get 1 ") 
        }
        if(gItem2=='rice')
            {
               console.log("applicable Buy 25kg get 5kg extra) ") 
            }
 
case 3:
 
    console.log("Welcome to New Fashion trends in Flipkart")
    if(cItem=='Jeans')
        {
           console.log("applicable Buy 1 30% and Buy 2 40%discount ") 
        }
        if(cItem2=='Kurtha')
            {
               console.log("applicable Buy 1 30% and Buy 2 40%discount") 
            }
 
 default :
 console.log("Selected choice category not available")
}
}
main_Call();