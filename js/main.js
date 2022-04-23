
class App{ 

        constructor(){
            this.profileWrapper = document.querySelector('#search-form');
            this.toggleDayNight = document.querySelector(".mode");
        }

        main(){

            this.profileWrapper.addEventListener("submit",function(e){

                if(document.querySelector('#user-name').value===""){
                return;
                }

                else{  

                    const newPerson = new User(document.querySelector('#user-name').value);
                    newPerson.fillProfile();
                    e.preventDefault();
                    console.log(sessionStorage);
                    document.querySelector('#user-name').value="";
                } 
                   
            
            })
        }
      
        
        dayNight(){
            this.toggleDayNight.addEventListener('click',function(e){
            
            if(sessionStorage.mode==='dark'){
            document.documentElement.style.setProperty('--veryLightGrey_lightmode','#F6F8FF');
            document.documentElement.style.setProperty('--grey_lightmode','#697C9A');
            document.documentElement.style.setProperty('--white_lightmode','#FEFEFE');
            document.documentElement.style.setProperty('--darkGrey_lightmode','#2B3442');
            document.documentElement.style.setProperty('--greyBlue_lightmode','#4B6A9B');
            
            sessionStorage.setItem('mode','light');
            }   
            else{
            document.documentElement.style.setProperty('--veryLightGrey_lightmode','#141D2F');
            document.documentElement.style.setProperty('--grey_lightmode','#FFFFFF');
            document.documentElement.style.setProperty('--white_lightmode','#1E2A47');
            document.documentElement.style.setProperty('--darkGrey_lightmode','#FFFFFF');
            document.documentElement.style.setProperty('--greyBlue_lightmode','#FFFFFF');    

            sessionStorage.setItem('mode','dark');
            }
             console.log(sessionStorage);
            })
           

        }

        customHover(){

            let logo = document.querySelector('.moon-sun');
            let text = document.querySelector('.mode > div');

            this.toggleDayNight.addEventListener('click',function(e){
                

                if(sessionStorage.mode==='dark'){

                logo.setAttribute('data-cycle','night');
                logo.classList.replace('moon','sun'); 
                logo.style.backgroundColor = 'white';

                text.setAttribute('data-cycle','night');
                text.innerText ='LIGHT';
                text.style.color = 'white';

                }
                else{

                logo.setAttribute('data-cycle','day');
                logo.classList.replace('sun','moon'); 
                logo.style.backgroundColor = '#697C9A'; 

                text.setAttribute('data-cycle','day');
                text.innerText ='DARK';
                text.style.color = '#697C9A';

                }
            })

            this.toggleDayNight.addEventListener('mouseenter',function(e){

               if(logo.getAttribute('data-cycle')==='night'){
                    text.style.color = '#4B6A9B';
                    logo.style.backgroundColor = '#4B6A9B';
               }
               else {
                    text.style.color = '#2B3442';
                    logo.style.backgroundColor = '#2B3442';
               }
            })

            this.toggleDayNight.addEventListener('mouseleave',function(e){

                if(logo.getAttribute('data-cycle')==='night'){
                     text.style.color = 'white';
                     logo.style.backgroundColor ="white";
                }
                else {
                     text.style.color = '#697C9A';
                     logo.style.backgroundColor = '#697C9A';
                }
             })

            
        }


        init(user){
            const initUser = new User(user);
            initUser.fillProfile();
        }
    

}



//MAIN


var app = new App();

if (sessionStorage.hasOwnProperty('profil')){
    app.init(sessionStorage.profil);
}
else{
    app.init('octocat');
}


app.main();
app.dayNight();
app.customHover();
console.log(sessionStorage);






