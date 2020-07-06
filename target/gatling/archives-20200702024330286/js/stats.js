var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1069",
        "ok": "1069",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1277",
        "ok": "1277",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "208",
        "ok": "208",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1277",
        "ok": "1277",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1484",
        "ok": "1484",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 50
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.333",
        "ok": "1.333",
        "ko": "-"
    }
},
contents: {
"req_authortoken-920e5": {
        type: "REQUEST",
        name: "authortoken",
path: "authortoken",
pathFormatted: "req_authortoken-920e5",
stats: {
    "name": "authortoken",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1069",
        "ok": "1069",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1069",
        "ok": "1069",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1069",
        "ok": "1069",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1069",
        "ok": "1069",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1069",
        "ok": "1069",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1069",
        "ok": "1069",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1069",
        "ok": "1069",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 100
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.667",
        "ko": "-"
    }
}
    },"req_---37129": {
        type: "REQUEST",
        name: "列表",
path: "列表",
pathFormatted: "req_---37129",
stats: {
    "name": "列表",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1484",
        "ok": "1484",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.667",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
