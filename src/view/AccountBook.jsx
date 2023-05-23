import React, { useState } from "react";
import YearPicker from "react-year-picker";
import Button from "react-bootstrap/Button";
import DateSelectModal from "../components/DateSelectModal";
import { Col } from "react-bootstrap";
import AccountTable from "../components/accountTable";

export const AccountBook = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isMonthModalOpen, setIsMonthModalIsOpen] = useState(false);
  const [isYearModalOpen, setIsYearModalOpen] = useState(false);
  const [month, setMonth] = useState("1");
  const handleButtonClick = (isYear) => {
    if (isYear) {
      setIsYearModalOpen(true);
    } else {
      setIsMonthModalIsOpen(true);
    }
  };

  const handleYearChange = (year) => {
    setYear(year);
    // 다른 로직 수행
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Col xs={2}>
          <Button
            variant="light"
            style={{ width: "100%" }}
            onClick={() => handleButtonClick(true)}
          >
            {year}년
          </Button>
        </Col>
        <Col xs={8}>
          <Button
            variant="light"
            style={{ width: "100%" }}
            onClick={() => handleButtonClick(false)}
          >
            {month}월
          </Button>
        </Col>
      </div>
      {isMonthModalOpen ? (
        <DateSelectModal
          setIsOpen={setIsMonthModalIsOpen}
          onClickEvent={setMonth}
          type={"month"}
        />
      ) : null}
      {isYearModalOpen ? (
        <DateSelectModal
          setIsOpen={setIsYearModalOpen}
          onClickEvent={setYear}
          year={year}
          type={"year"}
        />
      ) : null}
      <AccountTable year={year} month={month} />
    </div>
  );
};

export default AccountBook;
