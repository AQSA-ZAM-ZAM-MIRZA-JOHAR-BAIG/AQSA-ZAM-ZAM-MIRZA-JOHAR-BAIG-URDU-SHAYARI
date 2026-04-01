import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Urdu Shayari | AQSA ZAM ZAM MIRZA JOHAR BAIG — Classic & Original Poetry',
  description:
    'Curated Urdu Shayari collection by AQSA ZAM ZAM MIRZA JOHAR BAIG — Software Developer and Urdu poet. Explore profound ghazals and couplets on love, life, and the human spirit in Urdu script, Devanagari (Hindi), and English translation.',
  alternates: { canonical: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/urdu-shayari' },
}

const shayariList = [
  {
    id: 'ghalib-1',
    poet: 'Mirza Ghalib',
    category: 'Love',
    urdu: 'ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے\nبہت نکلے مرے ارمان لیکن پھر بھی کم نکلے',
    hindi: 'हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले',
    english: 'Thousands of desires, each worth dying for...\nMany of them I have realized... yet I yearn for more.',
  },
  {
    id: 'ghalib-2',
    poet: 'Mirza Ghalib',
    category: 'Sad',
    urdu: 'دلِ ناداں تجھے ہوا کیا ہے\nآخر اس درد کی دوا کیا ہے',
    hindi: 'दिल-ए-नादां तुझे हुआ क्या है\nआख़िर इस दर्द की दवा क्या है',
    english: 'O naive heart, what has happened to you?\nAfter all, what is the cure for this pain?',
  },
  {
    id: 'iqbal-1',
    poet: 'Allama Iqbal',
    category: 'Motivational',
    urdu: 'خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے\nخدا بندے سے خود پوچھے بتا تیری رضا کیا ہے',
    hindi: 'ख़ुदी को कर बुलंद इतना कि हर तक़दीर से पहले\nख़ुदा बंदे से ख़ुद पूछे बता तेरी रज़ा क्या है',
    english: "Elevate yourself so high that before every decree,\nGod Himself asks you: 'Tell me, what is your desire?'",
  },
  {
    id: 'iqbal-2',
    poet: 'Allama Iqbal',
    category: 'Life',
    urdu: 'ستاروں سے آگے جہاں اور بھی ہیں\nابھی عشق کے امتحاں اور بھی ہیں',
    hindi: 'सितारों से आगे जहाँ और भी हैं\nअभी इश्क़ के इम्तिहाँ और भी हैं',
    english: 'There are other worlds beyond the stars;\nThere are more trials of love yet to come.',
  },
  {
    id: 'jaun-1',
    poet: 'Jaun Elia',
    category: 'Love',
    urdu: 'علاجِ دردِ دل تم سے مسیحا ہو نہیں سکتا\nتم اچھے ہو تو پھر تم سے یہ اچھا ہو نہیں سکتا',
    hindi: 'इलाज-ए-दर्द-ए-दिल तुम से मसीहा हो नहीं सकता\nतुम अच्छे हो तो फिर तुम से ये अच्छा हो नहीं सकता',
    english: 'You cannot be the messiah to cure my heartache,\nYou are good, but this goodness cannot come from you.',
  },
  {
    id: 'jaun-2',
    poet: 'Jaun Elia',
    category: 'Sad',
    urdu: 'جو گزاری نہ جا سکی ہم سے\nہم نے وہ زندگی گزاری ہے',
    hindi: 'जो गुज़ारी न जा सकी हमसे\nहमने वो ज़िंदगी गुज़ारी है',
    english: 'That which could not be lived by us,\nThat is the life we have lived.',
  },
  {
    id: 'faraz-1',
    poet: 'Ahmed Faraz',
    category: 'Love',
    urdu: 'سنا ہے لوگ اسے آنکھ بھر کے دیکھتے ہیں\nسو اس کے شہر میں کچھ دن ٹھہر کے دیکھتے ہیں',
    hindi: 'सुना है लोग उसे आँख भर के देखते हैं\nसो उसके शहर में कुछ दिन ठहर के देखते हैं',
    english: "I heard people gaze at her to their heart's content...\nSo let me stay in her city for a few days and see.",
  },
  {
    id: 'faraz-2',
    poet: 'Ahmed Faraz',
    category: 'Sad',
    urdu: 'اس نے خاموشی سے سب کچھ کہہ دیا\nمیں نے بھی سن لیا جو کچھ نہ تھا',
    hindi: 'उसने ख़ामोशी से सब कुछ कह दिया\nमैंने भी सुन लिया जो कुछ न था',
    english: 'She said everything in her silence,\nAnd I heard even that which was not said.',
  },
  {
    id: 'faiz-1',
    poet: 'Faiz Ahmed Faiz',
    category: 'Love',
    urdu: 'مجھ سے پہلی سی محبت مری محبوب نہ مانگ\nمیں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات',
    hindi: 'मुझ से पहली सी मुहब्बत मेरी महबूब न मांग\nमैंने समझा था कि तू है तो दरख़्शां है हयात',
    english: 'Do not ask of me my past love, my beloved.\nI had thought that if you are there, life is radiant.',
  },
  {
    id: 'ghalib-3',
    poet: 'Mirza Ghalib',
    category: 'Life',
    urdu: 'بازیچہ اطفال ہے دنیا مرے آگے\nہوتا ہے شب و روز تماشا مرے آگے',
    hindi: 'बाज़ीचा-ए-अतफ़ाल है दुनिया मेरे आगे\nहोता है शब-ओ-रोज़ तमाशा मेरे आगे',
    english: 'The world is a children\'s playground before me,\nNight and day, a spectacle unfolds before me.',
  },
]

