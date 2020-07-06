package org.example


import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Login extends Simulation {
	val username = "peitong"
	val password = "Yungu_1919"

	val headers_0 = Map(
		"Authorization" -> "Basic aW90X2Vzb2Z0OjQ4MTg4MzA2OWU0OTQxMTg5YmRlODUzOTQwN2U5MGQy"
	)

	object Login {
		val login = exec(http("authortoken")
			.post("https://login.daily.yungu-inc.org/oauth/token?grant_type=password&password=" + password + "&scope=read_userinfo&username=" + username)
			.headers(headers_0)
			.check(bodyString.saveAs("login_json")) //保存body信息到session,key为login_json
			.check(status.is(200))
			.check(jsonPath("$.access_token").exists.saveAs("token"))  //将access_token保存到session，key为token
		)
			//打印body信息
//			.exec(session => {
//				println("login_json :" + session("login_json").as[String])
//				session
//			})
	}
}