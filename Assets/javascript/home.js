// alert("hanji mai toh thik hu");
// const checkBoxes = document.querySelectorAll('.list input[type="checkbox"]');
const listItem = document.querySelectorAll('.list-item');
listItem.forEach(item=>{
    item.addEventListener('click', ()=>{
        // console.log(item);
        var para = item.querySelector('p');
        var checkBox = item.querySelector('#checkbox')
        if (checkBox.checked){
            para.classList.add("strike");
            console.log(para.classList);
        }
        else{
            para.classList.remove("strike");
        }
    })
})