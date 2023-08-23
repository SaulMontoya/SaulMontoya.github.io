var wms_layers = [];


        var lyr_Terrain_0 = new ol.layer.Tile({
            'title': 'Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_drain_2 = new ol.format.GeoJSON();
var features_drain_2 = format_drain_2.readFeatures(json_drain_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drain_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drain_2.addFeatures(features_drain_2);
var lyr_drain_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_drain_2, 
                style: style_drain_2,
                interactive: true,
                title: '<img src="styles/legend/drain_2.png" /> drain'
            });
var format_canal_3 = new ol.format.GeoJSON();
var features_canal_3 = format_canal_3.readFeatures(json_canal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_canal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_canal_3.addFeatures(features_canal_3);
var lyr_canal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_canal_3, 
                style: style_canal_3,
                interactive: true,
                title: '<img src="styles/legend/canal_3.png" /> canal'
            });
var format_rivers_4 = new ol.format.GeoJSON();
var features_rivers_4 = format_rivers_4.readFeatures(json_rivers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rivers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rivers_4.addFeatures(features_rivers_4);
var lyr_rivers_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rivers_4, 
                style: style_rivers_4,
                interactive: true,
                title: '<img src="styles/legend/rivers_4.png" /> rivers'
            });
var format_lakes_5 = new ol.format.GeoJSON();
var features_lakes_5 = format_lakes_5.readFeatures(json_lakes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lakes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lakes_5.addFeatures(features_lakes_5);
var lyr_lakes_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lakes_5, 
                style: style_lakes_5,
                interactive: true,
                title: '<img src="styles/legend/lakes_5.png" /> lakes'
            });
var format_Turbidity_6 = new ol.format.GeoJSON();
var features_Turbidity_6 = format_Turbidity_6.readFeatures(json_Turbidity_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turbidity_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turbidity_6.addFeatures(features_Turbidity_6);
var lyr_Turbidity_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Turbidity_6, 
                style: style_Turbidity_6,
                interactive: true,
    title: 'Turbidity<br />\
    <img src="styles/legend/Turbidity_6_0.png" /> 1.1 - 6.2<br />\
    <img src="styles/legend/Turbidity_6_1.png" /> 6.2 - 9.9<br />\
    <img src="styles/legend/Turbidity_6_2.png" /> 9.9 - 14.9<br />\
    <img src="styles/legend/Turbidity_6_3.png" /> 14.9 - 27.3<br />\
    <img src="styles/legend/Turbidity_6_4.png" /> 27.3 - 850<br />'
        });
var format_WaterTemperature_7 = new ol.format.GeoJSON();
var features_WaterTemperature_7 = format_WaterTemperature_7.readFeatures(json_WaterTemperature_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterTemperature_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterTemperature_7.addFeatures(features_WaterTemperature_7);
var lyr_WaterTemperature_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterTemperature_7, 
                style: style_WaterTemperature_7,
                interactive: true,
    title: 'WaterTemperature<br />\
    <img src="styles/legend/WaterTemperature_7_0.png" /> -0.6 - 4.5<br />\
    <img src="styles/legend/WaterTemperature_7_1.png" /> 4.5 - 9.7<br />\
    <img src="styles/legend/WaterTemperature_7_2.png" /> 9.7 - 16.7<br />\
    <img src="styles/legend/WaterTemperature_7_3.png" /> 16.7 - 22.4<br />\
    <img src="styles/legend/WaterTemperature_7_4.png" /> 22.4 - 30.3<br />'
        });
var format_Sediment_8 = new ol.format.GeoJSON();
var features_Sediment_8 = format_Sediment_8.readFeatures(json_Sediment_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sediment_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sediment_8.addFeatures(features_Sediment_8);
var lyr_Sediment_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sediment_8, 
                style: style_Sediment_8,
                interactive: true,
    title: 'Sediment<br />\
    <img src="styles/legend/Sediment_8_0.png" /> 2 - 12<br />\
    <img src="styles/legend/Sediment_8_1.png" /> 12 - 24<br />\
    <img src="styles/legend/Sediment_8_2.png" /> 24 - 43<br />\
    <img src="styles/legend/Sediment_8_3.png" /> 43 - 99<br />\
    <img src="styles/legend/Sediment_8_4.png" /> 99 - 2955<br />'
        });
var format_SpecificConductance_9 = new ol.format.GeoJSON();
var features_SpecificConductance_9 = format_SpecificConductance_9.readFeatures(json_SpecificConductance_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpecificConductance_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpecificConductance_9.addFeatures(features_SpecificConductance_9);
var lyr_SpecificConductance_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpecificConductance_9, 
                style: style_SpecificConductance_9,
                interactive: true,
    title: 'SpecificConductance<br />\
    <img src="styles/legend/SpecificConductance_9_0.png" /> 250 - 591<br />\
    <img src="styles/legend/SpecificConductance_9_1.png" /> 591 - 650<br />\
    <img src="styles/legend/SpecificConductance_9_2.png" /> 650 - 733<br />\
    <img src="styles/legend/SpecificConductance_9_3.png" /> 733 - 869<br />\
    <img src="styles/legend/SpecificConductance_9_4.png" /> 869 - 3112<br />'
        });
