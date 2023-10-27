export function getPriceAfterDiscount(price, disPercentage){
    var p=price-price*(disPercentage/100);
    return p.toFixed(2);
}

export function addToCart(product,cart){
    var p=cart.find(e=>e.product.id==product.id);
    if(p){
        p.quantity+=1;
    }
    else{
        cart.push({product:product,quantity:1});
    }
}

export function removeFromCart(product,cart){
    var index=cart.findIndex(e=>e.product.id==product.id);
    if(index!=-1){
        cart.splice(index,1);
    }
    
}

export function increaseProductQuantity(product,cart){
    var p=cart.find(e=>e.product.id==product.id);
    if(p){
        p.quantity+=1;
    }
}

export function decreaseProductQuantity(product,cart){
    var p=cart.find(e=>e.product.id==product.id);
    if(p){
        if( p.quantity==1){
          removeFromCart(product,cart);
        }
        else{
            p.quantity-=1;
        }
       
    }
}

export function getTotalCartValue(cart){
    var val=0.0;
    for(let e of cart){
        val+=e.quantity*getPriceAfterDiscount(e.product.price,e.product.discountPercentage)
    }
    return val.toFixed(2);
}






