import React from "react"

import ShortsSvg from "@/assets/ShortsSvg"
import SubscriptionSvg from "@/assets/Subscriptions"
import HomeSvg from "@/assets/HomeSvg"
import YouSvg from "@/assets/YouSvg"
import HistorySvg from "@/assets/HistorySvg"

export function SidebarClosed() {
	return (
		<aside className='flex h-screen w-16 flex-col items-center overflow-y-auto  bg-white py-8 fixed mt-12 ml-1'>
			<nav className='flex flex-1 flex-col items-center space-y-6'>
				<a
					href='#'
					className='rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none'
				>
					<HomeSvg isSelected={false} />
				</a>

				<a
					href='#'
					className='rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none'
				>
					<ShortsSvg isSelected={false} />
				</a>

				<a
					href='#'
					className='rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none'
				>
					<SubscriptionSvg isSelected={false} />
				</a>

				<a
					href='#'
					className='rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none'
				>
					<YouSvg isSelected={false} />
				</a>

				<a
					href='#'
					className='rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none'
				>
					<HistorySvg isSelected={false} />
				</a>
			</nav>
		</aside>
	)
}