var format_Discharge_10 = new ol.format.GeoJSON();
var features_Discharge_10 = format_Discharge_10.readFeatures(json_Discharge_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Discharge_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Discharge_10.addFeatures(features_Discharge_10);
var lyr_Discharge_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Discharge_10, 
                style: style_Discharge_10,
                interactive: true,
    title: 'Discharge<br />\
    <img src="styles/legend/Discharge_10_0.png" /> 0 - 500<br />\
    <img src="styles/legend/Discharge_10_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/Discharge_10_2.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Discharge_10_3.png" /> 1500 - 2000<br />\
    <img src="styles/legend/Discharge_10_4.png" /> 2000 - 2500<br />\
    <img src="styles/legend/Discharge_10_5.png" /> 2500 - 2947<br />'
        });
var format_Orthophosphate_11 = new ol.format.GeoJSON();
var features_Orthophosphate_11 = format_Orthophosphate_11.readFeatures(json_Orthophosphate_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orthophosphate_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orthophosphate_11.addFeatures(features_Orthophosphate_11);
var lyr_Orthophosphate_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Orthophosphate_11, 
                style: style_Orthophosphate_11,
                interactive: true,
    title: 'Orthophosphate<br />\
    <img src="styles/legend/Orthophosphate_11_0.png" /> 0.004 - 0.05<br />\
    <img src="styles/legend/Orthophosphate_11_1.png" /> 0.05 - 0.207<br />\
    <img src="styles/legend/Orthophosphate_11_2.png" /> 0.207 - 0.341<br />\
    <img src="styles/legend/Orthophosphate_11_3.png" /> 0.341 - 0.533<br />\
    <img src="styles/legend/Orthophosphate_11_4.png" /> 0.533 - 2.17<br />'
        });
var format_Nitrate_12 = new ol.format.GeoJSON();
var features_Nitrate_12 = format_Nitrate_12.readFeatures(json_Nitrate_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nitrate_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nitrate_12.addFeatures(features_Nitrate_12);
var lyr_Nitrate_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nitrate_12, 
                style: style_Nitrate_12,
                interactive: true,
    title: 'Nitrate<br />\
    <img src="styles/legend/Nitrate_12_0.png" /> 0.02 - 1.21<br />\
    <img src="styles/legend/Nitrate_12_1.png" /> 1.21 - 2.1<br />\
    <img src="styles/legend/Nitrate_12_2.png" /> 2.1 - 3.9<br />\
    <img src="styles/legend/Nitrate_12_3.png" /> 3.9 - 6.83<br />\
    <img src="styles/legend/Nitrate_12_4.png" /> 6.83 - 19.1<br />'
        });
var format_DissolvedOxygen_13 = new ol.format.GeoJSON();
var features_DissolvedOxygen_13 = format_DissolvedOxygen_13.readFeatures(json_DissolvedOxygen_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DissolvedOxygen_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DissolvedOxygen_13.addFeatures(features_DissolvedOxygen_13);
var lyr_DissolvedOxygen_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DissolvedOxygen_13, 
                style: style_DissolvedOxygen_13,
                interactive: true,
    title: 'DissolvedOxygen<br />\
    <img src="styles/legend/DissolvedOxygen_13_0.png" /> 2.9 - 7.3<br />\
    <img src="styles/legend/DissolvedOxygen_13_1.png" /> 7.3 - 8.7<br />\
    <img src="styles/legend/DissolvedOxygen_13_2.png" /> 8.7 - 10.2<br />\
    <img src="styles/legend/DissolvedOxygen_13_3.png" /> 10.2 - 11.8<br />\
    <img src="styles/legend/DissolvedOxygen_13_4.png" /> 11.8 - 24.5<br />'
        });
var group_WaterChemistry = new ol.layer.Group({
                                layers: [lyr_Turbidity_6,lyr_WaterTemperature_7,lyr_Sediment_8,lyr_SpecificConductance_9,lyr_Discharge_10,lyr_Orthophosphate_11,lyr_Nitrate_12,lyr_DissolvedOxygen_13,],
                                title: "WaterChemistry"});
var group_Hydrology = new ol.layer.Group({
                                layers: [lyr_drain_2,lyr_canal_3,lyr_rivers_4,lyr_lakes_5,],
                                title: "Hydrology"});
var group_BackgroundMaps = new ol.layer.Group({
                                layers: [lyr_Terrain_0,lyr_GoogleSatellite_1,],
                                title: "BackgroundMaps"});

