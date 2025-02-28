let tbody = document.querySelector('tbody')
fetch('https://jsonplaceholder.typicode.com/comments')
	.then(response => response.json())
	.then(data => {
		tbody.innerHTML = ''
		data.map((obj)=>{
			tbody.innerHTML += `
				<tr>
					<td class ="border-[1px] border-solid border-black">${obj.id}</td>
					<td class ="border-[1px] border-solid border-black">${obj.name}</td>
					<td class ="border-[1px] border-solid border-black">${obj.email}</td>
					<td class ="border-[1px] border-solid border-black">${obj.body}</td>
				</tr>
			`
		})
	})
