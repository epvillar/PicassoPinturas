
const sectionCenter = document.querySelector(".section-center")
const form1 = document.querySelector('.lorem-form')
const amount1 = document.getElementById('amount')

let displayObras = obras.map(function(item) {
  
  return `<article class="obras-item">
  <img src=${item.img} alt=${item.title} class="photo" />
  <div class="item-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="pintor">${item.pintor}</h4>
    </header>    
  </div>
</article>`;
})


displayObras = displayObras.join("")


form1.addEventListener('submit', function(e) {
  e.preventDefault();
  const value1 = parseInt(amount1.value)
console.log(value1)
  if (isNaN(value1) || value1 < 0 || value1 >= 11) {
    document.getElementById("try").innerHTML = "tenes que elegir entre 1 y 10"
  } 
  else {
    let tempObras = obras.slice(0, value1)
    tempObras = tempObras.map(function(item){
      return `<article class="obras-item">
      <img src=${item.img} alt=${item.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="pintor">${item.pintor}</h4>
        </header>
      </div>
    </article>`;  
    })
    .join("");
    sectionCenter.innerHTML = tempObras
  }
  })






