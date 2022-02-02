export default function auth_middleware({ next, router }) {
  if (!localStorage.getItem('isAdmin')) {
    return router.push({ name: '' })
  }

  return next()
}
