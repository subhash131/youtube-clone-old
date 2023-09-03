"use client"
import React from "react"
import { SidebarOpened } from "./SidebarOpened"

import { AppContext } from "@/providers"
import { SidebarClosed } from "@/components/sidebar/SidebarClosed"

const SideBar = ({ className }: { className?: string }) => {
	const { isNavBarOpen } = React.useContext(AppContext)

	return (
		<div className={className}>
			{isNavBarOpen ? <SidebarOpened /> : <SidebarClosed />}
		</div>
	)
}

export default SideBar
