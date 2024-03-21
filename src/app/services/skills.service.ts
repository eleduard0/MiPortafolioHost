import { Injectable } from '@angular/core';
import { Skills } from '../models/skills';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url = "Skills"

  constructor(private http: HttpClient) { }

  public GetSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${environment.apiUrl}/${this.url}`);
  }
}
