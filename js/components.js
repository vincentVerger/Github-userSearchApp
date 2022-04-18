

class info{

    constructor(info){
    this._info=info
    }

    printInfoInDom(classe,mod=''){

        var wrap = document.querySelector(classe);

        if (this._info===null || this._info===""){
            wrap.innerText='Not available';
            wrap.parentNode.style.opacity=0.5;
                
        }   
        else{
            wrap.innerText=mod+this._info;
            wrap.parentNode.style.opacity=1;
        }

    }

    printDateInDom(classe){

        var wrap = document.querySelector(classe);
        var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        wrap.innerText= 'Joined '+this._info.slice(8,10)+' '+months[parseInt(this._info.slice(5,7))-1]+' '+this._info.slice(0,4);
    }
  
}

class User{

    constructor(username){
        this._username= username
    }

    async fillProfile(){

        const newUser = new EchoApi('https://api.github.com/users/'+this._username);
        const userInfos = await newUser.getInfos();
        console.log(userInfos);


        // affiche "no result" si le compte n'existe pas
        if(userInfos.hasOwnProperty('message')){
        document.querySelector(".no-result").innerText = "No results";
        }
        else{

        // affiche la photo de profil
        var userPictureUrl = userInfos.avatar_url;  
        document.querySelector(".picture img").setAttribute('src',userPictureUrl);

        // affiche le login
        var userLogin = new info(userInfos.login);
        userLogin.printInfoInDom(".different-names h3","@");

        // affiche le nom
        var userName = new info(userInfos.name);
        
            if (userName._info===null){
            userLogin.printInfoInDom(".different-names h2");
            }
            else{
            userName.printInfoInDom(".different-names h2");
            }

        // affiche la date de création du compte
        var joined = new info(userInfos.created_at);
        joined.printDateInDom(".date");


        // affiche la bio
        var userBio = new info(userInfos.bio);

            if (userBio._info === null ){
                document.querySelector('.bio').innerText='This profile has no bio';
                document.querySelector('.bio').style.opacity=0.5;
                
            }
            else{
                userBio.printInfoInDom(".bio");
                document.querySelector('.bio').style.opacity=1;
            }
        
        //affiche les repos
        const userRepos = new info(userInfos.public_repos);
        userRepos.printInfoInDom('.repos .value');

        //affiche les followers
        const userFollowers = new info(userInfos.followers);
        userFollowers.printInfoInDom('.followers .value');

        //affiche les following
        const userFollowing = new info(userInfos.following);
        userFollowing.printInfoInDom('.following .value');
        
        //affiche location
        const userLocation = new info(userInfos.location);
        userLocation.printInfoInDom('.city');



        //affiche le blog et link 
        const userBlog = new info(userInfos.blog);
        const urlMorcelee1 = userBlog._info.split('/');

        if(urlMorcelee1.length>=4){
            document.querySelector('.blog-link').innerText ='http://.../'+urlMorcelee1[urlMorcelee1.length-1];
        }
        else{
           userBlog.printInfoInDom('.blog-link');
        }
        document.querySelector('.blog').setAttribute("href",userBlog._info);


        //affiche twitter et link
        const userTwitter= new info(userInfos.twitter_username);

        userTwitter.printInfoInDom('.twitter-link');

        if (userTwitter._info===null){
            document.querySelector('.company').setAttribute('href',"");
        }
        else{
        document.querySelector('.twitter').setAttribute("href",'https://twitter.com/'+userTwitter._info);
        }
        

        //affiche la company avec @devant et link 
        const userCompany = new info(userInfos.company);
        
        
        if (userCompany._info===null){
            userCompany.printInfoInDom('.company-link'); 
            document.querySelector('.company').setAttribute('href',"");
        }
        
        else{
            const urlMorcelee2 = userCompany._info.split('/');
        
            if (urlMorcelee2[0].charAt(0)==='@'){  //gère le cas de la page d'acceuil
            document.querySelector('.company-link').innerText = urlMorcelee2[urlMorcelee2.length-1];
            document.querySelector('.company').setAttribute("href",'http://github.com/'+urlMorcelee2[urlMorcelee2.length-1].slice(1));
            }

            else{ 
            document.querySelector('.company-link').innerText ='@'+urlMorcelee2[urlMorcelee2.length-1];
            document.querySelector('.company').setAttribute("href",userCompany._info);
            }
        
        }

    }
    
}
}
