// //API

//Méthode 2 : design patterns 

class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .catch(err => console.log('an error occurs', err))
    }
}


class EchoApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getInfos() {
       return await this.get()  ;
    }
}





//Méthode "Promises"


// function getInfos(url){
// fetch(url)
// .then(function(res) {
//   if (res.ok) {
//     return res.json();
//   }
// })
// .then(function(value) {

//   console.log(value);

//   //CREE LE HTML
//   const wrapper = document.createElement('div');
//   document.body.appendChild(wrapper);
//   wrapper.innerHTML = "<p> Login : "+value.login+" .</p><p> Id : "+value.id+" .</p><p><img src="+value.avatar_url+" /></p>";


// })
// .catch(function(err) {
//   const wrapper = document.createElement('div');
//   document.body.appendChild(wrapper);
//   wrapper.innerHTML = "<p> L'utilisateur demandé n'existe pas.</p>";
// })
// ;
// }


// //APPELS

// getInfos('https://api.github.com/users/octocat');
// getInfos('https://api.github.com/users/vincentVergerprout');
// getInfos('https://api.github.com/users/paulthomas');
// getInfos('https://api.github.com/users/ericshaffer');


//--------------------------------------------


