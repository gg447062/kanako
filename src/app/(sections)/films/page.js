import Link from 'next/link';
export default function Films() {
  return (
    <div>
      <h1>Films</h1>
      <Link href={'#feature'}>Feature</Link>
      <Link href={'#16mm'}>16mm</Link>
      <Link href={'#shorts'}>Shorts</Link>
      <Link href={'#musicvideos'}>Music Videos</Link>
      <section id="feature">
        <h3>Feature</h3>
        <h4>9 WEEKS</h4>
        <p>2000</p>
        <p>1 hour 17 min 10 sec</p>
      </section>

      <section id="16mm">
        <h3>16mm</h3>
        <p>
          LORI GOLDSTON - solo cello SISTERS (An Interpretive Scansion Of The
          Call To Prayer)
        </p>
        <p>LORI GOLDSTON - HER DAUGHTER</p>
        <p>LORI GOLDSTON - Offertorium (For Matthew)</p>
        <p>LORI GOLDSTON - THE DUST OF A THOUSAND BELLS</p>
        <p>LORI GOLDSTON - TSympathy for Fire</p>
      </section>
      <section id="shorts">
        <h3>Shorts</h3>
        <h4>Le Voyeur </h4>
        <p>
          An observational experiment of the Olympia punk underground circa
          2010s, loosely focused on Adam Barns, lead singer of GAG.{' '}
        </p>
        <p>16min 43 secs</p>
        <p>Olympia WA, USA 2020</p>
        <h4>Beneath Us</h4>

        <p>
          “Beneath Us” is a short film that points to specific aspects of white
          ignorance within a mixed race lesbian relationship and exposes certain
          social and family values that allow racism to thrive. Rooted in self
          reflection and taking cues from queer call out culture, the short
          video will use “subconscious subtitles” to describe and expose certain
          mechanisms that enable racism to casually exist in even the most
          intimate relationships.
        </p>
        <p>9 min 34 sec</p>
        <p>Olympia WA, USA 2019</p>
        <h4> Focus Woman</h4>
        <p>
          “Focus Woman” is a celebration of independent art house cinema and the
          tasks of a lone projectionist as well as an exploration of gendered
          workplace harassment through a feminist lens.
        </p>
        <p>Olympia WA, USA 2011</p>
        <h4>August 2014</h4>
        <p>
          A time capsule of when it became undeniable to most Americans that the
          gruesome violence black communities experience at the hands of
          American law enforcement is excessive and disproportionate to those of
          white communities. This short film hopes to mark the mass
          consciousness shift made possible by smart phones allowing millions of
          people to document their lives and share videos of their lived
          experiences on the internet.
        </p>
        <p>7 min 27 sec</p>
        <p>Olympia WA USA 2014</p>
        <h4>Olympia Story </h4>
        <p>
          From the near silence and invisibility of late motherhood a resolute
          woman attempts to help a young stranger who also finds herself at the
          edge of existence.
        </p>
        <p>12 min 22 sec</p>
        <p>Olympia WA USA</p>
        <h4>Two Beds</h4>
        <p>
          A queer doppelganger couple fights the age old battle between
          hetero-normative monogamy and poly-amorous adventure.{' '}
        </p>
        <p>7 min 22 sec</p>
        <p>Olympia WA, USA 2010</p>
        <h4>Mom</h4>
        <p>3min 47 sec USA</p>
      </section>
      <section id="musicvideos">
        <h3>Music Videos</h3>
        <h4>Morgan and the Organ Donors</h4>
        <p>THE PROLETARIAT GIRL</p>
        <p>FREEZE THE TIME</p>
        <h4>Broken Water</h4>
        <p>LOVE & POVERTY</p>
        <p>CHANTAL SEDER</p>
        <p>BEACH</p>
      </section>
    </div>
  );
}
