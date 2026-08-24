/* 토닥토닥 전시 이야기 — 전단지 뜯기 탭 + 모달 */

const grandmothersData = [
  {
    "name": "김명희",
    "stories": [
      {
        "title": "어린 시절 기억",
        "content": "저는 대전 시내에 살았습니다.\n학교에 가고 친구들과 고무줄놀이 하고 바둑판 던지기도 하고..\n\n비 오는 날에는 학교 가는 길가에 지렁이가 많았어요.\n지금처럼 아스팔트가 아닌 흙길에 지렁이가 너무 많아서 학교 가기 싫다고 울며 갔습니다.\n\n그래도 어린 시절이 그립습니다.\n친구들과 고무줄놀이도 하고 하루하루 즐거웠어요."
      },
      {
        "title": "힘든 시절 나를 버티게 했던 것",
        "content": "30대에 한탄강에 처음 식당을 차렸습니다.\n아이 셋 도시락 싸서 학교 보내야지, 가게 문 열기 전에 음식 준비해야지, 참 바빴어요.\n\n그 시절에는 수돗물도 없고 펌프질해서 물도 길어 먹어야 했고 힘든 시절이었습니다."
      },
      {
        "title": "엄마 생각",
        "content": "우리 엄마는 연세가 많으셔도 늘 새벽 기도를 다니셨어요.\n엄마 기도는 늘 자손들 중에 목회자가 나오길 바라는 것이었어요. 늘 엎드려 기도하셨죠.\n\n엄마 기도 덕분에 손자 하나가 목사님이 되어 지금 목회자 생활을 열심히 하는 중입니다."
      }
    ]
  },
  {
    "name": "김옥순",
    "stories": [
      {
        "title": "자기소개",
        "content": "제 이름은 김옥순입니다. 나이는 91세입니다.\n서울 마포구 도화동에 살다가 26살에 4.19혁명이 일어났어요.\n\n남편이 서울에서 장사하던 것을 정리하고 27살 3월에 연천으로 왔어요.\n총소리, 탱크 소리, 군인들이 너무 많고 집도 절도 없고,\n문을 잠그려면 못에 묶어 닫아야 했어요.\n전곡은 군인이 너무 많아서 무서웠어요."
      },
      {
        "title": "겨울에 피는 꽃",
        "content": "서울에서는 전깃불에 살았는데 연천에 와서는 호롱불에 살았지요.\n화폐 개혁이 일어나 난리가 났는데 연천에서는 전혀 몰랐어요.\n\n다섯 명의 자식이 나를 닮아 키도 크고 잘생겼어요.\n첫째가 세 살 때 업고 연천에 왔는데 이제 70년이 넘었네요.\n내가 몇 살인지도 모르게 세월이 흘렀네요.\n\n베란다에 난을 키우는데 겨울에 꽃이 핍니다.\n꽃이 피면 예쁘고 즐거워요. 요즘 난 꽃이 환하게 활짝 피었어요."
      },
      {
        "title": "기억나는 시절",
        "content": "전곡역에는 물도 없고 불도 없었다.\n솜방망이에 석유 묻히고 불을 붙여서 흔들면 버스가 온다.\n\n여기로 오라고 흔들어야 비로소 버스가 왔다.\n정말 힘들었던 시절이지만 기억이 많이 남는다."
      },
      {
        "title": "자주 먹던 음식",
        "content": "밀을 심어 맷돌에 갈면 붉은 밀가루가 나온다.\n지금처럼 좋은 밀가루가 아니었다.\n\n내가 학교 갔다가 쑥을 캐 오면 엄마가 쑥을 삶아 개떡을 쪄줬다.\n밀을 부쳐, 밀 부침개도 해 주셨다.\n들기름 바르고 호박을 썰어 넣은 부침개도 맛있었다.\n\n밀가루, 보리밥만 먹다가 그런 것들 먹으면 참 좋았다."
      }
    ]
  },
  {
    "name": "남영숙",
    "stories": [
      {
        "title": "자기소개",
        "content": "제 이름은 남영숙입니다.\n저는 어릴 적에 경북 영양군에 살다가 영덕군으로 이사를 갔습니다.\n\n보건소에서 근무를 하다가 남편을 만나 서울로 오게 되었고, 현재 집은 일산이지만 남편의 직장이 전곡이라서 이곳에 살고 있습니다.\n\n요즘 소소한 즐거움은 수영장을 다니는 것인데, 운동하고 샤워하면 기분이 상쾌하고 좋습니다.\n연천에 오니 좋은 분들 많아서 즐겁습니다."
      },
      {
        "title": "꿈",
        "content": "어릴 적 꿈은 선생님이었다.\n이루지는 못했지만 열심히 노력했다.\n\n대신 훌륭한 자식들을 얻었다.\n앞으로 건강이 허락하면 봉사를 해 보고 싶다.\n남은 생 건강을 지키며 살고 싶다."
      },
      {
        "title": "자녀들에게",
        "content": "부모가 잘해 준 게 없는데 훌륭하게 자라 주어서, 항상 고맙구나.\n사랑하는 자녀들아, 건강하게 오래 보며 살자.\n\n사랑하는 아들딸들아."
      }
    ]
  },
  {
    "name": "박영희",
    "stories": [
      {
        "title": "자기소개",
        "content": "제 이름은 박영희입니다. 서울 서대문에서 태어났습니다.\n7남매 중에 막내로 태어났습니다.\n\n북적북적한 집안의 막내이다 보니, 사랑을 듬뿍 받고 자랐습니다.\n집은 늘 북적거리고 생기가 넘치는 집이었습니다.\n동생들이 많다 보니 큰언니께서 힘들었다는 이야기를 들었어요.\n\n하지만 반대로 아버지께서는 막내 미인을 얻었다고 동네방네 다니면서 소문을 내셨다고 해요."
      },
      {
        "title": "지나간 시절 그리운 풍경",
        "content": "고향이 서울인 저는 특별한 풍경이 생각나진 않지만 동네에서 땅따먹기, 공기놀이, 줄넘기 등을 하며 유년 시절을 보냈습니다.\n\n버스를 타고 수색이라는 곳에 내려서 작은아버지 댁에 갔습니다.\n지금 생각해 보니 그곳에 수로가 있었던 것 같습니다.\n\n사촌 오빠들과 같이 옷이 흠뻑 젖도록 신나게 놀았지요.\n그 물속에는 버들피리 고기들이 많았어요.(송사리, 버들치, 피라미)\n\n신나게 놀면 배도 많이 고팠지요.\n작은 아버지댁에서 작은 어머님이 맛있는 밥도 해 주시고 부침개도 부쳐 주셨어요. 그때는 모든 음식들이 다 맛있었지요."
      },
      {
        "title": "힘들었던 시절",
        "content": "나의 실수로 큰딸은 8개월 만에 보행기가 굴러서 갈비뼈가 나가기도 하고, 또 커피포트에 다리를 데이기도 하고 여섯 살 때 팔목이 부러져서 깁스를 하고 그랬어요.\n집에 있으면서 딸들을 다치게 하니 미안하기만 했습니다.\n\n지금은 딸이 잘 자라 주어서 부모에게 잘하고 있습니다. 행복하게 하루하루가 즐겁습니다.\n\n돌이켜 생각해 보니 어머님, 아버님 모시고 여행도 가고 외식도 하고 싶어요.\n꽃이 만개하는 가을 부모님 모시고 여러 곳을 다니고 싶습니다.\n\n사랑합니다. 엄마"
      },
      {
        "title": "나의 사랑하는 친구들",
        "content": "죽을 때까지 사랑할 수 있는 친구들,\n모두 서울에 살고 있고 나 혼자만 연천에 있다.\n\n가끔 만나면 장소는 신촌 현대백화점 앞.\n서로 얼굴 보며 웃음 활짝. 식사하고 카페에서 이야기 나눈다.\n\n살아가는 이야기, 자식, 남편 이야기.\n시간 가는 줄 모르고 있다 보면 어느덧 헤어질 시간이다.\n\n친구들 만나면 헤어져도 웃고, 그 만남이 우리의 일상."
      },
      {
        "title": "나의 꿈",
        "content": "엄마 같은 사람이 되고 싶었다.\n엄마께서는 동네에서 인정받으시는 착하고 고운 사람이었다.\n\n지금 나의 나이가 70이 넘다 보니 그때 시절이 행복했다고 느낀다.\n엄마 같은 사람이 되고자 생각을 많이 했더니, 나도 모르게 몸에 밴 것 같다. 그래서 지금껏 잘 산 것 같다.\n\n주위에서 칭찬을 많이 해 주신다. 고마우신 지인들.\n남은 생애는 아프지 말고 건강하게 살고 싶다.\n희망 사항이지만 노력하고 있다. 잘하리라 믿고 열심히 살고 싶어요.\n\n사랑하는 영희야 건강하게 잘 지내렴."
      },
      {
        "title": "사랑하는 남편",
        "content": "당신은 나의 소중한 보물이라고 늘 생각합니다.\n그러나 나의 마음은 늘 변하곤 했지요.\n잘해 주다가도 삐지고 성질내고 가끔 목소리도 커지고. 그러고는 반성하고 한답니다.\n\n그래도 남편은 아랑곳없이 말 한마디 하지 않고 반응하지 않는 사람.\n\n저는 아프기도 많이 아팠어요. 심장 시술, 무릎 시술, 발가락 수술들.\n그때마다 정성을 다해 사랑으로 보살펴 주었답니다.\n고맙고 감사한 남편 늘 사랑하면서 평생을 노력하면서 더 잘할게요.\n\n내 마음 알죠? 고맙고 사랑합니다. 효건씨\n\n- 사랑하는 영희가"
      }
    ]
  },
  {
    "name": "서순분",
    "stories": [
      {
        "title": "자기소개",
        "content": "제 이름은 서분순입니다. 78세입니다. 5남매의 막내로 태어났습니다.\n부모님과 언니, 오빠의 사랑을 듬뿍 받으며 자랐어요.\n어린 시절엔 착하고 얌전한 소녀였습니다. 부모님 말씀도 잘 듣고 순종했으며 속도 썩이지 않았습니다.\n\n국민학교 5학년 때 서울 신촌 창천국민학교에 전입을 했습니다.\n연천이 고향이지만 서울에서 어린 시절을 보내고, 고향으로 돌아와 남편을 만나고 자녀들을 낳고 행복하게 살았습니다.\n현재는 모두 다 성장해서 결혼하고 손주, 손녀들까지 있습니다. 제가 키워주었습니다. 자녀들보다 더 이쁘더군요. 이래서 내리사랑이라고 하는가 봅니다.\n\n시간 여유가 생겼을 때 마음에 간직한 배움의 열망이 가득 차올라 실천해 보았어요.\n하루에 왕복 8번씩이나 갈아타고 결석 한 번 안 하고 학교를 다녀서 드디어 바라던 고등학교 졸업장을 69세에 받았습니다.\n\n만학도인 제 자신이 뿌듯하고 대견했어요.\n친구들과 식사하고 차 마시며 대화하며 하하호호 웃습니다. 함께 여행도 다니면 좋겠어요."
      },
      {
        "title": "그리운 동네 풍경",
        "content": "어릴 적에는 어렵게 살아서 꽁보리밥과 감자 고구마로 끼니를 떼웠던것 같아요.\n여름에는 개울가에서 빨래도 하고 다슬기 잡고 목욕하던 시절이 그리워집니다.\n\n다시는 그 어릴 적 시절이 돌아오지는 않겠지만 소박한 소녀 시절을 보낸 것 같아요.\n\n차탄천 양옆으로 아카시아 꽃이 하얗게 만발해서 향이 너무나도 향긋해서 좋았어요.\n지금은 다 없어졌지만 내가 사는 동안은 영원히 기억에 남을 것 같습니다."
      },
      {
        "title": "그리운 아버지",
        "content": "제 유년 시절은 아버지의 기억이 전혀 없어요.\n얼굴도 전혀 모르지만 사진으로나마 봤을 때는 매우 미남이셨던 것 같아요.\n아버지의 사랑을 받지 못했지만, 어머니의 사랑을 듬뿍 받고 잘 성장하여 결혼까지 하고 자녀도 낳고 잘 살고 있는 것 같아요.\n\n만약 아버지가 살아 계셨다면 어땠을까요?\n막내라서 아버지의 사랑을 많이 받으며 행복했을 것 같아요.\n마음속으로 나마 아버지의 품에 안겨 머리를 쓰다듬어 주시는 손길을 상상하며 사랑을 느껴봅니다."
      },
      {
        "title": "오빠와의 추억",
        "content": "다섯 남매 중 막내로 태어나 사랑을 많이 받으며 자랐지만, 특별히 큰 오빠의 넘치는 사랑이 기억납니다.\n지금은 소천하셨지만 큰 오빠의 다정한 눈빛과 사랑이 무척 그립습니다.\n\n살아 계신다면 얼마나 좋을까요?\n전철도 타 보시고 온 가족이 모여 식사도 한다면 얼마나 좋을까요?\n\n너무 일찍 가셔서 아쉬움이 많습니다.\n이 좋은 시절을 못 보시고 세상을 떠나신 게 안쓰러운 마음뿐입니다."
      },
      {
        "title": "나의 꿈",
        "content": "제 꿈은 국어 선생님이었어요. 제 성격에 잘 맞는 것 같아서요.\n책 읽는 것도 좋아했으니까요. 꿈에 대해 생각을 많이 했던 것 같아요.\n\n비록 꿈은 이루지 못했지만 소확행을 얻었어요.\n앞으로는 건강한 것이 꿈이지요.\n건강해서 동남아 여행도 가고 친구들과 여행하고 싶어요."
      }
    ]
  },
  {
    "name": "심향숙",
    "stories": [
      {
        "title": "자기소개",
        "content": "저는 전라남도 광산군 본량면에서 살았습니다.\n할아버지, 할머니, 부모님과 같이 살았습니다. 할아버지는 동네에서 배우지 못한 분들을 모아 시간이 있을 때마다 글을 가르치셨어요.\n\n10리가 넘는 길을 걸어 국민학교에 다녔어요.\n중학교는 광주로 나와 다니려고 했는데 합격하지 못해서 시골 중학교에 다녔어요. 철이 없었지요.\n\n25살에 결혼하여 광주에서 살다가 남편의 사업 실패로 서울에서 10년 살다가 지금은 연천에 와서 살고 있습니다."
      },
      {
        "title": "인생 무정",
        "content": "떠도는 구름처럼\n산의 푸르름 강으로 흘러 바다로 가고\n재물을 욕심낸다고 들어올 일 없네.\n성실히 살다 가세.\n\n이 길 저 길 해도 순리로 살자.\n팔자에 순응하고 살아가는 길이\n인생 무정이라네!"
      },
      {
        "title": "팔순의 고백",
        "content": "봄 하루가 멀기만 하구나.\n소박한 여심은 산, 들 나무 뜯어서 곱게 무쳐 아들딸네 집에 보내고\n속내 너털웃음으로 위안을 삼는다.\n\n늙어가는 이내 온 삭신에는 병마가 기웃기웃. 병원 찾아 검진을 한다.\n\n앞산 뒷산에 만발한 벚꽃, 진달래, 개나리 상춘하며 인생의 무상한 마음에 울고\n빈손으로 왔다가 가는 인생, 마음 미소로 하루를 보내자."
      },
      {
        "title": "어머니",
        "content": "어릴 적에 글을 가르쳐 주신 할아버지를 많이 따라다닌 기억이 있습니다.\n우리 동네에는 타지 사람이 거의 없고 우리 심씨 집안 사람들만 산 것으로 기억하는데, 그때만 해도 여자아이들을 국민학교에 보내는 집이 드물었어요.\n\n제가 학교를 가고 타지를 가니 집안 어른들이 저희 엄마를 많이 경계했어요.\n그래도 엄마는 누가 뭐라고 해도 8남매를 가르치기 위해 밤낮으로 고생 많이 하셨지요.\n\n비가 오나 눈이 오나 반찬이며 쌀을 머리에 이고 10리도 더 되는 길을 일주일이 멀다 하고 다니시던 기억이 납니다.\n그런데 이제 제가 그걸 헤아리니 돌아가시고 안 계시네요.\n\n사랑합니다. 어머니!"
      },
      {
        "title": "아버지",
        "content": "8남매의 첫째로 태어났지만 그래도 고생이란 걸 모르고 자랐습니다.\n국민학교 들어가서 어머니가 저에게 신경을 많이 써 주신 것 같습니다.\n\n할아버지의 글방에 나이 많은 삼촌과 오빠들이 한글을 배우러 왔는데, 어머니가 나이 어린 저를 그곳에 데리고 가서 배우게 하셨습니다.\n국민학교를 졸업하고 시골 중학교라며 공부를 포기하고 집에 있으면서 2살 어린 동생은 고등학교에 보내자고 아버지를 설득하였습니다.\n\n아버지가 하시는 말씀이\n“동생만 고등학교에 가고 너는 안 가는데 후회는 없겠니?”\n라고 물으신 게 기억나요.\n\n사랑합니다. 아버지!"
      }
    ]
  },
  {
    "name": "이경분",
    "stories": [
      {
        "title": "자기소개",
        "content": "제 이름은 이경분입니다.\n연천에서 오랫동안 살아서 이제 이 지역을 벗어나 보고도 싶습니다.\n저는 조용한 편이고 책임감과 성실함으로 살아야 한다는 압박에서 벗어나 편안함과 감사로 채우며 살고 있습니다.\n\n어린 시절 6.25 때 아버지를 잃고 어머니와 오빠 둘과 살면서 다른 집 아버지가 무척 부러웠어요.\n하지만 지극한 어머니의 사랑이 아버지 빈자리를 채워주셔서 아빠 없이 자라 부족하다는 소리 안 듣고 반듯하게 자랐습니다.\n하루하루를 소박하지만 따뜻하고 즐겁게 살아가기 위해 노력한답니다."
      },
      {
        "title": "지난 시절",
        "content": "6.25의 어려운 시대에 태어나 홀어머니 품에서 가난하게 살았지만 꿋꿋하게 자랐습니다.\n그 옛날 국민학교를 3킬로 길을 걸어 다니며, 춥고 배고픔을 참아가며 배움을 이어갔습니다.\n힘든 환경 속에서도 성실함 하나로 견뎌 왔습니다.\n\n1973년 결혼해서 어려운 생활 속에서 허리띠 졸라메고, 알뜰하고 소박하게 살며 4남매를 키워냈습니다.\n가족을 위해 참고 견디며 살아온 세월이, 오늘을 행복하게 만들었습니다.\n\n이제는 칠십이 넘은 나이가 되어 지난 세월 돌아보며 무엇보다 성실하게 살아온 내가 참 대견하고 포기하지 않고 살아온 나에게 감사와 따뜻한 박수를 보냅니다."
      },
      {
        "title": "감사한 마음",
        "content": "지난날의 힘들었던 시간들이 있었기에, 지금의 소중한 행복을 더욱 감사하게 생각합니다.\n함께 견뎌주고 응원해 준 가족 모두에게 감사하며, 남은 날들은 웃음과 사랑이 가득한 시간으로 채워지길 두 손 모아 기도합니다.\n\n사 남매 잘 키워서 행복합니다.\n나에게도 이런 날이 옴에 감사하며 욕심 없이 늘 즐겁고 행복하게 봉사 정신으로 살아가려고 합니다.\n바라는 바가 다 이루어 져서 고맙고 감사합니다.\n우리 가족 모두에게 감사합니다."
      },
      {
        "title": "가장 힘든 시절",
        "content": "결혼하고 마음에 안 드는 일들이 너무나 많았습니다.\n곱게 자라 일을 할 줄 몰라 너무나 힘겨워서 스트레스가 심했어요.\n임신만 하면 자연유산이 반복되어서 몸이 쇠약해졌어요. 힘든 나머지 살림을 놔 버렸죠.\n\n살기가 너무 어렵고 고통스러운데 나에게 복이 찾아왔어요. 드디어 첫 아이를 가지게 되었어요.\n세상을 다 가진 느낌이 들어 힘들고 힘들어도 참고 또 참고 살아왔습니다.\n\n그런데 딸아이 간식 사줄 돈이 없었어요.\n사과 궤짝을 구해 대장간 가서 철판을 깔고 국자를 구입해서 설탕 뽁기를 만들어 팔았어요.\n그렇게 벌어 딸에게 라면땅을 사줄 수 있었어요. 하지만 친정 동네 사람들을 만나면 창피해서 숨기도 했지요. 그래도 딸이 좋아하는 모습에 행복했습니다."
      },
      {
        "title": "사랑하는 큰딸에게",
        "content": "엄마의 딸로 태어난 큰딸에게 항상 미안하게 생각한다.\n어릴 적부터 어른스럽게 동생들 잘 보살피고 늘 가족을 위해서 노력하는 딸에게 미안하고 마음이 아프구나.\n디자인 공부하고 싶다는 걸 경제 문제로 허락을 못한 것이 늘 가슴에 남아 있단다.\n\n대놓고 미안하단 말도 못 했는데 딸은 늘 “엄마 사랑해요” 하며 엄마를 행복하게 해주더구나.\n엄마의 생활문제까지 돌봐 줌도 고맙고, 표현 못 하는 엄마를 이해해 주는 것도 고맙고..\n\n큰딸, 작은딸, 막내딸, 아들 사랑하는 우리 가족 모두 건강 기원하며 사랑해!"
      },
      {
        "title": "그리운 어머니",
        "content": "이 나이가 되어보니 더욱더 그리운 엄마.\n아버지 없이 홀어머니가 두 오빠와 나, 자식들을 위하여 모진 고생 하셨어요.\n언제나 삼 남매 배고프지 않게 하려고 허덕인 엄마, 늘 그립습니다.\n\n막내딸 시집 보내고 어렵게 사는 내 모습에 걱정이 태산이었던 엄마.\n그런데 내가 딸 셋을 낳으니 더욱더 걱정거리가 되었죠.\n어머니 생전에 좀 더 잘 살았으면 좋았을걸. 늘 죄송하고 미안했습니다.\n\n지금 옆에 계시면 효도해보고 싶어요. 어머니 사랑 듬뿍 받은 사랑을 돌려드리고 싶어요."
      }
    ]
  },
  {
    "name": "장애정",
    "stories": [
      {
        "title": "자기소개",
        "content": "저는 장애정입니다. 전곡으로 시집을 와서 전곡 은대리에 살고 있습니다.\n7남매의 맏딸로 태어나 늘 동생들을 돌보았습니다.\n\n하지만 친구들과도 너무 놀고 싶어서 젖먹이 동생을 업고 놀러 간 적도 있어요.\n동생이 배가 고파 울어도 그냥 놀 때에도 많아서 엄마에게 혼난 적도 많이 있습니다.\n\n지금은 동생들이 도시에 살아서 자연과 가까이 살고 있는 저희 집에 오는 것을 좋아합니다.\n학교에 다닐 때 아카시아 씨앗을 채취하러 산에도 많이 다녔습니다.\n\n저는 40년이 넘는 세월 동안 여러 봉사를 많이 하고 살았습니다.\n지금은 반찬봉사를 해서 독거노인들에게 갖다 드리는 것이 저의 큰 기쁨입니다."
      },
      {
        "title": "어릴 적 자주 먹던 음식",
        "content": "동생들과 비 오는 날 빗물을 받아 그 물에 감자를 까서 가마솥에 삶아 먹었던 생각이 나요.\n식구가 많으니 점심은 주로 수제비를 빚어서 먹었습니다.\n\n국민학교 때 농사일이 많아서 일꾼들을 많이 두었어요.\n새참 먹을 때 호떡 하나 얻어먹기 위해, 학교에서 일찍 와서 밭으로 가서 먹었는데 엄청 맛있었던 기억이 납니다."
      },
      {
        "title": "그리운 동네 풍경",
        "content": "저는 어릴 적 한남동 한강 건너 잠원동이란 곳에서 태어났어요.\n국민학교를 다닐 때 비가 많이 오는 장마 때, 한강에 물이 많이 밀려서 동네가 물에 잠길 때가 있었어요.\n\n집집마다 장마에 고생들을 많이 한 것이 생각납니다.\n그래도 우리집은 좀 높은 곳이어서 괜찮았지만 매우 무서웠던 기억이 납니다."
      },
      {
        "title": "나의 길",
        "content": "아이들 학교의 어머니 회장을 거쳐, 소비자 중앙회 회장직과 여성 단체 회장도 역임했어요.\n군의원 4년을 거쳐, 지금은 노인대학 학장으로 재직하고 있습니다.\n\n오랜 시간 누군가를 위해 봉사할 수 있었던 시간들이 나의 꿈이자 결실입니다.\n남은 생도 봉사하며 살고 싶습니다."
      },
      {
        "title": "아버지와 이사",
        "content": "어렸을 적 아버지께서 군 생활을 하셔서 논산, 화천, 홍천 등등 이사를 많이 다녔어요.\n국민학교 입학 때는 너무 잦은 이사에 할머니 댁에서 학교를 다녀야 했고, 방학 때는 부모님 계시던 곳에 가서 지내곤 했었어요.\n\n추운 겨울방학이 지난 어느 개학 날 내가 동생을 데리고 청량리역까지 와서 삼촌을 만난 기억이 납니다.\n동생 1학년 나는 3학년, 그때를 생각하면 나 자신도 대단했다고 생각합니다.\n\n그때는 비포장도로에 구불구불한 길을 새벽에 떠나, 오후 4~5시경에 도착했던 것 같아요. 동생을 잃어버릴까 손을 꼭 잡고 걱정했던 기억이 납니다."
      },
      {
        "title": "먼저 떠난 사람에게",
        "content": "항상 그립습니다.\n20여 년 동안 파킨슨병으로 고생하다가 70대를 갓 넘어 세상을 떠난 사람.\n\n불쌍하기도 하고, 요즘 새삼스럽게 생각이 많이 납니다.\n나만 좋은 조건 속에서 살 수 있는 것이 미안하고 죄송스러운 마음이지요.\n나를 위해서 묵묵히 있어 주고 편안히 살 수 있게 해주고 떠난 사람.\n\n20여 년 동안 고생도 많이 했지만 그래도 살아있을 때가 행복인 것 같아요."
      },
      {
        "title": "동생들과의 화음",
        "content": "칠 남매의 맏딸로 태어나 늘 동생들의 기강을 잡았어요.\n바로 밑에 남동생이 억세고 세서 다룰 수가 없어도 부모님께서 누나의 권위를 살려주셔서 동생들이 누나 말 잘 듣게끔 해주셨어요. 그래서 동생들이 누나 말을 잘 듣고 잘 지냈어요.\n\n동생들은 큰누나가 무섭게 하기도 했지만 누나 덕분에 사이들이 좋았다고 합니다.\n칠 남매가 노래도 곧잘 불렀는데 화음도 잘 맞았어요.\n무엇을 하고 놀건 짝을 먹고 놀 수 있었고 모두 힘을 모아 청소, 설거지도 했어요."
      }
    ]
  },
  {
    "name": "조항년",
    "stories": [
      {
        "title": "수고한 나에게",
        "content": "지금은 나는 어느덧 팔순의 할머니가 되었단다.\n어린 너에게 해주고 싶은 말이 있었어.\n\n너는 늘 우는 아이여서 사람들에게 사랑받지 못했지만 너 스스로 너를 채우고 잘 살았어.\n어른이 되어가면서 살아가는 법을 터득하고 열심히 잘 살았다.\n힘든 일도 잘 견뎌내며 열심히 살아서 박수받아도 된다."
      },
      {
        "title": "힘들었던 시절 나를 버티게 해준 것",
        "content": "결혼한 지 딱 일 년 만에 연천군 한탄강으로 이사 와서 보니 살림살이 하나 없고, 가진 것이라고는 시집올 때 옷 몇 가지, 이불 한 채가 전부.\n\n한탄강 친척 집에 살았는데 자고 일어나면 방 벽 삼면이 성에가 끼어 손으로 훑으면 한 움큼씩이나 되었어요.\n아침 일찍 일어나 밖에서 나뭇잎을 태워 추위를 견디며 살던 시절이 있었답니다.\n\n그래도 남편이 있기에 버티고 살아 올 수 있었어요. 다시는 생각하고 싶지 않아요. 지난 세월 모두 꿈같아요."
      },
      {
        "title": "자주 먹던 음식",
        "content": "어릴 적 자주 먹던 음식 중 하나는 보리 개떡이었어요.\n보리 속껍데기에 식소다 넣고 빵을 만들어 주시면 자주 먹었습니다.\n\n보기엔 검어도 참 맛있었어요."
      },
      {
        "title": "보고 싶은 아버지",
        "content": "충북 괴산군 청천면 후평리에서 태어나 자라면서 넉넉하지 못한 살림살이에서도 워낙 손이 귀한 집이었죠.\n\n위로는 다섯 살 많은 오빠, 남동생은 세 살 차이. 그런데 유난히 아버지께서 저를 무척 예뻐하셨죠.\n지금도 아버지라는 이름만 떠올려도 너무나 보고 싶고 그립습니다.\n\n아버지! 불러도 대답이 없으십니다."
      }
    ]
  },
  {
    "name": "최삼순",
    "stories": [
      {
        "title": "자기소개",
        "content": "제 이름은 최삼순입니다. 나이는 39년생 88세입니다.\n1남 4녀 중 셋째 딸로 태어났어요.\n\n내 고향은 전남 광주이고 국민학교는 광주에서 다녔습니다.\n저는 어머님 말씀을 잘 듣는 착한 딸이었어요.\n동네 어르신이 착하다고 항상 칭찬도 많이 해 주시고 예뻐 했어요.\n\n우리 자녀들 4남매 잘 교육시켜서 대학 보냈을 때 제일 즐거웠어요.\n항상 글씨를 배우고 싶고 하고 싶었습니다.\n그림 솜씨도 없는 내가 요즘 그림을 그리니 내가 봐도 너무 웃기고 재밌네요."
      },
      {
        "title": "가족이야기",
        "content": "너무 어렸을 때 아버지께서 돌아가시고 살기 힘들었지요.\n어머니께서 다섯 남매를 키우시느라고 온갖 일을 다 하시며 우리를 키우셨어요.\n\n먹을 것이 없어서 큰댁에서 며칠 있으면 무척 서러웠어요.\n큰집 언니가 너희 집 가라고 하며 구박도 했어요. 너무 슬퍼서 울면서 다시는 큰집에 안 간다고 했어요.\n\n학교에 다녀와서 옆집 아기도 돌봐주는 등 어머니와 온 식구가 고생하며 살았어요."
      },
      {
        "title": "어릴 적 자주 먹던 음식",
        "content": "아버지가 일찍 돌아가시고 먹을 것이 없어서 어머니가 늘 콩죽을 해 주셨어요.\n저는 콩죽이 먹기 싫어서 늘 굶곤 했어요. 그래서 영양 부족으로 몸이 많이 아팠습니다.\n\n어머니는 오빠 몰래 저에게 쌀밥을 해주시면서도 꾸중을 많이 하셨어요.\n하지만 중학교는 오빠만 보내주셨어요. 형편이 어려워 이해는 하면서도 많이 서운했습니다.\n\n지금 생각해 보면 어머니는 얼마나 힘드셨을까요? 투정한 것이 후회가 됩니다.\n그래서 어린 시절 추억을 떠올리면 학교에 가고 싶어 했던 마음만 떠올라요."
      },
      {
        "title": "살아오면서 가장 열심히 했던 일",
        "content": "늘 소원이 공부였어요.\n하루는 전철을 타고 가는데 수도학원이 눈에 띄어서 전화번호를 적었어요.\n언젠가 나도 저 학원에 가서 공부를 열심히 해야겠다고 생각했습니다.\n\n여건이 허락지 않다가 드디어 늦은 70대에 공부를 하게 되어 열심히 했습니다.\n검정고시 공부에 죽을힘을 다했어요. 마침내 중학교와 고등학교를 졸업했어요.\n\n정말 너무나 뿌듯하고 살아오면서 고생했던 것을 다 잊을 만큼 행복했습니다."
      },
      {
        "title": "나의 꿈",
        "content": "어릴 적에는 공부하는 것이 꿈이었어요. 그 꿈을 꾸게 된 이유는 교복을 입고 싶어서였어요.\n공부의 꿈을 이루기 위해 열심히 살았어요.\n\n그 시절은 너무 힘들었고 꿈을 이루지는 못했지만, 우리 자녀들은 잘 키웠습니다.\n\n지금 마음속의 꿈은 건강입니다.\n앞으로 건강이 허락한다면 봉사로 남을 돕고 싶어요.\n제일 잘하고 싶은 것은 글을 잘 쓰는 것입니다."
      }
    ]
  }
];
const tearTabsEl = document.getElementById("tear-tabs");
const modal = document.getElementById("story-modal");
const modalBookTag = document.getElementById("modal-book-tag");
const memoStack = document.getElementById("memo-stack");
const memoActionBtn = document.getElementById("memo-action-btn");
const petalsEl = document.getElementById("petals");

