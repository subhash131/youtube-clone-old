"use client"
import React from "react"
import { SidebarOpened } from "./SidebarOpened"

import { AppContext } from "@/providers"
import { SidebarClosed } from "@/components/sidebar/SidebarClosed"

const SideBar = () => {
	const { isNavBarOpen } = React.useContext(AppContext)

	return <>{isNavBarOpen ? <SidebarOpened /> : <SidebarClosed />}</>
}

export default SideBar
