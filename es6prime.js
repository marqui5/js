function es6Prime(n) {
	var a = [...Array(n + 1).keys()]; // =[0,1,...,num]
	a[1] = 0; // 1 is not prime
	var rt = Math.sqrt(n); // calculate only once
	for (i=2;i<=rt;i++){
		if(!a[i]) continue
		for (var j=i*i; j<=n; j+=i) a[j]=0;
	}
	return a.filter(Number).toString(); // kick out the zeroes
}
