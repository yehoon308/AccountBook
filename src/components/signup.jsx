import { useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const InputBoxWrapper = styled.label`
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 300px;
    align-items: center;
    justify-content: space-between;
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
const SubmitButton = styled.button`
    width: 30%;
`;
function Signup() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (email.length < 1) {
            alert("이메일 값을 입력하세요");
        }
        try {
            const res = await Axios.post();
            if (res.status === 200) {
                alert("정상 처리");
            } else {
                alert("오류");
            }
        } catch (error) {}
    };

    return (
        <FormWrapper>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "10px",
                    border: "solid 2px",
                    borderRadius: "10px",
                }}
            >
                <InputBoxWrapper>
                    Username:
                    <InputBox
                        type="text"
                        onChange={(UEvent) => {
                            console.log(UEvent.target.value);
                            let value = UEvent.target.value;
                            setName(value);
                        }}
                    />
                </InputBoxWrapper>
                <br />
                <InputBoxWrapper>
                    Password:
                    <InputBox
                        type="password"
                        onChange={(PWEvent) => {
                            console.log(PWEvent.target.value);
                            let value = PWEvent.target.value;
                            setPassword(value);
                        }}
                    />
                </InputBoxWrapper>
                <br />
                <InputBoxWrapper>
                    Email:
                    <InputBox
                        type="email"
                        onChange={(EMEvent) => {
                            console.log(EMEvent.target.value);
                            let value = EMEvent.target.value;
                            setEmail(value);
                        }}
                    />
                </InputBoxWrapper>
                <br />
                <SubmitButton type="submit">Sign up</SubmitButton>
            </form>
        </FormWrapper>
    );
}
export default Signup;
