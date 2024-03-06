import {
  ThirdwebNftMedia,
  useContract,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import React from "react";      
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../const/contractAddresses";
import Skeleton from "./Skeleton/Skeleton";
import "./NFT.css";
import truncateEthAddress from "truncate-eth-address";
import { Tooltip } from "web3uikit";
import { Blockie } from "web3uikit";


type Props = {
  nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
  const { contract: marketplace, isLoading: loadingContract } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3",
  );

  // 1. Load if the NFT is for direct listing
  const { data: directListing, isLoading: loadingDirect } =
    useValidDirectListings(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS,
      tokenId: nft.metadata.id,
    });

  // 2. Load if the NFT is for auction
  const { data: auctionListing, isLoading: loadingAuction } =
    useValidEnglishAuctions(marketplace, {
      tokenContract: NFT_COLLECTION_ADDRESS,
      tokenId: nft.metadata.id,
    });
  const owner = nft.owner as string;

  return (
    <>
      <ThirdwebNftMedia metadata={nft.metadata} style={{width: "auto", height: "auto", borderRadius: "12px", overflow: "hidden", padding: "3%"}} />

      <p className="nftName">
      <Blockie seed={owner} scale={2} />    {nft.metadata.id}: {truncateEthAddress(owner)}
      </p>
      <div className="priceContainer">
        {loadingContract || loadingDirect || loadingAuction ? (
          <Skeleton width="100%" height="30px" />
        ) : directListing && directListing[0] ? (
          <div className="nftPriceContainer">
            <div>
            <p className="nftPriceLabel">Price</p>
              <p
                className="nftPriceValue">
                {`${directListing[0]?.currencyValuePerToken.displayValue}
            ${directListing[0]?.currencyValuePerToken.symbol}`} <img src="/core.png" alt="" width={20} height={20}/>


              </p>
			  <div>

			  </div>

            </div>
          </div>
        ) : auctionListing && auctionListing[0] ? (
          <div className="nftPriceContainer">
            <div>
              <p
                className="nftPriceLabel"
        
              >
                Minimum Bid <img src="/core.png" alt="" width={20} height={20}/>
              </p>
              <p
                className="nftPriceValue1"
              
              >
                {`${auctionListing[0]?.minimumBidCurrencyValue.displayValue}
            ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}
              </p>
            </div>
          </div>
        ) : (
          <div className="nftPriceContainer">
            <div>
              <p className="nftPriceLabel">Price</p>
              <p
                className="nftPriceValue">
                unListed
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}