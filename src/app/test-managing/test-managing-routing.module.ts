import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestListComponent } from './components/test-list/test-list.component';
import { CreateTestComponent } from './components/create-test/create-test.component';
import { SetAnswersComponent } from './components/set-answers/set-answers.component';
import { TestmanagingComponent } from 'src/app/test-managing/testmanaging/testmanaging.component';

const routes: Routes = [
  {
    path: '',
    component: TestmanagingComponent,
    children: [
      {
        path: 'testList',
        component: TestListComponent
      },
      {
        path: 'createTest',
        component: CreateTestComponent
      },
      {
        path: 'setAnswers',
        component: SetAnswersComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [TestListComponent, CreateTestComponent, SetAnswersComponent, TestmanagingComponent]
})

export class TestManagingRoutingModule { }
