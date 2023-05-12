// Chapter 42 to 48
// Question No 1 and 2
// function func(){
//     alert("Thanks for purchasing a phone from us")
// }

// Question No 3  *********
// function del(){
//     document.getElementById("myTable").deleteRow(0);
    
// }

// Question No 4

// function changeImg(flag){
//     var img_store = document.getElementById("Img")
//     if (flag=='in'){
//         img_store.src = "./images/car2.jpg"
//     }else{
//         img_store.src = "./images/car1.jpg"
//     }
// }

// Question No 5
// var input = document.getElementById("Inp")
// input.value  = 0

// function addCount(){
//     input.value += 1
// }
// function delCount(){
//     input.value -= 1
// }

// Chapter  49 to 52
//Question No 1
// var inpName = document.getElementById('name')
// var email = document.getElementById('email')
// var pass = document.getElementById('pass')
// function get(){
//     console.log(inpName.value)
//     console.log(email.value)
//     console.log(pass.value)
// }

//Question No 2
// var para = document.getElementById('para1')
// var btn = document.getElementById("hideBtn")
// function loadMore(){
//     para.innerHTML += " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi inventore provident distinctio ipsa quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi inventore provident distinctio ipsa quos."
//     btn.innerHTML = "See less"
//     btn.setAttribute("onclick" , "seeLess()")
// }

// function seeLess(){
//     para.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt exercitationemnumquam! Dolorem, unde et culpa asperiores minima temporibusquos sed ullam ipsum amet laboriosam alias inventore quia veniam excepturi!"
//     btn.innerHTML = "Load More"
//     btn.setAttribute("onclick" , "loadMore()")
// }

//Question No 3
// function createTable(){
//     var div = document.createElement("div")
//     var table = document.createElement("table")
    
//     var tr = document.createElement("tr")

//     var th = document.createElement("th")
//     var thTxt = document.createTextNode("Name")
//     th.appendChild(thTxt)
//     var th = document.createElement("th")
//     var thTxt = document.createTextNode("Email")
//     th.appendChild(thTxt)
//     var th = document.createElement("th")
//     var thTxt = document.createTextNode("Password")
//     th.appendChild(thTxt)
//     tr.appendChild(th)
//     tr.appendChild(th)
//     tr.appendChild(th)
//     table.appendChild(tr)
//     div.appendChild(table)
// }