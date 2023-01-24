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
