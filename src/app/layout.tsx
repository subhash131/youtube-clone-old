import "./globals.css"
import type { Metadata } from "next"
import React from "react"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import FloatingSettings from "@/components/FloatingSettings"
import CreateCard from "@/components/CreateCard"
import AppContext from "@/providers/AppContext"
import UploadVideo from "@/components/UploadVideo"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AppContext>
					<div>
						<Toaster position='top-center' />
						<Navbar />
						<FloatingSettings />
						<CreateCard />
						<UploadVideo />
					</div>
					<div>{children}</div>
				</AppContext>
			</body>
		</html>
	)
}
