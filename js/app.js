'use strict' ;

if(localStorage.getItem('movie') === null)
{
  localStorage.setItem('movie' , JSON.stringify([])) ;
}

let arr = JSON.parse(localStorage.getItem('movie')) ;

function Movie(name , category , year)
{
  this.name = name ;
  this.category = category ;
  this.year = year ;
  arr.push(this) ;
}
//////////////////////////////////////
const table = document.getElementById('table') ;
///////////////////////////////////// SUBMIT :
document.addEventListener('submit' , submit) ;
function submit(happen)
{
  happen.preventDefault() ;
  new Movie(happen.target.name.value , happen.target.category.value , happen.target.year.value) ;
  localStorage.setItem('movie' , JSON.stringify(arr)) ;
  //////////////////////////
  let tr = document.createElement('tr') ;
  table.appendChild(tr) ;

  let name = document.createElement('td') ;
  name.textContent = happen.target.name.value ;

  let category = document.createElement('td') ;
  let categoryImg = document.createElement('img') ;
  categoryImg.src = './img/' + happen.target.category.value + '.png' ;
  categoryImg.width = '70' ;
  categoryImg.height = '70' ;

  let year = document.createElement('td') ;
  year.textContent = happen.target.year.value ;
  tr.appendChild(category) ;
  category.appendChild(categoryImg) ;
  tr.appendChild(name) ;
  tr.appendChild(year) ;
  //////////////////////////
  console.log(happen.target.name.value ) ;
  console.log(happen.target.category.value ) ;
  console.log(happen.target.year.value ) ;

}
////////////////////////////// PRINT FUNCTION :
show() ;
function show()
{
  let arr = JSON.parse(localStorage.getItem('movie')) ;
  for(let i = 0 ; i < arr.length ; i++)
  {
    let tr = document.createElement('tr') ;
    table.appendChild(tr) ;

    let name = document.createElement('td') ;
    name.textContent = arr[i].name ;

    let category = document.createElement('td') ;
    let categoryImg = document.createElement('img') ;
    categoryImg.src = './img/' + arr[i].category + '.png' ;
    categoryImg.width = '70' ;
    categoryImg.height = '70' ;

    let year = document.createElement('td') ;
    year.textContent = arr[i].year ;
    tr.appendChild(category) ;
    category.appendChild(categoryImg) ;
    tr.appendChild(name) ;
    tr.appendChild(year) ;
  }
}
/////// ***** Stretch Goal ***** /////////
///////////////////// CLEAR LOCAL STORAGE :
document.addEventListener('reset' , clear) ;
function clear(event)
{
  localStorage.removeItem('movie') ;
  location.reload() ;
}













