console.log('u a ' + window.location);

let bl=document.querySelector('.request');
bl.addEventListener('click',function(){
	let pop_=document.querySelector('.popup');
	pop_.style.display='flex';
});

let cl=document.querySelector('.closePopup');
cl.addEventListener('click',function(){
	let pop_2=document.querySelector('.popup');
	pop_2.style.display='none';
});

let cm=document.querySelector('.openMenu');
cm.addEventListener('click',function(){
	let pop_3=document.querySelector('.menu');
	pop_3.style.left=0;

});

let mm=document.querySelector('.closeMenu');
mm.addEventListener('click',function(){
	let pop_31=document.querySelector('.menu');
	pop_31.style.left='-50vw';

});

