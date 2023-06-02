import styled from "styled-components"

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 25px;
        
`
export const HomeNavBar = styled.div`
    width: 100%;
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    
    h2 {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: #045071;
}

    a {
        font-family: 'Inter', sans-serif;
        width: 55px;
        border-radius: 4px;
        padding: 0px 16px 0px 16px;
        background: #045071;
        border-radius: 4px;
        color: #FFFF;
        font-size: 12px;
        font-weight: 600;
        line-height: 28px;
        text-align: center;

        .imgPerfil {
            width: 150px;
            height: 150px;
        }

}
`

export const HomeHeader = styled.div`
        width: 100%;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3px;


        h2 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        color:#045071;
    }

       span {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        color: #868E96;
        margin-top: 5px;
        margin-right: 104px;
    }

    .divPerfil {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }

    .imgPerfil {
        width: 70px;
        height: 70px;
        border-radius: 100px;
    }

    .buttonPerfil {
        width: 78px;
        background: #045071;
        border-radius: 4px;    
        font-size: 10.72px;
        padding: 10px 10px;
        color: #ffffff;
    }

    @media (max-width: 600px) {
        width: 100%;
        display: flex;
        margin: 0 auto;
        padding: 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

`
 
export const HomeCards = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        margin-top: 27px;

        div {
        display: flex;
        align-items: baseline;
        justify-content: space-around;
        margin-bottom: 3px;
        }

        .notContact {
            width: 420px;
            height: 400px;
        }

        .divContacts {
            display: flex;
            gap: 22px;
        }

        .buttonPDF {
            width: 78px;
            height: 30px;
        }

        h3 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 600;
        line-height: 18px;
        color: #045071;
        }

        button {
        height: 32px;
        width: 32px;
        background: #045071;
        border-radius: 4px;    
        margin-right: 7px;
        font-size: 10.72px;
        padding: 10px 10px;
        color: #ffffff;
        }

        .divUl {
            display: flex;
            justify-content: center;
            width: 100%;
            margin: 0px;
            padding:0px;
            overflow: auto;
            max-height: 400px;
        }

        .divUl::-webkit-scrollbar {
        width: 10px; 
        }

        .divUl::-webkit-scrollbar-thumb {
        background-color: #888; 
        }

        .divUl::-webkit-scrollbar-thumb:hover {
        background-color: #555;
        }

        ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        margin-top: 10px;
        padding: 12px 0px 12px 0px;
        flex-direction: row;
        gap: 20px;
        width: 65%;
        background: rgb(203,212,252);
        background: linear-gradient(0deg, rgba(203,212,252,1) 3%, rgba(217,164,139,1) 72%);
        border: 2px transparent;
        border-radius: 7px;
        }

        @media (max-width: 900px) {
            width: 100%;
            display: flex;
            margin: 0 auto;
            padding: 50px;

            h3 {
                font-size: 18px;
            }

            span {
                font-size: 10px;
            }

            ul {
                width: 100%;
            }

            .notContact {
                width: 90%;
            } 

        }
`