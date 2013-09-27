var Container = function Container() {
	that = {};
	that.alphabet = ['a','b','c'];
	that.funcList = [];

	var func1 = function(){
		return 11;
	};
	var func2 = function(){
		return 12;
	};
	var func3 = function(){
		return 13;
	};

	that.funcList.push(func1);
	that.funcList.push(func2);
	that.funcList.push(func3);

// that.fucnList.push({function(){return 11;}});

	that.return1 = function(){
		return 1;
	};

	that.returnabc = function(n){
		return that.alphabet[n];
	};

	that.funcLoad = function(n){
		return that.funcList[n](n);
	};

	return that;

};
