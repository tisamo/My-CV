import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewvideomodalComponent } from './previewvideomodal.component';

describe('PreviewvideomodalComponent', () => {
  let component: PreviewvideomodalComponent;
  let fixture: ComponentFixture<PreviewvideomodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewvideomodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewvideomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
