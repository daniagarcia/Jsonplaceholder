import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './Componentes/comentarios/comentarios.component';
import { AlbumesComponent } from './Componentes/albumes/albumes.component';
import { FotosComponent } from './Componentes/fotos/fotos.component';
import { TodosComponent } from './Componentes/todos/todos.component';
import { PostsComponent } from './Componentes/posts/posts.component';

const router :Routes =[
  {path:"posts", component:PostsComponent},
  {path:"comentario", component:ComentariosComponent},
  {path:"albumes", component:AlbumesComponent},
  {path:"fotos", component:FotosComponent},
  {path:"todos",component:TodosComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavBarComponent,
    ComentariosComponent,
    AlbumesComponent,
    FotosComponent,
    TodosComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(router)

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
