import styled from "styled-components";

export const ContainerModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

.divModal {
    max-width: 369px;
    width: 100%;
    height: 342px;
    border-radius: 4px;
    background-color: #343b41;
  }
  .divModalHeader {
    max-width: 369px;
    width: 100%;
    height: 50px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .modalTitle {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #f8f9fa;
  }
  .buttonCloseModal{
    max-width: 11px;
    width: 100%;
    height: 1.625rem;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #868e96;
  }

  .modalForm {
    max-width: 369px;
    width: 100%;
    padding: 12px 20px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    gap: 22.33px;
  }
  .modalLabel {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12.18px;
    color: #f8f9fa;
  }
  .modalInput {
    max-width: 329.93px;
    width: 100%;
    height:48px;
    padding: 0px 16px;
    background-color: #343b41;
    border: 1.22px solid #f8f9fa;
    border-radius: 4px;
    color: #f8f9fa;
  }
  
  .modalInput::placeholder {
    color: #f8f9fa;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16.24px;
  }
  .modalSelect {
    max-width: 329.93px;
    width: 100%;
    height:48px;
    padding: 0rem 16px;
    background-color: #343b41;
    border: 1.22px solid #f8f9fa;
    border-radius: 4px;
    color: #f8f9fa;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 16.24px;
  }
  .buttonRegisterModal {
    max-width: 324px;
    width: 100%;
    height:48px;
    padding: 0px 22px;
    background-color: #ff577f;
    border: 1.22px solid #ff577f;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    border-radius: 4px;
  }
  .buttonRegisterModal:hover {
    border: 1.22px solid #ff427f;
    background-color: #ff427f;
  }

  span {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        color: #868E96;
        margin-top: 5px;
    }

  @media (max-width: 700px) {
    .divModal {
      width: 83%;
    }
  }
`;