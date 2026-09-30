(() => {
  const QUESTIONS = [
    {q:'우리 학교의 정확한 이름은 무엇일까요?',o:['배곧중학교','해솔중학교','배곧해솔중학교','배곧해솔고등학교'],a:2},
    {q:'배곧해솔중학교가 위치한 도시는 어디일까요?',o:['안산시','시흥시','광명시','화성시'],a:1},
    {q:"학교 이름의 '배곧'은 어떤 뜻일까요?",o:['바닷가','배움터','소나무 숲','밝은 햇살'],a:1},
    {q:"학교 이름의 '해솔'이 뜻하는 것은 무엇일까요?",o:['해와 소나무','해와 바다','달과 소나무','해와 꽃'],a:0},
    {q:'배곧해솔중학교의 교훈은 무엇일까요?',o:['사랑, 봉사','존중, 성실','협동, 창의','정직, 용기'],a:1},
    {q:'우리 학교의 교목은 무엇일까요?',o:['은행나무','느티나무','소나무','단풍나무'],a:2},
    {q:'우리 학교의 교화는 무엇일까요?',o:['장미','해바라기','무궁화','개나리'],a:1},
    {q:'학교 교표는 어떤 말의 초성을 활용해 만들었을까요?',o:['배곧','해솔','중학교','시흥'],a:1},
    {q:'교표에 형상화되어 있는 두 가지는 무엇일까요?',o:['달과 별','해와 솔','책과 연필','바다와 배'],a:1},
    {q:'교표 속 푸른 소나무가 나타내는 모습과 가장 가까운 것은?',o:['빠르게 달리는 학생','꾸준히 배우고 성장하는 학생','운동을 잘하는 학생','시험 점수가 높은 학생'],a:1},
    {q:'교화인 해바라기에 담긴 의미와 가장 가까운 것은?',o:['배움을 실천해 세상의 빛이 되는 사람','항상 해만 바라보는 사람','꽃을 잘 가꾸는 사람','여름을 좋아하는 사람'],a:0},
    {q:'배곧해솔중학교가 지향하는 학교의 모습은 무엇일까요?',o:['경쟁으로 앞서가는 강한 학교','소통과 존중으로 함께 성장하는 행복한 학교','공부만을 가장 중요하게 생각하는 학교','체육 활동을 중심으로 운영하는 학교'],a:1},
    {q:'학교 인사말에서 교육가족이 실현하고자 하는 가치에 해당하지 않는 것은?',o:['존중','협업','배려','경쟁 우선'],a:3},
    {q:'학교 인사말에서 학생들이 성장하기를 바라는 모습은 무엇일까요?',o:['건강한 세계 시민','전문 운동선수','유명 연예인','사업가'],a:0},
    {q:"'배곧해솔'이라는 이름에 담긴 뜻과 가장 가까운 것은?",o:['잘 배우고 성장하여 오래도록 푸르게 빛나는 사람이 되자','바닷가에서 즐겁게 생활하자','자연을 보호하는 사람이 되자','운동을 통해 건강해지자'],a:0},
    {q:'배곧해솔중학교가 설립인가를 받은 연도는 언제일까요?',o:['2016년','2017년','2018년','2019년'],a:1},
    {q:'학교 설립인가 당시 일반학급 수는 몇 학급이었을까요?',o:['29학급','35학급','39학급','45학급'],a:2},
    {q:'학교 설립인가 당시 특수학급 수는 몇 학급이었을까요?',o:['1학급','2학급','3학급','4학급'],a:1},
    {q:'설립인가 당시 일반학급과 특수학급을 합하면 몇 학급이었을까요?',o:['39학급','40학급','41학급','42학급'],a:2},
    {q:'배곧해솔중학교가 개교한 연도는 언제일까요?',o:['2017년','2018년','2019년','2020년'],a:2},
    {q:'학교연혁 기준 배곧해솔중학교 개교일은 언제일까요?',o:['2019년 3월 2일','2019년 6월 1일','2019년 9월 2일','2019년 11월 1일'],a:2},
    {q:'개교 당시 전입한 학생 수는 몇 명이었을까요?',o:['18명','28명','38명','48명'],a:2},
    {q:'개교 당시 학급 수는 몇 학급이었을까요?',o:['2학급','3학급','4학급','6학급'],a:1},
    {q:'초대 교장 선생님의 성함은 무엇일까요?',o:['이미경','정혜진','이해숙','윤순희'],a:0},
    {q:'첫 입교식은 언제 열렸을까요?',o:['2019년 9월 1일','2019년 10월 1일','2019년 11월 1일','2020년 1월 7일'],a:2},
    {q:'첫 입교식 당시 1·2·3학년을 합한 학급 수는 몇 학급이었을까요?',o:['4학급','5학급','6학급','7학급'],a:2},
    {q:'제1회 졸업식의 졸업생 수는 몇 명이었을까요?',o:['4명','14명','24명','40명'],a:0},
    {q:'2020학년도 제1회 입학식의 입학생 수는 몇 명이었을까요?',o:['396명','419명','439명','477명'],a:2},
    {q:'제3대 교장 선생님의 성함은 무엇일까요?',o:['이미경','정혜진','이해숙','윤순희'],a:2},
    {q:'2025년 9월 1일 취임한 제4대 교장 선생님은 누구일까요?',o:['이미경','정혜진','이해숙','윤순희'],a:3},
    {q:'2026년 기준 1학년은 몇 학급일까요?',o:['13학급','14학급','15학급','16학급'],a:2},
    {q:'2026년 기준 2학년은 몇 학급일까요?',o:['12학급','13학급','14학급','15학급'],a:2},
    {q:'2026년 기준 3학년은 몇 학급일까요?',o:['12학급','13학급','14학급','15학급'],a:2},
    {q:'2026년 기준 1학년 전체 학생 수는 몇 명일까요?',o:['411명','424명','450명','477명'],a:2},
    {q:'2026년 기준 2학년 전체 학생 수는 몇 명일까요?',o:['396명','411명','424명','450명'],a:2},
    {q:'2026년 기준 3학년 전체 학생 수는 몇 명일까요?',o:['396명','411명','424명','450명'],a:1},
    {q:'2026년 기준 전교생은 모두 몇 명일까요?',o:['1,185명','1,245명','1,285명','1,385명'],a:2},
    {q:'세 학년 가운데 학생 수가 가장 많은 학년은?',o:['1학년','2학년','3학년','세 학년 모두 같다'],a:0},
    {q:'2026년 기준 전교 남학생 수는 몇 명일까요?',o:['620명','630명','655명','685명'],a:2},
    {q:'2026년 기준 전교 여학생 수는 몇 명일까요?',o:['610명','630명','655명','680명'],a:1},
    {q:'1학년 남학생 수는 몇 명일까요?',o:['207명','220명','222명','228명'],a:3},
    {q:'2026년 기준 전체 교직원 수는 몇 명일까요?',o:['91명','103명','113명','123명'],a:2},
    {q:'2026년 기준 교원 소계는 몇 명일까요?',o:['81명','91명','101명','113명'],a:1},
    {q:'배곧해솔중학교의 도로명 주소는 무엇일까요?',o:['시흥시 배곧로 150-23','시흥시 서울대학로 150-23','시흥시 정왕대로 150-23','시흥시 오이도로 150-23'],a:1},
    {q:"학교 홈페이지 '학생마당'에서 볼 수 있는 메뉴는 무엇일까요?",o:['자유게시판','온라인쇼핑','여행예약','게임게시판'],a:0},
    {q:"다음 중 '학생마당'에 있는 상담 메뉴는 무엇일까요?",o:['진로취업상담실만 있다','사이버상담실만 있다','학교폭력상담실만 있다','사이버상담실과 학교폭력상담실이 모두 있다'],a:3},
    {q:'학교 홈페이지에서 급식 메뉴를 확인하려면 어느 메뉴를 이용할 수 있을까요?',o:['이달의 식단','운동부 기록','학교신문만 보기','학교재정공개만 보기'],a:0},
    {q:"다음 중 학교 홈페이지 '학교소개'에 포함되지 않는 메뉴는?",o:['학교연혁','학교상징','학교현황','온라인 쇼핑몰'],a:3},
    {q:'학교 홈페이지 학사일정에서 제공하는 보기 방식이 아닌 것은?',o:['리스트','캘린더','주간일정','위성지도'],a:3},
    {q:'학교 교무실 전화번호는 무엇일까요?',o:['031-8063-1800','031-8063-1890','031-8063-1899','031-8063-1900'],a:0}
  ];

  const el = {
    display: document.querySelector('#displayText'),
    reels: [...document.querySelectorAll('.reel')],
    heart: document.querySelector('#heartButton'),
    lever: document.querySelector('#lever'),
    leverWrap: document.querySelector('#leverWrap'),
    instruction: document.querySelector('#instruction'),
    layer: document.querySelector('#quizLayer'),
    number: document.querySelector('#quizNumber'),
    question: document.querySelector('#quizQuestion'),
    options: document.querySelector('#quizOptions'),
    feedback: document.querySelector('#quizFeedback'),
    next: document.querySelector('#nextButton')
  };

  const labels = ['①','②','③','④'];
  let spinning = false;
  let spinTimer = null;
  let deck = [];
  let currentQuestion = null;
  let answered = false;
  let dragStartY = null;

  el.layer.hidden = true;

  function shuffleDeck() {
    deck = QUESTIONS.map((_,i)=>i);
    for(let i=deck.length-1;i>0;i--) {
      const j=Math.floor(Math.random()*(i+1));
      [deck[i],deck[j]]=[deck[j],deck[i]];
    }
  }

  function randomNumber() {
    return Math.floor(Math.random()*QUESTIONS.length)+1;
  }

  function paintReels(numbers) {
    el.reels.forEach((reel,i)=>{
      reel.querySelector('b').textContent=String(numbers[i]).padStart(2,'0');
    });
  }

  function startSpin() {
    if(spinning || !el.layer.hidden) return;
    spinning = true;
    el.heart.disabled = false;
    el.display.textContent = 'SPINNING';
    el.instruction.textContent = '문제가 돌아가고 있어요! 하트를 눌러 멈추세요.';
    el.reels.forEach(r=>r.classList.add('spinning'));
    clearInterval(spinTimer);
    spinTimer=setInterval(()=>paintReels([randomNumber(),randomNumber(),randomNumber()]),85);
    el.lever.classList.add('pulled');
    setTimeout(()=>el.lever.classList.remove('pulled'),360);
    if('vibrate' in navigator) navigator.vibrate?.(35);
  }

  function chooseQuestion() {
    if(!deck.length) shuffleDeck();
    const index=deck.pop();
    currentQuestion={...QUESTIONS[index], index};
    return index;
  }

  function stopSpin() {
    if(!spinning) return;
    spinning=false;
    clearInterval(spinTimer);
    el.reels.forEach(r=>r.classList.remove('spinning'));
    el.heart.disabled=true;
    const index=chooseQuestion();
    const n=index+1;
    paintReels([Math.max(1,n-1),n,Math.min(QUESTIONS.length,n+1)]);
    el.display.textContent=`QUIZ ${String(n).padStart(2,'0')}`;
    el.instruction.textContent='문제가 선택되었습니다!';
    setTimeout(showQuiz,360);
    if('vibrate' in navigator) navigator.vibrate?.([35,25,55]);
  }

  function showQuiz() {
    answered=false;
    el.number.textContent=`QUIZ ${String(currentQuestion.index+1).padStart(2,'0')} / ${QUESTIONS.length}`;
    el.question.textContent=currentQuestion.q;
    el.options.innerHTML='';
    el.feedback.textContent='';
    el.feedback.className='quiz-feedback';
    el.next.hidden=true;
    currentQuestion.o.forEach((text,i)=>{
      const b=document.createElement('button');
      b.type='button';
      b.className='quiz-option';
      b.textContent=`${labels[i]} ${text}`;
      b.addEventListener('click',()=>answer(i,b));
      el.options.appendChild(b);
    });
    el.layer.hidden=false;
    requestAnimationFrame(()=>el.options.querySelector('button')?.focus());
  }

  function answer(i,button) {
    if(answered) return;
    if(i===currentQuestion.a) {
      answered=true;
      button.classList.add('correct');
      [...el.options.children].forEach((b,idx)=>{b.disabled=true;if(idx!==i)b.classList.add('dim')});
      el.feedback.textContent='정답입니다! 🎉';
      el.feedback.className='quiz-feedback good';
      el.next.hidden=false;
      if('vibrate' in navigator) navigator.vibrate?.([30,20,50]);
    } else {
      button.classList.add('wrong');
      button.disabled=true;
      el.feedback.textContent='아쉽습니다. 다른 답을 골라보세요!';
      el.feedback.className='quiz-feedback bad';
      if('vibrate' in navigator) navigator.vibrate?.(25);
    }
  }

  function resetMachine() {
    el.layer.hidden=true;
    el.display.textContent='READY';
    el.instruction.textContent='오른쪽 레버를 아래로 당기거나 눌러 시작하세요.';
    paintReels([1,18,37]);
  }

  el.heart.addEventListener('click', stopSpin);
  el.next.addEventListener('click', resetMachine);
  el.lever.addEventListener('click', startSpin);

  el.lever.addEventListener('pointerdown',e=>{
    dragStartY=e.clientY;
    try{el.lever.setPointerCapture(e.pointerId)}catch(_){}
  });
  el.lever.addEventListener('pointermove',e=>{
    if(dragStartY===null || spinning) return;
    const dy=Math.max(0,Math.min(80,e.clientY-dragStartY));
    el.lever.style.transform=`translateY(${dy}px)`;
  });
  function endDrag(e) {
    if(dragStartY===null) return;
    const dy=Math.max(0,e.clientY-dragStartY);
    dragStartY=null;
    el.lever.style.transform='';
    try{el.lever.releasePointerCapture(e.pointerId)}catch(_){}
    if(dy>34) startSpin();
  }
  el.lever.addEventListener('pointerup',endDrag);
  el.lever.addEventListener('pointercancel',()=>{dragStartY=null;el.lever.style.transform=''});

  document.addEventListener('keydown',e=>{
    if(!el.layer.hidden) return;
    if(e.key==='Enter' && !spinning) startSpin();
    if((e.key===' ' || e.key==='Enter') && spinning){e.preventDefault();stopSpin()}
  });

  shuffleDeck();
  paintReels([1,18,37]);
})();
