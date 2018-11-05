function CreateGraphic(data){
     var chart = c3.generate({
         bindto:"#chart",
         data:{
         columns: [
                  ['Highly Recommend',163,45,93,17,176,263,94,55,136,112,84,102,48,45,49],
                  ['Just So So',16,17,41,1,34,86,16,15,39,58,25,63,12,16,10],
                  ['Do Not Like it',12,3,28,3,21,43,8,5,15,33,11,22,19,3,5]
                  ],
         axis:{
                  x:{
                      type:'category',
                      categories:['潮樂園','英記麵家','增煇大排檔&增煇藝廚','聚興家','坤記煲仔小菜','麥文記麵家','Samsen 泰麵','嚐囍煲仔小菜','德記潮州菜館','靠得住','信得過','茑','益新美食館','粵來順','容記小菜王'],
                    },
                  },
         grid:{
           y:{
             lines:[{value:0}],
           }
         },
         type: 'bar',
         groups: [
                 ['Highly Recommend', 'Just So So', 'Do Not Like it']
                  ]
                           },

                       });
     var lables = document.getElementById('label').innerHTML="0-潮樂園 1-英記麵家 2-增煇大排檔&增煇藝廚 3-聚興家 4-坤記煲仔小菜 5-麥文記麵家 6-Samsen 泰麵 7-嚐囍煲仔小菜 8-德記潮州菜館 9-靠得住 10-信得過 11-茑 12-益新美食館 13-粵來順 14-容記小菜王";
                     }
