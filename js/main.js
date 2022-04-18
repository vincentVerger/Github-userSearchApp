
class App{ 

        constructor(){
            this.profileWrapper = document.querySelector('#search-form');
            this.toggleDayNight = document.querySelector(".mode");
        }

        main(){

            this.profileWrapper.addEventListener("submit",function(e){

            const newPerson = new User(document.querySelector('#user-name').value);
            newPerson.fillProfile();
            e.preventDefault();
            sessionStorage.setItem('profil',document.querySelector('#user-name').value);
            console.log(sessionStorage);
            })
        }
        

        dayNight(){
            this.toggleDayNight.addEventListener('click',function(e){
            
            if(sessionStorage.mode==='dark'){
            document.documentElement.style.setProperty('--veryLightGrey_lightmode','red');
            document.documentElement.style.setProperty('--grey_lightmode','green');
            sessionStorage.setItem('mode','light');
            }
            else{
            document.documentElement.style.setProperty('--veryLightGrey_lightmode','#F6F8FF');
            document.documentElement.style.setProperty('--grey_lightmode','#697C9A');
            sessionStorage.setItem('mode','dark');
            }
            })


        }


        init(user){
            const initUser = new User(user);
            initUser.fillProfile();
        }

}
//     });

var app = new App();

//logique de la page

if (sessionStorage.hasOwnProperty('profil')){
    app.init(sessionStorage.profil);
}
else{
    app.init('octocat');
}
app.main();
app.dayNight();





