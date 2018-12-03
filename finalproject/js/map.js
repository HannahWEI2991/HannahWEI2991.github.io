var mapboxTiles1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})
var map1 = L.map('map1')
      .addLayer(mapboxTiles1)
      .setView([23.039620765729655,113.40595504359848], 15);
var marker1 = L.marker([23.040620985729655,113.39929990009848])
       .bindPopup('雅乐轩酒店')
       .addTo(map1);


 var mapboxTiles2 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})
 var map2 = L.map('map2')
             .addLayer(mapboxTiles2)
             .setView([39.9766000000,116.3466100000], 15);
 var marker2 = L.marker([39.9766000000,116.3466100000])
              .bindPopup('唯实国际文化交流中心')
              .addTo(map2);

var mapboxTiles3 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})
var map3 = L.map('map3')
              .addLayer(mapboxTiles3)
              .setView([22.28255283,114.1397851], 18);
var marker3 = L.marker([22.28255283,114.1397851])
              .bindPopup('香港大学仪礼堂')
              .addTo(map3);


var mapboxTiles4 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})
var map4 = L.map('map4')
              .addLayer(mapboxTiles4)
              .setView([22.3051363515,114.1792710235], 18);
var marker4 = L.marker([22.3051363515,114.1792710235])
              .bindPopup('香港理工大学赛马会创新楼')
              .addTo(map4);
