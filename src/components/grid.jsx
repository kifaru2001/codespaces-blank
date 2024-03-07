import React from 'react'

import PropTypes from 'prop-types'
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

import './grid.css'
import Slider from './slider'
import { NFT_COLLECTION_ADDRESS, tokenContractAddress, stakingContractAddress } from "../const/contractAddresses"

const Grid = (props) => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    NFT_COLLECTION_ADDRESS,
    "nft-drop",
  );
  const { data: ownedNfts, isLoading } = useOwnedNFTs(nftDropContract, address);
  return (
    <div className={`grid-container ${props.rootClassName} `}>
      <div className="grid-container1">
        <div className="grid-container2">
          <p className="">Mint Drop</p>
          <p style={{fontSize: "14px", fontStyle: "italic", fontWeight: "400"}}>  Claim prices will increased by 0.1 after 50 whales are claimed until launchpad completes</p>
          <Slider />
        </div>
        <div className="grid-container3">
          <p className="">Collection</p>
          {isLoading ? (
            <>
            <div className='spinner' />
            </>
          ) : (
            <div style={{maxWidth: "700px", position: "absolute", height: "330", overflowY: "scroll"}}>
             <div className="nftBoxGrid">
                {ownedNfts?.map((nft) => (
                  <div key={nft.metadata.id.toString()}>
                    <ThirdwebNftMedia
                      style={{
                        borderRadius: "16px",
                        width: "auto",
                        height: "150px",
                      }}
                      metadata={nft.metadata}
                      className="nftMedia"
                    />
                
                    <h5 style={{ textAlign: "center" }}>#{nft.metadata.id}</h5>
                  </div>
                ))}
              </div>
              </div>
          )}
         
        </div>
      </div>
    </div>
  )
}

Grid.defaultProps = {
  rootClassName: '',
  heading: 'Launchpad',
  heading1: 'Heading',
}

Grid.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default Grid