const TEAR_DURATION_MS = 520;
const MEMO_TEAR_MS = 550;

let activeGrandmotherIndex = 0;
let activeStoryIndex = 0;
let activeTearTab = null;
let lastFocusedElement = null;
let isAnimating = false;
let isMemoTearing = false;

function renderTearTabs() {
  const fragment = document.createDocumentFragment();

  grandmothersData.forEach((grandma, index) => {
    const wrap = document.createElement("div");
    wrap.className = "tear-tab";
    wrap.dataset.index = String(index);

    const stub = document.createElement("div");
    stub.className = "tear-tab-stub";
    stub.setAttribute("aria-hidden", "true");

    const paper = document.createElement("button");
    paper.type = "button";
    paper.className = "tear-tab-paper";
    paper.setAttribute("aria-label", `${grandma.name} 할머니 이야기 뜯어 읽기`);
    paper.innerHTML = `<span class="tear-tab-name">${grandma.name}</span>`;
    paper.addEventListener("click", () => tearAndOpen(index, wrap));

    wrap.append(stub, paper);
    fragment.appendChild(wrap);
  });

  tearTabsEl.replaceChildren(fragment);
}

function tearAndOpen(grandmaIndex, tabEl) {
  if (isAnimating || modal.classList.contains("is-open")) return;
  if (tabEl.classList.contains("is-torn") || tabEl.classList.contains("is-tearing")) return;

  isAnimating = true;
  activeTearTab = tabEl;
  lastFocusedElement = document.activeElement;

  tabEl.classList.add("is-tearing");

  window.setTimeout(() => {
    tabEl.classList.remove("is-tearing");
    tabEl.classList.add("is-torn");
    openModal(grandmaIndex);
    isAnimating = false;
  }, TEAR_DURATION_MS);
}

