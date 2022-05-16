
function reverseSring(str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

function reverseWord() {
    var inputWord = document.getElementById('WordInput').value;

    document.getElementById('ReversedWord').value = reverseSring(inputWord);
}


function getMultiples() {
    var num = parseInt(document.getElementById('NumberInput').value);

    let table = document.createElement('table')
    let tbody = document.createElement('tbody')

    let tr = document.createElement('tr');
    let td = document.createElement('td');

    for (let i = 1; i <= 20; i++) {

        console.log(i);

        if( i%4 == 1){
            tr = document.createElement('tr')
        }
        td = document.createElement('td')
        td.innerHTML = num * i;
        tr.appendChild(td)
        if ( i % 4 == 0) {
            tbody.appendChild(tr);
        }

    }
    table.appendChild(tbody)

    document.getElementById('multiplesTable').innerHTML = '';
    document.getElementById('multiplesTable').appendChild(table);
}



  

