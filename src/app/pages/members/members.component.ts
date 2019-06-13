import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';
import { Observable } from 'rxjs';
import { async } from 'q';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members$: Object;

  constructor(private membersdata: MembersService) { }

  ngOnInit() {
    this.membersdata.getUsers().subscribe(data => { this.members$ = data });
    

  }

}
