document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('section').innerText = data.age

    }catch(error){
        console.log(error)
    }
}
console.log('hello world')


