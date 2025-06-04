import { useState, useEffect } from 'react'

export default function App() {
  const [timeLeft, setTimeLeft] = useState(8 * 3600 + 11 * 60 + 33) // 8:11:33 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
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
    <div className="bg-black text-white font-sans leading-relaxed">
      <header className="bg-red-900 text-center p-4 font-bold text-lg uppercase tracking-widest">
        UPOZORENJE 18+: OVAJ MATERIJAL SADRŽI BRUTALNO ISKRENE, EKSPLICITNE I TERENSKI DOKAZANE STRATEGIJE ZAVOĐENJA I MUŠKE TRANSFORMACIJE.
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            DOSTA JE BILO <span className="text-red-600">ŠONJE!</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            POSTANI <span className="text-red-600 font-bold">JEBENA ZVER</span> KOJOJ DEVOJKE NE MOGU DA ODOLE.
          </p>
          <p className="max-w-xl mx-auto text-gray-300">
            Gledaš kako drugi bez problema osvajaju devojke koje ti ne smeš ni da pogledaš? Osećaš se nevidljivo? Frustrirano? Zaboravljen od strane žena i života?
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition rounded-md px-6 py-3 font-semibold text-lg">
            OTKRIJ KOD ZVER SADA!
          </button>
        </section>

        {/* Problem Section */}
        <section className="bg-gray-900 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-red-600">PAKAO 'FINOG MOMKA': ZAŠTO TE DEVOJKE NE ŽELE</h2>
          <p>
            Jesi li se ikada zapitao zašto, uprkos tome što si "fin momak", što si "pažljiv", što im "sve činiš" – uvek završiš kao onaj koji teši uplakanu, a nikada kao onaj koji je jebe do zore?
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Večita Friendzone Karta Koja Te Izjeda...</li>
            <li>Paralizujući Strah od Odbacivanja Koji Te Živog Sahranjuje...</li>
            <li>Nula Samopouzdanja Koje Te Jede Iznutra Kao Rak...</li>
          </ul>
          <p className="mt-4 font-semibold text-red-600">BRUTALNA ISTINA KOJU NIKO DRUGI NEĆE DA TI KAŽE:</p>
          <p>
            Ako nastaviš da ignorišeš ove signale upozorenja, ako nastaviš da radiš iste stvari koje ti donose iste poražavajuće rezultate, ako nastaviš da budeš "fini Šonja" – pripremi se na JOŠ VIŠE samoće, JOŠ VIŠE frustracije, JOŠ VIŠE propuštenih prilika i život koji prolazi pored tebe kao brzi voz.
          </p>
        </section>

        {/* About G. Fatal Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-red-600">UPOZNAJ G. FATAL</h2>
          <p>
            Čoveka Koji Je Prošao TVOJ PAKAO I Izašao Kao JEBENA ZVER. Pre više od 15 godina, ja sam bio TI. Bio sam onaj "fini momak", kulturan, uvek tu da pomogne, onaj kojeg su tapšali po ramenu. Nevidljiv za devojke koje sam želeo svim srcem.
          </p>
          <p>
            Godinama sam krvavo istraživao, čitao stotine knjiga, pohađao seminare, testirao na sebi svaki savet, pravio bolne greške, padao i ustajao... dok nisam, deo po deo, počeo da sklapam slagalicu. Dok nisam PROVALIO KOD.
          </p>
          <p>
            Transformisao sam se. Iz Šonje kojeg niko nije primećivao, postao sam ZVER – muškarac koji prirodno privlači, koji ima izbor, koji živi život po svojim pravilima, koji JEBE kad hoće i koga hoće.
          </p>
        </section>

        {/* Offer Section */}
        <section className="bg-gray-900 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-red-600">KOD ZVER ARSENAL</h2>
          <p>Ovo Nisu Samo Vodiči – Ovo Je Kompletno ORUŽJE Za Tvoju Totalnu Transformaciju Iz Šonje u NEPOBEDIVU ZVER!</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Tajni Kod Opsesije</strong> - Protokol Fatalne Privlačnosti (€297)</li>
            <li><strong>Operacija Fatal 7</strong> - Protokol Ubrzanog Osvajanja (€247)</li>
            <li><strong>Kod Seksualne Zveri</strong> - Protokol Fatalne Dominacije u Krevetu (€197) <span className="text-green-400">BESPLATNO</span></li>
            <li><strong>Kod Don Juan™</strong> - Ritual Buđenja Fatalne Energije (€147) <span className="text-green-400">BESPLATNO</span></li>
            <li><strong>30-Dnevni Borbeni Plan</strong> - Kristalno jasni zadaci za prvih 30 dana (€147) <span className="text-green-400">BESPLATNO</span></li>
          </ul>
          <p className="font-bold text-xl text-red-600">UKUPNA VREDNOST: €959</p>
          <p className="text-lg">TVOJA INVESTICIJA U TOTALNU TRANSFORMACIJU JE SAMO: <span className="font-extrabold">€67</span> (JEDNOKRATNO, BEZ SKRIVENIH TROŠKOVA!)</p>
          <p className="text-red-500 font-semibold">TO JE NEVEROVATNIH 93% POPUSTA! UŠTEDA OD €892!</p>
          <button className="bg-red-600 hover:bg-red-700 transition rounded-md px-6 py-3 font-semibold text-lg">
            POSTANI ZVER ODMAH
          </button>
          <p className="text-center text-sm text-gray-500">Ova ponuda je vremenski ograničena.</p>
          <p className="text-center text-sm text-gray-500">Preostalo mesta: 19</p>
          <p className="text-center text-sm text-gray-500">Vreme do isteka ponude: {formatTime(timeLeft)}</p>
        </section>

        {/* Testimonials Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-red-600 text-center">Šta Kažu Ratnici Koji Su Prošli Kroz Vatru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="bg-gray-900 p-4 rounded-md">
              <p>"Pre KODA ZVER, bio sam praktično nevidljiv za žene. Bukvalno za 7 dana primene samo DELA principa iz 'Operacije Fatal 7', devojka koja mi se sviđala mesecima SAMA mi je prišla u kafiću i tražila broj! Sada imam samopouzdanje da priđem bilo kojoj. Ovo nije samo kurs, ovo je promenilo ceo moj jebeni život!"</p>
              <footer className="mt-2 font-semibold">Marko P. | 28 | Srbija | IT Inženjer</footer>
            </blockquote>
            <blockquote className="bg-gray-900 p-4 rounded-md">
              <p>"'Tajni Kod Opsesije' je otvorio pandorinu kutiju u mojoj glavi. Shvatio sam koliko sam bio slep na signale i dinamiku. Sada žene reaguju na mene na način koji nisam mogao ni da zamislim. Kao da sam dobio supermoći. Brutalno, ali efikasno do bola."</p>
              <footer className="mt-2 font-semibold">Ivan K. | 31 | Hrvatska | Poduzetnik</footer>
            </blockquote>
            <blockquote className="bg-gray-900 p-4 rounded-md">
              <p>"Mislio sam da sam osuđen da zauvek budem onaj tihi, stidljivi lik. KOD ZVER me je naučio kako da svoju introvertnost pretvorim u snagu i misteriju. Bukvalno preko noći, devojke su počele drugačije da reaguju na mene, postavljaju pitanja, traže moju pažnju. Ovo je reprogramiranje uma na najjače."</p>
              <footer className="mt-2 font-semibold">Nikola J. | 25 | Srbija | Student</footer>
            </blockquote>
            <blockquote className="bg-gray-900 p-4 rounded-md">
              <p>"'Kod Seksualne Zveri' je nešto što svaki muškarac MORA da prođe. Mislio sam da znam neke stvari, ali ovo je potpuno drugi nivo. Samopouzdanje u krevetu mi je otišlo u nebesa, a reakcije... pa, recimo samo da su nezaboravne. Hvala G. Fatal!"</p>
              <footer className="mt-2 font-semibold">Stefan M. | 29 | Crna Gora | Pomorac</footer>
            </blockquote>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-900 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-bold text-red-600 text-center">PITANJA KOJA TE MOŽDA JOŠ SVRBE</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <details className="bg-black p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">Da li KOD ZVER stvarno radi za SVE muškarce?</summary>
              <p className="mt-2 text-gray-300">Da, strategije su univerzalne i prilagođene različitim tipovima muškaraca.</p>
            </details>
            <details className="bg-black p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">Koliko vremena realno treba da vidim prve rezultate?</summary>
              <p className="mt-2 text-gray-300">Prosečno 7 dana do prvih vidljivih promena u reakciji žena.</p>
            </details>
            <details className="bg-black p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">Zašto opet ponavljaš da nema garancije povrata novca?</summary>
              <p className="mt-2 text-gray-300">Zato što rezultati zavise od tvoje posvećenosti i primene naučenog.</p>
            </details>
            <details className="bg-black p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">Da li je ovo još jedan od onih "pickup artist" kurseva sa glupim, naučenim frazama?</summary>
              <p className="mt-2 text-gray-300">Ne, ovo su terenski dokazane strategije, ne fraze.</p>
            </details>
            <details className="bg-black p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">Šta ako sam po prirodi introvert ili veoma stidljiv? Da li ovo može da radi za mene?</summary>
              <p className="mt-2 text-gray-300">Da, program je prilagođen i introvertima i stidljivima.</p>
            </details>
            <details className="bg-black p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">Koliko će KOD ZVER paket koštati posle ovog popusta i isteka ponude?</summary>
              <p className="mt-2 text-gray-300">Cena će se vratiti na €959 zauvek.</p>
            </details>
            <details className="bg-black p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">Da li dobijam pristup materijalima odmah posle kupovine?</summary>
              <p className="mt-2 text-gray-300">Da, pristup je instantan i digitalan.</p>
            </details>
            <details className="bg-black p-4 rounded-md">
              <summary className="cursor-pointer font-semibold">Šta ako nemam skoro nikakvog prethodnog iskustva sa ženama? Da li je ovo previše napredno za mene?</summary>
              <p className="mt-2 text-gray-300">Ne, program je dizajniran da radi za apsolutne početnike.</p>
            </details>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8">
          <p>© 2024 KOD ZVER & G. FATAL METHOD™. Sva prava zadržana.</p>
          <p>Zabranjeno kopiranje i distribucija bez dozvole.</p>
        </footer>
      </main>
    </div>
  )
}
