import { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '@/redux/store';

import { AuthGuard } from '@/guards';
import { PrivateRoutes, PublicRoutes } from '@/models';
import { RoutesWithNotFound } from '@/utilities';
import { Login, Private } from '@/pages';

// const Login = lazy(() => import('./pages/Login'));
// const Private = lazy(() => import('./pages/Private/Private'));

function App() {

  return (
    <Suspense fallback={<>Cargando...</>}>
      <Provider store={store}>
        <RoutesWithNotFound>
          <Route path={PublicRoutes.HOME} element={<>Home</>} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
        
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        
        </RoutesWithNotFound>
      </Provider>
    </Suspense>
  )
}

export default App
