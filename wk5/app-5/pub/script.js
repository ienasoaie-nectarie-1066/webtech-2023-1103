window.onload = () =>{
    let form = document.getElementById('formPhone')
    let formPhoneHandler = (e) =>{
        e.preventDefault()
        let list = document.getElementById('pbook')
        let entryName = document.getElementById('iName').value
        let entryNum = document.getElementById('iNum').value

        let listNum = document.createElement('list')
        listNum.innerHTML = `Name: ${entryName}; Phone number: ${entryNum} <br>`
        list.appendChild(listNum)
    }
    form.onsubmit = formPhoneHandler;
}