"use client"
import SideVideoCard from "@/components/SideVideoCard"
import SideBar from "@/components/sidebar"
import VideoPlayer from "@/components/videoPlayer"
import { AppContext } from "@/providers"
import { Video } from "@/typescript.types/video"
import Link from "next/link"
import React, { useContext, useEffect } from "react"

const page = ({ searchParams }: { searchParams: Video }) => {
	const { setIsNavBarOpen, allVideos, getAllVideos } = useContext(AppContext)
	const { videoUrl, title, createdAt, likes, address } = searchParams

	useEffect(() => {
		setIsNavBarOpen(false)
		getAllVideos()
	}, [])
	return (
		<div className='w-screen h-screen relative overflow-x-hidden'>
			<SideBar className='z-[100000] absolute ' isVideoPlayer={true} />
			<div className='flex gap-5 m-auto w-[90vw] justify-center'>
				<div className=' mt-20  w-[80vw] overflow-hidden top-[5rem] max-w-[1000px]'>
					<VideoPlayer
						videoUrl={videoUrl}
						title={title}
						createdAt={createdAt}
						likes={likes}
						address={address}
					/>
					<div className='min-h-[2rem]'>comments</div>
				</div>
				<div className='mt-20 w-[25vw] p-2 flex flex-col gap-2'>
					{allVideos.map((video, index) => {
						return (
							<Link
								key={index}
								href={{ pathname: `/${index}`, query: video }}
							>
								<div>
									<SideVideoCard
										videoUrl={video.videoUrl}
										title={video.title}
										createdAt={video.createdAt}
										likes={video.likes}
										address={video.address}
									/>
								</div>
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}
export default page
