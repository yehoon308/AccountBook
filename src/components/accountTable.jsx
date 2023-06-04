import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import EditValue from "./editValue";
import Styled from "styled-components";

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

    function getSelectedDays(year, month) {
        const daysInMonth = getDaysInMonth(year, month);
        const days = [];

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }

        return days;
    }

    // 예시: 2023년 5월의 일자를 가져옵니다.
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
                        <CenterTh>일자</CenterTh>
                        <CenterTh>수입</CenterTh>
                        <CenterTh>지출</CenterTh>
                        <CenterTh>합계</CenterTh>
                        <CenterTh>구분</CenterTh>
                        <CenterTh>메모</CenterTh>
                        <CenterTh style={{ width: "80px" }}>수정</CenterTh>
                        <CenterTh>전월대비</CenterTh>
                    </tr>
                </thead>
                <tbody>
                    {selectedDays?.map((list, index) => (
                        <tr>
                            <CenterTh>{`${list}일`}</CenterTh>
                            <CenterTh></CenterTh>
                            <CenterTh></CenterTh>
                            <CenterTh></CenterTh>
                            <CenterTh></CenterTh>
                            <CenterTh></CenterTh>
                            <CenterTh>
                                <button onClick={handleButtonClick}>
                                    수정
                                </button>
                            </CenterTh>
                            <CenterTh></CenterTh>
                        </tr>
                    ))}
                </tbody>
                {isOpen ? <EditValue setIsOpen={setIsOpen} /> : null}
            </Table>
        </div>
    );
}

export default AccountTable;
