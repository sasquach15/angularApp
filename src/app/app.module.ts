import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CharacterWindowComponent } from './character-window/character-window.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterContainerComponent } from './router-container/router-container.component';
import { StatisticsComponent } from './router-container/router-items/statistics/statistics.component';
import { SkillsComponent } from './router-container/router-items/skills/skills.component';
import { StoryComponent } from './router-container/router-items/story/story.component';
import { EquipmentComponent } from './router-container/router-items/equipment/equipment.component';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { WelcomeComponent } from './router-container/welcome/welcome.component';
import { LogInComponent } from './router-container/router-items/log-in/log-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { LoggedInComponent } from './router-container/router-items/logged-in/logged-in.component';
import { environment } from './environment';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA_fqisKxrD8L15-z_jhMX-1_gReIr1XEE',
  authDomain: 'database-5c8f7.firebaseapp.com',
  databaseURL:
    'https://database-5c8f7-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'database-5c8f7',
  storageBucket: 'database-5c8f7.appspot.com',
  messagingSenderId: '462867036523',
  appId: '1:462867036523:web:dcbb0f3118e5fe2bfaf42e',
  measurementId: 'G-NM5E887VX2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const appRoutes: Routes = [
  { path: 'necromancer', component: WelcomeComponent },
  { path: 'necromancer/skills', component: SkillsComponent },
  { path: 'necromancer/story', component: StoryComponent },
  { path: 'necromancer/equipment', component: EquipmentComponent },
  { path: 'necromancer/statistics', component: StatisticsComponent },
  { path: 'assassin', component: WelcomeComponent },
  { path: 'assassin/skills', component: SkillsComponent },
  { path: 'assassin/story', component: StoryComponent },
  { path: 'assassin/statistics', component: StatisticsComponent },
  { path: 'assassin/equipment', component: EquipmentComponent },
  { path: 'sorceress', component: WelcomeComponent },
  { path: 'sorceress/skills', component: SkillsComponent },
  { path: 'sorceress/story', component: StoryComponent },
  { path: 'sorceress/statistics', component: StatisticsComponent },
  { path: 'sorceress/equipment', component: EquipmentComponent },
  { path: 'barbarian', component: WelcomeComponent },
  { path: 'barbarian/skills', component: SkillsComponent },
  { path: 'barbarian/story', component: StoryComponent },
  { path: 'barbarian/statistics', component: StatisticsComponent },
  { path: 'barbarian/equipment', component: EquipmentComponent },
  { path: 'login', component: LogInComponent },
  { path: 'loggedIn', component: LoggedInComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterWindowComponent,
    NavigationComponent,
    RouterContainerComponent,
    StatisticsComponent,
    SkillsComponent,
    StoryComponent,
    EquipmentComponent,
    AlertComponent,
    WelcomeComponent,
    LogInComponent,
    LoadingSpinnerComponent,
    LoggedInComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
