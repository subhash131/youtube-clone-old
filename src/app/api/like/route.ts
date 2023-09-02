import { NextRequest, NextResponse } from "next/server"
import { getContract } from "../helpers"

export const POST = async (req: NextRequest) => {
	const reqBody = await req.json()
	const contract = await getContract()
	try {
		const data = await contract.call("like", [reqBody.id])
		return NextResponse.json({ data })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
