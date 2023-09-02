import { getContract } from "../helpers"
import { NextResponse } from "next/server"

export const GET = async () => {
	const contract = await getContract()
	const data = []
	const today = new Date()

	const minute = 1000 * 60
	const hour = minute * 60
	const day = hour * 24
	const year = day * 365

	try {
		const resp = await contract.call("getAllVideos", [])
		for (var i = 0; i < resp.length; i++) {
			var uploadTime = new Date(resp[i].timeStamp * 1000)
			var createdAt = ""
			const diff = today.getTime() - uploadTime.getTime()
			const diffYears = Math.ceil(diff / year)
			const diffDays = Math.ceil(diff / day)
			const diffHours = Math.ceil(diff / hour)
			const diffminutes = Math.ceil(diff / minute)

			if (diffYears > 1) {
				createdAt = diffYears + " years ago"
			} else if (diffDays > 1) {
				createdAt = diffDays + " days ago"
			} else if (diffHours > 1) {
				createdAt = diffHours + " hours ago"
			} else {
				createdAt = diffminutes + " minutes ago"
			}
			data.push({
				createdAt,
				address: resp[i].myAddress,
				likes: resp[i].likes.toString(),
				title: resp[i].title || "Test Video",
				videoUrl: resp[i].videoUrl,
			})
		}
		return NextResponse.json({ data: data.reverse() })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
