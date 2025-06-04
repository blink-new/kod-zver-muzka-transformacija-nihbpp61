import { useState, useEffect } from 'react'

const faqItems = [
  {
    question: 'Da li KOD ZVER stvarno radi za SVE muškarce?',
    answer: 'Da, strategije su univerzalne i prilagođene različitim tipovima muškaraca.',
  },
  {
    question: 'Koliko vremena realno treba da vidim prve rezultate?',
    answer: 'Prosečno 7 dana do prvih vidljivih promena u reakciji žena.',
  },
  {
    question: 'Zašto opet ponavljaš da nema garancije povrata novca?',
    answer: 'Zato što rezultati zavise od tvoje posvećenosti i primene naučenog.',
  },
  {
    question: 'Da li je ovo još jedan od onih "pickup artist" kurseva sa glupim, naučenim frazama?',
    answer: 'Ne, ovo su terenski dokazane strategije, ne fraze.',
  },
  {
    question: 'Šta ako sam po prirodi introvert ili veoma stidljiv? Da li ovo može da radi za mene?',
    answer: 'Da, program je prilagođen i introvertima i stidljivima.',
  },
  {
    question: 'Koliko će KOD ZVER paket koštati posle ovog popusta i isteka ponude?',
    answer: 'Cena će se vratiti na €959 zauvek.',
  },
  {
    question: 'Da li dobijam pristup materijalima odmah posle kupovine?',
    answer: 'Da, pristup je instantan i digitalan.',
  },
  {
    question: 'Šta ako nemam skoro nikakvog prethodnog iskustva sa ženama? Da li je ovo previše napredno za mene?',
    answer: 'Ne, program je dizajniran da radi za apsolutne početnike.',
  },
]

