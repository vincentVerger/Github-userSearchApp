

//functions

async function githubInfos(user){
    
    const newUser = new EchoApi('https://api.github.com/users/'+user);
    const userInfos = await newUser.getInfos();
    console.log(userInfos);
    var userName = new info(userInfos.login);
    userName.printInfoInDom(".different-names h2");
    //e.preventDefault;
    
}


function fillProfileOnSubmit(){ 

        document.querySelector('#search-form').addEventListener("submit",function(e){
            var wrap = document.querySelector(".different-names h2");
            wrap.innerText='??4';
            e.preventDefault();
            })

}
//     });

fillProfileOnSubmit();
