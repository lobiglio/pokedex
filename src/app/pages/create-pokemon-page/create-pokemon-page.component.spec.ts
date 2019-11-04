import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePokemonPageComponent } from './create-pokemon-page.component';

describe('CreatePokemonPageComponent', () => {
  let component: CreatePokemonPageComponent;
  let fixture: ComponentFixture<CreatePokemonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePokemonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
