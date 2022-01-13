import { handleActions } from 'redux-actions';
import { initState } from '../../../redux/models';
import * as actionType from './actionType';

export default handleActions(
  {
    //更新信息
    [actionType.<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_UPDATE]: (state, { data }) => ({ ...state, ...data }),
    [actionType.<%= _.replace(_.upperCase(pageName), /\s+/g, '_') %>_FAIL]: state => ({ ...state, tableLoading: false }),
  },
  initState,
);
