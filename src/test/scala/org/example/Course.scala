package org.example

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Course extends Simulation {

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
	)

	object Course {
		val currentCourse =
			exec(http("getCourses")
  				.get("/api/my/currentCourses")
  				.headers(headers_0)
				.check(bodyString.saveAs("resp_body"))
			)
			.exec { session =>
				println("resp_body :" + session("resp_body").as[String])
				session
			}

		val addC =
			exec(http("getCourses")
				.get("/api/my/currentCourses")
				.headers(headers_0)
				.check(bodyString.saveAs("resp_body"))
			)
				.exec { session =>
					println("resp_body :" + session("resp_body").as[String])
					session
				}
	}


	val scn = scenario("Course")
		.exec(new Login().Login.login, Course.currentCourse)

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}