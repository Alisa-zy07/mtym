
class ShoppingCar{	
	//构造函数
	constructor(obj,boxDom){

		this.boxDom=boxDom;
		this.divs="";
		let defaultObj={
			ban:"",
			description:"",
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
		// this.addEvent();

	}

	//render
	render(){
		//创建div
		let divs=document.createElement("div");
		divs.style.cssText=`
		width:1200px;
		height:170px;
		border:1px solid black;
		`
		divs.innerHTML=`
		<a href="#" style="position:relative;">
			<img src="img/23.jpg" style="width:100px;height: 100px;">
			<p>美图遥控器第三代</p>
			<p>￥ 89</p>
			<input type="button" value="－" style="width: 20px;height: 20px;border: 1px solid #b5b5b5;font-size: 10px;color: #b5b5b5;border-radius: 50%;background: none; margin: 0 15px;"/>
			<span>${num}</span>
			<input type="button" value="＋" style="width: 20px;height: 20px;border: 1px solid #b5b5b5;font-size: 10px;color: #b5b5b5;border-radius: 50%;background: none;margin: 0 15px;"/>
			<input type="button" value="×" style="width:20px;height:20px;border:none;font-size:20px; border-radius:0px;text-align:center;line-height: 16px;background: none;" />
		</a>
		`
	}
}
// 		//1、创建table
// 		this.divDom = $create("div");
// 		this.tableDom.style.cssText = `
// 				margin: 0 auto;				`;
// 		this.boxDom.appendChild(this.tableDom);
// 		//2、创建标题
// 		//1)、行
// 		let trDom = $create("tr");
// 		this.tableDom.appendChild(trDom);
// 		//2)、列
// 		for(let key in this.datas[0]){
// 			let tdDom = $create("th");
// 			tdDom.style.cssText = `padding:20px 0;
// 			`;
// 			tdDom.innerHTML = key;
// 			trDom.appendChild(tdDom);
// 		}
// 		let tdDom = $create("th");
// 		tdDom.style.cssText = `
// 				text-align: center;`;
// 		tdDom.innerHTML = "小计";
// 		trDom.appendChild(tdDom);

// 		tdDom = $create("th");
// 		tdDom.style.cssText = `
// 				text-align: center;`;
// 		tdDom.innerHTML = "操作";
// 		trDom.appendChild(tdDom);

// 		//3、创建数据
// 		var totalMoney = 0;
// 		for(var i in this.datas){

// 			//1)、行
// 			let trDom = $create("tr");
// 			this.tableDom.appendChild(trDom);
// 			//2)、列
// 			for(let key in this.datas[i]){
// 				let tdDom = $create("td");
// 				tdDom.style.cssText = `
// 				text-align: center;padding:10px 0;`;
// 				tdDom.innerHTML =  this.datas[i][key];
// 				trDom.appendChild(tdDom);
// 			}
// 			//3)、小计
// 			let tdDom = $create("td");
// 			tdDom.style.cssText = `
// 				text-align: center;`;
// 			let xiaoji= this.datas[i]["价格"]*this.datas[i]["数量"];
// 			totalMoney += xiaoji;
// 			tdDom.innerHTML = xiaoji;
// 			trDom.appendChild(tdDom);

// 			//4)、删除按钮
// 			let tdDelDom = $create("td");
// 			tdDelDom.style.cssText = `
// 				text-align: center;`;

// 			tdDelDom.innerHTML = `<input type="button" value="×" style="width:20px;height:20px;border:none;font-size:20px; border-radius:0px;text-align:center;line-height: 16px;background: none;" />`;
// 			trDom.appendChild(tdDelDom);

// 			//5)、加减号
// 			var num = trDom.children[3].innerHTML;

// 			trDom.children[3].innerHTML = `
	
// 				<input type="button" value="－" style="width: 20px;height: 20px;border: 1px solid #b5b5b5;font-size: 10px;color: #b5b5b5;border-radius: 50%;background: none; margin: 0 15px;"/>
// 				<span>${num}</span>
// 				<input type="button" value="＋" style="width: 20px;height: 20px;border: 1px solid #b5b5b5;font-size: 10px;color: #b5b5b5;border-radius: 50%;background: none;margin: 0 15px;"/>
// 			`;
// 		}

// 		//4、总计
// 		//1)、行
// 		trDom = $create("tr");
// 		this.tableDom.appendChild(trDom);
// 		//2)、列
// 		tdDom = $create("td");
// 		tdDom.colSpan = 6;
// 		tdDom.style.cssText = `
// 				text-align: right;font-size:20px;`;
// 		tdDom.innerHTML = "共计："+totalMoney;
// 		trDom.appendChild(tdDom);
// 	}

// 	//绑定事件
// 	addEvent(){
// 		let obj = this;
// 		let trDoms = this.tableDom.rows;
// 		for(let i=1;i<trDoms.length-1;i++){
// 			//取出减号，绑定事件
// 			let reduceBtn = trDoms[i].cells[3].firstElementChild;
// 			reduceBtn.onclick = function(){
// 				//1、改变数量
// 				let num = this.nextElementSibling.innerHTML;
// 				num--;
// 				if(num<0){
// 					return;
// 				}
// 				this.nextElementSibling.innerHTML=num;
// 				//2、改变小计
// 				let price = this.parentNode.previousElementSibling.innerHTML;
// 				let xiaoji = num*price;
// 				this.parentNode.nextElementSibling.innerHTML = xiaoji;

// 				//3、计算合计
// 				obj.calTotalMoney();
// 				//4、保存数据
// 				obj.saveData();
// 			}

// 			//取出加号，绑定事件
// 			let addBtn = trDoms[i].cells[3].lastElementChild;
// 			addBtn.onclick = function(){
// 				let num = this.previousElementSibling.innerHTML;
// 				num++;
// 				this.previousElementSibling.innerHTML=num;
// 				//2、改变小计
// 				let price = this.parentNode.previousElementSibling.innerHTML;
// 				let xiaoji = num*price;
// 				this.parentNode.nextElementSibling.innerHTML = xiaoji;	
// 				//3、计算合计
// 				obj.calTotalMoney();
// 				//4、保存数据
// 				obj.saveData();
// 			}

// 			//取出删除按钮；
// 			let delBtn = trDoms[i].lastElementChild.firstElementChild;
// 			delBtn.onclick = function(){
// 				if(confirm("亲，您真的要删除吗？")){
// 					this.parentNode.parentNode.remove();
// 					obj.calTotalMoney();
// 					obj.saveData();
// 				}
// 			}
			
// 		}

// 	}

// 	calTotalMoney(){
// 		let trDoms = this.tableDom.rows;
// 		let totalMoney=0;
// 		for(let j=1;j<trDoms.length-1;j++){
// 			totalMoney+=parseFloat(trDoms[j].cells[4].innerHTML);
// 		}
// 		this.tableDom.rows[this.tableDom.rows.length-1].cells[0].innerHTML = "共计:"+totalMoney;
// 	}

// 	saveData(){
// 		var objs=[];
// 		//1、从界面上获取数据
// 		let trDoms = this.tableDom.rows;
// 		for(let i=1;i<trDoms.length-1;i++){
// 			let obj = {
// 				"编号":trDoms[i].cells[0].innerHTML,
// 				"商品名称":trDoms[i].cells[1].innerHTML,
// 				"价格":trDoms[i].cells[2].innerHTML,
// 				"数量":trDoms[i].cells[3].children[1].innerHTML
// 			}
// 			objs.push(obj);
// 		}

// 		//2、存储；
// 		// localStorage.setItem('datas',JSON.stringify(objs));
// 		saveCookie('datas',JSON.stringify(objs),10);
// 	}
// }

function $create(tagName) {
	return document.createElement(tagName);
}