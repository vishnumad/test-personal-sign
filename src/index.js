import { providers } from "ethers";

async function test_get_code() {
  const ethersProvider = new providers.Web3Provider(window.ethereum);

  // Switch to Goerli
  await ethersProvider.provider.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x5" }],
  });

  const code = await ethersProvider.getCode(
    "0xB98B658223Fc9D3F166613E938C169fcFCE55d37"
  );

  console.log("Code:", code);
}

document.getElementById("sign_button").onclick = () => {
  test_get_code();
};

export {};
