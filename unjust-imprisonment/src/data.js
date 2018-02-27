import HeaderOne1 from '../static/justice_header1_01.png'
import HeaderOne2 from '../static/justice_header1_02.png'
import HeaderOne3 from '../static/justice_header1_03.png'
import HeaderOneMobile1 from '../static/justice_header1_mobile01.png'
import HeaderOneMobile2 from '../static/justice_header1_mobile02.png'
import HeaderOneMobile3 from '../static/justice_header1_mobile03.png'
import config from '../config.json'
import formImg from '../static/form.png'
import leadingImg from '../static/leading-video-poster.png'
import name1 from '../static/luo-bing-cheng-name.png'
import name2 from '../static/zheng-xing-ze-name.png'
import name3 from '../static/lin-yong-song-name.png'
import name4 from '../static/chi-yueh-chun-name.png'
import name5 from '../static/su-you-chen-name.png'
import name6 from '../static/lin-meng-huang-name.png'
import ogImage from '../static/og-image.png'
import portraitFormImg from '../static/portrait-form.png'
import poster1 from '../static/luo-bing-cheng-poster.png'
import poster2 from '../static/zheng-xing-ze-poster.png'
import poster3 from '../static/lin-yong-song-poster.png'
import poster4 from '../static/chi-yueh-chun-poster.png'
import poster5 from '../static/su-you-chen-poster.png'
import poster6 from '../static/lin-meng-huang-poster.png'
import title1 from '../static/luo-bing-cheng-title.png'
import title2 from '../static/zheng-xing-ze-title.png'
import title3 from '../static/lin-youg-song-title.png'
import title4 from '../static/chi-yueh-chun-title.png'
import title5 from '../static/su-you-chen-title.png'
import title6 from '../static/lin-meng-huang-title.png'

const anchors = [
  {
    id: 'section-one',
    label: '',
  }, {
    id: 'section-two',
    label: '警察篇',
  }, {
    id: 'section-three',
    label: '鑑定篇',
  }, {
    id: 'section-four',
    label: '法官篇',
  },
]

const leadingVideoContent = [
  {
    type: 'video',
    content: [
      leadingImg, // poster img
      'leading-video.webm', // video src webm format
      'leading-video.mp4', // video src mp4 format
      '', // name of character in the video
      '', // video title
    ],
  },
]

const firstSection = [
  {
    type: 'paragraph',
    content: [
      '你也許從新聞上聽過這幾個名字：蘇建和、江國慶、徐自強、鄭性澤。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '他們都曾遭人誣陷或屈打成招，背負不屬於自己的罪名，人生從此分崩離析。有人年紀輕輕就被槍斃，死後15年才獲清白；有人蹲了十多年的冤獄，在死牢中等待奇蹟，最終在外界的民間團體和義務律師救援下，獲得重啟審判的機會，改判無罪。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '每一次有冤案被平反，不僅代表含冤者的生命被浪費，也代表國家過去根本沒有找到真兇，從未給受害者家屬一個真正的交代。冤案傷害了所有人，在冤案的框架下，所有關係人都是受害者。正因為在意受害者權益，每一次翻案之後，我們必須持續追問，冤案到底是怎麼形成的？有沒有人因此被究責、檢討？還是說，從警察、檢調單位到法官，所有人仍然在老位子用老方法辦事，一切都沒有改變？',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '「台中十三姨KTV殺警案」於2017年下旬大逆轉，原本被控殺警的鄭性澤經再審獲判無罪。辯護律師羅秉成以「扣扣子」比喻冤案，說冤案始於第一顆扣錯的扣子，卻又不像穿衣服可以重來，因為前一顆扣子是別人扣的，且司法系統不願面對已經造成的錯誤，乾脆將錯就錯下去。',
    ],
  },
  {
    type: 'video',
    content: [
      poster1, // poster img
      'luo-bing-cheng.webm', // video src webm format
      'luo-bing-cheng.mp4', // video src mp4 format
      name1, // name of character in the video
      title1, // video title
    ],
  },
  {
    type: 'paragraph',
    content: [
      '以鄭性澤案而言，羅秉成說，之所以出錯，是警方一開始就假設歹徒羅武雄已死、一定是鄭性澤開槍殺人，便刑求鄭性澤作出犯罪自白，但後來查到一些客觀資訊與自白不合時，他們卻沒有回頭想想哪裡錯了，反而把現場證人再重新召回來做筆錄，建構一個「交槍說」：',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '「警察不是回頭檢討先前的假設，而是去補假設錯誤的漏洞，讓鄭性澤『有槍』。這完全是有一個新資訊和事實出來後，為了圓說原來的假設，再做一些調查，調查是為了滿足那個結果，一直調查槍枝有沒有交到鄭性澤手上。然後，後面的系統又沒辦法去檢視他、反制他，一路就判下去了。」',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '除了這種扣扣子般的「累積性錯誤」之外，冤案之所以成長茁壯，還依靠「系統性錯誤」的毒養分。羅秉成解釋，警察偵辦、檢察官移送、法院判決本來是分立的系統，在層層遞進的過程中，下一個系統照理要有過濾、攔錯的功能，不是對前一個系統給的東西全部買單，加上法院本身又有審級制度，這正是一種救濟管道，遺憾的是，這些功能通通失靈。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '早在鄭性澤案之前，羅秉成也曾是蘇建和案的義務辯護律師之一，他認為這兩個案件大同小異：落網嫌犯王文孝起初供稱一人所為，警察堅不接受，認定有共犯，先扯出王文孝的弟弟王文忠，最後硬扯出蘇建和、劉秉郎和莊林勳三人。但王文忠供述時，講法又跟王文孝不一樣，「但後面的檢察官和警察都還是在鞏固原來的假設，而沒有去檢視原來假設的風險，系統也沒有辦法達到檢視與糾錯的功能。」',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '系統失靈了，環節鬆脫了，到頭來沒有人需要負責嗎？首先要問的是，警察的辦案手法有顯著的問題，法院在最後的無罪確定判決書中，也都「認證」鄭性澤、蘇建和被',
      {
        type: 'annotation',
        content: [
          '刑求',
          '必須釐清的是，《刑事訴訟法》所定義的不正訊問其實有許多手段，包括威脅、利誘、詐欺等，實際動手只是其中一種，也是最容易被關注到的一種。',
        ],
      },
      '，那為何沒有人因此被懲處呢？',
    ],
  },
]

