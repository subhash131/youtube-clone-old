"use client"
import React, { Dispatch, PropsWithChildren, useState } from "react"

type AppContextType = {
	isNavBarOpen: boolean
	setIsNavBarOpen: Dispatch<React.SetStateAction<boolean>>
	isSettingsOpen: boolean
	setIsSettingsOpen: Dispatch<React.SetStateAction<boolean>>
	isLoggedIn: boolean
	setIsLoggedIn: Dispatch<React.SetStateAction<boolean>>
	isCreateSelected: boolean
	setIsCreateSelected: Dispatch<React.SetStateAction<boolean>>
	isUploadVideoSelected: boolean
	setIsUploadVideoSelected: Dispatch<React.SetStateAction<boolean>>
	video: File | undefined
	setVideo: Dispatch<React.SetStateAction<File | undefined>>
}

export const AppContext = React.createContext<AppContextType>({
	isNavBarOpen: false,
	setIsNavBarOpen: () => {},
	isSettingsOpen: false,
	setIsSettingsOpen: () => {},
	isLoggedIn: false,
	setIsLoggedIn: () => {},
	isCreateSelected: false,
	setIsCreateSelected: () => {},
	isUploadVideoSelected: false,
	setIsUploadVideoSelected: () => {},
	video: undefined,
	setVideo: () => {},
})

const AppContextProvider = ({ children }: PropsWithChildren) => {
	const [video, setVideo] = useState<File>()
	const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(true)
	const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true)
	const [isUploadVideoSelected, setIsUploadVideoSelected] =
		useState<boolean>(true)
	const [isCreateSelected, setIsCreateSelected] = useState<boolean>(false)

	return (
		<AppContext.Provider
			value={{
				video,
				setVideo,
				isLoggedIn,
				isNavBarOpen,
				setIsLoggedIn,
				isSettingsOpen,
				setIsNavBarOpen,
				isCreateSelected,
				setIsSettingsOpen,
				setIsCreateSelected,
				isUploadVideoSelected,
				setIsUploadVideoSelected,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export default AppContextProvider
