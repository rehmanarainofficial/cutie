// ==================== ORIGINAL VARIABLES & DATA ====================
let activeOscillators = [];
let typingInterval;
let sequenceTimeout1, sequenceTimeout2, sequenceTimeout3;
let hasInteractedWithImages = false;
let clickedImages = new Set();
let currentView = "main";
let current = 0;
let lives = 3;
let passwordLockoutActive = false;
let rememberedPassword = "";
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let secretMessagePlayed = false;
let finalMessagePlayed = false;
let partySoundPlayed = false;
let hiddenConversationPlayed = false;
let skipConvoShown = false;
let convoActive = false;
let cardViewCounts = [0, 0, 0, 0];
let secretViewCount = 0;
// NEW: Callback holder for notification screen
let currentNotificationCallback = null;
const birthdayData = [
  {
    heading: "🥳 Your 18th Birthday!🎉💖",
    theme: "purple-theme",
    color: "#9d00ff",
    text: `What’s the most important day for someone!? Maybe it’s the day they first went to school, maybe the day they received their very first gift or maybe the day they won their first trophy and realized they had achieved something special. But what about the day when a girl finally leaves behind her childhood and steps into a completely new chapter of life!? The day she turns 18, the day she officially becomes an ADULT, the day she becomes a BEAUTIFUL YOUNG WOMAN! 💗✨<br><br>

But before that day arrived, things weren’t exactly perfect! In fact, everything seemed pretty messed up! He had finally given up on the friendship while she was trying her level best to bring him back! Yet he wasn’t the same anymore! Maybe there was a little ego in him, maybe there was stubbornness or maybe they had simply hurt each other too much! At one point, she even told his friend that she was sick of all of this! She had tried to reconnect, she had tried to make things right! But he just wasn’t coming back! Everything seemed over! Completely over! 💔<br><br>

Was it!? 👀<br><br>

Well… guess how the wishes of her birthday started!? Yup! As always, HE WISHED HER FIRST! 💌 He apologized and told her that he never wanted to destroy such a precious day for her, especially because this birthday was even more special than the others! She was finally turning 18! She was becoming an adult! He told her that he wanted to be the first one to wish her as always and that’s exactly how that beautiful day of hers got its first start! ❤️‍🩹<br><br>

The night itself wasn’t anything extraordinary! Resharing stories, replying to texts, receiving the usual birthday wishes and going through all that normal birthday madness! But the morning… oh! The morning had something much more special waiting for her! She woke up happy! Almost as if she had finally taken a breath after so many days of emotional chaos! And there was a reason for that! Her parents weren’t home because they had gone out to order a custom made cake especially for HER! 💝🎂<br><br>

When that cake finally arrived…<br><br>

THAT CAKE WAS SO IMPRESSIVE! 🎂💗<br><br>

It wasn’t just a cake anymore! It felt like a little symbol that this day was truly hers! Then came the fun part! Her parents took her out becauseeeee, obviously, she LOVES going out!!! 😇 She bought balloons and her mother bought practically every single balloon that she liked! There was the road trip, maybe some music playing and just a feeling of being outside and enjoying the day! Everything felt so calm and peaceful! Almost as if even the weather had decided to cooperate for her! The whole world seemed to be quietly saying...<br><br>

“Everything knows it’s your special day today!” 🎈❤️🤌🏻<br><br>

When she finally came home, it was time to get ready! She put on an absolutely beautiful outfit! Honestly! Some things just cannot be explained properly with words! She was looking B-E-A-U-T-I-F-U-L!🥰 She finally cut her cake, opened her gifts, took what seemed like a hundred incredible pictures! Laughed! Smiled! Celebrated the day that she had always deserved to celebrate! 🥳💕<br><br>

And now there’s one very special 'SHE' reading this right now! Isn’t there!? 👀 And I already know you’re smiling! So go on… SMILE a little more! After all it wasn’t just another birthday! It was the day you officially stepped into adulthood! It was the day you became 18! It was the day a little girl entered a whole new chapter of life and became the beautiful young woman that was destined for her! 💖<br><br>

So remember the cake, remember the balloons, remember the pictures, remember the laughter, remember all the little moments that made that day special and most importantly, remember how loved you are cuz no matter how many birthdays come after this one, there will only ever be one that will hold true meaning to you!<br><br>

And that birthday is...<br><br>

"🥳 YOUR 18th BIRTHDAY!🎉💖"`,
    melody: [
      { f: 261, d: 0.5 },
      { f: 293, d: 0.5 },
      { f: 329, d: 0.5 },
      { f: 349, d: 0.5 },
      { f: 392, d: 0.5 },
    ],
    spokenHeading: "Your 18th Birthday!",
  },
  {
    heading: "💬 The Happy First Talk Anniversary! 🥰✨",
    theme: "orange-theme",
    color: "#ff8c00",
    text: "Sometimes, the biggest chapters of our lives begin with the smallest moments! A random Instagram friend request! A random Sunday! A random conversation! It all seemed so ORDINARY! Yet hidden behind that one tiny button was the power that changed two lives forever! 💕<br><br>It was a Sunday, shortly after her 9th final exams. She was enjoying a peaceful weekend when something happened again that had already happened a few days earlier! An old school friend had sent her an Instagram friend request! Just like before, she thought, ‘He’ll probably be like every other boy in school.’ So she ignored it!🤷🏻‍♀️ But then another thought crossed her mind!<br><br>‘What if he’s just… different!?’🤔<br><br>Even then, she decided not to accept it! A little later, one of her friends sent her a message, ‘He’s asking why you haven’t accepted his request! He thinks he might have done something wrong in the past!’ 🤧<br><br>That made her pause! She admitted that she didn’t talk to boys and wasn’t sure whether accepting the request was the right thing to do? Her friend reassured her, ‘He’s different… just different enough not to be like those typical gangster type boys!’ ✨<br><br>And then… at almost 10:50 PM, a single tap quietly rewrote a future that neither of them could have IMAGINED! 🩷<br><br>He was the first one to send a message! He told her that he had made a school group with both boys and girls and asked whether she’d like to join!? But before anything else, he couldn’t help asking, ‘Why didn’t you accept my request!? Did I do something wrong in the past that I just don’t remember!?’ She quickly explained that it wasn’t his fault at all! She had simply never been comfortable talking to boys or adding them on Instagram. That was all! ❤️‍🩹<br><br>The conversation continued; Just a little introduction, Just a little sharing, Just enough to know who the other person was!? Yet somehow there was a strange feeling of FAMILIARITY! 💖 Maybe both of them felt it! Or maybe neither of them realized it at all! Out of respect he even called her his SISTER! Funny how life sometimes smiles quietly while keeping its biggest surprises hidden! Because that wasn’t how the story was going to end was it!? 💯<br><br>Days turned into conversations. Conversations turned into friendship! Friendship slowly became a bond unlike anything either of them had ever expected! Of course! It wasn’t all smooth! He had a rather unique talent; he would get offended over the smallest things, leave the chat dramatically, and then come back asking for a Sorry! Some habits never really disappear! 🥹<br><br>Looking back now, it’s almost impossible to believe that everything began with one unanswered friend request, one message, and one ordinary Sunday Night! Who could have imagined that the very first conversation of their lives would become the beginning of one of the strongest, most unforgettable, and most beautiful BOND their school had ever witnessed!? ❤️🤝<br><br>Perhaps, at 10:50 PM that night, they thought they were simply starting a conversation but fate knew better!<br><br>Because sometimes… one message is all it takes to change a story forever!<br><br>And that unexpected first talk quietly became… 💬 The Happy First Talk Anniversary! 🥰✨",
    melody: [
      { f: 261, d: 0.3 },
      { f: 329, d: 0.3 },
      { f: 392, d: 0.3 },
      { f: 523, d: 0.6 },
      { f: 392, d: 0.4 },
      { f: 523, d: 0.6 },
    ],
    spokenHeading: "The Happy First Talk Anniversary!",
  },
  {
    heading: "💖 A Confession That Changed Everything 💌",
    theme: "hotpink-theme",
    color: "#ff007f",
    text: "Sometimes, the biggest turning points don’t begin with a perfect plan! Sometimes, they begin with <b>CONFUSION!</b> A little jealousy! A little drama! And two people who had absolutely no idea that their lives were about to change forever! 💖✨<br><br>25th May 2024 was one of those days. She didn't know what was happening inside her own heart! She only knew that something felt different! She had accepted an Instagram request because of a little push from a friend. The very same friend she would later find herself feeling jealous of! Funny how life had already started connecting the pieces of her story without her even realizing it! 🥹<br><br>But then one day, everything suddenly became complicated! She found out that the person who had become so important to her believed his heart belonged somewhere else and suddenly she said the words she probably didn't even know how much she meant...<br><br><i>'I like you… but you like her, so I’m going to leave.'</i><br><br>Just like that, she was ready to walk away. 🤧<br><br>Maybe she thought leaving would make things easier. Maybe she thought that if she stepped back before getting too attached she could save herself from getting hurt! But deep down… she was <b>JEALOUS! 🫣💗</b> She didn't fully understand why and perhaps she wasn't even ready to admit what that feeling meant!<br><br>But the thought of him choosing someone else bothered her in a way that no ordinary friendship ever could! Eventually! she admitted the truth. She had been jealous because somewhere along the way, her feelings had become much deeper than she realized! ❤️‍🩹<br><br>And then came the moment that changed everything because despite all the confusion, despite what he once believed he felt… <b>HE CHOSE HER! ❤️</b> And somehow she became the person he wanted beside him! But instead of simply feeling happy about being chosen, another thought quietly entered her mind!<br><br>She didn't want to hurt him! She knew that his feelings had once been directed somewhere else and she was afraid that perhaps one day he might realize that choosing her had been a mistake maybe! So she believed the best thing she could do was to keep the drama going until he eventually got over it and leaves her after 10th! 🤧<br><br>Maybe if she made herself seem distant enough! Maybe if she kept a little uncertainty between them, he would slowly move on without getting hurt too badly! She thought she was protecting his heart. She didn't realize that by trying to protect him she was only making her own feelings grow stronger! 💞<br><br>And then came the distance! Before wishing her he pretended that he wasn't going to talk to her for at least three months! Three whole months of silence! Three months in which she had no idea what was going to happen next!<br><br>But somewhere along the way she started feeling something she hadn't expected at all… <b>HIS ABSENCE</b>, maybe a little! 🥹 The person she had convinced herself she could eventually let go of wasn't there anymore! The conversations weren't there. The familiar presence wasn't there NOW!<br><br>Slowly! That absence began to make his importance even clearer! Maybe she had spent so much time thinking about how to make him get over her that she never stopped to think about what it would feel like when she was the one who had to live without him! 💝<br><br>Then came her <b>16th Birthday! 🎂💖</b> She received a wish from the very person she had been trying to convince herself she could eventually move on from! Somehow! That simple birthday wish made everything she had been trying to ignore feel real again! 💯<br><br>She was sitting inside the van. She didn't even know he was there! She didn't see him but he did! Without her knowing he witnessed something completely genuine, <b>HER SMILE! 🥹🩷</b> The kind of smile that couldn't be forced!<br><br>The kind that appeared naturally when something touched her heart! The kind that quietly revealed just how much that little gesture had meant to her and perhaps without even realizing it she had just shown him exactly how much his presence still mattered!<br><br>That wasn't the end of it! He went home carrying that moment with him… and then he sent her a voice message! Except it wasn't an ordinary voice message. He was <b>CRYING! ❤️‍🩹</b><br><br>Suddenly! Everything she had been trying to understand became real!<br><br>The emotions! The attachment! The care! The person she had been trying so hard not to hurt! All of it came rushing back at once! She went to the washroom and... <b>SHE CRIED! She even started SHIVERING! 🥺💗</b><br><br>Somewhere inside her mind one thought kept repeating itself...<br><br><i>“Someone cares about me this much… that he is literally crying for me!?”</i><br><br>Maybe for the first time she truly understood what all of it meant! The distance hadn't erased anything! The three months hadn't made him forget her! If anything that time had done was to make her realize how much his presence mattered to her!<br><br>That one birthday wish had made <b>ONE thing completely clear...</b><br><br><b>Someone cared about her this deeply! ❤️</b><br><br>This wasn't just another friendship! This wasn't something temporary that would simply disappear with time! It wasn't something she could protect herself from by creating a little more drama or distance! ❤️‍🩹 The girl who had once thought she needed to protect him from getting hurt… slowly realized that she was already deeply attached to him herself! 🥹💗<br><br>She had been so worried that one day he might forget her! She had tried to make it easier for him to move on! But somewhere along the way, she discovered something she never expected:<br><br><b>She didn't want to be forgotten!</b><br><br>She wanted to matter! She wanted her presence to mean something and that birthday wish showed her that she already did! ❤️‍🩹<br><br>What had started with confusion, jealousy, and a dramatic attempt to leave… had quietly turned into something neither of them had planned! Something emotional! Something unexpected! Something <b>REAL!!! 💗</b><br><br>What began as a little drama…<br><br>Quietly became a confession!<br><br>And that confession became…<br><br><b>💖 A CONFESSION THAT CHANGED EVERYTHING! 💌</b>",
    melody: [
      { f: 349, d: 0.5 },
      { f: 440, d: 0.5 },
      { f: 523, d: 0.5 },
      { f: 440, d: 0.5 },
      { f: 349, d: 0.5 },
    ],
    spokenHeading: "A Confession That Changed Everything",
  },
  {
    heading: "👶 The Day The World Got You! 🎈🎂",
    theme: "red-theme",
    color: "#ff0000",
    text: "Date: 14th August 2008, Time: Nearly 10:00 AM, Temperature: 29°C (84.2°F), Humidity: 78%–82%, Sky: Mostly Cloudy, Location: Pakistan Navy Ship Shifa (PNS Shifa)<br><br>In December 2007, a couple from Karachi, Mr. Raja Tanveer Ahmed and Mrs. Abida Tanveer, received the wonderful news that they were expecting a baby.✨ They already had a child, but this new blessing brought excitement and curiosity. Would it be a boy or a girl!? They waited patiently, unaware that Allah was preparing to gift them their first daughter!🩷<br><br>Months passed, and then came the day when everything was finally complete! she was complete!💝<br><br>It was the 14th of August, Pakistan's Independence Day!. The country was celebrating, people were enjoying a holiday, and there was a sense of joy in the air.😇 Little did anyone know that another reason for celebration was about to arrive!<br><br>At PNS Shifa, a Pakistan Navy hospital, the procedure of her birth was completed successfully. At that very moment, a Navy parade was taking place outside. It almost felt as if the world itself was celebrating her arrival! While the nation celebrated its independence, a family celebrated the arrival of its newest member!🥳<br><br>What were her first words?<br><br>Well, I wasn't there, so how would I know?🤔<br><br>Maybe something like, 'Wah-wah-wah!'<br><br>Just kidding!🤓<br><br>Like every newborn, she cried. But that cry was the most beautiful sound her parents could have heard. It was the sound that turned them into the happiest parents in the world, because they had just received their first daughter! their first Rehmat!💞<br><br>Soon, they brought her home, where she was welcomed with love, prayers, and countless dreams for her future!💕<br><br>Not long after her arrival, her aunt came from Kuwait carrying a handful of gifts specially for her. The moment she saw the baby, she declared, 'She looks exactly like a doll!'✨<br><br>Unfortunately, someone took that statement a little too seriously!😬<br><br>Her aunt's two-year-old son heard everyone calling the baby a doll and decided to investigate for himself. He quietly entered the room where the baby was resting and, believing she was an actual doll, grabbed both of her legs and pulled them!<br><br>Let's just say he nearly arranged a one-way-ticket to the heaven!💀<br><br>Luckily, her mother walked in at exactly the right moment and shouted before any real harm could be done. Crisis avoided. The baby survived her first unexpected adventure!🥹<br><br>As if that wasn't enough excitement for one newborn, she then developed a habit of sleeping all day. Her mother often says that she had to wake her up just to feed her because she never cried to alert that she was hungry. The baby seemed completely committed to sleeping through everything and trying her best to meet Allah again! Ma Sha Allah!😶<br><br>To be fair, not much has changed.<br><br>Even today, she still seems to have a special talent for sleeping whenever possible.😝<br><br>After surviving an overenthusiastic toddler, endless sleeping sessions, and a few other adventures along the way, one thing became clear: Allah had written much more for her before calling her back!💯<br><br>And that little girl, born on a cloudy Independence Day morning while a Navy parade marched on, would grow up to become a source of joy, memories, laughter, and pride for everyone who knew her! She was never alone!💗<br><br>Perhaps she doesn't remember that day...<br><br>But the day remembers her.<br><br>After all, it was THE DAY THE WORLD GOT HER!🎈🎂",
    melody: [
      { f: 196, d: 0.5 },
      { f: 261, d: 0.5 },
      { f: 329, d: 0.5 },
      { f: 261, d: 0.5 },
      { f: 196, d: 0.5 },
    ],
    spokenHeading: "The Day The World Got You!",
  },
];
const hiddenCardMelody = [
  { f: 261.63, d: 1.0 },
  { f: 293.66, d: 1.0 },
  { f: 329.63, d: 1.0 },
  { f: 349.23, d: 1.0 },
  { f: 392.0, d: 1.0 },
  { f: 440.0, d: 1.0 },
  { f: 493.88, d: 1.0 },
  { f: 523.25, d: 1.0 },
  { f: 392.0, d: 1.0 },
  { f: 329.63, d: 1.0 },
];
const secretMessage = {
  heading: "Someone's Proud Of You! 💙",
  text: "So you finally reached the end of the program huh!? Bohat boring hoga yaar lekin bare dil se banaya hy tumhare liye! tumhari birthday se koi 3 ya 4 mahine pehle sab ready tha! Just the text was missing but finally you got it! THIS IS YOUR WORLD HAJRA! 💞 Ye sab tumhari life ke woh moments hein jo aik turning point thay... FOR YOU!<br><br>Jab dil mein sawal aaye ke 'Mein kon hun!?' to yahan aana! Ye sab parhna! Woh sare din dubara jeena jo tumhe ahsaas dilaeinge ke TUM KON HO! Zindagi se pareshan hojao ya samajh na aaye karna kya hy to bas yahan aakar khudko dhoondna! Ye program tumhe sawal ka jawab shayad na de magar jawab talash karne ka rasta zaroor dikha dega! 🥰<br><br>Ye to hogayi iss program ki baat! Ab aate hein tumhari taraf! KHUSHI HUI!? Kyun hui!? Mein to literally abhi ro raha aur tum khush ho rahi! BATAMEEZ!😒 Chali jaogi yaar tum mujhse door! Jate jate mein tumhe kuch aesa dena chahta tha jo tum kabhi na bhula sako! And do you know ye sab meine tumhare liye kyun banaya!?<br><br>Achi lagti ho tum mujhe! Bohat zyada achi lagti ho! YOU ARE JUST SO PERFECT YAAR!💖 Ye puray 2 saal, mein tumhare baghair shayad survive na kar pata! You were their to support me and provided assistance at every single point! Tumse ghaltiyan huein magar tumne kabhi mera sath nahi chora! Parhayi ke sath sath mujhe bhi apna PRECIOUS TIME diya!🤧<br><br>Janti ho mujhe tumhari konsi quality sabse zyada achi lagti hy!? It's your CALMNESS!❣️ Jese tum har mamla calmly handle kar leti ho mujhse to nahi hota yaar! Phir jab tum kisi ka dil nahi torti! Kisi ko bura nahi kehti! Bas khamosh hojati ho to ye sawal aata hy dil mein kya waqai there exists a person who CAN do all of this!? I don't think so! But you are the only exception of this answer! ❤️🤌🏻<br><br>Kabhi kabhi khud ke bare mein sochti ho ke log tumse kyun pyaar karte hein!? Kya tum iss qabil ho bhi!? Ye self doubts tumhe aate hein I know aur ye completely normal hy yaar! Tum hamesha sochti ho that you didn't do anything for anyone then why do they love me this much!? TUMHE KHUD KESE PATA HOGA WHAT YOU DID!? It's your heart that has so much good in it already ke tum baghair soche itna kuch kardeti ho that in the end tumhe lagta hy ke tumne kuch nahi kiya just because it wasn't voluntary! 🩷<br><br>Phir aata hun mein! Kyun karta hy ye itna kuch mere liye!? Itne achay gifts deta hy aur mein isske mukablay mein isski saal girah tak sahi se nahi manati! Pata hy Hajra tumse sirf chand alfaaz bhi mere liye bohat zyada hein! Again you think meine zyada nahi kiya but bohat zyada kar chuki hoti ho! Ye bas tumhari soch hy! Efforts ko mirror karna effort nahi kehlata effort ko unique karna effort kehlata hy!💞 I hope samajh aaya ho! 😅<br><br>Tumhari parhayi bhi bohat tough hy lekin tumhe aaj tak meine tension mein nahi dekha! You're always so calm in exams and academic pressure ke kabhi kabhi tumse JEALOUS hota hun!😖 Kya kya bataun yaar! Tumne second annual diya! Tum 2nd year ki tayyari bhi kar rahi ho and even MDCAT ke liye bhi prepare kar rahi ho! Kya kya ginwaun yaar! Under all this pressure you still SMILE like everything is totally fine! No Hajra it's not about the pressure, it's about how you always find a way to suppress all that pressure!❤️‍🩹<br><br>Ye sab apni jagah then comes some of your personal battles! Whether it's your aches, family problems or anything else I ALWAYS SEE YOU SMILE YAAR!💕 Tum mere liye aik total inspiration ho! Hajra tum itna sab kese karleti ho yaar!? Doctor bhi banna hy, parents ki umeedon par bhi pura utarna hy! YOU ARE A TOTAL WARRIOR!⚔️🫶🏻<br><br>In the end mein ye bolunga THAT I REALLY REALLYYY LOVE YOU!🧁💗<br><br>All this is pointing to the heading right!? So let's finish it...<br><br>Hajra you are my best girl, my bestfriend and the love of my life!<br><br>And my love! Always remember that even if the world accuses you of what you go through...<br><br>\"SOMEONE'S ALWAYS PROUD OF YOU! 💙'\"",
};
const secretSpokenHeading = "Someone's Proud Of You!";
const questions = [
  {
    q: "Enter the password:",
    options: ["14082026", "14082026ht", "ht14082026", "hajratanveer"],
    answer: "ht14082026",
  },
  {
    q: "Is it's someone's birthday?",
    options: ["Yes", "No", "Probably", "Probably not"],
    answer: "Yes",
  },
  {
    q: "What first nickname you gave me?",
    options: ["Kharus", "Pagal", "SANZ", "Mi Amor"],
    answer: "Mi Amor",
  },
  {
    q: "Which animal do I associate you with?",
    options: ["Sloth", "Panda", "Bear", "Rhino"],
    answer: "Panda",
  },
  {
    q: "Do you love Abdullah?",
    options: ["Yes", "No", "Probably", "Probably not"],
    answer: "Yes",
  },
];
// ==================== PERFORMANCE OPTIMIZATIONS ====================
function throttle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
const throttledConfetti = throttle(createConfetti, 1200);
const throttledSparkles = throttle(createSparkles, 1800);
// Smooth speech queue
let speechQueue = [];
let isSpeaking = false;
let preferredFemaleVoice = null;
let preferredMaleVoice = null;
function queuedSpeak(text, callback = null, isMale = false) {
  speechQueue.push({ text, callback, isMale });
  if (!isSpeaking) processSpeechQueue();
}

