import { Web3 } from 'web3';
import { AddressConverter, AreonPlugin } from '@con3x/web3-plugin-areon';

const areonAddress = AddressConverter.ethToAreon('0x123456f6Ed06F81eb1Edc6fccE34414E2C21fE5c');

console.log('The areon address of 0x123456f6Ed06F81eb1Edc6fccE34414E2C21fE5c is:', areonAddress);

// the following shows how to use the plugin
// you can call any rpc method using the convention:
// web3.areon.<network>.rpc.<namespace>.<method>
async function main() {
  const web3 = new Web3('https://testnet-rpc.areon.network');
  web3.registerPlugin(new AreonPlugin());

  // to get the token balance of an account:
  const devTokenContract = await web3.areon.Contracts.ARC20('0xb8082fa72bd534eb0fa124a0ea8fb9824356fd74');
  const arc20balance = await devTokenContract.methods.balanceOf('0x6e994beb7015e68db2ce06fffe365e489f90b64d').call();
  console.log(
    'The balance of devToken at test net for 0xccd517c6f596512b7290040f58a6ddb492da7a9f, is:',
    Web3.utils.fromWei(arc20balance, 'ether'),
  );

  // to get the number of nft owned by an account:
  const numberOfNftOwned = await web3.areon.Contracts.ARC721('0x811abcac79de50cdf432462282e8c16eb4aca70d');
  const nftNumber = await numberOfNftOwned.methods.balanceOf('0xccd517c6f596512b7290040f58a6ddb492da7a9f').call();
  console.log(
    'The number of AreonTestnetNft owned by 0xccd517c6f596512b7290040f58a6ddb492da7a9f, is:',
    nftNumber.toString(),
  );
}
main();
