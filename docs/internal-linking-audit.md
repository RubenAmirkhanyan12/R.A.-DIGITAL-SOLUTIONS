# Internal Linking Audit — RASTECH Blog Cluster

## Estado Antes De Esta Auditoría

| Post | internalLinks array | Links en content | Diagnóstico |
|---|---|---|---|
| automatizacion-procesos-barcelona | 1 slug | 0 links | Isla total |
| 5-procesos-manuales-destructivos-barcelona | 2 slugs | 1 link (solo footer) | Semi-aislado |
| cuanto-cuesta-automatizar-barcelona | 2 slugs | 1 link (solo footer) | Semi-aislado |
| automatizacion-facturacion-40h-4h | 3 slugs | 1 link (solo footer) | Semi-aislado |
| n8n-vs-make-vs-zapier-barcelona | 3 slugs | 1 link (solo footer) | Semi-aislado |
| errores-automatizar-empresa-barcelona | 3 slugs | 1 link (solo footer) | Semi-aislado |

**Total links en contenido antes:** 5 (todos footer, ninguno contextual)

---

## Estado Después De Esta Auditoría

| Post | internalLinks array | Links contextuales en content | Cobertura |
|---|---|---|---|
| automatizacion-procesos-barcelona | 5 slugs | 5 links | ✅ Conectado a todos |
| 5-procesos-manuales-destructivos-barcelona | 5 slugs | 3 links + 1 footer | ✅ Conectado |
| cuanto-cuesta-automatizar-barcelona | 4 slugs | 3 links + 1 footer | ✅ Conectado |
| automatizacion-facturacion-40h-4h | 5 slugs | 3 links + 1 footer | ✅ Conectado |
| n8n-vs-make-vs-zapier-barcelona | 5 slugs | 3 links + 1 footer | ✅ Conectado |
| errores-automatizar-empresa-barcelona | 5 slugs | 4 links + 1 footer | ✅ Conectado |

**Total links contextuales añadidos:** 21

---

## Mapa De Internal Linking (Red Completa)

```
POST 1: automatizacion-procesos-barcelona
  → POST 2: "5 procesos manuales que destrozan la productividad"
  → POST 3: "guía de precios reales de automatización en Barcelona"
  → POST 4: "asesoría fiscal de Barcelona: de 40h/mes a 4h/mes"
  → POST 5: "comparativa completa n8n vs Make vs Zapier"
  → POST 6: "7 errores comunes al automatizar y cómo evitarlos"

POST 2: 5-procesos-manuales-destructivos-barcelona
  → POST 1: "guía de automatización de procesos en Barcelona"
  → POST 3: "cuánto cuesta implementarlo" (footer)
  → POST 4: "asesoría fiscal que pasó de 40h a 4h al mes"
  → POST 5: "comparativa n8n vs Make vs Zapier"

POST 3: cuanto-cuesta-automatizar-barcelona
  → POST 1: "guía completa de automatización de procesos en Barcelona"
  → POST 2: "qué procesos conviene automatizar primero" (footer)
  → POST 4: "asesoría fiscal de 40h/mes a 4h/mes, ROI 1.850%"
  → POST 5: "comparativa n8n vs Make vs Zapier"

POST 4: automatizacion-facturacion-40h-4h
  → POST 1: "guía de automatización de procesos en Barcelona"
  → POST 3: "cuánto cuesta automatizar tu empresa" (footer)
  → POST 5: "comparativa n8n vs Make vs Zapier"
  → POST 6: "7 errores comunes al automatizar"

POST 5: n8n-vs-make-vs-zapier-barcelona
  → POST 1: "guía de automatización de procesos para empresas Barcelona"
  → POST 3: "guía de precios de automatización en Barcelona"
  → POST 4: "n8n en acción: automatización facturación" (footer)
  → POST 6: "7 errores que arruinan una automatización"

POST 6: errores-automatizar-empresa-barcelona
  → POST 1: "guía completa de automatización de procesos en Barcelona"
  → POST 2: "5 procesos manuales que más horas consumen"
  → POST 3: "guía de precios reales de automatización Barcelona"
  → POST 4: "caso real de automatización de facturación"
  → POST 5: "n8n vs Make vs Zapier" (footer)
```

---

## Anchor Text Strategy

| Destino | Anchor texts usados |
|---|---|
| /automatizacion-procesos-barcelona | "guía de automatización de procesos en Barcelona", "guía completa...", "contexto completo" |
| /5-procesos-manuales-destructivos-barcelona | "5 procesos manuales que destrozan la productividad", "los 5 procesos manuales que más horas consumen" |
| /cuanto-cuesta-automatizar-barcelona | "guía de precios reales de automatización en Barcelona", "cuánto cuesta exactamente" |
| /automatizacion-facturacion-40h-4h | "asesoría fiscal de 40h/mes a 4h/mes", "caso real documentado", "ROI 1.850%" |
| /n8n-vs-make-vs-zapier-barcelona | "comparativa completa n8n vs Make vs Zapier", "cuál herramienta elegir" |
| /errores-automatizar-empresa-barcelona | "7 errores comunes al automatizar", "7 errores que arruinan una automatización" |

**Principios seguidos:**
- Anchor text descriptivo con keyword (nunca "aquí" o "click aquí")
- Máximo 6-7 palabras por anchor
- Varía entre posts para evitar over-optimización
- Contexto natural: el link surge del párrafo, no se fuerza

---

## Timeline Esperado

| Semana | Acción | Resultado esperado |
|---|---|---|
| 1-2 | Internal links implementados (esta auditoría) | Google empieza a rastrear conexiones |
| 2-4 | Google re-indexa posts con nuevos links | PageRank interno empieza a fluir |
| 4-8 | Outreach inicial (n8n, Make, agencias Barcelona) | 1-3 backlinks externos |
| 8-12 | Posiciones "automatización barcelona" mejoran | Top 20 → Top 10 |

---

## Outreach Priority

### Tier 1 — Máxima relevancia (contactar primero)
1. n8n.io/blog — Herramienta usada en todos los posts
2. make.com/blog — Herramienta usada en comparativa
3. Agencias automatización Barcelona (Google: "agencia automatización barcelona")

### Tier 2 — Relevancia alta
4. Medium publicaciones SaaS en español
5. LinkedIn artículos de n8n/Make influencers
6. Reddit r/webdev (post de caso real, no spam)

### Tier 3 — Relevancia media
7. Blogs tech Barcelona (busca "blog tecnología barcelona")
8. Reddit r/barcelona (post de ahorro tiempo para pymes)

---

## Success Metrics (4 semanas)

- [ ] 21 links contextuales implementados ✅ (hecho)
- [ ] 6 internalLinks arrays actualizados ✅ (hecho)
- [ ] Google Search Console: 6 posts indexados
- [ ] 3+ backlinks externos conseguidos
- [ ] Posición "automatización procesos barcelona" < 30
- [ ] Posición "n8n barcelona" < 20
- [ ] Posición "cuanto cuesta automatizar barcelona" < 15
