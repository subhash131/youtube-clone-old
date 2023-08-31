import { AppContext } from "@/providers"
import React from "react"

type Props = {
	videoUrl: string
	name: string
	owner: string
	views: string
	postedDate: string
}

const Card = ({ videoUrl, name, owner, views, postedDate }: Props) => {
	if (!AppContext) return null
	const { isNavBarOpen } = React.useContext(AppContext)
	return (
		<div className={`${isNavBarOpen ? "w-96" : "w-80"} cursor-pointer`}>
			<video
				autoPlay
				muted
				className='rounded-md hover:rounded-none hover:scale-[1.01] transition-all ease-in-out'
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
					<p className='text-base font-medium'>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit.
					</p>
					<label className='text-sm'>Channel Name</label>
					<div className='text-sm'>
						<label>2M views &#x2022; 2 weeks ago</label>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
