import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const InputBoxWrapper = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    width: 300px;
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

const CustomForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: solid 2px;
    border-radius: 10px;
    align-items: center;
`;

const SubmitButton = styled.button`
    width: 30%;
`;
const InputBox = styled.input`
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 200px;
    align-items: center;
    justify-content: flex-start;
    margin-left: 10px;
`;
function SignIn({ setIsLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        console.log(event, "event");
        event.preventDefault();
        if (email.trim().length < 1) {
            throw alert("이메일을 입력하세요");
        }
        if (password.trim().length < 1) {
            throw alert("비밀번호를 입력하세요");
        }

        const res = await fetch("https://todayk.kro.kr/api/auth/login", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            mode: "no-cors",
            body: JSON.stringify({ email, password }),
        });
        console.log(res, "res");
        if (res.status !== 200) {
            navigate("/MainPage");
        }
    };

    return (
        <Wrapper>
            <CustomForm>
                <InputBoxWrapper>
                    Email:
                    <InputBox
                        type="email"
                        value={email}
                        placeholder="email을 적어주세요"
                        onChange={(e) => {
                            console.log(e.target.value);
                            let value = e.target.value;
                            setEmail(value);
                        }}
                    />
                </InputBoxWrapper>
                <br />
                <InputBoxWrapper>
                    Password:
                    <InputBox
                        type="password"
                        value={password}
                        placeholder="password를 적어주세요"
                        onChange={(e) => {
                            console.log(e.target.value);
                            let value = e.target.value;
                            setPassword(value);
                        }}
                    />
                </InputBoxWrapper>
                <br />
                <SubmitButton type="submit" onClick={handleSubmit}>
                    Sign In
                </SubmitButton>
            </CustomForm>
        </Wrapper>
    );
}

export default SignIn;
