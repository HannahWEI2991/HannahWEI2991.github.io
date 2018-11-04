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
