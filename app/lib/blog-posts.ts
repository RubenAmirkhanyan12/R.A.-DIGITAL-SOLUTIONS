import type { BlogPost } from "./types";
import {
  ASSUMPTIONS,
  formatEUR,
  monthlySaving,
  OFFER,
  OWNER_INTRO,
  paybackDays,
  processesInWords,
  planById,
  PLANS,
  SCENARIOS,
  scenarioNumbers,
  SITE,
} from "./site-config";

const AUTHOR = { name: SITE.owner, role: SITE.credential, bio: OWNER_INTRO };

const scenario = (id: string) => SCENARIOS.find((c) => c.id === id)!;
const EX_HOURS = 8;
const EX_SAVING = monthlySaving(EX_HOURS);
const EX_PLAN = planById("starter");
const EX_A = scenario("despacho");
const EX_A_N = scenarioNumbers(EX_A);
const EX_B = scenario("ecommerce");
const EX_B_N = scenarioNumbers(EX_B);
const EX_F = EX_A;
const EX_F_N = EX_A_N;

// Precios de terceros citados en la comparativa de herramientas
const TOOL_PRICE = {
  n8nStarter: "20 €/mes", // check-site:ok https://n8n.io/pricing/ consultado el 2026-11-04
  n8nPro: "50 €/mes", // check-site:ok https://n8n.io/pricing/ consultado el 2026-11-04
  n8nBusiness: "667 €/mes", // check-site:ok https://n8n.io/pricing/ consultado el 2026-11-04
  n8nProYear: "600 €", // check-site:ok https://n8n.io/pricing/ (Pro × 12) consultado el 2026-11-04
  zapierFree: "0 $", // check-site:ok https://zapier.com/pricing consultado el 2026-11-04
  zapierProAnnual: "19,99 $/mes", // check-site:ok https://zapier.com/pricing consultado el 2026-11-04
  zapierProMonthly: "29,99 $/mes", // check-site:ok https://zapier.com/pricing consultado el 2026-11-04
  zapierTeamAnnual: "69 $/mes", // check-site:ok https://zapier.com/pricing consultado el 2026-11-04
  zapierTeamMonthly: "103,50 $/mes", // check-site:ok https://zapier.com/pricing consultado el 2026-11-04
  zapierPro5000: "89 $/mes", // check-site:ok https://zapier.com/pricing consultado el 2026-11-04
  zapierPro5000Year: "1.068 $", // check-site:ok https://zapier.com/pricing (89 × 12) consultado el 2026-11-04
};