lyr_Terrain_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_drain_2.setVisible(true);lyr_canal_3.setVisible(true);lyr_rivers_4.setVisible(true);lyr_lakes_5.setVisible(true);lyr_Turbidity_6.setVisible(true);lyr_WaterTemperature_7.setVisible(true);lyr_Sediment_8.setVisible(true);lyr_SpecificConductance_9.setVisible(true);lyr_Discharge_10.setVisible(true);lyr_Orthophosphate_11.setVisible(true);lyr_Nitrate_12.setVisible(true);lyr_DissolvedOxygen_13.setVisible(true);
var layersList = [group_BackgroundMaps,group_Hydrology,group_WaterChemistry];
lyr_drain_2.set('fieldAliases', {'full_id': 'full_id', });
lyr_canal_3.set('fieldAliases', {'full_id': 'full_id', });
lyr_rivers_4.set('fieldAliases', {'full_id': 'full_id', });
lyr_lakes_5.set('fieldAliases', {});
lyr_Turbidity_6.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', 'mean_float': 'mean_float', });
lyr_WaterTemperature_7.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', 'mean_float': 'mean_float', });
lyr_Sediment_8.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', 'mean_float': 'mean_float', });
lyr_SpecificConductance_9.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', 'mean_float': 'mean_float', });
lyr_Discharge_10.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'derived_fr': 'derived_fr', 'sensor_des': 'sensor_des', 'mean_resul': 'mean_resul', 'median_res': 'median_res', 'minimum_re': 'minimum_re', 'maximum_re': 'maximum_re', 'sd_result': 'sd_result', 'pcodes': 'pcodes', 'n_results': 'n_results', 'mean_time_': 'mean_time_', 'freq': 'freq', 'site_metad': 'site_metad', 'site_met_1': 'site_met_1', 'mean_res_1': 'mean_res_1', });
lyr_Orthophosphate_11.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', 'mean_float': 'mean_float', });
lyr_Nitrate_12.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'derived_fr': 'derived_fr', 'sensor_des': 'sensor_des', 'mean_resul': 'mean_resul', 'median_res': 'median_res', 'minimum_re': 'minimum_re', 'maximum_re': 'maximum_re', 'sd_result': 'sd_result', 'pcodes': 'pcodes', 'n_results': 'n_results', 'mean_time_': 'mean_time_', 'freq': 'freq', 'site_metad': 'site_metad', 'site_met_1': 'site_met_1', 'mean_res_1': 'mean_res_1', });
lyr_DissolvedOxygen_13.set('fieldAliases', {'site_no': 'site_no', 'date': 'date', 'parm_abbre': 'parm_abbre', 'units': 'units', 'mean_resul': 'mean_resul', 'mean_float': 'mean_float', });
lyr_drain_2.set('fieldImages', {'full_id': 'TextEdit', });
lyr_canal_3.set('fieldImages', {'full_id': 'TextEdit', });
lyr_rivers_4.set('fieldImages', {'full_id': 'TextEdit', });
lyr_lakes_5.set('fieldImages', {});
lyr_Turbidity_6.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', 'mean_float': 'TextEdit', });
lyr_WaterTemperature_7.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', 'mean_float': 'TextEdit', });
lyr_Sediment_8.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', 'mean_float': 'TextEdit', });
lyr_SpecificConductance_9.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', 'mean_float': 'TextEdit', });
lyr_Discharge_10.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'derived_fr': 'TextEdit', 'sensor_des': 'TextEdit', 'mean_resul': 'TextEdit', 'median_res': 'TextEdit', 'minimum_re': 'TextEdit', 'maximum_re': 'TextEdit', 'sd_result': 'TextEdit', 'pcodes': 'TextEdit', 'n_results': 'TextEdit', 'mean_time_': 'TextEdit', 'freq': 'TextEdit', 'site_metad': 'TextEdit', 'site_met_1': 'TextEdit', 'mean_res_1': 'TextEdit', });
lyr_Orthophosphate_11.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', 'mean_float': 'TextEdit', });
lyr_Nitrate_12.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'derived_fr': 'TextEdit', 'sensor_des': 'TextEdit', 'mean_resul': 'TextEdit', 'median_res': 'TextEdit', 'minimum_re': 'TextEdit', 'maximum_re': 'TextEdit', 'sd_result': 'TextEdit', 'pcodes': 'TextEdit', 'n_results': 'TextEdit', 'mean_time_': 'TextEdit', 'freq': 'TextEdit', 'site_metad': 'TextEdit', 'site_met_1': 'TextEdit', 'mean_res_1': 'TextEdit', });
lyr_DissolvedOxygen_13.set('fieldImages', {'site_no': 'TextEdit', 'date': 'TextEdit', 'parm_abbre': 'TextEdit', 'units': 'TextEdit', 'mean_resul': 'TextEdit', 'mean_float': 'TextEdit', });
lyr_drain_2.set('fieldLabels', {});
lyr_canal_3.set('fieldLabels', {});
lyr_rivers_4.set('fieldLabels', {});
lyr_lakes_5.set('fieldLabels', {});
lyr_Turbidity_6.set('fieldLabels', {});
lyr_WaterTemperature_7.set('fieldLabels', {});
lyr_Sediment_8.set('fieldLabels', {});
lyr_SpecificConductance_9.set('fieldLabels', {});
lyr_Discharge_10.set('fieldLabels', {});
lyr_Orthophosphate_11.set('fieldLabels', {});
lyr_Nitrate_12.set('fieldLabels', {});
lyr_DissolvedOxygen_13.set('fieldLabels', {});
lyr_DissolvedOxygen_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});