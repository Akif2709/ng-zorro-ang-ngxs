import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { InstructorsActions } from './actions';
import { mergeMap, tap } from 'rxjs/operators';
import { InstructorsHttpService } from '../services/instructors-http.service';
import { InstructorsStateModel } from '../models/state.model';

@State<InstructorsStateModel>({
  name: 'instructors',
  defaults: {
    instructorDetail: undefined,
    instructors: undefined,
  },
})
@Injectable()
export class InstructorsState {
  constructor(private readonly instructorsHttpService: InstructorsHttpService) {}
  /**
   * Reducer for list
   */
  @Action(InstructorsActions.FetchList)
  fetchInstructors(ctx: StateContext<InstructorsStateModel>) {
    return this.instructorsHttpService.getInstructors().pipe(tap((instructors) => ctx.patchState({ instructors })));
  }
  /**
   * Reducer for item details
   */
  @Action(InstructorsActions.FetchDetails)
  fetchDetails(ctx: StateContext<InstructorsStateModel>, action: InstructorsActions.FetchDetails) {
    return this.instructorsHttpService
      .getInstructorDetails(action.id)
      .pipe(tap((instructorDetail) => ctx.patchState({ instructorDetail })));
  }
  /**
   * Reducer for searching items with query
   */
  @Action(InstructorsActions.FetchWithQuery)
  fetchInstructorsWithQuery(ctx: StateContext<InstructorsStateModel>, action: InstructorsActions.FetchWithQuery) {
    return this.instructorsHttpService.getInstructorsWithQuery(action.query).pipe(tap((instructors) => ctx.patchState({ instructors })));
  }
}
