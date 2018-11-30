$(document).ready(function(){


    var table1_items = [];
    var i = 0;
    var airtable_data = "https://api.airtable.com/v0/appxnGEdVS7qDdA5e/requirement?api_key=keyPGaOFOWVMaoigo&maxRecords=17&view=Grid%20view"
    var table1_dataSet = [];

    $.getJSON(airtable_data,function(result){
      $.each(result.records,function(key,value){
         table1_items = [];
       table1_items.push(value.fields.专业);
       table1_items.push(value.fields.语言成绩要求);
       table1_items.push(value.fields.是否有笔试面试);
       table1_items.push(value.fields.是否要求提交作品集);
       table1_items.push(value.fields.推荐信要求);
       table1_items.push(value.fields.个人陈述要求);
       table1_items.push(value.fields.是否需要寄送纸质材料);
         table1_dataSet.push(table1_items);
         console.log(table1_items);
      });
         console.log(table1_dataSet);
         $("#table1").DataTable({
           data:table1_dataSet,
           retrive:true,
           destroy:true,
           columns: [
                   { title: "专业",
                     defaultContent:""},
                   { title: "语言成绩要求",
                       defaultContent:"" },
                   { title: "是否有面试笔试",
                     defaultContent:"" },
                   { title: "是否要求提交作品集",
                     defaultContent:""},
                   { title: "推荐信要求",
                       defaultContent:""},
                   { title: "个人陈述要求",
                       defaultContent:""},
                   { title: "是否要求寄送纸质材料",
                       defaultContent:""},
                  ]
         });
    });
  });
