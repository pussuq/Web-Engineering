"use strict";

// receive messages from main thread
onmessage = function(ev) {
    var count = 0;
    var numPrimes = ev.data;
    var text = "";
    var x = 0;

    // loop over each x value until all primes are found
    do {
        // keep track of the prime numbers
        if (isPrime(x)) {
            count++;
            text += x + " ";
        }

        // send text to the main thread every 100th iteration
        if (x % 100 == 0) {
            this.postMessage(text);
        }
        x++;
    } while (count < numPrimes);

    // output an end message
    text += "<br><br>FINISHED!!!";
    this.postMessage(text);
}

function isPrime(x) {

    // 0 or 1 or negative numbers are not prime numbers
    if (x < 2) {
        return false;
    }

    // 2 is a prime number
    if (x == 2) {
        return true;
    }

    // no need to check divisors greater than the sqrt of x
    let sqrt = Math.sqrt(x);
    for (let div = 2; div <= sqrt; div++) {
        if (x % div == 0) {
            return false;
        }
    }

    // otherwise x is prime
    return true;
}