var task = document.querySelector('#task');
var add = document.querySelector('#add');
var ol = document.querySelector('ol')

add.onclick = function()
{
    var li = document.createElement('li');
    ol.appendChild(li)
    li.innerHTML = task.value;
    task.value="";
    li.onclick = function()
    {
        li.classList.toggle('done');
    }
}