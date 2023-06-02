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
    background-color:#045071;
    border: 2px solid #045071;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .modalTitle {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: #CED4FC;
  }

  .modalText {
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
    color:#CED4FC;
  }

  .modalForm {
    max-width: 369px;
    width: 100%;
    padding: 12px 20px;
    background-color:#CED4FC;
    display: flex;
    flex-direction: column;
    gap: 12.33px;
    border: 2px solid #CED4FC;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 40%;
  }
 
  .buttonCancelModal {
        width: 47%;
        height: 40px;
        background: #045071;
        border-radius: 8px;
        color:#D0875A ;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        margin-top: 4px;
  }
  
  .buttonCancelModal:hover {
    border: 1.22px solid #BCE363;
    background-color:#BCE363;
  }

  .buttonDeleteModal {
        width: 47%;
        height: 40px;
        background: #045071; 
        border-radius: 8px;
        color:#BCE363;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        margin-top: 4px;
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