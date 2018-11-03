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

function showtable(){
  document.getElementById("show_table").style.display="block";
  }


 $(document).ready(function(){
   $("button#button2_1").click(function(){
     var table1_items = [];
     var i = 0;
     var airtable_data1 = "https://api.airtable.com/v0/appQl45FkNG6DrbHy/Restaurant?api_key=keyPGaOFOWVMaoigo&maxRecords=15&view=Grid%20view";
     var table1_dataSet = [];
      $.getJSON(airtable_data1,function(result){
        $.each(result.records,function(key,value){
          table1_items = [];
          table1_items.push(value.fields.Name);
          table1_items.push(value.fields.Location);
          table1_items.push(value.fields.Tags);
          table1_items.push(value.fields.Contact);
          table1_items.push(value.fields.Payment_Method);
          table1_items.push(value.fields.Average_Cost);
          table1_items.push(value.fields.Address);
          table1_dataSet.push(table1_items);
          console.log(table1_items);
        });
        console.log(table1_dataSet);
        $('#table_id_example').DataTable({
          data:table1_dataSet,
          retrive:true,
          columns: [
                    { title: "Name",
                      defaultContent:""},
                    { title: "Location",
                        defaultContent:"" },
                    { title: "Tags",
                      defaultContent:"" },
                    { title: "Contact",
                      defaultContent:""},
                    { title: "Payment Method",
                        defaultContent:""},
                    { title: "Adverage Cost",
                      defaultContent:""},
                    { title: "Address",
                        defaultContent:""},
                   ]

        });
      })
   });
 });
