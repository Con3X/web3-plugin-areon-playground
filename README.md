 
#  <img src="https://github.com/Con3X/web3-plugin-areon-playground/assets/24407834/70b9d570-1bcc-43c7-8ac1-d8c0f4acca5e" width="40" height="40"/> web3-plugin-areon playground

A typescript-starter project to play with the package <a href="https://www.npmjs.com/package/@con3x/web3-plugin-areon/">web3-plugin-areon</a>.


## To try the plugin
- Clone this repo on your local machine. 
- Run `yarn` and then `yarn start:dev` in the terminal and you will see the code output in the console. 
- Open the file `/src/index.ts` to see and edit the code. And then save your changes to see the output of the new code in the console

## The code and the result
If you would like to have a look before running the project on your machine, here simply the content of the file at `/src/index.ts`:
```ts title="index.ts"
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
```

And this is the output of the previous code.

```
The areon address of 0x123456f6Ed06F81eb1Edc6fccE34414E2C21fE5c is: areon1zg69dahdqmupav0dcm7vudzpfckzrljum4nsgt
The balance of devToken at test net for 0xccd517c6f596512b7290040f58a6ddb492da7a9f, is: 50
The number of AreonTestnetNft owned by 0xccd517c6f596512b7290040f58a6ddb492da7a9f, is: 6
```

## Project Links


- npm package: https://www.npmjs.com/package/@con3x/web3-plugin-areon/
- GitHub repo: https://github.com/con3x/web3-plugin-areon
- Playground (this repo): https://github.com/con3x/web3-plugin-areon-playground
- Project website: www.web3areon.com
