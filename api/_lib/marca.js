// Identidad de este deploy. Un mismo código sirve a varios proveedores:
// cada proyecto de Vercel pone su nombre y las llaves de SU panel.
// Si el nombre no está, se mantiene gameswin777 para no cambiar
// el deploy que ya está en producción.

export function nombreProveedor(env = process.env) {
  const v = String(env.VITE_PROVEEDOR_NOMBRE || env.PROVEEDOR_NOMBRE || '').trim();
  return v || 'gameswin777';
}

// PROVEEDOR_* es el nombre actual. WIN777_* sigue valiendo en los
// deploys que ya lo tenían cargado.
export function credencialesPanel(env = process.env) {
  const secreto = String(env.PROVEEDOR_SECRETO || env.WIN777_PROVEEDOR_SECRETO || '').trim();
  const base = String(env.PROVEEDOR_API_BASE || env.WIN777_API_BASE || '').trim();
  return { secreto, base };
}
