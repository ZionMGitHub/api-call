// get NFTs for current user on Mainnet
const userEthNFTs = await Moralis.Web3API.account.getNFTs();

// get testnet NFTs for user
const testnetNFTs = await Moralis.Web3API.account.getNFTs({ chain: "ropsten" });

// get polygon NFTs for address
const options = {
  chain: "Eth",
  address: "0x0x6BB5971129066120D665034D78B32c1A35bAB55E",
};
const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);