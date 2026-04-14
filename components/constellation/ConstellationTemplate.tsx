import { ARC_TYPES } from "@/lib/constellation/arc-types"

/**
 * Static, non-editable reference constellation displayed at the top of
 * the dashboard. It shows the method at a glance: noyau + satellites
 * + 3 branches with their register badges, and the 5 arc types.
 */
export function ConstellationTemplate() {
  // 5 satellites in a ring around the noyau — mini visual.
  const count = 5
  const radius = 80
  const cx = 120
  const cy = 120
  const positions = Array.from({ length: count }, (_, i) => {
    const angle = (2 * Math.PI * i) / count - Math.PI / 2
    return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) }
  })

  return (
    <section className="rounded-2xl border border-[#E8D5BF] bg-gradient-to-br from-[#FFF8F0] to-[#FDFBF7] p-6 sm:p-8 shadow-sm">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4834B]">
            Référence
          </p>
          <h2 className="mt-1 font-serif text-2xl text-[#2C2C2C]">
            ✦ Template — Constellation de Cours
          </h2>
          <p className="mt-2 text-sm text-[#6B6457] max-w-2xl italic">
            Une constellation n&apos;est pas un plan. C&apos;est une carte de
            symboles vivants qu&apos;on traverse librement. On ne calcule pas —
            on habite. On dit chaque chose en la vivant.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[auto_1fr] items-center">
        {/* Mini visual constellation */}
        <div className="mx-auto">
          <svg
            viewBox="0 0 240 240"
            className="w-[220px] h-[220px]"
            aria-label="Aperçu d'une constellation"
          >
            {/* Orbit lines */}
            <g stroke="#E8D5BF" strokeDasharray="2 4" strokeWidth="1" fill="none">
              {positions.map((p, i) => (
                <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} />
              ))}
            </g>

            {/* Satellites */}
            {positions.map((p, i) => (
              <g key={i}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="14"
                  fill="#FFF8F0"
                  stroke="#C4834B"
                  strokeWidth="1.5"
                />
                <text
                  x={p.x}
                  y={p.y + 4}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#C4834B"
                  fontFamily="serif"
                >
                  {String.fromCharCode(65 + i)}
                </text>
              </g>
            ))}

            {/* Noyau */}
            <circle
              cx={cx}
              cy={cy}
              r="28"
              fill="#FFF8F0"
              stroke="#C4834B"
              strokeWidth="2.5"
            />
            <text
              x={cx}
              y={cy + 6}
              textAnchor="middle"
              fontSize="22"
              fill="#C4834B"
              fontFamily="serif"
            >
              ✦
            </text>
            <text
              x={cx}
              y={cy + 50}
              textAnchor="middle"
              fontSize="9"
              fill="#7B5EA7"
              fontFamily="sans-serif"
              letterSpacing="1.5"
            >
              MANAS
            </text>
          </svg>
        </div>

        {/* Legend — the 3 branches */}
        <div className="grid gap-3 sm:grid-cols-3">
          <LegendItem
            glyph="❤"
            title="Vécu"
            badge="M"
            badgeClass="bg-[#8B6E4E] text-white"
            cardClass="border-[#8B6E4E]/30 bg-[#F5EDE3]"
            text="Le vécu actuel du conférencier. Manas pur — ça touche."
          />
          <LegendItem
            glyph="✎"
            title="Référence"
            badge="M/K"
            badgeClass="bg-[#5B7A6E] text-white"
            cardClass="border-[#5B7A6E]/30 bg-[#E8F0EB]"
            text="Le texte, l'auteur, la citation qui incarne le symbole."
          />
          <LegendItem
            glyph="⚡"
            title="Friction"
            badge="K>M"
            badgeClass="bg-[#9E4A4A] text-white"
            cardClass="border-[#9E4A4A]/30 bg-[#F5E6E6]"
            text="Le point de tension avec le monde actuel — ce qui réveille."
          />
        </div>
      </div>

      {/* Arc types row */}
      <div className="mt-8 pt-6 border-t border-[#F0E5D4]">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4834B]">
          Arc dramatique — 5 respirations
        </p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {ARC_TYPES.filter((a) => a.type !== "custom").map((arc) => (
            <div
              key={arc.type}
              className="rounded-lg border border-[#E8D5BF] bg-[#FDFBF7] p-3 flex flex-col items-center gap-2 text-center"
            >
              <svg
                viewBox="0 0 60 40"
                className="w-14 h-10 text-[#C4834B]"
                aria-hidden="true"
              >
                {arc.svg}
              </svg>
              <p className="font-serif text-sm text-[#2C2C2C]">{arc.name}</p>
              <p className="text-[10px] text-[#6B6457] leading-snug">
                {arc.manasFlow}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LegendItem({
  glyph,
  title,
  badge,
  badgeClass,
  cardClass,
  text,
}: {
  glyph: string
  title: string
  badge: string
  badgeClass: string
  cardClass: string
  text: string
}) {
  return (
    <div className={`rounded-xl border p-4 ${cardClass}`}>
      <div className="flex items-center justify-between">
        <span className="text-xl">{glyph}</span>
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${badgeClass}`}
        >
          {badge}
        </span>
      </div>
      <p className="mt-2 font-serif text-base text-[#2C2C2C]">{title}</p>
      <p className="mt-1 text-xs text-[#6B6457] leading-relaxed">{text}</p>
    </div>
  )
}