const categories = ['All', 'Love', 'Life', 'Sad', 'Motivational']

const categoryColors: Record<string, string> = {
  Love: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  Life: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Sad: 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300',
  Motivational: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
}

const faqs = [
  {
    q: 'Who curates the Urdu Shayari on this website?',
    a: 'All Urdu Shayari on this website is curated by AQSA ZAM ZAM MIRZA JOHAR BAIG — a Software Developer and AI-ML student who is also a passionate lover of classical Urdu literature.',
  },
  {
    q: 'What types of Urdu poetry are featured here?',
    a: 'The collection features Ghazals (غزل) and Sher (شعر — couplets) by classical masters including Mirza Ghalib, Allama Iqbal, Faiz Ahmed Faiz, Ahmed Faraz, and Jaun Elia. All shayari is presented in three scripts: Urdu (نستعلیق), Devanagari (Hindi), and English translation.',
  },
  {
    q: 'Does AQSA ZAM ZAM MIRZA JOHAR BAIG write original Urdu poetry?',
    a: 'Yes. AQSA ZAM ZAM MIRZA JOHAR BAIG is herself a Urdu Shayari poet who finds inspiration in the intersection of technology and literature. Original compositions will be added to this collection.',
  },
]

export default function UrduShayari() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Urdu Shayari', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/urdu-shayari' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="w-full">
        {/* Header */}
        <section
          className="py-20 px-4 text-white text-center"
          style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 100%)' }}
        >
          <nav aria-label="Breadcrumb" className="text-xs text-blue-300 mb-6">
            <ol className="flex items-center justify-center gap-2 list-none">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-amber-400" aria-current="page">Urdu Shayari</li>
            </ol>
          </nav>
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">شاعری / Shayari</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Urdu Shayari Collection
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-4">
            A curated treasury of classical Urdu poetry — presented by{' '}
            <strong className="text-white">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong>, Software Developer and Urdu Shayari poet.
          </p>
          {/* Urdu tagline */}
          <p
            className="text-2xl text-amber-300 mt-4"
            dir="rtl"
            lang="ur"
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: '2' }}
          >
            شعر و ادب کی دنیا میں خوش آمدید
          </p>
          <p className="text-xs text-slate-400 mt-1 italic">
            "Welcome to the world of poetry and literature"
          </p>
        </section>

        {/* Category Filter (display only) */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-40">
          <div className="max-w-5xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border ${
                  cat === 'All'
                    ? 'bg-blue-700 text-white border-blue-700'
                    : 'bg-transparent text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-600 hover:border-blue-500 hover:text-blue-700 dark:hover:text-amber-400'
                }`}
                aria-label={`Filter by ${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-16">
          {/* Intro */}
          <div className="text-center mb-12">
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              This collection presents <strong className="text-slate-800 dark:text-slate-200">10 timeless sher and ghazal couplets</strong> by the greatest masters of Urdu poetry — Ghalib, Iqbal, Faiz, Faraz, and Jaun Elia — each rendered in <span className="font-semibold">Urdu script</span>, <span className="font-semibold">Devanagari</span>, and <span className="font-semibold">English translation</span>, curated by AQSA ZAM ZAM MIRZA JOHAR BAIG.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shayariList.map((shayari) => (
              <article
                key={shayari.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm card-hover"
                lang="mixed"
                aria-labelledby={`shayari-${shayari.id}-poet`}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div>
                    <p id={`shayari-${shayari.id}-poet`} className="font-bold text-slate-900 dark:text-white text-sm">
                      {shayari.poet}
                    </p>
                    <p className="text-xs text-slate-400">Curated by AQSA ZAM ZAM MIRZA JOHAR BAIG</p>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[shayari.category]}`}>
                    {shayari.category}
                  </span>
                </div>

                <div className="p-6 space-y-5">
                  {/* Urdu Script */}
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                      اردو / Urdu
                    </p>
                    <p
                      className="urdu-text text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-800 rounded-xl p-4"
                      dir="rtl"
                      lang="ur"
                    >
                      {shayari.urdu}
                    </p>
                  </div>

                  {/* Devanagari */}
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                    <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                      देवनागरी / Hindi
                    </p>
                    <p className="text-base leading-loose text-slate-700 dark:text-slate-300" lang="hi">
                      {shayari.hindi}
                    </p>
                  </div>

                  {/* English */}
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                    <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                      English Translation
                    </p>
                    <p className="text-sm italic text-slate-500 dark:text-slate-400 leading-relaxed">
                      "{shayari.english}"
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="mt-20" aria-labelledby="shayari-faq">
            <h2 id="shayari-faq" className="text-3xl font-black text-slate-900 dark:text-white mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              About This Shayari Collection
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">{faq.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="text-center text-sm text-slate-400 mt-12">
            Curated by <strong className="text-slate-600 dark:text-slate-300">AQSA ZAM ZAM MIRZA JOHAR BAIG</strong>{' '}
            — Software Developer, AI/ML Student · Last updated: March 2026
          </p>
        </div>
      </div>
    </>
  )
}
