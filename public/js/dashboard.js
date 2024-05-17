let url = window.location.href;

function Authenticate() {
    var client_id = 'e1f34c84c70c9fe38456c2c8fc5385c1';
    var client_secret = 'j4W7lkyCCTEwaZXIoVCKb66R0gUyrZTKXvgJKKJz';
    var grant_type = 'client_credentials';
    $.ajax({
        type: "POST",
        url: url + 'oauth/token',
        data: {
            client_id: client_id,
            client_secret: client_secret,
            grant_type: grant_type
        },
        success: function (response, opts) {
            if (response.access_token) {
                getData(response.access_token)
            } else {
                alert("Something went wrong");
            }
        },
        failure: function (response, opts) {
            console.log("Authentication fail");

        }

    });
}

function getData(token) {
    $.ajax({
        type: "GET",
        url: url + 'api/patients/get-count',
        headers: {
            'Authorization': "Bearer " + token,
            'Accept': "application/json",
            'Content-Type': "application/json"
        },
        success: function (response, opts) {
            if (response.success) {
                let data = response.data;
                //send data to charts
                pieChart(data);
                totalvsActive(data);
                barGraph(data);
            } else {
                alert("Data fetching error");
            }
        },
        failure: function (response, opts) {
            console.log("Get data fail");

        }

    });
}
Authenticate();