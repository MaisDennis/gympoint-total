import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import StudentList from '../pages/StudentList';
import StudentCreate from '../pages/StudentCreate';
import StudentUpdate from '../pages/StudentUpdate';
import StudentDelete from '../pages/StudentDelete';
import PlanList from '../pages/PlanList';
import PlanCreate from '../pages/PlanCreate';
import PlanUpdate from '../pages/PlanUpdate';
import PlanDelete from '../pages/PlanDelete';
import EnrollList from '../pages/EnrollList';
import EnrollCreate from '../pages/EnrollCreate';
import EnrollUpdate from '../pages/EnrollUpdate';
import EnrollDelete from '../pages/EnrollDelete';
import HelpOrderList from '../pages/HelpOrderList';
import HelpOrderAnswer from '../pages/HelpOrderAnswer';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" exact component={StudentList} isPrivate />
      <Route
        path="/students/create"
        exact
        component={StudentCreate}
        isPrivate
      />
      <Route
        path="/students/update/:id"
        exact
        component={StudentUpdate}
        isPrivate
      />
      <Route
        path="/students/delete/:id"
        exact
        component={StudentDelete}
        isPrivate
      />

      <Route path="/plans" exact component={PlanList} isPrivate />
      <Route path="/plans/create" exact component={PlanCreate} isPrivate />
      <Route path="/plans/update/:id" exact component={PlanUpdate} isPrivate />
      <Route path="/plans/:id/delete" exact component={PlanDelete} isPrivate />
      <Route path="/enrolls" exact component={EnrollList} isPrivate />
      <Route path="/enrolls/create" exact component={EnrollCreate} isPrivate />
      <Route
        path="/enrolls/update/:id"
        exact
        component={EnrollUpdate}
        isPrivate
      />
      <Route
        path="/enrolls/delete/:id"
        exact
        component={EnrollDelete}
        isPrivate
      />
      <Route
        path="/students/help-orders"
        exact
        component={HelpOrderList}
        isPrivate
      />
      <Route
        path="/students/answer/:id"
        exact
        component={HelpOrderAnswer}
        isPrivate
      />
    </Switch>
  );
}
