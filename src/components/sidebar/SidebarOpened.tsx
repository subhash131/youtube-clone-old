import React from "react"
import { Newspaper, BellRing, Paperclip, Brush, Wrench } from "lucide-react"
import HomeSvg from "@/assets/HomeSvg"
import ShortsSvg from "@/assets/ShortsSvg"
import SubscriptionSvg from "@/assets/Subscriptions"

export function SidebarOpened() {
	return (
		<aside className='flex h-screen w-56 flex-col overflow-y-auto  bg-white px-5 py-8 fixed mt-12'>
			<div className=' flex flex-1 flex-col justify-between'>
				<nav className='-mx-3 space-y-6 '>
					<div className='space-y-3 '>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<HomeSvg isSelected={false} />
							<span className='mx-2 text-sm font-medium'>
								Home
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<ShortsSvg isSelected={false} />
							<span className='mx-2 text-sm font-medium'>
								Shorts
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<SubscriptionSvg isSelected={false} />
							<span className='mx-2 text-sm font-medium'>
								Subscriptions
							</span>
						</a>
					</div>
					<div className='space-y-3 '>
						<label className='px-3 text-xs font-semibold uppercase text-gray-900'>
							content
						</label>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<Newspaper
								className='h-5 w-5'
								aria-hidden='false'
							/>
							<span className='mx-2 text-sm font-medium'>
								Blogs
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<BellRing className='h-5 w-5' aria-hidden='false' />
							<span className='mx-2 text-sm font-medium'>
								Notifications
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<Paperclip
								className='h-5 w-5'
								aria-hidden='false'
							/>
							<span className='mx-2 text-sm font-medium'>
								Checklists
							</span>
						</a>
					</div>

					<div className='space-y-3 '>
						<label className='px-3 text-xs font-semibold uppercase text-gray-900'>
							Customization
						</label>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<Brush className='h-5 w-5' aria-hidden='false' />
							<span className='mx-2 text-sm font-medium'>
								Themes
							</span>
						</a>
						<a
							className='flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700'
							href='#'
						>
							<Wrench className='h-5 w-5' aria-hidden='false' />
							<span className='mx-2 text-sm font-medium'>
								Setting
							</span>
						</a>
					</div>
				</nav>
			</div>
		</aside>
	)
}
