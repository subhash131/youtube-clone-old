"use client"
import React, { Dispatch, PropsWithChildren, useState } from "react"
import { MetaMaskWallet } from "@thirdweb-dev/wallets"
import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import toast from "react-hot-toast"
import { contractAddress, clientId } from "@/constants"
import { ThirdwebStorage } from "@thirdweb-dev/storage"

type Video = {
	videoUrl: string
	address: string
	title: string
	likes: string
	createdAt: string
}

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
	updloadVideo: (video: File, title: string) => unknown
	signIn: () => Promise<void>
	getAllVideos: () => Promise<void>
	setAllVideos: Dispatch<React.SetStateAction<Video[]>>
	allVideos: Video[]
	reload: boolean
	setReload: Dispatch<React.SetStateAction<boolean>>
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
	signIn: () => new Promise<void>(() => {}),
	getAllVideos: () => new Promise<void>(() => {}),
	setAllVideos: () => {},
	allVideos: [],
	setReload: () => {},
	reload: false,
})

const AppContextProvider = ({ children }: PropsWithChildren) => {
	const [sdk, setSdk] = useState<ThirdwebSDK | undefined>(undefined)
	const wallet = new MetaMaskWallet({})

	const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false)
	const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)
	const [reload, setReload] = useState<boolean>(false)
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
	const [isUploadVideoSelected, setIsUploadVideoSelected] =
		useState<boolean>(false)
	const [isCreateSelected, setIsCreateSelected] = useState<boolean>(false)
	const [allVideos, setAllVideos] = useState<Video[]>([])

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

			return {
				publicUrl: storage?.resolveScheme(ipfsUrl),
				ipfsUrl,
			}
		} catch (e) {
			console.log("Error ::", e)
		}
	}

	const updloadVideo = async (video: File, title: string) => {
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
				const data = await contract?.call("uploadVideo", [
					publicUrl,
					title,
				])
				if (data) {
					toast.success("Video Uploaded")
					setIsUploadVideoSelected(false)
				}
			} catch (error) {
				toast.error("Failed to upload video, Try again")
			}
		} else {
			toast.error("Failed to upload video, Try again")
		}
		setReload((preVal) => !preVal)
		setIsUploadVideoSelected(false)
	}
	const getAllVideos = async () => {
		try {
			const url = window.location.origin + "/api/getAllVideos"
			const data = await fetch(url)
			const jsonData = await data.json()
			setAllVideos(jsonData.data)
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
				reload,
				setReload,
				allVideos,
				isLoggedIn,
				isNavBarOpen,
				setAllVideos,
				getAllVideos,
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
