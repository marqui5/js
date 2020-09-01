function isPrime(x) {
	for(let j = 2; j <= Math.sqrt(x); j++) {
		if(x % j == 0) return false;
	} return true;
}
