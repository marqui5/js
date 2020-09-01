function linearPrime(n) {
	//初始化两个长度为n的数组填入0表示都是素数
	var a = new Array(n).fill(0);
	var p = new Array(n).fill(0);
	//遍历2到n
    	for (let i = 2;i <= n; i++) {
		//如果a[i]=0则a[i]是素数，
        	if (!a[i]) {
			//p[0]+1纪录素数， p[0] 相当于 cnt，用来计数
			//把i赋值给p[1]，第一轮p[0]=1，p[1]=2
            		p[++p[0]] = i;      
        	}
		//当j小于等于已记录的素数个数且i平方小于n，j加1，也就是遍历筛选素数的所有倍数
        	for (let j = 1; j <=p[0] && i*p[j] <= n; j++) {
			//素数p[j]的倍数都不是素数，标记为1
            		a[i*p[j]] = 1;
			//如果i除以最小的素数p[j]余数为零立刻退出筛选循环
            		if (i % p[j] == 0) {
                		break;
            		}	
        	}
    	}
	//console.log(p[0]);
	p[0] = 0;
	return p.filter(Number).toString();
}
