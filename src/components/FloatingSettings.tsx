"use client"
import { AppContext } from "@/providers"
import React from "react"

const FloatingSettings = () => {
	const { isSettingsOpen } = React.useContext(AppContext)
	return (
		<div
			className={`w-72 h-96 bg-white border absolute top-14 rounded-lg right-32 z-10 ${
				isSettingsOpen ? "" : "hidden"
			}`}
		></div>
	)
}

export default FloatingSettings
