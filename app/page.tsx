import Image from "next/image";
import { profile } from "./data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anton Zulkarnain Sianipar",
  honorificPrefix: "Dr.",
  honorificSuffix: "M.Pd",
  jobTitle: "Dosen, Peneliti",
  email: `mailto:${profile.email}`,
  url: "https://antonzulkarnainsianipar.my.id",
  image: "https://antonzulkarnainsianipar.my.id/anton.png",
  sameAs: profile.socials.map((s) => s.href),
  alumniOf: ["Universitas Negeri Jakarta", "Universitas Negeri Medan"],
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  const stats = [
    { value: "Doktor", label: "Teknologi Pendidikan" },
    { value: profile.books.length, label: "Buku" },
    { value: profile.grants.length, label: "Hibah Penelitian" },
    { value: profile.organizations.length, label: "Organisasi" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="hero">
        <div className="container hero-inner">
          <div className="photo-wrap">
            <Image
              src={profile.photo}
              alt="Foto Dr. Anton Zulkarnain Sianipar"
              width={220}
              height={342}
              priority
              className="photo"
            />
          </div>
          <div className="hero-text">
            <p className="eyebrow">{profile.roles.join(" · ")}</p>
            <h1 className="name">{profile.name}</h1>
            <p className="lead">
              Akademisi di bidang Teknologi Pendidikan dan Pendidikan Matematika, aktif dalam penelitian,
              penulisan buku, dan publikasi ilmiah.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              {profile.socials.map((s) => (
                <a key={s.label} className="btn btn-ghost" href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <main className="container main">
        <Section id="pendidikan" title="Pendidikan">
          <ol className="timeline">
            {profile.education.map((e) => (
              <li key={e.level}>
                <span className="badge">{e.level}</span>
                <div>
                  <h3>{e.major}</h3>
                  <p className="muted">
                    {e.school}, {e.city}
                  </p>
                </div>
                <span className="year">{e.year}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="hibah" title="Hibah Penelitian">
          <ul className="list">
            {profile.grants.map((g) => (
              <li key={`${g.title}-${g.year}`}>
                <div>
                  <h3>{g.title}</h3>
                  <p className="muted">{g.role}</p>
                </div>
                <span className="year">{g.year}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="buku" title="Karya Buku">
          <ol className="books">
            {profile.books.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ol>
        </Section>

        <Section id="pelatihan" title="Pelatihan & Sertifikasi">
          <ul className="checks">
            {profile.trainings.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>

        <Section id="organisasi" title="Organisasi">
          <ul className="chips">
            {profile.organizations.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Dr. Anton Zulkarnain Sianipar, M.Pd</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </footer>
    </>
  );
}
