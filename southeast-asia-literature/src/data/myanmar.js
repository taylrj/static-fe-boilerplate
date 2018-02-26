/* eslint max-len: 0 */
import audioPath from '../../static/audio/audio-myanmar.mp3'
import mobileImage from '../../static/image/mobile-myanmar-768x768.jpg'
import tabletImage from '../../static/image/tablet-myanmar-1024x1024.jpg'

const interview = [
  {
    question: 'Q1. 在新加坡工作和在緬甸生活，兩座城市帶給你最大不同的感受是什麼？',
    answer: ['2006 年我到新加坡找工作，仰光和新加坡在資訊和傳播技術的領域完全不同。當時我的國家還是軍政府統治，是一個封閉的社會，有嚴格的法律、規定和條例，完全沒有言論自由的空間，沒有好的網際網路，也非常昂貴。大多數網站被政府禁用，連上 Gmail 和部落格都是違法，也沒有全天供應電力，當你在國內購買電腦後，還必須購買 UPS（不斷電系統），因為常常斷電。因此，我常覺得被隔絕在世界之外。千禧年後，許多人說世界成了地球村，而對獨裁軍事政權下的緬甸來說，它只是一座對世界一無所知的鄉村。當我到新加坡後，世界在我的桌面上一覽無遺，電腦無需被監控而斷線，世界總是在那裡等我探索。但是相較於仰光和緬甸，無論新加坡有多好，我總是希望能回到我的家鄉，我是緬甸人，我愛我的國家。'],
  },
  {
    question: 'Q2. 你曾因遭指控「危害國家安全、穩定及秩序」入獄，這個經歷帶給你寫詩最大的影響是什麼？',
    answer: ['入獄讓我意志變得更堅定。在被監禁時，我有機會發掘自己與人性內在的思想，同時我也得到許多閱讀書本的機會（包括有聲書）。入獄服刑改變的不只有我的創作風格，也改變了我的生活型態和思考模式。'],
  },
  {
    question: 'Q3. 在你的觀察，網路世代在世界觀的養成、參與社運的方法、態度與行動，與前輩們有沒有差異？你會怎麼看待這些同與不同？',
    answer: ['我們活在全球化的世代中是很幸運的，當我們分享觀念或開拓視野時，無論如何困難重重，新科技總是為我們帶來些方法，有形的國界可能將我們阻隔，但我們有機會將科技視為「鑽孔機」，在牆上開一道「窺視孔」，如此一來，我們能透過窺視孔看見外面的世界並學習，瞭解世界和我們的差異，以及我們落後於世界的距離，新科技讓世界變得可預見並相互聯繫，也讓我們的世代更加自由和勇敢。'],
  },
  {
    question: 'Q4. 網路活動常有萬人鍵盤響應卻一人到場的窘境，你參與的網路運動有過類似經驗嗎？',
    answer: [
      [
        '我們需要懂得社群媒體的本質，虛擬世界，網路等。我們還需連結線上和線下的社群，這取決於我們選擇的方法，若我們需要大量的聲量，只需網路社群就好，若我們需要確實的聲量，我們就必須聰明地運用網路社群，若我們需要人們採取行動，只靠網路社群是不夠的，我們需要串聯線上和線下社群，這在我的',
        [
          '「花言蜜語」',
          '2014 年尼樂朋發起「花言蜜語」運動（Panzagar），倡議大眾以花兒一般溫柔的語言溝通，避免衝突與對立，思考網路言論所帶來的後果；該活動鼓勵人們將花束放在嘴邊自拍，Facebook 並順勢推出了「花言蜜語表情包」，分享次數高達數百萬。',
        ],
        '活動中我有許多豐富的操作經驗。',
      ],
    ],
  },
  {
    question: 'Q5. 從政治的門外漢到身在其中並積極參與，你最大的改變是什麼？他們是如何影響你的創作？',
    answer: ['事實上從政並非我想要的生活，是時勢把我創造為政治家，但我想成為一個藝術家，作家。我有很多東西要寫，但我很難有時間寫，我遲早會回歸真實的生活，屆時請歡迎我。'],
  },
]

const audio = {
  id: 'myanmar',
  audioSrc: audioPath,
  translator: ['罕麗姝'],
  title: {
    chinese: '選讀自〈標靶〉',
    origin: '〈ပစ္မွတ္〉',
  },
  letter: {
    chinese: [
      '集中所有殘餘力量吼叫示威的虎嘯聲，在整個山林裡引起了一連串的回聲。這是你最後的嘯聲了。他惦估著且笑了起來。老虎用盡全力跑來，想要撲倒他。他將所有心思集中到他的雙眼。他的雙眼也緊盯著他最後的標的。就在老虎跳起來撲向他的同時，他矮下身來，採取了一個單腿跪地的姿勢，將最後一支箭，射往一閃而過的射擊點。在已經失去生命的老虎身軀，尚未掉到他所跪之地以前，他向旁邊一滾，避了過去。他射出的最後一支箭，穿透了老虎的咽喉，直通到牠的後背。',
    ],
    // origin: [
    //   '',
    // ],
  },
  lang: 'burmese',
}

const author = {
  image: {
    mobile: mobileImage,
    tablet: tabletImage,
    desktop: mobileImage,
  },
  nameChinese: '尼朋樂',
  nameOrigin: 'NAY PHONE LATT',
  country: '緬甸',
  description: '1980 年出生於緬甸仰光，尼朋樂為緬甸當代深具影響力的社會運動者。2008 年遭指控「危害國家安全、穩定及秩序」入獄服刑，並於獄中創作《The City I Dropped Down》文集。2012 年，因緬甸大選及國際特赦組織倡議，尼朋樂成為 651 名重獲自由的政治受難人士之一，出獄後持續投入文字書寫工作，並創辦非營利機構「緬甸資訊及通訊科技發展組織」（MIDO），致力提供偏鄉青年使用科技軟體的能力。',
}

export default {
  author,
  audio,
  interview,
}
