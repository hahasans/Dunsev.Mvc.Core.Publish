var monthtbl = { 'January': 1, 'February': 2, 'March':3,'April':4,'May':5,'June':6,'July':7,'August':8,'September':9,'October':10,'November':11,'December':12};
//var monthNumber = monthtbl[monthName];
$(document).ready(function () {
    $('#Olay').DataTable({
        "oLanguage": {
            "sSearch": "Search:",
            "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
            "sLengthMenu": '<select>' +
                '<option value="3">3</option>' +
                '<option value="10">10</option>' +
                '<option value="20">20</option>' +
                '<option value="30">30</option>' +
                '<option value="40">40</option>' +
                '<option value="50">50</option>' +
                '<option value="-1">All</option>' +
                '</select> record'//records
        },
        "iDisplayLength": 3,
        "order": [[0, "desc"]]
    });
    $('#Tatil').DataTable({
        "oLanguage": {
            "sSearch": "Search:",
            "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
            "sLengthMenu": '<select>' +
                '<option value="3">3</option>' +
                '<option value="10">10</option>' +
                '<option value="20">20</option>' +
                '<option value="30">30</option>' +
                '<option value="40">40</option>' +
                '<option value="50">50</option>' +
                '<option value="-1">All</option>' +
                '</select> record'//records
        },
        "iDisplayLength": -1
    });
    $('#Oneri').DataTable({
        "aoColumns": [
           { "sType": "date-uk" },
           null
        ], "oLanguage": {
            "sSearch": "Search:",
            "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
            "sLengthMenu": '<select>' +
                '<option value="3">3</option>' +
                '<option value="10">10</option>' +
                '<option value="20">20</option>' +
                '<option value="30">30</option>' +
                '<option value="40">40</option>' +
                '<option value="50">50</option>' +
                '<option value="-1">All</option>' +
                '</select> record'//records
        },
       
        "iDisplayLength": 3
    });
    function parseDate(a) {
        var ukDatea = a.split(' ');
        return (ukDatea[6] + monthtbl[ukDatea[4]] + ukDatea[5]) * 1;
    }
    jQuery.extend(jQuery.fn.dataTableExt.oSort, {
        "date-uk-pre": function (a) {
            return parseDate(a);
        },

        "date-uk-asc": function (a, b) {
            a = parseDate(a);
            b = parseDate(b);
            return ((a < b) ? -1 : ((a > b) ? 1 : 0));
        },

        "date-uk-desc": function (a, b) {
            a = parseDate(a);
            b = parseDate(b);
            return ((a < b) ? 1 : ((a > b) ? -1 : 0));
        }
    });
});
myFunction();