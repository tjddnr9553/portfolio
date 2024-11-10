import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useState, useEffect } from 'react';
import { GithubIcon, Mail, MapPin, ExternalLink, Github, Youtube } from 'lucide-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Card, CardContent, CardHeader, CardTitle } from '/src/components/ui/card.tsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Button } from '/src/components/ui/button.tsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Badge } from '/src/components/ui/badge.tsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '/src/components/ui/dialog.tsx';
import { Code, Building2 } from 'lucide-react';
const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null); // 타입 추가
    const [selectedCareer, setSelectedCareer] = useState(null); // 타입 추가
    const [activeTab, setActiveTab] = useState('overview');
    const tabs = [
        { id: 'overview', label: '개요' },
        { id: 'tech', label: '사용 기술' },
        { id: 'features', label: '주요 기능' },
        { id: 'challenges', label: '문제 해결' },
    ];
    const projects = [
        {
            title: 'Wouldyouguess?',
            image: '/images/team-project1.jpg',
            description: '친한 친구, 동료들과 함께 즐길 수 있는 그림🖼️ & 이미지📷 기반 웹 서비스',
            introduction: '친한 친구, 동료들과 함께 즐길 수 있는 그림 & 이미지 기반 웹 게임 서비스입니다.\n' +
                '총 2가지의 게임 모드를 제공하며, 최대 4인까지 함께 진행할 수 있습니다.\n' +
                '특히 직접 찍은 사진을 가지고 틀린 그림 찾기도 진행할 수 있습니다.',
            period: '2024.06.27 ~ 2024.07.27 (4주)',
            member: '프론트엔드 2명, 백엔드 2명',
            skills: ['React', 'Zustand', 'Vite'],
            deploys: ['AWS S3', 'CloudFront'],
            coWorks: ['Notion', 'Github', 'Figma'],
            mainFunctions: ['실시간 웹 게임', '실시간 드로잉', '이미지 기반 게임'],
            mainFunctionDetails: ['WebRTC와 WebSocket을 활용한 실시간 멀티플레이어 게임 구현', 'Canvas API를 활용한 실시간 협업 드로잉 기능 구현', '사용자가 직접 촬영한 사진을 활용한 틀린 그림 찾기 게임'],
            challenges: ['실시간 선 정보 전송 최적화', 'WebRTC 성능 개선', '타이머 동기화 문제 해결'],
            challengeDetails: ['베지어 곡선을 활용하여 데이터 전송량을 줄이면서도 부드러운 선 표현 구현', ' Mesh 방식에서 SFU 방식으로 전환하여 다중 사용자 환경에서의 성능 최적화', 'Web Worker를 활용한 독립적인 타이머 실행으로 브라우저 탭 전환 시에도 정확한 시간 동기화 구현'],
            tech: ['React', 'WebRTC', 'Canvas API'],
            longDescription: '실시간 드로잉과 이미지 공유를 통해 재미있는 소통을 가능하게 하는 웹 애플리케이션입니다. WebRTC를 활용한 실시간 통신과 Canvas API를 이용한 그림 그리기 기능을 구현했습니다.',
            features: ['실시간 드로잉', '이미지 공유', '실시간 영상통화', '방 생성 및 참여'],
            github: 'https://github.com/tjddnr9553/Wouldyouguess-FE',
            youtube: 'https://www.youtube.com/watch?v=OTDst73LYHs',
        },
        {
            title: 'Jungle-Book',
            image: '/images/team-project2.jpg',
            description: '크래프톤 정글에 입소하고 서먹서먹한 동료들과 친해지기 위한 서비스! 😆',
            introduction: '',
            period: '',
            member: '프론트엔드 2명, 백엔드 2명',
            skills: [''],
            deploys: [''],
            coWorks: [''],
            mainFunctions: [''],
            mainFunctionDetails: [''],
            challenges: [''],
            challengeDetails: [''],
            tech: ['React', 'Spring Boot', 'WebSocket'],
            longDescription: '교육 과정 참여자들을 위한 소셜 네트워킹 플랫폼입니다. 실시간 소통과 협업을 돕는 다양한 기능을 제공합니다.',
            features: ['실시간 채팅', '프로필 관리', '그룹 스터디 매칭', '일정 관리'],
            github: 'https://github.com/tjddnr9553/jungle_book',
            youtube: '',
        },
        {
            title: 'We-Higher',
            image: '/images/team-project3.jpg',
            description: '언제 어디서나 업무 수행을 할 수 있는 스마트 오피스 🖥️',
            introduction: '',
            period: '',
            member: '프론트엔드 2명, 백엔드 2명',
            skills: [''],
            deploys: [''],
            coWorks: [''],
            mainFunctions: [''],
            mainFunctionDetails: [''],
            challenges: [''],
            challengeDetails: [''],
            tech: ['React', 'Spring Boot', 'WebSocket'],
            longDescription: '교육 과정 참여자들을 위한 소셜 네트워킹 플랫폼입니다. 실시간 소통과 협업을 돕는 다양한 기능을 제공합니다.',
            features: ['실시간 채팅', '프로필 관리', '그룹 스터디 매칭', '일정 관리'],
            github: 'https://github.com/tjddnr9553/We-Higher',
            youtube: '',
        },
        {
            title: 'Zip-bab',
            image: '/images/team-project4.jpg',
            description: '요리 재료 구매와 레시피 검색을 쉽게 할 수 있는 웹 서비스 🍽',
            introduction: '',
            period: '',
            member: '프론트엔드 2명, 백엔드 2명',
            skills: [''],
            deploys: [''],
            coWorks: [''],
            mainFunctions: [''],
            mainFunctionDetails: [''],
            challenges: [''],
            challengeDetails: [''],
            tech: ['React', 'Spring Boot', 'WebSocket'],
            longDescription: '교육 과정 참여자들을 위한 소셜 네트워킹 플랫폼입니다. 실시간 소통과 협업을 돕는 다양한 기능을 제공합니다.',
            features: ['실시간 채팅', '프로필 관리', '그룹 스터디 매칭', '일정 관리'],
            github: 'https://github.com/tjddnr9553/zip_bab',
            youtube: '',
        },
    ];
    // const careers = [
    //   {
    //     title: '크래프톤 정글',
    //     image: '/images/career_1.png',
    //     description: '프론트엔드 개발자로서 다양한 프로젝트에 참여하며 사용자 경험을 개선하는데 주력했습니다.',
    //     period: '2024.03 - 2024.08',
    //     responsibilities: [
    //       'React 기반 웹 애플리케이션 개발',
    //       '성능 최적화 및 사용자 경험 개선',
    //       '팀 내 코드 리뷰 문화 정착',
    //     ],
    //     achievements: [
    //       '페이지 로딩 시간 40% 감소',
    //       '사용자 만족도 25% 향상',
    //       '코드 품질 개선을 위한 테스트 커버리지 80% 달성',
    //     ],
    //   },
    //   {
    //     title: '한국소프트웨어기술진흥협회',
    //     image: '/images/career_2.png',
    //     description: '초기 스타트업에서 프론트엔드 개발을 담당하며 빠르게 변화하는 요구 사항에 적응했습니다.',
    //     period: '2023.07 - 2023.12',
    //     responsibilities: [
    //       '신규 서비스 프론트엔드 아키텍처 설계',
    //       'UI/UX 개선 및 반응형 디자인 구현',
    //       '백엔드 팀과의 협업을 통한 API 설계',
    //     ],
    //     achievements: [
    //       '서비스 런칭 후 3개월 내 MAU 50% 증가',
    //       '모바일 사용자 경험 개선으로 이탈률 20% 감소',
    //       '개발 프로세스 개선으로 배포 주기 단축',
    //     ],
    //   },
    // ];
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const sections = ['home', 'about', 'skills', 'projects', 'career'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current)
                setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white", children: [_jsx("nav", { className: `fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'}`, children: _jsx("div", { className: "max-w-6xl mx-auto px-6 py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("a", { href: "#home", className: "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600", children: "\uCC28\uC131\uC6B1" }), _jsx("div", { className: "hidden md:flex space-x-8", children: ['Home', 'About', 'Skills', 'Projects', 'Career'].map((item) => (_jsx("a", { href: `#${item.toLowerCase()}`, className: `${activeSection === item.toLowerCase()
                                        ? 'text-blue-600 font-semibold'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} transition-colors duration-300`, children: item }, item))) })] }) }) }), _jsx("section", { id: "home", className: "min-h-screen flex items-center justify-center pt-20", children: _jsx("div", { className: "max-w-6xl mx-auto px-6 w-full", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-12", children: [_jsxs("div", { className: "md:w-1/2 space-y-8 text-center md:text-left", children: [_jsx("h1", { className: "text-5xl font-bold leading-tight", children: _jsxs("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600", children: ["\uC548\uB155\uD558\uC138\uC694,", _jsx("br", {}), "\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790", _jsx("br", {}), "\uCC28\uC131\uC6B1\uC785\uB2C8\uB2E4."] }) }), _jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "\uAEBC\uC9C0\uC9C0 \uC54A\uB294 \uC5F4\uC815\uACFC \uB048\uAE30\uB85C \uB178\uB825\uD558\uB294 \uAC1C\uBC1C\uC790\uC785\uB2C8\uB2E4." }), _jsxs("div", { className: "flex space-x-4 justify-center md:justify-start", children: [_jsxs(Button, { variant: "default", size: "lg", className: "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600", onClick: () => window.open('https://github.com/tjddnr9553', '_blank'), children: [_jsx(GithubIcon, { className: "mr-2", size: 20 }), "GitHub"] }), _jsxs(Button, { variant: "default", size: "lg", className: "bg-blue-600 hover:bg-blue-700", onClick: () => window.location.href = 'mailto:tjddnr9553@naver.com', children: [_jsx(Mail, { className: "mr-2", size: 20 }), "Contact"] })] })] }), _jsx("div", { className: "md:w-1/2 flex justify-center", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" }), _jsx("img", { src: "/images/profile.jpg", alt: "Profile", className: "relative rounded-full w-80 h-90 object-cover border-4 border-white dark:border-gray-800 shadow-2xl" })] }) })] }) }) }), _jsx("section", { id: "about", className: "py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsx("h2", { className: "text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600", children: "About Me" }), _jsxs("div", { className: "flex flex-col md:flex-row items-center gap-12", children: [_jsx("div", { className: "w-full md:w-1/3", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 blur-lg" }), _jsx("img", { src: "/images/aboutMe.jpg", alt: "Profile", className: "relative rounded-xl shadow-lg w-full object-cover aspect-square" })] }) }), _jsxs("div", { className: "w-full md:w-1/2 space-y-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-3xl font-bold", children: "Passionate Developer" }), _jsxs("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: ["\uD56D\uC0C1 \uC0C8\uB85C\uC6B4 \uAE30\uC220\uC744 \uBC30\uC6B0\uACE0,", _jsx("br", {}), " \uB354 \uB098\uC740 \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uB178\uB825\uD558\uB294 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uC785\uB2C8\uB2E4."] })] }), _jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center gap-2 text-blue-600 dark:text-blue-400", children: [_jsx(Code, { className: "w-5 h-5" }), _jsx("h4", { className: "font-semibold", children: "Technical Skills" })] }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "React, TypeScript, Node.js" })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center gap-2 text-purple-600 dark:text-purple-400", children: [_jsx(Building2, { className: "w-5 h-5" }), _jsx("h4", { className: "font-semibold", children: "Core Values" })] }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: "\uC0AC\uC6A9\uC790 \uC911\uC2EC, \uC9C0\uC18D\uC801 \uD559\uC2B5" })] })] })] })] })] }) }), _jsx("section", { id: "projects", className: "py-20", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsx("h2", { className: "text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600", children: "Featured Projects" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: projects.map((project, idx) => (_jsxs(Card, { className: "overflow-hidden group hover:shadow-xl transition-all duration-300 dark:border-gray-700 cursor-pointer", onClick: () => setSelectedProject(project), children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-80 object-contain transition-transform duration-300 group-hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }), _jsxs(CardContent, { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-bold mb-3", children: project.title }), _jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.tech.map((tech, techIdx) => (_jsx(Badge, { variant: "secondary", className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100", children: tech }, techIdx))) })] })] }, idx))) })] }) }), _jsx("section", { id: "skills", className: "py-20 bg-gray-50 dark:bg-gray-800/50", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsx("h2", { className: "text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600", children: "Technical Skills" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
                                {
                                    title: 'Frontend',
                                    skills: ['React', 'JavaScript', 'Zustand', 'Vite', 'HTML5/CSS3', 'jQuery'],
                                    icon: '🎨',
                                },
                                {
                                    title: 'Backend',
                                    skills: ['Java', 'Spring Boot', 'MyBatis', 'Oracle SQL', 'JPA'],
                                    icon: '⚙️',
                                },
                                {
                                    title: 'DevOps & Others',
                                    skills: ['AWS(EC2, S3, CloudFront)', 'Docker', 'GitHub', 'Figma'],
                                    icon: '🚀',
                                },
                            ].map((category, idx) => (_jsxs(Card, { className: "group hover:shadow-xl transition-all duration-300 dark:border-gray-700", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-2 text-xl", children: [_jsx("span", { className: "text-2xl", children: category.icon }), category.title] }) }), _jsx(CardContent, { children: _jsx("ul", { className: "space-y-3", children: category.skills.map((skill, skillIdx) => (_jsxs("li", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" }), _jsx("span", { className: "text-gray-700 dark:text-gray-300", children: skill })] }, skillIdx))) }) })] }, idx))) })] }) }), _jsx(Dialog, { open: !!selectedProject, onOpenChange: () => setSelectedProject(null), children: _jsx(DialogContent, { className: "max-w-4xl", children: _jsxs("div", { className: "bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col", children: [_jsx("div", { className: "flex justify-between items-center p-6 border-b", children: _jsx("h2", { className: "text-2xl font-bold", children: selectedProject?.title }) }), _jsxs("div", { className: "flex gap-4 px-6 py-3 bg-gray-50", children: [_jsxs("a", { href: selectedProject?.github, className: "flex items-center gap-2 text-gray-600 hover:text-black", children: [_jsx(Github, { className: "w-5 h-5" }), _jsx("span", { children: "GitHub" })] }), _jsxs("a", { href: selectedProject?.youtube, className: "flex items-center gap-2 text-gray-600 hover:text-black", children: [selectedProject?.youtube ? _jsx(Youtube, { className: "w-5 h-5" }) : null, selectedProject?.youtube ? _jsx("span", { children: "Demo" }) : null] })] }), _jsx("div", { className: "flex border-b", children: tabs.map(tab => (_jsx("button", { onClick: () => setActiveTab(tab.id), className: `px-6 py-3 font-medium ${activeTab === tab.id
                                        ? 'border-b-2 border-blue-500 text-blue-500'
                                        : 'text-gray-500 hover:text-gray-700'}`, children: tab.label }, tab.id))) }), _jsxs("div", { className: "flex-1 overflow-y-auto p-6", children: [activeTab === 'overview' && (_jsxs("div", { className: "space-y-6", children: [_jsxs("section", { children: [_jsx("h3", { className: "text-xl font-semibold mb-3", children: "\uC11C\uBE44\uC2A4 \uC18C\uAC1C" }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: selectedProject?.introduction })] }), _jsxs("section", { children: [_jsx("h3", { className: "text-xl font-semibold mb-3", children: "\uD504\uB85C\uC81D\uD2B8 \uC815\uBCF4" }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-700", children: "\uAE30\uAC04" }), _jsx("p", { className: "text-gray-600", children: selectedProject?.period })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-700", children: "\uD300 \uAD6C\uC131" }), _jsx("p", { className: "text-gray-600", children: selectedProject?.member })] })] })] })] })), activeTab === 'tech' && (_jsx("div", { className: "space-y-6", children: _jsxs("section", { children: [_jsx("h3", { className: "text-xl font-semibold mb-3", children: "\uAE30\uC220 \uC2A4\uD0DD" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "p-4 bg-gray-50 rounded-lg", children: [_jsx("h4", { className: "font-medium mb-2", children: "Skills" }), _jsx("ul", { className: "text-gray-600 space-y-1", children: selectedProject?.skills.map((skill, idx) => (_jsx("li", { children: skill }, idx))) })] }), _jsxs("div", { className: "p-4 bg-gray-50 rounded-lg", children: [_jsx("h4", { className: "font-medium mb-2", children: "Deploy" }), _jsx("ul", { className: "text-gray-600 space-y-1", children: selectedProject?.deploys.map((deploy, idx) => (_jsx("li", { children: deploy }, idx))) })] }), _jsxs("div", { className: "p-4 bg-gray-50 rounded-lg", children: [_jsx("h4", { className: "font-medium mb-2", children: "Co-work" }), _jsx("ul", { className: "text-gray-600 space-y-1", children: selectedProject?.coWorks.map((coWork, idx) => (_jsx("li", { children: coWork }, idx))) })] })] })] }) })), activeTab === 'features' && (_jsx("div", { className: "space-y-6", children: _jsxs("section", { children: [_jsx("h3", { className: "text-xl font-semibold mb-3", children: "\uC8FC\uC694 \uAE30\uB2A5" }), _jsx("div", { className: "space-y-4", children: selectedProject?.mainFunctions.map((mainFunction, idx) => (_jsxs("div", { className: "p-4 bg-gray-50 rounded-lg", children: [_jsx("h4", { className: "font-medium mb-2", children: mainFunction }), _jsx("p", { className: "text-gray-600", children: selectedProject?.mainFunctionDetails[idx] })] }, idx))) })] }) })), activeTab === 'challenges' && (_jsx("div", { className: "space-y-6", children: _jsxs("section", { children: [_jsx("h3", { className: "text-xl font-semibold mb-3", children: "\uBB38\uC81C \uD574\uACB0" }), _jsx("div", { className: "space-y-4", children: selectedProject?.challenges.map((challenge, idx) => (_jsxs("div", { className: "p-4 bg-gray-50 rounded-lg", children: [_jsx("h4", { className: "font-medium mb-2", children: challenge }), _jsx("p", { className: "text-gray-600", children: selectedProject?.challengeDetails[idx] })] }, idx))) })] }) }))] })] }) }) }), _jsx(Dialog, { open: !!selectedCareer, onOpenChange: () => setSelectedCareer(null), children: _jsxs(DialogContent, { className: "max-w-3xl", children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { className: "text-2xl", children: selectedCareer?.title }), _jsx("p", { className: "text-sm text-gray-500", children: selectedCareer?.period })] }), _jsxs("div", { className: "space-y-6", children: [_jsx("img", { src: "/api/placeholder/800/400", alt: selectedCareer?.title, className: "w-full rounded-lg object-cover" }), _jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-gray-600 dark:text-gray-300", children: selectedCareer?.description }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-2", children: "\uC8FC\uC694 \uCC45\uC784" }), _jsx("ul", { className: "list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300", children: selectedCareer?.responsibilities.map((responsibility, idx) => (_jsx("li", { children: responsibility }, idx))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-2", children: "\uC8FC\uC694 \uC131\uACFC" }), _jsx("ul", { className: "list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300", children: selectedCareer?.achievements.map((achievement, idx) => (_jsx("li", { children: achievement }, idx))) })] })] })] })] }) }), _jsx("footer", { className: "bg-gray-900 text-white py-12", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-xl font-bold", children: "Location" }), _jsxs("p", { className: "flex items-center text-gray-300", children: [_jsx(MapPin, { className: "mr-2", size: 20 }), "\uACBD\uAE30\uB3C4 \uC548\uC591\uC2DC \uB3D9\uC548\uAD6C"] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-xl font-bold", children: "Connect" }), _jsxs("div", { className: "flex space-x-4", children: [_jsx("a", { href: "https://github.com/tjddnr9553", target: "_blank", className: "hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/10", rel: "noreferrer", children: _jsx(GithubIcon, { size: 24 }) }), _jsx("a", { href: "https://fatalism-developer.tistory.com/", target: "_blank", className: "hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/10", rel: "noreferrer", children: _jsx(ExternalLink, { size: 24 }) })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "text-xl font-bold", children: "Contact" }), _jsxs("p", { className: "flex items-center text-gray-300", children: [_jsx(Mail, { className: "mr-2", size: 20 }), "tjddnr9553@naver.com"] })] })] }), _jsx("div", { className: "mt-12 pt-8 border-t border-gray-800 text-center text-gray-400", children: _jsx("p", { children: "\u00A9 2024 \uCC28\uC131\uC6B1. All rights reserved." }) })] }) })] }));
};
export default App;
