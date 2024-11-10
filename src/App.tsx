import React, {useState, useEffect} from 'react';
import {GithubIcon, Mail, MapPin, ExternalLink, Github, Youtube} from 'lucide-react';
import {Card, CardContent, CardHeader, CardTitle} from '/src/components/ui/card.tsx';
import {Button} from '/src/components/ui/button.tsx';
import {Badge} from '/src/components/ui/badge.tsx';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '/src/components/ui/dialog.tsx';
import {Code, Building2} from 'lucide-react';


const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedCareer, setSelectedCareer] = useState(null);

    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        {id: 'overview', label: '개요'},
        {id: 'tech', label: '사용 기술'},
        {id: 'features', label: '주요 기능'},
        {id: 'challenges', label: '문제 해결'}
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

    const careers = [
        {
            title: '크래프톤 정글',
            image: '/images/career_1.png',
            description: '프론트엔드 개발자로서 다양한 프로젝트에 참여하며 사용자 경험을 개선하는데 주력했습니다.',
            period: '2024.03 - 2024.08',
            responsibilities: [
                'React 기반 웹 애플리케이션 개발',
                '성능 최적화 및 사용자 경험 개선',
                '팀 내 코드 리뷰 문화 정착',
            ],
            achievements: [
                '페이지 로딩 시간 40% 감소',
                '사용자 만족도 25% 향상',
                '코드 품질 개선을 위한 테스트 커버리지 80% 달성',
            ],
        },
        {
            title: '한국소프트웨어기술진흥협회',
            image: '/images/career_2.png',
            description: '초기 스타트업에서 프론트엔드 개발을 담당하며 빠르게 변화하는 요구 사항에 적응했습니다.',
            period: '2023.07 - 2023.12',
            responsibilities: [
                '신규 서비스 프론트엔드 아키텍처 설계',
                'UI/UX 개선 및 반응형 디자인 구현',
                '백엔드 팀과의 협업을 통한 API 설계',
            ],
            achievements: [
                '서비스 런칭 후 3개월 내 MAU 50% 증가',
                '모바일 사용자 경험 개선으로 이탈률 20% 감소',
                '개발 프로세스 개선으로 배포 주기 단축',
            ],
        },
    ];

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
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <a href="#home"
                           className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            차성욱
                        </a>
                        <div className="hidden md:flex space-x-8">
                            {['Home', 'About', 'Skills', 'Projects', 'Career'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`${
                                        activeSection === item.toLowerCase()
                                            ? 'text-blue-600 font-semibold'
                                            : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    } transition-colors duration-300`}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center pt-20">
                <div className="max-w-6xl mx-auto px-6 w-full">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2 space-y-8 text-center md:text-left">
                            <h1 className="text-5xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  안녕하세요,<br/>
                  프론트엔드 개발자<br/>
                  차성욱입니다.
                </span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                꺼지지 않는 열정과 끈기로 노력하는 개발자입니다.
                            </p>
                            <div className="flex space-x-4 justify-center md:justify-start">
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                                    onClick={() => window.open('https://github.com/tjddnr9553', '_blank')}
                                >
                                    <GithubIcon className="mr-2" size={20}/>
                                    GitHub
                                </Button>
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700"
                                    onClick={() => window.location.href = 'mailto:tjddnr9553@naver.com'}
                                >
                                    <Mail className="mr-2" size={20}/>
                                    Contact
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                                <img
                                    src="/images/profile.jpg"
                                    alt="Profile"
                                    className="relative rounded-full w-80 h-90 object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about"
                     className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        About Me
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3">
                            <div className="relative">
                                <div
                                    className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 blur-lg"></div>
                                <img
                                    src="/images/aboutMe.jpg"
                                    alt="Profile"
                                    className="relative rounded-xl shadow-lg w-full object-cover aspect-square"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold">Passionate Developer</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300">
                                    항상 새로운 기술을 배우고,<br/> 더 나은 사용자 경험을 제공하기 위해 노력하는 프론트엔드 개발자입니다.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                        <Code className="w-5 h-5"/>
                                        <h4 className="font-semibold">Technical Skills</h4>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        React, TypeScript, Node.js
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                                        <Building2 className="w-5 h-5"/>
                                        <h4 className="font-semibold">Core Values</h4>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        사용자 중심, 지속적 학습
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <Card
                                key={idx}
                                className="overflow-hidden group hover:shadow-xl transition-all duration-300 dark:border-gray-700 cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-80 object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIdx) => (
                                            <Badge key={techIdx} variant="secondary"
                                                   className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Frontend',
                                skills: ['React', 'JavaScript', 'Zustand', 'Vite', 'HTML5/CSS3', 'jQuery'],
                                icon: '🎨'
                            },
                            {
                                title: 'Backend',
                                skills: ['Java', 'Spring Boot', 'MyBatis', 'Oracle SQL', 'JPA'],
                                icon: '⚙️'
                            },
                            {
                                title: 'DevOps & Others',
                                skills: ['AWS(EC2, S3, CloudFront)', 'Docker', 'GitHub', 'Figma'],
                                icon: '🚀'
                            }
                        ].map((category, idx) => (
                            <Card key={idx}
                                  className="group hover:shadow-xl transition-all duration-300 dark:border-gray-700">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <span className="text-2xl">{category.icon}</span>
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {category.skills.map((skill, skillIdx) => (
                                            <li key={skillIdx} className="flex items-center gap-2">
                                                <div
                                                    className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                                                <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Section */}
            {/*<section id="career" className="py-20 bg-gray-50 dark:bg-gray-800/50">*/}
            {/*    <div className="max-w-6xl mx-auto px-6">*/}
            {/*        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">*/}
            {/*            Career Journey*/}
            {/*        </h2>*/}
            {/*        <div className="space-y-8">*/}
            {/*            {careers.map((career, idx) => (*/}
            {/*                <Card*/}
            {/*                    key={idx}*/}
            {/*                    className="overflow-hidden group hover:shadow-xl transition-all duration-300 dark:border-gray-700 cursor-pointer"*/}
            {/*                    onClick={() => setSelectedCareer(career)}*/}
            {/*                >*/}
            {/*                    <div className="flex flex-col md:flex-row">*/}
            {/*                        <div className="w-full md:w-1/3 relative overflow-hidden">*/}
            {/*                            <img*/}
            {/*                                src={career.image}*/}
            {/*                                alt={career.title}*/}
            {/*                                className="w-full min-h-full object-contain transition-transform duration-300 group-hover:scale-105"*/}
            {/*                            />*/}
            {/*                            <div*/}
            {/*                                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>*/}
            {/*                        </div>*/}
            {/*                        <CardContent className="p-6 w-full md:w-2/3">*/}
            {/*                            <h3 className="text-2xl font-bold mb-1">{career.title}</h3>*/}
            {/*                            <p className="text-sm text-gray-500 mb-3">{career.period}</p>*/}
            {/*                            <p className="text-gray-600 dark:text-gray-300">{career.description}</p>*/}
            {/*                        </CardContent>*/}
            {/*                    </div>*/}
            {/*                </Card>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Project Modal */}
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent className="max-w-4xl">

                    <div
                        className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-2xl font-bold">{selectedProject?.title}</h2>
                        </div>

                        {/* Quick Links */}
                        <div className="flex gap-4 px-6 py-3 bg-gray-50">
                            <a href={selectedProject?.github}
                               className="flex items-center gap-2 text-gray-600 hover:text-black">
                                <Github className="w-5 h-5"/>
                                <span>GitHub</span>
                            </a>
                            <a href={selectedProject?.youtube}
                               className="flex items-center gap-2 text-gray-600 hover:text-black">
                                {selectedProject?.youtube ? < Youtube className="w-5 h-5"/> : null}
                                {selectedProject?.youtube ? <span>Demo</span> : null}
                            </a>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-3 font-medium ${
                                        activeTab === tab.id
                                            ? 'border-b-2 border-blue-500 text-blue-500'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {activeTab === 'overview' && (
                                <div className="space-y-6">
                                    <section>
                                        <h3 className="text-xl font-semibold mb-3">서비스 소개</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {selectedProject?.introduction}
                                        </p>
                                    </section>

                                    <section>
                                        <h3 className="text-xl font-semibold mb-3">프로젝트 정보</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-gray-700">기간</h4>
                                                <p className="text-gray-600">{selectedProject?.period}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-700">팀 구성</h4>
                                                <p className="text-gray-600">{selectedProject?.member}</p>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )}

                            {activeTab === 'tech' && (
                                <div className="space-y-6">
                                    <section>
                                        <h3 className="text-xl font-semibold mb-3">기술 스택</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="p-4 bg-gray-50 rounded-lg">
                                                <h4 className="font-medium mb-2">Skills</h4>
                                                <ul className="text-gray-600 space-y-1">
                                                    {selectedProject?.skills.map((skill, idx) => (
                                                        <li key={idx}>{skill}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-lg">
                                                <h4 className="font-medium mb-2">Deploy</h4>
                                                <ul className="text-gray-600 space-y-1">
                                                    {selectedProject?.deploys.map((deploy, idx) => (
                                                        <li key={idx}>{deploy}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-lg">
                                                <h4 className="font-medium mb-2">Co-work</h4>
                                                <ul className="text-gray-600 space-y-1">
                                                    {selectedProject?.coWorks.map((coWork, idx) => (
                                                        <li key={idx}>{coWork}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )}

                            {activeTab === 'features' && (
                                <div className="space-y-6">
                                    <section>
                                        <h3 className="text-xl font-semibold mb-3">주요 기능</h3>
                                        <div className="space-y-4">
                                            {selectedProject?.mainFunctions.map((mainFunction, idx) => (
                                                <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                                                    <h4 className="font-medium mb-2">{mainFunction}</h4>
                                                    <p className="text-gray-600">{selectedProject?.mainFunctionDetails[idx]}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            )}

                            {activeTab === 'challenges' && (
                                <div className="space-y-6">
                                    <section>
                                        <h3 className="text-xl font-semibold mb-3">문제 해결</h3>
                                        <div className="space-y-4">
                                            {selectedProject?.challenges.map((challenge, idx) => (
                                                <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                                                    <h4 className="font-medium mb-2">{challenge}</h4>
                                                    <p className="text-gray-600">{selectedProject?.challengeDetails[idx]}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Career Modal */}
            <Dialog open={!!selectedCareer} onOpenChange={() => setSelectedCareer(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">{selectedCareer?.title}</DialogTitle>
                        <p className="text-sm text-gray-500">{selectedCareer?.period}</p>
                    </DialogHeader>
                    <div className="space-y-6">
                        <img
                            src="/api/placeholder/800/400"
                            alt={selectedCareer?.title}
                            className="w-full rounded-lg object-cover"
                        />
                        <div className="space-y-4">
                            <p className="text-gray-600 dark:text-gray-300">{selectedCareer?.description}</p>
                            <div>
                                <h4 className="font-semibold mb-2">주요 책임</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                                    {selectedCareer?.responsibilities.map((responsibility, idx) => (
                                        <li key={idx}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">주요 성과</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                                    {selectedCareer?.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>


            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Location</h3>
                            <p className="flex items-center text-gray-300">
                                <MapPin className="mr-2" size={20}/>
                                경기도 안양시 동안구
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Connect</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/tjddnr9553"
                                    target="_blank"
                                    className="hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/10"
                                >
                                    <GithubIcon size={24}/>
                                </a>
                                <a
                                    href="https://fatalism-developer.tistory.com/"
                                    target="_blank"
                                    className="hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/10"
                                >
                                    <ExternalLink size={24}/>
                                </a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Contact</h3>
                            <p className="flex items-center text-gray-300">
                                <Mail className="mr-2" size={20}/>
                                tjddnr9553@naver.com
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; 2024 차성욱. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
