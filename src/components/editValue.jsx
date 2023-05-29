import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Styled, { keyframes } from "styled-components";
import DropdownButton from "./dropdownButton";

//수정창 입력 시 커서 풀림, 깜빡임
//수정창 입력값 적용하는 방법

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
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
    animation: ${fadeIn} 0.1s ease;
  `;
function EditValue(props) {
    const [inputs, setInputs] = useState({
        income: 10,
        expense: 0,
        amount: 0,
        memo: 0,
    });

    const { income, expense, amount, memo } = inputs;

    const onDataChange = (e) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
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
                        <input
                            style={{ width: "250px" }}
                            name="income"
                            value={income}
                            onChange={onDataChange}
                        />
                        지출
                        <input
                            style={{ width: "250px" }}
                            name="expense"
                            value={expense}
                            onChange={onDataChange}
                        />
                        금액
                        <input
                            style={{ width: "250px" }}
                            name="amount"
                            value={amount}
                            onChange={onDataChange}
                        />
                        메모
                        <textarea
                            style={{ width: "250px" }}
                            name="memo"
                            value={memo}
                            onChange={onDataChange}
                        />
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
