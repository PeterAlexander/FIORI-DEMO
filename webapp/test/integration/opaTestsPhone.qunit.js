/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"fiori/demo/app/FIORI-DEMO/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});