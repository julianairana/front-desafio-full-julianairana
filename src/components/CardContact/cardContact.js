import styled from "styled-components";
import edit from "../../img/edit.png";
import trash from "../../img/trash.png";


export const StyledCardContact = styled.li`
        width: 20%;
        border-radius: 5px;
        list-style: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 2px solid #045071;
        border-radius: 10px;
        min-width: 200px;
        background-color: #fcd8af;

  &:hover {
    border: 2px solid #045071;
    }


  .divLi {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: baseline;
    margin-top: 10px;
    width: 90%;
    margin-top: 15px;
    overflow: hidden;
    height: 303px;
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #045071;
    width: 175px;
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color:  #131216;
    margin-top: 5px;
    width: 175px;
  }

  .divIcons{
    display: flex;
    justify-content: space-around;
    margin-top: 6px;
  }

  .buttonEdit {
    background-image: url(${edit});
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
  }

  .buttonDelet {
    background-image: url(${trash});
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
  }
  
`