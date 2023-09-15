import { Video } from "@/typescript.types/video"
import React from "react"

const SideVideoCard = ({
	videoUrl,
	address,
	title,
	likes,
	createdAt,
}: Video) => {
	return (
		<div className='flex gap-2 cursor-pointer'>
			<video
				src={videoUrl}
				width='200px'
				className='rounded-lg object-cover h-[120px]'
				onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
				onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
				muted
			></video>
			<div>
				<div>
					<div className='text-base p-1 font-medium tracking-tight'>
						{title.length > 40 ? title.slice(0, 40) + "..." : title}
					</div>
					<div className='text-xs tracking-tighter text-[#858484]'>
						{`${address.substring(0, 5)} ...${address.substring(
							address.length - 3
						)}`}
					</div>
					<div className='text-xs tracking-tighter text-[#858484]'>
						{likes} k &#x2022; {createdAt}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideVideoCard
