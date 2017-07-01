import { SumitaHttpService } from './../shared/sumita-http.service';
import { Component, OnInit } from '@angular/core';
import { DataListModule } from 'primeng/primeng';
import { MemberService } from './member.service';
import { Member } from './member';

@Component({
  selector: 'prasun-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  selectedMember: Member;

  displayDialog: boolean;

  constructor(private memberService: MemberService, private httpService: SumitaHttpService) {
    this.memberService.setData(0);
  }

  ngOnInit() {
    const page = this;
    this.memberService.getData()/*.toPromise()
      .then(
      members => {
        page.members = members;
        //console.log(members);
      });

    console.log(this.members);
    */.subscribe(function (data) {
        page.members = data;

        console.log("Completed !!!" + page.members);
      }, function (err) {
        console.error(err);
      }, function () {
        console.info('done' + page.members);
      });
  }

  selectMember(member: Member) {
    this.selectedMember = member;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedMember = null;
  }

}