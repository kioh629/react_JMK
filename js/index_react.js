function Compo(){
    return(
        <>
            <Header />
            <Wrapcomponent />
            <Footer />
        </>
    )
}

// Header
function Header() {
    return(
        <header>
            <div id="header_wrap">
                <h1><a href="#"><img src="img/toplogo.png" alt="메인로고"></img></a></h1>
                <ul id="top_menu">
                    <li><a href="#brand">BRAND</a></li>
                    <li><a href="#society">SOCIETY</a></li>
                    <li><a href="#channel">CHANNEL</a></li>
                    <li><a href="#store">STORE</a></li>
                    <li><a href="#magazine">MAGAZINE</a></li>
                </ul>    
            </div>
        </header>
    )
}

// main
function Wrapcomponent(){
    return(
        <>
            <Main />
            <Brand />
            <Society />
            <Channel />
            <Store />
            <Magazine />
            <Quick />
        </>
    )
}
function Main(){
    return(
        <section id="main">
            <h1 className="skip">메인페이지</h1>
            <article id="main_text" data-aos="fade-up" data-aos-duration="1200">
                <ul id="title01">
                    <li>NATIONAL GEOGRAPHIC</li>
                    <li>내셔널지오그래픽</li>
                </ul>
                <ul id="catchphrase">
                    <li>ONE STEP TO THE EDGE</li>
                    <li>OF IMPOSSIBLE</li>
                    <li>AND THEN, FURTHER.</li>
                </ul>
                <ul id="main_discription">
                    <li>  내셔널지오그래픽은 지구와 인류 그리고 ‘우리’를 둘러싼 살아있는 이야기를 전합니다.</li>
                    <li>TV 채널, 잡지, 아동 미디어, 여행 및 탐험, 서적, 지도, 소비자 제품, 지역 기반 엔터테인먼트 및 디지털 미디어 등</li>
                    <li>전 세계의 다양한 플랫폼을 통하여 세계 최고의 과학자, 사진작가, 언론인 및 제작자들의 놀라운 이야기를 전달하며 즐거움을 선사하고 있습니다.</li>
                </ul>
            </article>
        </section>
    )
}
function Brand(){
    return(
        <section id="brand">
            <h1 className="skip">브랜드 페이지</h1>
            <div id="brand_wrap">
                <section id="brand_left" data-aos="fade-up"  data-aos-duration="1200">
                    <ul id="b_society">
                        <li className="category">Society</li>
                    </ul>
                    <ul id="b_channel">
                        <li className="category">Channel</li>
                        <li className="sub_category">Animal & Nature / Documentary</li>
                    </ul>
                    <ul id="b_store">
                        <li className="category">Store</li>
                        <li className="sub_category">Apparel / Mobile / PC / Cam</li>
                    </ul>
                    <ul id="b_magazine">
                        <li className="category">Magazine</li>
                        <li className="sub_category">Kids / Traveler</li>
                    </ul>
                </section>
                <article id="brand_right" data-aos="fade-up"  data-aos-duration="1200">
                    <h3 className="brand_name">BRAND</h3>
                    <ul id="sns">
                        <li><a href="https://www.instagram.com/natgeokorea/" target="_blank"><i className="xi-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/user/natgeokorea/videos" target="_blank"><i className="xi-youtube-play"></i></a></li>
                        <li><a href="https://www.facebook.com/NatGeoKorea/" target="_blank"><i className="xi-facebook"></i></a></li>
                    </ul>
                    <ul id="brand_discription">
                        <li>내셔널지오그래픽은 모든 수익의 27%는
                            <br/>내셔널지오그래픽 협회의 과학 및 탐험 프로젝트에 지원됩니다.</li>
                        <li>TV를 시청하고, 매거진을 구독하고, 제품을 구입하는 것은  단순한 소비를 넘어
                            <br/>내셔널지오그래픽의 지구와 인류를 위한 여정을 함께하는 것 입니다.</li>
                    </ul>
                </article>
            </div>
        </section>
            
    )
}

