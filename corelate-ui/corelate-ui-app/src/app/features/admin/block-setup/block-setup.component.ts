import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SweetAlertService } from 'ngx-sweetalert2';
import { Subject } from 'rxjs/Subject';

import { Block, BlockPanel } from '@corelate/shared/models';
import { BlockTemplate, BlockType } from '@corelate/shared/enums';
import { BlocksService } from '@corelate/core/services';


@Component({
  selector: 'corelate-ui-block-setup',
  templateUrl: './block-setup.component.html',
  styleUrls: ['./block-setup.component.scss']
})
export class BlockSetupComponent implements OnInit, OnDestroy {
  @Input() modal;

  // expose BlockTemplate enum to html
  public BlockTemplate = BlockTemplate;
  public BlockType = BlockType;
  public blockTemplate: string;
  public blockContents  = [];
  public block: Block = new Block([], null, null);
  public showCreateNewBlockWindow = false;
  public selectedTemplate = false;
  public selectedIndex: number = null;
  public singleColumnBlockComponents = [
    { value: BlockType.CAROUSEL, label: 'Carousel' },
    { value: BlockType.NEWS, label: 'News' },
    { value: BlockType.ANNOUNCEMENTS, label: 'Announcements' },
    { value: BlockType.EVENTS, label: 'Events' },
    { value: BlockType.ADVOCACIES, label: 'Advocacies' },
    { value: BlockType.FAQ, label: 'FAQ' },
    { value: BlockType.HELP, label: 'Help' },
    { value: BlockType.CONTACT_FORM, label: 'Contact Form' },
    { value: BlockType.CONTACT_INFO, label: 'Contact Info' },
    { value: BlockType.GRID, label: 'Grid' },
    { value: BlockType.CUSTOM_CONTENT, label: 'Custom Content' }
  ];
  public dualColumnBlockComponents = [
    { value: BlockType.NEWS, label: 'News' },
    { value: BlockType.ANNOUNCEMENTS, label: 'Announcements' },
    { value: BlockType.EVENTS, label: 'Events' },
    { value: BlockType.ADVOCACIES, label: 'Advocacies' },
    { value: BlockType.FAQ, label: 'FAQ' },
    { value: BlockType.HELP, label: 'Help' },
    { value: BlockType.CONTACT_FORM, label: 'Contact Form' },
    { value: BlockType.CONTACT_INFO, label: 'Contact Info' },
    { value: BlockType.CUSTOM_CONTENT, label: 'Custom Content' }
  ];

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private blocksService: BlocksService,
    private alert: SweetAlertService
  ) { }

  ngOnInit() {
    this.blocksService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        block => this.block = block,
        error => console.log(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  createNewBlock() {
    this.showCreateNewBlockWindow = true;
  }

  selectTemplate(blockTemplate) {
    this.blockTemplate = blockTemplate;
  }

  confirmTemplate(hasSelected) {
    const contentLength = this.blockContents.length;
    if (contentLength === 0) {
      switch (this.blockTemplate) {
        case BlockTemplate.ONE_COLUMN:
          this.blockContents = [
            { 'position' : 1, 'content' : '' },
          ];
          break;
        case BlockTemplate.TWO_COLUMNS:
          this.blockContents = [
            { 'position' : 1, 'content' : '' },
            { 'position' : 2, 'content' : '' },
          ];
          break;
        default:
          break;
      }
    } else if (this.blockTemplate === BlockTemplate.ONE_COLUMN && contentLength === 2) {
      this.blockContents.pop();
    } else if (this.blockTemplate === BlockTemplate.TWO_COLUMNS && contentLength === 1) {
      this.blockContents.push({ 'position' : 2, 'content' : '' });
    }

    this.selectedTemplate = hasSelected;
  }

  hasEmptyContent(): boolean {
    if (this.blockContents) {
      return this.blockContents.some(blockPanel => blockPanel.content === '');
    }

    return true;
  }

  addBlock(): void {
    const blockPanel = new BlockPanel('', [], 0, null, null);
    blockPanel.template = this.blockTemplate;
    blockPanel.contents = this.blockContents;

    // update else add
    if (this.selectedIndex !== null) {
      this.block.blockPanels[this.selectedIndex] = blockPanel;
    } else {
      this.block.blockPanels.push(blockPanel);
    }

    // reset
    this.blockTemplate = null;
    this.blockContents = [];
    this.selectedTemplate = false;
    this.selectedIndex = null;
    this.showCreateNewBlockWindow = false;
  }

  updateBlock(index: number) {
    const blockPanel = this.block.blockPanels[index];
    this.showCreateNewBlockWindow = true;
    this.selectedIndex = index;

    this.blockTemplate = blockPanel.template;
    this.blockContents = blockPanel.contents;

    if (blockPanel.template === BlockTemplate.ONE_COLUMN) {
      this.blockContents.push({'position' : 2, 'content' : ''});
    }

    if (this.blockTemplate === BlockTemplate.TWO_COLUMNS && blockPanel.template === BlockTemplate.ONE_COLUMN) {
      this.blockContents.slice(-1, 1);
    }
  }

  deleteBlock(index: number) {
    this.alert.confirm({
      text: 'Are you sure you want to delete this block?',
      confirmButtonClass: 'btn light-green darken-2 waves-effect waves-light',
      cancelButtonClass: 'btn btn-outline-blue-grey',
      confirmButtonText: 'Yes',
      buttonsStyling: false
    }).then(() => {
      this.block.blockPanels.splice(index, 1);
    },
      () => {}
    );
  }

  saveLayout(): void {
    this.alert.confirm({
      title: 'Are you sure you want to save this page layout?',
      text: 'This action cannot be undone.',
      confirmButtonClass: 'btn light-green darken-2 waves-effect waves-light',
      cancelButtonClass: 'btn btn-outline-blue-grey',
      confirmButtonText: 'Yes',
      type: 'question',
      buttonsStyling: false
    }).then(() => {
      this.block.blockPanels.map((blockPanel, index) => {
        blockPanel.position = index;
        return blockPanel;
      });

      this.blocksService.save(this.block)
        .takeUntil(this.destroy$)
        .subscribe(
          (response) => {
            this.alert.success({ text: 'Page layout has been saved.', timer: 1500,
            showConfirmButton: false }).catch(function () {});
            this.modal.hide();
          },
          (error) => console.log(error)
        );
      },
      () => {}
    );
  }

  resetUi() {
    this.showCreateNewBlockWindow = false;
    this.selectedTemplate = false;
    this.selectedIndex = null;
  }
}
