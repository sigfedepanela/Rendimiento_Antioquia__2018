var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Antioquia_1 = new ol.format.GeoJSON();
var features_Antioquia_1 = format_Antioquia_1.readFeatures(json_Antioquia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antioquia_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Antioquia_1.addFeatures(features_Antioquia_1);var lyr_Antioquia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Antioquia_1, 
                style: style_Antioquia_1,
                title: '<img src="styles/legend/Antioquia_1.png" /> Antioquia'
            });var format_RendimientoTonHa_2 = new ol.format.GeoJSON();
var features_RendimientoTonHa_2 = format_RendimientoTonHa_2.readFeatures(json_RendimientoTonHa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientoTonHa_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RendimientoTonHa_2.addFeatures(features_RendimientoTonHa_2);var lyr_RendimientoTonHa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientoTonHa_2, 
                style: style_RendimientoTonHa_2,
    title: 'Rendimiento (Ton/Ha)<br />\
    <img src="styles/legend/RendimientoTonHa_2_0.png" />  2,2 - 3,6 <br />\
    <img src="styles/legend/RendimientoTonHa_2_1.png" />  3,6 - 4,7 <br />\
    <img src="styles/legend/RendimientoTonHa_2_2.png" />  4,7 - 6,0 <br />\
    <img src="styles/legend/RendimientoTonHa_2_3.png" />  6,0 - 8,0 <br />\
    <img src="styles/legend/RendimientoTonHa_2_4.png" />  8,0 - 10,0 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Antioquia_1.setVisible(true);lyr_RendimientoTonHa_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Antioquia_1,lyr_RendimientoTonHa_2];
lyr_Antioquia_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', 'AÑO': 'AÑO', });
lyr_RendimientoTonHa_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/Ha)': 'REND.(Ton/Ha)', });
lyr_Antioquia_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', 'AÑO': 'Range', });
lyr_RendimientoTonHa_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/Ha)': 'TextEdit', });
lyr_Antioquia_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', 'AÑO': 'inline label', });
lyr_RendimientoTonHa_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/Ha)': 'inline label', });
lyr_RendimientoTonHa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});