function Society(){
    return(
        <section id="society">
            <div id="soctop_wrap"  data-aos="fade-up"  data-aos-duration="1200">
                <div id="soctop_left">
                    <div className="bic_logo"></div>
                    <ul>
                        <li className="sec_title">SOCIETY</li>
                        <li className="sec_text ">내셔널지오그래픽협회는 탐험과 환경 보호를 통해 지구와 인류에 공헌하고 있는 세계 최대의 비영리 단체입니다.</li>
                        <li className="sec_text">매년 전세계의 수많은 연구와 환경 보호 프로젝트를 지원하고 있으며,
                            <br/>다방면의 교육 캠페인 등을 통해 미래 세대에게 영감과 비전을 심어주고 있습니다.</li>
                    </ul>
                </div>
                <ul id="soctop_right">
                    <li className="soc_btn1"><a href="https://www.nationalgeographic.org/society/" target="_blank">협회 사이트 바로가기</a></li>
                    <li className="soc_btn2"><a href="https://www.nationalgeographic.org/society/become-a-member/" target="_blank">협회 가입하기</a></li>
                </ul>
            </div>
            <h1 id="pro_title" data-aos="fade-up"  data-aos-duration="1200"><a href="https://www.nationalgeographic.org/society/our-programs/?nav_click" target="_blank">SOCIERY PROGRAMS</a></h1>
            <h3 className="pro_list"  data-aos="fade-right"  data-aos-duration="1200">EXPLORER-LED PROGRAMS</h3>
            <div id="e_pro_wrap" data-aos="fade-right"  data-aos-duration="1200">
            <div id="e_pro">
                <figure>
                    <a href="https://www.nationalgeographic.org/society/our-programs/pristine-seas/" target="_blank"><img src="img/program1.jpg" alt="프로그램1"></img></a>
                    <figcaption className="pro_name">Pristine Seas</figcaption>
                </figure>
                <figure>
                    <a href="https://www.nationalgeographic.org/society/our-programs/wonderlab/" target="_blank"><img src="img/program2.jpg" alt="프로그램2"></img></a>
                    <figcaption className="pro_name">WonderLab</figcaption>
                </figure>
                <figure>
                    <a href="https://www.nationalgeographic.com/environment/topic/perpetual-planet" target="_blank"><img src="img/program3.jpg" alt="프로그램3"></img></a>
                    <figcaption className="pro_name">Perpetual Planet</figcaption>
                </figure>
                <figure>
                    <a href="https://www.nationalgeographic.org/society/our-programs/okavango/" target="_blank"><img src="img/program4.jpg" alt="프로그램4"></img></a>
                    <figcaption className="pro_name">Okavango Wilderness Project</figcaption>
                </figure>
                <figure>
                    <a href="https://www.nationalgeographic.org/society/our-programs/photo-ark/" target="_blank"><img src="img/program5.jpg" alt="프로그램5"></img></a>
                    <figcaption className="pro_name">Photo Ark</figcaption>
                </figure>
                <figure>
                    <a href="https://out-of-eden-walk.nationalgeographic.org/" target="_blank"><img src="img/program6.jpg" alt="프로그램6"></img></a>
                    <figcaption className="pro_name">Out of Eden Walk</figcaption>
                </figure>
                <figure>
                    <a href="https://www.nationalgeographic.org/society/our-programs/photo-camp/" target="_blank"><img src="img/program7.jpg" alt="프로그램7"></img></a>
                    <figcaption className="pro_name">Photo Camp</figcaption>
                </figure>
            </div>
            </div>
            <h3 className="pro_list" data-aos="fade-right"  data-aos-duration="1200">YOUTH PROGRAMS</h3>
            <div id="y_pro_wrap" data-aos="fade-right"  data-aos-duration="1200">
            <div id="y_pro">
                <div>
                    <figure>
                        <a href="https://www.nationalgeographic.org/society/projects/slingshot/" target="_blank"><img src="img/program_y_1.jpg" alt="유스 프로그램1"></img></a>
                        <figcaption className="pro_name">Slingshot</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <a href="https://natgeostudenttravel.org/" target="_blank"><img src="img/program_y_2.jpg" alt="유스 프로그램2"></img></a>
                        <figcaption className="pro_name">Student Travel</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <a href="https://www.paragonone.com/externships/national-geographic-society-the-nature-conservancy-freshwater-and-community-conservation-remote-externship#new-application-form-section" target="_blank"><img src="img/program_y_3.jpg" alt="유스 프로그램3"></img></a>
                        <figcaption className="pro_name">Vertual Externalship</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <a href="https://www.nationalgeographic.org/tickets/explorer-classroom/" target="_blank"><img src="img/program_y_4.jpg" alt="유스 프로그램4"></img></a>
                        <figcaption className="pro_name">Africa Refocused</figcaption>
                    </figure>
                    
                </div>
            </div>
            </div>
        </section>              
    )
}

