import React, { PropsWithChildren } from "react"
import AppContextProvider from "."

const AppContext = ({ children }: PropsWithChildren) => {
	return <AppContextProvider>{children}</AppContextProvider>
}

export default AppContext
