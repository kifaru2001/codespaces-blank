import {
    ThirdwebNftMedia,
    useContract,
    useNFT,
    Web3Button,
  } from "@thirdweb-dev/react";
  import type { FC } from "react";
  import { NFT_COLLECTION_ADDRESS, stakingContractAddress } from "../const/contractAddresses";
  import "./NFT.css";

  interface NFTCardProps {
    tokenId: number;
  }
  
  const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS, "nft-drop");
    const { data: nft } = useNFT(contract, tokenId);
  
    return (
      <>
        {nft && (
          <div style={{alignItems: "center", gap: "10px"}}>
            {nft.metadata && (
              <ThirdwebNftMedia
                style={{ borderRadius: "8px", width: "auto", height: "150px", display: "flex", alignItems: "center" }}
                metadata={nft.metadata}
                className="nftMedia"
              />
            )}
      
  
            <h5 style={{ textAlign: "center" }}>#{nft.metadata.id}</h5>
      <div className="box">
            <Web3Button
              style={{
                backgroundColor: "transparent",
                width: "auto",
                display: "flex",
                alignItems: "center",
                height: "auto",
                fontSize: "14px",
                color: "white"
              }}
              action={(contract) =>
                contract?.call("withdraw", [[nft.metadata.id]])
              }
              contractAddress={stakingContractAddress}
            >
              WITHDRAW
            </Web3Button>
            </div>
          </div>
        )}
      </>
    );
  };
  export default NFTCard;