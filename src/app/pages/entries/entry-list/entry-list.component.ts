import { Component, OnInit } from '@angular/core';

import { Entry } from "../shared/entry.model";
import { EntryService } from "../shared/entry.service";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getAll().subscribe(
      entries => this.entries = entries,
      error => alert ('Error on get all entries')
    )
  }

  deleteEntry(entry){
    const mustDelete = confirm ("Do you really want to delete this item?");

    if (mustDelete){
      this.entryService.delete(entry.id).subscribe(
        () => this.entries = this.entries.filter(element => element != entry),
        () => alert("Error when try to delete this entry")
      )
    }
  }

}
