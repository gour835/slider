let MinimumPrice=document.querySelector(".MinimumNumber");
let MaximumPrice=document.querySelector(".MaximumNumber");
let MinimumSlider=document.querySelector(".Minimum");
let MaximumSlider=document.querySelector(".Maximum");
let progress=document.querySelector(".progress");

let MaxSliderValue=10000;



/*MaximumSlider.addEventListener("input",()=>{
	let newRight;
	if((parseInt(progress.style.right)+ parseInt(progress.style.left) > 100)){
	newRight=parseInt(progress.style.right)
	parseInt(progress.style.right)=parseInt(progress.style.left);
	parseInt(progress.style.left)=newRight;
	;}
	
	MaximumPrice.value=parseInt(MaximumSlider.value);
	progress.style.right=100-((parseInt(MaximumSlider.value)/MaxSliderValue)*100)+ "%";
	
});
MinimumSlider.addEventListener("input",()=>{
	MinimumPrice.value=parseInt(MinimumSlider.value);
	progress.style.left=(parseInt(MinimumSlider.value)/MaxSliderValue)*100+ "%";
});*/


function updateSlider(){
	let minValue=parseInt(MinimumSlider.value);
	let maxValue=parseInt(MaximumSlider.value);
	
	//adding slider value to number boxes
	MinimumPrice.value=MinimumSlider.value;
	MaximumPrice.value=MaximumSlider.value;
	
	
	let left=Math.min(minValue,maxValue);
	let right=Math.max(minValue,maxValue);
	
	let leftPercent=(left/MaxSliderValue)*100;
	let rightPercent=100-(right/MaxSliderValue)*100;
	
	progress.style.left=leftPercent+ "%";
	progress.style.right=rightPercent+ "%";

	
}
MaximumSlider.addEventListener("input",updateSlider);
MinimumSlider.addEventListener("input",updateSlider);

updateSlider();

