(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], { 1728: function (e, A, t) { Promise.resolve().then(t.bind(t, 5894)), Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 8504)), Promise.resolve().then(t.t.bind(t, 8707, 23)), Promise.resolve().then(t.bind(t, 3796)), Promise.resolve().then(t.bind(t, 9143)), Promise.resolve().then(t.bind(t, 7310)), Promise.resolve().then(t.bind(t, 5509)) }, 5894: function (e, A, t) { "use strict"; t.r(A), t.d(A, { AutoTypingResume: function () { return m } }); var s = t(9268), i = t(6006), n = t(1799), r = t(9830), a = t(9325), o = t(9467), l = t(169); let c = { profile: { name: "John Doe", summary: "Software engineer obsessed with building exceptional products that people love", email: "hello@openresume.com", phone: "123-456-7890", location: "NYC, NY", url: "linkedin.com/in/john-doe" }, workExperiences: [{ company: "ABC Company", jobTitle: "Software Engineer", date: "May 2023 - Present", descriptions: ["Lead a cross-functional team of 5 engineers in developing a search bar, which enables thousands of daily active users to search content across the entire platform", "Create stunning home page product demo animations that drives up sign up rate by 20%", "Write clean code that is modular and easy to maintain while ensuring 100% test coverage"] }, { company: "DEF Organization", jobTitle: "Software Engineer Intern", date: "Summer 2022", descriptions: ["Re-architected the existing content editor to be mobile responsive that led to a 10% increase in mobile user engagement", "Created a progress bar to help users track progress that drove up user retention by 15%", "Discovered and fixed 5 bugs in the existing codebase to enhance user experience"] }, { company: "XYZ University", jobTitle: "Research Assistant", date: "Summer 2021", descriptions: ["Devised a new NLP algorithm in text classification that results in 10% accuracy increase", "Compiled and presented research findings to a group of 20+ faculty and students"] }], educations: [{ school: "XYZ University", degree: "Bachelor of Science in Computer Science", date: "Sep 2019 - May 2023", gpa: "3.8", descriptions: ["Won 1st place in 2022 Education Hackathon, 2nd place in 2023 Health Tech Competition", "Teaching Assistant for Programming for the Web (2022 - 2023)", "Coursework: Object-Oriented Programming (A+), Programming for the Web (A+), Cloud Computing (A), Introduction to Machine Learning (A-), Algorithms Analysis (A-)"] }], projects: [{ project: "OpenResume", date: "Spring 2023", descriptions: ["Created and launched a free resume builder web app that allows thousands of users to create professional resume easily and land their dream jobs"] }], skills: { featuredSkills: [{ skill: "HTML", rating: 4 }, { skill: "CSS", rating: 4 }, { skill: "Python", rating: 3 }, { skill: "TypeScript", rating: 3 }, { skill: "React", rating: 3 }, { skill: "C++", rating: 2 }], descriptions: ["Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git", "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile"] }, custom: { descriptions: [] } }, d = { profile: (0, l.I)(r.c1), workExperiences: c.workExperiences.map(() => (0, l.I)(r.O3)), educations: [(0, l.I)(r.cS)], projects: [(0, l.I)(r.n_)], skills: { featuredSkills: c.skills.featuredSkills.map(e => ({ skill: "", rating: e.rating })), descriptions: [] }, custom: { descriptions: [] } }; function* u(e, A) { let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, s = 0 === t ? (0, l.I)(e) : e; for (let [e, i] of Object.entries(A)) if ("object" == typeof i) { let A = u(s[e], i, t + 1); for (; ;) { let e = A.next(); if (e.done) break; yield (0, l.I)(s) } } else for (let A = 1; A <= i.length; A++)s[e] = i.slice(0, A), yield (0, l.I)(s) } let g = e => { let A = 0; for (let t of Object.values(e)) "object" == typeof t ? A += g(t) : "string" == typeof t && (A += t.length); return A }; var h = t(5751); let m = () => { let [e, A] = (0, i.useState)((0, l.I)(r.Ml)), t = (0, i.useRef)(u(d, c)), g = (0, i.useRef)(!1), { isLg: m } = (0, h.b)(); return (0, i.useEffect)(() => { let e = setInterval(() => { let e = t.current.next(); for (let A = 0; A < 9; A++)e = t.current.next(); e.done ? g.current || (A(c), g.current = !0) : A(e.value) }, 50); return () => clearInterval(e) }, []), (0, i.useEffect)(() => { let e = setInterval(() => { t.current = u(d, c), g.current = !1 }, 6e4); return () => clearInterval(e) }, []), (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(o.m, { documentSize: "Letter", scale: m ? .7 : .5, children: (0, s.jsx)(n.u, { resume: e, settings: { ...a.DF, fontSize: "12", formToHeading: { workExperiences: e.workExperiences[0].company ? "WORK EXPERIENCE" : "", educations: e.educations[0].school ? "EDUCATION" : "", projects: e.projects[0].project ? "PROJECT" : "", skills: e.skills.featuredSkills[0].skill ? "SKILLS" : "", custom: "CUSTOM SECTION" } } }) }) }) } }, 8504: function (e, A, t) { "use strict"; t.r(A), t.d(A, { Testimonials: function () { return u } }); var s = t(9268), i = { src: "_next/static/media/heart.230f9df5.svg", height: 26, width: 29, blurWidth: 0, blurHeight: 0 }, n = t(6006), r = t(6394), a = t.n(r), o = t(5751); let l = [{ src: { src: "_next/static/media/testimonial-spiegel.be17bb7b.jpg", height: 131, width: 131, blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAIBX/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIDBBEAEkL/2gAIAQEAAT8AgCWqplihtCAOxVz1GjBjDPJ5/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQIAUZH/2gAIAQIBAT8AZBZ2f//EABcRAAMBAAAAAAAAAAAAAAAAAAABAlH/2gAIAQMBAT8Am3iP/9k=", blurWidth: 8, blurHeight: 8 }, quote: "Students often make silly mistakes on their resume by using inconsistent bullet points or font sizes. OpenResume’s auto format feature is a great help to ensure consistent format.", name: "Ms. Spiegel", title: "Educator" }, { src: { src: "_next/static/media/testimonial-santi.32972992.jpg", height: 211, width: 210, blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAiAP/xAAcEAACAgIDAAAAAAAAAAAAAAACAwESAAQRIUH/2gAIAQEAAT8AdrpXpJfIzF3EF++Cr5n/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwCP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQCx/9oACAEDAQE/AFy//9k=", blurWidth: 8, blurHeight: 8 }, quote: "I used OpenResume during my last job search and was invited to interview at top tech companies such as Google and Amazon thanks to its slick yet professional resume design.", name: "Santi", title: "Software Engineer" }, { src: { src: "resume/_next/static/media/testimonial-vivian.29e2a672.jpg", height: 200, width: 200, blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKhNf//EABwQAAICAgMAAAAAAAAAAAAAAAECAwQAEhEhIv/aAAgBAQABPwCNrrwxWxEChRQvvo6Dblhn/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECESEx/9oACAECAQE/AG0myf/EABgRAAIDAAAAAAAAAAAAAAAAAAARAQJB/9oACAEDAQE/ALy1h//Z", blurWidth: 8, blurHeight: 8 }, quote: "Creating a professional resume on OpenResume is so smooth and easy! It saves me so much time and headache to not deal with google doc template.", name: "Vivian", title: "College Student" }], c = ["z-10", "translate-x-44 translate-y-24 opacity-40", "translate-x-32 -translate-y-28 opacity-40"], d = ["z-10", "opacity-0", "opacity-0"], u = e => { let { children: A } = e, [t, r] = (0, n.useState)(c), u = (0, n.useRef)(!1); (0, n.useEffect)(() => { let e = setInterval(() => { u.current || r(e => [e[1], e[2], e[0]]) }, 8e3); return () => clearInterval(e) }, []); let { isLg: g } = (0, o.b)(); return (0, n.useEffect)(() => { r(g ? c : d) }, [g]), (0, s.jsxs)("section", { className: "mx-auto -mt-2 px-8 pb-24", children: [(0, s.jsxs)("h2", { className: "mb-8 text-center text-3xl font-bold", children: ["People", " ", (0, s.jsx)(a(), { src: i, alt: "love", className: "-mt-1 inline-block w-7" }), " ", "OpenResume"] }), (0, s.jsx)("div", { className: "mx-auto mt-10 h-[235px] max-w-lg lg:h-[400px] lg:pt-28", children: (0, s.jsx)("div", { className: "relative lg:ml-[-50px]", children: l.map((e, A) => { let { src: i, quote: n, name: r, title: o } = e, l = t[A]; return (0, s.jsx)("div", { className: "bg-primary absolute max-w-lg rounded-[1.7rem] bg-opacity-30 shadow-md transition-all duration-1000 ease-linear ".concat(l), onMouseEnter: () => { "z-10" === l && (u.current = !0) }, onMouseLeave: () => { "z-10" === l && (u.current = !1) }, children: (0, s.jsxs)("figure", { className: "m-1 flex gap-5 rounded-3xl bg-white p-5 text-gray-900 lg:p-7", children: [(0, s.jsx)(a(), { className: "hidden h-24 w-24 select-none rounded-full lg:block", src: i, alt: "profile" }), (0, s.jsxs)("div", { children: [(0, s.jsx)("blockquote", { children: (0, s.jsx)("p", { className: "before:content-['“'] after:content-['”']", children: n }) }), (0, s.jsxs)("figcaption", { className: "mt-3", children: [(0, s.jsxs)("div", { className: "hidden gap-2 lg:flex", children: [(0, s.jsx)("div", { className: "font-semibold", children: r }), (0, s.jsx)("div", { className: "select-none text-gray-700", "aria-hidden": "true", children: "•" }), (0, s.jsx)("div", { className: "text-gray-600", children: o })] }), (0, s.jsxs)("div", { className: "flex gap-4 lg:hidden", children: [(0, s.jsx)(a(), { className: " block h-12 w-12 select-none rounded-full", src: i, alt: "profile" }), (0, s.jsxs)("div", { children: [(0, s.jsx)("div", { className: "font-semibold", children: r }), (0, s.jsx)("div", { className: "text-gray-600", children: o })] })] })] })] })] }) }, A) }) }) }), A] }) } }, 169: function (e, A, t) { "use strict"; t.d(A, { I: function () { return s } }); let s = e => JSON.parse(JSON.stringify(e)) }, 5751: function (e, A, t) { "use strict"; t.d(A, { b: function () { return r } }); var s, i, n = t(6006); (s = i || (i = {}))[s.sm = 640] = "sm", s[s.md = 768] = "md", s[s.lg = 1024] = "lg", s[s.xl = 1280] = "xl", s[s["2xl"] = 1536] = "2xl"; let r = () => { let [e, A] = (0, n.useState)(!1), [t, s] = (0, n.useState)(!1), [i, r] = (0, n.useState)(!1), [a, o] = (0, n.useState)(!1), [l, c] = (0, n.useState)(!1); return (0, n.useEffect)(() => { let e = () => { let e = window.innerWidth; A(e >= 640), s(e >= 768), r(e >= 1024), o(e >= 1280), c(e >= 1536) }; return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e) }, []), { isSm: e, isMd: t, isLg: i, isXl: a, is2xl: l } } }, 3796: function (e, A, t) { "use strict"; t.r(A), A.default = { src: "_next/static/media/feature-free.9fe18a07.svg", height: 50, width: 50, blurWidth: 0, blurHeight: 0 } }, 9143: function (e, A, t) { "use strict"; t.r(A), A.default = { src: "_next/static/media/feature-open-source.24734e30.svg", height: 50, width: 51, blurWidth: 0, blurHeight: 0 } }, 7310: function (e, A, t) { "use strict"; t.r(A), A.default = { src: "_next/static/media/feature-privacy.3d88b506.svg", height: 50, width: 50, blurWidth: 0, blurHeight: 0 } }, 5509: function (e, A, t) { "use strict"; t.r(A), A.default = { src: "_next/static/media/feature-us.94e3fa86.svg", height: 51, width: 50, blurWidth: 0, blurHeight: 0 } } }, function (e) { e.O(0, [417, 943, 668, 97, 640, 394, 920, 497, 430, 667, 488, 744], function () { return e(e.s = 1728) }), _N_E = e.O() }]);