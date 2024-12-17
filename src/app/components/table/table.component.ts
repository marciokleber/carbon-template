import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { AccordionModule, TableModel, TableItem, TableHeaderItem, TableModule } from 'carbon-components-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'table-component',
  imports: [AccordionModule, TableModule, DragDropModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tableModel: TableModel;

  constructor() {
    this.tableModel = new TableModel();

    this.tableModel.header = [
      new TableHeaderItem({ data: 'Nome' }),
      new TableHeaderItem({ data: 'Idade' }),
      new TableHeaderItem({ data: 'Cidade' }),
    ];

    this.tableModel.data = [
      [new TableItem({ data: 'João' }), new TableItem({ data: 25 }), new TableItem({ data: 'Belém' })],
      [new TableItem({ data: 'Maria' }), new TableItem({ data: 30 }), new TableItem({ data: 'São Paulo' })],
      [new TableItem({ data: 'Pedro' }), new TableItem({ data: 28 }), new TableItem({ data: 'Curitiba' })]
    ];
  }

  // Método de arrasto
  dropTable(event: CdkDragDrop<TableItem[][]>) {
    if (event.previousIndex !== event.currentIndex) {
      moveItemInArray(this.tableModel.data, event.previousIndex, event.currentIndex);
    }
  }
}
