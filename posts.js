let tbody = document.querySelector('tbody')
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(data => {
		tbody.innerHTML = ''
		data.map((obj)=>{
			tbody.innerHTML += `
				<tr>
					<td class ="border-[1px] border-solid border-black">${obj.id}</td>
					<td class ="border-[1px] border-solid border-black">${obj.title}</td>
					<td class ="border-[1px] border-solid border-black">${obj.body}</td>
				</tr>
			`
		})
	})
