import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextpredifindpipeComponent } from './textpredifindpipe.component';

describe('TextpredifindpipeComponent', () => {
  let component: TextpredifindpipeComponent;
  let fixture: ComponentFixture<TextpredifindpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextpredifindpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextpredifindpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
