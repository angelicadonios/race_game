// let playerGirl = $("#playerGirl").attr("src", "./assets/images/girl.png")
// let playerBoy = $("#playerBoy").attr("src", "./assets/images/boy.png")


$("#btnGirl").click(function(){
	$("#btnBoy").hide()
})

$("#btnBoy").click(function(){
	$("#btnGirl").hide()
	$("#playerChar").attr("src", "./assets/images/boy2	.png")
})




// player object
let player = {
	character: $("#player"),
	playerPos: 0 
}

console.log(player)


// ai object
const ai = {
	character: $("#ai"),
	aiPos: 0
}

console.log(ai)

let playerPosition = 0;
let aiPosition = 0;

// move the player function
// playerPosition+=100 means adding 100 from the current value.
// playerPosition starts with 0 then plus 100 = 100.
// playerPosition 100+100 = 200, and so on.

player.character.click(function(){
	console.log($(this))

	$(this).animate({
		"left": (playerPosition+=100) + "px"
	})

	console.log("this is the current value of player position " + playerPosition)

	player.playerPos = playerPosition;
	console.log(player)

	result() // function
})

// move the ai



// move the ai
$("#easy").click(function(){

	const aiMoveEasy = () => {

	if(ai.aiPos < 1000){
		ai.character.animate({
		"left": (aiPosition+=100) + "px"
	})

	}else{
		return true

	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition;
	result()

	if(ai.aiPos>=1000 || player.playerPos>=1000){
		return true
	}else {
		setTimeout(aiMoveEasy, 1000)
	}
	
}
	aiMoveEasy()
})



$("#medium").click(function(){

	const aiMoveMedium = () => {
	if(ai.aiPos < 1000){
		ai.character.animate({
			"left": (aiPosition+=100) + "px"
		})
	}else{
		return true
	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition;
	result()
	if(ai.aiPos>=1000 || player.playerPos>=1000){
		return true
	}else {
		setTimeout(aiMoveMedium, 400)
	}
}
	aiMoveMedium()
// console.log("hello")

})


$("#hard").click(function(){

	const aiMoveHard = () => {
		if(ai.aiPos < 1000){
			ai.character.animate({
				"left": (aiPosition+=100) + "px"
			})
		}else{
			return true
		}
		console.log(ai.aiPos)
		ai.aiPos = aiPosition;
		result()
		if(ai.aiPos>=1000 || player.playerPos>=1000){
		return true
	}else {
		setTimeout(aiMoveHard, 300)
	}
}
	aiMoveHard()
})

const result = () => {
	if(player.playerPos === 1000){
		alert("You won!")
		return true
	}

	if(ai.aiPos === 1000){
		alert("Orc won!")
		return true
	}
}

// const resulttwo = () => {
// 	if(player.playerPos === 2000){
// 		alert("player won!")
// 		return true
// 	}

// 	if(ai.aiPos === 2000){
// 		alert("ai won!")
// 		return true
// 	}
// }



// selecting attribute
// $(".btn").click(function(){
// 	console.log($(this).attr("id") == "1")
// })




