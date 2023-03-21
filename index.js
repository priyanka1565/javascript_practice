//fetch the from an api
let data;
async function fetchData() {
  let url = "https://fakestoreapi.com/products";
  let res = await fetch(url);
   data = await res.json();
  appendData(data)
  console.log(data);
}
fetchData();

//append the data

function appendData(data) {

  container.innerHTML = null;

  data.map(function(el){
    let container = document.getElementById("container");
    let div = document.createElement("div");
    container.append(div);

    let img = document.createElement("img")
    img.src = el.image;

    let p1 = document.createElement("p1");
    p1.innerHTML = el.category;

    
    let h2 = document.createElement("h2");
    h2.innerHTML = el.price;

    let h3 = document.createElement("h3");
    h3.innerHTML = el.title;

    div.append(img,p1,h2,h3)


  })

}

//sorting the data from low to high based on price
function sortLH() {
 data = data.sort(function (a, b) {
  return a.price - b.price;
  })
  //console.log("data:",data)
  appendData(data);
}

function sortHL() {
  data = data.sort(function (a, b) {
    return b.price - a.price;
  })
  //console.log("data:",data)
  appendData(data);
}

//filter the data from api
//hoew to keep original data
//dynamic filtering


function filter() {
  let query = document.getElementById("query").value;
  //console.log("query:", query);

  data = data.filter(function (el) {
  return  el.title.toLowerCase().includes(query);
    
  });
  appendData(data);
}


