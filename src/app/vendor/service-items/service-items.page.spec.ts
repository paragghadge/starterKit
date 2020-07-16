import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceItemsPage } from './service-items.page';

describe('ServiceItemsPage', () => {
  let component: ServiceItemsPage;
  let fixture: ComponentFixture<ServiceItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
