sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"route/model/model"
], function(Controller, Model) {
	"use strict";
	return Controller.extend("route.controller.Main", {

		onInit: function() {
			//getting the data from Model.js
			var routesModel = Model.getTripsModel();
			//setting routesModel to the view
			this.getView().setModel(routesModel, "routesModel");
		}

	});
});