function processSpeechQueue() {
  if (speechQueue.length === 0 || isSpeaking) return;
  isSpeaking = true;
  const { text, callback, isMale } = speechQueue.shift();
  const msg = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  let voice = isMale ? preferredMaleVoice : preferredFemaleVoice;
  if (!voice) {
    if (isMale) {
      preferredMaleVoice =
        voices.find(
          (v) =>
            v.name.toLowerCase().includes("david") ||
            v.name.toLowerCase().includes("male") ||
            (v.name.toLowerCase().includes("google") &&
              !v.name.toLowerCase().includes("female")),
        ) || voices.find((v) => v.lang.startsWith("en"));
      voice = preferredMaleVoice;
    } else {
      preferredFemaleVoice =
        voices.find(
          (v) =>
            v.name.toLowerCase().includes("samantha") ||
            v.name.toLowerCase().includes("zira") ||
            v.name.toLowerCase().includes("female") ||
            v.name.toLowerCase().includes("google uk english female"),
        ) || voices.find((v) => v.lang.startsWith("en"));
      voice = preferredFemaleVoice;
    }
  }
  if (voice) msg.voice = voice;
  msg.pitch = isMale ? 0.85 : 1.1;
  msg.rate = 0.98;
  msg.volume = 1.0;
  msg.onend = () => {
    isSpeaking = false;
    if (callback) callback();
    processSpeechQueue();
  };
  msg.onerror = () => {
    isSpeaking = false;
    processSpeechQueue();
  };
  window.speechSynthesis.speak(msg);
}
// ==================== NEW NOTIFICATION SCREEN FUNCTIONS ====================
// Program says now appear exactly like the restart/error screen
function showNotification(icon, title, subtext = "", callback = null) {
  if (!document.fullscreenElement) {
    // Not in fullscreen: show as normal website alert (exactly as a normal website would)
    const message = `${icon} ${title}${subtext ? `\n\n${subtext}` : ""}`;
    alert(message);
    if (callback) callback();
    return;
  }
  // In fullscreen: show full-screen card
  const screen = document.getElementById("notificationScreen");
  document.getElementById("notificationIcon").innerText = icon;
  document.getElementById("notificationText").innerText = title;
  document.getElementById("notificationSubtext").innerText = subtext;
  screen.classList.remove("hidden");
  currentNotificationCallback = callback;
  playSoftClick();
}
function dismissNotification() {
  const screen = document.getElementById("notificationScreen");
  screen.classList.add("hidden");
  const cb = currentNotificationCallback;
  currentNotificationCallback = null;
  if (cb) cb();
}
// ==================== FULLSCREEN & OTHER FUNCTIONS ====================
function toggleFullscreen() {
  playSoftClick();
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}
function stopAllSoundsAndIntervals() {
  window.speechSynthesis.cancel();
  activeOscillators.forEach((osc) => {
    try {
      osc.stop();
    } catch (e) {}
  });
  activeOscillators = [];
  clearInterval(typingInterval);
  clearTimeout(sequenceTimeout1);
  clearTimeout(sequenceTimeout2);
  clearTimeout(sequenceTimeout3);
}
function updateLifeUI() {
  document.getElementById("lifeCounter").innerText = "❤️".repeat(lives);
}
function handleProceedClick() {
  playSoftClick();
  startQuiz();
}
function handleRestartClick() {
  playSoftClick();
  restart();
}
function startQuiz() {
  stopAllSoundsAndIntervals();
  document.getElementById("instructionScreen").classList.add("hidden");
  document.getElementById("topBar").classList.remove("hidden");
  document.getElementById("quizBox").classList.remove("hidden");
  document.getElementById("lifeCounter").classList.remove("hidden");
  updateLifeUI();
  loadQuestion();
}
function loadQuestion() {
  const q = questions[current];
  document.getElementById("qNumber").innerText = "Question " + (current + 1);
  document.getElementById("question").innerText = q.q;
  const div = document.getElementById("options");
  div.innerHTML = "";
  const customCursorEl = document.getElementById("customCursor");
  customCursorEl.style.display = "block";
  customCursorEl.innerText = "💗";
  if (current === 0) {
    const input = document.createElement("input");
    input.type = "password";
    input.id = "passwordInput";
    input.placeholder = "Type password here";
    input.style.width = "85%";
    input.style.padding = "16px 24px";
    input.style.margin = "14px auto";
    input.style.fontSize = "17px";
    input.style.border = "none";
    input.style.borderRadius = "14px";
    input.style.background = "#fff";
    input.style.color = "#333";
    input.style.boxShadow = "0 4px 15px var(--shadow-color)";
    input.style.display = "block";
    if (rememberedPassword) input.value = rememberedPassword;
    div.appendChild(input);
    input.addEventListener("mouseenter", () => {
      customCursorEl.style.display = "none";
    });
    input.addEventListener("mouseleave", () => {
      customCursorEl.style.display = "block";
    });
    const controlsDiv = document.createElement("div");
    controlsDiv.style.width = "85%";
    controlsDiv.style.margin = "14px auto";
    controlsDiv.style.display = "flex";
    controlsDiv.style.gap = "12px";
    controlsDiv.style.alignItems = "center";
    controlsDiv.style.justifyContent = "space-between";
    const eyeBtn = document.createElement("span");
    eyeBtn.className = "top-icon";
    eyeBtn.textContent = "👁️";
    eyeBtn.style.display = "flex";
    eyeBtn.style.alignItems = "center";
    eyeBtn.style.justifyContent = "center";
    eyeBtn.style.width = "45px";
    eyeBtn.style.height = "45px";
    eyeBtn.style.margin = "0";
    const confirmBtn = document.createElement("button");
    confirmBtn.className = "option-btn";
    confirmBtn.textContent = "Confirm";
    confirmBtn.style.flex = "1";
    confirmBtn.style.margin = "0";
    confirmBtn.style.padding = "16px 24px";
    let passwordVisible = false;
    eyeBtn.addEventListener("click", () => {
      passwordVisible = !passwordVisible;
      input.type = passwordVisible ? "text" : "password";
      eyeBtn.textContent = passwordVisible ? "🙈" : "👁️";
      playHover();
    });
    const submitPassword = () => {
      const entered = input.value.trim();
      if (!entered) {
        // Program says now shown as full-screen card (like restart screen)
        showNotification("🐼", "Please enter the password first!", "", () => {
          input.focus();
        });
        return;
      }
      handleAnswer(entered, confirmBtn);
      if (current === 0 && entered !== questions[0].answer) {
        input.value = "";
        input.focus();
      }
    };
    confirmBtn.addEventListener("click", submitPassword);
    confirmBtn.addEventListener("mouseover", playHover);
    eyeBtn.addEventListener("mouseover", playHover);
    eyeBtn.addEventListener("mouseenter", () => {
      customCursorEl.innerText = "🐼";
    });
    eyeBtn.addEventListener("mouseleave", () => {
      customCursorEl.innerText = "💗";
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitPassword();
    });
    controlsDiv.appendChild(eyeBtn);
    controlsDiv.appendChild(confirmBtn);
    div.appendChild(controlsDiv);
  } else {
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => handleAnswer(opt, btn));
      btn.addEventListener("mouseover", playHover);
      div.appendChild(btn);
    });
  }
}
function handleAnswer(selected, btn) {
  if (selected === questions[current].answer) {
    playCorrect();
    if (current === 0) rememberedPassword = selected;
    current++;
    if (current === questions.length) runIdentificationSequence();
    else loadQuestion();
  } else {
    playWrong();
    if (current < questions.length - 1) {
      lives--;
      updateLifeUI();
      if (lives <= 0) {
        if (current === 0) passwordLockoutActive = true;
        document.getElementById("quizBox").classList.add("hidden");
        if (document.fullscreenElement) {
          document.getElementById("errorPage").classList.remove("hidden");
        } else {
          alert(
            "🥺 Identity Verification Failed\n\nYou are someone else. Wish to start again?",
          );
          restart();
        }
      } else {
        // Program says now shown as full-screen card (like restart screen)
        showNotification("❤️", "Wrong answer! You lost a life!", "");
      }
    } else {
      btn.remove();
      // Program says now shown as full-screen card (like restart screen)
      showNotification("🐼", "Are you sure? Try again!", "");
    }
  }
}
function runIdentificationSequence() {
  const quiz = document.getElementById("quizBox");
  const life = document.getElementById("lifeCounter");
  const transScreen = document.getElementById("transitionScreen");
  const transText = document.getElementById("transitionText");
  quiz.classList.add("hidden");
  life.classList.add("hidden");
  transScreen.classList.remove("hidden");
  document.getElementById("customCursor").style.display = "none";
  transText.innerText = "Identifying...";
  transText.classList.add("fluctuate");
  setTimeout(() => {
    transText.classList.remove("fluctuate");
    transText.innerText = "🎉User Identified!🎉";
    queuedSpeak("User Identified");
    setTimeout(() => {
      transText.innerText = "❤️ Welcome Back Hajra ❤️";
      queuedSpeak("Welcome Back Hajra", () => {
        setTimeout(() => {
          transScreen.classList.add("hidden");
          document.getElementById("customCursor").style.display = "block";
          document.getElementById("birthdayPage").classList.remove("hidden");
          throttledSparkles();
          throttledConfetti();
          setTimeout(() => {
            document
              .querySelectorAll(".img-wrapper")
              .forEach((el) => el.classList.add("active-interact"));
            if (!hasInteractedWithImages) {
              document.getElementById("clickPrompt").classList.add("visible");
              queuedSpeak("Click any image");
            }
          }, 3500);
        }, 800);
      });
    }, 2000);
  }, 3000);
}
function revealCard(index, themeData) {
  const card = document.getElementById("birthdayCard");
  const heading = document.getElementById("birthdayHeading");
  const area = document.getElementById("typingArea");
  card.classList.add("revealed");
  if (!document.body.classList.contains("blue-mode")) {
    card.classList.add(themeData.theme);
  }
  heading.innerText = themeData.heading;
  cardViewCounts[index]++;
  typeWriter(area, themeData.text, () => {
    if (clickedImages.size === 4) {
      const secretBtn = document.getElementById("secretOption");
      secretBtn.classList.remove("hidden");
      void secretBtn.offsetWidth;
      secretBtn.classList.add("visible");
    }
  });
  if (index === 0) playBirthdaySong();
  else playCustomTune(themeData.melody);
  throttledConfetti();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function startAIConversationForHidden(onComplete) {
  convoActive = true;
  const convoLines = [
    { speaker: "male", text: "Yes, me!" },
    { speaker: "female", text: "Not You!" },
    {
      speaker: "male",
      text: "I didn't speak anything from the start! Please let me call the heading!?",
    },
    { speaker: "female", text: "Okay! Go Ahead!" },
    {
      speaker: "male",
      text: `Yay! so the heading is... ${secretSpokenHeading}`,
    },
  ];
  let lineIndex = 0;
  function speakLine() {
    if (lineIndex >= convoLines.length || !convoActive) {
      convoActive = false;
      const skipBtn = document.getElementById("skipConvoBtn");
      skipBtn.classList.remove("visible");
      skipBtn.classList.add("hidden");
      if (onComplete) onComplete();
      return;
    }
    const line = convoLines[lineIndex];
    const isMaleLine = line.speaker === "male";
    queuedSpeak(
      line.text,
      () => {
        lineIndex++;
        setTimeout(speakLine, 500);
      },
      isMaleLine,
    );
  }
  speakLine();
}
function handleImageClick(index) {
  stopAllSoundsAndIntervals();
  hasInteractedWithImages = true;
  clickedImages.add(index);
  const card = document.getElementById("birthdayCard");
  const popup = document.getElementById("datePopup");
  const clickPrompt = document.getElementById("clickPrompt");
  const dateText = document.getElementById(`date-${index}`).innerText;
  const themeData = birthdayData[index];
  clickPrompt.classList.remove("visible");
  clickPrompt.style.display = "none";
  popup.classList.remove("active");
  if (!document.body.classList.contains("blue-mode")) {
    card.className = "card";
  } else {
    card.className = "card blue-theme";
  }
  popup.style.textShadow = `0 0 15px ${themeData.color}, 0 0 35px ${themeData.color}`;
  void popup.offsetWidth;
  popup.innerText = dateText;
  popup.classList.add("active");
  const speechText = dateText + ". " + themeData.spokenHeading;
  queuedSpeak(speechText, () => {
    sequenceTimeout1 = setTimeout(() => {
      popup.classList.remove("active");
      sequenceTimeout2 = setTimeout(() => {
        revealCard(index, themeData);
      }, 600);
    }, 500);
  });
}
function handleSecretClick() {
  stopAllSoundsAndIntervals();
  convoActive = false;
  playSoftClick();
  const secretBtn = document.getElementById("secretOption");
  const skipBtn = document.getElementById("skipConvoBtn");
  skipBtn.classList.remove("visible");
  skipBtn.classList.add("hidden");
  const birthdayCard = document.getElementById("birthdayCard");
  const imageCollection = document.getElementById("imageCollection");
  const finalContainer = document.getElementById("finalImageContainer");
  const popup = document.getElementById("datePopup");
  const clickPrompt = document.getElementById("clickPrompt");
  if (currentView === "main") {
    currentView = "hidden_image";
    birthdayCard.classList.remove("revealed");
    popup.classList.remove("active");
    imageCollection.classList.add("hidden");
    clickPrompt.classList.remove("visible");
    clickPrompt.style.display = "none";
    secretBtn.innerText = "Previous Page";
    if (!partySoundPlayed) {
      playPartyHorn();
      partySoundPlayed = true;
      setTimeout(() => {
        if (!secretMessagePlayed) {
          queuedSpeak(
            "Congratulations! You have unlocked the secret part of the program. Get ready to be amazed. Click the image to proceed",
          );
          secretMessagePlayed = true;
        }
        setTimeout(() => {
          birthdayCard.style.display = "none";
          finalContainer.classList.remove("hidden");
          setTimeout(() => {
            finalContainer.classList.add("visible");
          }, 100);
        }, 400);
      }, 4000);
    } else {
      if (!secretMessagePlayed) {
        queuedSpeak(
          "Congratulations! You have unlocked the secret part of the program. Get ready to be amazed. Click the image to proceed",
        );
        secretMessagePlayed = true;
      }
      setTimeout(() => {
        birthdayCard.style.display = "none";
        finalContainer.classList.remove("hidden");
        setTimeout(() => {
          finalContainer.classList.add("visible");
        }, 100);
      }, 400);
    }
  } else if (currentView === "secret_text") {
    currentView = "hidden_image";
    birthdayCard.classList.remove("revealed");
    finalContainer.style.display = "flex";
    secretBtn.innerText = "Previous Page";
    secretBtn.classList.remove("hidden");
    secretBtn.classList.add("visible");
    setTimeout(() => {
      birthdayCard.style.display = "none";
      finalContainer.classList.add("visible");
    }, 400);
  } else if (currentView === "hidden_image") {
    currentView = "main";
    finalContainer.classList.remove("visible");
    birthdayCard.classList.remove("revealed");
    secretBtn.innerText = "Secret Image";
    setTimeout(() => {
      finalContainer.classList.add("hidden");
      birthdayCard.style.display = "block";
      imageCollection.classList.remove("hidden");
      const clickPromptEl = document.getElementById("clickPrompt");
      clickPromptEl.style.display = "block";
      clickPromptEl.classList.add("visible");
    }, 400);
  }
}
function handleSkipConvoClick() {
  stopAllSoundsAndIntervals();
  convoActive = false;
  hiddenConversationPlayed = true;
  const secretBtn = document.getElementById("secretOption");
  const skipBtn = document.getElementById("skipConvoBtn");
  skipBtn.classList.remove("visible");
  skipBtn.classList.add("hidden");
  const card = document.getElementById("birthdayCard");
  card.classList.add("revealed");
  const heading = document.getElementById("birthdayHeading");
  const area = document.getElementById("typingArea");
  heading.innerText = secretMessage.heading;
  secretViewCount++;
  typeWriter(area, secretMessage.text, () => {
    secretBtn.classList.remove("hidden");
    void secretBtn.offsetWidth;
    secretBtn.classList.add("visible");
    secretBtn.innerText = "Previous Page";
  });
  playCustomTune(hiddenCardMelody);
  throttledConfetti();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function handleHiddenImageClick() {
  stopAllSoundsAndIntervals();
  const card = document.getElementById("birthdayCard");
  const finalContainer = document.getElementById("finalImageContainer");
  const secretBtn = document.getElementById("secretOption");
  document.body.classList.add("blue-mode");
  document.getElementById("main-img-0").src = "images/img1-blue.webp";
  document.getElementById("main-img-1").src = "images/img2-blue.webp";
  document.getElementById("main-img-2").src = "images/img3-blue.webp";
  document.getElementById("main-img-3").src = "images/img4-blue.webp";
  document.getElementById("hidden-img").src = "images/hidden-blue.webp";
  currentView = "secret_text";
  finalContainer.classList.remove("visible");
  secretBtn.classList.remove("visible");
  secretBtn.classList.add("hidden");
  if (!skipConvoShown) {
    const skipBtn = document.getElementById("skipConvoBtn");
    skipBtn.classList.remove("hidden");
    void skipBtn.offsetWidth;
    skipBtn.classList.add("visible");
    skipConvoShown = true;
  }
  const revealFinalCard = () => {
    sequenceTimeout2 = setTimeout(() => {
      card.classList.add("revealed");
      const heading = document.getElementById("birthdayHeading");
      const area = document.getElementById("typingArea");
      heading.innerText = secretMessage.heading;
      secretViewCount++;
      typeWriter(area, secretMessage.text, () => {
        secretBtn.classList.remove("hidden");
        void secretBtn.offsetWidth;
        secretBtn.classList.add("visible");
        secretBtn.innerText = "Previous Page";
      });
      playCustomTune(hiddenCardMelody);
      throttledConfetti();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  setTimeout(() => {
    finalContainer.style.display = "none";
    card.style.display = "block";
    card.className = "card blue-theme";
    if (!finalMessagePlayed) {
      finalMessagePlayed = true;
      queuedSpeak(
        "My work here is done! Now the words appearing will be from someone else… maybe someone special!",
        () => {
          if (!hiddenConversationPlayed) {
            hiddenConversationPlayed = true;
            startAIConversationForHidden(revealFinalCard);
          } else {
            revealFinalCard();
          }
        },
      );
    } else {
      if (!hiddenConversationPlayed) {
        hiddenConversationPlayed = true;
        startAIConversationForHidden(revealFinalCard);
      } else {
        revealFinalCard();
      }
    }
  }, 400);
}
function typeWriter(element, text, onComplete) {
  element.innerHTML = text;
  element.classList.remove("typing");
  if (onComplete) onComplete();
}
function playCustomTune(notes) {
  let time = audioCtx.currentTime;
  notes.forEach((n) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.frequency.setValueAtTime(n.f, time);
    g.gain.setValueAtTime(0.1, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + n.d);
    osc.connect(g).connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + n.d);
    activeOscillators.push(osc);
    time += n.d;
  });
}
function playPartyHorn() {
  let time = audioCtx.currentTime;
  const hornNotes = [
    { f: 523, d: 0.3 },
    { f: 659, d: 0.3 },
    { f: 784, d: 0.5 },
    { f: 880, d: 0.3 },
    { f: 1046, d: 0.6 },
    { f: 784, d: 0.3 },
    { f: 880, d: 0.3 },
    { f: 1046, d: 0.5 },
    { f: 523, d: 0.3 },
    { f: 659, d: 0.3 },
    { f: 784, d: 0.8 },
    { f: 523, d: 0.6 },
  ];
  hornNotes.forEach((n, i) => {
    const osc = audioCtx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(n.f, time);
    const g = audioCtx.createGain();
    g.gain.setValueAtTime(0.35, time);
    g.gain.exponentialRampToValueAtTime(0.001, time + n.d);
    osc.connect(g).connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + n.d);
    activeOscillators.push(osc);
    time += n.d * 0.85;
  });
}
function playHover() {
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(1200, now);
  osc.frequency.exponentialRampToValueAtTime(900, now + 0.05);
  gain.gain.setValueAtTime(0.0, now);
  gain.gain.linearRampToValueAtTime(0.08, now + 0.01);
  gain.gain.linearRampToValueAtTime(0.0, now + 0.12);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.15);
}
function playSoftClick() {
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(400, now);
  osc.frequency.exponentialRampToValueAtTime(10, now + 0.15);
  g.gain.setValueAtTime(0.15, now);
  g.gain.linearRampToValueAtTime(0.0, now + 0.15);
  osc.connect(g).connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.15);
}
function playCorrect() {
  const now = audioCtx.currentTime;
  [523, 659, 784].forEach((f, i) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.frequency.setValueAtTime(f, now + i * 0.12);
    g.gain.setValueAtTime(0.0, now + i * 0.12);
    g.gain.linearRampToValueAtTime(0.12, now + i * 0.12 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.45);
    osc.connect(g).connect(audioCtx.destination);
    osc.start(now + i * 0.12);
    osc.stop(now + i * 0.12 + 0.5);
  });
}
function playWrong() {
  const now = audioCtx.currentTime;
  [440, 392, 330].forEach((f, i) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.frequency.setValueAtTime(f, now + i * 0.11);
    g.gain.setValueAtTime(0.0, now + i * 0.11);
    g.gain.linearRampToValueAtTime(0.1, now + i * 0.11 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.11 + 0.38);
    osc.connect(g).connect(audioCtx.destination);
    osc.start(now + i * 0.11);
    osc.stop(now + i * 0.11 + 0.42);
  });
}
function playBirthdaySong() {
  const melody = [
    { freq: 264, dur: 0.4 },
    { freq: 264, dur: 0.2 },
    { freq: 297, dur: 0.6 },
    { freq: 264, dur: 0.6 },
    { freq: 352, dur: 0.6 },
    { freq: 330, dur: 1.2 },
    { freq: 264, dur: 0.4 },
    { freq: 264, dur: 0.2 },
    { freq: 297, dur: 0.6 },
    { freq: 264, dur: 0.6 },
  ];
  let time = audioCtx.currentTime;
  melody.forEach((note) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.setValueAtTime(note.freq, time);
    gain.gain.setValueAtTime(0.15, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + note.dur - 0.05);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + note.dur);
    activeOscillators.push(osc);
    time += note.dur;
  });
}
function createSparkles() {
  const container = document.querySelector(".sparkles");
  for (let i = 0; i < 5; i++) {
    const el = document.createElement("div");
    el.className = "sparkle";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    el.style.animationDelay = Math.random() * 2.5 + "s";
    container.appendChild(el);
  }
}
function createConfetti() {
  const container = document.getElementById("confetti");
  const colors = ["#ff1493", "#ff69b4", "#ffb3d9", "#ffd1e0", "#00bfff"];
  for (let i = 0; i < 12; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.style.setProperty(
      "--color",
      colors[Math.floor(Math.random() * colors.length)],
    );
    piece.style.setProperty("--delay", Math.random() * 1.6 + "s");
    piece.style.setProperty("--rot", Math.random() * 720 - 360 + "deg");
    piece.style.left = Math.random() * 100 + "%";
    container.appendChild(piece);
  }
}
function createClickHeart(x, y) {
  for (let i = 0; i < 4; i++) {
    const heart = document.createElement("div");
    heart.className = "click-heart";
    heart.innerText = Math.random() > 0.5 ? "💗" : "✨";
    heart.style.left = x + Math.random() * 50 - 25 + "px";
    heart.style.top = y + Math.random() * 30 - 15 + "px";
    heart.style.animationDelay = i * 0.04 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}
function refreshPage() {
  stopAllSoundsAndIntervals();
  window.location.reload();
}
function restart() {
  current = 0;
  lives = 3;
  updateLifeUI();
  document.getElementById("errorPage").classList.add("hidden");
  document.getElementById("quizBox").classList.remove("hidden");
  document.getElementById("lifeCounter").classList.remove("hidden");
  loadQuestion();
  if (passwordLockoutActive) {
    start30SecondLock();
    passwordLockoutActive = false;
  }
}
function start30SecondLock() {
  const optionsDiv = document.getElementById("options");
  const timerEl = document.createElement("p");
  timerEl.id = "lockTimer";
  timerEl.style.textAlign = "center";
  timerEl.style.color = "#ff0000";
  timerEl.style.fontSize = "1.25rem";
  timerEl.style.fontWeight = "bold";
  timerEl.style.margin = "12px 0";
  timerEl.innerHTML = `🔒 Password locked for <span id="lockCountdown">30</span> seconds after lives ran out...`;
  optionsDiv.insertBefore(timerEl, optionsDiv.firstChild);
  const input = document.getElementById("passwordInput");
  const confirmBtn = optionsDiv.querySelector("button.option-btn");
  const eyeBtn = optionsDiv.querySelector(".top-icon");
  if (input) input.disabled = true;
  if (confirmBtn) confirmBtn.disabled = true;
  if (eyeBtn) eyeBtn.style.pointerEvents = "none";
  let timeLeft = 30;
  const countdownSpan = document.getElementById("lockCountdown");
  const interval = setInterval(() => {
    timeLeft--;
    if (countdownSpan) countdownSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(interval);
      timerEl.remove();
      if (input) {
        input.disabled = false;
        input.focus();
      }
      if (confirmBtn) confirmBtn.disabled = false;
      if (eyeBtn) eyeBtn.style.pointerEvents = "auto";
    }
  }, 1000);
}
// ==================== DOM READY ====================
document.addEventListener("DOMContentLoaded", () => {
  const customCursor = document.getElementById("customCursor");
  document.getElementById("customCursor").style.display = "none";
  document.addEventListener("mousemove", (e) => {
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
  });
  document.addEventListener("mouseover", (e) => {
    if (
      e.target.classList.contains("option-btn") ||
      e.target.classList.contains("secret-btn")
    )
      customCursor.innerText = "🧁";
  });
  document.addEventListener("mouseout", (e) => {
    if (
      e.target.classList.contains("option-btn") ||
      e.target.classList.contains("secret-btn")
    )
      customCursor.innerText = "💗";
  });
  document
    .querySelectorAll(
      ".top-icon, .top-control-btn, .restart-btn, .instruction-btn",
    )
    .forEach((el) => {
      el.addEventListener("mouseenter", () => {
        customCursor.innerText = "🐼";
      });
      el.addEventListener("mouseleave", () => {
        customCursor.innerText = "💗";
      });
    });
  document.querySelectorAll(".side-img").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      customCursor.innerText = "🎂";
    });
    el.addEventListener("mouseleave", () => {
      customCursor.innerText = "💗";
    });
  });
  document.addEventListener("click", (e) => {
    const excludedClasses = [
      "option-btn",
      "secret-btn",
      "restart-btn",
      "instruction-btn",
    ];
    if (
      excludedClasses.some((cls) => e.target.classList.contains(cls)) ||
      e.target.tagName === "BUTTON"
    )
      return;
    createClickHeart(e.clientX, e.clientY);
  });
  const intro = document.getElementById("introScreen");
  intro.addEventListener("animationend", (e) => {
    if (e.animationName === "introFadeOut") {
      intro.style.display = "none";
      document.getElementById("customCursor").style.display = "block";
      const instructionScreen = document.getElementById("instructionScreen");
      const proceedBtn = document.getElementById("proceedBtn");
      const listItems = Array.from(
        document.querySelectorAll("#instructionList li"),
      ).map((li) => li.innerText);
      const speechText =
        "hello user! this is cupcake cutie assistant. " + listItems.join(". ");
      instructionScreen.classList.remove("hidden");
      setTimeout(() => {
        queuedSpeak(speechText, () => {
          proceedBtn.innerText = "Proceed";
        });
      }, 600);
    }
  });
});
window.speechSynthesis.onvoiceschanged = () => {
  window.speechSynthesis.getVoices();
};
