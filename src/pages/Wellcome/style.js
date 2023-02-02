import styled from "styled-components";

export const WellcomeContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  gap: 3rem;

  h1 {
    font-size: 4rem;
  }

  h1,
  p {
    margin: 0 0;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      padding: 0.5rem;
      border: none;
      border-radius: 0.25rem;
      text-align: center;
      text-decoration: none;
    }

    a:nth-child(1) {
      background-color: whitesmoke;
      color: #141414;
    }

    a:nth-child(2) {
      background-color: transparent;
      color: whitesmoke;
      border: thin solid whitesmoke;
    }
  }

  .figure-logo {
    article {
      display: flex;
      width: 100%;
      gap: 0.25rem;

      div {
        width: 20px;
        height: 20px;
        background-color: red;
      }

      div:nth-child(1) {
        background-color: #f5a38a;
      }
      div:nth-child(2) {
        background-color: #f3c57d;
      }
      div:nth-child(3) {
        background-color: #dde595;
      }
      div:nth-child(4) {
        background-color: #7bd5e1;
      }
      div:nth-child(5) {
        background-color: #c78dd0;
      }
    }
  }

  .main-content {
    display: flex;
    justify-content:center;
    flex-direction: column;
    gap: 2rem;
    min-height:100vh;
  }

  .img{
width: 96%;
max-width: 960px;
margin: 2rem auto;
}

  img{
width: 100%;
height: auto; 
}

  @media (min-width: 800px) {
    justify-content: start;
    align-items: center;
    text-align: center;

    .body{
    width:1000px;
    display:flex;
    flex-direction:column;
    gap:5rem;
    }

    .side{
    display:flex;
   text-align:left;
   gap:2rem;
   align-items:center;

   p{
   width:500px;
   }
    }

   .side:nth-child(2) {
   flex-direction:row-reverse;
   text-align:right;
   }

    .main-content {
      justify-content: center;
      align-items: center;
      gap: 3rem;
      min-height:100vh;

      a {
        width: 200px;
      }

      a:hover {
        transform: scale(1.025);
      }

    }
  }

  footer{
  padding:1rem;
  margin-top:4rem;

  a{
  color:inherit;
  font-weight:bold;
  text-decoration:none;
  display:inline-block;
  }
  }
`;