const secondSection = [
  {
    type: 'header-one',
    content: [
      HeaderOne1,
      HeaderOneMobile1,
      '警察篇：警察打人，為什麼都不會被辦？',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '鄭性澤案辯護律師羅秉成說明，冤案通常耗掉一、二十年的時間，對警察瀆職罪的追訴期已經過了，「不考慮時效的話，證據通常也不足。鄭性澤描述他眼睛被矇著，是哪一個警察刑求，如何認定很困難，畢竟就是在一個相對封閉的空間裡發生的事情。」 ',
    ],
  },
  {
    type: 'video',
    content: [
      poster2, // poster img
      'zheng-xing-ze.webm', // video src webm format
      'zheng-xing-ze.mp4', // video src mp4 format
      name2, // name of character in the video
      title2, // video title
    ],
  },
  {
    type: 'paragraph',
    content: [
      '此案發生於2002年1月，瀆職罪的追訴期是10年，平冤協會與義務律師團投入救援後並未趕上這個期限，但絞盡腦汁試過別的法子，改從「偽證罪」下手，告發替鄭性澤做筆錄的2名警察李慶峰、吳佳成在一審的法庭上偽稱自己沒有刑求。偽證罪的追訴期也是10年，從作證的時間點算起，千鈞一髮地趕上了。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '然而，台中地檢署認為應不起訴，除了「無證據不得認定犯罪事實」的原因外，更引用當年的羈押庭筆錄，那裡面記載著，法官江奇峰當庭勘驗鄭性澤的臉部，認定無傷。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '這是怎麼回事呢？亦是此案律師的邱顯智怒言，江奇峰當年睜眼說瞎話，因為鄭性澤後來進看守所體檢時，明明是有傷痕的；此外，檢查身體的看守所人員作證時曾提到另一名拍照者，檢察官卻也沒有傳訊那個人來徹底調查，就直接不起訴了。',
    ],
  },
  {
    type: 'header-two',
    content: [
      '刑求屬密室犯罪  任人宰割難舉證',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '至於蘇建和案，律師團雖於1995年及時告發新北市汐止分局4名警察各種瀆職罪，包括非法拘提及搜索、妨害自由及偽造文書、凌虐人犯、湮滅及隱匿證據、偽證，但對於所有指控，士林地檢署認為應不起訴。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '有關刑求的部分，當年的不起訴處分書是這樣寫的：「依上開健康檢查表之記載傷痕情形，僅可證明蘇建和於入所（看守所）時身體有傷，然尚不足以證明係因被告等刑求所致。」士林地檢署更進一步指稱，蘇建和身上的傷可能是被逮捕、銬腳鐐時，因情緒激動而弄傷的。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '蘇建和當年因為一直不配合，是3位遭冤枉的被告裡被打最慘的，外傷明顯，卻連他的驗傷單都無法成為指控刑求的證據。為蘇建和案義務辯護整整21年的蘇友辰律師回憶這段往事時無奈地說，蘇建和案發生時，台灣還沒有修法要求警詢時應全程錄音、錄影，在那樣的年代，被告想自己舉證被刑求根本不可能。',
    ],
  },
  {
    type: 'infobox',
    content: [
      '血淚修法1',
      '為保障自白的任意性，《刑事訴訟法》於1997年增訂第100-1條，規定訊問被告時應全程連續錄音、必要時全程連續錄影。但要說這樣就可以根除刑求是太樂觀了，因為到了2002年，鄭性澤依然在台中豐原分局被刑求。不過從另一方面來看，救援團隊後來也根據警詢錄影帶的畫面，確認他的眼睛有傷勢。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '那難道刑求問題就無法可解了嗎？蘇友辰中年轉任律師前，曾當過法官、檢察官，他說明，檢察官若遇到被告反映刑求，職權上可以做到的是，將被告的說法記明筆錄內，甚至進一步請醫生到現場檢查。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '蘇友辰說，檢察官應善盡保全證據的責任，未來在法庭上才能檢驗被告抗辯是否實在，否則法官會質疑被告「為什麼在檢察官偵訊時不講？」另外，嫌犯被移往看守所時，照例要進行全身檢查，若見體傷，看守所人員應如實記載，不該有所顧忌。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '另外，蘇友辰指出，律師在場可防範警察動手動腳，蘇建和案發生時，',
      {
        type: 'annotation',
        content: [
          '「王迎先條款」',
          '1982年土地銀行發生重大搶案，刑事警察局的專案小組經由線報逮補計程車司機王迎先。王迎先在刑求逼供下承認犯罪，卻在陪同警察尋找贓款過程中跳溪自殺。事後，真兇李師科才到案。王迎先的悲劇促成《刑事訴訟法》第27條於同年修正，原本規定被告只能在「起訴後」選任辯護人，從此改成可「隨時」選任辯護人，而犯罪嫌疑人受司法警察官或司法警察調查者亦同。',
        ],
      },
      '也上路將近10年，保障被告可隨時選任律師，不必等到上法院才能。遺憾的是，警察竟沒有告知蘇建和等人這項權利，逕自替他們在筆錄記載說不用請律師。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '由此可見，一旦辦案人員不夠嚴謹，或沒有憑藉法治精神、道德良心行事，被告其實也無計可施，只能任由擺佈。而如果種種證據都已經失落了，就算被告到了法庭上抗辯刑求，蘇友辰坦言，法官能做的頂多也就是傳訊警察或調查局的辦案人員來對質、作證，但他們當然不可能自行承認刑求；然而在當年的舉證責任分配制度下，這就是法官調查的極限了。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '其實，台灣倒不是完全沒有警察因刑求被追究過，比較有名是邱和順案的員警。邱和順被控犯下1987年的業務員柯洪玉蘭殺人案、小學生陸正綁架案，於1989年被判處死刑。但因缺乏物證、刑求事證明確，多名被告之間的自白互相矛盾、錯亂無章，並與客觀事實不符，多年來受到民間團體關注與救援。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '1994年，時任監察委員的王清峰親自聆聽卷內尚存100多份筆錄的警訊錄音，發現錄音帶裡確實有施虐與哀嚎的聲音，顯示警方刑求共同被告余志祥，於是以「強暴脅迫」及「草率結案」為由，提案彈劾負責承辦的10名警察和2名檢察官。由於罪證確鑿，其中3名警察張台雄、謝宜璋、黃更生日後更被法院判處有罪確定，罪名是「妨害自由」與「偽證罪」，但皆獲緩刑，沒有人真正入獄。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '台大法律系教授李茂生受訪時也說明，刑求屬密室犯罪，很難舉證。就算法官在審理某個案子時，認定被告有被警察刑求的可能性，也不代表這些警察就一定會另外被起訴，這是兩回事；就算真的有檢察官起訴了這個案件中的警察，也不代表未來審判時，法官就會判他有罪，因為檢察官通常只要有50%左右的心證就能起訴，但法官在審視是否成立犯罪時，要達到確信的程度，亦即不容合理懷疑程度的認定。',
    ],
  },
  {
    type: 'infobox',
    content: [
      '血淚修法2',
      '《刑事訴訟法》2003年增訂第156條第3項：「被告陳述其自白係出於不正之方法者，應先於其他事證而為調查。該自白如係經檢察官提出者，法院應命檢察官就自白之出於自由意志，指出證明之方法。」司改會申訴中心主任蕭逸民認為，這條修法對於減少刑求有顯著的效果。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '但鄭性澤案辯護律師邱顯智認為，證據不足的問題還是其次，像當年鄭性澤臉上明明有傷，羈押庭法官卻當場記錄沒有傷痕，根本問題在於整個司法文化總是對刑求視而不見。',
    ],
  },
  {
    type: 'header-two',
    content: [
      '不正訊問花招多  問題在過度依賴自白',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '時常為司法改革發聲的高等法院法官錢建榮受訪時也表示，只要當過幾年法官，多少知道有刑求的存在，過去很多法官卻不願意去探討，「因為如果認定警察有刑求，是不是也要認定他有妨害自由、傷害或恐嚇？公務員依職權應告發，但法官也不想得罪警察。」',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '不過，錢建榮也提醒說，走到現在這個年代，警察素質確實提升許多，單純動手打人的狀況已經少見，刑求變得「精緻化」，詐欺取得自白的情形比較多。「他們會認為是（偵訊）技巧啦，就看我們怎麼認定。例如警方跟A說，『B已經承認了，你趕快承認』，再跟B也這樣講，說A已經承認了。如果是德國，會認為這是詐欺取得自白，台灣認為是技巧。就連《刑事訴訟法》上，除了打人的那些',
      {
        type: 'annotation',
        content: [
          '不正訊問方法',
          '《刑事訴訟法》第156條第1項：被告之自白，非出於強暴、脅迫、利誘、詐欺、疲勞訊問、違法羈押或其他不正之方法，且與事實相符者，得為證據。',
        ],
      },
      '，也不曾被認定過啊。」',
    ],
  },
  {
    type: 'video',
    content: [
      poster3, // poster img
      'lin-yong-song.webm', // video src webm format
      'lin-yong-song.mp4', // video src mp4 format
      name3, // name of character in the video
      title3, // video title
    ],
  },
  {
    type: 'paragraph',
    content: [
      '徐自強案辯護律師林永頌也表示，很多人常常問現今到底還有沒有刑求？這就要看大家對不法訊問的定義是什麼，一般人可能會想像「把人吊起來打」，但那只是其中一種方式。林永頌接過許多刑事案件，聽偵訊錄音時就發現威脅利誘所在多有，「有很客氣的，但其實是恐嚇，說『王小姐妳這樣可能今天就回不去了耶』；也有利誘，叫你推給長官。這種可能比刑求還多。或者他說沒有，但被逼了，只是點點頭，你理論上要寫『原來說沒有，後來點點頭』，但對他有利的就不寫了，這是筆錄不實。」',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '因此，林永頌認為，無論是哪一種「刑求」，核心問題都在於不該過度依賴自白，應依客觀證據辦案。',
    ],
  },
]