export default function App() {
  const [timeLeft2, setTimeLeft2] = useState(8 * 3600 + 9 * 60 + 44) // 8:09:44 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft2((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-[#0a0a0a] text-white font-sans">
      {/* Header */}
      <header className="bg-red-900 text-center py-2 text-xs font-bold uppercase tracking-widest">
        UPOZORENJE 18+: OVAJ MATERIJAL SADRŽI BRUTALNO ISKRENE, EKSPLICITNE I TERENSKI DOKAZANE STRATEGIJE ZAVOĐENJA I MUŠKE TRANSFORMACIJE. AKO SE LAKO VREĐAŠ ILI TRAŽIŠ BAJKE – ODJEBI ODAVDE ODMAH. OVO JE ZA BUDUĆE ZVERI.
      </header>

      {/* Main content wrapper */}
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight">
            DOSTA JE BILO <span className="text-red-600">ŠONJE!</span>
          </h1>
          <p className="text-xl font-semibold">
            POSTANI <span className="text-red-600">JEBENA ZVER</span> KOJOJ DEVOJKE NE MOGU DA ODOLE.
          </p>
          <p className="max-w-xl mx-auto text-gray-300">
            Gledaš kako drugi bez problema osvajaju devojke koje ti ne smeš ni da pogledaš? Osećaš se nevidljivo? Frustrirano? Zaboravljen od strane žena i života?
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition rounded-md px-8 py-3 font-semibold text-lg">
            OTKRIJ KOD ZVER SADA!
          </button>
        </section>

        {/* Problem Section */}
        <section className="bg-[#1a1a1a] rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-red-600">PAKAO 'FINOG MOMKA': ZAŠTO TE DEVOJKE NE ŽELE</h2>
          <p>
            Jesi li se ikada zapitao zašto, uprkos tome što si "fin momak", što si "pažljiv", što im "sve činiš" – uvek završiš kao onaj koji teši uplakanu, a nikada kao onaj koji je jebe do zore?
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Večita Friendzone Karta Koja Te Izjeda...</li>
            <li>Paralizujući Strah od Odbacivanja Koji Te Živog Sahranjuje...</li>
            <li>Nula Samopouzdanja Koje Te Jede Iznutra Kao Rak...</li>
          </ul>
          <p className="mt-4 font-semibold text-red-600">BRUTALNA ISTINA KOJU NIKO DRUGI NEĆE DA TI KAŽE:</p>
          <p>
            Ako nastaviš da ignorišeš ove signale upozorenja, ako nastaviš da radiš iste stvari koje ti donose iste poražavajuće rezultate, ako nastaviš da budeš "fini Šonja" – pripremi se na JOŠ VIŠE samoće, JOŠ VIŠE frustracije, JOŠ VIŠE propuštenih prilika i život koji prolazi pored tebe kao brzi voz.
          </p>
        </section>

        {/* Image Section */}
        <section className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Brown sand field during daytime - symbol of loneliness"
            className="rounded-lg max-w-full h-auto"
          />
        </section>

        {/* About G. Fatal Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-red-600">UPOZNAJ G. FATAL - Čoveka Koji Je Prošao TVOJ PAKAO I Izašao Kao JEBENA ZVER</h2>
          <p>
            Pre više od 15 godina, ja sam bio TI. Bio sam onaj "fini momak", kulturan, uvek tu da pomogne, onaj kojeg su tapšali po ramenu. Nevidljiv za devojke koje sam želeo svim srcem.
          </p>
          <p>
            Godinama sam krvavo istraživao, čitao stotine knjiga, pohađao seminare, testirao na sebi svaki savet, pravio bolne greške, padao i ustajao... dok nisam, deo po deo, počeo da sklapam slagalicu. Dok nisam PROVALIO KOD.
          </p>
          <p>
            Transformisao sam se. Iz Šonje kojeg niko nije primećivao, postao sam ZVER – muškarac koji prirodno privlači, koji ima izbor, koji živi život po svojim pravilima, koji JEBE kad hoće i koga hoće.
          </p>
        </section>

        {/* Testimonials Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-red-600 text-center">Šta Kažu Ratnici Koji Su Prošli Kroz Vatru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="bg-[#1a1a1a] p-4 rounded-md">
              <p>"Pre KODA ZVER, bio sam praktično nevidljiv za žene. Bukvalno za 7 dana primene samo DELA principa iz 'Operacije Fatal 7', devojka koja mi se sviđala mesecima SAMA mi je prišla u kafiću i tražila broj! Sada imam samopouzdanje da priđem bilo kojoj. Ovo nije samo kurs, ovo je promenilo ceo moj jebeni život!"</p>
              <footer className="mt-2 font-semibold">Marko P. | 28 | Srbija | IT Inženjer</footer>
            </blockquote>
            <blockquote className="bg-[#1a1a1a] p-4 rounded-md">
              <p>"'Tajni Kod Opsesije' je otvorio pandorinu kutiju u mojoj glavi. Shvatio sam koliko sam bio slep na signale i dinamiku. Sada žene reaguju na mene na način koji nisam mogao ni da zamislim. Kao da sam dobio supermoći. Brutalno, ali efikasno do bola."</p>
              <footer className="mt-2 font-semibold">Ivan K. | 31 | Hrvatska | Poduzetnik</footer>
            </blockquote>
            <blockquote className="bg-[#1a1a1a] p-4 rounded-md">
              <p>"Mislio sam da sam osuđen da zauvek budem onaj tihi, stidljivi lik. KOD ZVER me je naučio kako da svoju introvertnost pretvorim u snagu i misteriju. Bukvalno preko noći, devojke su počele drugačije da reaguju na mene, postavljaju pitanja, traže moju pažnju. Ovo je reprogramiranje uma na najjače."</p>
              <footer className="mt-2 font-semibold">Nikola J. | 25 | Srbija | Student</footer>
            </blockquote>
            <blockquote className="bg-[#1a1a1a] p-4 rounded-md">
              <p>"'Kod Seksualne Zveri' je nešto što svaki muškarac MORA da prođe. Mislio sam da znam neke stvari, ali ovo je potpuno drugi nivo. Samopouzdanje u krevetu mi je otišlo u nebesa, a reakcije... pa, recimo samo da su nezaboravne. Hvala G. Fatal!"</p>
              <footer className="mt-2 font-semibold">Stefan M. | 29 | Crna Gora | Pomorac</footer>
            </blockquote>
          </div>
        </section>

        {/* Offer Section */}
        <section className="bg-[#1a1a1a] rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-red-600">KOD ZVER ARSENAL</h2>
          <p>Ovo Nisu Samo Vodiči – Ovo Je Kompletno ORUŽJE Za Tvoju Totalnu Transformaciju Iz Šonje u NEPOBEDIVU ZVER!</p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li><strong>Tajni Kod Opsesije</strong> - Protokol Fatalne Privlačnosti (€297)</li>
            <li><strong>Operacija Fatal 7</strong> - Protokol Ubrzanog Osvajanja (€247)</li>
            <li><strong>Kod Seksualne Zveri</strong> - Protokol Fatalne Dominacije u Krevetu (€197) <span className="text-green-400">BESPLATNO</span></li>
            <li><strong>Kod Don Juan™</strong> - Ritual Buđenja Fatalne Energije (€147) <span className="text-green-400">BESPLATNO</span></li>
            <li><strong>30-Dnevni Borbeni Plan</strong> - Kristalno jasni zadaci za prvih 30 dana (€147) <span className="text-green-400">BESPLATNO</span></li>
          </ul>
          <p className="font-bold text-xl text-red-600">UKUPNA VREDNOST: €959</p>
          <p className="text-lg">TVOJA INVESTICIJA U TOTALNU TRANSFORMACIJU JE SAMO: <span className="font-extrabold">€67</span> (JEDNOKRATNO, BEZ SKRIVENIH TROŠKOVA!)</p>
          <p className="text-red-500 font-semibold">TO JE NEVEROVATNIH 93% POPUSTA! UŠTEDA OD €892!</p>
          <button className="bg-red-600 hover:bg-red-700 transition rounded-md px-6 py-3 font-semibold text-lg w-full md:w-auto">
            POSTANI ZVER ODMAH
          </button>
          <p className="text-center text-sm text-gray-500">Ova ponuda je vremenski ograničena.</p>
          <p className="text-center text-sm text-gray-500">Preostalo mesta: 19</p>
          <p className="text-center text-sm text-gray-500">Vreme do isteka ponude: {formatTime(timeLeft2)}</p>
        </section>

        {/* Path Section */}
        <section className="bg-[#111111] rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-red-600 text-center">POSLEDNJI POZIV: ŠONJA ILI ZVER?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] p-6 rounded-md">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Put Šonje</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Večita, bolna FRIENDZONE – uvek "divan drug", nikad strastveni ljubavnik koji je jebe do besvesti.</li>
                <li>Beskrajne noći provedene SAM sa svojim mislima, frustracijom, pornićima i osećajem totalnog promašenosti.</li>
                <li>Mučno gledanje kako DRUGI MUŠKARCI uzimaju sve što ti potajno želiš, dok ti skupljaš mrvice.</li>
                <li>Osećaj da ti ŽIVOT PROLAZI PORED TEBE, neproživljen, pun žaljenja za propuštenim prilikama.</li>
                <li>Večni, parališući STRAH OD ODBACIVANJA koji te drži okovanim u mestu.</li>
              </ul>
              <p className="mt-4 italic text-gray-500">"Ma, nije to za mene... Možda sledeći put... Jednog dana ću... Skupo je... Nemam vremena..." – Svaki Šonja, svaki dan svog neproživljenog, prosečnog života.</p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-md">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Put Zveri</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>MAGNETSKA PRIVLAČNOST koja privlači žene kao magnet, bez trunke napora, samo tvojom pojavom.</li>
                <li>IZBOR između više kvalitetnih, lepih, inteligentnih žena koje TEBE žele, koje se bore za tvoju pažnju.</li>
                <li>ALFA DOMINACIJA u svakoj situaciji – ti postavljaš pravila igre, ti vodiš, ti si taj koga poštuju i žele.</li>
                <li>ŽIVOT KAKAV ZASLUŽUJEŠ ispunjen strašću, samopouzdanjem, avanturom, uspehom i ženama koje te obožavaju.</li>
                <li>NEPOKOLEBLJIVO SAMOPOUZDANJE koje razbija sve barijere, otvara sva vrata i čini te nezaustavljivim.</li>
              </ul>
              <p className="mt-4 italic text-green-400">"KOD ZVER je bila najbolja odluka i investicija u mom životu! Ovo je promenilo SVE! Konačno živim, ne preživljavam!" – Budući TI, za samo nekoliko nedelja ili meseci od danas.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-[#1a1a1a] rounded-lg p-8">
          <h2 className="text-3xl font-bold text-red-600 text-center mb-6">PITANJA KOJA TE MOŽDA JOŠ SVRBE</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map(({ question, answer }, i) => (
              <details key={i} className="bg-black p-4 rounded-md" open={i === 0}>
                <summary className="cursor-pointer font-semibold">{question}</summary>
                <p className="mt-2 text-gray-300">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-red-700 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">VREME JE ZA KOD ZVER - ZGRABI SVOJ ARSENAL ODMAH ZA SAMO €67!</h2>
          <p className="mb-6">Ili nastavi da postavljaš pitanja samom sebi, da oklevaš, i ostani tačno tu gde jesi... zarobljen u krugu prosečnosti, samoće i propuštenih snova. Zauvek.</p>
          <button className="bg-black text-red-600 font-extrabold px-8 py-4 rounded-md hover:bg-gray-900 transition">
            POSTANI ZVER ODMAH
          </button>
          <p className="mt-4 text-sm text-gray-300">2024 KOD ZVER & G. FATAL METHOD™. Sva prava zadržana.</p>
        </section>
      </main>
    </div>
  )
}