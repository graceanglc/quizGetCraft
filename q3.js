class OnlyOne {
	class OnlyOne2{
		constructor(arg) {
		this.arg = arg;
	}
		toStringMethod() {
			return this.arg.toString();
		}
	}
	var instance = false;
	constructor(arg) {
		if(!OnlyOne.instance) {
			OnlyOne.instance = OnlyOne.OnlyOne2(args);
		}else {
			OnlyOne.instance.arg = arg;
		}
	}
	getattr(name) {
		return getattr(this.instance, name);
	}
	

}

var OnlyOne1 = new OnlyOne("sausage");
console.log(OnlyOne1);
console.log(OnlyOne1.instance);
console.log();


var OnlyOne2 = new OnlyOne("eggs");
console.log(OnlyOne2);
console.log(OnlyOne2.instance);
console.log();

var OnlyOne3 = new OnlyOne("spam");
console.log(OnlyOne3);
console.log(OnlyOne3.instance);
console.log();

console.log("Kembali melihat object x");
console.log(OnlyOne1);
console.log(OnlyOne1.instance);
console.log();

console.log("Kembali melihat object y");
console.log(OnlyOne2);
console.log(OnlyOne2.instance);
console.log();
