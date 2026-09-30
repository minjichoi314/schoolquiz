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

  const BALL_COLORS = ['lavender','sky','ice','periwinkle','aqua'];
  const BALL_POSITIONS = [
    [0,57],[13,43],[26,58],[39,42],[52,56],[65,44],[78,58],
    [6,76],[19,70],[32,78],[45,69],[58,78],[71,70],[84,77],
    [12,30],[29,34],[46,29],[63,33],[80,31],[39,82]
  ];

  const el = {
    claw: document.querySelector('#claw'), verticalGuide: document.querySelector('#verticalGuide'),
    ballPit: document.querySelector('#ballPit'), joystick: document.querySelector('#joystick'),
    joyBall: document.querySelector('#joyBall'), joyShaft: document.querySelector('#joyShaft'),
    up: document.querySelector('#upButton'), down: document.querySelector('#downButton'),
    left: document.querySelector('#leftButton'), right: document.querySelector('#rightButton'),
    grab: document.querySelector('#grabButton'), result: document.querySelector('#resultLayer'),
    quizNumber: document.querySelector('#quizNumber'), quizProgress: document.querySelector('#quizProgress'),
    quizQuestion: document.querySelector('#quizQuestion'), quizOptions: document.querySelector('#quizOptions'),
    quizFeedback: document.querySelector('#quizFeedback'), continue: document.querySelector('#continueButton')
  };

  el.result.hidden = true;
  let x = 50, y = 18, busy = false, dragging = false, activeBalls = [];
  let questionDeck = [], currentQuestion = null, answered = false;
  const clamp = (v,min,max) => Math.max(min,Math.min(max,v));
  const labels = ['①','②','③','④'];

  function renderClaw(){
    el.claw.style.left = `${x}%`;
    el.claw.style.top = `${y}px`;
    el.verticalGuide.style.left = `${x}%`;
    el.verticalGuide.style.height = `${Math.max(80, y + 90)}px`;
  }

  function createBalls(){
    el.ballPit.innerHTML = '';
    activeBalls = BALL_POSITIONS.map((pos,i)=>{
      const node = document.createElement('div');
      node.className = 'ball';
      node.dataset.color = BALL_COLORS[i % BALL_COLORS.length];
      node.style.left = `${pos[0]}%`;
      node.style.top = `${pos[1]}%`;
      el.ballPit.appendChild(node);
      return {x:pos[0]+8.25,y:pos[1]+8.25,color:node.dataset.color,node};
    });
  }

  function move(dx,dy,btn){
    if(busy) return;
    x = clamp(x+dx,13,87);
    y = clamp(y+dy,18,120);
    renderClaw();
    if(btn){btn.classList.add('active');setTimeout(()=>btn.classList.remove('active'),110)}
  }

  function joystickFromPointer(e){
    const r = el.joystick.getBoundingClientRect();
    const cx = r.left + r.width/2, cy = r.top + r.height*.64;
    let dx = e.clientX-cx, dy=e.clientY-cy;
    const max=31, d=Math.hypot(dx,dy);
    if(d>max){dx=dx/d*max;dy=dy/d*max}
    el.joyBall.style.transform=`translate(${dx}px,${dy}px)`;
    el.joyShaft.style.transform=`rotate(${dx*.22}deg)`;
    x = clamp(50 + dx/max*37,13,87);
    y = clamp(58 + dy/max*62,18,120);
    renderClaw();
  }
  function resetJoystick(){el.joyBall.style.transform='translate(0,0)';el.joyShaft.style.transform='rotate(0deg)'}

  function nearestBall(){
    if(!activeBalls.length) return null;
    const tx=((x-7)/86)*100;
    const ty=clamp(((y-18)/102)*68+27,27,95);
    let best=null,dist=Infinity;
    for(const b of activeBalls){const d=Math.hypot(b.x-tx,(b.y-ty)*.78);if(d<dist){dist=d;best=b}}
    return dist<=16 ? best : null;
  }

  function refillDeck(){
    questionDeck = QUESTIONS.map((_,i)=>i);
    for(let i=questionDeck.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [questionDeck[i],questionDeck[j]]=[questionDeck[j],questionDeck[i]];
    }
  }

  function nextQuestion(){
    if(!questionDeck.length) refillDeck();
    const index=questionDeck.pop();
    currentQuestion={...QUESTIONS[index],index};
    answered=false;
    el.quizNumber.textContent=`QUIZ ${String(index+1).padStart(2,'0')}`;
    el.quizProgress.textContent=`${index+1} / ${QUESTIONS.length}`;
    el.quizQuestion.textContent=currentQuestion.q;
    el.quizFeedback.textContent='';
    el.quizFeedback.className='quiz-feedback';
    el.continue.hidden=true;
    el.quizOptions.innerHTML='';

    currentQuestion.o.forEach((option,optionIndex)=>{
      const button=document.createElement('button');
      button.type='button';
      button.className='quiz-option';
      button.textContent=`${labels[optionIndex]} ${option}`;
      button.addEventListener('click',()=>chooseAnswer(optionIndex,button));
      el.quizOptions.appendChild(button);
    });
  }

  function chooseAnswer(optionIndex,button){
    if(answered) return;
    const buttons=[...el.quizOptions.querySelectorAll('.quiz-option')];
    if(optionIndex===currentQuestion.a){
      answered=true;
      button.classList.add('correct');
      buttons.forEach((b,i)=>{b.disabled=true;if(i!==optionIndex)b.classList.add('dim')});
      el.quizFeedback.textContent='정답입니다! 🎉';
      el.quizFeedback.className='quiz-feedback good';
      el.continue.hidden=false;
      if('vibrate' in navigator) navigator.vibrate?.([35,25,55]);
    } else {
      button.classList.add('wrong');
      button.disabled=true;
      el.quizFeedback.textContent='아쉽습니다. 다른 답을 골라보세요!';
      el.quizFeedback.className='quiz-feedback bad';
      if('vibrate' in navigator) navigator.vibrate?.(30);
    }
  }

  function showQuiz(){
    nextQuestion();
    el.result.hidden=false;
    requestAnimationFrame(()=>el.quizOptions.querySelector('button')?.focus());
  }

  async function grab(){
    if(busy || !el.result.hidden) return;
    busy=true;el.grab.classList.add('pressed');el.claw.classList.add('grabbing');
    const down=clamp(250-y,100,225);
    const a=el.claw.animate([
      {transform:'translateX(-50%) translateY(0)'},
      {transform:`translateX(-50%) translateY(${down}px)`,offset:.48},
      {transform:`translateX(-50%) translateY(${down}px)`,offset:.67},
      {transform:'translateX(-50%) translateY(0)'}
    ],{duration:1250,easing:'cubic-bezier(.45,0,.25,1)'});
    const cable=el.claw.querySelector('.claw-cable');
    cable.animate([{transform:'scaleY(1)'},{transform:'scaleY(2.8)',offset:.48},{transform:'scaleY(2.8)',offset:.67},{transform:'scaleY(1)'}],{duration:1250,easing:'cubic-bezier(.45,0,.25,1)'});
    await a.finished.catch(()=>{});
    const ball=nearestBall();
    if(ball){
      ball.node.classList.add('caught');
      activeBalls=activeBalls.filter(b=>b!==ball);
      setTimeout(showQuiz,220);
    }
    if('vibrate' in navigator) navigator.vibrate?.(ball?[35,25,55]:35);
    el.claw.classList.remove('grabbing');el.grab.classList.remove('pressed');busy=false;
  }

  el.left.addEventListener('click',()=>move(-6,0,el.left));
  el.right.addEventListener('click',()=>move(6,0,el.right));
  el.up.addEventListener('click',()=>move(0,-10,el.up));
  el.down.addEventListener('click',()=>move(0,10,el.down));
  el.grab.addEventListener('click',grab);
  el.continue.addEventListener('click',()=>{el.result.hidden=true;});

  el.joystick.addEventListener('pointerdown',e=>{if(busy)return;dragging=true;el.joystick.setPointerCapture(e.pointerId);joystickFromPointer(e)});
  el.joystick.addEventListener('pointermove',e=>{if(dragging&&!busy)joystickFromPointer(e)});
  const end=e=>{if(!dragging)return;dragging=false;try{el.joystick.releasePointerCapture(e.pointerId)}catch(_){}resetJoystick()};
  el.joystick.addEventListener('pointerup',end);el.joystick.addEventListener('pointercancel',end);

  document.addEventListener('keydown',e=>{
    if(!el.result.hidden){
      if(e.key==='Escape' && answered){e.preventDefault();el.result.hidden=true}
      return;
    }
    const k=e.key.toLowerCase();
    if(['arrowleft','arrowright','arrowup','arrowdown',' '].includes(k))e.preventDefault();
    if(k==='arrowleft')move(-4,0,el.left);if(k==='arrowright')move(4,0,el.right);if(k==='arrowup')move(0,-8,el.up);if(k==='arrowdown')move(0,8,el.down);if(k===' ')grab();
  },{passive:false});

  refillDeck();
  createBalls();
  renderClaw();
})();
