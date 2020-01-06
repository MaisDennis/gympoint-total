import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    /*
    const { student, password } = payload;
    console.log('hello');
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    }); */

    const { id } = payload;
    console.tron.log('hello');
    const response = yield call(api.get, `students/${id}/checkins`);

    yield put(signInSuccess(id));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'ID de aluno inexistente, tente novamente.'
    );

    yield put(signFailure());
  }
}

/*
export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    console.log('Alo');

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    console.log(response);

    // history.push('/');
  } catch (err) {
    console.log(err);
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados'
    );

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  // history.push('/');
}
*/

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
