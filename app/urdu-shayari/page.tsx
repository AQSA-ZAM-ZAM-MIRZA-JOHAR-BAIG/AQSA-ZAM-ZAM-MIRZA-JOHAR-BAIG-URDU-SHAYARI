import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Urdu Shayari',
  description: 'Original and classic Urdu Shayari curated by AQSA ZAM ZAM MIRZA JOHAR BAIG. Explore deeply profound themes of love, life, and existence in Urdu and Devanagari.',
}

// Minimal mock data extracted from the existing array
const shayariList = [
  {
    "id": "ghalib-1",
    "poet": "Mirza Ghalib",
    "category": "Love",
    "text": "ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے\nبہت نکلے مرے ارمان لیکن پھر بھی کم نکلے",
    "hindi": "हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले\nबहुत निकले मेरे अरमान लेकिन फिर भी कम निकले",
    "english": "Thousands of desires, each worth dying for...\nMany of them I have realized... yet I yearn for more."
  },
  {
    "id": "ghalib-2",
    "poet": "Mirza Ghalib",
    "category": "Sad",
    "text": "دلِ ناداں تجھے ہوا کیا ہے\nآخر اس درد کی دوا کیا ہے",
    "hindi": "दिल-ए-नादां तुझे हुआ क्या है\nआख़िर इस दर्द की दवा क्या है",
    "english": "O naive heart, what has happened to you?\nAfter all, what is the cure for this pain?"
  },
  {
    "id": "iqbal-1",
    "poet": "Allama Iqbal",
    "category": "Motivational",
    "text": "خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے\nخدا بندے سے خود پوچھے بتا تیری رضا کیا ہے",
    "hindi": "ख़ुदी को कर बुलंद इतना कि हर तक़दीर से पहले\nख़ुदा बंदे से ख़ुद पूछे बता तेरी रज़ा क्या है",
    "english": "Elevate yourself so high that before every decree,\nGod Himself asks you: 'Tell me, what is your desire?'"
  },
  {
    "id": "jaun-1",
    "poet": "Jaun Elia",
    "category": "Love",
    "text": "علاجِ دردِ دل تم سے مسیحا ہو نہیں سکتا\nتم اچھے ہو تو پھر تم سے یہ اچھا ہو نہیں سکتا",
    "hindi": "इलाज-ए-दर्द-ए-दिल तुम से मसीहा हो नहीं सकता\nतुम अच्छे हो तो फिर तुम से ये अच्छा हो नहीं सकता",
    "english": "You cannot be the messiah to cure my heartache,\nYou are good, but this goodness cannot come from you."
  },
  {
    "id": "faraz-1",
    "poet": "Ahmed Faraz",
    "category": "Sad",
    "text": "سنا ہے لوگ اسے آنکھ بھر کے دیکھتے ہیں\nسو اس کے شہر میں کچھ دن ٹھہر کے دیکھتے ہیں",
    "hindi": "सुना है लोग उसे आँख भर के देखते हैं\nसो उसके शहर में कुछ दिन ठहर के देखते हैं",
    "english": "I heard people gaze at her to their heart's content...\nSo let me stay in her city for a few days and see."
  },
  {
    "id": "faiz-1",
    "poet": "Faiz Ahmed Faiz",
    "category": "Love",
    "text": "مجھ سے پہلی سی محبت مری محبوب نہ مانگ\nمیں نے سمجھا تھا کہ تو ہے تو درخشاں ہے حیات",
    "hindi": "मुझ से पहली सी मुहब्बत मेरी महबूब न मांग\nमैंने समझा था कि तू है तो दरख़्शां है हयात",
    "english": "Do not ask of me my past love, my beloved.\nI had thought that if you are there, life is radiant."
  },
  {
    "id": "iqbal-3",
    "poet": "Allama Iqbal",
    "category": "Life",
    "text": "ستاروں سے آگے جہاں اور بھی ہیں\nابھی عشق کے امتحاں اور بھی ہیں",
    "hindi": "सितारों से आगे जहाँ और भी हैं\nअभी इश्क़ के इम्तिहाँ और भी हैं",
    "english": "There are other worlds beyond the stars;\nThere are more trials of love yet to come."
  },
  {
    "id": "jaun-5",
    "poet": "Jaun Elia",
    "category": "Sad",
    "text": "جو گزاری نہ جا سکی ہم سے\nہم نے وہ زندگی گزاری ہے",
    "hindi": "जो गुज़ारी न जा सकी हमसे\nहमने वो ज़िंदगी गुज़ारी है",
    "english": "That which could not be lived by us,\nThat is the life we have lived."
  },
  {
    "id": "faraz-2",
    "poet": "Ahmed Faraz",
    "category": "Love",
    "text": "اس نے خاموشی سے سب کچھ کہہ دیا\nمیں نے بھی سن لیا جو کچھ نہ تھا",
    "hindi": "उसने ख़ामोशी से सब कुछ कह दिया\nमैंने भी सुन लिया जो कुछ न था",
    "english": "She said everything in her silence,\nAnd I heard even that which was not said."
  },
  {
    "id": "ghalib-4",
    "poet": "Mirza Ghalib",
    "category": "Life",
    "text": "بازیچہ اطفال ہے دنیا مرے آگے\nہوتا ہے شب و روز تماشا مرے آگے",
    "hindi": "बाज़ीचा-ए-अतफ़ाल है दुनिया मेरे आगे\nहोता है शब-ओ-रोज़ तमाशा मेरे आगे",
    "english": "The world is a children's playground before me,\nNight and day, a spectacle unfolds before me."
  }
];

export default function UrduShayari() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Urdu Shayari</h1>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
        A curated collection of profound couplets and ghazals. Enjoy the elegance of our literary heritage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {shayariList.map((shayari) => (
          <div key={shayari.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 p-3">
              <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                {shayari.category}
              </span>
            </div>

            <p className="text-sm font-semibold text-gray-400 mb-6">{shayari.poet}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-500 mb-2">Urdu (اردو)</h3>
              <p className="text-2xl text-right leading-loose font-serif text-gray-900 dark:text-gray-100" dir="rtl" style={{ fontFamily: "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', serif" }}>
                {shayari.text}
              </p>
            </div>

            <div className="mb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
              <h3 className="text-sm font-bold text-gray-500 mb-2">Hindi (हिन्दी)</h3>
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                {shayari.hindi}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
              <h3 className="text-sm font-bold text-gray-500 mb-2">English Translation</h3>
              <p className="text-md italic text-gray-600 dark:text-gray-400">
                "{shayari.english}"
              </p>
            </div>

            {/* Mock Audio Player */}
            <div className="mt-6 flex items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-blue-600 focus:outline-none">
                ▶
              </button>
              <div className="ml-3 flex-1 h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-primary" />
              </div>
              <span className="ml-3 text-xs text-gray-500 dark:text-gray-400">0:00 / 0:30</span>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}
