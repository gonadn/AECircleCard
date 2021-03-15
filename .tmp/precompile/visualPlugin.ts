import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var circleCardBFD1CA9E41454A64B07144179629F9D5_DEBUG: IVisualPlugin = {
    name: 'circleCardBFD1CA9E41454A64B07144179629F9D5_DEBUG',
    displayName: 'CircleCard',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["circleCardBFD1CA9E41454A64B07144179629F9D5_DEBUG"] = circleCardBFD1CA9E41454A64B07144179629F9D5_DEBUG;
}

export default circleCardBFD1CA9E41454A64B07144179629F9D5_DEBUG;