const thirdSection = [
  {
    type: 'header-one',
    content: [
      HeaderOne2,
      HeaderOneMobile2,
      '鑑定篇：科學鑑定出包了，繼續做？',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '從法醫蕭開平的例子可以淋漓盡致地看出，不科學的科學鑑定常常害慘被告，但做錯鑑定的人，還是安坐在原來的位子上。蕭開平曾參與蘇建和案、徐自強案、江國慶案3大冤案的鑑定，每一次的鑑定到最後都被推翻，至今卻還在法務部法醫研究所擔任病理組組長。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '江國慶案發生時，蕭開平是國軍法醫中心的法醫顧問，他與其他幾名法醫判定現場衛生紙上帶有江國慶的精液，此一證據促使21歲的江國慶被列為嫌犯，遭專案小組嚴刑拷打、承認犯罪，隔年就被槍決了。但此案於2010年重啟調查後，證實衛生紙上面的根本不是精液，可能是鼻涕或其他體液，也因現場掌紋發現另有真兇，全案大逆轉。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '至於蘇建和案，蕭開平曾出庭作證表示，從被害人身上的刀痕角度來看，至少有3種不同類別的刀刃兇器，暗指兇手有好幾個人，而這正是原審判決一直以來的論點。司改會當時就痛批，蕭開平所謂的「刀痕角度比對法」是全世界絕無僅有的「獨創見解」，沒有任何相類似的科學研究。這份鑑定後來也在2012年的無罪確定判決裡，被法院認為不具證據能力。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '此外，徐自強案於1995年發生時，相驗法醫楊日松從未提及被害人的屍體遭硫酸潑灑一事，僅認為有火燒情形，但由於另一名被告陳憶隆指稱徐自強購買硫酸並潑灑於屍體上，「硫酸」從此成了徐自強到底有沒有涉案的關鍵之一。',
    ],
  },
  {
    type: 'video',
    content: [
      poster4, // poster img
      'chi-yueh-chun.webm', // video src webm format
      'chi-yueh-chun.mp4', // video src mp4 format
      name4, // name of character in the video
      title4, // video title
    ],
  },
  {
    type: 'paragraph',
    content: [
      '更六審時，法院要求法務部法醫研究所重新鑑定，蕭開平依據現場照片、錄影帶和解剖記錄研判表示，「較支持死者遭噴灑大量硫酸於屍體表面後，再以泥土掩蓋於屍體之可能性。」面對辯方質疑為何屍體沒有腐蝕痕跡時，更一度宣稱，「浸泡2小時的濃硫酸，皮膚還是完好的」，驚動四座。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '所幸更七審時，法院囑託台大醫學院附設醫院進行鑑定，吳木榮教授在結果裡明確指出，蕭開平的鑑定違背科學原則及病理學診斷原理。而在徐自強的無罪確定判決中，法官也認定楊日松、吳木榮的鑑定較合理，不採用蕭開平的鑑定意見。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '由於蕭開平作出的鑑定結果，屢次與檢調認為有罪的假設、法院若要判決有罪所需的鑑定結果一致，司改會申訴中心主任蕭逸民痛批，這根本是從戒嚴時期起，部分法醫並非靠著專業意見作判斷、純粹是在配合辦案的陋習。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '與這麼多冤案有關，蕭開平如今被究責了嗎？在司改會的檢舉下，監察院終於針對硫酸分析一案進行調查，於2017年6月14日指出：蕭開平使用「目測分析」的鑑定方法缺乏學理依據，卻藉此推翻原現場的勘驗，有違科學鑑定的基本原則。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '監察院更多方詢問中研院化學研究所、台大醫學院法醫學研究所、中央警察大學的意見，這些單位都打臉蕭開平表示，屍體是被火灼傷或化學灼傷或許可看照片初步判斷，但到底是不是硫酸，必須靠儀器或實驗進一步檢驗。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '監察院直指，蕭開平已經違反《法醫師法》第19條，「法醫師應本於醫學專業知能，誠實公正態度執行職務」的規定。但儘管如此，監察院最後決定，蕭開平的違失情節「未達應處休職以上懲戒處分之程度」，因此適用《公務員懲戒法》最有利於當事人的5年懲戒時效——硫酸鑑定書是2007年作成的，所以蕭開平失職行為的懲戒權已經消滅。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '這份調查報告一出，司改會、平冤協會等團體憤怒地聚集在監察院前抗議，痛批監察院明明都承認蕭開平有重大違失，卻決定縱放。徐自強的辯護律師林永頌受訪時表示，「我沒有一定要他怎樣，可是我們要檢討問題到底在哪裡？」',
    ],
  },
  {
    type: 'header-two',
    content: [
      '測謊沒有傳說中那麼神',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '此外，一般人耳熟能詳、刑案偵辦上常使用的「測謊」，其實也早已前科累累。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '測謊真的準嗎？江國慶當年未通過測謊，被認為是嫌犯，清白在多年後才受證實。而冤屈的豈止這一樁？現行《刑事訴訟法》並沒有規範測謊鑑定的證據能力，測謊結果到底應不應該被引為刑事證據？司改會、平冤協會曾就這些問題對監察院陳情。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '監察委員王美玉、仉桂美於2017年發表調查報告指出，他們發現當年對江國慶實施測謊、現已退休的測謊專家李復國除了此案，由他測謊的「呂介閔被訴殺人案」、「空軍桃園基地彈藥庫失竊案」、「前高雄縣橋頭鄉前鄉長李清福收取工程回扣款案」也有重大瑕疵，如提問間隔時間過短，導致受試者的生理反應未全部回歸基線，或題目措辭經常改變、提問過快，導致受試者緊張等，判斷有沒有說謊的標準更是模糊，幾乎是黑箱作業。',
    ],
  },
  {
    type: 'image',
    content: [
      formImg, // src
      portraitFormImg, // portrait img
      '監察院調查李復國測謊瑕疵', // image alt
      '（資料來源：監察院）', // description
    ],
  },
  {
    type: 'paragraph',
    content: [
      '監察委員認為，行政院應參考美國的「無辜計畫」（The Innocence Project），全面重新檢視李復國退休前施測的案件，若發現關鍵事證，應主動提供冤案當事人救濟管道。但法務部長邱太三僅呼籲，「針對李復國測謊程序有瑕疵者，可透過律師公會或法學會，向法務部高檢署下成立的完善定罪計畫提出重新檢視的要求。」',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '此舉遭民間團體及關注人士痛批，畢竟國家級鑑定單位的測謊有瑕疵，卻不主動重新檢視，還要民眾自行申請，難道是當事人有責任，必須自求多福嗎？',
    ],
  },
  {
    type: 'header-two',
    content: [
      '美國FBI鑑定有誤  全面覆查',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '觀察國外作法，2015年，美國司法部與聯邦調查局（FBI）正式承認：在西元2000年之前，有長達超過20年的期間，近全數的FBI司法鑑識人員為審判所提供不利於被告的毛髮鑑識證據，都有缺陷。儘管案件裡的其中一項證據有誤，並不代表被告一定無罪，美國司法部仍誓言將投入資源處理所有相關案件，民間的「全國刑事辯護律師協會」和「無辜計畫」（Innocence Project）也協助政府覆查有疑問的鑑識證據定罪之案件。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '這兩個組織於2015年指出，已覆查的268起審判中，涉及28名於FBI實驗室從事顯微鏡毛髮比對的鑑識人員，其中有26名曾過度推論相符結論的情形，意即誇大鑑識的吻合結果，從而使這268起審判中超過95%的案件對檢察官有利。有4名被告已經因此被釋放，但這些案件中也包含32位死刑犯，其中14位已執行或死於監獄。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '顯然，科學鑑識出包並非台灣獨有的現象，但台灣欠缺結構性的全面檢討。蘇建和案的其中一位辯護律師古嘉諄就曾在《蘇建和案21年生死簿》後記中表示，能否建置一個國家級的獨立鑑識機構？而這也是許多學者專家的看法，亦為冤獄平反協會的主張。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '現為行政院政務委員、前為鄭性澤辯護律師的羅秉成也指出，他今年在司改國是會議的第一次會議就提議要建立「國家級司法科學委員會」，畢竟刑事案件的鑑定單位目前是多頭馬車，有法務部法醫研究所、刑事警察局和調查局，但鑑識人員的獨立性最好要建立起來，才可能維持專業品質。「國家及司法科學委員會」是許多關注司法改革的人共同的冀望，但此案目前還在司法國是會議討論中。',
    ],
  },
]

