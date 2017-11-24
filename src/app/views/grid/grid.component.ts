import {Component, OnInit} from '@angular/core';
import { User, AuditLogs } from '../../domain/index';
import { UserService,AuditLogsService } from '../../_services/index';

import {Message} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  templateUrl: 'grid.component.html',
  providers: [MessageService]
})
export class GridComponent implements  OnInit{
  loading: boolean;
  users: User[];
  auditLogs: AuditLogs[];
  totalAuditLogs: number;

  constructor(private userService: UserService,
              private auditLogsService: AuditLogsService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.loading = true;
    this.totalAuditLogs = 0;
    this.loadAllUsers();
    this.loadAllLogs(0);
  }

  private loadAllUsers() {
    setTimeout(() => {
      this.userService.getAll().subscribe(
          users => { this.users = users; },
          error => { this.messageService.add({severity: 'error', summary: '!', detail: error}) });
      this.loading = false;
    }, 1000);
  }

  private loadAllLogs(skipCount) {
    this.auditLogsService.getAll(skipCount).subscribe(auditLogs => { this.auditLogs = auditLogs});
    this.auditLogsService.getTotalCount() .then(total => this.totalAuditLogs = total);
  }

  paginate(event) {
    this.loadAllLogs(event.page);
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }
}