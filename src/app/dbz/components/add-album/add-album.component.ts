import { Component, EventEmitter, Output } from '@angular/core';
import { Album } from '../../interfaces/album.interface';

@Component({
  selector: 'dbz-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  
  @Output()
  onNewAlbum: EventEmitter<Album> = new EventEmitter();

  public album: Album = {
    id:"",
    name: "",
    author: "",
  };

  emitAlbum():void{
    console.log(this.album);
    if(this.album.name.length === 0 || this.album.author.length === 0 ) return;

    this.onNewAlbum.emit(this.album);
    
    this.album = {id:"",name:"", author:""}
    
  }
}
