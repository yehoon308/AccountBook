import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MonthModal(props) {
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
                    <Modal.Title>조회 월을 선택하세요</Modal.Title>
                </Modal.Header>

                <Modal.Body>
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
                        </Button>
                    </div>
                    <hr />
                </Modal.Body>

                <Modal.Footer></Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default MonthModal;