function Channel(){
    return(
        <section id="channel">
            <div id="chtop" data-aos="fade-up" data-aos-duration="1200">
                <div className="bic_logo"></div>
                <div className="right_of_logo">
                    <ul className="channel_title">
                        <li className="sec_title">CHANNEL</li>
                        <li className="sec_sub">Animal & Nature / Documentary</li>
                    </ul>
                    <ul id="ch_article">
                        <li className="sec_text">내셔널지오그래픽 채널은 1997년 개국하여 현재 전 세계 171개국 45개 언어로 방송되고 있습니다.</li>
                        <li className="sec_text">프로그램을 제작, 방송해 왔으며 현재까지 에미 어워드를 비롯 국제 방송 시상식에서 1,000회가 넘는 수상 경력이 이를 증명하고 있습니다.
                            <br/>(내셔널지오그래픽채널 코리아 2004년 2월 개국)
                        </li>
                    </ul>  
                </div>
            </div>
            <section id="show">
                <ul id="show_top" data-aos="fade-left" data-aos-duration="1200">
                    <li id="show_title">SHOWS</li>
                    <li className="more"><a href="https://www.natgeokorea.com/disneyplus" target="_blank">MORE</a></li>
                </ul>
                <div id="video" data-aos="fade-left" data-aos-duration="1200">
                    <figure>
                        <img id="main_video" src="img/show1.jpg" alt="선택된 영상의 확대된 이미지"></img>
                        <img src="img/toplogo.png" alt="내셔널지오그래픽 로고"></img>
                        <div id="watch_btn"><a href="https://www.disneyplus.com/ko-kr/" target="_blank">WATHCH <i className="xi-long-arrow-right"></i></a></div>
                    </figure>
                    <aside>
                        <ul id="cap_title">
                            <li id="cap_sub">ANIMAL/NATURE</li>
                            <li id="cap_main">유럽의 숨겨진 비밀</li>
                            <li id="cap_dis">자연의 아름다움과 희귀한 야생동물의 발견</li>
                        </ul>
                        <ul className="cap_text" id="cap_syn">
                            <li className="cap_text_title">SYNOPSIS</li>
                            <li className="cap_text_text" id="data_syn">뛰어난 자연의 아름다움과 놀랍도록 풍부한 야생동물을 보유하고 있는 유럽의 4개국을 선정해 보여준다.</li>
                        </ul>
                        <ul className="cap_text" id="cap_epi">
                            <li className="cap_text_title">EPISODE</li>
                            <li className="cap_text_text" id="data_epi">4부</li>
                        </ul>
                        <ul className="cap_text">
                            <li className="cap_text_title">WHERE TO WATCH</li>
                            <li id="disneylink" className="cap_text_text"><a href="https://www.disneyplus.com/ko-kr/"  target="_blank">Disney +</a></li>
                        </ul>
                    </aside>
                </div>
                <div id="thumb" data-aos="fade-left" data-aos-duration="1200">
                    <figure className="selected"><img src="img/show1.jpg" alt="영상1 썸네일" data-sub="ANIMAL/NATURE" data-title="유럽의 숨겨진 비밀" data-dis="자연의 아름다움과 희귀한 야생동물의 발견" data-syn="뛰어난 자연의 아름다움과 놀랍도록 풍부한 야생동물을 보유하고 있는 유럽의 4개국을 선정해 보여준다." data-epi="4부"></img></figure>
                    <figure><img src="img/show2.jpg" alt="영상2 썸네일" data-sub="DOCUMENTARY" data-title="하늘에서 본 프라이드" data-dis="색다른 시각으로 바라본 축제의 현장" data-syn="공중에서 바라보는 색다른 앵글로 세계 최대 규모의 성 소수자 문화 축제를 독점으로 취재한다. 이처럼 화려한 색채가 돋보이는 희망의 축제를 성공으로 이끈 비결은 무엇일까? 역사에 남을 만한 활동들과 과감한 창의력, 뛰어난 운영 방식을 공개한다." data-epi="1부"></img></figure>
                    <figure><img src="img/show3.jpg" alt="영상3 썸네일" data-sub="ANIMAL/NATURE" data-title="시저 밀란 좋은 인간과 더 나은 개" data-dis="시저 밀란의 반려동물 돌봄 프로젝트" data-syn="개들의 재활을 돕고, 반려동물을 기르는 주인들을 훈련시키는 시저가 돌아왔다. 개 보호소가 텅 비어가고, 반려견 입양이 최고 수준을 기록하고 있는 지금의 미국에는 그 어느때보다 시저가 필요하다. 시저 밀란은 역대 가장 어려운 동물 친구들을 만날 준비를 마쳤다." data-epi="12부"></img></figure>
                    <figure><img src="img/show4.jpg" alt="영상4 썸네일" data-sub="CULTURE" data-title="땅끝 레스토랑" data-dis="유명 세프 크리스틴 키시의 특별한 미식 여행 속으로" data-syn="식당을 성공적으로 운영하려면 집념과 의지가 필요하다. 그리고 재료를 구하기 어려운 깊고 외진 곳에 식당을 차린 사람들은 그 차원이 다르다. 크리스틴 키시는 별난 식당 주인들을 만나기 위해 먼 곳까지 그들을 찾아 나선다. 그리고 지구상 가장 외딴곳에서 인상 깊고 맛있는 음식을 만들기 위해 그들이 겪은 엄청난 난관들과 극복 방법을 알아본다." data-epi="4부"></img></figure>
                    <figure><img src="img/show5.jpg" alt="영상5 썸네일" data-sub="ADVENTURE" data-title="버티 그레고리의 애니멀 클로즈 업" data-dis="야생동물의 특별한 순간을 가장 가까이서 포착하는 젊은 탐험가의 모험" data-syn="버티 그레고리가 다시 돌아왔다. 이번 모험은 남극 대륙부터 아프리카, 남미 그리고 아시아까지 지구의 장관을 이루는 곳으로 우리를 안내하며, 전 세계의 특별한 동물들을 찾아 지금까지 본 적 없던 이들의 일상을 포착한다." data-epi="1부"></img></figure>
                    <figure><img src="img/show6.jpg" alt="영상6 썸네일" data-sub="HISTORY" data-title="9/11: 그 날의 기록" data-dis="9/11 사건 속 영웅들과 생존자들이 전하는 그날의 이야기" data-syn="<9/11: 그 날의 기록>은 9/11 사건을 겪은 목격자, 영웅, 그리고 생존자들의 이야기를 통해 당시의 이야기를 상세하게 들려준다. 9/11 테러 20주년을 추모하기 위해 9/11 기념관과 협력하여 제작된 이 시리즈는 북쪽 타워에 충돌했던 비행기부터 잔해 속에서 구조된 마지막 생존자들까지, 비극적이었던 그날의 이야기를 유례없이 자세히 보여준다." data-epi="6부"></img></figure>
                    <figure><img src="img/show7.jpg" alt="영상7 썸네일" data-sub="SOCIETY" data-title="빙판길 구조대" data-dis="얼음으로 뒤덮인 위험천만한 노르웨이 산길에서 활동하는 구조 전문 트럭 기사들의 이야기" data-syn="매년 겨울, 노르웨이 산길은 눈보라로 인해 가장 위험한 도로로 돌변한다. 이로 인해 중요한 무역로가 막히고, 극단적인 경우 치명적인 사고가 발생하기도 한다. 구조 전문 트럭 기사들로 구성된 ‘빙판길 구조대’는 창의적인 발상과 재치, 용기를 발판으로 재난을 막고 사람들의 목숨을 구한다" data-epi="8부"></img></figure>                    
                    <figure><img src="img/show8.jpg" alt="영상8 썸네일" data-sub="SOCIETY" data-title="공항 경비대" data-dis="세계 공항에서 벌어지는 무수한 사건사고를 해결하기 위한 공항 경비대의 고군분투" data-syn="’공항 경비대’는 세계 각국의 대규모 공항에서 발생하는 수많은 사건사고들을 조명하고, 범죄로부터 공항을 보호하기 위해 쉼 없이 돌아가는 법 집행 당국과 세관의 연중무휴 치열한 업무 현장을 기록한다." data-epi="8부"></img></figure>
                </div>
            </section>
            <figure id="ch_logos" data-aos="fade-up" data-aos-duration="1200">
                <img src="img/toplogo.png" alt="내셔널지오그래픽 로고"></img>
                <img src="img/wildlogo.png" alt="내셔널지오그래픽 와일드 로고"></img>
                <img src="img/peoplelogo.png" alt="내셔널지오그래픽 피플 로고"></img>                
            </figure>
            <h3 id="disney_info" data-aos="fade-up" data-aos-duration="1200">해당 프로그램은 <a href="https://www.disneyplus.com/ko-kr/"  target="_blank">Disney + </a>에서 감상할 수 있습니다.</h3>
        </section>
    )
}

