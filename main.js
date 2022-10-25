function prints(){
	console.log("Hello, world!")
	console.log("Hello, world!")
	console.log("Hello, world!")
}

function greed(Username){
	console.log("Hi," + Username + "!")
}

function greatest(x, y, z){
	if(x>y){
		if(x>z){
		return x
		}
		else{
		return z
		}
	}
	else{
		if(y>z){
		return y
		}
		else{
		return z
		}
	}
}

// we call our fuction 
prints() // in this fuction prints Hello world
greed("Kasym") // Prints Hi, Kasym
var s = greatest(12, 34, 5) // we call fuction and assign the answer 
console.log(s) //we print the answer



