import {Component, OnInit} from '@angular/core';
import { User, AuditLogs } from '../../domain/index';
import { CategoryService } from '../../_services/index';
import { SelectItem } from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  templateUrl: 'dropdowns.component.html',
  providers: [MessageService]
})
export class DropdownsComponent implements OnInit{
  loading: boolean;
  text: string;
  categories: SelectItem[];
  selectedCategory: string;
  selectedCategory2: string;

  results: string[];

  search(event) {
    this.categoryService.getMsCategoryDropdown().then(data => {
      this.results = data;
    });
  }

  constructor(private categoryService: CategoryService, private  ) {
    this.results = [];
    this.categories = [];
  }

  ngOnInit() {
    this.loading = true;
    var allCategories = this.categoryService.getMsCategoryDropdown().then(data => {
      this.results = data;
      console.log(data);
      for(var i = 0 ; i < this.results.length ; i++) {
        this.categories.push({ label: this.results[i]['categoryName'], value: this.results[i]['categoryCode']});
      }
    });
  }
}