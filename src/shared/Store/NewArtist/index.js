import { observable, action} from 'mobx';
import get from 'axios';


export default class ArtistStore {
    @observable artistList = [];
    @action addArtist(elem) {
        const ArtistInfo = 'https://rest.bandsintown.com/artists/' + elem + '?app_id=1';
        let flag = true;
        this.artistList.map((item) => {
            return (
                item.name.toUpperCase() === elem.toUpperCase() ? flag = false : null
            )
        });
        if (flag) {
            get(ArtistInfo)
                .then(response=>{
                    if((response.data.name !== '')&&(response.data.name !== undefined)&&(response.data.name !== null)) {
                        this.artistList.push(response.data);
                    }
                })
                .catch(error=>{
                    console.log(error);
                });
        } else {
            alert('This artist added earlier');
        }

    }
    @action removeArtist(i) {
        this.artistList.map((item, count) => {
            return (
                item.id === i ? this.artistList.splice(count, 1) : null
            )
        });
    }
}


