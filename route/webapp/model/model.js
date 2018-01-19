sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		getTripsModel: function() {
			var oModel = new JSONModel();
			var oData = [{
				type: "by Car",
				tooltip: "Göttingen to SAP WDF 21",
				color: "rgb(139, 243, 87)",
				startIcon: "sap-icon://shipping-status",
				endIcon: "sap-icon://car-rental",
				startMarkerAlignment: "5",
				endMarkerAlignment: "1",
				position: [{
						lng: "9.928290000000061",
						lat: "51.53708"
					}, {
						lng: "9.929671883583069",
						lat: "51.53778065648096"
					}, {
						lng: "9.926174283027649",
						lat: "51.53342277028433"
					}, {
						lng: "9.83851432800293",
						lat: "51.41698044851287"
					}, {
						lng: "9.71963882446289",
						lat: "51.40627356817536"
					}, {
						lng: "9.67020034790039",
						lat: "51.396206814317566"
					}, {
						lng: "9.647197723388672",
						lat: "51.37156605122916"
					}, {
						lng: "9.564285278320312",
						lat: "51.31001339554934"
					}, {
						lng: "9.517593383789062",
						lat: "51.25589899305907"
					}, {
						lng: "9.470901489257812",
						lat: "51.18709038493268"
					}, {
						lng: "9.490127563476562",
						lat: "51.03621279582444"
					}, {
						lng: "9.481887817382812",
						lat: "50.96015671954611"
					}, {
						lng: "9.583511352539062",
						lat: "50.90043462359958"
					}, {
						lng: "9.528579711914062",
						lat: "50.80159527562758"
					}, {
						lng: "9.075393676757812",
						lat: "50.709504048865405"
					}, {
						lng: "8.988876342773438",
						lat: "50.63988122017964"
					}, {
						lng: "8.825454711914062",
						lat: "50.605902641613284"
					}, {
						lng: "8.701858520507812",
						lat: "50.44526214970795"
					}, {
						lng: "8.655853271484375",
						lat: "50.199759188312065"
					}, {
						lng: "8.592338562011719",
						lat: "50.13290377086724"
					}, {
						lng: "8.618431091308594",
						lat: "50.07873519339815"
					}, {
						lng: "8.595085144042969",
						lat: "50.01082798858057"
					}, {
						lng: "8.612251281738281",
						lat: "49.922051297763325"
					}, {
						lng: "8.598518371582031",
						lat: "49.856578695670265"
					}, {
						lng: "8.636283874511719",
						lat: "49.83001044468065"
					}, {
						lng: "8.607444763183594",
						lat: "49.769735012247885"
					}, {
						lng: "8.634910583496094",
						lat: "49.415887218419684"
					}, {
						lng: "8.627121448516846",
						lat: "49.30282424926662"
					}, {
						lng: "8.63501787185669",
						lat: "49.297870934345354"
					}, {
						lng: "8.636890053749084",
						lat: "49.2953241210286"
					}
				]
			}, {
				type: "by Taxi",
				tooltip: "Paris to Chartres",
				color: "rgb(0,76,153)",
				startIcon: "sap-icon://taxi",
				endIcon: "sap-icon://bus-public-transport",
				startMarkerImage: "",
				endMarkerImage: "",
				position: [{
					"lng": 2.340087890625,
					"lat": 48.83941303819501
				}, {
					"lng": 2.2357177734374996,
					"lat": 48.69458640884518
				}, {
					"lng": 1.9720458984374998,
					"lat": 48.56388521347092
				}, {
					"lng": 1.4948272705078125,
					"lat": 48.445827971920465
				}, {
					"lng": 1.4936256408691406,
					"lat": 48.446852771568224
				}]
			}];
			oModel.setData({
				routes: oData
			});
			return oModel;
		}

	};

});