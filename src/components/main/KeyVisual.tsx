import React from 'react'
import Image from '../../components/common/Image';

const KeyVisual: React.FC = () => {
    return (
      <>
        <h2 className="visually-hidden">가치를 만들어요</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-6 col-lg-6 m-slogan">
              <strong>가치를<br />만들어요</strong>
              <p><span>&nbsp;자기 계발을 바탕으로 원활한 협업과 가치를 만들어내며&nbsp;<br />&nbsp;어떠한 경험이라도 이는 곧 팀으로서 성장해 나갑니다.&nbsp;</span>
              </p>
            </div>
            <div className="col-sm-4 col-md-6 col-lg-6 m-photo">
              <Image path="/images/img_m1.webp" alt="" />
            </div>
          </div>
          <div className="main-slogan">Make a Value</div>
        </div>
        <div className="bg-keyvisual"></div>
        <div className="img-gray">
          <Image path="/images/img_gray.webp" alt="" />
        </div>
        <div className="badge-culture">
          <Image path="/images/badge-culture.svg" alt="문화" />
        </div>
        <div className="badge-fun">
          <Image path="/images/badge-fun.svg" alt="재미" />
        </div>
        <div className="badge-teamwork">
          <Image path="/images/badge-teamwork.svg" alt="팀워크" />
        </div>
        <div className="object-wave">
          <Image path="/images/wave.svg" alt="물결 오브젝트" />
        </div>
        <div className="object-wave2">
          <Image path="/images/wave.svg" alt="물결 오브젝트" />
        </div>
        <div className="circle-line"></div>
        <div className="circle-line2"></div>
        <div className="circle-g"></div>
        <div className="circle-v"></div>
      </>
    )
}

export default KeyVisual