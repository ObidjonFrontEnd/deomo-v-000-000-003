let tbody = document.querySelector('tbody')
fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => {
		tbody.innerHTML = ''
		data.map(obj => {
			tbody.innerHTML += `
				<tr>
					<td class ="border-[1px] border-solid border-black">${obj.id}</td>
					<td class ="border-[1px] border-solid border-black">${obj.name}</td>
					<td class ="border-[1px] border-solid border-black">${obj.username}</td>
					<td class ="border-[1px] border-solid border-black">${obj.email}</td>
					<td class ="border-[1px] border-solid border-black">
					${obj.address.street}
					${obj.address.suite}
					${obj.address.city}
					${obj.address.zipcode}	
					${obj.address.geo.lat}
					${obj.address.geo.lng}
					</td>
					<td class ="border-[1px] border-solid border-black">${obj.phone}</td>
					<td class ="border-[1px] border-solid border-black">${obj.website}</td>
					<td class ="border-[1px] border-solid border-black">
					${obj.company.name}
					${obj.company.catchPhrase}
					${obj.company.bs}
					</td>
				

				</tr>
			`
		})
	})
