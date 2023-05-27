import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";

function DropdownButton() {
    const [isOpen, setIsOpen] = useState(false); //이부분 isOpen은 안써도 되는지????
    const [selectedOption, setSelectedOption] = useState("카테고리");

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row", //드롭다운 화살표 중앙정렬하는법
                }}
                variant="Primary"
                id="dropdown-basic"
            >
                <div>{selectedOption}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("고정비")}
                    href="#/action-1"
                >
                    고정비
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("식비")}
                    href="#/action-2"
                >
                    식비
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("통신비")}
                    href="#/action-3"
                >
                    통신비
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("의료비")}
                    href="#/action-4"
                >
                    의료비
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("의류 및 악세서리")}
                    href="#/action-5"
                >
                    의류 및 악세서리
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("교육비")}
                    href="#/action-6"
                >
                    교육비
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("여가 및 문화생활")}
                    href="#/action-7"
                >
                    여가 및 문화생활
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleOptionSelect("교통비")}
                    href="#/action-8"
                >
                    교통비
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownButton;
