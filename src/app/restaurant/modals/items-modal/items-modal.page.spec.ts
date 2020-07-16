import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemsModalPage } from './items-modal.page';

describe('ItemsModalPage', () => {
  let component: ItemsModalPage;
  let fixture: ComponentFixture<ItemsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
