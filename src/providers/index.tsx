"use client"
import React, { Dispatch, PropsWithChildren, useState } from "react"
import { MetaMaskWallet } from "@thirdweb-dev/wallets"
import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import toast from "react-hot-toast"
import { contractAddress, clientId } from "@/constants"
import { ThirdwebStorage } from "@thirdweb-dev/storage"

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
	wallet: MetaMaskWallet | undefined
	updloadVideo: (video: File) => unknown
	signIn: () => Promise<void>
	getAllVideos: () => Promise<void>
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
	wallet: undefined,
	updloadVideo: () => {},
	signIn: () => Promise<void>,
	getAllVideos: () => Promise<void>,
})

const AppContextProvider = ({ children }: PropsWithChildren) => {
	const [sdk, setSdk] = useState<ThirdwebSDK | undefined>(undefined)
	const wallet = new MetaMaskWallet({})

	const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(true)
	const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
	const [isUploadVideoSelected, setIsUploadVideoSelected] =
		useState<boolean>(false)
	const [isCreateSelected, setIsCreateSelected] = useState<boolean>(false)

	const signIn = async (): Promise<void> => {
		await wallet.connect()
		const signer = await wallet.getSigner()
		setSdk(ThirdwebSDK.fromSigner(signer, "mumbai", { clientId }))
		if (await wallet.getAddress()) {
			setIsLoggedIn(true)
		}
	}
	const getContract = async () => {
		const contract = await sdk?.getContract(contractAddress)
		return contract
	}

	const uploadToIpfs = async (
		file: File
	): Promise<{ publicUrl: string; ipfsUrl: string } | undefined> => {
		const storage = new ThirdwebStorage({
			clientId,
		})
		try {
			const ipfsUrl = await storage.upload(file)
			console.log("Uploaded to IPFS:", {
				publicUrl: storage?.resolveScheme(ipfsUrl),
				ipfsUrl,
			})
			return {
				publicUrl: storage?.resolveScheme(ipfsUrl),
				ipfsUrl,
			}
		} catch (e) {
			console.log("Error ::", e)
		}
	}

	const updloadVideo = async (video: File) => {
		const ipfsDetails = await uploadToIpfs(video)
		if (ipfsDetails) {
			const { publicUrl } = ipfsDetails
			const contract = await getContract()
			const address = await wallet.getAddress()

			if (!address) {
				try {
					const address = await wallet.connect()
					if (address) {
						toast.success("Wallet Connected")
					}
				} catch {
					toast.error("Failed to connect wallet")
				}
			}
			try {
				const data = await contract?.call("uploadVideo", [publicUrl])
				if (data) {
					toast.success("Video Uploaded")
				}
			} catch (error) {
				toast.error("Failed to upload video, Try again")
			}
		} else {
			toast.error("Failed to upload video, Try again")
		}
	}
	const getAllVideos = async () => {
		try {
			const baseUrl = window.location.origin
			const url = baseUrl + "/api/getAllVideos"
			const data = await fetch(url)
			const jsonData = await data.json()
			return jsonData.data
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<AppContext.Provider
			value={{
				wallet,
				signIn,
				isLoggedIn,
				getAllVideos,
				isNavBarOpen,
				updloadVideo,
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
