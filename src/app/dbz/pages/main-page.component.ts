import { Component} from '@angular/core';
import { Album } from '../interfaces/album.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{
    constructor(private dbzService: DbzService){
    }
    get albums(): Album[]{
        return [...this.dbzService.albums];
    }

    onDeleteAlbum(id:string):void{
        this.dbzService.deleteAlbum(id);
    }

    onNewAlbum(album : Album){
        this.dbzService.addlbum(album);
    }
}