import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function DateSelectModal(props) {
  const DateSelectModalWrapper = Styled.div`
  position: fixed;
   top: 0%;
   left: 0%;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.5);
   z-index: 9999;
   animation: ${fadeIn} 0.3s ease;
 `;

  const dateType = props.type ?? null;

  const year = props.year ?? null;
  const handleClickEvent = (selectNumber) => {
    const date =
      dateType === "year" ? year - 6 + selectNumber : selectNumber + 1;
    if (dateType === "year") {
      props.onClickEvent(date);
      props.setIsOpen(false);
    } else if (dateType === "month") {
      props.onClickEvent(date);
      props.setIsOpen(false);
    }
  };
  const buttons = Array(12)
    .fill()
    .map((_, index) => (
      <Button
        style={{
          width: "100px",
          margin: "10px",

          backgroundColor: "#f1b4a3",
        }}
        key={index}
        onClick={() => handleClickEvent(index)}
      >
        {dateType === "month"
          ? `${index + 1} 월`
          : `${props.year - 6 + index} 년`}
      </Button>
    ));

  const buttonGroups = [];
  for (let i = 0; i < buttons.length; i += 4) {
    const buttonGroup = buttons.slice(i, i + 4);
    buttonGroups.push(
      <div
        key={i}
        className="button-group"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {buttonGroup}
      </div>
    );
  }
  return (
    <DateSelectModalWrapper className="modal show">
      <Modal.Dialog>
        <Modal.Header
          closeButton
          onHide={() => {
            props.setIsOpen(false);
          }}
        >
          {year ? (
            <Modal.Title>조회 년도를 선택하세요</Modal.Title>
          ) : (
            <Modal.Title>조회 월을 선택하세요</Modal.Title>
          )}
        </Modal.Header>

        <Modal.Body>{buttonGroups}</Modal.Body>

        <Modal.Footer>
          <Button onClick={() => props.setIsOpen(false)}>닫기</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </DateSelectModalWrapper>
  );
}

export default DateSelectModal;
