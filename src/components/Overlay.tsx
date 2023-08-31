import { AppContext } from "@/providers"
import React, { useContext } from "react"

const Overlay = ({ display }: { display: Boolean }) => {
	const { setIsUploadVideoSelected, setVideo } = useContext(AppContext)
	return (
		<div
			className={`absolute w-screen h-screen bg-transparent backdrop-blur-sm z-[9] ${
				display ? "" : "hidden"
			}`}
			onClick={() => {
				setIsUploadVideoSelected(false)
			}}
		></div>
	)
}

export default Overlay
