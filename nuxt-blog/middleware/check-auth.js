export default function(context) {
  console.log('[Middleware] Check auth')
  context.store.dispatch('initAuth', context.req)
}
