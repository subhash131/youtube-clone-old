import { AppContext } from "@/providers"
import React from "react"

type Props = {
	videoUrl: string
	title: string
	owner: string
	likes: string
	postedDate: string
}

const Card = ({ videoUrl, title, owner, postedDate }: Props) => {
	if (!AppContext) return null
	const { isNavBarOpen } = React.useContext(AppContext)
	return (
		<div className={`${isNavBarOpen ? "w-96" : "w-80"} cursor-pointer `}>
			<video
				muted
				className={`rounded-md hover:rounded-none hover:scale-[1.01] transition-all ease-in-out object-cover ${
					isNavBarOpen ? "w-96 h-56" : "w-80 h-44"
				}`}
				onMouseOver={(e) => {
					(e.target as HTMLVideoElement).play()
				}}
				onMouseOut={(e) => {
					(e.target as HTMLVideoElement).pause()
				}}
			>
				<source src={videoUrl} /> font-roboto
			</video>
			<div className='flex p-2 font-roboto'>
				<img
					className='rounded-full object-cover w-16 h-16'
					src='https://static.thenounproject.com/png/5800652-200.png'
					width='50'
					height='30'
				></img>
				<div className=''>
					<p className='text-base font-medium'>{title}</p>
					<label className='text-sm'>{`${owner.substring(
						0,
						5
					)}....${owner.substring(
						owner.length,
						owner.length - 3
					)}`}</label>
					<div className='text-sm'>
						<label>2M views &#x2022; {postedDate}</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
