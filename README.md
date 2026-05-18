# Moodget

**감정을 기록하고, 소비를 돌아보는 감정 기반 소비 트래킹 서비스**

`감정 기록` `소비 트래킹` `반응형 웹` `UX/UI 디자인` `HTML` `CSS` `JavaScript`

<br/>

## 프로젝트 소개

**Moodget**은 사용자의 소비를 단순히 금액으로만 기록하지 않고,  
그때의 **감정과 함께 기록**할 수 있도록 설계한 감정 기반 소비 트래킹 앱입니다.

소비 내역과 감정을 연결해  
사용자가 자신의 소비 습관을 더 쉽게 이해하고 돌아볼 수 있도록 돕습니다.

<br/>

## 바로가기

| 구분        | 링크                                                     |
| ----------- | -------------------------------------------------------- |
| 배포 페이지 | [Moodget 바로가기](https://hyunjaeha.github.io/moodget/) |
| GitHub      | [Repository](https://github.com/hyunjaeha/moodget)       |

<br/>

## 사용 기술

### Design

![Figma](https://img.shields.io/badge/Figma-UX/UI_Design-000000?style=flat-square&logo=figma&logoColor=white)

### Front-End

![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Responsive_Style-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interaction-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

<br/>

## 핵심 기능

| 기능           | 설명                              |
| -------------- | --------------------------------- |
| 감정 기반 기록 | 소비할 때의 감정을 함께 기록      |
| 소비 내역 확인 | 날짜별 소비 기록 확인             |
| 캘린더 보기    | 소비 기록을 날짜 흐름에 따라 확인 |
| 반응형 화면    | 모바일 · 테블릿 · 데스크탑 대응   |
| 설정 화면      | 사용자 환경 및 기본 정보 관리     |

<br/>

## 서비스 흐름

```mermaid
flowchart LR
    A[시작] --> B[온보딩]
    B --> C[로그인 / 회원가입]
    C --> D[홈]
    D --> E[소비 기록]
    D --> F[캘린더]
    D --> G[설정]

    E --> H[감정 선택]
    H --> I[소비 내용 입력]
    I --> J[기록 저장]
    J --> D
```

<br/>

## 화면 구조

```mermaid
flowchart TD
    A[Moodget]

    A --> B[Onboarding]
    A --> C[Sign In / Sign Up]
    A --> D[Home]
    A --> E[Record]
    A --> F[Calendar]
    A --> G[Setting]

    D --> D1[오늘의 소비 요약]
    D --> D2[감정 기반 기록 확인]

    E --> E1[감정 선택]
    E --> E2[소비 금액 입력]
    E --> E3[소비 내용 입력]

    F --> F1[날짜별 기록 확인]
    F --> F2[소비 흐름 확인]

    G --> G1[사용자 설정]
```

<br/>

## 반응형 구조

```mermaid
flowchart LR
    A[Mobile] --> B[Tablet]
    B --> C[Desktop]

    A --> A1[핵심 기능 중심]
    B --> B1[정보 영역 확장]
    C --> C1[넓은 화면 기반 구성]

    classDef mobile fill:#FCE7F3,color:#9D174D,stroke:#F472B6;
    classDef tablet fill:#E0F2FE,color:#075985,stroke:#38BDF8;
    classDef desktop fill:#FEF3C7,color:#92400E,stroke:#FBBF24;

    class A,A1 mobile;
    class B,B1 tablet;
    class C,C1 desktop;
```

<br/>

## 디자인 방향

```mermaid
mindmap
  root((Moodget))
    감정
      감정 선택
      소비 순간 기록
    소비
      금액 기록
      내역 확인
    회고
      날짜별 확인
      소비 습관 파악
    반응형
      모바일
      테블릿
      데스크탑
```

<br/>

## 프로젝트 구조

```text
moodget
├─ assets/
│  └─ icons/
├─ css/
├─ js/
├─ index.html
├─ onboarding.html
├─ signin.html
├─ signup.html
├─ home.html
├─ record.html
├─ calendar.html
├─ setting.html
└─ README.md
```

<br/>

## 작업 포인트

| 구분        | 내용                                       |
| ----------- | ------------------------------------------ |
| UX          | 감정과 소비를 함께 기록하는 흐름 설계      |
| UI          | 부드럽고 직관적인 기록 화면 구성           |
| Responsive  | 모바일, 테블릿, 데스크탑 화면 대응         |
| Interaction | 소비 기록 과정의 사용 흐름 구현            |
| Visual      | 감정 기반 서비스에 맞는 친근한 분위기 구성 |

<br/>

## 디자인 프로세스

```mermaid
flowchart LR
    A[문제 발견] --> B[흐름 정의]
    B --> C[화면 설계]
    C --> D[UI 디자인]
    D --> E[반응형 구현]
    E --> F[개선]
```

<br/>

## 기대 효과

| Before                     | After                                  |
| -------------------------- | -------------------------------------- |
| 금액 중심의 단순 소비 기록 | 감정과 함께 소비를 돌아보는 기록       |
| 소비 이유 파악이 어려움    | 감정과 소비 패턴을 함께 확인           |
| 모바일 중심 화면           | 모바일 · 테블릿 · 데스크탑 반응형 대응 |

<br/>

## 프로젝트 의미

Moodget은 소비를 단순한 숫자가 아닌  
**감정과 연결된 경험**으로 바라본 프로젝트입니다.

사용자가 자신의 소비를 더 쉽게 이해하고,  
스스로의 소비 습관을 돌아볼 수 있는 서비스를 목표로 제작했습니다.
