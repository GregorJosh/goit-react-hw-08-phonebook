import { Notify, Loading } from "notiflix";

export const onPending = state => {
  Loading.pulse();
};

export const onRejected = (state, action) => {
  Notify.failure(action.payload);
  Loading.remove();
};

export const isPending = action => {
  return action.type.endsWith('/pending');
};

export const isRejected = action => {
  return action.type.endsWith('/rejected');
};
