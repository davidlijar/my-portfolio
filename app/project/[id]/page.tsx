import ProjectCard from '@/components/component/view-project'

export default function Page({ params }: { params: { id: string } }) {
  const id: number = Number(params.id)
  const index: number = id - 1

  const projects = [
    {
      name: 'My Awesome Project',
      tools: 'React, Tailwind CSS, Node.js',
      description:
        'This is a brief description of my awesome project. It does many wonderful things using cutting-edge technology.',
      github: 'https://github.com/username/repository',
      youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      content: (
        <>
          <p>
            React components are the building blocks of any React application.
            They allow you to split the UI into independent, reusable pieces,
            and think about each piece in isolation.
          </p>
          <p>
            This page provides an introduction to the idea of components. You
            can find a detailed component API reference here.
          </p>
          <p>
            Conceptually, components are like JavaScript functions. They accept
            arbitrary inputs (called “props”) and return React elements
            describing what should appear on the screen.
          </p>
          <p className="font-bold">
            Mandalay University of Technology (2017-2020)
            <br />
            Vision College of Jeonju (2023~)
          </p>
        </>
      ),
    },
    {
      name: 'NAMA Real Estate',
      tools: 'Java, JSP, Javascript, Bootstrap',
      description:
        '이 보고서는 Java Server Pages(JSP) 기술을 사용하여 개발한 부동산 웹사이트에 대한 내용입니다. 이 웹사이트는 주택을 구매 또는 임대하고자 하는 잠재적인 구매자와 임차자뿐만 아니라 자신의 부동산을 등록하고자 하는 부동산 소유주 및 부동산 중개업자를 모두 위한 플랫폼입니다',
      github: 'https://github.com/davidlijar/nama-real-estate-jsp.git',
      youtube: 'https://www.youtube.com/embed/jkwaKtZgZDA',
      content: (
        <>
          <h2 className=" text-lg font-bold mt-5">시스템 설계 및 아키텍처</h2>
          <p>
            웹사이트는 JSP를 사용하여 부동산 목록, 사용자 프로필 및 검색 결과에
            대한 웹 페이지를 동적으로 생성합니다. 서블릿은 로그인, 부동산 검색
            및 연락처 양식을 포함하여 사용자 요청과 상호 작용을 처리합니다.
            JDBC는 웹사이트를 관계형 데이터베이스(예: MySQL)에 연결하며, 이
            데이터베이스는 부동산 세부 정보, 사용자 정보 및 경우에 따라
            커뮤니케이션 기록을 저장합니다. 사용자는 HTML 및 CSS 및 Javascript로
            구축된 사용자 친화적인 인터페이스를 통해 웹사이트와 상호 작용합니다.
          </p>
          <h2 className=" text-lg font-bold mt-5">구현 세부 사항</h2>
          <p>
            웹사이트는 Eclipse IDE를 사용하여 개발되었습니다. 프로젝트 디렉토리
            구조는 JSP 페이지, 서블릿 클래스 및 부동산 데이터, 사용자 정보 및
            경우에 따라 커뮤니케이션 세부 정보를 저장하는 데 사용되는 테이블을
            설명하는 데이터베이스 스키마 파일을 위한 별도 폴더로 구성됩니다.
            JDBC는 데이터베이스에 연결하고 이 데이터에 대한 CRUD 작업(Create,
            Read, Update, Delete)을 수행하는 데 사용되었습니다.
          </p>
        </>
      ),
    },
  ]

  return (
    <section>
      <ProjectCard project={projects[`${index}`]} />
    </section>
  )
}
