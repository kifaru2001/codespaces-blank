import {
    ConnectWallet,
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useContractRead,
    useOwnedNFTs,
    useTokenBalance,
    Web3Button,
  } from "@thirdweb-dev/react";
  import { BigNumber, ethers } from "ethers";
  import { useEffect, useState } from "react";

  import { NFT_COLLECTION_ADDRESS, tokenContractAddress, stakingContractAddress } from "../const/contractAddresses"
  import "./tab.css";
import NFTCard from "../components/NFTCard"
import "./tab.css"
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
  
  const Stake = () => {
    
    const address = useAddress();
    const { contract: nftDropContract } = useContract(
      NFT_COLLECTION_ADDRESS,
      "nft-drop",
    );
    const { contract: tokenContract } = useContract(
      tokenContractAddress,
      "token",
    );
    const { contract, isLoading } = useContract(stakingContractAddress);
    const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
    const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
      address,
    ]);
  
    useEffect(() => {
      if (!contract || !address) return;
  
      async function loadClaimableRewards() {
        const stakeInfo = await contract?.call("getStakeInfo", [address]);
        setClaimableRewards(stakeInfo[1]);
      }
  
      loadClaimableRewards();
    }, [address, contract]);
  
    async function stakeNft(id: string) {
      if (!address) return;
  
      const isApproved = await nftDropContract?.isApproved(
        address,
        stakingContractAddress,
      );
      if (!isApproved) {
        await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
      }
      await contract?.call("stake", [[id]]);
    }
  
    if (isLoading) {
      return (
        <div
          style={{
            fontSize: "25px",
            width: "400px",
            textAlign: "center",
            color: "white",
            minWidth: "100%",
            padding: "10%"
          }}
        >
        <div className="spinner" />
        </div>
      );
    }
  
    return (
      <>
     
  
          {!address ? (
            <ConnectWallet />
          ) : (
            <>
              <div className="tokenGrid">
                <div className="tokenItem">
                  <p className="tokenLable">Rewards Earned</p>
                  <p className="tokenValue">
                    <b>
                      {!claimableRewards
                        ? "Loading..."
                        : ethers.utils.formatUnits(claimableRewards, 18)}
                    </b>{" "}
                    {tokenBalance?.symbol}
                  </p>
                 
                </div>
                <div className="tokenItem">
                  <p className="tokenLable">Current Balance</p>
                  <p className="tokenValue">
                    <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
                  </p>
                </div>
              </div>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "auto", marginTop: "5%"}}>
              <div className="box">
            <Web3Button
              style={{
                backgroundColor: "transparent",
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
                color: "white"

              }}
            action={(contract) => contract.call("claimRewards")}
            contractAddress={stakingContractAddress}
          >
            Claim Rewards
          </Web3Button>
          </div>
              </div>
              
          <div style={{justifyContent: "center", width: "auto", display: "flex", alignItems: "center", padding: "3%"}}>
          <Tabs >
    <TabList>
      <Tab>Staked</Tab>
      <Tab>Unstaked</Tab>
    </TabList>
    <div style={{justifyContent: "center"}}>
    <TabPanel>
    <h1 style={{ textAlign: "center", fontSize: "30px", padding: "1%" }}>Staked</h1>
              <div className="nftBoxGrid">
                {stakedTokens &&
                  stakedTokens[0]?.map((stakedToken: BigNumber) => (
                    <NFTCard
                      tokenId={stakedToken.toNumber()}
                      key={stakedToken.toString()}
                    />
                  ))}
              </div>
              <div style={{height: "50px"}}></div>
    </TabPanel>
    </div>
    <div style={{justifyContent: "center"}}>
    <TabPanel>
    <h1 style={{ textAlign: "center", fontSize: "30px",  padding: "1%" }}>Unstaked</h1>
              <div className="nftBoxGrid">
                {ownedNfts?.map((nft) => (
                  <div key={nft.metadata.id.toString()}>
                    <ThirdwebNftMedia
                      style={{
                        borderRadius: "16px",
                        width: "auto",
                        height: "200px",
                      }}
                      metadata={nft.metadata}
                      className="nftMedia"
                    />
                
                    <h5 style={{ textAlign: "center" }}>#{nft.metadata.id}</h5>
                 
                    <div className="box">
            <Web3Button
              style={{
                backgroundColor: "transparent",
                width: "50px",
                display: "flex",
                alignItems: "center",
                height: "30px",
                fontSize: "14px",
                color: "white"
              }}
                      contractAddress={stakingContractAddress}
                      action={() => stakeNft(nft.metadata.id)}
                    >
                      Stake
                    </Web3Button>
            </div>
                  </div>
                ))}
              </div>
    </TabPanel>
    </div>
  </Tabs>
      </div>
           
            </>
          )}
  
      </>
    );
  };
  
  export default Stake;