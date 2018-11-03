 $(document).ready(function(){
   $("button#button2_1").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "hhttps://api.airtable.com/v0/appQl45FkNG6DrbHy/Restaurant?api_key=keyPGaOFOWVMaoigo&maxRecords=15&view=Grid%20view";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Name);
                       items.push(value.fields.Location);
                       items.push(value.fields.Address);
                       items.push(value.fields.Contact);
                       items.push(value.fields.Payment_Method);
                       items.push(value.fields.Average_Cost);
                       items.push(value.fields.Tags);
                       dataSet.push(items);
                       console.log(items);
                });
                console.log(dataSet);

             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Name",
                       defaultContent:""},
                     { title: "Location",
                         defaultContent:"" },
                     { title: "Address",
                       defaultContent:"" },
                     { title: "Contact",
                       defaultContent:""},
                     { title: "Payment Method",
                         defaultContent:""},
                     { title: "Average Cost",
                       defaultContent:""},
                     { title: "Tags",
                       defaultContent:""},
                 ]
             });
      });
   });
 });
