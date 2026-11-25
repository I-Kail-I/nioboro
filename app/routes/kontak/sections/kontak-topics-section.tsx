import { ArrowUpRight } from 'lucide-react';

const topics = [
  {
    title: 'Tentang ruang',
    description: 'Ketersediaan, kunjungan, atau pertanyaan sebelum menginap di Nioboro.',
    subject: 'Tentang ruang Nioboro',
  },
  {
    title: 'Proyek dan kerja sama',
    description:
      'Desain arsitektural, interior, furniture, atau kolaborasi yang ingin Anda ajukan.',
    subject: 'Proyek dan kerja sama',
  },
  {
    title: 'Lainnya',
    description: 'Pers, karier, atau hal yang belum masuk dua kategori di atas.',
    subject: 'Pertanyaan lain',
  },
];

const pad = (value: number) => String(value).padStart(2, '0');

export function KontakTopicsSection() {
  return (
    <section className="mx-5 mt-24 sm:mx-10 md:mt-40" aria-labelledby="kontak-topics-title">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <span className="font-sans text-[clamp(0.875rem,1.2vw,1.125rem)] font-semibold">
            [01]
          </span>
          <h2
            id="kontak-topics-title"
            className="font-heading mt-5 max-w-md text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-semibold tracking-tight text-balance"
          >
            Apa yang ingin Anda bicarakan?
          </h2>
          <p className="text-muted-foreground mt-6 max-w-sm font-sans text-base leading-relaxed text-pretty">
            Pilih topik agar email Anda langsung sampai ke percakapan yang tepat. Subjek email akan
            terisi otomatis.
          </p>
        </div>

        <ul className="border-border border-t lg:col-span-7 lg:col-start-6">
          {topics.map((topic, index) => (
            <li key={topic.title} className="border-border border-b">
              <a
                href={`mailto:hello@nioboro.com?subject=${encodeURIComponent(topic.subject)}`}
                className="group flex items-start justify-between gap-6 py-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:py-8"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-muted-foreground font-sans text-xs font-semibold tabular-nums">
                    ({pad(index + 1)})
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                      {topic.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 max-w-md font-sans text-sm leading-relaxed text-pretty">
                      {topic.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-foreground mt-1 size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
