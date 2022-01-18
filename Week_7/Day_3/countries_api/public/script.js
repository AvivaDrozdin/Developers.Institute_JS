const getData = () => {
    fetch('http://localhost:3001/countries')
        .then(res => res.json())
        .then(data => {
            createSelect(data);
        })
        .catch(e => {
            console.log(e);
        })
}

const createSelect = (arr) => {
    const root = document.getElementById('root')
    arr.forEach((item, i) => {
        const p = document.createElement('p');
        p.innerText = item.country;
        root.appendChild(p)
    });

}
getData()