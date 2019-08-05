class section{
	constructor(obj,boxDom){
		this.boxDom=boxDom;
		this.imgDoms=[];//存储所有的图片
		this.liDoms=[];//存储所有的li标签
		//默认
		let defaultObj = {
			width:311,
			height:180,
			imgs:["img/01.jpg"],
			//设置放大
			// transform:scale(1.5),
			//li里图片的大小
			liswhidth:311,
			lisheight:180,
			marginRight:10,
			marginTop:10,
		}
		for(let key in defaultObj){
			if(obj[key]){
				this[key]=obj[key];
			}else{
				this[key]=defaultObj[key];
			}
		}
		this.render();
	}
	//创建图片
	render(){
		this.boxDom.style.position="relative";
		for(let i=0;i<this.imgs.length;i++){
			let imgDom=document.createElement("img");
			imgDom.src=this.imgs[i];
			imgDom.style.cssText=`
				position: absolute;
				left:0px;
				top:0px;
				width: 100%;
				height: 100%;`;
		// this.liDoms[i].appenchild(imgDom);
		this.imgDoms.push(imgDom);

		}
		let uls=document.createElement("ul");
		uls.style.cssText=`list-style: none;`;
		this.boxDom.appendChild(uls);
		console.log(imgDoms);
		for(let i=0;i<this.imgs.length;i++){
			let liDom=document.createElement("li");
			liDoms.innerHTML=imgDoms[i];
			liDoms.style.cssText=`
			display: block;
			width:${this.liswhidth}px ;
			height:${this.lisheight}px;
			background: red;
			float: left;
			margin-right: ${this.marginRight}px;
			margin-top: ${this.marginTop}px; `;
			uls.appenchild(liDom);
			this.liDoms.push(liDom);
		}
	}
	addEvent(){
		//鼠标放上去放大
		this.boxDom.onmouseover=()=>{
			this.enlarge()	
		}
		//鼠标离开时恢复
		this.boxDom.onmouseout=()=>{
			this.recovery()
		}
	}
	// //鼠标放上时放大
	// // enlarge(){
	// // 	boxDom.style.cssText=`
	// // 	transform:${this.transform}`;
	// // }
	// //鼠标离开时恢复
	// recovery(){
	// 	render();
	// }

}