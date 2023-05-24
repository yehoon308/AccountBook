import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function DropdownButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="Primary" id="dropdown-basic">
        카테고리
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">고정비</Dropdown.Item>
        <Dropdown.Item href="#/action-2">식비</Dropdown.Item>
        <Dropdown.Item href="#/action-3">통신비</Dropdown.Item>
        <Dropdown.Item href="#/action-4">의료비</Dropdown.Item>
        <Dropdown.Item href="#/action-5">의류 및 악세서리</Dropdown.Item>
        <Dropdown.Item href="#/action-6">교육비</Dropdown.Item>
        <Dropdown.Item href="#/action-7">여가 및 문화생활</Dropdown.Item>
        <Dropdown.Item href="#/action-8">교통비</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;
