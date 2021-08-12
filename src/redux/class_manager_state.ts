import { AssignmentStatistic } from '../modules/share/model/assignmentStatistic';
import { UserAssignment } from '../modules/share/model/userAssignment';

export interface ClassesManagerState {
    userAssignmentState: UserAssignmentState;
    userReducer: any;
}

export interface UserAssignmentState {
    isLoading: boolean;
    error: boolean;
    data: UserAssignment[];
    notDone: UserAssignment[];
    upComming: UserAssignment[];
    showKey: UserAssignment[];
    current: UserAssignment | null;
    isSaveLoading: boolean | null;
    studentAssignments: UserAssignment[];
    isStudentAssLoading: boolean;
    mapStatistic: Map<string, AssignmentStatistic | null>
}
export interface UserAssignmentDetailState {
    isLoading: boolean;
    error: boolean;
    current: UserAssignment | null;
    userAssignmentId: string | null;
}
