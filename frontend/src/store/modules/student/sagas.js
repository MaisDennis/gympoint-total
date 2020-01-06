import { takeLatest, call, all} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
// import { signInSuccess, signFailure } from './actions';

export function* signUp({payload1}) {
  try {

    const { name, email: email_student, age, weight, height } = payload1;
    yield call(api.post, 'students', {
      name,
      email_student,
      age,
      weight,
      height,
    });

    /*
    if (!user.provider) {
      console.tron.error('Usuário não é prestador');
    }
    */

    // yield put(signInSuccess(token, user));
    history.push('/students');

  } catch (err) {
      toast.error('Erro no cadastro, verifique seus dados');
      // yield put(signFailure());
    }
}
export default all([
  takeLatest('@student/SIGN_UP_REQUEST', signUp)
]);
