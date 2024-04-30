'use server';

import { PASSWORD_LOST, USER_POST } from '@/functions/api';
import apiError from '@/functions/api-error';

export default async function passwordLost(state: {}, formdata: FormData) {
  const login = formdata.get('login') as string | null;
  const urlPerdeu = formdata.get('url') as string | null;

  try {
    if (!login) throw new Error('Preencha os dados.');

    const { url } = PASSWORD_LOST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        url: urlPerdeu
      }),
    });

    if (!response.ok) throw new Error('Email ou usuário desconhecido(s).');
    const data = await response.json();
    return {
      data: null,
      ok: true,
      error: '',
    };
  } catch (error: unknown) {
    return apiError(error);
  }
}
