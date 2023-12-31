const apiUrl = "https://localhost:8000/api"

async function get(url){
    return (await axios.get(url)).data;
}
async function post(url, body){
    return (await axios.post(url, 
        JSON.stringify(body),{
            headers:{'Context type':'application/json'}
        })).data
}
async function loadTable(){
    let data = await get(apiUrl + 'getList');
    let tableDiv = document.getElementById('tableData');

    if(!data || !tableDiv)
        return;
    let myHtmlCode = [];
    myHtmlCode.push('<table>');
    myHtmlCode.push('<thread>');
    myHtmlCode.push('<tr> <th hidden> Id </th><th>Name</th><th>Age</th>');
    myHtmlCode.push('</thread>');
    myHtmlCode.push('</tbody>');

    for(let item of data){
        myHtmlCode.push(`<tr> <td hidden> ${item.id} </td><td>${item.name}</td><td>${item.age}</td>`);
    }

    myHtmlCode.push('</tbody>');
    myHtmlCode.push('</table>');

    tableDiv.innerHTML = myHtmlCode.join('');
}

async function sendData(){
    let name = document.getElementById('inputName').value;
    let age = document.getElementById('inputAge').value;
    if(!name||!age){
        alert('You must input a name and age');
        return;
    }
    await post(apiUrl+'postEl',{name:name,age:age});
    await loadTable();
}

loadTable();