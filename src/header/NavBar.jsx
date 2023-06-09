import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

// /** 네브바 */
const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  width: 100%;
  background-color: #f1b4a3;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.dark &&
    css`
      background-color: black;
    `}
`;

export default function NavBar() {
  // const handleReload = () => {
  //     window.location.reload();
  // }
  return (
    <NavWrapper>
      <div className="mt-3 h-2/3 flex flex-row justify-center">
        <Link
          to="/"
          className="text-3xl text-rose-900 font-semibold hover:text-rose-600"
        >
          로그인
        </Link>
      </div>
      <nav className="h-1/3 w-full flex flex-row items-center justify-start space-x-10 p-4">
        <Link
          to="SignUp"
          className="text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12"
        >
          회원가입
        </Link>
        <Link
          to="MainPage"
          className="text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12"
        >
          메인
        </Link>
        <Link
          to=""
          className="text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12"
        ></Link>

        {/* <Link
          to="/react/checkPage"
          className="text-rose-900 hover:text-rose-600 font-semibold hover:origin-center hover:rotate-12"
        >
          자동화
        </Link> */}
      </nav>
    </NavWrapper>
  );
}
