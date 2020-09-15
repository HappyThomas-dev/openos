import React, { useState, useEffect } from "react";
import "./HeaderNavi.css";
import userAvatarThumbnail from "../../../assets/images/img_user-thumbnail.png";
import {
  logout,
  changeStatus,
  getUserInfos,
} from "../../ipcCommunication/ipcCommon";
import useProfile from "../../../hooks/useProfile";

export default function HeaderNavi() {
  const [avatarDropDownIsOpen, setAvatarDropDownIsOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(`online`);
  const { myInfo } = useProfile();

  useEffect(() => {
    console.log(`myInfo: `, myInfo);
  });

  const onAvatarClick = () => {
    setAvatarDropDownIsOpen(!avatarDropDownIsOpen);
  };

  const handleLogout = () => {
    logout();
    sessionStorage.removeItem("isLoginElectronApp");
    window.location.hash = "#/login";
    window.location.reload();
  };

  const handleStatusChange = (e: any) => {
    const { code, name } = e.target.dataset;
    console.log(`code: `, code);
    changeStatus(code, true);
    setCurrentStatus(name);
  };

  const handleImageError = (image: any) => {
    image.target.onerror = null;
    image.target.src = `/images/img_imgHolder.png`;
  };

  return (
    <div className="header">
      <div className="btn-page-wrap">
        <div className="btn-prev" title="이전으로"></div>
        <div className="btn-next disabled" title="앞으로"></div>
      </div>
      {/* <form className="golbal-search-wrap">
        <select className="global-search-cat">
          <option>이름</option>
          <option>직위</option>
          <option>부서명</option>
          <option>이메일</option>
          <option>전화번호</option>
          <option>휴대폰번호</option>
          <option>담당업무</option>
        </select>
        <input type="text" className="input-global-search" placeholder="사용자 통합검색" />
        <input type="submit" className="submit-global-search" value="" />
      </form> */}
      <ul className="sub-action-wrap">
        <li className="sub-action-item btn-go-to-link-wrap">
          <div className="btn-go-to-link">
            <div className="btn-go-to-link-inner"></div>
          </div>
          <ul className="link-dropdown">
            <li className="link-item go-to-survey" title="설문">
              <a href="#"></a>
            </li>
            <li className="link-item go-to-work-from-home" title="재실">
              <a href="#"></a>
            </li>
            <li className="link-item go-to-approval" title="결재">
              <a href="#"></a>
            </li>
            <li className="link-item go-to-sales" title="영업관리">
              <a href="#"></a>
            </li>
            <li className="link-item go-to-nas" title="나스">
              <a href="#"></a>
            </li>
          </ul>
        </li>

        <li className="sub-action-item btn-go-to-setting" title="설정"></li>
        <li className="sub-action-item noti-toggle">
          <input type="checkbox" id="noti-check" />
          <label
            className="noti-toggle-inner"
            htmlFor="noti-check"
            title="알림"
          ></label>
        </li>
      </ul>

      <div className="user-wrap">
        <div className="user-profile-state-wrap" onClick={onAvatarClick}>
          <div className="user-pic-wrap">
            <img
              src={
                myInfo?.userPicturePos && /^http/.test(myInfo?.userPicturePos)
                  ? myInfo?.userPicturePos
                  : `/images/img_imgHolder.png`
              }
              alt="user-profile-picture"
              onClick={onAvatarClick}
              onError={handleImageError}
            />
          </div>
          <div className={`user-state ${currentStatus}`}></div>
        </div>
        {avatarDropDownIsOpen && (
          <div className="user-profile-dropdown-wrap">
            <div className="user-profile-state-wrap">
              <div className="user-pic-wrap">
                <img
                  src={
                    myInfo?.userPicturePos &&
                    /^http/.test(myInfo?.userPicturePos)
                      ? myInfo?.userPicturePos
                      : `/images/img_imgHolder.png`
                  }
                  alt="user-profile-picture"
                  onClick={onAvatarClick}
                  onError={handleImageError}
                />
              </div>
              <div className={`user-state ${currentStatus}`}></div>
            </div>
            <div className="user-owner sub1">MY</div>
            <div className="user-info-wrap">
              <div className="user-info-wrap-inner">
                <h6 className="user-name">{myInfo?.userName}</h6>
                <span className="user-position">{myInfo?.userPayclName}</span>
                <span className="user-department">{myInfo?.userGroupName}</span>
              </div>
              <div className="user-alias">{myInfo?.userAliasName}</div>
            </div>
            <div className="user-contact-wrap">
              <div className="user-phone" title="전화번호">
                {myInfo?.userTelOffice}
              </div>
              <div className="user-mobile" title="휴대폰번호">
                {myInfo?.userTelMobile}
              </div>
              <div className="user-email" title="이메일">
                {myInfo?.userEmail}
              </div>
            </div>
            <div className="current-user-action-wrap">
              <div className="current-user-action btn-edit-photo">
                <i className="current-user-action-icon"></i>프로필 사진 변경
              </div>
              <div className="current-user-action btn-edit-user-state">
                <i className="current-user-action-icon"></i>로그인 상태 변경
                <ul className="change-state-wrap">
                  <li
                    onClick={handleStatusChange}
                    data-code="0"
                    data-name="online"
                  >
                    <i className="user-state online"></i>온라인
                  </li>
                  <li
                    onClick={handleStatusChange}
                    data-code="1"
                    data-name="absence"
                  >
                    <i className="user-state absence"></i>자리 비움
                  </li>
                  <li
                    onClick={handleStatusChange}
                    data-code="2"
                    data-name="otherWork"
                  >
                    <i className="user-state otherWork"></i>다른 용무중
                  </li>
                  <li
                    onClick={handleStatusChange}
                    data-code="3"
                    data-name="workingOutside"
                  >
                    <i className="user-state workingOutside"></i>외근
                  </li>
                  <li
                    onClick={handleStatusChange}
                    data-code="4"
                    data-name="onCall"
                  >
                    <i className="user-state onCall"></i>통화중
                  </li>
                  <li
                    onClick={handleStatusChange}
                    data-code="5"
                    data-name="atTable"
                  >
                    <i className="user-state atTable"></i>식사중
                  </li>
                  <li
                    onClick={handleStatusChange}
                    data-code="6"
                    data-name="inMeeting"
                  >
                    <i className="user-state inMeeting"></i>회의중
                  </li>
                  <li
                    onClick={handleStatusChange}
                    data-code="7"
                    data-name="offline"
                  >
                    <i className="user-state offline"></i>오프라인
                  </li>
                </ul>
              </div>
              <div className="current-user-action btn-edit-alias">
                <i className="current-user-action-icon"></i>상태 메시지 변경
              </div>
              <div
                className="current-user-action btn-sign-out"
                onClick={handleLogout}
              >
                <i className="current-user-action-icon"></i>로그아웃
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}