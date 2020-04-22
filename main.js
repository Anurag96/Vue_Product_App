var app=new Vue({
el:'#app',
data:{
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
    }
}
})