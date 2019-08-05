class section{
	constructor(obj,boxDom){
		this.boxDom=boxDom;
		this.divs="";
		let defaultObj={
			// imgDoms:["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg"],
			ban:"",
			description:"",
			color:"",
			size:"",
			url:"",
		}
		for(let key in defaultObj){
			if(obj[key]){
				this[key]=obj[key];
			}else{
				this[key]=defaultObj[key];
			}
		}
		this.render();
		this.addEvent();
	}

	render(){
			let divs=document.createElement("div");
			divs.style.cssText=`
				width: 312px;
				height: 180px;	
				background: url(${this.url}) no-repeat center;
				background-size:100%;
				margin-right:4px;`;
			divs.innerHTML=`
				<a href="#" style="position:relative;">
					<div class="promo-word" style=" position: absolute; width:180px;height:33px;margin: -50% auto;margin-top:22px;margin-left:68px;">
						<div class="promo-ban" style="color:${this.color}; width: 180px;font-size: 12px;text-align: center;">${this.ban}</div>
						<div class="promo-description" style="color:${this.color}; width: 180px;font-size: 12px;text-align: center;">${this.description}</div>
					</div>
				</a>
				`
			this.boxDom.appendChild(divs);
			this.divs=divs;
		}
	addEvent(){
		//鼠标放上去放大
		
		this.divs.onmouseover=function(){
			// this.style.backgroundSize=`380px`;
			let time;
			let num=312;
			time=setInterval (()=>{
				num++;
				if(num>380){

					clearInterval(time);
				}
				this.style.backgroundSize=`${num}px`;

			},.5)
			if(time){
				return;
			}
		}
		// this.divs.onmouseout=function(){
		// this.style.backgroundSize=`100%`;
		// }
		;
		this.divs.onmouseout=function(){
			let time1
			let num1=380;
			time1=setInterval(()=>{
				num1--;
				if(num1<=312){
					clearInterval(time1);
				}
				this.style.backgroundSize=`${num1}px`;
			},.5)
			if(time1){
				return;
			}
		}
		
	}

}