const fourthSection = [
  {
    type: 'header-one',
    content: [
      HeaderOne3,
      HeaderOneMobile3,
      '法官篇：誤判也不必賠償嗎？',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '審理案件不是簡單的工作，有時更受到上游的檢警辦案品質或鑑定水準影響，但對於一個冤案的生成，法官也不能完全免責。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '舉例來說，許多冤案都有刑求爭議，但蘇建和案辯護律師蘇友辰說，無論被告的自白是真是假，法官本來就該注重其他真實性的補強證據，以蘇建和而言，不管他是否被逼供認罪，原審判決既認定有多人輪姦的犯罪行為，這樣的情形照理會呈現在被害人的下體，但鑑識結果是沒有任何精液存在；又例如原審判決認為數名被告共同殺人，從客觀證據來看，現場卻只扣押到一把刀、一人的指紋，沒有別人的指紋或血腳印。',
    ],
  },
  {
    type: 'video',
    content: [
      poster5, // poster img
      'su-you-chen.webm', // video src webm format
      'su-you-chen.mp4', // video src mp4 format
      name5, // name of character in the video
      title5, // video title
    ],
  },
  {
    type: 'paragraph',
    content: [
      '從前在蘇建和案救援團隊擔任專任秘書、現任民間司改會申訴中心主任的蕭逸民則直言，讓蘇建和案翻案的幾個證據，如警察栽贓的24元硬幣、錯誤的指紋鑑定、王文孝一人犯案的筆錄，早在案發當年一審時就出現了，只因法官強烈的先入為主以及走歪的正義感，被忽視到最後一刻。',
    ],
  },
  {
    type: 'quote',
    content: [
      '「我辦很多刑事案件，很多被告也都說『啊不是無罪推定嗎？』我說你給我惦惦！那是課堂上講的話，你還是要給我去找對你有利的證據。」',
      '林永頌，徐自強案辯護律師',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '在蘇建和等人被判決死刑定讞後的半年多，台灣社會的另外一個角落又有一名男子踏進冤案漩渦。1995年，徐自強被指控參與一起擄人勒贖案，從此被羈押16年，2016年才獲判無罪定讞，但此案從頭到尾沒有任何直接、科學的證據，可以證明徐自強與此案有關，法官憑藉的僅僅是同案被告的自白。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '徐自強的律師林永頌指出，照理要無罪推定沒錯，實際狀況卻不是這樣，例如徐自強提出案發當天早上的不在場證明，原審判決還是認為他可以參與犯罪。',
    ],
  },
  {
    type: 'infobox',
    content: [
      '血淚修法3',
      '自白不是證據之王！多起冤案都過度偏重自白，但《刑事訴訟法》第156條第2項始終規定「被告之自白不得作為有罪判決之唯一證據，仍應調查其他必要之證據，以察是否與事實相符。」直到2003年，更進一步修正為「被告『或共犯』之自白，不得作為有罪判決之唯一證據……。」',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '但無論法官判決多難服人，目前為止，沒有出現過法官因為「誤判」而被追究的案例。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '為什麼會這樣？首先來看《刑法》規範的公務員瀆職罪，其中與審判業務有關的規定是，法官若枉法裁判，處1年以上、7年以下有期徒刑。',
    ],
  },
  {
    type: 'quote',
    content: [
      '但『枉法裁判罪』，告100條應該沒有成立過一條吧。怎樣才算「枉法裁判」？幾乎要「故意」，可能要連結到『貪贓枉法』那一種。」',
      '羅秉成，蘇建和案及鄭性澤案辯護律師、行政院政務委員',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '很顯然的，一般人民認知的「誤判」與法律上定義的「故意犯罪」有段距離。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '這也影響到一件事情——每次冤案平反，當事人依法聲請刑事補償金後，總有人抱怨「法官誤判，為何是全民買單！」對啊，為什麼呢？我們明明有《國家賠償法》這樣一套設計，它規定公務員若因故意或重大過失，以至於侵害人民自由或權利時，國家可先賠償給人民，再回過頭來向該負責的公務員求償啊！',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '但事實上，誤判的法官無法適用這個規定。因為《國家賠償法》第13條寫道，「法官若因執行職務侵害人民自由或權利，『經判決有罪確定者』適用本法規定」，所謂的經判決有罪確定，意即唯有「犯罪行為」成立時，法官才可以被求償。',
    ],
  },
  {
    type: 'header-two',
    content: [
      '誤判不用賠、不必被評鑑',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '羅秉成說，有一派司法改革的意見因此認為，法官如果錯判，或犯了很明顯的重大過失，也應列入被求償範圍，例如以前有法官忘記押期，害人多關了好幾天，這麼輕率的行為就算重大過失，或案子明明還可以上訴，法官卻搞錯了，當作確定案件發監執行。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '羅秉成說，這是實例，這位法官後來也被行政懲處，但行政懲處的問題就是追訴時效過短，只有2年。',
      {
        type: 'annotation',
        content: [
          '',
          '《法官法》第36條規定，「法官個案評鑑之請求，應於二年內為之。」',
        ],
      },
    ],
  },
  {
    type: 'paragraph',
    content: [
      '行政懲處正是另外一樣究責工具，依照2011年立法的《法官法》第35條規定，民眾可以透過立案的民間團體或監察院，向司法院的「法官評鑑委員會」請求對法官進行「個案評鑑」，接下來，法官評鑑委員會可調查並決議是否要行政懲處，有懲戒必要者，報由司法院移送監察院審查，並得建議懲戒的種類。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '但一般人民認知的「誤判」，仍然不是該法處理的對象。',
    ],
  },
  {
    type: 'quote',
    content: [
      '《法官法》裡頭有規定法官所表達的法律意見、判決意見，不能作為評鑑的內容（《法官法》第37條：就法律見解請求評鑑者，法官評鑑委員會應為不付評鑑之決議），所以《法官法》要讓有違失的法官退場，除非他有私德的問題或貪污的根據，否則誤判、錯判，目前要讓他成立，沒有那麼簡單。',
      '蘇友辰，蘇建和案辯護律師',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '倒不是說法官就可以為所欲為，根據法官評鑑委員會101年度至106 年度受理並送至監察院的',
      {
        type: 'link',
        content: [
          '案件結果',
          'https://ppt.cc/fbeXVx',
        ],
      },
      '，有法官在法庭上暗示辯護無用、「引逗當事人撤回上訴」，最後被記了申誡，也有法官性騷擾助理而被免職，轉任其他職務……不過，這些牽涉的都不是法院的核心審判業務。',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '蘇友辰說，個案評鑑處理的多是法庭上的指揮訴訟、違反程序的問題，但這些都如蚍蜉撼樹，動搖不了司法官僚，法官本來就被法律賦予很大的裁量權，特別是所謂的自由心證，雖然就旁人看來，法官有時根本沒有善盡辨明是非的責任，「但要以這個理由來追究行政或刑事責任，目前為止我沒有看過法官是這樣被追究、懲戒或刑事訴追。」',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '蘇友辰進一步解釋說，即使監察院時常受理人民的陳情、檢舉，也對多起冤案作過調查，以蘇建和案為例，監察委員曾提出違法羈押及逮捕、湮滅證據、偽造文書種種問題，但這些都是警察跟檢察官階段的弊病，「監察院的紅線是說，司法和監察院是平行的，法院裁判是運用自由心證得到有罪心證，如果沒有顯然、故意或重大過失存在的話，要彈劾它沒有那麼容易。」',
    ],
  },
  {
    type: 'header-two',
    content: [
      '就算不究責「人」，也該檢討「個案」',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '但退一步來說，一個冤案平反後，前面那些判有罪的法官到底該不該罰？怎麼罰？當許多人討論不適任法官的退場機制時，同樣也長期關注司法改革的台大法律系教授李茂生卻有不同觀點。',
    ],
  },
  {
    type: 'quote',
    content: [
      '「若要判法官，整個審判制度會毀掉，到時候（法官）變得不敢判，人民又要罵恐龍法官。法官監督不能事後監督，那只是擦屁股而已，而且有所顧忌，沒有一個國家這樣會做得好的，你要期待減少冤罪，不如期待基本法學教育和基本體系改變。」',
      '李茂生，台大法律系教授',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '李茂生解釋，台灣目前只有2千多個法官，案件卻因濫訴情形嚴重而爆量，每個時期又有不同專案，要警察拚業績去抓這種、那種。如此一來，每位法官分配到太多案子，導致每個案子常常半年才開一庭，這樣的審判品質自然不好，若要從上游開始整治，「警政署要改變績效點數那些制度，加強警察的辦案能力，也加強檢察官和警察之間的聯繫。」',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '李茂生也說，法官做出判決有各種因素，或者說，法官只是認同前審判決，要算誰的錯？「前面那麼多人判有罪，越到後面越要翻案，要有很大的勇氣。整個司法改革都把法官當作老鼠在打，好像每個法官都是爛法官，當法官沒有尊嚴。翻案後要給掌聲啊，關心的人會給掌聲，但關心的人不到1%吧。」',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '確實，也有不少法官支持司法改革，並常常公開發聲。那他們怎樣看待冤獄及究責議題呢？',
    ],
  },
  {
    type: 'video',
    content: [
      poster6, // poster img
      'lin-meng-huang.webm', // video src webm format
      'lin-meng-huang.mp4', // video src mp4 format
      name6, // name of character in the video
      title6, // video title
    ],
  },
  {
    type: 'paragraph',
    content: [
      '高等法院法官林孟皇受訪時表示，不能什麼事都用「審判獨立」當理由，但在這個原則下，確實很難追究「誤判」這件事，關於這一點，他目前想不出解方，但他認為每個冤案翻案後，都應該召開連續數天的研討會，所有人一起探討每個環節到底出了什麼問題？',
    ],
  },
  {
    type: 'paragraph',
    content: [
      '林孟皇也坦言，法官不是神，不可能完全沒有判錯，既然如此，作為非常救濟手段的「再審」門檻就不應該那麼嚴苛，要更容易開啟，這是台灣司法還需要更進步的地方。林孟皇也建議，台灣可以效法德國的制度，規定人民聲請再審時，不是向原審法院聲請，而是向另外一個法院聲請，如此一來，也許比較容易開啟再審，以承接司法審判裡永遠都存在著、誤判的可能性。',
    ],
  },
]

