var size = 0;
var placement = 'point';

var style_Discharge_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("mean_res_1");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 500.000000 && value <= 1000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.8 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1000.000000 && value <= 1500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 7.6 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1500.000000 && value <= 2000.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2000.000000 && value <= 2500.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 13.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2500.000000 && value <= 2947.260473) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 16.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(190,178,151,0.8)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
