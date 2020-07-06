var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "334",
        "ok": "334",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "201",
        "ok": "201",
        "ko": "-"
    },
    "percentiles1": {
        "total": "334",
        "ok": "334",
        "ko": "-"
    },
    "percentiles2": {
        "total": "435",
        "ok": "435",
        "ko": "-"
    },
    "percentiles3": {
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "percentiles4": {
        "total": "531",
        "ok": "531",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
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
        "total": "2",
        "ok": "2",
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "percentiles2": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "percentiles3": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "percentiles4": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
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
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_getcourses-ce002": {
        type: "REQUEST",
        name: "getCourses",
path: "getCourses",
pathFormatted: "req_getcourses-ce002",
stats: {
    "name": "getCourses",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "percentiles2": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "percentiles3": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "percentiles4": {
        "total": "535",
        "ok": "535",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
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
        "total": "1",
        "ok": "1",
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
