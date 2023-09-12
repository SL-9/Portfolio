'use strict';

{
	const imageItem = document.querySelector('.imageItem');
	const modalItem = document.querySelector('.modalItem');

	imageItem.addEventListener('click', () => {
modalItem.classList.add('open');
	});

	modalItem.addEventListener('click', () => {
modalItem.classList.remove('open');
	});
}