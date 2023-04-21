document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://real-jade-kingfisher-boot.cyclic.app/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        let section = document.querySelector('section')
        let h2 = document.createElement('h2')
        h2.innerText = 'Birth Name: ' + data.birthName
        section.appendChild(h2)
        let h3 = document.createElement('h2')
        h3.innerText = 'Age is: ' + data.age
        section.appendChild(h3)

        let h4 = document.createElement('h2')
        h4.innerText = 'Birth Location: ' + data.birthLocation
        section.appendChild(h4)

    }catch(error){
        console.log(error)
    }
}
console.log('hello world')


