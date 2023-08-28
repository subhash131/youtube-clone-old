"use client"
import React from "react"

import Card from "@/components/Card"
import { AppContext } from "@/providers"

export default function Home() {
	const { isNavBarOpen } = React.useContext(AppContext)
	return (
		<main className='relative'>
			<div
				className={`mt-20 absolute  ${
					isNavBarOpen ? "left-60 w-[80%]" : "left-20 w-[90%]"
				} p-2`}
			>
				<div
					className={`grid ${
						isNavBarOpen
							? "grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]"
							: "grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]"
					}  gap-6`}
				>
					<Card
						videoUrl='https://player.vimeo.com/external/360054810.sd.mp4?s=2a5f419725b1bef8017100b0588d9467d8530daa&profile_id=164&oauth2_token_id=57447761'
						owner=''
						name=''
						views=''
						postedDate=''
					/>
					<Card
						videoUrl='https://player.vimeo.com/external/360054810.sd.mp4?s=2a5f419725b1bef8017100b0588d9467d8530daa&profile_id=164&oauth2_token_id=57447761'
						owner=''
						name=''
						views=''
						postedDate=''
					/>
					<Card
						videoUrl='https://player.vimeo.com/external/360054810.sd.mp4?s=2a5f419725b1bef8017100b0588d9467d8530daa&profile_id=164&oauth2_token_id=57447761'
						owner=''
						name=''
						views=''
						postedDate=''
					/>
					<Card
						videoUrl='https://player.vimeo.com/external/360054810.sd.mp4?s=2a5f419725b1bef8017100b0588d9467d8530daa&profile_id=164&oauth2_token_id=57447761'
						owner=''
						name=''
						views=''
						postedDate=''
					/>
				</div>
			</div>
		</main>
	)
}
