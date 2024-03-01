import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ShuffleText from 'react-shuffle-text';
import Menu from './Trans/menu';
import "../components/Trans/hero.scss" 
import Nav from './nav3';


export default function Roadmap() {
    return (
      <>
        <div className='container1'>
        <Menu />
        <div class="blob-c">
      <div class="shape-blob"></div>
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
      <div class="shape-blob three"></div>
        <div class="shape-blob four"></div>
        <div class="shape-blob five"></div>
        <div class="shape-blob six"></div>
      </div>
          <h4 style={{fontSize: "30px", color: "white", margin: "2%", fontWeight: "bolder", fontFamily: "monospace", textAlign: "center", marginBottom: "10%"}} >
  
  <ShuffleText charIncInterval="100" charFrameTime="70" charFrames="50"  content="Whales Roadmap" styles={{color: "white"}} />
  
  </h4>
<VerticalTimeline>
  
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--work"
   
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 - July"
    iconStyle={{ background: 'white', color: '#fff' }}
  
   
  >
    <h3 className="vertical-timeline-element-title">Launch Phase</h3>
    <h4 className="vertical-timeline-element-subtitle">10K Collectibles</h4>
    <p>
    10K Whale NFTs were launched on YoungParrot with verying prices in a Public Mint. All 10k were uniqe and rare collectibles to act as PFPs for members. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray"  }}
    className="vertical-timeline-element--work"
    date="2023 - September"
    iconStyle={{ background: 'black', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Staking Pools</h3>
    <h4 className="vertical-timeline-element-subtitle">NFT owners of this 10K collectibles can stake NFT and earn rewards inform of Whales Token, a bitcoin-like EVM token on CORE to act as ecosystem protocol and governance</h4>
    <p>
    Whales Token can be delegated in BWYCDAO to make proposals or vote for proposals. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--work"
    date="2023 - October"
    iconStyle={{ background: 'black', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Discord Roles</h3>
    <h4 className="vertical-timeline-element-subtitle">We crafted a way for NFT owners of this 10k collectibles to gain acces to certain channels and roles by verifying their wallets.</h4>
    <p>
Utility mechanism
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--work"
    date="2023 - Novermber"
    iconStyle={{ background: 'black', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Whale Cards</h3>
    <h4 className="vertical-timeline-element-subtitle">We launchd a unique colletibles of whaleverse location, this cards can be staked, traded or grant membership in BWYCDAO</h4>
    <p>
   Whalescards earns users more rewards than other NFT in the ecosystem, they unlock so many things, try to find one.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--education"
    date="2023 - December"
    iconStyle={{ background: 'white', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">RareBay</h3>
    <h4 className="vertical-timeline-element-subtitle">A Multipurpose DEX for Whales, to interact with all utility in one place seamlessly from anywhere anytime.</h4>
    <p>
      RareBay is a Thirdparty WEB3 space Affilieted with with Whales, that plans to launch whales utility while in their Beta Version
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--education"
    date="2024 - January"
    iconStyle={{ background: 'white', color: '#fff' }}
  
  
  >
    <h3 className="vertical-timeline-element-title">RareBay Testnet</h3>
    <h4 className="vertical-timeline-element-subtitle">Whales team Launched a testnet version of NFT collection on RareBay Testenet for members to interact without having to use real world value</h4>
    <p>
     Testnet version is useful for new users and developers.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--education"
    date="2024 - February"
    iconStyle={{ background: 'white', color: '#fff' }}
  
  
  >
    <h3 className="vertical-timeline-element-title">BoredWhales Season 2</h3>
    <h4 className="vertical-timeline-element-subtitle">Whales launched a Season 2 of 10k Collectibes but with a slight upgrade to metadata and characters.</h4>
    <p>
      Staked rewards from Season 2 NFTs is locked until second halving
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
<Nav />
        </div>
        </>
    )
}