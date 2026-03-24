let user=document.getElementById('userID')

let a= document.getElementById('userProfile')
async function fetchUser(username){
    let responce =await fetch(`https://api.github.com/users/${username}`);
    let result= await responce.json();
    
displayUser(result)
}
document.getElementById('btn').addEventListener('click',()=>{

  document.getElementById('userProfile').innerHTML=`<span class="loader"></span>`
    let userId=user.value;

fetchUser(userId);

});



function displayUser({avatar_url,
        name,
        bio,
        followers,
        following,
        public_repos,
        html_url
    }){
    // const{avatar_url,
    //     name,
    //     bio,
    //     followers,
    //     following,
    //     public_repos
    // }=result;


if(!avatar_url){
    document.getElementById('userProfile').innerHTML=`<h1>User Not Found</h1>`
return;
}

if(!bio){
    bio=" "
}

document.getElementById('userProfile').innerHTML=`     
      <div class="UserInfo">
            <img src= ${avatar_url} class="userImg">
      
        <div class="userDeatil">
            <p class="userName ">${name}</p>
            <p class="userBio">${bio}</p>
        </div>
          </div>
        <div class="userFollow">
            <div class="Follower">
                <div class="A">
                    <p>Follwer</p>
                    <p>${followers}</p>
                </div>
                <div class="A">
                    <p>Follwing</p>
                    <p>${following}</p>
                </div>
                <div class="A">
                    <p>Repo</p>
                    <p>${public_repos}</p>
                </div>
            

            </div>
            <a href=${html_url} target='_blank' class="visit">
            <div class="visit">
                Visit Profile
            </div>
            </a>

        </div>`;
    
}

