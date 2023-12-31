/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, Input } from '@angular/core';
import { AlfrescoApiService } from 'ng2-alfresco-core';
import { DataCellEvent, DataRowActionEvent, DataSorting, ObjectDataColumn, ObjectDataRow, ObjectDataTableAdapter } from 'ng2-alfresco-datatable';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'datatable-demo',
    templateUrl: './datatable-demo.component.html',
    styleUrls: ['./datatable-demo.component.css']
})
export class DataTableDemoComponent {

    multiselect: boolean = false;
    data: ObjectDataTableAdapter;

    @Input()
    selectionMode = 'single';

    selectionModes = [
        { value: 'none', viewValue: 'None' },
        { value: 'single', viewValue: 'Single' },
        { value: 'multiple', viewValue: 'Multiple' }
    ];

    private _imageUrl: string = 'http://placehold.it/140x100';
    private _createdBy: any = {
        name: 'Denys Vuika',
        email: 'denys.vuika@alfresco.com'
    };

    constructor(private apiService: AlfrescoApiService) {
        this.reset();
    }

    reset() {
        this.data = new ObjectDataTableAdapter(
            [
                {
                    id: 1,
                    name: 'Name 1',
                    createdOn: new Date(2016, 6, 2, 15, 8, 1),
                    createdBy: this._createdBy,
                    icon: 'material-icons://folder_open'
                },
                {
                    id: 2,
                    name: 'Name 2',
                    createdOn: new Date(2016, 6, 2, 15, 8, 2),
                    createdBy: this._createdBy,
                    icon: 'material-icons://accessibility'
                },
                {
                    id: 3,
                    name: 'Name 3',
                    createdOn: new Date(2016, 6, 2, 15, 8, 3),
                    createdBy: this._createdBy,
                    icon: 'material-icons://alarm'
                },
                {
                    id: 4,
                    name: 'Image 1',
                    createdOn: new Date(2016, 6, 2, 15, 8, 4),
                    createdBy: this._createdBy,
                    icon: this._imageUrl
                }
            ],
            [
                { type: 'image', key: 'icon', title: '', srTitle: 'Thumbnail' },
                { type: 'text', key: 'id', title: 'Id', sortable: true },
                { type: 'text', key: 'createdOn', title: 'Created On', sortable: true },
                { type: 'text', key: 'name', title: 'Name', cssClass: 'full-width name-column', sortable: true },
                { type: 'text', key: 'createdBy.name', title: 'Created By', sortable: true }
            ]
        );

        this.data.setSorting(new DataSorting('id', 'asc'));
    }

    addRow() {
        let id = this.data.getRows().length + 1;
        let row = new ObjectDataRow({
            id: id,
            name: 'Name ' + id,
            createdOn: new Date(),
            icon: 'material-icons://extension',
            createdBy: this._createdBy
        });
        this.data.getRows().push(row);
        this.data.sort();
    }

    replaceRows() {
        let objects = [
            {
                id: 10,
                name: 'Name 10',
                createdBy: this._createdBy,
                createdOn: new Date(2016, 6, 2, 15, 8, 5),
                icon: 'material-icons://face'
            },
            {
                id: 11,
                name: 'Name 11',
                createdBy: this._createdBy,
                createdOn: new Date(2016, 6, 2, 15, 8, 6),
                icon: 'material-icons://language'
            },
            {
                id: 12,
                name: 'Name 12',
                createdBy: this._createdBy,
                createdOn: new Date(2016, 6, 2, 15, 8, 7),
                icon: 'material-icons://pets'
            },
            {
                id: 13,
                name: 'Image 13',
                createdBy: this._createdBy,
                createdOn: new Date(2016, 6, 2, 15, 8, 8),
                icon: this._imageUrl
            }
        ];
        let rows = objects.map(obj => new ObjectDataRow(obj));
        this.data.setRows(rows);
    }

    replaceColumns() {
        let schema = [
            { type: 'text', key: 'id', title: 'Id', sortable: true },
            { type: 'text', key: 'name', title: 'Name', sortable: true, cssClass: 'full-width name-column' }
        ];
        let columns = schema.map(col => new ObjectDataColumn(col));
        this.data.setColumns(columns);
    }

    onShowRowActionsMenu(event: DataCellEvent) {
        let myAction = {
            title: 'Hello'
            // you custom metadata needed for onExecuteRowAction
        };
        event.value.actions = [
            myAction
        ];
    }

    onExecuteRowAction(event: DataRowActionEvent) {
        let args = event.value;
        console.log(args.row);
        console.log(args.action);
        window.alert(`My custom action: ${args.action.title}`);
    }

    onRowClick(event) {
        console.log(event);
    }

    onRowDblClick(event) {
        console.log(event);
    }

    getRowForNode() {
        let opts: any = {
            includeSource: true,
            include: ['path', 'properties', 'allowableOperations']
        };

        Observable.fromPromise(this.apiService.getInstance().nodes
            .getNodeInfo('-my-', opts)).subscribe((data) => {
                console.log('FUnNy');
                console.log(data);
                let objects = new ObjectDataTableAdapter([
                    {
                        id: data,
                        name: data,
                        createdBy: data,
                        createdOn: new Date(),
                        icon: 'material-icons://face'
                    }],
                    [
                        { type: 'image', key: 'icon', title: '', srTitle: 'Thumbnail' },
                        { type: 'text', key: 'id', title: 'Id', sortable: true },
                        { type: 'text', key: 'createdOn', title: 'Created On', sortable: true },
                        { type: 'text', key: 'name', title: 'Name', cssClass: 'full-width name-column', sortable: true },
                        { type: 'text', key: 'createdBy.name', title: 'Created By', sortable: true }
                    ]);
                this.data = objects;
            });
    }
}
