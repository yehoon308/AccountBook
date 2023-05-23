import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import DateSelectModal from "../components/DateSelectModal";
import { Col } from "react-bootstrap";
import AccountTable from "../components/accountTable";

export const AccountBook = (props) => {
  //년 설정
  const [year, setYear] = useState(new Date().getFullYear());
  //월 설정
  const [month, setMonth] = useState("1");

  //연도 모달 오픈
  const [isYearModalOpen, setIsYearModalOpen] = useState(false);
  //월 모달 오픈
  const [isMonthModalOpen, setIsMonthModalIsOpen] = useState(false);
  const handleButtonClick = (isYear) => {
    if (isYear) {
      setIsYearModalOpen(!isYearModalOpen);
      setIsMonthModalIsOpen(false);
    } else {
      setIsMonthModalIsOpen(!isMonthModalOpen);
      setIsYearModalOpen(false);
    }
  };

  return (
    <div>
      <div style={{ border: "solid 1px", padding: "5px" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Col xs={2}>
            <Button
              variant="light"
              style={{
                width: "100%",
                fontWeight: "bold",
                fontSize: "30px",
                border: "solid 1px",
              }}
              onClick={() => handleButtonClick(true)}
            >
              {year}년
            </Button>
          </Col>
          <Col xs={8}>
            <Button
              variant="light"
              style={{
                width: "100%",
                fontWeight: "bold",
                fontSize: "30px",
                border: "solid 1px",
              }}
              onClick={() => handleButtonClick(false)}
            >
              {month}월
            </Button>
          </Col>
        </div>

        <AccountTable year={year} month={month} />
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
    </div>
  );
};

export default AccountBook;
