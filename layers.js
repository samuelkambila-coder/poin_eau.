ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32733").setExtent([552717.209826, 9515167.227535, 554540.285796, 9516175.566014]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mnages_1 = new ol.format.GeoJSON();
var features_Mnages_1 = format_Mnages_1.readFeatures(json_Mnages_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_Mnages_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mnages_1.addFeatures(features_Mnages_1);
var lyr_Mnages_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mnages_1, 
                style: style_Mnages_1,
                popuplayertitle: 'Ménages',
                interactive: true,
                title: '<img src="styles/legend/Mnages_1.png" /> Ménages'
            });
var format_Ville_province_kinshasa_2 = new ol.format.GeoJSON();
var features_Ville_province_kinshasa_2 = format_Ville_province_kinshasa_2.readFeatures(json_Ville_province_kinshasa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_Ville_province_kinshasa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ville_province_kinshasa_2.addFeatures(features_Ville_province_kinshasa_2);
var lyr_Ville_province_kinshasa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ville_province_kinshasa_2, 
                style: style_Ville_province_kinshasa_2,
                popuplayertitle: 'Ville_province_kinshasa',
                interactive: true,
                title: '<img src="styles/legend/Ville_province_kinshasa_2.png" /> Ville_province_kinshasa'
            });
var format_MPASA_3 = new ol.format.GeoJSON();
var features_MPASA_3 = format_MPASA_3.readFeatures(json_MPASA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_MPASA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MPASA_3.addFeatures(features_MPASA_3);
var lyr_MPASA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MPASA_3, 
                style: style_MPASA_3,
                popuplayertitle: 'MPASA',
                interactive: true,
                title: '<img src="styles/legend/MPASA_3.png" /> MPASA'
            });
var format_point_d_eau_4 = new ol.format.GeoJSON();
var features_point_d_eau_4 = format_point_d_eau_4.readFeatures(json_point_d_eau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32733'});
var jsonSource_point_d_eau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_d_eau_4.addFeatures(features_point_d_eau_4);
cluster_point_d_eau_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_point_d_eau_4
});
var lyr_point_d_eau_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_point_d_eau_4, 
                style: style_point_d_eau_4,
                popuplayertitle: 'point_d_eau',
                interactive: true,
    title: 'point_d_eau<br />\
    <img src="styles/legend/point_d_eau_4_0.png" /> ASUREP<br />\
    <img src="styles/legend/point_d_eau_4_1.png" /> PDP<br />\
    <img src="styles/legend/point_d_eau_4_2.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Mnages_1.setVisible(true);lyr_Ville_province_kinshasa_2.setVisible(true);lyr_MPASA_3.setVisible(true);lyr_point_d_eau_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Mnages_1,lyr_Ville_province_kinshasa_2,lyr_MPASA_3,lyr_point_d_eau_4];
lyr_Mnages_1.set('fieldAliases', {'Id': 'Id', });
lyr_Ville_province_kinshasa_2.set('fieldAliases', {'id': 'id', 'Id': 'Id', 'Namecommun': 'Namecommun', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'Nbre_mal': 'Nbre_mal', 'DENSITE': 'DENSITE', 'score_min': 'score_min', 'score_max': 'score_max', 'vulnerabil': 'vulnerabil', });
lyr_MPASA_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_point_d_eau_4.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'elevation': 'elevation', 'cmt': 'cmt', 'profondeur': 'profondeur', 'nom': 'nom', 'id': 'id', });
lyr_Mnages_1.set('fieldImages', {'Id': 'Range', });
lyr_Ville_province_kinshasa_2.set('fieldImages', {'id': 'TextEdit', 'Id': 'Range', 'Namecommun': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'Nbre_mal': 'TextEdit', 'DENSITE': 'TextEdit', 'score_min': 'TextEdit', 'score_max': 'TextEdit', 'vulnerabil': 'TextEdit', });
lyr_MPASA_3.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'TextEdit', 'Base': 'TextEdit', 'Clamped': 'TextEdit', 'Extruded': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_point_d_eau_4.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'elevation': 'TextEdit', 'cmt': 'TextEdit', 'profondeur': 'TextEdit', 'nom': 'TextEdit', 'id': 'TextEdit', });
lyr_Mnages_1.set('fieldLabels', {'Id': 'header label - always visible', });
lyr_Ville_province_kinshasa_2.set('fieldLabels', {'id': 'header label - always visible', 'Id': 'header label - always visible', 'Namecommun': 'header label - always visible', 'SUPERFICIE': 'header label - always visible', 'POPULATION': 'header label - always visible', 'Nbre_mal': 'header label - always visible', 'DENSITE': 'header label - always visible', 'score_min': 'header label - always visible', 'score_max': 'header label - always visible', 'vulnerabil': 'header label - always visible', });
lyr_MPASA_3.set('fieldLabels', {'OID_': 'header label - always visible', 'Name': 'header label - always visible', 'FolderPath': 'header label - always visible', 'SymbolID': 'header label - always visible', 'AltMode': 'header label - always visible', 'Base': 'header label - always visible', 'Clamped': 'header label - always visible', 'Extruded': 'header label - always visible', 'Snippet': 'header label - always visible', 'PopupInfo': 'header label - always visible', 'Shape_Leng': 'header label - always visible', 'Shape_Area': 'header label - always visible', });
lyr_point_d_eau_4.set('fieldLabels', {'latitude': 'header label - always visible', 'longitude': 'header label - always visible', 'elevation': 'header label - always visible', 'cmt': 'header label - always visible', 'profondeur': 'header label - always visible', 'nom': 'header label - always visible', 'id': 'header label - always visible', });
lyr_point_d_eau_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});