var OnlyOne = (function() {
	var instance;
	function createInstance(args) {
		var val = new Object(args);
		return val.toString();
	}

	return {
		getInstance: function(args) {
			if(!instance) {
				instance = createInstance(args);
			}
			console.log(instance.toString());
		}
	};
})();

var test1 = OnlyOne.getInstance("sausage");
var test2 = OnlyOne.getInstance("eggs");
alert("Same instance? " + (test1 === test2)); 