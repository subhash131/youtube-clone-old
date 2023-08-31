"use client"
import React from "react"
import { Menu, Search, Mic, UserCircle2, MoreVertical } from "lucide-react"
import YoutubeSvg from "../assets/YoutubeSvg"
import { AppContext } from "@/providers"
import CreateSvg from "@/assets/CreateSvg"
import NotificationSvg from "@/assets/NotificationSvg"

export function Navbar() {
	const {
		setIsNavBarOpen,
		setIsSettingsOpen,
		isLoggedIn,
		setIsCreateSelected,
		isCreateSelected,
		isSettingsOpen,
	} = React.useContext(AppContext)

	return (
		<div
			className='w-full bg-white font-roboto fixed'
			onClick={() => {
				if (isCreateSelected) setIsCreateSelected(false)
				if (isSettingsOpen) setIsSettingsOpen(false)
			}}
		>
			<div className='mx-auto flex items-center justify-between px-4 py-2 w-full'>
				<div className='inline-flex items-center gap-6 w-96  py-2 px-3'>
					<Menu
						onClick={() => {
							setIsNavBarOpen((preValue: boolean) => !preValue)
						}}
						className='cursor-pointer'
					/>
					<YoutubeSvg />
				</div>
				<div className=' w-[800px] flex gap-4 bg-[rd]'>
					<div className='flex'>
						<input
							className='flex h-10 w-[500px] rounded-tl-3xl rounded-bl-3xl border border-[#E1E1E0] px-3 py-2 text-sm placeholder:text-[#A78F89] focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
							type='text'
							placeholder='Search'
						></input>
						<div className='flex h-10 w-[50px] rounded-tr-3xl rounded-br-3xl border border-[#E1E1E0]  bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer'>
							<Search size={22} strokeWidth={1} />
						</div>
					</div>
					<div className='flex h-10  rounded-full border border-[#E1E1E0]  bg-gray-100 px-2 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer'>
						<Mic size={22} strokeWidth={1} />
					</div>
				</div>
				<div>
					{isLoggedIn ? (
						<div className='flex gap-4'>
							<div
								className='p-2 rounded-full hover:bg-[#F4F4F4] cursor-pointer'
								onClick={() => {
									setIsCreateSelected((preVal) => !preVal)
								}}
							>
								<CreateSvg />
							</div>
							<div className='p-2 rounded-full hover:bg-[#F4F4F4] cursor-pointer'>
								<NotificationSvg isSelected={false} />
							</div>
							<div className='p-2 rounded-full border cursor-pointer w-10 h-10'>
								<img
									className='rounded-full object-cover w-6 h-6'
									src='https://static.thenounproject.com/png/5800652-200.png'
								></img>
							</div>
						</div>
					) : (
						<div className='flex gap-2'>
							<div
								className='py-2 px-2 cursor-pointer rounded-full hover:border'
								onClick={() => {
									setIsSettingsOpen(
										(preValue: boolean) => !preValue
									)
								}}
							>
								<MoreVertical size={24} strokeWidth={1} />
							</div>
							<div className='flex gap-2 rounded-3xl border py-2 px-3 w-28 cursor-pointer'>
								<UserCircle2
									size={24}
									strokeWidth={1}
									className='text-[#075ED4]'
								/>
								<p className='text-[#075ED4]'>Sign in</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
