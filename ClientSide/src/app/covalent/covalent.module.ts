import { TdDialogService } from '@covalent/core/dialogs/services/dialog.service';
import {
  CovalentChipsModule,
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentFileModule,
  CovalentJsonFormatterModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentStepsModule,
  CovalentValidators,
} from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { NgModule } from '@angular/core';

@NgModule({
  providers :[ TdDialogService],
imports: [
  CovalentLayoutModule,
  CovalentStepsModule,
  CovalentHttpModule.forRoot(),
  CovalentHighlightModule,
  CovalentMarkdownModule,
  CovalentDynamicFormsModule,
  CovalentChipsModule,
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentNotificationsModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentFileModule,
  CovalentJsonFormatterModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule,
  CovalentPagingModule,
  CovalentSearchModule
]
, exports : [ CovalentLayoutModule,
  CovalentStepsModule,
  CovalentHttpModule,
  CovalentHighlightModule,
  CovalentMarkdownModule,
  CovalentDynamicFormsModule,
  CovalentChipsModule,
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentNotificationsModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentFileModule,
  CovalentJsonFormatterModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule,
  CovalentPagingModule,
  CovalentSearchModule
]
})
export class CovalentModule { }
