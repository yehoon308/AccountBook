import React, { useState } from "react";
import YearPicker from "react-year-picker";
import Button from "react-bootstrap/Button";
import MonthModal from "../components/monthModal";
import { Col } from "react-bootstrap";
import AccountTable from "../components/accountTable";

export const AccountBook = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [isOpen, setIsOpen] = useState(false);
    const [month, setMonth] = useState("1");
    const handleButtonClick = () => {
        setIsOpen(true);
    };
    console.log(selectedYear);
    const handleYearChange = (year) => {
        setSelectedYear(year);
        // 다른 로직 수행
    };

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Col xs={2}>
                    <YearPicker
                        onChange={handleYearChange}
                        choiseYear={selectedYear}
                        placeholder={selectedYear}
                    />
                </Col>
                <Col xs={10}>
                    <Button
                        variant="light"
                        style={{ width: "100%" }}
                        onClick={handleButtonClick}
                    >
                        {month}월
                    </Button>
                </Col>
            </div>
            {isOpen ? (
                <MonthModal setIsOpen={setIsOpen} setMonth={setMonth} />
            ) : null}
            <AccountTable selectedYear={selectedYear} month={month} />
        </div>
    );
};

export default AccountBook;
