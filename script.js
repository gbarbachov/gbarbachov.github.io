// CS290 - Web Development
// Grigori Barbachov
// Homework 5 - Course Projects

homePageImage = 3;
document.addEventListener("DOMContentLoaded", start);


// Main program driver. Call other functions to create
// all required content

function start() {

	// add event listeners for buttons
	addEventListeners();

	// display first carousel image on homepage
	changeImage(1);
	window.setInterval(nextImage, 2200);
}


// Attach event listeners to all buttons
function addEventListeners() {

	// event listeners for header horizontal menue
	document.getElementById('btn_home').addEventListener('click', btnHome);
	document.getElementById('btn_dynarr').addEventListener('click', btnDynArr);	
	document.getElementById('btn_dll').addEventListener('click', btnDLL);	
	document.getElementById('btn_bst').addEventListener('click', btnBST);	

}


// SWITCH TO HOME PAGE
function btnHome() {

	const ids_off = ['methods_doubly_linked_list',
				'methods_binary_search_tree',
				'methods_dynamic_array',
				'log', 'output'];

	const ids_on = ['home_page'];

	for (let id of ids_off) document.getElementById(id).style.display = 'none';
	for (let id of ids_on) document.getElementById(id).style.display = 'block';
	document.getElementById('page_title').innerHTML = 'HOME PAGE';

}


// SWITCH TO DYNAMIC ARRAY PAGE
function btnDynArr() {
	const ids_off = ['methods_doubly_linked_list',
					'methods_binary_search_tree',
					'home_page'];

	const ids_on = ['methods_dynamic_array', 'log', 'output'];

	for (let id of ids_off) document.getElementById(id).style.display = 'none';
	for (let id of ids_on) document.getElementById(id).style.display = 'block';
	document.getElementById('page_title').innerHTML = 'DYNAMIC ARRAY';
	clearLog();
}


// SWITCH TO DOUBLY LINKED LIST PAGE
function btnDLL() {
	const ids_off = ['methods_dynamic_array',
					'methods_binary_search_tree',
					'home_page'];

	const ids_on = ['methods_doubly_linked_list', 'log', 'output'];

	for (let id of ids_off) document.getElementById(id).style.display = 'none';
	for (let id of ids_on) document.getElementById(id).style.display = 'block';
	document.getElementById('page_title').innerHTML = 'DOUBLY LINKED LIST';
	clearLog();
}


// SWITCH TO BINARY SEARCH TREE PAGE
function btnBST() {
	const ids_off = ['methods_dynamic_array',
					'methods_doubly_linked_list',
					'home_page'];

	const ids_on = ['methods_binary_search_tree', 'log', 'output'];

	for (let id of ids_off) document.getElementById(id).style.display = 'none';
	for (let id of ids_on) document.getElementById(id).style.display = 'block';
	document.getElementById('page_title').innerHTML = 'BINARY SEARCH TREE';
	clearLog();
}

// Change carousel image on home page
function changeImage(delta) {
	document.getElementById(`img${homePageImage}`).style.display = 'none';
	homePageImage += delta;
	if (homePageImage < 1) homePageImage = 3;
	if (homePageImage > 3) homePageImage = 1;
	document.getElementById(`img${homePageImage}`).style.display = 'block';
}


// Change carousel image on home page (next image only)
function nextImage() {
	changeImage(1);
}


// process methods for Dynamic Array page
function dynArr(method_id) {

	const methods = ['add_front(', 'add_back(', 'insert_at_index(',
					'get_front(', 'get_back(', 'get_at_index(',
					'remove_value('];

	const id = parseInt(method_id);
	
	let v1 = 0;
	let v2 = 0;
	let command = 'unknown';

	if ( [1, 2, 6, 7].includes(id) ) {
		v1 = document.getElementById(`da${id}1`).value;
		if (v1 == '') v1 = 0;
		command = methods[id - 1] + v1 + ')';
	}

	if ( [3].includes(id) ) {
		v1 = document.getElementById(`da${id}1`).value;
		if (v1 == '') v1 = 0;
		v2 = document.getElementById(`da${id}2`).value;
		if (v2 == '') v2 = 0;
		command = methods[id - 1] + v1 + ', ' + v2 + ')';
	}

	if ( [4, 5].includes(id) ) {
		command = methods[id - 1] + ')';
	}

	const log = document.getElementById('log_content');
	let current = log.innerHTML;
	log.innerHTML = command + '\n' + current;
}

// process methods for Doubly Linked List
function dll(method_id) {

	const methods = ['add_front(', 'add_back(', 'insert_at_index(',
					'get_front(', 'get_back(', 'get_at_index(',
					'remove_value('];

	const id = parseInt(method_id);
	
	let v1 = 0;
	let v2 = 0;
	let command = 'unknown';

	if ( [1, 2, 6, 7].includes(id) ) {
		v1 = document.getElementById(`dll${id}1`).value;
		if (v1 == '') v1 = 0;
		command = methods[id - 1] + v1 + ')';
	}

	if ( [3].includes(id) ) {
		v1 = document.getElementById(`dll${id}1`).value;
		if (v1 == '') v1 = 0;
		v2 = document.getElementById(`dll${id}2`).value;
		if (v2 == '') v2 = 0;
		command = methods[id - 1] + v1 + ', ' + v2 + ')';
	}

	if ( [4, 5].includes(id) ) {
		command = methods[id - 1] + ')';
	}

	const log = document.getElementById('log_content');
	let current = log.innerHTML;
	log.innerHTML = command + '\n' + current;
}

// process methods for Binary Search Tree
function bst(method_id) {

	const methods = ['add(', 'contains(', 'remove(',
					'height(', 'pre_order_traversal(',
					'in_order_traversal(', 'post_order_traversal('];

	const id = parseInt(method_id);
	
	let v1 = 0;
	let v2 = 0;
	let command = 'unknown';

	if ( [1, 2, 3].includes(id) ) {
		v1 = document.getElementById(`bst${id}1`).value;
		if (v1 == '') v1 = 0;
		command = methods[id - 1] + v1 + ')';
	}

	/*
	if ( [].includes(id) ) {
		v1 = document.getElementById(`bst${id}1`).value;
		if (v1 == '') v1 = 0;
		v2 = document.getElementById(`bst${id}2`).value;
		if (v2 == '') v2 = 0;
		command = methods[id - 1] + v1 + ', ' + v2 + ')';
	}
	*/

	if ( [4, 5, 6, 7].includes(id) ) {
		command = methods[id - 1] + ')';
	}

	const log = document.getElementById('log_content');
	let current = log.innerHTML;
	log.innerHTML = command + '\n' + current;
}





function clearLog() {
	document.getElementById('log_content').innerHTML = '';
}
