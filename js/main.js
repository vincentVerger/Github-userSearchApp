
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
            document.documentElement.style.setProperty('--veryLightGrey_lightmode','#F6F8FF');
            document.documentElement.style.setProperty('--grey_lightmode','#697C9A');
            document.documentElement.style.setProperty('--white_lightmode','#FEFEFE');
            document.documentElement.style.setProperty('--darkGrey_lightmode','#2B3442');
            document.querySelector('.moon-sun').classList.replace('sun','moon');
            document.querySelector('.mode span').innerText ='DARK';
            sessionStorage.setItem('mode','light');
            }
            else{
            document.documentElement.style.setProperty('--veryLightGrey_lightmode','#141D2F');
            document.documentElement.style.setProperty('--grey_lightmode','#FFFFFF');
            document.documentElement.style.setProperty('--white_lightmode','#1E2A47');
            document.documentElement.style.setProperty('--darkGrey_lightmode','#FFFFFF');
            document.querySelector('.moon-sun').classList.replace('moon','sun');
            document.querySelector('.mode span').innerText ='LIGHT';
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
console.log(sessionStorage)





