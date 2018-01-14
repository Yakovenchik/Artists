import { observable, action} from 'mobx';

export default class ArtistStore{
    xhr = new XMLHttpRequest();
    xhr1 = new XMLHttpRequest();
    @observable artistList=[];
    @action addArtist(elem){
        let Artistinfo = 'https://rest.bandsintown.com/artists/'+elem.name+'?app_id=1';
        this.xhr.open('GET', Artistinfo, false);
        this.xhr.send();
        if (this.xhr.status !== 200) {
            alert( this.xhr.status + ': ' + this.xhr.statusText );
        } else {
            elem = JSON.parse(this.xhr.response);
        }
            console.log(elem);
            this.artistList.push(elem);
         }

    @action removeArtist(i){
        this.artistList.splice(i, 1);
    }

}