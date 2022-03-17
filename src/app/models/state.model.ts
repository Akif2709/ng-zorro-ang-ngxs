import { Instructor, InstructorDetails } from './instructors.model';

export interface InstructorsStateModel {
  instructors?: Array<Instructor>;
  instructorDetail?: InstructorDetails;
}
