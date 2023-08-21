
let totalPrice = 0;
let discount = 0;
let price =0;
function common(target){
    const titleName = (target.childNodes[3].childNodes[3].innerText);
    const container = document.getElementById('container');
    const count =container.childElementCount;
    const p = document.createElement('p');
    console.log(p)
    p.innerHTML=`
     ${count + 1}. ${titleName}

    `;
    container.appendChild(p)

   

    const value = (target.childNodes[3].childNodes[5].innerText.split(' ')[0])
    const totalPriceElement= document.getElementById('total-price');
    let priceElement = document.getElementById('price');
    totalPrice = (parseFloat(totalPrice) + parseFloat(value)).toFixed(2);
    totalPriceElement.innerText = totalPrice;
    priceElement.innerText = totalPrice;

    const makePurchase = document.getElementById('make-purchase');
    const apply = document.getElementById('apply')

    if(totalPrice > 0){
       makePurchase.removeAttribute('disabled');
        
    }
    if(totalPrice >= 200){
         apply.removeAttribute('disabled');
    }
    else{
        apply.setAttribute('disabled', true);
    }

    document.getElementById('input-field').addEventListener('keyup', function(event){
            
               if(event.target.value == 'SELL200'){
                apply.addEventListener('click', function(){
                    const discountElement = document.getElementById('discount');
                    discount = (totalPrice * 20)/100;
                    price = totalPrice - discount; 
                    discountElement.innerText = discount;
                    priceElement.innerText = price;
                })
               }
            })
            


            // document.getElementById('apply').addEventListener('click', function(){
            //     const discountElement = document.getElementById('discount');
            //     discount = (totalPrice * 20)/100;
            //     price = totalPrice - discount; 
            //     discountElement.innerText = discount;

}