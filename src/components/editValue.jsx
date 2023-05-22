import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditValue(props) {
  const handleClickEvent = (month) => {
    props.setMonth(month);
    props.setIsOpen(false);
  };

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
          <Modal.Title>값을 수정하세요</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            수입
            <input style={{ width: "250px" }} />
            지출
            <input style={{ width: "250px" }} />
            금액
            <input style={{ width: "250px" }} />
            구분
            <input style={{ width: "250px" }} />
            메모
            <input style={{ width: "250px" }} />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button>입력</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default EditValue;
