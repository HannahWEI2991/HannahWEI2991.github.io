$(document).ready(function(){
  $("button#get_data").click(function(){
    var table1_items = [];
    var i = 0;
    var airtable_data = "https://api.airtable.com/v0/appQl45FkNG6DrbHy/Restaurant?api_key=keyPGaOFOWVMaoigo&maxRecords=15&view=Grid%20view"
    var table1_dataSet = [];
        $.getJSON(airtable_data,function(result){
          $.each(result.records,function(key,value){
              table1_items = [];
              table1_items.push(value.fields.Name);
              table1_items.push(value.fields.Location);
              table1_items.push(value.fields.Address);
              table1_items.push(value.fields.Contact_Number);
              table1_items.push(value.fields.Payment_Method);
              table1_items.push(value.fields.Average_Cost);
              table1_items.push(value.fields.Tags);
              table1_items.push(value.fields.Style);
              table1_items.push(value.fields.Picture);
              table1_items.push(value.fields.Specialty);
              table1_items.push(value.fields.Price_of_Ordering_All_Specialties_Recommended);
              table1_dataSet.push(table1_items);
              console.log(table1_items);
          });
          console.log(table1_dataSet);

          $('table1').DataTable({
            data: table1_dataSet,
            retrieve: true,
            columns: [
              {title:"Name",
               defaultContent:""},
              {title:"Address",
               defaultContent:""},
              {title:"Contact Number",
              defaultContent:""},
              {title:"Payment Method",
              defaultContent:""},
              {title:"Average Cost",
              defaultContent:""},
              {title:"Tags",
              defaultContent:""},
              {title:"Style",
              defaultContent:""},
              {title:"Picture",
              defaultContent:""},
              {title:"Specialty",
              defaultContent:""},
              {title:"Price of Ordering All Specialties Recommended",
              defaultContent:""},
            ]
          });
        })
  });
});
