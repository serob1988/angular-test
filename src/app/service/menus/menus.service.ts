import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Menu {
  title: "",
  url: ""
}

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private afs: AngularFirestore) { }

  getMenus(): Observable<Menu[]> {
    return this.afs.collection<Menu>("menus").snapshotChanges().pipe(
      map((menus) =>
        menus.map((a) => {
          const data = a.payload.doc.data() as Menu;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  addMenu(menu: Menu) {
    this.afs.collection("menus").add(menu);
  }

  deleteMenu(menuId: string) {
    this.afs.doc('menus/'+menuId).delete();
  }

  updateMenu(menuId: string, menu: Menu) {
    this.afs.doc('menus/'+menuId).update(menu);
  }


}