function restoreTearTab() {
  if (!activeTearTab) return;

  const tab = activeTearTab;
  activeTearTab = null;

  // 살짝 딜레이 후 제자리로 (모달 닫힘과 겹치게)
  window.setTimeout(() => {
    tab.classList.remove("is-torn", "is-tearing");
  }, 180);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function updateMemoActionButton() {
  const stories = grandmothersData[activeGrandmotherIndex].stories;
  const isLast = activeStoryIndex >= stories.length - 1;
  memoActionBtn.disabled = isMemoTearing;
  memoActionBtn.textContent = isLast ? "닫기" : "다음 이야기 뜯기 →";
  memoActionBtn.setAttribute(
    "aria-label",
    isLast ? "이야기 모달 닫기" : "다음 이야기 메모지 뜯기"
  );
}

function refreshTopMemo() {
  const sheets = [...memoStack.querySelectorAll(".memo-sheet:not(.is-torn)")];
  sheets.forEach((sheet) => sheet.classList.remove("is-top"));
  const top = sheets.sort(
    (a, b) => Number(a.dataset.storyIndex) - Number(b.dataset.storyIndex)
  )[0];
  top?.classList.add("is-top");
}

function renderMemoStack(stories) {
  const fragment = document.createDocumentFragment();
  const total = stories.length;

  // 아래(이야기 4)부터 위(이야기 1)로 쌓이도록: 인덱스가 작을수록 위에
  stories.forEach((story, index) => {
    const sheet = document.createElement("article");
    sheet.className = `memo-sheet memo-sheet--${index % 4}`;
    sheet.dataset.storyIndex = String(index);
    sheet.style.zIndex = String(total - index);
    sheet.innerHTML = `
      <span class="memo-tape" aria-hidden="true"></span>
      <p class="memo-label">이야기 ${index + 1}</p>
      <h3 class="memo-title">${escapeHtml(story.title)}</h3>
      <div class="memo-body">${escapeHtml(story.content)}</div>
    `;
    fragment.appendChild(sheet);
  });

  memoStack.replaceChildren(fragment);
  refreshTopMemo();
}

function tearTopMemo() {
  if (isMemoTearing) return;

  const stories = grandmothersData[activeGrandmotherIndex].stories;
  const isLast = activeStoryIndex >= stories.length - 1;

  if (isLast) {
    closeModal();
    return;
  }

  const topSheet = memoStack.querySelector(
    `.memo-sheet[data-story-index="${activeStoryIndex}"]:not(.is-torn)`
  );
  if (!topSheet) return;

  isMemoTearing = true;
  updateMemoActionButton();
  topSheet.classList.add("is-tearing-up");

  window.setTimeout(() => {
    topSheet.classList.remove("is-tearing-up");
    topSheet.classList.add("is-torn");
    activeStoryIndex += 1;
    refreshTopMemo();
    isMemoTearing = false;
    updateMemoActionButton();
  }, MEMO_TEAR_MS);
}

function openModal(grandmaIndex) {
  const grandma = grandmothersData[grandmaIndex];
  if (!grandma) return;

  activeGrandmotherIndex = grandmaIndex;
  activeStoryIndex = 0;
  isMemoTearing = false;

  modalBookTag.textContent = `${grandma.name} 할머니의 이야기 🌸`;
  renderMemoStack(grandma.stories);
  updateMemoActionButton();

  modal.hidden = false;
  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });
  document.body.classList.add("is-modal-open");
  memoActionBtn.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.classList.remove("is-modal-open");
  isMemoTearing = false;
  restoreTearTab();

  window.setTimeout(() => {
    if (!modal.classList.contains("is-open")) {
      modal.hidden = true;
      memoStack.replaceChildren();
    }
  }, 300);

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

memoActionBtn.addEventListener("click", () => {
  tearTopMemo();
});

document.addEventListener("keydown", (event) => {
  if (!modal.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    closeModal();
  }
});

function createPetals() {
  if (!petalsEl) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    petalsEl.replaceChildren();
    return;
  }

  const isMobile = window.matchMedia("(max-width: 560px)").matches;
  const count = isMobile ? 12 : 18;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--size", `${10 + Math.random() * 12}px`);
    petal.style.setProperty("--drift", `${Math.random() * 90 - 45}px`);
    petal.style.animationDuration = `${11 + Math.random() * 12}s`;
    petal.style.animationDelay = `${-Math.random() * 16}s`;
    petal.style.opacity = String(0.35 + Math.random() * 0.3);
    fragment.appendChild(petal);
  }

  petalsEl.replaceChildren(fragment);
}

renderTearTabs();
createPetals();
