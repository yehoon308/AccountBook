import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import EditValue from "./editValue";
import Styled from "styled-components";
import Calendar from "./Calendar";
import CategoryDropdown from "./Category";
import Checkbox from "./Checkbox";

const CenterTh = Styled.th`
  text-align: center;
`;

function AccountTable(props) {
    function getDaysInMonth(year, month) {
        const date = new Date(year, month, 0);
        return date.getDate();
    }

    const [isOpen, setIsOpen] = useState(false);
    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const handleCalendarClick = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    function getSelectedDays(year, month) {
        const daysInMonth = getDaysInMonth(year, month);
        const days = [];

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }

        return days;
    }

    // 예시: 2023년 5월의 날짜를 가져옵니다.
    const selectedYear = Number(props?.year);
    const selectedMonth = Number(props?.month);
    console.log(selectedYear, selectedMonth);

    const selectedDays = getSelectedDays(selectedYear, selectedMonth);
    console.log(selectedDays);

    return (
        <div style={{ margin: "20px" }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <CenterTh></CenterTh>
                        <CenterTh>날짜</CenterTh>
                        <CenterTh>사용내역</CenterTh>
                        <CenterTh>금액</CenterTh>
                        <CenterTh>분류</CenterTh>
                        <CenterTh>메모</CenterTh>
                        {/* <CenterTh style={{ width: "80px" }}>수정</CenterTh> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Checkbox />
                        <CenterTh>
                            <button onClick={handleCalendarClick}>수정</button>
                        </CenterTh>
                        <CenterTh></CenterTh>
                        <CenterTh></CenterTh>
                        <CenterTh>
                            <CategoryDropdown />
                        </CenterTh>
                        <CenterTh></CenterTh>
                        {/* <CenterTh>
                            <button onClick={handleButtonClick}>수정</button>
                        </CenterTh> */}
                    </tr>
                </tbody>
                {isCalendarOpen ? (
                    <Calendar setIsCalendarOpen={setIsCalendarOpen} />
                ) : null}
                {isOpen ? <EditValue setIsOpen={setIsOpen} /> : null}
            </Table>
        </div>
    );
}

export default AccountTable;
