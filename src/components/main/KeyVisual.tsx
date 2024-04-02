import React from 'react'
import Image from '../../components/common/Image';

const KeyVisual: React.FC = () => {
    return (
        <>
            <h2 className="visually-hidden">가치를 만들어요</h2>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-6 col-lg-6 m-slogan">가치를<br />만들어요</div>
                    <div className="col-sm-4 col-md-6 col-lg-6 m-photo">
                        <img src="https://pbs.twimg.com/media/FYq--YZVUAE_0bj?format=jpg&name=large" alt="" />
                    </div>
                </div>
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