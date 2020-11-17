import { getToken } from '../utils/auth';

export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    const token = getToken();
    if (!token) {
      if (to.path.includes('/admin')) {
        next('/unadmin');
      } else {
        next();
      }
    } else {
      next();
    }
  });
};
