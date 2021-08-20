import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListConversationsComponent } from './pages/list-conversations/list-conversations.component';
import { FriendsFavoritesComponent } from './pages/friends-favorites/friends-favorites.component';
import { ContactosComponent } from './pages/contactos/contactos.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'conversations', component: ListConversationsComponent },
      { path: 'contactos',     component: ContactosComponent         },
      { path: 'favorites',     component: FriendsFavoritesComponent  },
      { path: "**",            redirectTo: "conversations"           }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
