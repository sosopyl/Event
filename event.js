//289

// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.pageX + ' : ' + event.pageY;
// });

//290
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func() {
//     if(event.type == 'click'){elem.style.color = 'green';} 
//     if(event.type == 'dblclick'){elem.style.color = 'red';} 

// }
	
///291
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);

// function func(event) {
//     let elemTarget = event.target.tagName.toLowerCase();
    
//     if (elemTarget === 'ul') {
//       let newP = document.createElement('li');
//       newP.innerHTML = 'text';
//       elem.appendChild(newP);
//     }
    
//     if (elemTarget === 'li') {
      
//       let elemsLi = document.querySelectorAll('li');
//       for (let elemLi of elemsLi) {
//         elemLi.addEventListener('click', funcLi);
//       }
      
//     }
//   }
//   function funcLi() {
//     this.innerHTML += '!';
//   } 

//292

// let elem = document.querySelector('input');
// let p = document.querySelector('p')
// elem.addEventListener('keypress', function(event) {

// 	if(event.code === 'Enter'){p.textContent = elem.value}
// });

//293

// 1
// let elem = document.querySelector('p')
// elem.addEventListener('click', func)
// function func (event){
// 	if (event.altKey) {
// 		elem.style.color = 'red'
// 	}
// }

//2
// let elems = document.querySelectorAll('li')
// for(let elem of elems){
//     elem.addEventListener('click', func)
//     function func(event){
//         if (event.ctrlKey) {
//             elem.textContent += "1"
//             elem.removeEventListener('click', func)
//         } else[
//             elem.textContent += "2",
//             elem.removeEventListener('click', func)
//         ]

//     }
// }

//294

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	event.preventDefault();
//     elem.textContent = elem.textContent + '(' + elem.href +")"
// });

///296

// let div = document.querySelector('div');
// let elemsLi = document.querySelectorAll('li')

// div.addEventListener('click', function(event) {
// 	if (event.target.tagName === 'DIV') {
// 		console.log('клик именно по диву');
// 	}


// 	if (event.target.tagName === 'UL') {
//     let newLi = document.createElement('li');
//     div.appendChild(newLi);
// 		console.log('клик именно по списку');
// 	}


//     if (event.target.tagName === 'LI') {
//         for(let elemLi of elemsLi){
//             elemLi.addEventListener('click',funcLi 
//             )
//         }
// 	}
// });

// function funcLi()
// {this.innerHTML += "!"}

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function(event) {
//     event.stopImmediatePropagation();
// 	console.log('голубой');
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');

// });

// 297

// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');

// button.addEventListener('click', function() {
// 	block.classList.add('active');
//     event.stopPropagation()
// });
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });

// 299 

// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// for (let item of items) {
// 	item.addEventListener('click', handler);
// }
// function handler() {
// 	this.innerHTML = this.innerHTML + '!';
// }
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.innerHTML = 'item';
	
// 	item.addEventListener('click', handler);
	
// 	list.appendChild(item);
// });