function Store(){
    return(
        <section id="store">
            <div id="store_top" data-aos="fade-up" data-aos-duration="1200">
                <div className="bic_logo"></div>
                <div className="right_of_logo">
                    <ul className="store_title">
                        <li className="sec_title">STORE</li>
                        <li className="sec_sub">Apparel / PC / Mobile / Cam</li>
                    </ul>
                    <ul id="store_article">
                        <li className="sec_text ">
                            내셔널지오그래픽 어패럴은 지금 이순간에도 지구와 인류를 위한 끊임없는 모험과 탐험을 이어가고 있는
                            <br/> 내셔널지오그래픽 탐험가들과 그들이 이뤄낸 업적을 모티브로 하고 있습니다. 
                        </li>
                        <li className="sec_text">
                            의류, 여행 캐리어, 백팩, 캠핑 및 등산용품 등 700여 가지가 넘는 다양한 제품을 통해 도시와 자연, 일상과 모험을 넘나드는 여러분의 특별한 여정을 함께합니다.
                            <br/>(2016년 3월 한국 론칭, 백화점 포함 전국 64개 오프라인 매장 오픈)
                        </li>
                    </ul>  
                </div>
            </div>
            <section id="s_category" data-aos="fade-right" data-aos-duration="1200">
                <ul id="apparel">
                    <li className="store_name"><a href="https://www.nstationmall.com/natgeo" target="_blank">APPAREL</a></li>
                    <li className="store_caption">2023 WINTER COLLECTION</li>
                </ul>
                <ul id="mobile">
                    <li className="store_name"><a href="https://www.natgeokorea.com/mobileaccessory/" target="_blank">MOBILE</a></li>
                    <li className="store_caption">다채로운 매력의 모바일 악세사리</li>
                </ul>
                <ul id="pc_acc">
                    <li className="store_name"><a href="https://smartstore.naver.com/skinplayer" target="_blank">PC ACCESSARY</a></li>
                    <li className="store_caption">당신이 찾던 편리함의 해답. 내셔널지오그래픽 블루투스 무선 키보드 & 마우스 세트</li>
                </ul>
                <ul id="gimbal">
                    <li className="store_name"><a href="https://natgeocam.com/?utm_source=storebanner" target="_blank">GIMBAL CAM</a></li>
                    <li className="store_caption">흔들림 없는 위대한 기록</li>
                </ul>
            </section>
        </section>
    )
}

