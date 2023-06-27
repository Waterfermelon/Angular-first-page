import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album } from '../../interfaces/album.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public albumList: Album[] = [{
    id: "",
    name:"Dangerous Woman",
    author: "Ariana Grande"
  }]

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();
  
  onDeleteAlbum(id:string):void{
    this.onDeleteId.emit(id);
    
  }
}
