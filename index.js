const receivesAFunction = (cb) => {
     cb();    
} 

const returnsANamedFunction = () => {
    return function namedFunction() {
        console.log("Hello!");
    };
}

const returnsAnAnonymousFunction = () => {
    return function() {
        return "Hello!";
    }
}