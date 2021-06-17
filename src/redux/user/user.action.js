import { UserActionTypes } from './user.actionTypes';

export const userSetDetails = (user) => ({
  type: UserActionTypes.USER_SET_DETAILS,
  payload: user,
});
