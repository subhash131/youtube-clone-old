"use client"
import React, { useEffect } from "react"

import Card from "@/components/Card"
import { AppContext } from "@/providers"
import SideBar from "@/components/sidebar"
import Link from "next/link"
import { Video } from "@/typescript.types/video"

export default function Home() {
	const {
		allVideos,
		isNavBarOpen,
		setIsNavBarOpen,
		isCreateSelected,
		isSettingsOpen,
		setIsCreateSelected,
		setIsSettingsOpen,
		getAllVideos,
		reload,
	} = React.useContext(AppContext)
	useEffect(() => {
		setIsNavBarOpen(true)
		;(async () => {
			await getAllVideos()
		})()
	}, [reload])

	return (
		<>
			<SideBar isVideoPlayer={false} />
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
										<Link
											key={index}
											href={{
												pathname: `/${index}`,
												query: video,
											}}
										>
											<Card
												videoUrl={video.videoUrl}
												owner={video.address}
												title={video.title}
												likes={video.likes}
												postedDate={video.createdAt}
												key={index}
											/>
										</Link>
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
