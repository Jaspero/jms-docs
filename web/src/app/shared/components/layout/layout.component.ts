import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {StateService} from '../../services/state/state.service';

interface TestData {
  name: string;
  navigate: string;
  children?: TestData[];
}

const GetChildren = (node: TestData) => of(node.children);
const TC = new NestedTreeControl(GetChildren);

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public router: Router,
    public state: StateService,
    private afs: AngularFirestore
  ) {
  }

  tc = TC;
  sidebar$: Observable<any>;

  ngOnInit(): void {

    this.sidebar$ = this.afs.doc<{
      navigation: {
        items: any[]
      }
    }>('settings/docs-layout').valueChanges({idField: 'id'}).pipe(
      map(layout => layout.navigation.items)
    );
  }

  hasChild(_: number, node: TestData) {
    return node.children != null && node.children.length > 0;
  }
}
