import React from "react";
import styled from "styled-components";
import {Wrapper} from './Components/Profile/exemplo'
import Layout from "./Components/Layout";
import Profile from "./Components/Profile";
import ResetCss from "./Global/resetCss";


function App() {
 
  const Button = styled.button`
  background-color: red
  `;

  return (
    <>
       <main>
         <ResetCss/>
         <Layout>
            <Profile/>
            <div>Reporitories</div>
            <div>Starreds</div>
         </Layout>
       </main>
    </>
  );
}

export default App;

