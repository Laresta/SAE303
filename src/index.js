$(".nav-item").css("margin-left","1.5em")

let recherche = "#carrousel>ul>li"

let imgs = $(recherche)


function carprec() {
  let idimgact = parseInt($(".imgactive").attr("id"))
  console.log(idimgact);
  let imgprec = idimgact - 1
  if (idimgact === 0) {
    imgprec = 3
  }
  console.log(imgprec);
  imgs.each(function(){
    if (parseInt($(this).attr("id")) === imgprec ){
      $(this).toggleClass('imgactive')
      $("#"+idimgact).toggleClass("imgactive")
    }
  })
}

function carsuiv() {
  console.log("ahhhhh");
  let idimgact = parseInt($(".imgactive").attr("id"))
  let imgsuiv = idimgact + 1
  if (idimgact === 3) {
    imgsuiv = 0
  }
  console.log(imgsuiv);
  imgs.each(function(){
    if (parseInt($(this).attr("id")) === imgsuiv ){
      $(this).toggleClass('imgactive')
      $("#"+idimgact).toggleClass("imgactive")
    }
    }
  )
}
