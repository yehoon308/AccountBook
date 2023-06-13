import Dropdown from "react-bootstrap/Dropdown";
import React, { useRef } from "react";

function CategoryDropdown() {
    const selectedOption = useRef("분류");
    const handleOptionSelect = (option) => {
        selectedOption.current = option;
    };

    return (
        <Dropdown>
            <Dropdown.Toggle
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                }}
                variant="Primary"
                id="dropdown-basic"
            >
                <div>{selectedOption.current}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("미분류")}
                    href="#/action-1"
                >
                    미분류
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("식비")}
                    href="#/action-2"
                >
                    식비
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("주거/통신")}
                    href="#/action-3"
                >
                    주거/통신
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("생활용품")}
                    href="#/action-4"
                >
                    생활용품
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("의류/미용")}
                    href="#/action-5"
                >
                    의류/미용
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("건강/문화")}
                    href="#/action-6"
                >
                    건강/문화
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("교육/육아")}
                    href="#/action-7"
                >
                    교육/육아
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("교통/차량")}
                    href="#/action-8"
                >
                    교통/차량
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("경조사/회비")}
                    href="#/action-8"
                >
                    경조사/회비
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("세금/이자")}
                    href="#/action-8"
                >
                    세금/이자
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("용돈/기타")}
                    href="#/action-8"
                >
                    용돈/기타
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("저축/보험")}
                    href="#/action-8"
                >
                    저축/보험
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("카드대금")}
                    href="#/action-8"
                >
                    카드대금
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CategoryDropdown;
