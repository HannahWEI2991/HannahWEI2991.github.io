$(document).ready(function(){

  $("button#button1").click(function(){
    var table1_items = [];
    var i = 0;
    var airtable_data = "https://api.airtable.com/v0/appQl45FkNG6DrbHy/Restaurant?api_key=keyPGaOFOWVMaoigo&maxRecords=15&view=Grid%20view"
    var table1_dataSet = [];

    $.getJSON(airtable_data,function(result){
      $.each(result.records,function(key,value){
         table1_items = [];
         table1_items.push(value.fields.Name);
         table1_items.push(value.fields.Location);
         table1_items.push(value.fields.Tags);
         table1_items.push(value.fields.Contact);
         table1_items.push(value.fields.Payment_Method);
         table1_items.push(value.fields.Address);
         table1_dataSet.push(table1_items);
         console.log(table1_items);
      });
         console.log(table1_dataSet);
         $("#table1").DataTable({
           data:table1_dataSet,
           retrive:true,
           destroy:true,
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
                   { title: "Address",
                       defaultContent:""},
                  ]
         });
    });
  });


  $("button#button2").click(function(){
    var table2_items = [];
    var i = 0;
    var airtable_data_2 = "https://api.airtable.com/v0/appQl45FkNG6DrbHy/Specialty?api_key=keyPGaOFOWVMaoigo&maxRecords=29&view=Grid%20view"
    var table2_dataSet = [];

    $.getJSON(airtable_data_2,function(result){
      $.each(result.records,function(key,value){
         table2_items = [];
         table2_items.push(value.fields.Name);
         table2_items.push("<img src='"+value.fields.Picture[0].thumbnails.large.url+"' width=180px height=120px/>");
         table2_items.push(value.fields.Price);
         table2_items.push(value.fields.Restaurant);
         table2_dataSet.push(table2_items);
         console.log(table2_items);
      });
         console.log(table2_dataSet);

         $("#table2").DataTable({
           data:table2_dataSet,
           retrive:true,
           destroy:true,
                   columns: [
                   { title: "Name",
                     defaultContent:""},
                   { title: "Picture",
                       defaultContent:"",},
                   { title: "Price",
                     defaultContent:"" },
                   { title: "Restaurant",
                     defaultContent:""},
                   ],
                   columnDefs:[
                    {target:1,
                     data:"img",
                     render:function(url,type,full){
                       return"<img src='$url'/>"
                     }
                   }
                              ],
    });
  });
  });

  $("button#button3").click(function(){
    var table3_items = [];
    var i = 0;
    var airtable_data_3 = "https://api.airtable.com/v0/appQl45FkNG6DrbHy/Rating?api_key=keyPGaOFOWVMaoigo&maxRecords=15&view=Grid%20view"
    var table3_dataSet = [];

    $.getJSON(airtable_data_3,function(result){
      $.each(result.records,function(key,value){
         table3_items = [];
         table3_items.push(value.fields.Name);
         table3_items.push(value.fields.openrice_page_followers);
         table3_dataSet.push(table3_items);
         console.log(table3_items);
      });
         console.log(table3_dataSet);

         $("#table3").DataTable({
           data:table3_dataSet,
           retrive:true,
           destroy:true,
                   columns: [
                   { title: "Name",
                     defaultContent:""},
                   { title: "Openrice Page Followers",
                       defaultContent:"" },
                      ],
                      });

         var chart = c3.generate({
           data:{
               columns:table3_dataSet,
               type:'bar',
           },
           bar:{
               title:"Openrice Page Followers"
           },
         });
  });
});
});
