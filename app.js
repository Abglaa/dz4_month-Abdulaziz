const getButton = document.querySelector('.btn')
const wrapper = document.querySelector('.wrapper')

getButton.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response)

        data.map((item) => {

            const card = document.createElement('div')
            card.classList.add('card')

            const age = document.createElement('p')
            const name = document.createElement('p')
            const img = document.createElement('img')
            const description = document.createElement('description')


            name.textContent = `Имя: ${item.name}`
            age.textContent = `Возраст:${item.age}`
            description.textContent = `Описание:${item.description}`
            img.src= item.img
            img.alt = "Аватар"

            card.append(img, name,  age,description)

            wrapper.appendChild(card)
        })
        console.log(data)
    }
}
