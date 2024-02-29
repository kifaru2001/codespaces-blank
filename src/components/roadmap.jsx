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
     Our launchpad of 10,000 Whales was deployed on YoungParrot NFT Marketplace. NFT owners of this collection have access to major utilities such as
     WHLS staking, Discord Roles, Discord Chatroom and Airdrops eligibility. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray"  }}
    className="vertical-timeline-element--work"
    date="2023 - September"
    iconStyle={{ background: 'black', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--work"
    date="2023 - October"
    iconStyle={{ background: 'black', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--work"
    date="2023 - Novermber"
    iconStyle={{ background: 'black', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--education"
    date="2023 - December"
    iconStyle={{ background: 'white', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--education"
    date="2024 - January"
    iconStyle={{ background: 'white', color: '#fff' }}
  
  
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
    className="vertical-timeline-element--education"
    date="2024 - February"
    iconStyle={{ background: 'white', color: '#fff' }}
  
  
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   contentStyle={{ background: 'rgb(0, 0, 0, 0.5)', color: '#fff', borderRadius: "16px", backdropFilter: "blur(10px)", border: "solid 1px gray" }}
   iconStyle={{ background: 'white', color: '#fff' }}
  
    
  />
</VerticalTimeline>
<Nav />
        </div>
        </>
    )
}