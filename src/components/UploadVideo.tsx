"use client"
import { AppContext } from "@/providers"
import React, { useContext, useEffect, useRef, useState } from "react"
import Overlay from "./Overlay"
import { ArrowUpFromLine, X } from "lucide-react"

const UploadVideo = () => {
	const { isUploadVideoSelected, setIsUploadVideoSelected, video, setVideo } =
		useContext(AppContext)
	const fileRef = useRef<HTMLInputElement>(null)
	const handleFileUpload = () => {
		setVideo(fileRef.current?.files?.[0])
		console.log(video?.name)
	}

	return (
		<>
			<Overlay display={isUploadVideoSelected} />
			<div
				className={`w-2/3 h-4/5 top-20 left-60 bg-white border  absolute  rounded-lg z-10 overflow-hidden shadow-md ${
					isUploadVideoSelected ? "" : "hidden"
				}`}
			>
				{" "}
				<div className='flex w-full font-medium  bg-[red*] h-16 p-4 justify-between border-b px-8'>
					<label>Upload Videos</label>
					<X
						onClick={() => {
							setIsUploadVideoSelected(false)
							setVideo(undefined)
						}}
						className='cursor-pointer'
					/>
				</div>
				<div className='w-full h-full p-4 grid place-items-center mt-[-6rem]'>
					<div className='w-2/4 bg-[red*] gap-4  justify-center items-center flex flex-col'>
						<div className='w-40 h-40 rounded-full place-items-center grid  bg-[#F9F9F9] relative cursor-pointer'>
							<ArrowUpFromLine />
							<input
								type='file'
								id='select-files'
								accept='video/*'
								className='opacity-0 bg-red-50 absolute w-full h-full top-0 left-0 bottom-0 right-0 cursor-pointer'
								ref={fileRef}
								onChange={handleFileUpload}
							/>
						</div>
						<div className='text-center'>
							{video ? (
								<label className='text-base block'>
									{video.name}
								</label>
							) : (
								<label className='text-base'>
									Drag and drop video files to upload <br />
									<span className='text-sm text-[#959594]'>
										Your videos will be private until you
										publish them.
									</span>
								</label>
							)}
						</div>
						<div className=''>
							<label
								htmlFor={video ? "" : "select-files"}
								className='cursor-pointer block px-6 py-2 w-44 text-white text-center bg-[#075FD5] font-medium rounded'
								onClick={() => {
									if (video) {
										console.log(video)
									}
								}}
							>
								{video ? "UPLOAD FILES" : "SELECT FILES"}
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default UploadVideo
