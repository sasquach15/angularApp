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




const appRoutes: Routes = [
  /*  { path: '', component: RouterContainerComponent }, */
  /*   { path: 'statistics', component: StatisticsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'story', component: StoryComponent },
    { path: 'equipment', component: EquipmentComponent }, */
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
  { path: 'barbarian/equipment', component: EquipmentComponent }
]

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
