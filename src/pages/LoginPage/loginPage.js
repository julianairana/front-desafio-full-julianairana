import styled from "styled-components";

export const Login = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .divLeft {
        width: 30%;
        height: 60%;
        max-width: 369px;
        border: 2px solid rgb(214, 167, 58, 0.5);
        box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        background-color: #2C3B34;
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        color: #D6A73A;
        margin-top: 20px;
    }

    form {
        width: 85%;
        gap: 7px;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    label {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #D6A73A;
    }

    input {
        width: 100%;
        height: 40px;
        padding: 0px 10px 0px 15px;
        border: 2px solid #333333;
        border-radius: 8px;
        background-color: #C0BFC7;
    }

    button {
        width: 100%;
        height: 40px;
        background: #D6A73A;
        border-radius: 8px;
        color: #33443C;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        margin-top: 4px;
    }

    span {
        font-family: Inter, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: rgb(214, 167, 58);
    }

    a {
        width:85%;
        height: 40px;
        background: #C0BFC7;;
        border-radius: 8px;
        color: #33443C;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        margin-top: 4px;
        text-align: center;
        padding: 5px; 
        margin-top: 21px;
        background-color: #C0BFC7;
    }

    .divRight {
        width: 30%;
        gap: 27px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .divCard {
        width: 80%;
        height: 90px;
        border: 1px solid #E0E0E0;
        box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .spanNegrito {
        color: #333333;
        font-weight: 500;
    }

    @media (max-width: 900px) {
            flex-direction: column-reverse;
            width: 100%;
            display: flex;
            align-items: center;
       
            .divRight {
                width: 100%;
                align-items: center;
            }

            .divLeft {
                width: 100%;
                display: flex;
                align-items: center;
            }
         
    }
`