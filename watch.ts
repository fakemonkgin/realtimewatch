import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import { readFileSync } from "fs"

const main =  async() => {
    const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const sdk = new ThirdwebSDK("mainnet");
    const contract = sdk.getContractFromAbi(
        daiAddress,
        JSON.parse(readFileSync("DaiAbi.json", "utf8"))
        );
     contract.events.listenToAllEvents((event) => {
            console.log(event)
        });
};

main()

