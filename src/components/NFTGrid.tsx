import type { NFT as NFTType } from "@thirdweb-dev/sdk";

import React from "react";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import Skeleton from "./Skeleton/Skeleton";
import NFT from "./NFT";

type Props = {
  isLoading: boolean;
  data: NFTType[] | undefined;
  overrideOnclickBehavior?: (nft: NFTType) => void;
  emptyText?: string;
};

export default function NFTGrid({
  isLoading,
  data,
  overrideOnclickBehavior,
  emptyText = "No NFTs found for this collection.",
}: Props) {
  return (
    <div className="nftGridContainer">
      {isLoading ? (
        [].map((_, index) => (
          <div key={index} className="nftContainer">
            <Skeleton key={index} width={"100%"} height="312px" />
          </div>
        ))
      ) : data && data.length > 0 ? (
        data.map((nft) =>
          !overrideOnclickBehavior ? (
   
              <NFT nft={nft} />
         
          ) : (
            <div
              key={nft.metadata.id}
              className="nftContainer"
              onClick={() => overrideOnclickBehavior(nft)}
            >
              <NFT nft={nft} />
            </div>
          )
        )
      ) : (
        <p>{emptyText}</p>
      )}
    </div>
  );
}