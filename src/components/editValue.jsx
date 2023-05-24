import React from "react";
import { Modal, Button } from "react-bootstrap";
import Styled, { keyframes } from "styled-components";
import DropdownButton from "./dropdownButton";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function EditValue(props) {
  const EditValueModalWrapper = Styled.div`
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

  const handleClickEvent = (month) => {
    props.setMonth(month);
    props.setIsOpen(false);
  };

  return (
    <EditValueModalWrapper className="modal">
      <Modal.Dialog style={{ backgroundColor: "white" }}>
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
            <DropdownButton />
            수입
            <input style={{ width: "250px" }} />
            지출
            <input style={{ width: "250px" }} />
            금액
            <input style={{ width: "250px" }} />
            메모
            <textarea style={{ width: "250px" }} />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => props.setIsOpen(false)}>입력</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </EditValueModalWrapper>
  );
}

export default EditValue;
