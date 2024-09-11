function fibonacci(num) {
    if (num < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    
    let a = 0; // F(0)
    let b = 1; // F(1)
    let fib = 1; // Start with the second term
    
    for (let i = 2; i <= num; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    
    return fib;
}

module.exports = fibonacci;
