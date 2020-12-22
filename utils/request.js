const baseUrl = "https://openapp.fatiao.pro"

export function myRequestGet(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: "GET",
			data: data,
			success: function(res) {
				// console.log("get请求到了数据",res)
				resolve(res.data.data.list)
			},
			fail: function(err) {
				console.log("没拿到数据")
				reject(err)
			}
		})
	})
}
