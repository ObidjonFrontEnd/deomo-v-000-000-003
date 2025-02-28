let downloadBtn = document.getElementById('downloadBtn');
let downloadModal = document.getElementById('downloadModal');
let p = document.querySelector('#downloadModal p');
let svg = document.getElementById('svg');
let body = document.querySelector('body')
let h1 = document.createElement('h1')
let foto = document.querySelector('img')

downloadBtn.addEventListener('click' , function(){
	downloadModal.classList.toggle('hidden')
	new Promise((resolve)=>{
	
			setTimeout(() => {
				resolve('Uploaded')
			}, 3000);
	

	}).then((massege) =>{
		p.textContent = massege;
		svg.outerHTML = `
		<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15 L12 22 L24 8" stroke="green" stroke-width="4" fill="none" stroke-linecap="round"
            stroke-dasharray="40" stroke-dashoffset="40">
            <animate attributeName="stroke-dashoffset" from="40" to="0" dur="0.6s" fill="freeze" />
        </path>
    </svg>
		`
	})

	new Promise((resolve) => {

		setTimeout(() => {
			resolve('bg-[red]')
		}, 2000);

	}).then((arg) =>{
		body.classList.toggle(arg)
	})

	new Promise((resolve) => {
		
		setTimeout(() => {
			resolve('Hellow World')
		}, 4000);

	}).then((arg) =>{
		h1.append(arg)
		body.appendChild(h1)
	})

	new Promise((resolve) => {
		
		setTimeout(() => {
			resolve('https://avatars.mds.yandex.net/i?id=73fc678a6e1299d33ffa0d91526cf342_l-6371080-images-thumbs&n=13')
		}, 0);

	}).then((arg) =>{
			foto.outerHTML = `<img class="w-[200px] h-[150px] mt-[100px]" src="${arg}" alt="">`
	})



	new Promise((resolve) => {
		
		setTimeout(() => {

			resolve('Ferst')
			
		}, 2000);
	
	}).then((arg) =>{
		h1.append(arg)
		body.appendChild(h1)
	})

	new Promise((resolve) => {
		
		setTimeout(() => {

			resolve('secent')
			
		}, 3000);
	
	}).then((arg) =>{
		h1.append(arg)
		body.appendChild(h1)
	})

})




