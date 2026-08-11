const base = import.meta.env.BASE_URL;

export function withBase(path = '') {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const clean = path.replace(/^\//, '');
  return `${base}${clean}`;
}

export function stripBase(pathname: string) {
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const stripped = pathname.startsWith(normalizedBase)
    ? pathname.slice(normalizedBase.length)
    : pathname;
  return stripped || '/';
}
