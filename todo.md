# TODO's
## BUILD
### build fully with bun
- [ ] add brotli compression after build step
- [ ] optimise CI/CD pipeline (cache, parallelism, etc)
## INFRA
- [ ] Add CSP to caddy
- [ ] add security headers to caddy
- [ ] make prod environment
- [ ] add monitoring
- [ ] add all correct env variables x-forwarded-for etc

## OTHER
- [ ] add a blog about AI in the workplace
- [ ] remove the minikraken font
- [ ] Host allowlists can frequently be bypassed. Consider using CSP nonces or hashes instead, along with `'strict-dynamic'` if necessary. for script-src
- [ ] Consider adding `'unsafe-inline'` (ignored by browsers supporting nonces/hashes) to be backward compatible with older browsers.
- [ ] tap targets are not sized appropriately
- [ ] add semversion release via some kind of tool like release
- [ ] add release tag in head
- [ ] remove the unocss scoped hooks handle that should not be needed after building
- [ ] double check if imported css files aren't duplicated or can't be moved to a parent
- [ ] mobile minikraken logo is not clickable
- [ ] privacy page add badge component remove css from there and in other component
- [ ] handle cloudflare timeout issue for tunstile
