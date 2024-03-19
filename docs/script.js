window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0); //modif le 0 pour la transition header
})


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

   //met le texte hover
for (const unBtn of document.querySelectorAll(".radio")) {
  let overlays= document.querySelectorAll(".image_overlay")
  unBtn.addEventListener("click",function(event){
    for (const unOverlay of overlays) {
      let num= event.target.id.split("radio-")[1]
      if(unOverlay.id=="overlay-"+num){

        unOverlay.style.zIndex=1
      }
      else{
        unOverlay.style.zIndex=-1
      }
    }
  })
}
  
  // Ferme le dropdown si l'utilisateur clique dessus
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }