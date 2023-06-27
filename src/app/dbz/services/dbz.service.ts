import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    public albums: Album[] = [{
        id: uuid(),
        name:"Future Nostalgia",
        author: "Dua Lipa"
    },
    {
        id: uuid(),
        name: "Harrys house",
        author: "Harry Styles"
    },
    {
        id: uuid(),
        name: "Midnights",
        author: "Taylor Swift"
    }
];

    addlbum(album:Album):void{
        album.id=uuid();
        this.albums.push(album);    
    }

    deleteAlbum(id:string):void{    
        this.albums = this.albums.filter(a => a.id !==id);
    }    
}