import { ThirdwebStorage } from "@thirdweb-dev/storage"
import { NextRequest, NextResponse } from "next/server"
import { secretKey } from "../helpers"

export const POST = async (req: NextRequest, res: NextResponse) => {
	const storage = new ThirdwebStorage({
		secretKey,
	})
	const file = await req.body
	console.log("Received file:", file)

	try {
		const ipfsUrl = await storage.upload(file)
		console.log("Uploaded to IPFS:", {
			publicUrl: storage?.resolveScheme(ipfsUrl),
			ipfsUrl,
		})
		return NextResponse.json({
			publicUrl: storage?.resolveScheme(ipfsUrl),
			ipfsUrl,
		})
		return NextResponse.json({
			file,
		})
	} catch (error) {
		console.log("Error ::", error)
		return NextResponse.json({ error }, { status: 400 })
	}
}
