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
    /* height: 342px; */
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    background-color:#045071;
  }

  .divModalHeader {
    max-width: 369px;
    width: 100%;
    height: 50px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #CED4FC;
    border: 2px solid  #CED4FC;
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
    /* background-color:#045071; */
    display: flex;
    flex-direction: column;
    gap: 12.33px;
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
        color:#CED4FC;
  }

  .modalInput {
    width: 100%;
    height: 40px;
    padding: 0px 10px 0px 15px;
    border: 2px solid rgb(51, 51, 51);
    border-radius: 8px;
    background-color: #DEDFED;
  }
 
  .modalSelect {
    width: 100%;
        height: 40px;
        padding: 0px 10px 0px 15px;
        border: 2px solid #333333;
        border-radius: 8px;
        background-color: #DEDFED;
  }

  .buttonRegisterModal {
        height: 40px;
        background: #CED4FC;
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
    border: 1.22px solid #BCE363;
    background-color:#BCE363;
  }

  .buttonDeleteModal {
        width: 75%;
        height: 40px;
        background: #CED4FC;
        border-radius: 8px;
        color:#045071;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 8px;
  }

  .buttonDeleteModal:hover {
    border: 1.22px solid #D0875A ;
    background-color:#D0875A ;
  }

  .divButtons {
    display: flex;
    justify-content: space-between;
  }

  span {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        color:#BCE363;
    }

  @media (max-width: 700px) {
    .divModal {
      width: 83%;
    }
  }
`;