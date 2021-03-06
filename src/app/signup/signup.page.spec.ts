import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";

import {SignupPage} from "./signup.page";

describe("SignupPage", () => {
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [SignupPage],
      imports: [ReactiveFormsModule, IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
