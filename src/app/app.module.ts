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
import { InfoAlbumComponent } from './Componentes/info-album/info-album.component';
import { InfoPostsComponent } from './Componentes/info-posts/info-posts.component';
import { UsersComponent } from './Componentes/users/users.component';
import { InfoUsersComponent } from './Componentes/info-users/info-users.component';
import { PostsUsersComponent } from './Componentes/posts-users/posts-users.component';
import { ComentariosPostComponent } from './Componentes/comentarios-post/comentarios-post.component';
import { FotosAlbumComponent } from './Componentes/fotos-album/fotos-album.component';
import { AlbumUsersComponent } from './Componentes/album-users/album-users.component';
import { TodosUserComponent } from './Componentes/todos-user/todos-user.component';

const router :Routes =[
  {path:"posts", component:PostsComponent},
  {path:"comentario", component:ComentariosComponent},
  {path:"albumes", component:AlbumesComponent},
  {path:"fotos", component:FotosComponent},
  {path:"todos",component:TodosComponent},
  {path:"post/:id",component:PostsComponent},
  {path:"albumes/:id",component:InfoAlbumComponent},
  {path:"comentarios/:id",component:InfoPostsComponent},
  {path:"users",component:UsersComponent},
  {path:"users/:id",component:InfoUsersComponent},
  {path:"userspost/:id",component:PostsUsersComponent},
  {path:"postscomments/:id",component:ComentariosPostComponent},
  {path:"useralbum/:id",component:AlbumUsersComponent},
  {path:"fotosalbum/:id",component:FotosAlbumComponent},
  {path:"todosuser/:id",component:TodosUserComponent},

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
    PostsComponent,
    InfoAlbumComponent,
    InfoPostsComponent,
    UsersComponent,
    InfoUsersComponent,
    PostsUsersComponent,
    ComentariosPostComponent,
    FotosAlbumComponent,
    AlbumUsersComponent,
    TodosUserComponent
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
