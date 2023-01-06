let valueDisplays = document.querySelectorAll(".num");
let interval =5000;

valueDisplays.forEach((valueDisplays)=>{
    let startValue = 0;
    let endValue =parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue)
    let counter = setInterval(() => {
        startValue  += 1;
        valueDisplays.textContent =startValue;
        if(startValue == endValue){
            clearInterval(counter);

        }        
    },duration);
});
document.addEventListener("click",function(e){
  if(e.target.classList.contains("gallery-item")){
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
    myModal.show()
  }
})
