document.querySelector('button').addEventListener('click', apiRequest)
document.querySelector('.btn-1').addEventListener('click', removeRapper)
async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`/api/${rapperName}`)
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
        
        let h5 = document.createElement('h2')
        h4.innerText = 'Nick Name: ' + data.nickName
        section.appendChild(h5)

        let h6 = document.createElement('h2')
        h6.innerText = 'Birth Day: ' + data.birthDay
        section.appendChild(h6)
    }catch(error){
        console.log(error)
    }
}

async function removeRapper(){
    try{
        const body = document.querySelector('body')
        const section = document.querySelector('section')
        body.removeChild(section)
        location.reload()
    }catch(error){
        console.log(error)
    }
}

console.log('hello world')


