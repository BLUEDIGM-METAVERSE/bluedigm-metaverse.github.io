import React from 'react'
import Image from '../../components/common/Image';

const Bx: React.FC = () => {
    return (
        <>
            <h2 className="visually-hidden">BI 소개</h2>
            <div className="container">
                <strong>함께 성장하고 개성 넘치는 우리다움</strong>
                <dl className="row">
                    <dt className="col-sm-4 col-md-3 col-lg-3">Overview</dt>
                    <dd className="col-sm-4 col-md-9 col-lg-9">우리는 다양한 직군과 20대에서 50대까지 10명 이상의 매우 개성 넘치는 사람들로 이루어져 있어요~<br />그래서 우리만의 ‘우리다움’을 정립이 필요하다고 생각이 들었어요.</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-4 col-md-3 col-lg-3">Brand Strategy</dt>
                    <dd className="col-sm-4 col-md-9 col-lg-9">우리를 브랜드화한다는 것은 ‘우리다움’을 정의하는 것에서부터 시작해야하기에 개성이 강하고 다양한 우리의 고유 본질을 파악하여 방향성을 정의한 후, 이에 따른 디자인 원칙과 에센스를 도출해야 한다고 생각하였어요.</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-4 col-md-3 col-lg-3">Brand Essence</dt>
                    <dd className="col-sm-4 col-md-9 col-lg-9">우리는 항상 시끌벅적하고 의견을 나누기를 좋아하며 일도 노는 것도 최선을 다해서 즐기려고 하죠~<br />그리고 우리가 먼 훗날, 지금을 추억했을 때 고생하며 일했던 기억보다 즐거운 시간을 보내고 함께 성장했던 기억을 떠올렸으면 좋겠어요.<br />이런것들이 ‘함께 성장하는 좋은 사람들'이라는 우리의 고유 본질을 만들어요.</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-4 col-md-3 col-lg-3">Brand Definition</dt>
                    <dd className="col-sm-4 col-md-9 col-lg-9">우리는 다양한 개성이 모여서 하나의 그룹이 되고 함께 성장해나가는 사람이에요.<br />그래서 각자의 개성이 모여 뭉치게 되면 결국 둥근 형태가 돼 듯 우리를 ‘원'으로 정의할 수 있어요.<p><Image path="/images/Frame 157.png" alt="" /></p></dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-4 col-md-3 col-lg-3">Brand Core Value</dt>
                    <dd className="col-sm-4 col-md-9 col-lg-9">따라서 우리를 즐거움, 화합 그리고 성장이라는 단어로 지칭할 수 있어요.<p><Image path="/images/Frame 159.png" alt="" /></p></dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-4 col-md-3 col-lg-3">Brand Design Principle</dt>
                    <dd className="col-sm-4 col-md-9 col-lg-9">
                        <ul className="bdp">
                            <li>룰루랄라 😚<br />즐거움의 메타포<br />WAVE<p><Image path="/images/Frame 168.png" alt="" /></p></li>
                            <li>손에 손잡고 🫶🏻<br />화합의 메타포<br />CIRCLE<p><Image path="/images/Ellipse 47.png" alt="" /></p></li>
                            <li>점프 점프 🚀<br />성장의 메타포<br />EMBOSS<p><Image path="/images/Group 59.png" alt="" /></p></li>
                        </ul>
                    </dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-4 col-md-3 col-lg-3">Color System</dt>
                    <dd className="col-sm-4 col-md-9 col-lg-9">다양한 개성이 모였으니 보색을 분할하여 포인트 컬러로 사용하였고<br />모두가 모여 하나가 되면 결국 Black이 되니까 메인 컬러는 Black으로 사용해요.<p><Image path="/images/Group 96.png" alt="" /></p></dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-4 col-md-3 col-lg-3">Logo System</dt>
                    <dd className="col-sm-4 col-md-9 col-lg-9">우리의 디자인 원칙인 둥글고 입체적인 메타포를 바탕으로 둥글고 굵은 글씨로 만들었으며<br />현실에 안주하지 않고 성장하기 위해 매일매일 한단계씩 나아가는 모습을 입체적으로 표현하여 우리다운 로고를 만들었어요.<p><Image path="/images/logo.svg" alt="" /></p><p><Image path="/images/symbol.svg" alt="" /></p></dd>
                </dl>
            </div>
        </>
    )
  }
  
  export default Bx