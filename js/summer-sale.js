
function common(target){
    const titleName = (target.childNodes[3].childNodes[3].innerText);
    const container = document.getElementById('container');
    const count =container.childElementCount;
    const p = document.createElement('p');
    console.log(p)
    p.innerHTML=`
     ${count + 1}. ${titleName}

    `;
    container.appendChild(p)

    


}