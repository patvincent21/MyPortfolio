sap.ui.define([
<<<<<<< HEAD
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
=======
<<<<<<< HEAD
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({viewName: "Quickstart.App"}).then(function (oView) {
		oView.placeAt("content");
	});
=======
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast) {
>>>>>>> branch 'master' of https://github.com/patvincent21/MyPortfolio.git
	"use strict";

<<<<<<< HEAD
	XMLView.create({viewName: "Quickstart.App"}).then(function (oView) {
		oView.placeAt("content");
	});
});
=======
	new Button({
		text: "Ready...",
		press: function () {
			MessageToast.show("Hello World!");
		}
	}).placeAt("content");

>>>>>>> branch 'master' of https://github.com/patvincent21/MyPortfolio.git
});
>>>>>>> branch 'master' of https://github.com/patvincent21/MyPortfolio.git
