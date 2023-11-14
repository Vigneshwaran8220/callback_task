function welcomeUser(name,callback){
    console.log(`hii ${name} welcome to our e-commerce website please tell what do you need?`)
    // callback(name)
}
function ordersFromUser(name, callback){
    console.log("my orders are shoes")
    // callback(name)
 }
 function dispatch(name,callback){
    console.log(`your orders are dispatched done`)
    // callback(name)
 }
 function greetings(){
    console.log("thankyou visit our site")
 }
 function registerinEcommerce(name, fn){
    console.log(`hi ${name} you are registered in e-commerce site`)
    // fn(name)
}

registerinEcommerce("vignesh",setTimeout((name)=>{
    welcomeUser(name,setTimeout((name)=>{
        ordersFromUser(name,setTimeout((name)=>{
            dispatch(name,setTimeout((name)=>{
                greetings();
            },1000))
        },1000))

    },1000))
},1000))