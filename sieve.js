function sievePrime(n) {
	var a = [n];
	for(let i = 0; i <= n; i++) a[i] = i;
	return a.filter(x => {
		if(x < 2) return false;
		if(x => {
			for(let j = 2; j * j <= x; j++) {
				if(x % j == 0) return false;
			} return true;
		}) {
			for(let k = x * x; k <= n; k += x) {
				a[k] = 0;
			}
			return true;
		}
		return false;
	}).toString();
}
