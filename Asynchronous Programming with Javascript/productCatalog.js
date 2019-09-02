api.searchAllProducts().then(function (value) {
    updateTable('allTable', value);
});

document.getElementById("inputButton").addEventListener('click', function () {
    processSearchId(document.getElementById('input').value);
});

document.getElementById("inputButtonType").addEventListener('click', function () {
    processSearchType(document.getElementById('inputType').value);
});

document.getElementById("inputButtonPrice").addEventListener('click', function () {
    processSearchPrice(document.getElementById('inputPrice').value);
});

function updateExaminedText(product) {
    let outputString = "Product Id: " + product.id;
    outputString += "<br> Price: " + product.price;
    outputString += "<br> Type: " + product.type;
    document.getElementById("productText").innerHTML = outputString;
}

function processSearchId(id) {
    api.searchProductById(id).then(function (val) {
        return Promise.all([api.searchProductsByPrice(val.price, 50),
        api.searchProductsByType(val.type), val]);
    }).then(function (val) {
        let similarArray = getIntersection(val[0], val[1], val[2].id);
        updateExaminedText(val[2]);
        updateTable('similarTable', similarArray);
    }).catch(function (val) {
        alert(val);
    });
}

function processSearchType(type) {
    api.searchProductsByType(type).then((val) => {
        updateTable('similarTable', val);
    }).catch((err) => {
        console.log(err);
    });
}

function processSearchPrice(price) {
    api.searchProductsByPrice(price, 50).then((val) => {
        updateTable('similarTable', val);
    }).catch((err) => {
        console.log(err);
    });
}

function getIntersection(arrA, arrB, searchedId) {

    let samePrice = arrA;
    let sameType = arrB;
    let similarArray = [];
    samePrice.forEach(function (obj1) {
        sameType.forEach(function (obj2) {
            if (obj1.id == obj2.id && obj1.id != searchedId)
                similarArray.push(obj1);
        });
    });

    return similarArray;

}

function createTableHeader(tableId) {
    let tableHeaderRow = document.createElement('TR');
    let th1 = document.createElement('TH');
    let th2 = document.createElement('TH');
    let th3 = document.createElement('TH');
    let th4 = document.createElement('TH');
    th1.appendChild(document.createTextNode("ProductId"));
    th2.appendChild(document.createTextNode("Type"));
    th3.appendChild(document.createTextNode("Price"));
    th4.appendChild(document.createTextNode("Examine"));
    tableHeaderRow.appendChild(th1);
    tableHeaderRow.appendChild(th2);
    tableHeaderRow.appendChild(th3);
    tableHeaderRow.appendChild(th4);
    document.getElementById(tableId).appendChild(tableHeaderRow);
}

function updateTable(tableId, productArray) {

    let tableBody = document.getElementById(tableId);
    //reset table
    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.firstChild);
    }
    //create table header
    createTableHeader(tableId);
    //populate table rows
    for (i = 0; i < productArray.length; i++) {
        let tr = document.createElement('TR');
        let td1 = document.createElement('TD');
        let td2 = document.createElement('TD');
        let td3 = document.createElement('TD');
        let td4 = document.createElement('button');

        td4.addEventListener('click', function () {
            processSearch(this.parentNode.firstChild.innerHTML);
            window.scrollTo(0, 0);
        });
        td1.appendChild(document.createTextNode(productArray[i].id));
        td2.appendChild(document.createTextNode(productArray[i].type));
        td3.appendChild(document.createTextNode(productArray[i].price));
        td4.appendChild(document.createTextNode("Examine"));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tableBody.appendChild(tr);
    }
}