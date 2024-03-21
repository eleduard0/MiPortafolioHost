import { Component } from '@angular/core';
import { Skills } from '../../models/skills';
import { SkillsService } from '../../services/skills.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skills[]=[];

  constructor(private skService: SkillsService){}

  ngOnInit():void{
    this.skService.GetSkills().subscribe((result:Skills[]) => (this.skills=result));
    
  }

}
