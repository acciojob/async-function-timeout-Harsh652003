//your JS code here. If required.
const  input1=document.querySelector("#text")
const input2=document.querySelector("#delay")
const button=document.querySelector("#btn")


	async function print(){
	const text=input1.value
		const delay=input2.value
	
	 document.getElementById("output").textContent
	await new Promise((resolve) => setTimeout(resolve, delay));

        
        document.getElementById("output").textContent = text;
	}
button.addEventListener("click", print);