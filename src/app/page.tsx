"use client"
import React, { useEffect, useState } from "react"

import Card from "@/components/Card"
import { AppContext } from "@/providers"
import SideBar from "@/components/sidebar"
type Video = {
	videoUrl: string
	address: string
	title: string
	likes: string
	createdAt: string
}

export default function Home() {
	const [allVideos, setAllVideos] = useState<Video[]>([])
	const {
		isNavBarOpen,
		isCreateSelected,
		isSettingsOpen,
		setIsCreateSelected,
		setIsSettingsOpen,
		getAllVideos,
	} = React.useContext(AppContext)
	useEffect(() => {
		(async () => {
			const data = await getAllVideos()
			if (data != undefined) setAllVideos(data as Video[])
		})()
	}, [])

	return (
		<>
			<SideBar />
			<div
				onClick={() => {
					if (isCreateSelected) setIsCreateSelected(false)
					if (isSettingsOpen) setIsSettingsOpen(false)
				}}
			>
				<div className='relative'>
					<div
						className={`mt-20 z-0 absolute  ${
							isNavBarOpen ? "left-60 w-[80%]" : "left-20 w-[90%]"
						} p-2`}
					>
						<div
							className={`grid pb-5 ${
								isNavBarOpen
									? "grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]"
									: "grid-cols-[repeat(auto-fill,minmax(18rem,1fr))]"
							}  gap-8 overflow-hidden`}
						>
							{allVideos ? (
								[...allVideos].map((video, index) => {
									return (
										<Card
											videoUrl={video.videoUrl}
											owner={video.address}
											title={video.title}
											likes={video.likes}
											postedDate={video.createdAt}
											key={index}
										/>
									)
								})
							) : (
								<>loading...</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