function Magazine(){
    return(
        <section id="magazine">
            <div id="magazine_wrap">
            <div id="ng" data-aos="fade-right" data-aos-duration="1200">
                <h3 className="m_category"><a href="https://www.natgeokorea.com/magazine/" target="_blank">NATIONAL GEOGRAPHIC MAGAZINE</a></h3>    
                <div className="m_layout">
                    <ul className="m_top">
                        <li className="date">NOVEMBER 2023</li>
                        <li className="m_title"><a href="https://www.nationalgeographic.co.kr/news.php?mgz_seq=255&aseq=100361" target="_blank">대기를 정화하기 위한 전략</a></li>
                        <li className="staff">
                            <span>글 : 샘 하우 베르호베크 (SAM HOWE VERHOVEK)</span>
                            <span>사진 : 다비데 몬텔레오네 (DAVIDE MONTELEONE)</span>
                        </li>
                    </ul>
                    <ul className="m_mid">
                        <li>과학자들은 해수가 알칼리성 물질에서 이산화탄소를 흡수하는 과정을 살펴보기 위해 노르웨이 연안에 설치한 ‘메소코즘(실험용 저수조)’을 관찰한다.</li>
                        <li>탄소 중립을 달성하는 것만으로는 지구를 구하지 못한다.
                            <br/>인류는 방대한 양의 탄소를 제거해야 한다.이를 위해서는 지금까지 인류가 이룩한 업적과 맞먹는 전 지구적 노력을 기울여야 한다.
                        </li>
                    </ul>
                    <ul className="m_bot">
                        <li className="b_cate_small">NATIONAL GEOGRAPHIC MAGAZINE</li>
                        <li className="m_btn"><a href="https://www.natgeokorea.com/magazine/" target="_blank">매거진 페이지로</a></li>
                    </ul>
                </div>
            </div>
            <div id="magazine_top" data-aos="fade-down" data-aos-duration="1200">
                <div id="logotitle">
                    <div className="bic_logo"></div>
                    <ul>
                        <li className="sec_title">MAGAZINE</li>
                        <li className="sec_sub">NG / TRAVELER / KIDS</li>
                        <li className="sec_text_bold">
                            내셔널지오그래픽 매거진은
                            <br/>현재 전 세계 28개국 23개 언어로
                            <br/>매월 동시 발행되고 있습니다.
                        </li>
                    </ul>
                </div>
                <ul id="top_article">
                    <li className="sec_text">
                        1888년 내셔널지오그래픽 협회의 지리 학술지로 창간되어현재는 세계의 지리뿐만 아니라 과학, 모험, 탐험, 자연, 인류, 문화, 역사, 고고학, 생태, 환경, 우주 등
                        <br/> 다양한 분야를 심도 있게 다루는 세계 최고의 종합 교양지로 인정받고 있습니다.
                    </li>
                    <li className="sec_text">
                        특히 단순한 기록을 넘어 예술적으로도 높게 평가 받는 내셔널지오그래픽의 사진은 전 세계 사진 작가들의 이상이며 독자들에게는 높은 소장가치로 매거진 그 이상의 의미를 갖게 합니다. 
                        <br/> (2,000년 1월 한국판 발행 시작)
                    </li>
                </ul>  
            </div>
            <div id="traveler"data-aos="fade-left" data-aos-duration="1200">
                <h3 className="m_category"><a href="https://www.natgeotraveler.co.kr/" target="_blank">TRAVELER MAGAZINE</a></h3>    
                <div className="m_layout">
                    <ul className="m_top">
                        <li className="date">NOVEMBER 2023</li>
                        <li className="m_title"><a href="https://www.natgeotraveler.co.kr/article.php?type=h&idx=101" target="_blank">Geology & Archaeology</a></li>
                        <li className="staff">
                            <span>글 : 강고니 (KO-NI KANG)</span>
                            <span>사진 : 셔터스탁 (SHUTTERSTOCK)</span>
                        </li>
                    </ul>
                    <ul className="m_mid">
                        <li>구눙물루산의 정글 숲을 뚫고 솟은 웅장한 크기의 피너클.</li>
                        <li>구눙물루 국립공원에서 지구가 만들어낸 예술 작품 속을 거닐고 니아 국립공원에서
                            <br/>인류가 지나온 태고의 시간을 거슬러 올라가다.
                        </li>
                    </ul>
                    <ul className="m_bot">
                        <li className="b_cate_small">TRAVELER MAGAZINE</li>
                        <li className="m_btn"><a href="https://www.natgeotraveler.co.kr/" target="_blank">트래블러 매거진 페이지로</a></li>
                    </ul>
                </div>
            </div>
            <div id="kids" data-aos="fade-right" data-aos-duration="1200">
                <h3 className="m_category"><a href="https://www.natgeokorea.com/kidsmagazine/" target="_blank">KIDS MAGAZINE</a></h3>    
                <div className="m_layout">
                    <ul className="m_top">
                        <li className="date">NOVEMBER 2023</li>
                        <li className="m_title"><a href="https://www.nationalgeographic.co.kr/ngkids/news.php?mgz_seq=14&aseq=69" target="_blank">눈토끼의 기상천외한 겨울나기</a></li>
                        <li className="staff">
                            <span>글 : 제드 와이너 (JED WEINER)</span>
                            <span>사진 :나탈리아 콜레고바 (NATALIA COLLEGOVA)</span>
                        </li>
                    </ul>
                    <ul className="m_mid">
                        <li>혹독한 환경에서 살아남기 위한 눈토끼의 다섯 가지 특별한 생존 전략</li>
                        <li>“눈토끼는 매서운 추위에 익숙해요. 차가운 날씨에 적합하게 진화했으니까요.” 
                            <br/>야생동물 학자 칼로스 베드슨이 설명해요.
                            <br/>이 토끼가 눈 속에서 살아남는 다섯 가지 방법을 함께 살펴볼까요?
                        </li>
                    </ul>
                    <ul className="m_bot">
                        <li className="b_cate_small">KIDS MAGAZINE</li>
                        <li className="m_btn"><a href="https://www.natgeokorea.com/kidsmagazine/" target="_blank">키즈 매거진 페이지로</a></li>
                    </ul>
                </div>
            </div>
            <div id="magazine_info" data-aos="fade-up" data-aos-duration="1200">
                <ul>
                    <li>내셔널지오그래픽 매거진 / 키즈 매거진 / 트래블러 매거진은
                        <br/> 정기 구독 서비스를 진행 중입니다.
                    </li>
                    <li>구독 서비스 가입은 각 홈페이지에서 이용 가능합니다.</li>
                </ul>
            </div>
            </div>
        </section>
    )
}

