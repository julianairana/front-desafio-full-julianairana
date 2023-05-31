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
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
  }

  .divModalHeader {
    max-width: 369px;
    width: 100%;
    height: 50px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fec49b;
    border: 2px solid  #fec49b;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .modalTitle {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #045071;
  }
  
  .buttonCloseModal{
    max-width: 11px;
    width: 100%;
    height: 1.625rem;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #045071;
  }

  .modalForm {
    max-width: 369px;
    width: 100%;
    padding: 12px 20px;
    background-color:#045071;
    display: flex;
    flex-direction: column;
    gap: 22.33px;
    border: 2px solid #045071;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .modalLabel {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color:#fcd8af;
  }

  .modalInput {
    width: 100%;
    height: 40px;
    padding: 0px 10px 0px 15px;
    border: 2px solid rgb(51, 51, 51);
    border-radius: 8px;
    background-color: rgb(192, 191, 199);
  }
 
  .modalSelect {
    width: 100%;
        height: 40px;
        padding: 0px 10px 0px 15px;
        border: 2px solid #333333;
        border-radius: 8px;
        background-color: #C0BFC7;
  }
  .buttonRegisterModal {
    width: 100%;
        height: 40px;
        background: #fcd8af;
        border-radius: 8px;
        color:#045071;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        margin-top: 4px;
  }
  
  .buttonRegisterModal:hover {
    border: 1.22px solid #fe9b91;
    background-color: #fe9b91;
  }

  span {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        color:#fe9b91;
        margin-top: 5px;
    }

  @media (max-width: 700px) {
    .divModal {
      width: 83%;
    }
  }
`;