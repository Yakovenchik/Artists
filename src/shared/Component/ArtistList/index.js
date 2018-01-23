import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import './index.css'
import {Button, Image } from 'react-bootstrap';


@inject('artistStore') @observer export default class ArtistList extends Component{
    sendArtist(name){
        const artistStore = this.props.artistStore;
        if ((name === undefined)||(name === '')||(name === null)) {
            alert('Input name')
            }else {
               artistStore.addArtist(name);
            }
    }

    openDIV(id) {
        if (document.getElementById(id).style.display === 'none') {
            document.getElementById(id).style.display = 'flex';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    }
    render(){
        const artistStore = this.props.artistStore;
        let name='';
        return(
            <div>
                <div className='headerArtist'>
                    <h1>Artists</h1>
                    <div className='add_Artist'>
                        <div className='input_area'>
                            Input Artist's name:
                            <input type="text"  placeholder='Name' onChange={(item)=>name=item.target.value} id = 'inputArtistName'/>
                        </div>
                        <Button bsStyle="success" onClick={()=>{
                            document.getElementById('inputArtistName').value = '';
                            this.sendArtist(name);
                            name = '';
                        }}>
                            New Artist
                        </Button>
                    </div>
                </div>
                <div>
                    {artistStore.artistList.map((item)=>{
                        return(
                            <div key={item.id}>
                                <div className='Artist'>
                                    <Button bsStyle="success" onClick={()=>this.openDIV(item.id)}>Show Full Artist Information</Button>
                                    <div>
                                        <p>id:{item.id}</p>
                                        <h2>Artist:{item.name}</h2>
                                    </div>
                                    <Image bsStyle="success" rounded src = {item.image_url} alt={item.name} />
                                    <div id={item.id} className='full_Artist' style={{display: 'none'}}>
                                            <div className='input_area'>
                                                <p>id: {item.id}<br/>Artist: {item.name}</p>
                                                <Image bsStyle="success" rounded src = {item.image_url} alt={item.name} />
                                            </div>
                                            <p>Facebook Page: <a href = {item.facebook_page_url}>{item.facebook_page_url}</a></p>
                                            <p>Number of Upcoming Events: {item.upcoming_event_count}</p>
                                            <a href={item.url} target = "_blank">If you want to see additional information about events link it</a>
                                            <br/>
                                            <Button bsStyle="success" onClick={()=>this.openDIV(item.id)}>Close Full Artist's information</Button>
                                            <Button bsStyle="success" onClick={()=>{artistStore.removeArtist(item.id);this.openDIV(item.id)}}>Remove Artist</Button>
                                    </div>
                                    <Button bsStyle="success" onClick={()=>artistStore.removeArtist(item.id)}>Remove Artist</Button>
                                </div>
                            </div>
                        )
                        })}
                </div>
            </div>
        )
    }
}
