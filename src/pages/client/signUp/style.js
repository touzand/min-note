import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width:100%;
color:var(--font-color);

  *{
  z-index:2;
  }

  .display{
  display:block;
  }

  .subsection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding:1rem;

    div:nth-child(2) {
      width: 100% !important;
    }

    article{
      display:flex;
      align-items:center;
      justify-content:space-between;
      width:100%;
      margin:0;

      p{
        color:var(--font-color);
      }

      a{
        color:var(--font-color);
        font-weight:bold;
    }
  }
  }

  a {
    color: whitesmoke;
    text-decoration: none;
    font-weight: bold;
  }

  .signin-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding:1rem;
          padding-bottom: 0rem;
  }

  .wellcome {
    color: var(--font-color);
    margin: 0;
  }

  .submit-button {
    padding: 1rem;
    background-color: transparent;
    border: none;
    border: solid thin var(--no-grey);
    color: grey;
    background-color: #ddd2;
  }

  .submit-button:active {
    transform: scale(0.95);
  }

  .hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: #fff2;
    margin: 1rem;
    margin-top: 0rem;
  }

  .hr-sect:before,
  .hr-sect:after {
    content: "";
    flex-grow: 1;
    background: #fff2;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 8px;
  }

  @media (min-width: 800px) {
    align-items: center;
    flex:1;


    //a:nth-child(2) {
      //visibility: hidden;
    //}

    input[type="submit"]:hover {
      transform: scale(1.1);
      cursor: pointer;
          }

          .signin-form{
            width:350px;
            padding:0;
          }

      .subsection{
        article{
          width:350px;
        }
      }

  }
`;

export const Logo = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
`;

export const MasterContainer = styled.div`
display: flex;
flex-direction:row-reverse;
  justify-content: center;
`;

export const HelloContainer = styled.div`
    display: grid;
    place-items:center;
    flex: 1;
    overflow: hidden;
color:var(--font-color);


  article{
    width:300px;
    position:absolute;
    z-index:4;
  }
  }
`;
