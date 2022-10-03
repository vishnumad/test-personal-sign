import ethSigUtil from "eth-sig-util";
import { utils } from "ethers";

const provider = window.ethereum;

async function personal_sign() {
  const [address] = await provider.request({ method: "eth_requestAccounts" });

  const messageBytes = utils.toUtf8Bytes(
    `Hello World! - ${new Date().getTime()}`
  );
  const hexMessage = utils.hexlify(messageBytes);

  const signature = await provider.request({
    method: "personal_sign",
    params: [hexMessage, address],
  });

  const recoveredAddress = ethSigUtil.recoverPersonalSignature({
    data: hexMessage,
    sig: signature,
  });

  window.alert(
    `Signature: ${signature} \nRecovered Address: ${recoveredAddress} \nActual Address: ${address}`
  );
}

// personal sign on page load
personal_sign();

// personal sign on button press
document.getElementById("sign_button").onclick = () => {
  personal_sign();
};

export {};
