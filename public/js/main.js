document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://real-jade-kingfisher-boot.cyclic.app/api/${rapperName}`,{
            headers: {
                'Accept': 'application/json'
            }
        })
        const data = await response.json()

        console.log(data)
     data.age

    }catch(error){
        console.log(error)
    }
}
console.log('hello world')


