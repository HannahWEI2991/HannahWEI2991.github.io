function recommend(){
  var food_style = prompt("What kind of food are you looking for?\n(Please input a or b)\na-Exotic Food\nb-Local Food")
  var place = prompt("Which place are you going to?\n(Please input 1 or 2 or 3)\n1-New Territories\n2-Kowloon\n3-Hong Kong Island")
  if (food_style=="a" && place=="1"){
    document.getElementById("show_area").style.display="block";
    document.getElementById("place").innerHTML = "Exotic Food in New Terriroties";
    document.getElementById("insert_photo").innerHTML = "<img src='https://wx1.sinaimg.cn/mw690/c17f1bdegy1fwg8n9bublj20f00u0aer.jpg'>"
  }
  else if(food_style=="a" && place=="2"){
    document.getElementById("show_area").style.display="block";
    document.getElementById("place").innerHTML = "Exotic Food in Kowloon";
    document.getElementById("insert_photo").innerHTML = "<img src='https://wx2.sinaimg.cn/mw690/c17f1bdegy1fwg8n9fls4j20f00u0n7y.jpg'>"
  }
  else if(food_style=="a" && place=="3"){
    document.getElementById("show_area").style.display="block";
    document.getElementById("place").innerHTML = "Exotic Food in Hong Kong Island";
    document.getElementById("insert_photo").innerHTML = "<img src='https://wx2.sinaimg.cn/mw690/c17f1bdegy1fwg8n97slsj20f00u0gxm.jpg'>"
  }
  else if(food_style=="b" && place=="1"){
    document.getElementById("show_area").style.display="block";
    document.getElementById("place").innerHTML = "Local Food in New Terriroties";
    document.getElementById("insert_photo").innerHTML = "<img src='https://wx2.sinaimg.cn/mw690/c17f1bdegy1fwg8n9s54qj20f00u0nay.jpg'>"
  }
  else if(food_style=="b" && place=="2"){
    document.getElementById("show_area").style.display="block";
    document.getElementById("place").innerHTML = "Local Food in Kowloon";
    document.getElementById("insert_photo").innerHTML = "<img src='https://wx2.sinaimg.cn/mw690/c17f1bdegy1fwg8n9k2tkj20f00u0qgv.jpg'>"
  }
  else if(food_style=="b" && place=="3"){
    document.getElementById("show_area").style.display="block";
    document.getElementById("place").innerHTML = "Local Food in Hong Kong Island";
    document.getElementById("insert_photo").innerHTML = "<img src='https://wx1.sinaimg.cn/mw690/c17f1bdegy1fwg8n9pmmaj20f00u0any.jpg'>"
  }
}
