var a = "foo";
var b = "bar";
var c = "stool";

function foo(condition) {
	if(condition === "foo") {
		return a;
	}
}

function bar(condition) {
	if(condition === "bar") {
		return b;
	}
}

function stool(condition) {
	if(condition === "stool") {
		return c;
	}
}

var condition = "stool";

if(foo(condition)) {
	console.log(foo(condition));
} else if(bar(condition)) {
	console.log(bar(condition));
} else if(stool(condition)) {
	console.log(stool(condition));
} else {
	console.log("default");
}