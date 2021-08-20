import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { ListConversationsComponent } from './pages/list-conversations/list-conversations.component';
import { FriendsFavoritesComponent } from './pages/friends-favorites/friends-favorites.component';
import { TabsUsersComponent } from './pages/tabs-users/tabs-users.component';
import { CChatComponent } from './pages/c-chat/c-chat.component';
import { ConversationUserComponent } from './components/conversation-user/conversation-user.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { MaterialModule } from '../material/material.module';
import { MatbuttomComponent } from './shared/matbuttom/matbuttom.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    ListConversationsComponent,
    FriendsFavoritesComponent,
    TabsUsersComponent,
    CChatComponent,
    ConversationUserComponent,
    ContactoComponent,
    ContactosComponent,
    PerfilComponent,
    MatbuttomComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ChatRoutingModule,
    ReactiveFormsModule

  ]
})
export class ChatModule { }
