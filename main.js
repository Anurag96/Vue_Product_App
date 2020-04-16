var app=new Vue({
el:'#app',
data:{
    product:'Socks',
    image: './vmSocks-green-onWhite.jpg',
    inStock: true,
    details:["80% cotton","20% polyster","Gender-neutral"],
    varients:[
        {
            varientId: 2234,
            varientColor: "green",
            varientImage: './vmSocks-green-onWhite.jpg',
        },
        {
            varientId: 2235,
            varientColor: "blue",
            varientImage: './vmSocks-blue-onWhite.jpg',
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
    updateProduct(varientImage){
        this.image=varientImage
    }
}
})