import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { BlockSetupComponent } from '@corelate/features/admin/block-setup/block-setup.component';
import { Block } from '@corelate/shared/models';
import { BlocksService } from '@corelate/core/services';
import { AuthService } from '@corelate/auth/services';
import { BlockTemplate, BlockType } from '@corelate/shared/enums';

import { HeaderComponent } from '@corelate/shared/components/header/header.component';
import { HeaderComponent as HeaderAdminComponent } from '@corelate/features/admin/header/header.component';
import { FooterComponent } from '@corelate/shared/components/footer/footer.component';
import { FooterComponent as FooterAdminComponent } from '@corelate/features/admin/footer/footer.component';


@Component({
  selector: 'corelate-ui-index',
  host: { class: 'd-flex w-100 justify-content-start flex-column public-container'},
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(BlockSetupComponent)
  public blockSetupComponent: BlockSetupComponent;

  @ViewChild(HeaderComponent)
  public headerComponent: HeaderComponent;

  @ViewChild(HeaderAdminComponent)
  public headerAdminComponent: HeaderAdminComponent;

  @ViewChild(FooterComponent)
  public footerComponent: FooterComponent;

  @ViewChild(FooterAdminComponent)
  public footerAdminComponent: FooterAdminComponent;

  public block: Block = new Block([], null, null);
  public BlockTemplate = BlockTemplate;
  public BlockType = BlockType;
  public isCollapsed = true;
  public isLoggedIn = false;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private blocksService: BlocksService, private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.blocksService.get()
      .takeUntil(this.destroy$)
      .subscribe(
        block => this.block = block,
        error => console.log(error)
      );
  }

  showDivider(i) {
    if (i === this.block.blockPanels.length - 1) { // hide if last block
      return false;
    } else if (this.block.blockPanels[i].contents[0].content === BlockType.CAROUSEL) { // hide if current block is carousel
      return false;
    } else if (i < this.block.blockPanels.length - 1 &&
               this.block.blockPanels[i+1].contents[0].content === BlockType.CAROUSEL) { // hide if next block is carousel
      return false;
    } else {
      return true;
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onShownBlocksModal() {
    this.blockSetupComponent.ngOnInit();
  }

  onHiddenBlocksModal() {
    this.ngOnInit();
    this.blockSetupComponent.resetUi();
  }

  onShowHeaderModal() {
    this.headerAdminComponent.ngOnInit();
  }

  onHideHeaderModal() {
    this.headerComponent.ngOnInit();
  }

  onShowFooterModal() {
    this.footerAdminComponent.ngOnInit();
  }

  onHideFooterModal() {
    this.footerComponent.ngOnInit();
  }

  onCollapsed(isCollapsed) {
    this.isCollapsed = isCollapsed;
  }

  isGeneralContent(content) {
    return (content === BlockType.ANNOUNCEMENTS || content === BlockType.NEWS || content === BlockType.EVENTS || content === BlockType.ADVOCACIES);
  }
}
