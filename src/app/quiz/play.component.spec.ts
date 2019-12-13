import { TestBed, async } from '@angular/core/testing';
import { PlayComponent } from './play.component';

describe('PlayComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PlayComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dragdrop'`, () => {
    const fixture = TestBed.createComponent(PlayComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('dragdrop');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(PlayComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to dragdrop!');
  });
});