"use client"
import SideBar from "@/components/sidebar"
import VideoPlayer from "@/components/videoPlayer"
import React from "react"

const page = () => {
	return (
		<div>
			<SideBar className='z-[100000] absolute' />
			<VideoPlayer />
		</div>
	)
}

export default page
