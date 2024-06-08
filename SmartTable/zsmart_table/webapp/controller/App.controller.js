sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.namnd.zsmarttable.controller.App", {
        onInit: function() {
          console.log("app");
        }
      });
    }
  );
  