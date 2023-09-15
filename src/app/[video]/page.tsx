"use client"
import SideVideoCard from "@/components/SideVideoCard"
import SideBar from "@/components/sidebar"
import VideoPlayer from "@/components/videoPlayer"
import { AppContext } from "@/providers"
import { Video } from "@/typescript.types/video"
// import { useRouter } from "next/navigation"
import React, { useContext, useEffect } from "react"

const page = ({ searchParams }: { searchParams: Video }) => {
	const { setIsNavBarOpen, allVideos, getAllVideos } = useContext(AppContext)
	// const router = useRouter()
	const [videoDetails, setVideoDetails] = React.useState<Video>({
		videoUrl: "",
		title: "",
		createdAt: "",
		likes: "",
		address: "000000000000000",
		index: -1,
	})
	const { videoUrl, title, createdAt, likes, address, index } = searchParams

	useEffect(() => {
		setIsNavBarOpen(false)
		setVideoDetails({ videoUrl, title, createdAt, likes, address, index })
		getAllVideos()
	}, [])
	return (
		<div className='w-screen h-screen relative overflow-x-hidden'>
			<SideBar className='z-[100000] absolute ' isVideoPlayer={true} />
			<div className='flex gap-5 m-auto w-[90vw] justify-center'>
				<div className=' mt-20  w-[80vw] overflow-hidden top-[5rem] max-w-[1000px]'>
					<VideoPlayer
						videoUrl={videoDetails.videoUrl}
						title={videoDetails.title}
						createdAt={videoDetails.createdAt}
						likes={videoDetails.likes}
						address={videoDetails.address}
						index={videoDetails.index}
					/>
					{/* <div className='min-h-[2rem]'>comments</div> */}
				</div>
				<div className='mt-20 w-[25vw] p-2 flex flex-col gap-2'>
					{allVideos.map((video, index) => {
						return (
							<div
								key={index}
								onClick={() => {
									setVideoDetails({
										videoUrl: video.videoUrl,
										title: video.title,
										createdAt: video.createdAt,
										likes: video.likes,
										address: video.address,
										index,
									})
									// router.push(`/${index}`)
								}}
							>
								<SideVideoCard
									videoUrl={video.videoUrl}
									title={video.title}
									createdAt={video.createdAt}
									likes={video.likes}
									address={video.address}
								/>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
export default page
