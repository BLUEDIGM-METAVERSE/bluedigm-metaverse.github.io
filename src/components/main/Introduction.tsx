import React from 'react'
import Image from '../../components/common/Image';

const Introduction: React.FC = () => {
    return (
        <>
            <h2 className="visually-hidden">우리팀의 이야기를 시작해 볼게요</h2>
            <div className="say">우리는 자유롭게 의견을 나누고 수평적이며 다양성을 인정하고 서로 존중하며, 모두의 능력이 최대한 발휘되도록 책임을 다하는 팀문화와 최상의 환경을 조성합니다.우리는 자유롭게 의견을 나누고 수평적이며 다양성을 인정하고 서로 존중하며, 모두의 능력이 최대한 발휘되도록 책임을 다하는 팀문화와 최상의 환경을 조성합니다.</div>
            <div className="img-hand"><Image path="/images/img-hand.webp" alt="손바닥이미지" /></div>
            <div className="bg"></div>
        </>
    )
  }
  
  export default Introduction