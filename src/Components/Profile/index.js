import React from "react";
import { Wrapper, WrapperStatusCount, WrapperUsername, WrapperInfoUser, WrapperImage } from "./exemplo";

function Profile(){
    return(
      <>
         <Wrapper>
               <WrapperImage src="https://avatars.githubusercontent.com/u/74414093?v=4" alt='avatar of user'></WrapperImage>
               <WrapperInfoUser>
                 <div>
                     <h1>Matheus Felipe</h1>
                     <WrapperUsername>
                        <h3>Username:</h3>
                        <a href='https://github.com/mmatheuslemos' target="_blank" rel="noreferrer">mmatheuslemos </a>
                     </WrapperUsername>
                 </div>
                 <WrapperStatusCount>
                    <div>
                       <h4>Followers</h4>
                       <span>5</span>
                    </div>
                    <div>
                       <h4>Starreds</h4>
                       <span>5</span>
                    </div>
                    <div>
                       <h4>Followings</h4>
                       <span>5</span>
                    </div>
                 </WrapperStatusCount>
               </WrapperInfoUser>  
         </Wrapper>
      </>    
    )
}

export default Profile;