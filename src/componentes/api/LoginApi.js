import Api from '../../Api';

/**
 * Performs a login by calling backend API and redirects on success.
 * This is a plain async function (not a React component) so it can be
 * called from event handlers without causing invalid hook call errors.
 */
async function LoginApi({ email, password }) {
  try {
    await Api.get('/sanctum/csrf-cookie');
    // Axios accepts object payload; no need to JSON.stringify.
    const response = await Api.post('/api/login', { email, password });
    // On success, redirect to dashboard (you may want to set auth state instead)
    window.location.href = '/dashboard';
    return response;
  } catch (err) {
    console.error('Erro ao fazer login.', err);
    // Propagate the error so caller can handle it
    throw err;
  }
}

export default LoginApi;