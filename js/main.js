(function(window, document) {
	var modal = document.getElementById('myModal');
	var open = document.getElementById('openModal');
	var close = document.getElementById('closeModal');
	function openModal() {
		myModal.style.display = 'block';
	}
	function closeModal() {
		myModal.style.display = 'none';
	}
	open.addEventListener('click', openModal);
	close.addEventListener('click', closeModal);
})(window, document);