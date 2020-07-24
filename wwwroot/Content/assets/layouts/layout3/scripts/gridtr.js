$(document).ready(function () {
               
    $('#Olay').DataTable({
        "oLanguage": {
            "sSearch": "Arama:",
            "sInfo": "Görünen kayıtlar: _START_ - _END_",
            "sLengthMenu": '<select>' +
                '<option value="3">3</option>' +
                '<option value="10">10</option>' +
                '<option value="20">20</option>' +
                '<ption value="30">30</option>' +
                '<option value="40">40</option>' +
                '<option value="50">50</option>' +
                '<option value="-1">Tümü</option>' +
                '</select> kayıt'//records
        },
        "iDisplayLength": 3
    });
    $('#Tatil').DataTable({
        "oLanguage": {
            "sSearch": "Arama:",
            "sInfo": "Görünen kayıtlar: _START_ - _END_",
            "sLengthMenu": '<select>' +
                '<option value="3">3</option>' +
                '<option value="10">10</option>' +
                '<option value="20">20</option>' +
                '<ption value="30">30</option>' +
                '<option value="40">40</option>' +
                '<option value="50">50</option>' +
                '<option value="-1">Tümü</option>' +
                '</select> kayıt'//records
        },
        "iDisplayLength": -1
    });
    $('#Oneri').DataTable({
        "oLanguage": {
            "sSearch": "Arama:",
            "sInfo": "Görünen kayıtlar: _START_ - _END_",
            "sLengthMenu": '<select>' +
                '<option value="3">3</option>' +
                '<option value="10">10</option>' +
                '<option value="20">20</option>' +
                '<option value="30">30</option>' +
                '<option value="40">40</option>' +
                '<option value="50">50</option>' +
                '<option value="-1">Tümü</option>' +
                '</select> kayıt'//records
        },
        "iDisplayLength": 3
    });
    myFunction();
});