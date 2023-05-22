import Table from "react-bootstrap/Table";
import React from "react";
import EditValue from "./editValue";

function AccountTable(props) {
  function getDaysInMonth(year, month) {
    const date = new Date(year, month, 0);
    return date.getDate();
  }

  function getSelectedDays(year, month) {
    const daysInMonth = getDaysInMonth(year, month);
    const days = [];

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }

  // 예시: 2023년 5월의 일자를 가져옵니다.
  const selectedYear = Number(props?.selectedYear);
  const selectedMonth = Number(props?.month);
  console.log(selectedYear, selectedMonth);

  const selectedDays = getSelectedDays(selectedYear, selectedMonth);
  console.log(selectedDays);

  return (
    <div style={{ margin: "20px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>일자</th>
            <th>수입</th>
            <th>지출</th>
            <th>합계</th>
            <th>구분</th>
            <th>메모</th>
            <th>수정</th>
            <th>전월대비</th>
          </tr>
        </thead>
        <tbody>
          {selectedDays?.map((list, index) => (
            <tr>
              <td>{`${list}일`}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button onClick={EditValue}>수정</button>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AccountTable;
