import { ThirdwebSDK } from "@thirdweb-dev/sdk"
const contractAddress = "0xc48734Fb1c1320c5dbCAF5Bbb8141c7B573eDE60"
export const secretKey =
	"wKPWk4Yc1M7UwtYajuPyaKjX71MT0HRmjgB9F24HM5_IACOAmk1wnb-Qn_F7s_FfRn1iJD1GrV3ynChLMTePRw"

export const sdk = new ThirdwebSDK("mumbai", {
	secretKey,
})
export const getContract = async () => {
	const contract = await sdk.getContract(contractAddress)
	return contract
}
