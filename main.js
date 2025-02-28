let tbody = document.querySelector('tbody')
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then((data) => {
		tbody.innerHTML = ""
		data.map((obj)=>{

			if(obj.completed){
				tbody.innerHTML +=`
				<tr>
					<td class="border-solid border-[1px] border-black">${obj.id}</td>
					<td class="border-solid border-[1px] border-black">${obj.title}</td>
					<td class="border-solid border-[1px] border-black"><i class="fa-solid fa-check"></i></td>
				</tr>
				`
			}else{
				tbody.innerHTML +=`
				<tr>
					<td class="border-solid border-[1px] border-black">${obj.id}</td>
					<td class="border-solid border-[1px] border-black">${obj.title}</td>
					<td class="border-solid border-[1px] border-black"><i class="fa-solid fa-xmark"></i></td>
				</tr>
				`
			}
			
		})
	})
