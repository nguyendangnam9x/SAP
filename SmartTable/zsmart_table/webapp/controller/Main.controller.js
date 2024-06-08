sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.namnd.zsmarttable.controller.Main", {
        onInit: function () {
            console.log("main");
        },
        onDelete: function(oEvent) {
            var oModel = this.getView().byId("SmartTable").getModel();
            oModel.setUseBatch(false);
            var items = this.getView().byId("product_table").getSelectedItems();
            items.forEach(element => {
                var id = element.getBindingContext().getProperty("ID");
                oModel.remove("/Products(" + id + ")");
            });
        }
    });
});
