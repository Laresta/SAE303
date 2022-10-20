$(".nav-item").css("margin-left","1.5em")

let recherche = "#carrousel>ul>li"

let imgs = $(recherche)


function carprec() {
  let idimgact = parseInt($(".imgactive").attr("id"))
  let imgprec = idimgact - 1
  if (idimgact === 0) {
    imgprec = 3
  }
  imgs.each(function(){
    if (parseInt($(this).attr("id")) === imgprec ){
      $(this).toggleClass('imgactive')
      $("#"+idimgact).toggleClass("imgactive")
    }
  })
}

function carsuiv() {
  let idimgact = parseInt($(".imgactive").attr("id"))
  let imgsuiv = idimgact + 1
  if (idimgact === 3) {
    imgsuiv = 0
  }
  imgs.each(function(){
    if (parseInt($(this).attr("id")) === imgsuiv ){
      $(this).toggleClass('imgactive')
      $("#"+idimgact).toggleClass("imgactive")
    }
    }
  )
}
