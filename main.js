Vue.component('product',{
    props:{
        premium:{
            type: Boolean,
            required:true
        }
    },
    template: `
    <div class="product">

    <div class="product-image">
       <img v-bind:src="image">
    </div>

    <div class="product-info">
       <h1>{{title}}</h1>
       <p v-if="inStock">In Stock</p>
       <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
       <p> Shipping: {{shipping}}</p>

       <ul>
          <li v-for="detail in details">{{detail}}</li>
       </ul>
       <div v-for="(varient,index) in varients" 
       :key="varient.varientId"
       class="color-box"
       :style="{backgroundColor:varient.varientColor}"
       v-on:mouseover="updateProduct(index)"
       >
       </div>
      
       <button v-on:click="addToCart" 
       :disabled="!inStock"
       :class="{disabledButton: !inStock }"
       >Add-on to Cart</button>
       <button v-on:click="removeFromCart">Remove from cart</button>
       <div class="cart">
          <p>Cart ({{cart}})</p>
       </div>


    </div> 
 </div>`,
 data(){
 return {
    brand:'Vue Mastery',
    product:'Socks',
    selectedVarient:0,
    details:["80% cotton","20% polyster","Gender-neutral"],
    varients:[
        {
            varientId: 2234,
            varientColor: "green",
            varientImage: './vmSocks-green-onWhite.jpg',
            varientQuantity: 0
        },
        {
            varientId: 2235,
            varientColor: "blue",
            varientImage: './vmSocks-blue-onWhite.jpg',
            varientQuantity: 45
        }
    ],
    cart:0
}
 },
methods:{
    addToCart(){
        this.cart+=1;
    },
    removeFromCart(){
        this.cart-=1;
    }
    ,
    updateProduct(index){
        this.selectedVarient=index
        console.log(index)
    }
},
computed:{
    title(){
        return this.brand+" "+this.product
    },
    image(){
        return this.varients[this.selectedVarient].varientImage
    },
    inStock(){
        return this.varients[this.selectedVarient].varientQuantity
    },
    shipping(){
        if(this.premium){
            return "Free"
        }
        return 2.99
    }
}
})

var app=new Vue({
el:'#app',
data:{
    premium:true
}
})