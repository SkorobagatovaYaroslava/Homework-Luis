window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: ""
        },
        axisY: {
            title: "",
            suffix: "%",
            includeZero: false
        },
        axisX: {
            title: ""
        },
        data: [{
            type: "splineArea",
            color: "rgba(160,160,160,0.8)",
            yValueFormatString: "#,##0.0#\"%\"",
            dataPoints: [
                { label: "Xd", y: 84 },
                { label: "Ae", y: 71 },
                { label: "Ps", y: 97 },
                { label: "Ai", y: 81 },
            ]
        }]
    });
    chart.render();
}