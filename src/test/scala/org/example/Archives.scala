package org.example

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class Archives extends Simulation {

	val httpProtocol = http
		.baseUrl("https://task.daily.yungu-inc.org")
		.inferHtmlResources()
		.acceptHeader("application/json")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("zh-CN,zh;q=0.9")
		.contentTypeHeader("application/json; charset=utf-8")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36")

	val headers_0 = Map(
		"Origin" -> "https://task.daily.yungu-inc.org",
		"Pragma" -> "no-cache",
		"Sec-Fetch-Mode" -> "cors",
		"Sec-Fetch-Site" -> "same-origin",
		"token" -> "${token}"
	//	"Cookie" -> "${Example.Cookie}"
	//	"Cookie" ->"UM_distinctid=172faef9eb79-094d65d27d8bde-1d3d6b55-13c680-172faef9eb88cf; SESSION=YWZjY2VmMWQtNzI4MS00ODgwLWEzYjUtNDA0N2JhZjMxZmVl; CNZZDATA1277820702=1959896112-1593345308-%7C1594008830"

	)


	object Archives {
		val archiveslist =
		exec(http("列表")
			.post("/api/achievement/result_wall")
			.headers(headers_0)
			.body(RawFileBody("org/example/archives/0000_request.json"))
			.check(status.is(200))
			//.check(bodyString.saveAs("getbody"))
		)
/*			.exec{
				session => println(session("getbody").as[String])
					session
			}*/
		val addArchives =
			exec(http("创建记录")
			.post("/api/capture/submitCapture")
			.headers(headers_0)
			.body(RawFileBody("org/example/addarchives/0000_request.json"))
			//.body(StringBody("{\"pageNum\":1,\"pageSize\":10,\"courseIds\":[null],\"typeSource\":0,\"studentId\":null,\"schoolYearId\":0,\"markHighlightMoment\":false,\"studentGroupIds\":[],\"type\":1,\"labelIds\":[],\"typeOfWorkIds\":[],\"keyword\":\"\",\"evaluationCategoryIds\":[],\"evaluationItemIds\":[],\"semesterType\":0}"))
			.check(status.is(200))
				.check(jsonPath("$.message").is("操作成功"))
			//	.check(bodyString.saveAs("getbody"))
			)
/*  		.exec{
				session =>println(session("getbody").as[String])
					session
			}*/


	}

	val scn = scenario("成长记录")
		//	.exec(new Login().Login.login, Archives.archiveslist)
  		.exec(new Login().Login.login,Archives.addArchives)
  	//	.exec(Archives.addArchives)

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}