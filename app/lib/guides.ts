export const GUIDES = {
  facturas: {
    href: "/blog/automatizar-facturas-con-n8n",
    title: "Cómo automatizar facturas con n8n paso a paso",
    description: "Del pedido o cobro a la factura enviada y registrada.",
  },
  pedidosRestaurante: {
    href: "/blog/automatizar-pedidos-a-proveedores-restaurante",
    title: "Cómo automatizar los pedidos a proveedores de un restaurante",
    description: "Stock mínimo, pedido automático y aviso al proveedor.",
  },
  pedidosTienda: {
    href: "/blog/automatizar-pedidos-shopify-woocommerce",
    title: "Cómo automatizar los pedidos de Shopify y WooCommerce",
    description: "Del pedido al aviso de envío, el stock y la factura.",
  },
  reportes: {
    href: "/blog/reportes-automaticos-para-agencias-de-marketing",
    title: "Reportes automáticos para agencias de marketing",
    description: "Datos, plantilla y envío programado a cada cliente.",
  },
  cobros: {
    href: "/blog/automatizar-cobros-y-facturas-impagadas",
    title: "Cómo automatizar los cobros y las facturas impagadas",
    description: "Avisos escalonados, registro y cuándo intervenir a mano.",
  },
  n8n: {
    href: "/blog/que-es-n8n-y-cuando-usarlo-en-una-pyme",
    title: "Qué es n8n y cuándo usarlo en una pyme",
    description: "Cómo funciona, autoalojado o en la nube, y cuándo conviene.",
  },
  costes: {
    href: "/blog/cuanto-cuesta-automatizar-barcelona",
    title: "Cuánto cuesta automatizar procesos en Barcelona (2026)",
    description: "De qué depende el precio, qué incluye y cómo estimar el ahorro.",
  },
  general: {
    href: "/blog/automatizacion-procesos-barcelona",
    title: "Automatización de procesos: guía para pymes (2026)",
    description: "Qué es, qué automatizar primero y con qué herramientas empezar.",
  },
};

export type Guide = (typeof GUIDES)[keyof typeof GUIDES];
