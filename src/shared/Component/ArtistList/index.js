import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {artistStore} from '../../Store/index';
import './index.css'


@observer
export default class ArtistList extends Component{
    sendArtist(newArtist){
        if ((newArtist.name === undefined)||(newArtist.name === '')||(newArtist.name === null)) {
                alert('Input name');
                return
            }
        artistStore.addArtist(newArtist);
    }

    openDIV(id) {
        if (document.getElementById(id).style.display === 'none') {
            document.getElementById(id).style.display = 'block';
            document.body.style.overflow = 'none';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    }
    render(){
        let newArtist={};
        return(
            <div>
                <div className={'headerArtist'}>
                    <h1>Artists</h1>
                    <div className={'add_Artist'}>
                        <div className={'input_area'}>
                            Input Artist's name:
                            <input type="text" id = 'inputArtistName'/>
                        </div>
                        <button onClick={()=>{
                            newArtist.name=document.getElementById('inputArtistName').value;
                            this.sendArtist(newArtist);
                        }}>
                            New Artist
                        </button>
                    </div>
                </div>
                <div>
                    {artistStore.artistList.map((item,i)=>{
                        return(
                            <div key={i}>
                                <div className={'Artist'}>
                                    <button onClick={()=>this.openDIV(i)}>Show Full Artist Information</button>
                                    <div>
                                        <p>id:{i}</p>
                                        <p>Artist:{item.name}</p>
                                    </div>
                                    <div id={i} className='full_Artist' style={{display: 'none'}}>
                                        <div>
                                            <div className='input_area'>
                                                <p>id: {item.id}<br/>Artist: {item.name}</p>
                                                <img src = {item.image_url} alt={item.name} />
                                            </div>
                                            <p>Facebook Page: <a href = {item.facebook_page_url}>{item.facebook_page_url}</a></p>
                                            <p>Number of Upcoming Events: {item.upcoming_event_count}</p>
                                            <a href={item.url} target = "_blank">If you want to see additional information about events link it</a>
                                            <br/>
                                            <button onClick={()=>this.openDIV(i)}>Close Full Artist's information</button>
                                            <button onClick={()=>artistStore.removeArtist(i)}>Remove Artist</button>
                                        </div>
                                    </div>
                                    <button onClick={()=>artistStore.removeArtist(i)}>Remove Artist</button>
                                </div>
                            </div>
                        )
                        })}
                </div>
            </div>
        )
    }
}