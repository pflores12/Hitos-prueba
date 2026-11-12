var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_hitos_22185_1 = new ol.format.GeoJSON();
var features_hitos_22185_1 = format_hitos_22185_1.readFeatures(json_hitos_22185_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hitos_22185_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hitos_22185_1.addFeatures(features_hitos_22185_1);
cluster_hitos_22185_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_hitos_22185_1
});
var lyr_hitos_22185_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_hitos_22185_1, 
                style: style_hitos_22185_1,
                popuplayertitle: 'hitos_22185',
                interactive: true,
    title: 'hitos_22185<br />\
    <img src="styles/legend/hitos_22185_1_0.png" /> 1<br />\
    <img src="styles/legend/hitos_22185_1_1.png" /> 2<br />' });

lyr_Argenmap_0.setVisible(true);lyr_hitos_22185_1.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_hitos_22185_1];
lyr_hitos_22185_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'test': 'Atributo de prueba', });
lyr_hitos_22185_1.set('fieldImages', {'NOMBRE': 'TextEdit', 'test': 'TextEdit', });
lyr_hitos_22185_1.set('fieldLabels', {'NOMBRE': 'header label - always visible', 'test': 'inline label - visible with data', });
lyr_hitos_22185_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});