﻿//call webservice method
(function ($) {
    $.extend(App, {

        GetData: function (dir) {
            if (typeof (dir) === 'undefined') {
                dir = App.AppPath;
            }

            var dataOut = {
                "dir": dir
            };

            dataOut = $.toJSON({ data: dataOut });

            //Call web service - leverage $.Deferred
            $.ajax({
                url: App.AppPath + '/Directory.asmx/GetDir',
                contentType: "application/json; charset=utf-8",
                type: "POST",
                data: dataOut,
                dataType: "json"
            }).success(function (data) {
                var thisData = $.parseJSON(data.d);
                $.log("thisData");
                $.log(thisData);
            });
        }
    });
})(jQuery);