import styled from "styled-components";

// import trash from "../../img/trash.svg";

export const StyledCardContact = styled.li`
        width: 92%;
        height: 43px ;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 4px;
        background: #121214;
        margin: auto;
        margin-top: 8px;
        margin-bottom: 8px;

        .divSpan {
            display: flex;
            width: auto;
            align-items: center;
            gap: 5px;
        }

        span {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        color: #868E96; 
    }

    /* .buttonTrash {
        height: 16px ;
        width: 19.75px;
        border-radius: 4px;    
        margin-right: 7px;
        background-image: url(${trash});
        background-repeat: no-repeat ;
    } */

`