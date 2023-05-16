import React, { useState } from "react";
import YearPicker from "react-year-picker";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const AccountBook = () => {
    const handleYear = (year) => {
        console.log(year);
    };
    const [isOpen, setIsOpen] = useState(false);
    const [month, setMonth] = useState("1");
    const handleClickEvent = (month) => {
        setMonth(month);
        setIsOpen(false);
    };

    return (
        <div>
            <YearPicker onChange={handleYear} />
            <Button onClick={() => setIsOpen(true)}>{month}월</Button>

            {isOpen ? (
                <div
                    className="modal show"
                    style={{ display: "block", position: "initial" }}
                >
                    <Modal.Dialog>
                        <Modal.Header
                            closeButton
                            onHide={() => {
                                setIsOpen(false);
                            }}
                        >
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={() => handleClickEvent("1")}>
                                1월
                            </Button>
                            <Button onClick={() => handleClickEvent("2")}>
                                2월
                            </Button>
                            <Button onClick={() => handleClickEvent("3")}>
                                3월
                            </Button>
                            <Button onClick={() => handleClickEvent("4")}>
                                4월
                            </Button>
                            <Button onClick={() => handleClickEvent("5")}>
                                5월
                            </Button>
                            <Button onClick={() => handleClickEvent("6")}>
                                6월
                            </Button>
                            <Button onClick={() => handleClickEvent("7")}>
                                7월
                            </Button>
                            <Button onClick={() => handleClickEvent("8")}>
                                8월
                            </Button>
                            <Button onClick={() => handleClickEvent("9")}>
                                9월
                            </Button>
                            <Button onClick={() => handleClickEvent("10")}>
                                10월
                            </Button>
                            <Button onClick={() => handleClickEvent("11")}>
                                11월
                            </Button>
                            <Button onClick={() => handleClickEvent("12")}>
                                12월
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            ) : null}
        </div>
    );
};

export default AccountBook;