function Quick(){
    return(
        <section id="quickmenu">
            <ul>
                <li><a href="#">TOP</a></li>
                <li><a href="#brand">BRAND</a></li>
                <li><a href="#society">SOCIETY</a></li>
                <li><a href="#channel">CHANNEL</a></li>
                <li><a href="#store">STORE</a></li>
                <li><a href="#magazine">MAGAZINE</a></li>
            </ul>
        </section>
    )
}

// footer
function Footer(){
    return(
        <footer>
            <section id="foot_wrap">
            <div id="f_logo"><img src="img/toplogo.png" alt="로고"></img></div>    
            <nav>
                <ul>
                    <li><a href="#brand">BRAND</a></li>
                    <li><a href="#society">SOCIETY</a></li>
                    <li><a href="#channel">CHANNEL</a></li>
                    <li><a href="#store">STORE</a></li>
                    <li><a href="#magazine">MAGAZINE</a></li>
                    <li><a href="#">개인정보취급방침</a></li>
                    <li><a href="#">이용약관</a></li>
                </ul>
            </nav>
            <ul id="f_sns">
                <li><a href="https://www.instagram.com/natgeokorea/" target="_blank"><i className="xi-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/user/natgeokorea/videos" target="_blank"><i className="xi-youtube-play"></i></a></li>
                <li><a href="https://www.facebook.com/NatGeoKorea/" target="_blank"><i className="xi-facebook"></i></a></li>
            </ul>
            <div id="contact">
                <p>CONTACT</p>
                <ul id="pn">
                    <li>
                        채널(방송)
                        <br/> 02&#41; 3490-2742
                    </li>
                    <li>
                        어패럴
                        <br/> 02&#41; 1588-2906
                    </li>
                    <li>
                        모바일 악세사리
                        <br/> 080&#41; 643-1234
                    </li>
                    <li>
                        매거진
                        <br/> 02&#41; 2004-8800
                    </li>
                    <li>
                        트래블러 매거진
                        <br/> 02&#41; 763-8600
                    </li>
                </ul>
            </div>
            <address>
            © This page has been created for portfolio purposes.
            <br/>All images are authorized by NATIONAL GEOGRAPHIC. 
            </address>
            </section>
        </footer>
    )
}

ReactDOM.render(
    <Compo/>,
    document.getElementById("root")
)