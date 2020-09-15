import React, { useEffect } from 'react'
import userThumbnail from "../../../assets/images/img_user-thumbnail.png";
import chatMessages from "../../../redux/mock-datas/chat-messages.json";
import { useDispatch, useSelector } from 'react-redux';
import {
    getInitialChatMessages
} from "../../../redux/actions/chat_actions";

function ChatMessages() {
    const dispatch = useDispatch();
    const chats = useSelector(state => state.chats.chatMessages)
    const currentChatRoom = useSelector(state => state.chats.currentChatRoom)

    useEffect(() => {
        dispatch(getInitialChatMessages(currentChatRoom))
    }, [currentChatRoom])

    const renderChatMessages = () => (
        chats && chats.map(message => {
            return (
                <div className="speech-row speech-others" key={message.id} >
                    <div className="user-pic-wrap">
                        <img src={userThumbnail} alt="user-profile-picture" />
                    </div>
                    <div className="speach-content-wrap">
                        <div className="speaker-info-wrap">
                            {message.person}
                        </div>
                        <div className="speech-inner-wrap">
                            <div className="speech-content">
                                {message.content}
                            </div>
                            <div className="speech-info">
                                <span className="unread-ppl read-all">{message.unread}</span>
                                <span className="time">{message.createdAt}</span>
                            </div>
                        </div>
                    </div>
                </div >
            )
        })
    )

    return (
        <div>
            {renderChatMessages()}
        </div>
    )
}

export default ChatMessages


{/* <div className="speech-row speech-my">
<div className="speach-content-wrap">
    <div className="speech-inner-wrap">
        <div className="speech-content">
            네 반갑습니다~
    </div>
        <div className="speech-info">
            <span className="unread-ppl">2</span>
            <span className="time">오후 01:32</span>
        </div>
    </div>
</div>
</div>
<div className="speech-row speech-others">
<div className="user-pic-wrap">
    <img src={userThumbnail} alt="user-profile-picture" />
</div>
<div className="speach-content-wrap">
    <div className="speaker-info-wrap">
        김하나
</div>
    <div className="speech-inner-wrap">
        <div className="speech-content">
            네~
    </div>
        <div className="speech-info">
            <span className="unread-ppl">2</span>
            <span className="time">오후 01:35</span>
        </div>
    </div>
</div>
</div>
<div className="speech-row speech-others">
<div className="user-pic-wrap">
    <img src={userThumbnail} alt="user-profile-picture" />
</div>
<div className="speach-content-wrap">
    <div className="speaker-info-wrap">
        이두리
</div>
    <div className="speech-inner-wrap">
        <div className="speech-content">
            네~
    </div>
        <div className="speech-info">
            <span className="unread-ppl">2</span>
            <span className="time">오후 01:35</span>
        </div>
    </div>
</div>
</div>
<div className="speech-row speech-others">
<div className="user-pic-wrap">
    <img src={userThumbnail} alt="user-profile-picture" />
</div>
<div className="speach-content-wrap">
    <div className="speaker-info-wrap">
        최서이
</div>
    <div className="speech-inner-wrap">
        <div className="speech-content">
            네~
    </div>
        <div className="speech-info">
            <span className="unread-ppl">2</span>
            <span className="time">오후 01:35</span>
        </div>
    </div>
</div>
</div>
<div className="speech-row speech-others">
<div className="user-pic-wrap">
    <img src={userThumbnail} alt="user-profile-picture" />
</div>
<div className="speach-content-wrap">
    <div className="speaker-info-wrap">
        박철수
</div>
    <div className="speech-inner-wrap">
        <div className="speech-content long-speech-wrap">
            <div className="long-speech">
                태풍 조심하세요~<br />
                            사람이 제대로 서 있기도 힘들 정도로 강한 바람을 동반한 제8호 태풍 '바비'가 25일 제주 남서쪽 해상으로 올라온다. 기상청은 지난 밤사이 우리나라 상층 고기압이 동쪽으로 이동하면서 태풍 바비가 북서진했다면서 향후 제주도 서쪽 해상을 거쳐 가거도와 흑산도 인근을 지날 예정이라고 밝혔다. 바비는 26일 오후께 제주도, 27일 오전 서울에 가장 가까워진다.이날 오전 9시 기준 바비는 태풍이 눈이 보일 정도로 강한 강도의 중형태풍으로 발달했으며 중심기압은 960hPa, 강풍반경은 350km, 최대풍속은 초속 39m다. 기상청 관계자는 "바비가 고수온 해역인 제주도 인근까지 계속 발달하면서 매우 강해지고 강풍반경이 400㎞ 이상으로 확대돼 동쪽 지방까지 영향권에 포함될 것"이라고 전망했다. 제주도는 태풍 전면에서 만들어진 수렴대의 영향으로 오전 9시 50분 기준 시간당 5mm 내외의 비가 오고 있으며 밤부터 매우 강한 바람이 불고 많은 비가 내릴 예정이다. 기상청은 앞서 이날 오전 5시를 기해 서울 전역을 비롯한 전국 대부분 지역에 태풍 예비특보를 발표했다. 발효 시각은 일부 남부지방과 제주도는 25일 밤에서 다음날 오전, 그 밖의 지역은 26일 오후부터 밤사이다. 전남 거문도와 초도에는 전날 오후 9시, 제주도 산지에는 이날 오전 3시에 강풍주의보를 발효했고, 정오에는 흑산도와 홍도에도 내려질 예정이다.
        </div>
            <div className="long-speech-read-all"><i className="icon-read-all"></i>전체보기</div>
        </div>
        <div className="speech-info">
            <span className="unread-ppl">2</span>
            <span className="time">오후 01:35</span>
        </div>
    </div>
</div>
</div>
<div className="speech-row speech-my">
<div className="speach-content-wrap">
    <div className="speech-inner-wrap">
        <div className="speech-content reply-wrap">
            <div className="reply-to"><i className="icon-reply"></i><span>박철수</span>님에게 답장</div>
        네 감사합니다
    </div>
        <div className="speech-info">
            <span className="unread-ppl">2</span>
            <span className="time">오후 01:40</span>
        </div>
    </div>
</div>
</div>
<div className="divider-wrap speech-date">
<div className="divider-txt">2020-08-23-일 (어제)</div>
<div className="divider"></div>
</div>
<div className="speech-row speech-others">
<div className="user-pic-wrap">
    <img src={userThumbnail} alt="user-profile-picture" />
</div>
<div className="speach-content-wrap">
    <div className="speaker-info-wrap">
        김하나
</div>
    <div className="speech-inner-wrap">
        <div className="speech-content">
            네~ 그리고 다음주 미팅 끝나고 식사는 어딜로 예약할까요? 선호하시는 메뉴 있으시면 말씀해주세요
    </div>
        <div className="speech-info">
            <span className="unread-ppl">3</span>
            <span className="time">오전 11:00</span>
        </div>
    </div>
</div>
</div> */}