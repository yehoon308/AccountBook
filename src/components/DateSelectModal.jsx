import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function DateSelectModal(props) {
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
        style={{ width: "100px", marginTop: "20px" }}
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
    <div
      className="modal show "
      style={{ display: "block", position: "initial" }}
    >
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

        <Modal.Body>
          <div>
            {buttonGroups}
            {/* <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("1")}
            >
              1월
            </Button>
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("2")}
            >
              2월
            </Button>
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("3")}
            >
              3월
            </Button>
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("4")}
            >
              4월
            </Button>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("5")}
            >
              5월
            </Button>
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("6")}
            >
              6월
            </Button>
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("7")}
            >
              7월
            </Button>
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("8")}
            >
              8월
            </Button>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("9")}
            >
              9월
            </Button>
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("10")}
            >
              10월
            </Button>
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("11")}
            >
              11월
            </Button>
            <Button
              style={{
                width: "60px",
              }}
              onClick={() => handleClickEvent("12")}
            >
              12월
            </Button> */}
          </div>
          <hr />
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DateSelectModal;
