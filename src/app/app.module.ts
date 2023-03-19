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
import { NecroSkillComponent } from './router-container/router-items/skills/necro-skill/necro-skill.component';
import { AssaSkillComponent } from './router-container/router-items/skills/assa-skill/assa-skill.component';
import { AmaSkillComponent } from './router-container/router-items/skills/ama-skill/ama-skill.component';
import { SorcSkillComponent } from './router-container/router-items/skills/sorc-skill/sorc-skill.component';
import { NecEquipmentComponent } from './router-container/router-items/equipment/nec-equipment/nec-equipment.component';
import { AssaEquipmentComponent } from './router-container/router-items/equipment/assa-equipment/assa-equipment.component';
import { AmaEquipmentComponent } from './router-container/router-items/equipment/ama-equipment/ama-equipment.component';
import { SorcEquipmentComponent } from './router-container/router-items/equipment/sorc-equipment/sorc-equipment.component';
import { NecroStatisticsComponent } from './router-container/router-items/statistics/necro-statistics/necro-statistics.component';
import { AmaStatisticsComponent } from './router-container/router-items/statistics/ama-statistics/ama-statistics.component';
import { AssaStatisticsComponent } from './router-container/router-items/statistics/assa-statistics/assa-statistics.component';
import { SorcStatisticsComponent } from './router-container/router-items/statistics/sorc-statistics/sorc-statistics.component';
import { AmaStoryComponent } from './router-container/router-items/story/ama-story/ama-story.component';
import { SorcStoryComponent } from './router-container/router-items/story/sorc-story/sorc-story.component';
import { AssaStoryComponent } from './router-container/router-items/story/assa-story/assa-story.component';
import { NecroStoryComponent } from './router-container/router-items/story/necro-story/necro-story.component';


const appRoutes: Routes = [
  /*  { path: '', component: RouterContainerComponent }, */
  /*   { path: 'statistics', component: StatisticsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'story', component: StoryComponent },
    { path: 'equipment', component: EquipmentComponent }, */
  { path: 'necromancer', component: WelcomeComponent },
  { path: 'necromancer/skills', component: NecroSkillComponent },
  { path: 'necromancer/story', component: NecroStoryComponent },
  { path: 'necromancer/equipment', component: NecEquipmentComponent },
  { path: 'necromancer/statistics', component: NecroStatisticsComponent },
  { path: 'assassin', component: WelcomeComponent },
  { path: 'assassin/skills', component: AssaSkillComponent },
  { path: 'assassin/story', component: AssaStoryComponent },
  { path: 'assassin/statistics', component: AssaStatisticsComponent },
  { path: 'assassin/equipment', component: AssaEquipmentComponent },
  { path: 'sorceress', component: WelcomeComponent },
  { path: 'sorceress/skills', component: SorcSkillComponent },
  { path: 'sorceress/story', component: SorcStoryComponent },
  { path: 'sorceress/statistics', component: SorcStatisticsComponent },
  { path: 'sorceress/equipment', component: SorcEquipmentComponent },
  { path: 'amazon', component: WelcomeComponent },
  { path: 'amazon/skills', component: AmaSkillComponent },
  { path: 'amazon/story', component: AmaStoryComponent },
  { path: 'amazon/statistics', component: AmaStatisticsComponent },
  { path: 'amazon/equipment', component: AmaEquipmentComponent }
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
    AssaSkillComponent,
    AmaSkillComponent,
    SorcSkillComponent,
    NecEquipmentComponent,
    AssaEquipmentComponent,
    AmaEquipmentComponent,
    SorcEquipmentComponent,
    NecroStatisticsComponent,
    AmaStatisticsComponent,
    AssaStatisticsComponent,
    SorcStatisticsComponent,
    AmaStoryComponent,
    SorcStoryComponent,
    AssaStoryComponent,
    NecroStoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
