import styled from "styled-components";


export const StyledCardContact = styled.li`
        height: 290px;
        width: 20%;
        border-radius: 5px;
        list-style: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 2px solid rgb(214, 167, 58, 0.5);
        border-radius: 5px;
        min-width: 200px;
        background-color: rgb(44, 59, 52);

  &:hover {
    border: 2px solid #D6A73A;
    }


  .divLi {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: baseline;
    margin-top: 10px;
    width: 90%;
    margin-top: 15px;
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #D6A73A;
    width: 200px;
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: rgb(192, 191, 199);
    margin-top: 5px;
  }

  .divIcons{
    display: flex;
    justify-content: space-around;
    margin-top: 6px;
  }
  
`