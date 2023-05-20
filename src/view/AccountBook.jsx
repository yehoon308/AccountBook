import React, { useState } from "react";
import YearPicker from "react-year-picker";
import Button from "react-bootstrap/Button";
import MonthModal from "../components/monthModal";
import { Col } from "react-bootstrap";

export const AccountBook = () => {
    const handleYear = (year) => {
        console.log(year);
    };
    const [isOpen, setIsOpen] = useState(false);
    const [month, setMonth] = useState("1");
    const handleButtonClick = () => {
        setIsOpen(true);
    };
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Col xs={2}>
                    <YearPicker onChange={handleYear} />
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
        </div>
    );
};

export default AccountBook;