export const blogPosts: BlogPost[] = [
  {
    title: "Automatización de procesos: guía para pymes (2026)",
    seoTitle: "Automatización de procesos: guía para pymes (2026) | RASTECH",
    slug: "automatizacion-procesos-barcelona",
    description:
      "Qué es la automatización de procesos, qué procesos conviene automatizar primero en una pyme y con qué herramientas empezar.",
    answer: `Empieza por una tarea que se repita cada semana, siga siempre los mismos pasos y te quite tiempo, como pasar facturas a mano o copiar pedidos de un programa a otro. Se conectan los programas que ya usas con n8n o Make, y un primer proyecto cuesta desde ${formatEUR(EX_PLAN.fromEUR)}. Si la tarea cambia cada vez, normalmente no compensa.`,
    author: AUTHOR,
    publishDate: "2026-06-18",
    updatedDate: "2026-11-04",
    readTime: 12,
    category: "Automatización",
    featured: true,
    keywords: [
      "automatización procesos Barcelona",
      "automatizar empresa Barcelona",
      "Zapier Barcelona",
      "eliminar tareas manuales",
      "ROI automatización",
      "facturación automática",
      "productividad empresa",
    ],
    continueReading: [
      { href: "/blog/que-es-n8n-y-cuando-usarlo-en-una-pyme", label: "Qué es n8n y cuándo tiene sentido usarlo en una pyme" },
      { href: "/automatizar", label: "Qué automatizar en tu empresa de Barcelona, según tu sector" },
    ],
    internalLinks: [
      "5-procesos-manuales-destructivos-barcelona",
      "n8n-vs-make-vs-zapier-barcelona",
      "cuanto-cuesta-automatizar-barcelona",
    ],
    content: `Automatizar un proceso significa que una tarea repetitiva se haga sola, siguiendo unas reglas que defines tú. No es magia ni exige programar: es conectar las aplicaciones que ya usas para que los datos dejen de copiarse a mano.

En esta guía explico qué conviene automatizar primero en una pyme, con qué herramientas y cómo calcular si te compensa.

---

## ¿Qué es la automatización de procesos?

Un ejemplo sencillo. Hoy, un cliente pide presupuesto por correo y alguien abre una hoja, copia sus datos, busca la tarifa, calcula el total, genera el PDF y lo envía.

Automatizado, la solicitud entra por un formulario, el flujo prepara el presupuesto con tu plantilla, tú lo revisas y sale con un clic. La persona sigue decidiendo; lo que desaparece es copiar y pegar.

---

## ¿Qué procesos conviene automatizar primero?

Busca tareas que se repitan a menudo, sigan siempre los mismos pasos y consuman tiempo. Las más habituales en una pyme son estas. *(Lo desarrollo en [5 procesos de tu pyme que conviene automatizar](/blog/5-procesos-manuales-destructivos-barcelona).)*

### Facturación

Pasar los datos de la venta a la factura, enviarla y registrarla. Tienes el paso a paso en [cómo automatizar facturas con n8n](/blog/automatizar-facturas-con-n8n).

### Correos repetitivos

Confirmaciones, recordatorios y seguimientos que se escriben casi igual cada vez. Las secuencias automáticas envían el mensaje correcto en su momento y paran cuando el cliente responde.

### Reportes semanales

Entrar en varias herramientas, copiar datos, montar el gráfico y enviarlo. Un flujo programado lo deja preparado para que tú solo lo leas.

### Cobros

Saber qué factura ha vencido y recordarlo sin que se te olvide. Lo explico en [cómo automatizar los cobros y las facturas impagadas](/blog/automatizar-cobros-y-facturas-impagadas).

### Seguimiento de clientes potenciales

Que ninguna solicitud se quede sin respuesta porque nadie la vio a tiempo.

---

## ¿Cómo calculo si me compensa?

Con una fórmula sencilla y tus horas reales:

**Horas por semana × ${ASSUMPTIONS.weeksPerMonth} semanas × coste por hora = coste mensual del proceso**

**Ejemplo ilustrativo:** una tarea de ${EX_HOURS} horas semanales, a ${ASSUMPTIONS.hourlyCostEUR} €/h, supone ${formatEUR(EX_SAVING)} al mes. Con el plan ${EX_PLAN.name}, desde ${formatEUR(EX_PLAN.fromEUR)}, recuperarías la inversión en unos ${paybackDays(EX_PLAN.fromEUR, EX_SAVING)} días si esas horas desaparecieran por completo. Es una estimación: el ahorro real depende de cada empresa. Puedes probar con tus números en la [calculadora](/#calculadora).

Lo que cuesta cada plan, y qué incluye, está en la [página de precios](/precios).

---

## ¿Con qué herramientas se hace?

Las tres más conocidas son n8n, Make y Zapier. Cobran de forma distinta y requieren distinto perfil técnico. Tienes planes y diferencias en [n8n vs Make vs Zapier](/blog/n8n-vs-make-vs-zapier-barcelona), y si te interesa la primera, en [qué es n8n y cuándo usarlo en una pyme](/blog/que-es-n8n-y-cuando-usarlo-en-una-pyme).

---

## ¿Cómo se implementa?

1. **Medir.** Apunta cuánto tiempo lleva cada tarea durante una semana.
2. **Elegir.** Empieza por el proceso que más horas consume y que tenga reglas claras.
3. **Diseñar.** Define el flujo paso a paso, incluido qué pasa si algo falla.
4. **Probar.** Haz pruebas con datos reales antes de activar nada.
5. **Formar.** Enseña al equipo a revisar el flujo y qué hacer si llega una alerta.
6. **Revisar.** Repasa cada cierto tiempo que todo sigue funcionando.

Antes de empezar, conviene leer los [7 errores al automatizar una empresa](/blog/errores-automatizar-empresa-barcelona).

---

## Preguntas frecuentes

**¿Necesito saber programar?**
Para flujos sencillos, no. Las herramientas son visuales, aunque cierta base técnica ayuda cuando se complican.

**¿Qué pasa si falla el automático?**
Un flujo bien montado avisa cuando falla, y mientras tanto la tarea puede hacerse a mano.

**¿Es seguro?**
Tus datos viajan cifrados (HTTPS) y se quedan en tus propias cuentas. Conviene dar a cada flujo solo los permisos que necesita.

**¿Tengo que cambiar mis herramientas?**
Normalmente no. n8n y Make se conectan con cientos de aplicaciones.

---

## ¿Por dónde sigo?

Si quieres ver un ejemplo completo, lee [cómo automatizar la facturación de una asesoría](/blog/automatizacion-facturacion-40h-4h). Y si quieres calcular cuánto costaría en tu caso, tienes [cuánto cuesta automatizar procesos](/blog/cuanto-cuesta-automatizar-barcelona).

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).

📧 ${SITE.email}
📱 ${SITE.phone}`,
  },
  {
    title: "5 procesos de tu pyme que conviene automatizar",
    seoTitle: "5 procesos de tu pyme que conviene automatizar | RASTECH",
    slug: "5-procesos-manuales-destructivos-barcelona",
    description:
      "Cinco procesos manuales que suelen consumir horas cada semana en una pyme y cómo automatizarlos con n8n o Make.",
    answer: `Esta guía repasa cinco tareas que suelen comerse horas en una pyme: la facturación, pasar datos de clientes de un programa a otro, los informes semanales, el seguimiento de clientes y los cobros pendientes. Conviene empezar por la que más horas te quite cada semana. Lo que haces pocas veces al mes puede esperar.`,
    author: AUTHOR,
    publishDate: "2026-06-18",
    updatedDate: "2026-11-04",
    readTime: 10,
    category: "Automatización",
    featured: true,
    keywords: [
      "procesos manuales barcelona",
      "procesos manuales destructivos",
      "automatizar procesos empresa barcelona",
      "eliminar tareas repetitivas",
      "facturación manual coste",
      "automatizar seguimiento clientes",
      "productividad barcelona",
    ],
    continueReading: [
      { href: "/blog/automatizar-cobros-y-facturas-impagadas", label: "Cómo automatizar los cobros y los avisos de facturas impagadas" },
      { href: "/automatizar", label: "Por dónde empezar a automatizar según tu sector en Barcelona" },
    ],
    internalLinks: [
      "automatizacion-procesos-barcelona",
      "automatizar-facturas-con-n8n",
      "automatizar-cobros-y-facturas-impagadas",
    ],
    content: `En muchas pymes hay tareas que se repiten igual cada semana: copiar datos a una hoja, pasar contactos al CRM, montar un reporte, recordar quién debe llamar a quién y vigilar qué facturas siguen sin cobrar.

Son trabajo necesario, pero casi todo se puede dejar en manos de un flujo automático.

Estos son cinco de los procesos que suelen consumir más tiempo y cómo automatizarlos. *(Para el contexto general, lee la [guía de automatización de procesos](/blog/automatizacion-procesos-barcelona).)*

---

## Proceso manual #1: facturación en Excel (el clásico)

### El problema

> Cliente envía pedido → Contador abre Excel → Copia datos → Genera PDF → Envía email → Archiva

Además: clientes faltando en reportes, importes copiados mal, PDFs sin enviar.

### Cómo automatizarlo

1. OCR lee la factura entrante (Google Vision, Claude Vision)
2. Extrae datos automáticamente: cliente, importe, fecha
3. Genera PDF desde plantilla + datos
4. Envía email al cliente sin intervención humana
5. Registra en software contable con sync bidireccional
6. Archiva automáticamente por mes y cliente

**Herramientas:** n8n · OCR API · Google Sheets · Holded o QuickBooks · Gmail API

---

## Proceso manual #2: entrada de datos en el CRM (ventas repite lo mismo)

### El problema

> Lead llega (email, formulario, LinkedIn, teléfono) → Sales copia datos a mano en CRM → Busca campos → Llena propiedades → Guarda

Resultado: leads duplicados, campos vacíos, y sales tan ocupado copiando que no llama a tiempo.

### Cómo automatizarlo

1. Lead completa formulario web (Google Forms, Typeform)
2. Contacto creado automáticamente en CRM (HubSpot, Pipedrive)
3. Asignado a sales según territorio o especialidad
4. Email de confirmación enviado al lead en segundos
5. Tarea automática creada: "Llamar en 24h"
6. Sync bidireccional: si sales actualiza CRM, el registro se actualiza en todas partes

**Herramientas:** Google Forms · HubSpot o Pipedrive · n8n o Zapier · Gmail API

---

## Proceso manual #3: reportes del lunes a las 7 de la mañana

### El problema

> Admin abre Excel + HubSpot + Google Analytics + Stripe + software contable → Copia números → Crea gráficos → Genera PDF → Envía al CEO

Encima, los datos del viernes a veces no están actualizados. Los números no cuadran. El CEO espera.

### Cómo automatizarlo

1. Conecta todas las fuentes (HubSpot, Stripe, Analytics, contabilidad)
2. Dashboard automático con datos en vivo — sin copiar nada
3. Cada lunes a las 7:00am, genera informe PDF con gráficos
4. El CEO recibe el email antes de llegar a la oficina
5. Si algo falla, Slack avisa al instante

**Herramientas:** n8n · Google Sheets + Looker Studio · SendGrid · Slack

---

## Proceso manual #4: seguimiento de clientes (el que se olvida)

### El problema

> Admin mantiene lista de clientes → Cada semana revisa quién no compró en 30 días → Decide a quién llamar → Anota resultado en Excel → Reinicia

Resultado: se olvidan llamadas, clientes que podrían recomprar se enfrían, ventas que no llegan.

### Cómo automatizarlo

1. Regla definida: cliente sin compra en 30 días = alerta
2. Sistema genera lista automática cada lunes: 10 clientes prioritarios
3. Tarea creada en CRM y asignada a sales
4. Reminder por Slack o email: "No olvides llamar a estos"
5. Seguimiento: ¿Llamaste? Marca aquí
6. Reporte semanal automático: cuántos contactados, conversión

**Herramientas:** HubSpot o Pipedrive · n8n · Slack · Google Sheets

---

## Proceso manual #5: cobros y seguimiento de facturas (el que duele)

### El problema

> Factura enviada → Admin revisa correos cada día → Busca si el cliente pagó → Si no pagó, manda recordatorio → Si sigue sin pagar, llama → Anota estado en Excel

Facturas sin cobrar, clientes molestos por demasiados recordatorios, cash flow impredecible.

### Cómo automatizarlo

1. Factura enviada automáticamente desde el software contable
2. Sin pago a los 7 días → recordatorio amable automático
3. Sin pago a los 14 días → recordatorio más firme
4. Sin pago a los 21 días → alerta al admin para llamar
5. Dashboard en vivo: cuánto debe cada cliente, cuándo vence
6. Reporte automático de previsión de cash flow

**Herramientas:** Holded o QuickBooks · n8n · Gmail API · Google Sheets · Slack

---

## ¿Cuánto cuesta no automatizarlos?

Calcúlalo con tus horas: horas por semana × ${ASSUMPTIONS.weeksPerMonth} semanas × coste por hora.

**Ejemplo ilustrativo:** si estos procesos sumaran ${EX_HOURS} horas semanales, a ${ASSUMPTIONS.hourlyCostEUR} €/h serían ${formatEUR(EX_SAVING)} al mes. Prueba con tus números en la [calculadora](/#calculadora) y compáralo con los [precios de cada plan](/precios).

---

## ¿Tu empresa tiene estos 5 procesos?

- ☐ ¿Facturas en Excel o copiando datos a mano?
- ☐ ¿Pasas contactos al CRM uno a uno?
- ☐ ¿Montas reportes semanales o mensuales a mano?
- ☐ ¿Llevas el seguimiento de clientes en una lista?
- ☐ ¿Envías los recordatorios de cobro a mano?

Si marcas tres o más, conviene medir cuántas horas te llevan.

---

## Tres ideas antes de empezar

**1. Empieza por el que más te duela.** Un proceso bien automatizado enseña más que cinco a medias. *(¿Con qué herramienta? [n8n vs Make vs Zapier](/blog/n8n-vs-make-vs-zapier-barcelona).)*

**2. Automatizar libera tiempo, no sustituye el criterio.** Quien hoy copia datos podrá dedicarse a revisarlos.

**3. No todo merece automatizarse.** Si una tarea cambia cada vez o se hace poco, puede que no compense.

---

## ¿Por dónde sigo?

Si quieres saber cuánto costaría, lee [cuánto cuesta automatizar procesos](/blog/cuanto-cuesta-automatizar-barcelona).

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).

📧 ${SITE.email}
📱 ${SITE.phone}`,
  },
  {
    title: "Cuánto cuesta automatizar procesos en Barcelona (2026)",
    slug: "cuanto-cuesta-automatizar-barcelona",
    description:
      "De qué depende el precio de automatizar procesos en una pyme de Barcelona, qué suele incluir y cómo estimar el ahorro antes de decidir.",
    answer: `Desde ${formatEUR(EX_PLAN.fromEUR)} para ${processesInWords(EX_PLAN)} procesos, con el precio cerrado por escrito antes de empezar. Sube con el número de procesos y con las herramientas que haya que conectar. Las suscripciones de n8n o Make se pagan aparte, directamente al proveedor.`,
    author: AUTHOR,
    publishDate: "2026-06-26",
    updatedDate: "2026-11-04",
    readTime: 8,
    category: "Precios",
    featured: false,
    footerFeatured: true,
    keywords: [
      "cuánto cuesta automatizar procesos barcelona",
      "cuánto cuesta automatizar barcelona",
      "precio automatización procesos",
      "presupuesto automatización empresa",
      "coste automatización barcelona",
      "ROI automatización pyme",
      "automatización barata barcelona",
      "n8n Make barcelona precio",
    ],
    continueReading: [
      { href: "/precios", label: "Precios de automatización de procesos" },
      { href: "/blog/automatizar-facturas-con-n8n", label: "Cómo automatizar facturas con n8n, paso a paso" },
      { href: "/automatizar", label: "Servicios de automatización para empresas de Barcelona, por sector" },
    ],
    internalLinks: [
      "automatizacion-procesos-barcelona",
      "5-procesos-manuales-destructivos-barcelona",
      "n8n-vs-make-vs-zapier-barcelona",
    ],
    content: `El precio de automatizar un proceso depende de cuántos procesos sean, de cuántas aplicaciones haya que conectar y del soporte que necesites. Aquí explico cómo lo calculo, qué incluye y cómo estimar el ahorro antes de decidir.

---

## ¿De qué depende el precio?

### Número de procesos

| Alcance | Plan | Precio |
|---|---|---|
${PLANS.map((p) => `| ${p.processes} procesos | ${p.name} | desde ${formatEUR(p.fromEUR)} |`).join("\n")}
${OFFER.vatNote ? `\n${OFFER.vatNote}\n` : ""}
### Complejidad de las integraciones

No es lo mismo conectar tu correo con una hoja de cálculo que enlazar un programa de gestión, una tienda online y un operador logístico. Cuantas más aplicaciones y excepciones haya, más trabajo requiere montarlo y probarlo.

### Soporte

${PLANS.map((p) => `- **${p.name}:** ${p.support}`).join("\n")}

---

## ¿Cómo se estima el ahorro?

Con esta fórmula: horas por semana × ${ASSUMPTIONS.weeksPerMonth} semanas × coste por hora. Uso ${ASSUMPTIONS.hourlyCostEUR} €/h como supuesto; pon el tuyo en la [calculadora](/#calculadora).

### Ejemplo ilustrativo: asesoría pequeña

Una asesoría dedica ${EX_A.hoursPerWeek} horas semanales a archivar documentos y avisar de vencimientos.

- Ahorro estimado: **${formatEUR(EX_A_N.saving)}/mes**
- Plan orientativo: ${EX_A_N.plan.name}, desde ${formatEUR(EX_A_N.plan.fromEUR)}
- Se recuperaría en unos **${EX_A_N.payback} días**

### Ejemplo ilustrativo: tienda online

Una tienda dedica ${EX_B.hoursPerWeek} horas semanales a pasar pedidos, ajustar stock y gestionar devoluciones.

- Ahorro estimado: **${formatEUR(EX_B_N.saving)}/mes**
- Plan orientativo: ${EX_B_N.plan.name}, desde ${formatEUR(EX_B_N.plan.fromEUR)}
- Se recuperaría en unos **${EX_B_N.payback} días**

Son estimaciones con supuestos a la vista. Tu resultado dependerá de tus horas reales. Tienes más escenarios en los [casos de uso](/casos).

---

## ¿Qué incluye cada proyecto?

**Incluye:**
- Llamada inicial gratuita de ${OFFER.freeCallMinutes} minutos
- Diseño de los flujos
- Pruebas con tus datos antes de activar
- ${OFFER.trainingHours} hora de formación para tu equipo
- Documentación de los flujos
- Soporte según el plan

**No incluye:**
- Suscripciones de herramientas de terceros, que pagas directamente a cada proveedor
- Lo que no figure en la propuesta. ${OFFER.noHiddenCosts}

---

## ¿Cuánto cuestan las herramientas?

Las suscripciones de n8n o Make van aparte y las pagas directamente a cada proveedor. Sus tarifas cambian, así que mira sus páginas oficiales: [precios de n8n](https://n8n.io/pricing/) y [precios de Make](https://www.make.com/en/pricing) (consultadas el 4 de noviembre de 2026). Las dos dejan probar antes de pagar: Make tiene un plan gratuito y n8n, una prueba gratuita en su nube.

---

## ¿Cómo se cierra el presupuesto?

1. **Llamada gratuita.** Vemos tus procesos y estimamos cuánto te cuestan.
2. **Propuesta por escrito.** Qué incluye, qué no, plazo y precio cerrado.
3. **Montaje y pruebas.** Con tus datos, antes de activar.
4. **Entrega y soporte.** Según tu plan.

---

## Preguntas frecuentes

**¿Cómo se paga?**
${OFFER.payment}

**¿Y si no funciona como acordamos?**
${OFFER.guarantee}

**¿El presupuesto puede subir a mitad del proyecto?**
El precio se cierra antes de empezar. ${OFFER.noHiddenCosts}

**¿Hay un presupuesto mínimo?**
El plan más sencillo parte de ${formatEUR(PLANS[0].fromEUR)}. Si tu caso no justifica automatizar, te lo digo.

---

## ¿Cuándo no compensa?

- Cuando la tarea se hace pocas veces al año.
- Cuando cada caso es distinto y depende de tu criterio.
- Cuando lo que te falta es un programa, y no te sobran tareas a mano.

Si es tu caso, te lo digo en la llamada.

---

## ¿Por dónde empiezo?

Si quieres el detalle, mira [qué incluye cada plan](/precios#que-incluye-cada-plan). Si aún no tienes claro qué automatizar, lee [5 procesos de tu pyme que conviene automatizar](/blog/5-procesos-manuales-destructivos-barcelona) o la [página de automatización por sectores](/automatizar). Si empiezas por la facturación, la [guía de facturas con n8n](/blog/automatizar-facturas-con-n8n) explica el flujo paso a paso.

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).

📧 ${SITE.email}
📱 ${SITE.phone}`,
  },
  {
    title: "Cómo automatizar la facturación de una asesoría",
    seoTitle: "Cómo automatizar la facturación de una asesoría | RASTECH",
    slug: "automatizacion-facturacion-40h-4h",
    description:
      "Ejemplo de cómo automatizar la facturación de una asesoría: qué pasos se automatizan, con qué herramientas y qué hay que vigilar.",
    answer: `El flujo recoge las facturas que llegan por correo o por un formulario, lee sus datos, los comprueba con tu lista de clientes y los registra en el programa contable. Lo que no cuadra se aparta para que lo revise una persona. Funciona si tu programa contable permite conectarse con otros.`,
    author: AUTHOR,
    publishDate: "2026-06-26",
    updatedDate: "2026-11-04",
    readTime: 9,
    category: "Ejemplos",
    featured: true,
    keywords: [
      "automatización facturación barcelona",
      "automatizar facturación empresa",
      "ejemplo automatización facturación",
      "facturación automática pyme",
      "n8n facturación barcelona",
    ],
    continueReading: [
      { href: "/blog/automatizar-facturas-con-n8n", label: "La guía paso a paso para automatizar facturas con n8n" },
      { href: "/automatizar", label: "Otros procesos que se pueden automatizar en una empresa de Barcelona" },
    ],
    internalLinks: [
      "automatizar-facturas-con-n8n",
      "cuanto-cuesta-automatizar-barcelona",
      "automatizar-cobros-y-facturas-impagadas",
    ],
    content: `Una asesoría recibe cada mes facturas de sus clientes por correo, WhatsApp o en papel, y alguien las pasa a mano al programa contable. Este artículo es un ejemplo ilustrativo de cómo automatizar ese proceso: qué pasos se automatizan, con qué herramientas y qué hay que vigilar. No describe a ningún cliente. *(¿Buscas el contexto general? Lee la [guía de automatización de procesos](/blog/automatizacion-procesos-barcelona).)*

---

## La situación de partida

**Ejemplo ilustrativo:** una asesoría de tamaño pequeño recibe documentos de sus clientes y dedica ${EX_F.hoursPerWeek} horas semanales a procesarlos.

El flujo manual suele ser este:

1. El cliente envía la factura por correo o WhatsApp
2. Alguien abre el archivo
3. Copia cliente, importe, fecha y conceptos
4. Comprueba que el cliente exista
5. Registra los datos en el programa contable
6. Archiva el documento en la carpeta compartida

Cada paso es sencillo, pero repetirlo muchas veces cada mes acumula horas y errores de copia.

---

## ¿Dónde se van las horas?

Antes de tocar nada conviene medir una semana normal. Suele aparecer trabajo que nadie contaba: buscar un documento, reclamar datos que faltan o corregir un importe mal copiado.

---

## ¿Cómo sería la solución?

### Paso 1: entender el flujo actual

Hay que responder a cuatro preguntas: dónde llegan las facturas, qué datos hacen falta, qué validaciones se hacen y dónde se guardan.

### Paso 2: diseñar el flujo automático

1. Llega el documento (correo o formulario)
2. Se extraen los datos con un servicio de OCR
3. Se valida contra la lista de clientes
4. Si falta algo, se aparta para revisión humana
5. Se registra en el programa contable mediante su API
6. Se archiva en la carpeta del cliente
7. Si algo falla, llega una alerta

**Herramientas posibles:** n8n, un servicio de OCR, Google Sheets, Gmail y Google Drive. *(Si dudas entre herramientas, lee [n8n vs Make vs Zapier](/blog/n8n-vs-make-vs-zapier-barcelona).)*

### Paso 3: probar con documentos reales

Antes de activar nada, hay que probar con documentos de verdad. Lo que suele dar problemas: facturas escritas a mano, clientes sin NIF en la base de datos, importes con formatos raros y clientes duplicados.

### Paso 4: activar y formar

Se activa poco a poco y se forma al equipo durante ${OFFER.trainingHours} hora: cómo revisar lo apartado, cómo dar de alta clientes y qué hacer si llega una alerta.

---

## ¿Cuánto podría suponer?

Con los supuestos de ${ASSUMPTIONS.hourlyCostEUR} €/h y ${ASSUMPTIONS.weeksPerMonth} semanas al mes:

| Concepto | Valor |
|---|---|
| Horas semanales del ejemplo | ${EX_F.hoursPerWeek} h |
| Ahorro estimado | ${formatEUR(EX_F_N.saving)}/mes |
| Plan orientativo | ${EX_F_N.plan.name} |
| Inversión desde | ${formatEUR(EX_F_N.plan.fromEUR)} |
| Recuperación | unos ${EX_F_N.payback} días |

Es una estimación, no un resultado. Parte de que esas horas desaparecen por completo, y siempre quedará algo de revisión humana. Lo que cuesta cada plan está en la [página de precios](/precios).

---

## ¿Qué hay que vigilar?

- **El OCR no acierta siempre.** Conviene marcar para revisión lo que tenga baja confianza.
- **La responsabilidad sigue siendo tuya.** Una persona debe poder revisar lo que entra en contabilidad.
- **Los datos de tus clientes son sensibles.** Elige con cuidado por qué servicios pasan.
- **Los programas cambian.** Si tu programa contable actualiza su API, habrá que revisar el flujo.

---

## ¿Tu empresa es candidata?

- ¿Haces a mano algo más de 5 horas a la semana?
- ¿Repites el mismo proceso muchas veces al año?
- ¿Tienes datos en una hoja y en otro programa que no coinciden?

Si respondes que sí a dos o más, merece la pena hacer los números con tus horas reales. Si tienes un despacho o una asesoría, mira qué más se suele automatizar en la [página para despachos y otros negocios](/automatizar-otros).

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).

📧 ${SITE.email}
📱 ${SITE.phone}`,
  },
  {
    title: "n8n vs Make vs Zapier: cuál elegir en 2026",
    seoTitle: "n8n vs Make vs Zapier: cuál elegir en 2026 | RASTECH",
    slug: "n8n-vs-make-vs-zapier-barcelona",
    description:
      "Comparativa de n8n, Make y Zapier para pymes: diferencias, límites de cada plan y cuál elegir según tus procesos. Con enlaces a las páginas oficiales.",
    answer: `Depende de quién vaya a mantener los flujos y de cuánto se vayan a usar. Make y Zapier se usan en su nube y cobran según el consumo. n8n también puede instalarse en tu propio servidor, lo que da más control pero exige mantenerlo. Prueba primero tu flujo principal en el plan gratuito o de prueba.`,
    author: AUTHOR,
    publishDate: "2026-06-28",
    updatedDate: "2026-11-04",
    readTime: 6,
    category: "Herramientas",
    featured: false,
    footerFeatured: true,
    keywords: [
      "n8n vs make vs zapier",
      "herramientas automatización barcelona",
      "make vs zapier",
      "n8n pricing",
      "comparativa automatización barcelona",
      "n8n barcelona",
    ],
    continueReading: [
      { href: "/blog/que-es-n8n-y-cuando-usarlo-en-una-pyme", label: "Qué es n8n y cuándo conviene a una pyme" },
      { href: "/automatizar", label: "Cómo se aplican estas herramientas en empresas de Barcelona, por sector" },
    ],
    internalLinks: [
      "que-es-n8n-y-cuando-usarlo-en-una-pyme",
      "cuanto-cuesta-automatizar-barcelona",
      "automatizacion-procesos-barcelona",
    ],
    content: `Las tres conectan tus programas para que los datos pasen de uno a otro sin copiarlos a mano. Cambian en cómo cobran, dónde funcionan y cuánto trabajo exige mantenerlas. *(¿Nuevo en automatización? Empieza por la [guía de automatización de procesos](/blog/automatizacion-procesos-barcelona).)*

Los datos de este artículo salen de las páginas oficiales de cada herramienta, consultadas el 4 de noviembre de 2026: [precios de n8n](https://n8n.io/pricing/), [precios de Make](https://www.make.com/en/pricing) y [precios de Zapier](https://zapier.com/pricing). Las tarifas cambian, así que revísalas antes de decidir.

---

## ¿En qué se diferencian n8n, Make y Zapier?

| | n8n | Make | Zapier |
|---|---|---|---|
| Cómo cobra | Por ejecuciones de flujo, en su nube | Por créditos | Por tareas |
| Para probar | Prueba gratuita en su nube | Plan Free con 1.000 créditos al mes | Plan Free con 100 tareas al mes |
| En tu propio servidor | Sí, con la versión autoalojada | Su página de precios no lo ofrece | Su página de precios no lo ofrece |
| Aplicaciones que conecta | [n8n.io/integrations](https://n8n.io/integrations/) | [make.com/en/integrations](https://www.make.com/en/integrations) | Más de 9.000, según su página de precios |

---

## ¿Cuánto cuesta Zapier?

Zapier publica sus precios en dólares. Esta tabla recoge el primer tramo de cada plan.

| Plan | Pago anual | Pago mensual | Tareas al mes |
|---|---|---|---|
| Free | ${TOOL_PRICE.zapierFree} | ${TOOL_PRICE.zapierFree} | 100 |
| Professional | desde ${TOOL_PRICE.zapierProAnnual} | desde ${TOOL_PRICE.zapierProMonthly} | 750 |
| Team | desde ${TOOL_PRICE.zapierTeamAnnual} | desde ${TOOL_PRICE.zapierTeamMonthly} | 2.000 |
| Enterprise | A medida | A medida | A medida |

El precio sube con las tareas: Professional con 5.000 tareas al mes cuesta ${TOOL_PRICE.zapierPro5000} con pago anual. Antes de elegir plan, calcula cuántas tareas harán tus flujos al mes.

---

## ¿Cuánto cuesta Make?

Make cobra por créditos: cada acción de un escenario gasta un número fijo de créditos, normalmente uno. El plan Free incluye 1.000 créditos al mes. Por encima están Core, Pro, Teams y Enterprise, con un precio que depende de los créditos que contrates.

Según la propia Make, el pago anual sale más barato que el mensual. Si se agotan los créditos, los escenarios se detienen hasta que añades más.

---

## ¿Cuánto cuesta n8n?

En su nube, n8n cobra por ejecuciones de flujo. Estos son sus planes, con pago anual:

| Plan | Precio | Ejecuciones al mes | Dónde funciona |
|---|---|---|---|
| Starter | ${TOOL_PRICE.n8nStarter} | 2.500 | Nube de n8n |
| Pro | ${TOOL_PRICE.n8nPro} | 10.000 | Nube de n8n |
| Business | ${TOOL_PRICE.n8nBusiness} | 40.000 | Tu servidor |
| Enterprise | A consultar | A medida | Nube de n8n o tu servidor |

Starter y Pro se pueden probar gratis. También hay una versión autoalojada en GitHub, que se instala en tu propio servidor. Se distribuye con la [Sustainable Use License](https://docs.n8n.io/n8n-community-license/community-license) (consultada el 4 de noviembre de 2026), que da derecho gratuito a usarla para los fines internos de tu negocio. n8n la describe como fair-code y no como open source. No pagas licencia, pero sí el servidor y el tiempo de mantenerlo.

---

## ¿Cuánto costaría en un año?

Las tres miden el consumo de forma distinta, así que no se pueden comparar una a una. Como orientación, con pago anual:

- Zapier Professional con 5.000 tareas al mes: ${TOOL_PRICE.zapierPro5000Year} al año.
- n8n Pro en su nube, con 10.000 ejecuciones al mes: ${TOOL_PRICE.n8nProYear} al año.
- Make: depende de los créditos que gasten tus escenarios.

Zapier fija sus precios en dólares y n8n, en euros. Calcúlalo con tu volumen real.

---

## ¿Cuál elegir?

Depende de quién vaya a mantener los flujos, de cuánto se vayan a usar y de dónde quieras que estén los datos.

- **Si nadie en tu equipo es técnico**, normalmente compensa empezar por el plan gratuito de Make o de Zapier.
- **Si tu volumen va a crecer**, calcula cuánto te costarían tus flujos en cada una: una cobra por tareas, otra por créditos y otra por ejecuciones.
- **Si quieres los datos en un servidor tuyo**, n8n autoalojado lo permite, pero alguien tiene que mantener ese servidor al día.
- **Si tratas datos sensibles**, el cumplimiento del RGPD depende de cómo se configure todo, no solo de la herramienta.

Lo más fiable es montar tu flujo principal en el plan gratuito o de prueba de cada una y quedarte con la que te resulte más cómoda.

---

## ¿Es fácil cambiar de herramienta después?

Normalmente no hay una forma directa de pasar los flujos de una a otra: hay que rehacerlos. Cuantos más flujos tengas, más trabajo supone, así que conviene elegir pensando a medio plazo. *(Antes de empezar, repasa los [7 errores al automatizar una empresa](/blog/errores-automatizar-empresa-barcelona).)*

---

## ¿Y el coste del proyecto?

La suscripción de la herramienta es solo una parte. El montaje se paga aparte: tienes los planes en la [página de precios](/precios) y lo explico en [cuánto cuesta automatizar procesos](/blog/cuanto-cuesta-automatizar-barcelona). Si quieres ver una de ellas aplicada a un caso, lee [cómo automatizar la facturación de una asesoría](/blog/automatizacion-facturacion-40h-4h).

---

## ¿Necesitas ayuda para elegir?

En una llamada de ${OFFER.freeCallMinutes} minutos vemos tus procesos y te digo qué herramienta encaja mejor, sin compromiso. [Cuéntame tu caso](/#contacto).`,
  },
  {
    title: "7 errores al automatizar una empresa y cómo evitarlos",
    slug: "errores-automatizar-empresa-barcelona",
    description:
      "Los 7 errores más habituales al automatizar los procesos de una empresa y cómo evitarlos antes de empezar.",
    answer: `Esta guía recoge errores frecuentes: automatizar lo fácil en vez de lo que más tiempo te quita, no enseñar al equipo a usarlo, montar flujos demasiado grandes de golpe y no enterarse cuando algo falla. Suele ayudar empezar por un solo proceso, probarlo con tus datos y dejar alertas.`,
    author: AUTHOR,
    publishDate: "2026-06-29",
    updatedDate: "2026-11-04",
    readTime: 10,
    category: "Educación",
    featured: false,
    footerFeatured: true,
    keywords: [
      "errores automatización empresa",
      "fallos automatizar procesos",
      "problemas automatización barcelona",
      "cómo evitar errores automatización",
      "automatización empresa barcelona",
    ],
    continueReading: [
      { href: "/blog/reportes-automaticos-para-agencias-de-marketing", label: "Reportes automáticos para agencias de marketing: cómo montarlos" },
      { href: "/automatizar", label: "Qué automatizar primero en una empresa de Barcelona" },
    ],
    internalLinks: [
      "automatizacion-procesos-barcelona",
      "5-procesos-manuales-destructivos-barcelona",
      "n8n-vs-make-vs-zapier-barcelona",
    ],
    content: `Montas una automatización, funciona unas semanas y un día deja de hacerlo. Es fácil culpar a la herramienta, pero muchas veces el problema está en cómo se planteó.

Estos son siete errores habituales y cómo evitar cada uno. *(¿Aún no has empezado? Primero lee la [guía de automatización de procesos](/blog/automatizacion-procesos-barcelona).)*

---

## Error #1: automatizar el proceso fácil en vez del ganador

### Qué sucede

La empresa decide automatizar. Elige el proceso más fácil de conectar, no el que más tiempo consume. *(Lee: [5 procesos de tu pyme que conviene automatizar](/blog/5-procesos-manuales-destructivos-barcelona))*

Ejemplo ilustrativo: generar un PDF lleva unos minutos al día y pasar contactos al CRM, cerca de una hora. Se automatiza lo primero porque es más fácil, el resultado apenas se nota y se concluye que automatizar no sirve.

**Impacto:** el proceso que de verdad consumía horas se queda como estaba.

### Cómo evitarlo

1. **Auditoría de tiempo** — Lista todos los procesos manuales y calcula horas/mes de cada uno
2. **Automatiza el ganador** — Empieza por el que consume más horas
3. **Itera** — Con el primer resultado visible, el equipo confía y el siguiente proceso se aprueba solo

---

## Error #2: no formar al equipo (y culpar a la herramienta)

### Qué sucede

Sistema implementado. Comunicación al equipo: "Aquí está. Úsalo." Sin demostración, sin contexto.

Dos semanas después: "Esto no funciona." En realidad: el equipo no sabe cómo usarlo y sigue con Excel.

**Impacto:** dinero invertido en algo que nadie usa y un equipo frustrado.

### Cómo evitarlo

**Sesión 1 (30 min):** Muestra el sistema en vivo, explica qué ahorra, demuestra el flujo paso a paso.

**Sesión 2 (30 min, 1 semana después):** Preguntas del equipo, casos que no entendieron, ajustes necesarios.

Es poco tiempo y marca la diferencia entre un sistema que se usa y otro que se ignora.

---

## Error #3: flujos demasiado complejos (todo a la vez)

### Qué sucede

Entusiasmo tras la primera automatización: "Hagamos algo grande. Automaticemos toda la facturación en 1 flujo. 40 pasos." *(Tienes un ejemplo por pasos en [cómo automatizar la facturación de una asesoría](/blog/automatizacion-facturacion-40h-4h).)*

Al principio funciona. Un día aparece un error sin causa clara y nadie sabe dónde mirar. El sistema se apaga y se vuelve a lo manual.

**Impacto:** muchas horas buscando el fallo y un equipo que deja de confiar.

### Cómo evitarlo

**Regla: un flujo pequeño es más fácil de mantener.**

En lugar de 40 pasos en un solo workflow, divide:
- Paso 1: Email entrada → Google Sheets (test 1 día)
- Paso 2: Sheets → genera PDF (test 1 día)
- Paso 3: PDF → email cliente (test 1 día)
- Paso 4: Registra en software contable (test 1 día)

Si el paso 3 falla, sabes dónde mirar.

---

## Error #4: no monitorizar = fallos silenciosos que no ves

### Qué sucede

Sistema funcionando. Tranquilidad total. Un mes después, el cliente XYZ llama: nunca recibió su factura. El cobro del cliente YYZ no se registró. Lo descubres dos semanas tarde.

La mayor parte funcionó; el resto falló sin hacer ruido.

**Impacto:** Facturas no enviadas, datos no sincronizados, clientes molestos, decisiones basadas en datos incorrectos.

### Cómo evitarlo

**Unos minutos de configuración bastan:**

1. Crea un aviso automático cuando un flujo falle
2. Comprueba de vez en cuando cuántas ejecuciones se han hecho
3. Decide quién recibe la alerta y qué debe hacer

En n8n puedes hacerlo con un flujo de error basado en [Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/).

Rutina: lunes 9am, 10 minutos revisar reporte semanal. ¿Errores? Arregla. ¿Todo limpio? Adelante.

---

## Error #5: integración frágil (cuando un programa cambia, el flujo se rompe)

### Qué sucede

Un flujo conecta el CRM, el correo y una hoja. Funciona durante meses hasta que una aplicación cambia su API y empieza a fallar sin que nadie sepa por qué.

**Impacto:** vuelta al trabajo manual mientras se arregla y dudas sobre el sistema.

### Cómo evitarlo

**Prefiere los nodos o módulos oficiales.** Las plataformas mantienen sus integraciones, lo que reduce este riesgo aunque no lo elimina.

**Webhooks como red de seguridad.** Configura: "Si algo falla, notifícame." Una alerta inmediata te permite hacer el workaround ese día y arreglarlo después, antes de que el cliente se entere.

**Test automático semanal.** Ejecuta un workflow de prueba cada lunes. Si falla, la alerta llega antes de que nadie en producción sufra el error.

---

## Error #6: sin documentación = sistema que solo tú entiendes

### Qué sucede

El sistema funciona bien hasta que quien lo montó no está y algo falla. Nadie sabe por dónde empezar.

**Impacto:** dependencia de una sola persona.

### Cómo evitarlo

**Una página. 20 minutos. Guarda en Google Drive compartido.**

Qué incluir:
1. Nombre del flujo y qué hace (1 párrafo)
2. Herramienta (Make, Zapier, n8n)
3. Pasos principales (lista o diagrama)
4. Si falla, qué hacer (checklist de 3 pasos)
5. Contacto: quién preguntar si hay error

Ejemplo:
> *"Workflow: Pedidos → Slack. Qué: cada pedido de web genera alerta en #orders. Herramienta: Make. Si falla: revisar Make error log → reejecutar → si persiste, avisar al responsable"*

---

## Error #7: no iterar después del lanzamiento

### Qué sucede

Sistema lanzado. Funcionando. "Misión cumplida, nos relajamos."

3 meses después: el volumen creció (el workflow es lento), llegó una app nueva que conviene integrar, hay un error recurrente pequeño que nadie arregla. El sistema funciona, pero ya no es óptimo.

**Impacto:** La degradación es silenciosa y progresiva.

### Cómo evitarlo

**Revisión trimestral — 1 hora cada 3 meses:**

1. ¿El flujo se ejecuta sin errores? Si no, arréglalo
2. ¿Hay nuevas integraciones posibles? Añade
3. ¿El equipo reportó problemas? Resuelve
4. ¿El volumen creció? Optimiza la capacidad

---

## Los 7 errores en una tabla

| Error | Síntoma | Solución | Tiempo |
|---|---|---|---|
| #1 Proceso equivocado | "El ahorro fue poco" | Audita y prioriza el ganador | 1h una vez |
| #2 Sin entrenamiento | "Nadie lo usa" | 2 sesiones de 30 min | 1h |
| #3 Flujo complejo | "Se rompe sin saber dónde" | 5 pasos por flujo | — |
| #4 Sin monitorización | "Descubro errores tarde" | Alertas automáticas | 30 min setup |
| #5 API frágil | "Actualizaron la app y rompió" | Usar plataforma que mantiene | — |
| #6 Sin documentación | "Solo yo sé cómo funciona" | 1 página por workflow | 20 min |
| #7 Sin iteración | "Ahorra menos con el tiempo" | Revisión trimestral | 1h × 4/año |

---

## ¿Ya has cometido alguno? No pasa nada

Si tu automatización falla ahora:

1. Identifica cuál de los 7 errores cometiste
2. Aplica la solución (está arriba)

Muchas veces no hace falta empezar de cero.

---

## ¿Quieres que lo revisemos?

Si tu automatización falla o no da lo que esperabas, en ${OFFER.freeCallMinutes} minutos vemos qué ha pasado. Si vas a empezar desde cero, consulta [cuánto cuesta automatizar procesos](/blog/cuanto-cuesta-automatizar-barcelona) y [qué herramienta elegir](/blog/n8n-vs-make-vs-zapier-barcelona).

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).

📧 ${SITE.email}
📱 ${SITE.phone}`,
  },
  {
    title: "Cómo automatizar facturas con n8n paso a paso",
    seoTitle: "Cómo automatizar facturas con n8n paso a paso | RASTECH",
    slug: "automatizar-facturas-con-n8n",
    description:
      "Cómo automatizar facturas con n8n paso a paso: del pedido o cobro a la factura enviada y registrada, con los errores típicos que conviene evitar.",
    answer: `El flujo tiene tres partes: n8n detecta la venta o el cobro, prepara los datos de la factura y los envía a tu programa de facturación, y al final avisa al cliente. n8n no sustituye a ese programa ni al criterio fiscal de tu gestor.`,
    author: AUTHOR,
    publishDate: "2026-11-02",
    readTime: 6,
    category: "Guías",
    featured: false,
    footerFeatured: true,
    keywords: [
      "automatizar facturas con n8n",
      "facturación automática",
      "n8n facturas",
      "automatizar facturación pyme",
    ],
    internalLinks: [
      "automatizar-cobros-y-facturas-impagadas",
      "que-es-n8n-y-cuando-usarlo-en-una-pyme",
    ],
    content: `Cada venta deja la misma tarea detrás: copiar los datos del pedido o del cobro, crear la factura, guardarla y enviarla. Con pocas ventas se hace en un rato; cuando crecen, se acumulan a final de mes y aparecen importes mal copiados o facturas que nadie llegó a enviar.

En esta guía explico cómo montar ese recorrido en n8n, desde el evento que lo dispara hasta la factura enviada y registrada. Si todavía no sabes qué herramienta es, empieza por [qué es n8n y cuándo usarlo en una pyme](/blog/que-es-n8n-y-cuando-usarlo-en-una-pyme).

## ¿Qué necesito antes de empezar?

Conviene tener esto preparado antes de abrir el editor:

- **Una instancia de n8n**, en la nube o [autoalojada](https://docs.n8n.io/hosting/).
- **Un programa de facturación con API.** n8n trae nodo propio para algunos, como [QuickBooks Online](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.quickbooks/). Con los demás se usa el nodo [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) contra la API que publique tu programa.
- **El origen de los datos:** tu pasarela de pago, tu tienda online o una hoja de cálculo con las ventas.
- **Credenciales de cada servicio**, creadas con el mínimo de permisos necesario.
- **Una hoja de control** en Google Sheets para saber qué se ha facturado ya.

## ¿Puede n8n emitir las facturas por sí solo?

Mi recomendación es que no. n8n mueve datos entre aplicaciones, pero la numeración, los impuestos y la conservación de las facturas deben quedar en un programa de facturación. Además, el nodo [Convert to File](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.converttofile/) genera formatos como CSV, HTML o XLSX, pero no PDF, de modo que lo razonable es que el programa cree el documento y n8n se limite a pedirlo y repartirlo.

Hay otro motivo. Los plazos de adaptación de los sistemas de facturación han cambiado varias veces, así que conviene consultar [la nota informativa de la Agencia Tributaria sobre los plazos de adaptación](https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/nota-informativa-ampliacion-plazo-adaptacion-facturacion.html) antes de decidir. Pregunta también a tu proveedor si su programa está adaptado antes de conectarlo.

La factura electrónica entre empresas va por otro camino: el [Real Decreto 238/2026](https://www.boe.es/buscar/act.php?id=BOE-A-2026-7295) entró en vigor el 20 de abril de 2026, pero su aplicación depende de una orden ministerial posterior. Esto es información general, no asesoramiento: para tu caso concreto, habla con tu asesoría.

## ¿Cómo es el flujo paso a paso?

Este es el recorrido que te propongo, nodo a nodo:

1. **Disparador.** Si cobras online, [Stripe Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.stripetrigger/) arranca el flujo con cada pago; configura el Signature Secret, porque sin él n8n no verifica que el aviso venga de Stripe. Si vendes en Shopify, [Shopify Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.shopifytrigger/) con el evento de pedido pagado. Si prefieres facturar por lotes, [Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/) lee cada día las ventas pendientes.
2. **Ordenar los datos.** Con [Edit Fields](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set/) dejas cliente, NIF, conceptos e importes en un formato único, venga de donde venga la venta.
3. **Comprobar duplicados.** El nodo [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) busca el identificador de la venta con Get Row(s) y un nodo [If](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/) detiene el flujo si ya existe.
4. **Validar lo fiscal.** Otro If revisa que no falten NIF ni dirección. Si faltan, esa venta se aparta y alguien recibe un aviso para completarla.
5. **Crear la factura.** QuickBooks Online o HTTP Request envían los datos al programa, que asigna número e impuestos.
6. **Recuperar el PDF.** Un segundo HTTP Request descarga el documento generado, si tu programa lo permite por API.
7. **Enviarla.** [Gmail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/) adjunta el archivo con la opción Attachments. Si usas otro correo, tienes [Send Email](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sendemail/).
8. **Registrar.** Google Sheets guarda el identificador de la venta, el número de factura y la fecha con Append or Update Row.
9. **Vigilar fallos.** Crea un flujo aparte con [Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/), asígnalo como flujo de error en los ajustes del principal y haz que te avise.

Cuando funcione en pruebas, publica el flujo. Los que arrancan con Schedule Trigger no se ejecutan solos hasta que lo haces.

## ¿Qué errores son los más habituales?

- **Facturar dos veces.** Las pasarelas pueden repetir un aviso, y sin el paso 3 esa repetición acaba en una factura duplicada.
- **Calcular el IVA en el flujo.** Los redondeos pueden no coincidir con los del programa. Deja ese cálculo en un solo sitio.
- **Fechas descuadradas.** Schedule Trigger usa la zona horaria del flujo o la de la instancia, y en n8n autoalojado [la predeterminada es la de Nueva York](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/). Ponla en Europe/Madrid.
- **Olvidar las devoluciones.** Una devolución exige una rectificativa, y si el flujo no la contempla, alguien debe saber que le toca hacerla a mano.
- **Probar con la serie real.** Usa una cuenta de pruebas o una serie aparte para no consumir numeración.

## ¿Cuándo no conviene automatizarlo?

Hay situaciones en las que no compensa montarlo:

- Emites pocas facturas al mes y hacerlo a mano te lleva menos que mantener el flujo.
- Cada factura se negocia y cambia de conceptos, descuentos o condiciones.
- Tu programa no tiene API. Se puede rodear con exportaciones, pero el resultado es frágil.
- Los datos de origen están desordenados. Antes de automatizar, hay que arreglar cómo se recogen.

## ¿Cuánto cuesta montarlo?

El coste tiene tres piezas. La primera es n8n: en la nube pagas según el número de ejecuciones, y [n8n cuenta cada ejecución como una pasada completa del flujo](https://n8n.io/pricing/), sea cual sea su número de pasos; autoalojado no pagas licencia, pero sí el servidor y el tiempo de mantenerlo. La segunda es tu programa de facturación, que puede cobrar aparte el acceso a la API. La tercera es el montaje, si no lo haces tú. Puedes consultar mis [precios de automatización](/precios) y los [planes oficiales de n8n](https://n8n.io/pricing/).

## ¿Cómo quedaría en un negocio concreto?

**Ejemplo ilustrativo.** Una academia cobra las matrículas online con Stripe. Cuando entra un pago, n8n comprueba que esa matrícula no esté facturada, revisa que el alumno tenga NIF y crea la factura en el programa de la academia. Después descarga el PDF, lo envía al alumno y anota el número en una hoja. Si falta el NIF, secretaría recibe un aviso y la factura espera hasta que alguien lo complete.

## ¿Qué hago cuando la factura ya está enviada?

Emitirla es la mitad del trabajo; la otra mitad es cobrarla. El siguiente paso natural es [automatizar los cobros y los avisos de facturas impagadas](/blog/automatizar-cobros-y-facturas-impagadas), que aprovecha la hoja de control de este flujo.

Si tu negocio no es de los habituales, en [automatización de procesos de negocio a medida](/automatizar-otros) tienes ejemplos para despachos, clínicas, gimnasios y academias. Y si quieres ver qué más se puede conectar, repasa los [procesos que se automatizan en empresas de Barcelona](/automatizar).

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).`,
  },
  {
    title: "Cómo automatizar los pedidos a proveedores de un restaurante",
    seoTitle: "Automatizar pedidos a proveedores en restaurantes | RASTECH",
    slug: "automatizar-pedidos-a-proveedores-restaurante",
    description:
      "Cómo automatizar los pedidos a proveedores de un restaurante: stock mínimo, pedido automático y aviso al proveedor, paso a paso con n8n o Make.",
    answer: `Apuntas el stock en una hoja o en tu programa de gestión y fijas un mínimo para cada producto. Cuando algo baja de ese mínimo, el flujo prepara el pedido de cada proveedor y te lo enseña antes de enviarlo. Con el producto fresco, normalmente conviene que lo revises tú, porque depende de las reservas.`,
    author: AUTHOR,
    publishDate: "2026-11-02",
    readTime: 6,
    category: "Guías",
    featured: false,
    keywords: [
      "pedidos a proveedores restaurante",
      "sistema de pedidos restaurante",
      "automatizar stock restaurante",
      "n8n restaurante",
    ],
    internalLinks: [
      "automatizar-pedidos-shopify-woocommerce",
      "automatizar-facturas-con-n8n",
    ],
    content: `Un domingo por la noche, alguien cuenta lo que queda en la cámara, lo apunta en una libreta y manda varios mensajes a distintos proveedores. Si esa persona se olvida de un producto, el martes falta en cocina. Si pide de más por si acaso, parte acaba en la basura.

Esta guía explica cómo pasar de ese recuento a un pedido que se prepara solo cuando el stock baja de un mínimo, y que tú revisas antes de que salga. Lo planteo con n8n, y al final indico los módulos equivalentes en Make.

## ¿Qué debe tener un sistema de pedidos para un restaurante?

Un sistema de pedidos útil no tiene que ser un programa caro. Necesita cuatro cosas: saber cuánto stock hay, saber cuánto debería haber, saber a quién se le pide cada producto y dejar constancia de lo pedido. Con eso, el resto es conectar piezas.

La parte delicada es la primera. Si tu TPV o tu programa de escandallos descuenta ingredientes con cada venta y tiene API, el dato llega solo. Si no, alguien tiene que seguir contando, aunque sea en una hoja desde el móvil. Automatizar no evita ese recuento; evita lo que viene después.

## ¿Qué necesito antes de empezar?

- **Una hoja de stock** en Google Sheets, con una fila por producto: nombre, unidad, stock actual, stock mínimo, cantidad habitual de pedido y proveedor.
- **Una hoja de proveedores**, con el correo o el teléfono de cada uno, sus días de reparto y su hora límite de pedido.
- **n8n o Make**, con acceso a Google Sheets y a tu correo.
- **Un canal de aviso** para ti: correo, Slack o Telegram.

Dedica tiempo a los mínimos antes de tocar nada técnico. Un mínimo mal puesto genera pedidos inútiles con la misma eficacia con la que un buen mínimo los evita.

## ¿Cómo es el flujo paso a paso?

1. **Disparador.** [Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/) arranca el flujo unas horas antes de la hora límite de tus proveedores. Fija la zona horaria Europe/Madrid en los ajustes del flujo.
2. **Leer el stock.** El nodo [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) con la operación Get Row(s) trae todas las filas.
3. **Quedarse con lo que falta.** [Filter](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.filter/) deja pasar solo los productos cuyo stock actual está por debajo del mínimo.
4. **Agrupar por proveedor.** [Summarize](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.summarize/) o [Aggregate](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aggregate/) juntan los productos de cada proveedor para que reciba un solo mensaje.
5. **Unir sus datos.** [Merge](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.merge/) añade el correo y las condiciones de cada proveedor desde la segunda hoja.
6. **Pedirte el visto bueno.** Te llega el borrador de cada pedido con un enlace para aprobarlo. El nodo [Wait](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/), en modo On Webhook Call, deja el flujo en pausa hasta que pulsas.
7. **Enviar.** [Gmail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/) o [Send Email](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sendemail/) mandan el pedido. Si un proveedor trabaja por WhatsApp, existe el nodo [WhatsApp Business Cloud](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/), que necesita una cuenta de empresa configurada aparte.
8. **Dejar constancia.** Google Sheets añade con Append Row la fecha, el proveedor y lo pedido en una hoja de histórico.
9. **Avisar si falla.** Un flujo con [Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/) te notifica si algo se rompe. Un pedido que no sale y nadie lo sabe es peor que el papel.

## ¿Se puede hacer con Make?

Sí. El planteamiento es el mismo y cambian los nombres. El escenario se programa con su propio horario, el módulo de [Google Sheets](https://apps.make.com/google-sheets) lee las filas y un [filtro](https://help.make.com/filtering) entre módulos deja pasar solo lo que está bajo mínimos. Para agrupar por proveedor se usa el [Array aggregator](https://help.make.com/flow-control), y un Router separa los proveedores por canal de envío.

Make es más cómodo si nadie de tu equipo tiene perfil técnico. n8n da más margen cuando la lógica se complica, por ejemplo si cada proveedor tiene días de reparto distintos. Tienes la comparación completa en [n8n vs Make vs Zapier](/blog/n8n-vs-make-vs-zapier-barcelona).

## ¿Qué errores son los más habituales?

- **Enviar sin revisar desde el primer día.** Deja la aprobación manual hasta que te fíes de los mínimos. Quitarla después es una decisión tuya; ponerla tras un pedido absurdo ya llega tarde.
- **No contar lo que ya está en camino.** Si pediste ayer y el reparto llega mañana, el flujo verá stock bajo y volverá a pedir. Añade a la hoja una columna de pedido pendiente y réstala.
- **Ignorar días de reparto y festivos.** Un pedido enviado después de la hora límite no sirve de nada. Guarda esos datos por proveedor.
- **Tratar igual el género fresco y el seco.** Unos mínimos fijos funcionan con el seco. Con el fresco, la previsión de reservas pesa más que el stock.
- **Depender de un stock que nadie actualiza.** Si la hoja lleva días sin tocarse, el flujo pedirá sobre datos falsos. Haz que te avise cuando la última actualización sea antigua.

## ¿Cuándo no conviene automatizar los pedidos?

- Compras en el mercado cada mañana según lo que encuentras. La decisión es tuya y no se puede convertir en reglas.
- La carta cambia cada semana y los productos no se repiten.
- Trabajas con uno o dos proveedores y resuelves el pedido en una llamada.
- Nadie va a mantener el stock al día. En ese caso, conviene arreglar antes el recuento.

## ¿Cuánto cuesta un sistema así?

Por estructura, el gasto depende de la herramienta. n8n en la nube cobra por ejecución y Make, por [créditos](https://www.make.com/en/pricing), que se consumen con las acciones de cada módulo: un flujo que recorre muchos productos gasta más en Make que uno corto, mientras que en n8n una pasada completa cuenta como [una sola ejecución](https://n8n.io/pricing/). Si autoalojas n8n no pagas licencia, pero sí el servidor y su mantenimiento. Mis [precios de automatización de procesos](/precios) cubren el montaje, por si no quieres hacerlo tú.

## ¿Cómo quedaría en un restaurante?

**Ejemplo ilustrativo.** Un restaurante de menú anota el stock en una hoja desde el móvil al cerrar. A primera hora, el flujo detecta qué productos están bajo mínimos, descuenta lo que ya está pedido y prepara un borrador para cada proveedor. El responsable lo revisa desde el móvil, cambia una cantidad si hay una reserva grande y lo aprueba. El proveedor recibe un solo correo con todo, y el pedido queda registrado.

## ¿Qué más puedo conectar después?

Cuando el pedido funciona, lo siguiente suele ser la factura que llega de vuelta. Puedes adaptar la lógica de [automatizar facturas con n8n](/blog/automatizar-facturas-con-n8n) para registrarlas. Y si además vendes por internet, la guía sobre [pedidos de Shopify y WooCommerce](/blog/automatizar-pedidos-shopify-woocommerce) cubre el lado del cliente.

Tienes más procesos del sector en [automatización para restaurantes en Barcelona](/automatizar-restaurantes), y una visión por sectores en la página de [automatización de procesos en Barcelona](/automatizar).

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).`,
  },
  {
    title: "Cómo automatizar los pedidos de Shopify y WooCommerce",
    seoTitle: "Cómo automatizar pedidos de Shopify y WooCommerce | RASTECH",
    slug: "automatizar-pedidos-shopify-woocommerce",
    description:
      "Cómo automatizar los pedidos de Shopify y WooCommerce: del pedido al aviso de envío, el stock y la factura, con n8n o Make y los fallos que evitar.",
    answer: `Lo primero que suele compensar es que cada pedido pagado llegue solo a almacén o a logística, sin copiarlo a mano. Después vienen el aviso de envío al cliente, el ajuste del stock en los demás canales y la factura. Se puede hacer con n8n o Make si tu tienda y tu operador permiten conectarse.`,
    author: AUTHOR,
    publishDate: "2026-11-02",
    readTime: 6,
    category: "Guías",
    featured: false,
    keywords: [
      "automatizar pedidos shopify",
      "automatizar pedidos woocommerce",
      "sistema de pedidos ecommerce",
      "n8n shopify",
    ],
    internalLinks: [
      "automatizar-pedidos-a-proveedores-restaurante",
      "automatizar-facturas-con-n8n",
    ],
    content: `Un pedido entra de madrugada. Por la mañana alguien lo copia a la hoja de almacén, avisa a logística, ajusta el stock de otro canal y prepara la factura. Cada copia es una oportunidad de equivocarse, y el error suele aparecer cuando el cliente pregunta dónde está su paquete.

Aquí explico qué partes de ese recorrido merece la pena automatizar en Shopify y WooCommerce, y cómo hacerlo con n8n o Make.

## ¿Qué partes de un sistema de pedidos conviene automatizar primero?

Antes de conectar nada, mira qué hace ya tu tienda. Shopify [envía avisos automáticos de pedidos y envíos](https://help.shopify.com/en/manual/fulfillment/setup/notifications), que puedes personalizar desde el panel. Si montas un flujo que manda otro correo de envío, el cliente recibirá dos.

Lo que suele faltar en un sistema de pedidos no es el aviso al cliente, sino lo que pasa entre aplicaciones:

- Pasar el pedido a tu almacén, tu operador logístico o tu programa de gestión.
- Mantener el stock alineado si vendes en más de un canal.
- Crear la factura cuando el pedido se paga.
- Separar los pedidos que requieren atención: dirección incompleta, importe alto o producto agotado.

Empieza por la tarea que más tiempo consume o la que más errores provoca. Con una sola bien resuelta aprenderás más que montando las cuatro a la vez.

## ¿Qué necesito antes de empezar?

- **Acceso de administrador** a la tienda, para crear credenciales.
- **En Shopify**, una app propia o unas credenciales con permisos sobre pedidos e inventario. La [documentación de n8n](https://docs.n8n.io/integrations/builtin/credentials/shopify/) detalla el proceso.
- **En WooCommerce**, claves de la API REST y [webhooks](https://woocommerce.com/document/webhooks/), que se gestionan en WooCommerce > Ajustes > Avanzado > Webhooks.
- **n8n o Make**, con acceso a tu programa de gestión, tu hoja de almacén o la API de tu operador logístico.
- **Un entorno de pruebas** o pedidos de prueba. No uses pedidos reales de clientes para probar.

## ¿Cómo es el flujo en n8n paso a paso?

1. **Disparador.** Para Shopify, [Shopify Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.shopifytrigger/) con el evento de pedido creado o, si solo quieres procesar lo cobrado, el de pedido pagado (orders/paid). Para WooCommerce, [WooCommerce Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.woocommercetrigger/) con order.created u order.updated.
2. **Unificar el formato.** Si tienes las dos tiendas, [Edit Fields](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set/) deja cada pedido con los mismos campos, de forma que el resto del flujo sirva para ambas.
3. **Evitar repetidos.** [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) busca el número de pedido con Get Row(s) y un nodo [If](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/) corta si ya se procesó. Es especialmente útil con order.updated, que se dispara cada vez que el pedido cambia.
4. **Clasificar.** [Switch](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch/) reparte los pedidos por ruta: normal, a revisar a mano o con producto bajo pedido.
5. **Pasarlo a logística.** [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) envía los datos a la API de tu operador, o [Gmail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/) manda el pedido a almacén si trabajáis por correo.
6. **Actualizar el stock en el otro canal.** Si vendes también fuera de la tienda, HTTP Request o los nodos [Shopify](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.shopify/) y [WooCommerce](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.woocommerce/) ajustan allí las unidades, según lo que permita cada operación.
7. **Crear la factura.** Una llamada a tu programa de facturación, con la misma lógica de [automatizar facturas con n8n](/blog/automatizar-facturas-con-n8n).
8. **Registrar.** Google Sheets guarda número de pedido, estado y fecha con Append or Update Row.
9. **Avisar de fallos.** Un flujo con [Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/) te notifica si algo se rompe.

Cuando el flujo funcione en pruebas, publícalo. Hasta entonces, los webhooks de producción no lo disparan.

## ¿Y si prefiero hacerlo con Make?

Make tiene módulos para las dos plataformas. En [Shopify](https://apps.make.com/shopify) cuentas con Watch orders, Search orders, Create a fulfillment y Adjust an inventory level. En [WooCommerce](https://apps.make.com/woocommerce), con Watch Orders, Search for an Order y Update an Order Status. Un [Router](https://help.make.com/flow-control) hace el papel del nodo Switch, y los [filtros](https://help.make.com/filtering) entre módulos, el del If.

Elegiría Make si el flujo es lineal y quieres manejarlo tú. Si necesitas lógica propia o vas a mover mucho volumen, compara antes en [n8n vs Make vs Zapier](/blog/n8n-vs-make-vs-zapier-barcelona), porque cada una mide el consumo de forma distinta.

## ¿Qué errores son los más habituales?

- **Duplicar correos que la tienda ya envía.** Revisa las notificaciones activas antes de añadir las tuyas.
- **Disparar con el pedido creado y facturar sin cobrar.** Si aceptas transferencia o contrarreembolso, un pedido creado no es un pedido pagado. Elige bien el evento.
- **No vigilar los webhooks de WooCommerce.** WooCommerce [desactiva un webhook tras más de cinco fallos de entrega consecutivos](https://woocommerce.com/document/webhooks/). Si tu servidor de n8n cae un rato, los pedidos pueden dejar de llegar sin que nadie se entere. Revisa el estado del webhook y ten una comprobación periódica con [Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/) que compare pedidos recientes con tu hoja.
- **Sobrescribir el stock.** Si dos sistemas escriben la cantidad total, el último gana. Trabaja con ajustes (restar unidades) y decide qué sistema manda.
- **Olvidar devoluciones y cancelaciones.** Un pedido cancelado debe devolver stock y parar la factura. Shopify tiene un evento propio para ello, orders/cancelled.

## ¿Cuándo no conviene automatizarlo?

- Recibes pocos pedidos y los preparas tú. El tiempo de mantener el flujo puede superar al ahorrado.
- Una app de la tienda ya resuelve tu caso. Compruébalo antes de construir nada.
- Vendes productos personalizados que requieren hablar con cada cliente.
- Tu catálogo o tus referencias están desordenados. Si un producto no se llama igual en dos sistemas, el stock no cuadrará.

## ¿Cuánto cuesta automatizar los pedidos?

Aquí el volumen pesa más que en otros procesos, porque el flujo corre con cada pedido. n8n en la nube cobra por ejecución, sin contar los pasos; [Make](https://www.make.com/en/pricing) cobra por créditos y [Zapier](https://zapier.com/pricing) por tareas, de modo que cada acción suma. Con n8n autoalojado no pagas licencia, pero sí el servidor, y aquí conviene que esté bien vigilado. Revisa también si tu plataforma o tu operador cobran por el acceso a su API. Tienes los [planes oficiales de n8n](https://n8n.io/pricing/) y mis [precios de automatización](/precios) para el montaje.

## ¿Cómo quedaría en una tienda online?

**Ejemplo ilustrativo.** Una tienda de cosmética vende en WooCommerce y en una feria mensual. Cuando un pedido pasa a pagado, n8n comprueba que no se haya procesado, lo envía por correo a almacén con la dirección validada y crea la factura. Si la dirección viene incompleta, el pedido queda apartado y la persona de atención al cliente recibe un aviso. Tras cada feria, una hoja con las ventas ajusta el stock de la web.

## ¿Por dónde sigo?

Si también compras a proveedores de forma recurrente, la lógica de stock mínimo de [automatizar pedidos a proveedores](/blog/automatizar-pedidos-a-proveedores-restaurante) te servirá, aunque el ejemplo sea de hostelería.

En la página de [automatización para e-commerce en Barcelona](/automatizar-ecommerce) tienes otros procesos de tienda online, y aquí puedes ver [qué se automatiza en otros sectores](/automatizar).

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).`,
  },
  {
    title: "Reportes automáticos para agencias de marketing",
    seoTitle: "Reportes automáticos para agencias de marketing | RASTECH",
    slug: "reportes-automaticos-para-agencias-de-marketing",
    description:
      "Cómo montar reportes automáticos para los clientes de una agencia de marketing: datos, plantilla y envío programado con n8n o Make.",
    answer: `Se automatiza la parte mecánica: recoger cada mes los datos de analítica y de anuncios de cada cliente, colocarlos en tu plantilla y programar el envío. El comentario sobre qué ha pasado y qué hacer después lo sigue escribiendo una persona, y conviene revisar cada informe antes de que salga.`,
    author: AUTHOR,
    publishDate: "2026-11-02",
    readTime: 5,
    category: "Guías",
    featured: false,
    keywords: [
      "reportes automáticos agencia",
      "informes clientes agencia marketing",
      "automatizar reportes",
      "n8n google analytics",
    ],
    internalLinks: [
      "que-es-n8n-y-cuando-usarlo-en-una-pyme",
      "automatizar-cobros-y-facturas-impagadas",
    ],
    content: `A final de mes, alguien abre Google Analytics, Google Ads y Meta para cada cliente, exporta datos, los pega en una plantilla y escribe un resumen. Es un trabajo mecánico que ocupa a gente que debería estar pensando en campañas, y un número mal copiado acaba delante del cliente.

Esta guía explica cómo separar lo mecánico (recoger datos y montar el informe) de lo que solo puede hacer una persona (interpretarlos), usando n8n o Make.

## ¿Qué parte del reporte se puede automatizar?

Casi todo lo que sea mover datos: conectarse a cada plataforma, traer las métricas del periodo, ordenarlas por cliente, volcarlas en una plantilla y enviar el resultado en una fecha fija.

Lo que no conviene automatizar del todo es la lectura. Un cliente paga por saber por qué ha bajado el coste por lead y qué vas a hacer al respecto. Lo más sensato es que el flujo prepare el informe y deje un hueco para el comentario del responsable de la cuenta antes de enviarlo.

## ¿Qué necesito antes de empezar?

- **Acceso a las cuentas de cada cliente** con un usuario de la agencia, con permisos de lectura.
- **Una hoja maestra** en Google Sheets: cliente, identificadores de sus cuentas, métricas que le interesan, responsable y correo de destino.
- **Una plantilla de informe**: una hoja de cálculo, un documento o un panel de Looker Studio conectado a una hoja.
- **n8n o Make**, con credenciales para Google y Meta.

Decide las métricas antes de construir. Si cada cliente recibe un informe distinto, tendrás un flujo con mil excepciones. Lo más mantenible es una plantilla común con pocas variantes.

## ¿Cómo es el flujo paso a paso?

1. **Disparador.** [Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/) arranca el primer día laborable del mes, o cada lunes si el reporte es semanal.
2. **Leer los clientes.** [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) trae la hoja maestra con Get Row(s).
3. **Recorrerlos uno a uno.** [Loop Over Items](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.splitinbatches/) procesa cada cliente por separado, de modo que un fallo en uno se pueda tratar sin mezclar datos.
4. **Traer los datos web.** El nodo [Google Analytics](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleanalytics/) saca el informe del periodo.
5. **Traer los datos de campañas.** [Google Ads](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googleads/) para las campañas de Google y [Facebook Graph API](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.facebookgraphapi/) para Meta. Si una métrica no está disponible en el nodo, [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) permite llamar directamente a la API de la plataforma.
6. **Unirlo todo.** [Merge](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.merge/) junta las fuentes y [Code](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/) calcula lo que no viene hecho, como la variación frente al periodo anterior.
7. **Rellenar la plantilla.** Google Sheets escribe los datos en la pestaña de ese cliente. Si quieres un archivo adjunto, [Convert to File](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.converttofile/) genera XLSX o HTML.
8. **Revisión humana.** [Slack](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack/) avisa al responsable con la operación Send and Wait for Response. El flujo espera hasta que aprueba, y el comentario queda en la plantilla.
9. **Enviar.** [Gmail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/) manda el informe al cliente desde la cuenta de la agencia.
10. **Vigilar fallos.** Un flujo con [Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/) avisa si una conexión ha caducado.

## ¿Se puede montar con Make?

Sí, y para una agencia sin perfil técnico suele ser el camino más directo. El escenario se programa por fechas, un módulo de [Google Sheets](https://apps.make.com/google-sheets) lee la lista de clientes y el [Iterator](https://help.make.com/flow-control) los recorre uno a uno. Después, un [Array aggregator](https://help.make.com/flow-control) reúne las métricas en un solo paquete antes de escribirlas en la plantilla.

Vigila el consumo: [Make cobra por créditos](https://www.make.com/en/pricing), y recorrer muchos clientes con varias fuentes multiplica las acciones. Si no tienes claro qué te encaja, la [comparativa de n8n, Make y Zapier](/blog/n8n-vs-make-vs-zapier-barcelona) lo explica con más detalle.

## ¿Qué errores son los más habituales?

- **Mezclar datos de clientes.** Es el peor fallo posible, porque es un problema de confianza y puede serlo de confidencialidad. Procesa cada cliente aislado y prueba con cuentas internas antes de enviar nada fuera.
- **Permisos que caducan.** Las conexiones con plataformas publicitarias pueden necesitar reautorización. Si no tienes aviso de errores, lo descubrirás cuando el cliente pregunte por su informe.
- **Fechas mal calculadas.** Un error típico es lanzar el flujo el día 1 con datos aún incompletos. Las plataformas pueden consolidar cifras con retraso, así que deja un margen y fija la zona horaria Europe/Madrid en los ajustes del flujo.
- **Comparar métricas que no significan lo mismo.** Cada plataforma atribuye las conversiones a su manera. Si sumas conversiones de Google y Meta sin avisar, puedes contar la misma venta dos veces.
- **Enviar sin leer.** Un informe automático con una caída brusca que nadie comenta genera más inquietud que uno tardío.

## ¿Cuándo no conviene automatizar los reportes?

- Tienes pocos clientes y cada informe es una pieza a medida que forma parte de lo que vendes.
- Los clientes piden métricas distintas cada mes.
- Las cuentas están a nombre de cada cliente y no tienes un acceso estable.
- Ya usas una herramienta de reporting que cubre lo que necesitas. Si funciona, añadir otra capa no aporta.

## ¿Cuánto cuesta montar los reportes automáticos?

La estructura depende de cómo se mida el consumo. n8n en la nube factura [por ejecución completa](https://n8n.io/pricing/), de modo que un flujo mensual largo cuenta poco; Make cobra por las acciones de cada módulo, y ahí el número de clientes y de fuentes sí pesa. Si autoalojas n8n, no pagas licencia, pero sí servidor y mantenimiento. Las APIs de Google y Meta requieren alta y permisos, y conviene revisar sus condiciones. Para el montaje puedes consultar mis [precios de automatización](/precios).

## ¿Cómo quedaría en una agencia?

**Ejemplo ilustrativo.** Una agencia gestiona campañas para varias pymes. El primer día laborable del mes, n8n recorre la lista de clientes, trae los datos de Analytics, Google Ads y Meta y rellena la pestaña de cada uno. Cada responsable de cuenta recibe un mensaje en Slack, revisa los números, escribe dos líneas de interpretación y aprueba. El cliente recibe el informe con ese comentario, y la agencia deja de copiar y pegar.

## ¿Y si no conozco n8n?

Si esta guía te ha sonado técnica, empieza por [qué es n8n y cuándo usarlo en una pyme](/blog/que-es-n8n-y-cuando-usarlo-en-una-pyme). Y si tu agencia persigue facturas tanto como métricas, te interesará [automatizar los cobros y las facturas impagadas](/blog/automatizar-cobros-y-facturas-impagadas).

En la página de [automatización para agencias en Barcelona](/automatizar-agencias) tienes más procesos del sector, y aquí un [resumen de qué se puede automatizar por sectores](/automatizar).

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).`,
  },
  {
    title: "Cómo automatizar los cobros y las facturas impagadas",
    seoTitle: "Automatizar cobros y facturas impagadas en pymes | RASTECH",
    slug: "automatizar-cobros-y-facturas-impagadas",
    description:
      "Cómo automatizar los cobros y los recordatorios de facturas impagadas en una pyme: avisos escalonados, registro y cuándo intervenir a mano.",
    answer: `Cada mañana el flujo revisa qué facturas siguen sin cobrar y envía el recordatorio que toca: antes del vencimiento, al vencer y unos días después. Las que ya están pagadas dejan de recibir avisos. En el último escalón no escribe al cliente: te avisa a ti para que le llames.`,
    author: AUTHOR,
    publishDate: "2026-11-02",
    readTime: 6,
    category: "Guías",
    featured: false,
    keywords: [
      "automatizar cobros",
      "facturas impagadas",
      "recordatorios de pago automáticos",
      "reclamar facturas pyme",
    ],
    internalLinks: [
      "automatizar-facturas-con-n8n",
      "reportes-automaticos-para-agencias-de-marketing",
    ],
    content: `Las facturas vencidas rara vez se quedan sin cobrar por mala fe: muchas veces nadie ha mirado la lista. Reclamar da pereza, se deja para la semana que viene y el cliente interpreta el silencio como que no corre prisa. Mientras tanto, la caja lo nota.

Esta guía explica cómo montar una secuencia de avisos escalonados que se detiene sola cuando el cliente paga y te pasa el caso cuando ya hace falta hablar con él.

## ¿Qué se puede automatizar en los cobros?

Tres cosas con claridad: detectar qué facturas han vencido, enviar recordatorios en fechas fijas y dejar registro de cada aviso. También puedes automatizar los recordatorios previos al vencimiento, que son los que menos incomodan.

Lo que debería seguir en manos de una persona es la negociación: un aplazamiento, una factura discutida o un cliente con dificultades. Un mensaje automático en mitad de una conversación delicada puede estropear una relación que costó años construir.

## ¿Qué necesito antes de empezar?

- **Una lista fiable de facturas**, con número, cliente, correo, importe, fecha de vencimiento y estado. Puede salir de tu programa de facturación por API o de una hoja.
- **Una forma de saber qué está pagado.** Es la pieza crítica. Puede venir del programa, de [Stripe](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.stripe/) o de una marca manual después de conciliar el banco.
- **Plantillas de mensaje** para cada escalón, revisadas por ti.
- **n8n o Make**, con acceso al correo de administración.

Si ya tienes el flujo de [automatizar facturas con n8n](/blog/automatizar-facturas-con-n8n), su hoja de control es un buen punto de partida.

## ¿Qué dice la ley sobre los plazos de pago?

Para fijar los escalones conviene conocer el marco. Según la [Ley 3/2004 de lucha contra la morosidad](https://www.boe.es/buscar/act.php?id=BOE-A-2004-21830) (texto consolidado, última actualización publicada el 1 de octubre de 2014), entre empresas el plazo es de treinta días naturales si no se ha pactado otro, y el acuerdo entre las partes no puede ampliarlo más allá de sesenta. La misma ley prevé una cantidad fija de 40 euros por costes de cobro cuando hay mora.

Esto es información general. Antes de citar la ley en un aviso o de reclamar intereses, consúltalo con tu asesoría.

## ¿Cómo es el flujo paso a paso?

1. **Disparador.** [Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/) arranca cada mañana laborable, con zona horaria Europe/Madrid.
2. **Traer las facturas abiertas.** [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) con Get Row(s), o [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) contra la API de tu programa.
3. **Descartar lo pagado.** [Filter](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.filter/) deja solo las facturas sin cobrar y excluye las marcadas como "en gestión manual".
4. **Calcular el retraso.** [Edit Fields](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.set/) o [Code](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/) obtienen los días que faltan o que han pasado desde el vencimiento.
5. **Elegir el escalón.** [Switch](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch/) envía cada factura a su rama: aviso previo, primer recordatorio, segundo recordatorio o intervención manual. Los días exactos los decides tú.
6. **Comprobar el último aviso.** Un nodo [If](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/) mira en la hoja si ya se envió ese escalón, para no repetirlo.
7. **Enviar.** [Gmail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/) manda la plantilla con los datos de la factura.
8. **Registrar.** Google Sheets actualiza fecha y escalón con Append or Update Row. Ese historial te servirá si el caso se complica.
9. **Pasar a mano.** En el último escalón no sale ningún correo al cliente: [Slack](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack/) o un correo interno avisan a la persona responsable para que llame.
10. **Vigilar fallos.** Un flujo con [Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/) te avisa si el proceso diario no se ha completado.

Este diseño, que revisa el estado cada día, resulta más seguro que un flujo largo con pausas. Si usaras el nodo [Wait](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/) para esperar semanas, el estado de la factura podría haber cambiado sin que el flujo lo supiera.

## ¿Cómo es con Make?

La lógica se traslada casi igual. El escenario se programa a diario, un módulo lee las facturas y un [Router](https://help.make.com/flow-control) reparte cada una a su escalón, con un [filtro](https://help.make.com/filtering) en cada ruta. Elegir entre las dos depende más de tu equipo que del proceso, como explico en la [comparativa de herramientas](/blog/n8n-vs-make-vs-zapier-barcelona).

## ¿Cómo deben ser los mensajes?

- **Primer aviso, cordial.** Da por hecho un despiste, indica número, importe y fecha, y facilita el pago con un enlace o tu IBAN.
- **Segundo aviso, directo.** Pregunta si hay algún problema con la factura y ofrece un contacto.
- **Último escalón, personal.** Lo hace una persona por teléfono.

Escribe desde una dirección a la que se pueda responder, y haz que alguien lea esas respuestas. Es frecuente que un cliente conteste que ya ha pagado o que la factura tiene un error.

## ¿Qué errores son los más habituales?

- **Reclamar lo que ya está pagado.** Es el fallo que más daña la imagen. Si el estado de pago llega tarde, retrasa los avisos o concilia antes de enviar.
- **Seguir avisando durante una negociación.** Añade un estado "en gestión manual" que saque la factura de la secuencia.
- **Disparar en lote.** Si un día se acumulan muchas facturas, parte de los envíos pueden fallar por límites del correo. Reparte la tanda.
- **Dar datos de más.** El aviso va a la persona de contacto de la factura. Comprueba que sigue siendo la correcta.
- **Tratar igual a todos los clientes.** Un cliente grande con pagos pactados no debería recibir el mismo aviso que una factura puntual.

## ¿Cuándo no conviene automatizar los cobros?

- Tienes pocos clientes y una relación muy personal con ellos. Una llamada funciona mejor.
- No tienes una forma fiable de saber qué se ha pagado.
- Tu programa de facturación ya incluye recordatorios. Actívalos antes de construir nada.
- Tus clientes domicilian el pago o pagan con tarjeta al comprar, y las facturas vencidas son una rareza.

## ¿Cuánto cuesta esta automatización?

Un flujo diario como este consume poco. En n8n en la nube, cada pasada cuenta como [una ejecución](https://n8n.io/pricing/) aunque tenga muchos pasos; en [Make](https://www.make.com/en/pricing), el consumo depende de las acciones que hagan sus módulos. Si autoalojas n8n, no hay licencia, pero sí servidor y mantenimiento. Al montaje se suma el tiempo de preparar plantillas y limpiar la lista de facturas. Tienes mis [precios de automatización de procesos](/precios) por si prefieres delegarlo.

## ¿Cómo quedaría en una pyme?

**Ejemplo ilustrativo.** Una empresa de servicios factura a varias decenas de clientes al mes. Cada mañana, n8n revisa las facturas abiertas: unos días antes del vencimiento envía un recordatorio amable; poco después, otro con enlace de pago; más adelante, uno preguntando si hay algún problema. Si sigue sin cobrarse, administración recibe un aviso con el historial completo y llama. Cuando alguien marca una factura como pagada, la secuencia se detiene.

## ¿Qué puedo automatizar después?

Si aún emites a mano, empieza antes por [automatizar las facturas](/blog/automatizar-facturas-con-n8n). Y si tienes una agencia, el mismo patrón de datos y envío programado sirve para los [reportes automáticos a clientes](/blog/reportes-automaticos-para-agencias-de-marketing).

En [automatización de procesos de negocio a medida](/automatizar-otros) verás ejemplos por tipo de negocio, y aquí tienes [los servicios para empresas de Barcelona](/automatizar).

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).`,
  },
  {
    title: "Qué es n8n y cuándo usarlo en una pyme",
    seoTitle: "Qué es n8n y cuándo usarlo en una pyme | RASTECH",
    slug: "que-es-n8n-y-cuando-usarlo-en-una-pyme",
    description:
      "Qué es n8n, cómo funciona, qué opciones de uso tiene (autoalojado o en la nube) y cuándo conviene a una pyme frente a Make o Zapier.",
    answer: `n8n es una herramienta que conecta tus programas para que los datos pasen de uno a otro solos, siguiendo pasos que dibujas en pantalla. Puedes usarla en su nube, con una cuota, o instalarla en tu propio servidor. Suele compensar cuando tienes varios flujos o quieres decidir dónde están tus datos.`,
    author: AUTHOR,
    publishDate: "2026-11-02",
    readTime: 6,
    category: "Guías",
    featured: false,
    keywords: [
      "qué es n8n",
      "n8n autoalojado",
      "n8n para pymes",
      "n8n cloud",
    ],
    internalLinks: [
      "n8n-vs-make-vs-zapier-barcelona",
      "reportes-automaticos-para-agencias-de-marketing",
    ],
    content: `Tienes una aplicación para las ventas, otra para las facturas y una hoja de cálculo que une las dos a base de copiar y pegar. n8n sirve para conectarlas, pero su nombre aparece junto a palabras como "autoalojado" o "fair-code" que no ayudan a saber si te conviene.

Aquí explico qué es, cómo funciona y en qué casos tiene sentido para una pyme.

## ¿Qué es n8n exactamente?

n8n es una herramienta de automatización de flujos de trabajo. En un editor visual colocas bloques, llamados nodos, y los conectas: cuando pasa algo en una aplicación, n8n lee datos, toma decisiones y actúa en otras. Trabaja en el mismo terreno que Make y Zapier, con una diferencia importante: puedes instalarlo en tu propio servidor.

Se pronuncia "n-eight-n". No hace falta programar para los flujos sencillos, aunque tener cierta base técnica ayuda bastante cuando se complican.

## ¿Cómo funciona un flujo de n8n?

Un flujo, o workflow, tiene tres tipos de pieza:

- **Disparadores.** Deciden cuándo arranca. Puede ser una hora fija con [Schedule Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/), una llamada externa con [Webhook](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/) o un evento de una aplicación, como un correo nuevo con [Gmail Trigger](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/).
- **Nodos de aplicación.** Leen o escriben en un servicio concreto, como [Google Sheets](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.googlesheets/) o [Gmail](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.gmail/). Si un servicio no tiene nodo, [HTTP Request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) llama a su API.
- **Nodos de lógica.** Deciden qué ocurre con los datos: [If](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.if/) separa en dos caminos, [Switch](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch/) en varios y [Code](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/) permite escribir código cuando lo visual se queda corto.

Cada vez que el flujo corre se produce una ejecución, que queda registrada para que puedas revisar qué pasó en cada nodo. Si algo falla, un flujo aparte con [Error Trigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.errortrigger/) puede avisarte.

## ¿Cómo sería un primer flujo sencillo?

Para hacerte una idea, un recordatorio semanal de tareas pendientes se monta así:

1. **Schedule Trigger** arranca cada lunes a primera hora.
2. **Google Sheets** lee las filas de una hoja de tareas con Get Row(s).
3. **[Filter](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.filter/)** deja solo las que siguen abiertas.
4. **[Aggregate](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.aggregate/)** las reúne en un único elemento.
5. **Gmail** envía un resumen a la persona responsable.

Son cinco nodos y ningún código. Pruébalo con el botón de ejecución manual y, cuando esté bien, publica el flujo: los que usan Schedule Trigger [no arrancan solos hasta que están publicados](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/).

## ¿Qué significa autoalojado o en la nube?

Tienes dos formas de usarlo:

- **n8n Cloud.** n8n se encarga del servidor y de las actualizaciones. Solo creas la cuenta y empiezas. Es de pago y [no tiene plan gratuito permanente](https://n8n.io/pricing/), aunque ofrece un periodo de prueba.
- **Autoalojado.** Lo instalas tú en un servidor propio o alquilado. La [documentación oficial](https://docs.n8n.io/hosting/) explica opciones como Docker Compose. La edición Community no paga licencia, pero tú respondes de las copias de seguridad, las actualizaciones y la seguridad.

La decisión no va solo de dinero. Si nadie en tu empresa sabe mantener un servidor, autoalojar traslada el coste de la factura mensual al riesgo de que algo caiga y no sepas arreglarlo.

## ¿n8n es open source?

No exactamente, y conviene decirlo bien. n8n se distribuye con licencia [fair-code](https://docs.n8n.io/n8n-community-license/community-license): la [Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md). El código se puede ver y la edición Community es gratuita, pero la licencia limita el uso a fines internos de negocio, personales o no comerciales.

Para una pyme que automatiza sus propios procesos, eso encaja. Según las [preguntas frecuentes de n8n](https://docs.n8n.io/n8n-community-license/community-license/license-faq), lo que no permite es, por ejemplo, ofrecer n8n como servicio para que tus clientes construyan sus propios flujos. Si tu idea va por ahí, léelas antes o escríbeles.

## ¿Cuándo conviene n8n a una pyme?

- **Quieres controlar dónde están tus datos.** Autoalojarlo te deja decidir en qué servidor viven. El cumplimiento de la protección de datos sigue dependiendo de cómo lo configures.
- **Tus flujos tienen muchos pasos.** n8n en la nube [factura por ejecución completa, no por paso](https://n8n.io/pricing/), lo que favorece a los flujos largos.
- **Necesitas lógica propia.** Cuando hay condiciones, cálculos o APIs poco habituales, el nodo Code y HTTP Request dan mucho margen.
- **Tienes a alguien técnico cerca**, en el equipo o de forma externa, para mantenerlo.

## ¿Cuándo es mejor Make o Zapier?

- **Nadie técnico en la empresa.** Make y Zapier te ahorran el mantenimiento y sus editores resultan más fáciles para empezar.
- **Tu aplicación no está en n8n.** Zapier anuncia [más de 9.000 apps conectadas](https://zapier.com/pricing). Si la tuya solo está allí, puede decidir por ti.
- **Automatizaciones cortas y sencillas.** Con dos pasos y poco volumen, el plan gratuito de otra herramienta puede bastar.

Lo desarrollo con planes y ejemplos en [n8n vs Make vs Zapier: cuál elegir](/blog/n8n-vs-make-vs-zapier-barcelona).

## ¿Qué errores cometen quienes empiezan?

- **Autoalojar por ahorrar sin plan de mantenimiento.** Un servidor sin copias de seguridad es un riesgo aunque salga barato.
- **Dejar la zona horaria por defecto.** En instalaciones autoalojadas la predeterminada es [la de Nueva York](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.scheduletrigger/), y los flujos programados correrán a horas extrañas.
- **No configurar avisos de error.** Un flujo que falla en silencio puede pasar semanas sin que nadie lo note.
- **Dar permisos de más.** Crea credenciales con el acceso justo para cada flujo.
- **Empezar por el proceso más difícil.** Elige uno pequeño, repetitivo y con un resultado fácil de comprobar.

## ¿Cuándo no conviene usar n8n?

- El proceso cambia cada semana o depende del criterio de alguien.
- Haces esa tarea muy de vez en cuando y no compensa mantener nada.
- Tu programa de gestión ya trae esa automatización.
- No hay nadie que pueda revisar los flujos cuando una aplicación cambie su API.

## ¿Cuánto cuesta usar n8n?

Depende de la opción. En la nube pagas una suscripción según las ejecuciones mensuales, y cada ejecución es una pasada completa del flujo. Autoalojado no hay licencia en la edición Community, y el coste pasa a ser el servidor y las horas de mantenimiento. Los planes están en la [página oficial de precios](https://n8n.io/pricing/). Si quieres que alguien lo monte por ti, tienes mis [precios de automatización de procesos](/precios).

## ¿Cómo lo usaría una pyme?

**Ejemplo ilustrativo.** Un despacho de abogados recibe consultas por un formulario web. Con Webhook, cada consulta llega a n8n, que la guarda en una hoja, la clasifica por materia con un Switch y avisa a la persona indicada por correo. Si no se ha respondido a final de día, un segundo flujo programado manda un recordatorio. Como trata datos de clientes, el despacho decide autoalojarlo en un servidor que controla.

## ¿Por dónde sigo?

Dos guías te servirán para ver n8n aplicado a algo concreto: [cómo automatizar facturas paso a paso](/blog/automatizar-facturas-con-n8n) y [cómo montar reportes automáticos](/blog/reportes-automaticos-para-agencias-de-marketing). Si prefieres empezar por tu sector, en la página de [automatización de procesos en Barcelona](/automatizar) los tienes ordenados.

Si prefieres que lo monte yo, [cuéntame tu caso en una llamada gratuita](/#contacto).`,
  },
];

export function getAllPublishedPosts(): BlogPost[] {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return blogPosts
    .filter((post) => new Date(post.publishDate) <= today)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

export function getFooterPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.footerFeatured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(_currentSlug: string, internalLinks: string[]): BlogPost[] {
  return internalLinks
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
