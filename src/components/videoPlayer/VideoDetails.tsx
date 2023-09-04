import React from "react"

const VideoDetails = ({
	address,
	title,
	likes,
	createdAt,
}: {
	address: string
	title: string
	likes: string
	createdAt: string
}) => {
	return (
		<div>
			VideoDetails
			<div>{address}</div>
			<div>{title}</div>
			<div>{likes}</div>
			<div>{createdAt}</div>
		</div>
	)
}

export default VideoDetails
