import React from "react";
import {
  MainMenu,
  MainMenuList,
  MenuTabStyle,
  SubMenuList,
} from "../../styles/header/MenuTabStyle";
import { useNavigate } from "react-router-dom";

export const menuCate = [
  {
    title: "스마트 기기",
    list: ["스마트 워치", "태블릿", "갤럭시", "아이폰"],
  },
  {
    title: "PC / 노트북",
    list: ["노트북", "PC", "마우스", "키보드"],
  },
  {
    title: "영상 / 카메라",
    list: ["빔프로젝터", "셋톱박스", "카메라", "캠코더", "DSLR"],
  },
  {
    title: "음향",
    list: ["스피커", "이어폰", "헤드폰", "마이크"],
  },
  {
    title: "게임 기기",
    list: ["플레이스테이션", "닌텐도", "Wii", "XBOX", "기타"],
  },
];

const MenuTab = () => {
  // 페이지 이동
  const navigate = useNavigate();
  const handleClickCate = () => {
    navigate(`/main/more`);
  };
  // 카테고리


  return (
    <MenuTabStyle>
      {menuCate.map(item => (
        <MainMenu key={item.title}>
          <MainMenuList>{item.title}</MainMenuList>

          <SubMenuList>
            {item.list.map(listItem => (
              <li key={listItem} onClick={handleClickCate}>
                {listItem}
              </li>
            ))}
          </SubMenuList>
          
        </MainMenu>
      ))}
    </MenuTabStyle>
  );
};

export default MenuTab;
