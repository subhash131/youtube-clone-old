"use client"
import React, { PropsWithChildren } from "react"

export const AppContext = React.createContext({})

const AppContextProvider = ({ children }: PropsWithChildren) => {
	const [isNavBarOpen, setIsNavBarOpen] = React.useState(false)

	return (
		<AppContext.Provider value={{ isNavBarOpen, setIsNavBarOpen }}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContextProvider
