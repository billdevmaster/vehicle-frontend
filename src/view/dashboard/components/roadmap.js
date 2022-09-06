import React from 'react';
import { Container, Row } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {RoadMapStyle} from '../../../style';
import KGImage from '../../../assets/images/KG.png'

const RoadMap = () => {
  return (
    <>
      <RoadMapStyle>
        <Container className="special">
          <Row className="text-white">
          <h2>🍀 Why should you want to be a KRYPTOGANGSTER? </h2>
          <p>🔥 Every Gangster has unique DNA which will be used for breeding new gangsters.</p>

          <p>🔥 KG Holders can stake their NFT and earn $kilo as a reward - unlimited money making opportunity right here.</p>

          <p>🔥 KG Holders will become part or our unique royalty based reward system - owners will get rewards every time their NFT is used for merchandise, part of a cartoon series, as game character and many other licensing opporutnies.</p>

          <p>🔥 $Kilo currency is  part of our ecosystem. Now on presale!</p>

          <p>🔥 @kryptogangsters KYC w/ @AssureDefi is APPROVED <br/>KG is committed to the safety & security of their investors & believe this to be a hugely  positive step for the community.</p>
          </Row>
        </Container>
        <div id="roadmap">
          <h1 className="text-white">ROADMAP</h1>
          <VerticalTimeline lineColor="white">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#16a00f' }}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 1</h1>
              <p style={{ fontSize: 22 }}>
                Waste management business<br/>
                -Design first batch of Kryptogangster NFTs<br/>
                -Start of our social media channels (IG, TG, FB, Twitter, Discord)<br/>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#16a00f'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 2</h1>
              <p style={{ fontSize: 22 }}>
              Shakedown<br/>
              - Start Kilo Private Pre-Sale<br/>
              - Start Kryptogangsters NFT Sale<br/>
              - Bribe Law enforcement<br/>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#16a00f'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 3</h1>
              <p style={{ fontSize: 22 }}>
              Initiation<br/>
            - Finalise website<br/>
            - Finish White Paper<br/>
            - Finalise 10k Limited Edition Kryptogangsters<br/>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: 'red' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 4</h1>
              <p style={{ fontSize: 22 }}>
              Cosa Nostra<br/>
              - Mint 10k Limited Edition<br/>
              - Open our first online casino<br/>
              - 5k $Kilo airdrop per NFT<br/>
              - Exclusive deals with our partners (IPTV)<br/>
              - Announce exclusive partnerships<br/>
              - Announce further plans<br/>
              - Roll out heavy influencer marketing, host AMAs etc<br/>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 5</h1>
              <p style={{ fontSize: 22 }}>
              Build Empire<br/>
              - Launch Kilo on CEX<br/>
              - Open the "Stash House"; our KG DAO<br/>
              - Open Breeding of our gangsters to create supergangsters<br/>
              - Open more online casinos to create more demand for $Kilo<br/>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 6</h1>
              <p style={{ fontSize: 22 }}>
              Take Over<br/>
              - Roll out next set of Limited NFT Batch<br/>
              - Roll out the Royalty based reward system - Your gangster will earn you rewards on merchandise, apparel, valuables etc<br/>
              - Open Staking for our NFTs and $Kilo<br/>
              - Set up Crypto Ecosystem<br/>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'transparent', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid  transparent' }}
              icon={<img src={KGImage} style={{ width: '50px' }} />}
              iconStyle={{ background: '#0a0a0a', color: '#fff' }}
            >
              <h1 className="vertical-timeline-element-title" style={{ fontFamily: 'Akira' }}>Phase 7</h1>
              <p style={{ fontSize: 22 }}>
              Plead Innocent<br/>
            - Finalise NFT Gamification Development<br/>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </RoadMapStyle>
    </>
  );
}

export default RoadMap;