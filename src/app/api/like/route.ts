import { getContract } from "../../../constants"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest, res: NextResponse) => {
	const reqBody = await req.json()
	const contract = await getContract()
	try {
		const data = await contract.call("like", [reqBody.id])
		return NextResponse.json({ data })
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 })
	}
}
