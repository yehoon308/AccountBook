import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Styled, { keyframes } from "styled-components";
import DropdownButton from "./dropdownButton";
import { useFormik } from "formik";

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
    const formik = useFormik({
        initialValues: {
            detail: "",
            amount: 0,
            memo: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

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

                        <form onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col xs={3}>
                                    <label
                                        style={{ margin: "4px" }}
                                        htmlFor="detail"
                                    >
                                        내역
                                    </label>
                                </Col>
                                <Col xs={9}>
                                    <input
                                        style={{ margin: "4px" }}
                                        id="detail"
                                        name="detail"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.detail}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <label
                                        style={{ margin: "4px" }}
                                        htmlFor="amount"
                                    >
                                        금액
                                    </label>
                                </Col>
                                <Col xs={9}>
                                    <input
                                        style={{ margin: "4px" }}
                                        id="amount"
                                        name="amount"
                                        type=""
                                        onChange={formik.handleChange}
                                        value={formik.values.amount}
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={3}>
                                    <label
                                        style={{ margin: "4px" }}
                                        htmlFor="memo"
                                    >
                                        메모
                                    </label>
                                </Col>
                                <Col xs={9}>
                                    <input
                                        style={{ margin: "4px" }}
                                        id="memo"
                                        name="memo"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.memo}
                                    />
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit" onClick={formik.handleSubmit}>
                        저장
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </EditValueModalWrapper>
    );
}

export default EditValue;
