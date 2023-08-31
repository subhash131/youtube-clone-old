"use client"
import GoLiveSvg from "@/assets/GoLiveSvg"
import UploadSvg from "@/assets/UploadSvg"
import { AppContext } from "@/providers"
import React from "react"

const CreateCard = () => {
	const { isCreateSelected, setIsUploadVideoSelected, setIsCreateSelected } =
		React.useContext(AppContext)
	return (
		<div
			className={`pt-4 flex flex-col w-40 h-28 bg-white border absolute top-14 rounded-xl right-6 z-10 ${
				isCreateSelected ? "" : "hidden"
			}`}
		>
			<div
				className='flex p-2 px-4 gap-2 cursor-pointer hover:bg-[#EDEADE] transition-all'
				onClick={() => {
					setIsUploadVideoSelected((prev) => !prev)
					setIsCreateSelected((prev) => !prev)
				}}
			>
				<UploadSvg />
				<p className='text-sm'>Upload Video</p>
			</div>
			<div className='flex p-2 px-4 gap-2 cursor-pointer hover:bg-[#EDEADE] transition-all'>
				<GoLiveSvg />
				<p className='text-sm '>Go Live</p>
			</div>
		</div>
	)
}

export default CreateCard
