$(document).ready(function(){
  var table1_items = [];
  var i = 0;
  var airtable_data = "https://api.airtable.com/v0/appxnGEdVS7qDdA5e/requirement?api_key=keyPGaOFOWVMaoigo&maxRecords=17&view=Grid%20view";
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
         //object可以如下初始化表格
     $("#table1").DataTable({
         data: table1_dataSet,
         retrive:true,
         destroy:true,
         //使用对象数组，一定要配置columns，告诉 DataTables 每列对应的属性
         //data 这里是固定不变的，name，position，salary，office 为你数据里对应的属性
         columns: [
             { data: "专业",
               defaultContent:""},
             { data: "语言成绩要求",
             defaultContent:""},
             { data: "是否有笔试面试",
              defaultContent:""},
             { data: "是否要求提交作品集",
              defaultContent:""},
             { data: "推荐信要求",
              defaultContent:""},
             { data: "个人陈述要求",
              defaultContent:""},
             { data: "是否需要寄送纸质材料",
              defaultContent:""},
         ],
     });
});
});