const bottomTags = [
  {
    id: '5768ed19406be01000c69077',
    name: '人權',
  },
  {
    id: '5783582ec380321000c0fbeb',
    name: '司法',
  },
]

const relateds = [
  {
    title: '三位法官經驗談：把被告當作自己 你希望自己怎樣被審判？',
    desc: '判決時要明確地講出心證，然後接受檢驗。明確地做出判斷，交代理由，直球對決啦，把他們心目中的「法」講出來。',
    thumbnail: 'https://storage.googleapis.com/twreporter-multimedia/images/20180226181154-1ec4f6d1edf3c17f0729e54990370cd7-tiny.jpg',
    url: 'https://www.twreporter.org/a/miscarriage-of-justice-judge-view',
  },
  {
    title: '從冤獄倖存之後——專訪蘇建和、徐自強談重生之路',
    desc: '每個被誤關的人到頭來都有一個補償數字，但這些數字買得回不可復返的人生嗎？',
    thumbnail: 'https://storage.googleapis.com/twreporter-multimedia/images/20171116191537-52b0d9f0883b33616113847316d84b1d-tiny.jpg',
    url: 'https://www.twreporter.org/a/compensation-for-wrongful-detentions',
  },
  {
    title: '【鄭性澤案宣判】一封遲到15年的信，與沒有期限的祝福',
    desc: '「今天以前，我是一個沒有明天的人，從這一刻起，我要重新開始我的人生。在這裡，我祝福你，也祝福你的家人！」',
    thumbnail: 'https://storage.googleapis.com/twreporter-multimedia/images/20171026172005-dd8b6402a97625d3a51392550903a460-tiny.jpg',
    url: 'https://www.twreporter.org/a/cheng-hsing-tse-free-at-last',
  },
  {
    title: '【平反之後】專訪鄭性澤：放下過去那個痛苦的自己',
    desc: '精神上或思想上去怨恨這些事情，對我來說也沒有意義，不能改變什麼。 過去就過去了。 ',
    thumbnail: 'https://storage.googleapis.com/twreporter-multimedia/images/20171028185732-ef34443c561c2f8897c710fa0d637886-tiny.jpg',
    url: 'https://www.twreporter.org/a/cheng-hsing-tse-finally-free-interview',
  },
  {
    title: '【林金貴案再審】天使藏在細節裡',
    desc: '「冤案救援就是，你會變成逼自己要從另外一個視角，回去看自己過去做的每一個決定、每一個辯護策略，因為你等於是從事後的觀點去回推。」',
    thumbnail: 'https://storage.googleapis.com/twreporter-multimedia/images/20170428145749-b927b7f22366b8b226679bd80ff76983-tiny.jpg',
    url: 'https://www.twreporter.org/a/ling-ching-kue',
  },
  {
    title: '紀錄片《徐自強的練習題》 一道質問人性的習題',
    desc: '我們到底相信性惡，還是性善；懷疑一個人的時候，是有罪推定，或無罪推定；我們或許不會遭遇這麼離譜的冤案，但當我們經歷所有人的不信任，又該如何去面對？',
    thumbnail: 'https://storage.googleapis.com/twreporter-multimedia/images/20170704125233-668bf44a9bb07c42f6e96375ce7e1b60-tiny.jpg',
    url: 'https://www.twreporter.org/a/director-chi-yueh-chun',
  },
]

const headMeta = {
  canonical: `https://www.twreporter.org/i/${config.PROJECT_NAME}-gcs`,
  title: '這些人平反後，真能避免下一個冤案？',
  desc: '你也許從新聞上聽過這幾個名字：蘇建和、江國慶、徐自強、鄭性澤。他們都曾遭人誣陷或屈打成招，背負不屬於自己的罪名，人生從此分崩離析。冤案傷害了所有人，在冤案的框架下，所有關係人都是受害者。冤案到底是怎麼形成的？有沒有人因此被究責、檢討？還是說一切都沒有改變？',
  image: ogImage,
}

export default {
  anchors,
  bottomTags,
  firstSection,
  fourthSection,
  headMeta,
  leadingVideoContent,
  relateds,
  secondSection,
  thirdSection,
}

